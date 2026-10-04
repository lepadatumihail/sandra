import Link from 'next/link';
import { GuideBook } from '@/components/GuideBook';
import { TrackedDownloadLink } from '@/components/TrackedDownloadLink';
import type { Locale } from '@/lib/checkout';
import { guideHref, guides } from '@/lib/guides';

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    intro: string;
    pages: (pages: number) => string;
    download: string;
    view: string;
  }
> = {
  en: {
    eyebrow: 'Free Bible Guides',
    headingLead: 'According to the',
    headingAccent: 'Bible',
    intro:
      'Four free guides that bring Scripture into the decisions that shape a life: who you become, who you choose and how you raise your children.',
    pages: (pages) => `${pages} pages · PDF`,
    download: 'Download PDF',
    view: 'See the guide',
  },
  es: {
    eyebrow: 'Guías Bíblicas Gratis',
    headingLead: 'Según la',
    headingAccent: 'Biblia',
    intro:
      'Cuatro guías gratuitas que llevan la Escritura a las decisiones que marcan una vida: en quién te conviertes, a quién eliges y cómo crías a tus hijos.',
    pages: (pages) => `${pages} páginas · PDF`,
    download: 'Descargar PDF',
    view: 'Ver la guía',
  },
};

export function BibleGuidesSection({
  locale,
  isPageHeading = false,
}: {
  locale: Locale;
  // On the guides hub this section is the page itself: it carries the h1 and
  // clears the fixed nav.
  isPageHeading?: boolean;
}) {
  const copy = COPY[locale];
  const Heading = isPageHeading ? 'h1' : 'h2';
  const CardHeading = isPageHeading ? 'h2' : 'h3';

  return (
    <section
      id='bible-guides'
      className={`relative overflow-hidden bg-burgundy-deep ${isPageHeading ? 'pt-32 pb-24 sm:pt-40' : 'py-24'}`}
    >
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(174,138,134,0.2),transparent_60%)]' />

      <div className='relative max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <p className='text-blush/80 text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
            {copy.eyebrow}
          </p>
          <Heading className='font-serif text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-cream'>
            {copy.headingLead} <span className='italic text-blush'>{copy.headingAccent}</span>
          </Heading>
          <p className='mt-6 font-sans text-cream/70 text-lg sm:text-xl leading-relaxed font-light max-w-2xl mx-auto'>
            {copy.intro}
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-16'>
          {guides.map((guide) => {
            const guideCopy = guide[locale];
            const href = guideHref(guide, locale);

            return (
              <article
                key={guide.id}
                data-guide-theme={guide.theme}
                className='group flex sm:flex-col items-center gap-6 sm:gap-8 sm:text-center'
              >
                <Link
                  href={href}
                  tabIndex={-1}
                  aria-hidden='true'
                  className='w-28 sm:w-40 lg:w-44 shrink-0 transition-transform duration-500 group-hover:-translate-y-1'
                >
                  <GuideBook
                    src={guideCopy.cover}
                    alt=''
                    sizes='(max-width: 640px) 112px, 176px'
                    eager={isPageHeading}
                    className='drop-shadow-[0_25px_30px_rgba(0,0,0,0.5)]'
                  />
                </Link>

                <div className='min-w-0 flex-1 flex flex-col sm:items-center'>
                  <p className='text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-guide-accent/70'>
                    {guideCopy.audience}
                  </p>
                  <CardHeading className='mt-2 font-serif text-xl sm:text-2xl leading-snug text-cream text-pretty'>
                    <Link
                      href={href}
                      className='hover:text-guide-accent transition-colors'
                    >
                      {guideCopy.titleLead}{' '}
                      <span className='italic text-guide-accent'>
                        {guideCopy.titleAccent}
                      </span>
                    </Link>
                  </CardHeading>
                  <p className='mt-2 text-[10px] uppercase tracking-wider font-sans text-cream/40'>
                    {copy.pages(guideCopy.pages)}
                  </p>

                  <div className='mt-5 sm:mt-auto sm:pt-5 flex flex-col items-start sm:items-center gap-3'>
                    <TrackedDownloadLink
                      href={guideCopy.pdf}
                      downloadName={guideCopy.downloadName}
                      guide={guide.id}
                      locale={locale}
                      location={isPageHeading ? 'hub' : 'home'}
                      className='inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-sans font-semibold uppercase tracking-[0.15em] border border-guide-accent/40 text-cream hover:bg-guide-accent hover:text-guide-deep transition-colors duration-300 rounded-sm'
                    >
                      <span>{copy.download}</span>
                      <span aria-hidden='true'>&darr;</span>
                    </TrackedDownloadLink>
                    <Link
                      href={href}
                      className='text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-cream/60 hover:text-cream transition-colors'
                    >
                      {copy.view} <span aria-hidden='true'>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
