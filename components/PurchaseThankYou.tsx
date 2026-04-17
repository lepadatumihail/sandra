'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';

type Locale = 'en' | 'es';

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    heading: string;
    body: string;
    backHref: string;
    backLabel: string;
  }
> = {
  en: {
    eyebrow: 'Payment received',
    heading: 'Your book is on its way.',
    body: "Check your email — and your spam folder, just in case. The PDF is attached. Save it somewhere you'll come back to.",
    backHref: '/',
    backLabel: 'Back home',
  },
  es: {
    eyebrow: 'Pago recibido',
    heading: 'Tu libro está en camino.',
    body: 'Revisa tu correo — y la carpeta de spam, por si acaso. El PDF está adjunto. Guárdalo en un lugar al que vayas a volver.',
    backHref: '/es',
    backLabel: 'Volver al inicio',
  },
};

export function PurchaseThankYou({ locale }: { locale: Locale }) {
  useEffect(() => {
    track('purchase_completed', { locale });
  }, [locale]);

  const copy = COPY[locale];

  return (
    <main className='min-h-screen bg-cream flex items-center justify-center px-6 py-24'>
      <div className='max-w-xl text-center'>
        <p className='text-rose text-xs sm:text-sm uppercase tracking-[0.35em] font-sans font-medium mb-6'>
          {copy.eyebrow}
        </p>
        <h1 className='font-serif text-5xl sm:text-6xl text-burgundy italic leading-[1.05] tracking-tight'>
          {copy.heading}
        </h1>
        <p className='mt-8 font-sans text-charcoal/70 text-lg leading-relaxed font-light'>
          {copy.body}
        </p>
        <p className='mt-6 font-serif italic text-burgundy/70'>— Sandra</p>
        <div className='mt-12'>
          <Link
            href={copy.backHref}
            className='inline-flex items-center gap-2 px-6 py-3 border border-burgundy/30 text-burgundy text-xs uppercase tracking-[0.2em] font-sans font-semibold hover:bg-burgundy hover:text-cream transition-colors'
          >
            {copy.backLabel}
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
