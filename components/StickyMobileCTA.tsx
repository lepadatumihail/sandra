'use client';

import { useState, useEffect } from 'react';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 md:hidden animate-fade-in-up'>
      <div className='bg-cream border-t border-blush/30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] px-4 py-4'>
        <a
          href='#'
          className='w-full flex items-center justify-center px-6 py-4 text-xs font-sans font-semibold uppercase tracking-[0.2em] text-cream bg-burgundy shadow-lg active:scale-[0.98] transition-transform'
        >
          <span>Yes, I'm Ready</span>
          <span className='ml-2'>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
