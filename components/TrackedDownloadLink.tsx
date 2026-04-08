'use client';

import { track } from '@vercel/analytics';

export function TrackedDownloadLink({
  href,
  downloadName,
  guide,
  locale = 'en',
  children,
  className,
}: {
  href: string;
  downloadName: string;
  guide: 'module1' | 'feminine_cycle' | 'glow_up';
  locale?: 'en' | 'es';
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a
      href={href}
      download={downloadName}
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => track('free_guide_download', { guide, locale })}
      className={className}
    >
      {children}
    </a>
  );
}
