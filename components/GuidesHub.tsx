import Link from 'next/link';
import { BibleGuidesSection } from '@/components/BibleGuidesSection';
import { JsonLd } from '@/components/JsonLd';
import { SiteNav } from '@/components/SiteNav';
import type { Locale } from '@/lib/checkout';
import { GUIDES_HUB_PATH, navGuides } from '@/lib/guides';
import { HOME_PATH } from '@/lib/site';
import { guidesHubJsonLd } from '@/lib/structured-data';

const COPY: Record<
  Locale,
  {
    moreHeading: string;
    moreBody: string;
    moreLink: string;
    tagline: string;
    rights: string;
  }
> = {
  en: {
    moreHeading: 'More free guides',
    moreBody:
      'Module 1: Identity Reset, the Feminine Cycle Decision System and the Glow Up Guide.',
    moreLink: 'See the free guides',
    tagline: 'A Proven Method to Unlock Your Potential',
    rights: 'All rights reserved.',
  },
  es: {
    moreHeading: 'Más guías gratuitas',
    moreBody:
      'Módulo 1: Reinicio de Identidad, el Sistema de Decisiones del Ciclo Femenino y la Guía Glow Up.',
    moreLink: 'Ver las guías gratis',
    tagline: 'Un Método Probado para Desbloquear Tu Potencial',
    rights: 'Todos los derechos reservados.',
  },
};

// The index of every free guide, at /guides and /es/guias.
export function GuidesHub({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';

  return (
    <main>
      <JsonLd data={guidesHubJsonLd(locale)} />
      <SiteNav
        locale={locale}
        alternateHref={GUIDES_HUB_PATH[otherLocale]}
        guides={navGuides(locale)}
      />

      <BibleGuidesSection locale={locale} isPageHeading />

      {/* ── Becoming Her free guides (on the home page) ── */}
      <section className='bg-cream py-20 sm:py-24'>
        <div className='max-w-2xl mx-auto px-6 text-center'>
          <p className='text-rose text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
            Becoming Her Method&trade;
          </p>
          <h2 className='font-serif text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-burgundy'>
            {copy.moreHeading}
          </h2>
          <p className='mt-6 font-sans text-charcoal/60 text-lg sm:text-xl leading-relaxed font-light'>
            {copy.moreBody}
          </p>
          <Link
            href={`${HOME_PATH[locale]}#free-guides`}
            className='mt-10 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.15em] border-2 border-burgundy/30 text-burgundy hover:bg-burgundy hover:text-cream transition-colors duration-300 rounded-sm'
          >
            {copy.moreLink}
            <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className='bg-burgundy-deep py-12'>
        <div className='max-w-2xl mx-auto px-6 text-center'>
          <p className='font-serif text-2xl text-cream italic mb-6'>
            Sandra Torres
          </p>
          <p className='font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-8'>
            {copy.tagline}
          </p>
          <div className='flex justify-center gap-6 mb-8 text-cream/60 text-sm'>
            <Link
              href={GUIDES_HUB_PATH.en}
              hrefLang='en'
              className={`${locale === 'en' ? 'text-cream' : ''} hover:text-cream transition-colors`}
            >
              EN
            </Link>
            <span>|</span>
            <Link
              href={GUIDES_HUB_PATH.es}
              hrefLang='es'
              className={`${locale === 'es' ? 'text-cream' : ''} hover:text-cream transition-colors`}
            >
              ES
            </Link>
          </div>
          <p className='font-sans text-[11px] text-cream/20'>
            &copy; {new Date().getFullYear()} Becoming Her Method™. {copy.rights}
          </p>
        </div>
      </footer>
    </main>
  );
}
