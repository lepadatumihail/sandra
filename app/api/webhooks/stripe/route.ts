import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { getResend } from '@/lib/resend';
import { buildPurchaseEmail } from '@/lib/emails/purchase';

export const runtime = 'nodejs';
export const maxDuration = 15;

const FROM_ADDRESS =
  process.env.PURCHASE_EMAIL_FROM ?? 'Sandra Torres <hello@torresmethod.com>';

function pdfUrlFor(locale: 'en' | 'es'): string | undefined {
  return locale === 'es'
    ? process.env.PDF_FULL_BOOK_ES_URL
    : process.env.PDF_FULL_BOOK_EN_URL;
}

export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return new NextResponse('Missing stripe-signature header', { status: 400 });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[webhooks/stripe] STRIPE_WEBHOOK_SECRET not configured');
    return new NextResponse('Webhook secret not configured', { status: 500 });
  }

  const rawBody = await req.text();

  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown';
    console.error('[webhooks/stripe] signature verification failed', message);
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email ?? session.customer_email;
    const locale: 'en' | 'es' =
      session.metadata?.locale === 'es' ? 'es' : 'en';

    if (!email) {
      console.error('[webhooks/stripe] no email on session', session.id);
      return NextResponse.json({ received: true });
    }

    const pdfUrl = pdfUrlFor(locale);
    if (!pdfUrl) {
      console.error('[webhooks/stripe] PDF URL not configured for locale', locale);
      throw new Error('pdf_url_missing');
    }

    const pdfRes = await fetch(pdfUrl);
    if (!pdfRes.ok) {
      console.error(
        '[webhooks/stripe] failed to fetch PDF',
        pdfRes.status,
        pdfUrl,
      );
      throw new Error('pdf_fetch_failed');
    }
    const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());

    const { subject, html, text, attachmentFilename } =
      buildPurchaseEmail(locale);

    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject,
      html,
      text,
      attachments: [
        {
          filename: attachmentFilename,
          content: pdfBuffer,
        },
      ],
      headers: { 'X-Entity-Ref-ID': session.id },
    });

    if (error) {
      console.error('[webhooks/stripe] resend send failed', error);
      throw new Error('email_send_failed');
    }

    console.log(
      '[webhooks/stripe] sent book to',
      email,
      'locale=',
      locale,
      'session=',
      session.id,
    );
  }

  return NextResponse.json({ received: true });
}
