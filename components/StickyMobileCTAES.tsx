'use client';

import { useState, useEffect } from 'react';

export function StickyMobileCTAES() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 md:hidden animate-fade-in-up'>
      <div className='bg-cream border-t border-blush/30 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] px-4 pt-5 pb-5 relative'>
        <button
          onClick={() => setIsDismissed(true)}
          className='absolute -top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-burgundy-deep text-cream/80 shadow-md hover:text-cream transition-colors'
          aria-label='Cerrar'
        >
          <svg
            className='w-3.5 h-3.5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <p className='text-center font-serif italic text-2xl text-burgundy mb-1.5'>
          Aprende a moverte y actuar seg&uacute;n tu ciclo
        </p>
        <p className='text-center text-[10px] text-charcoal/50 uppercase tracking-widest font-sans mb-3'>
          Descarga gratuita &bull; Acceso instant&aacute;neo
        </p>

        <a
          href='/BECOMING%20HER%20(2).pdf'
          download='Becoming_Her_Feminine_Cycle_Decision_System.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='w-full flex items-center justify-center px-4 py-3.5 text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-widest sm:tracking-[0.15em] text-cream bg-burgundy shadow-lg active:scale-[0.98] transition-transform text-center rounded-sm'
        >
          <span>Descargar Gu&iacute;a Gratis</span>
          <span className='ml-2 shrink-0'>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
