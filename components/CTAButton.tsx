'use client';

import { track } from '@vercel/analytics';

const FULL_BOOK_EN = {
  href: '/becoming-her-english-full-book.pdf',
  downloadName: 'Becoming_Her_Method_Full_Book.pdf',
} as const;

const FULL_BOOK_ES = {
  href: '/becoming-her-spanish.pdf',
  downloadName: 'Becoming_Her_Method_Libro_Completo.pdf',
} as const;

export function CTAButton({
  className = '',
  text = 'Start Becoming Her',
  location,
  locale = 'en',
}: {
  className?: string;
  text?: string;
  location: 'hero' | 'turning_point';
  locale?: 'en' | 'es';
}) {
  const book = locale === 'es' ? FULL_BOOK_ES : FULL_BOOK_EN;

  return (
    <a
      href={book.href}
      download={book.downloadName}
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => track('cta_click', { location, locale })}
      className={`
        group relative inline-flex items-center justify-center
        px-8 sm:px-10 py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]
        text-burgundy bg-cream shadow-lg
        transition-all duration-500 ease-out
        hover:bg-white hover:shadow-xl hover:-translate-y-0.5
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream
        ${className}
      `}
    >
      <span className='relative z-10 text-center'>{text}</span>
      <span className='ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1 shrink-0'>
        &rarr;
      </span>
    </a>
  );
}
