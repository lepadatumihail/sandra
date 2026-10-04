import type { Locale } from '@/lib/checkout';

/** The developer credit under every footer, linked in the visitor's language. */
const CREDIT: Record<Locale, { lead: string; href: string }> = {
  en: { lead: 'Website by', href: 'https://lepadatu.dev' },
  es: { lead: 'Web creada por', href: 'https://lepadatu.dev/es' },
};

export function SiteCredit({ locale }: { locale: Locale }) {
  const { lead, href } = CREDIT[locale];

  return (
    <p className='mt-3 font-sans text-[11px] text-cream/30'>
      {lead}{' '}
      <a
        href={href}
        target='_blank'
        rel='noopener'
        className='text-cream/50 hover:text-cream transition-colors'
      >
        lepadatu.dev
      </a>
    </p>
  );
}
