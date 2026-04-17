'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import { startCheckout, type Locale } from '@/lib/checkout';

type Location = 'hero' | 'turning_point';

const FINE_PRINT: Record<Locale, string> = {
  en: '$19 USD · Digital download · No refunds',
  es: '$19 USD · Descarga digital · Sin reembolsos',
};

const LOADING_LABEL: Record<Locale, string> = {
  en: 'Redirecting…',
  es: 'Redirigiendo…',
};

const ERROR_COPY: Record<Locale, string> = {
  en: 'Something went wrong. Please try again.',
  es: 'Algo salió mal. Por favor intenta de nuevo.',
};

const FINE_PRINT_TONE: Record<Location, string> = {
  hero: 'text-cream/60',
  turning_point: 'text-charcoal/50',
};

const ERROR_TONE: Record<Location, string> = {
  hero: 'text-rose',
  turning_point: 'text-red-600',
};

export function CTAButton({
  className = '',
  text = 'Start Becoming Her',
  location,
  locale = 'en',
}: {
  className?: string;
  text?: string;
  location: Location;
  locale?: Locale;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setError(false);
    setLoading(true);
    track('cta_click', { location, locale });
    track('checkout_started', { location, locale });
    try {
      await startCheckout(locale);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
        className={`
          group relative inline-flex items-center justify-center
          px-8 sm:px-10 py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]
          text-burgundy bg-cream shadow-lg
          transition-all duration-500 ease-out
          hover:bg-white hover:shadow-xl hover:-translate-y-0.5
          focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream
          disabled:opacity-80 disabled:cursor-wait disabled:hover:translate-y-0
          ${className}
        `}
      >
        <span className='relative z-10 text-center'>
          {loading ? LOADING_LABEL[locale] : text}
        </span>
        <span className='ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1 shrink-0'>
          &rarr;
        </span>
      </button>
      <p
        className={`mt-3 text-[10px] sm:text-[11px] font-sans tracking-wider uppercase ${FINE_PRINT_TONE[location]}`}
      >
        {FINE_PRINT[locale]}
      </p>
      {error && (
        <p
          className={`mt-2 text-xs font-sans ${ERROR_TONE[location]}`}
          role='alert'
        >
          {ERROR_COPY[locale]}
        </p>
      )}
    </>
  );
}
