'use client';

import { track } from '@vercel/analytics';
import type { GuideId } from '@/lib/guides';

export function TrackedDownloadLink({
  href,
  downloadName,
  guide,
  locale = 'en',
  location,
  children,
  className,
}: {
  href: string;
  downloadName: string;
  guide: 'module1' | 'feminine_cycle' | 'glow_up' | GuideId;
  locale?: 'en' | 'es';
  location?: 'hero' | 'inside' | 'closing' | 'sticky' | 'home';
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a
      href={href}
      download={downloadName}
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => track('free_guide_download', { guide, locale, location })}
      className={className}
    >
      {children}
    </a>
  );
}
