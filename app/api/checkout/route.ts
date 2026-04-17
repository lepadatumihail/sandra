import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';

const DEFAULT_ORIGIN = 'https://www.torresmethod.com';

export async function POST(req: Request) {
  let locale: 'en' | 'es' = 'en';
  try {
    const body = (await req.json()) as { locale?: string };
    if (body?.locale === 'es') locale = 'es';
  } catch {
    // ignore — default to en
  }

  const priceId = process.env.STRIPE_PRICE_ID;
  if (!priceId) {
    return NextResponse.json(
      { error: 'STRIPE_PRICE_ID is not configured' },
      { status: 500 },
    );
  }

  const origin = req.headers.get('origin') ?? DEFAULT_ORIGIN;
  const successPath = locale === 'es' ? '/es/gracias' : '/thank-you';
  const cancelPath = locale === 'es' ? '/es' : '/';

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { locale, product: 'full_book' },
      payment_intent_data: { metadata: { locale, product: 'full_book' } },
      locale: locale === 'es' ? 'es' : 'en',
      success_url: `${origin}${successPath}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${cancelPath}`,
      allow_promotion_codes: true,
      customer_creation: 'if_required',
    });

    if (!session.url) {
      return NextResponse.json({ error: 'no_url' }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[checkout] failed to create session', err);
    return NextResponse.json(
      { error: 'checkout_failed' },
      { status: 500 },
    );
  }
}
