'use client';

import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';
import { TrackedDownloadLink } from '@/components/TrackedDownloadLink';
import type { Locale } from '@/lib/checkout';
import type { GuideId } from '@/lib/guides';

// Mobile-only download bar. It stays out of the way while any element marked
// `data-hide-sticky-cta` (the page's own download buttons, the footer) is on screen.
export function StickyGuideCTA({
  guide,
  locale,
  href,
  downloadName,
  title,
  detail,
  label,
  closeLabel,
}: {
  guide: GuideId;
  locale: Locale;
  href: string;
  downloadName: string;
  title: string;
  detail: string;
  label: string;
  closeLabel: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setIsVisible(onScreen.size === 0);
    });

    document
      .querySelectorAll('[data-hide-sticky-cta]')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 md:hidden animate-fade-in-up'>
      <div className='flex items-center gap-2 bg-cream border-t border-guide-ink/15 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] pl-2 pr-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]'>
        <button
          type='button'
          onClick={() => {
            setIsDismissed(true);
            track('sticky_cta_dismiss', { locale, guide });
          }}
          className='w-10 h-10 shrink-0 flex items-center justify-center rounded-full text-charcoal/40 hover:text-charcoal/70 transition-colors'
          aria-label={closeLabel}
        >
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <div className='min-w-0 flex-1'>
          <p className='font-serif italic text-lg leading-tight text-guide-ink truncate'>
            {title}
          </p>
          <p className='mt-0.5 text-[10px] uppercase tracking-widest text-charcoal/50 font-sans truncate'>
            {detail}
          </p>
        </div>

        <TrackedDownloadLink
          href={href}
          downloadName={downloadName}
          guide={guide}
          locale={locale}
          location='sticky'
          className='shrink-0 inline-flex items-center gap-2 px-4 py-3 text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-cream bg-guide-ink rounded-sm shadow-lg active:scale-[0.98] transition-transform'
        >
          <span>{label}</span>
          <span aria-hidden='true'>&darr;</span>
        </TrackedDownloadLink>
      </div>
    </div>
  );
}
