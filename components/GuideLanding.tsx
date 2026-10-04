import Link from 'next/link';
import { GuideBook } from '@/components/GuideBook';
import { SiteNav } from '@/components/SiteNav';
import { StickyGuideCTA } from '@/components/StickyGuideCTA';
import { TrackedDownloadLink } from '@/components/TrackedDownloadLink';
import type { Locale } from '@/lib/checkout';
import {
  SERIES,
  guideHref,
  guides,
  navGuides,
  type Guide,
} from '@/lib/guides';

const UI: Record<
  Locale,
  {
    freeGuide: string;
    download: string;
    downloadShort: string;
    details: (pages: number) => string;
    inside: string;
    alsoInside: string;
    moreHeading: string;
    view: string;
    coverOf: string;
    close: string;
    quoteOpen: string;
    quoteClose: string;
    tagline: string;
    rights: string;
  }
> = {
  en: {
    freeGuide: 'Free guide',
    download: 'Download Free PDF',
    downloadShort: 'Download',
    details: (pages) => `${pages} pages · PDF · No sign-up`,
    inside: 'Inside the guide',
    alsoInside: 'Also inside',
    moreHeading: 'More free guides',
    view: 'See the guide',
    coverOf: 'Cover of',
    close: 'Close',
    quoteOpen: '“',
    quoteClose: '”',
    tagline: 'A Proven Method to Unlock Your Potential',
    rights: 'All rights reserved.',
  },
  es: {
    freeGuide: 'Guía gratuita',
    download: 'Descargar PDF Gratis',
    downloadShort: 'Descargar',
    details: (pages) => `${pages} páginas · PDF · Sin registro`,
    inside: 'Dentro de la guía',
    alsoInside: 'También incluye',
    moreHeading: 'Más guías gratuitas',
    view: 'Ver la guía',
    coverOf: 'Portada de',
    close: 'Cerrar',
    quoteOpen: '«',
    quoteClose: '»',
    tagline: 'Un Método Probado para Desbloquear Tu Potencial',
    rights: 'Todos los derechos reservados.',
  },
};

// The thin cross from the PDF covers, used as a quiet section mark.
function Cross({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 20 40'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      aria-hidden='true'
      className={className}
    >
      <path d='M10 0v40M0 11h20' />
    </svg>
  );
}

function DownloadButton({
  guide,
  locale,
  location,
  variant,
}: {
  guide: Guide;
  locale: Locale;
  location: 'hero' | 'inside' | 'closing';
  variant: 'light' | 'card';
}) {
  const copy = guide[locale];

  return (
    <TrackedDownloadLink
      href={copy.pdf}
      downloadName={copy.downloadName}
      guide={guide.id}
      locale={locale}
      location={location}
      className={`
        group inline-flex items-center justify-center gap-3
        py-4 font-sans font-semibold uppercase
        shadow-lg transition-all duration-500 ease-out
        hover:shadow-xl hover:-translate-y-0.5
        focus-visible:outline-2 focus-visible:outline-offset-4
        ${
          variant === 'light'
            ? 'px-8 sm:px-10 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] bg-cream text-guide-ink hover:bg-white focus-visible:outline-cream'
            : 'w-full px-6 text-xs tracking-[0.15em] bg-guide-ink text-cream hover:bg-guide-deep focus-visible:outline-guide-ink'
        }
      `}
    >
      <span>{UI[locale].download}</span>
      <span
        aria-hidden='true'
        className='transition-transform duration-300 group-hover:translate-y-0.5'
      >
        &darr;
      </span>
    </TrackedDownloadLink>
  );
}

export function GuideLanding({
  guide,
  locale,
}: {
  guide: Guide;
  locale: Locale;
}) {
  const copy = guide[locale];
  const ui = UI[locale];
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  const title = `${copy.titleLead} ${copy.titleAccent}`;
  const details = ui.details(copy.pages);
  const otherGuides = guides.filter((g) => g.id !== guide.id);

  return (
    <main lang={locale} data-guide-theme={guide.theme} className='bg-cream'>
      <SiteNav
        locale={locale}
        alternateHref={guideHref(guide, otherLocale)}
        guides={navGuides(locale)}
      />
      {/* ── Hero ── */}
      <section className='relative overflow-hidden bg-guide-deep'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,var(--guide-ink),transparent_65%)] opacity-70' />

        <div className='relative max-w-6xl mx-auto px-6 pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-32 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-16 lg:gap-24 items-center'>
          <div className='text-center lg:text-left'>
            <p className='animate-fade-in-up text-guide-accent/80 text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-medium mb-8 text-balance'>
              {ui.freeGuide} &middot; {copy.audience}
            </p>

            <h1 className='animate-fade-in-up animate-delay-100 font-serif font-medium text-cream tracking-tight'>
              <span className='block text-3xl sm:text-4xl lg:text-5xl leading-tight'>
                {copy.titleLead}
              </span>{' '}
              <span
                className={`block italic text-guide-accent leading-[1.02] text-balance pb-2 ${
                  copy.titleAccent.length > 9
                    ? 'text-5xl sm:text-6xl lg:text-7xl'
                    : 'text-6xl sm:text-7xl lg:text-8xl'
                }`}
              >
                {copy.titleAccent}
              </span>{' '}
              <span className='mt-6 flex items-center justify-center lg:justify-start gap-4 font-sans text-[11px] sm:text-xs uppercase tracking-[0.35em] font-medium text-cream/60'>
                <span className='h-px w-8 bg-cream/30' />
                {SERIES[locale]}
                <span className='h-px w-8 bg-cream/30 lg:hidden' />
              </span>
            </h1>

            <p className='animate-fade-in-up animate-delay-200 mt-8 text-cream/80 font-sans text-lg sm:text-xl leading-relaxed font-light max-w-xl mx-auto lg:mx-0 text-pretty'>
              {copy.intro}
            </p>

            <div
              data-hide-sticky-cta
              className='animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center lg:items-start'
            >
              <DownloadButton
                guide={guide}
                locale={locale}
                location='hero'
                variant='light'
              />
              <p className='mt-3 text-[10px] sm:text-[11px] font-sans tracking-wider uppercase text-cream/50'>
                {details}
              </p>
            </div>
          </div>

          <div className='animate-fade-in-up animate-delay-400 flex justify-center'>
            <GuideBook
              src={copy.cover}
              alt={`${ui.coverOf} ${title}`}
              sizes='(max-width: 640px) 240px, (max-width: 1024px) 300px, 360px'
              eager
              className='w-60 sm:w-72 lg:w-[360px] drop-shadow-[0_40px_50px_rgba(0,0,0,0.55)]'
            />
          </div>
        </div>
      </section>

      {/* ── Anchor verse ── */}
      <section className='bg-cream py-20 sm:py-28'>
        <figure className='max-w-4xl mx-auto px-6 text-center'>
          <Cross className='mx-auto h-10 w-5 text-guide-muted/60' />
          <blockquote className='mt-10 font-serif italic text-guide-ink text-3xl sm:text-4xl lg:text-5xl leading-snug text-balance'>
            {ui.quoteOpen}
            {copy.quote.text}
            {ui.quoteClose}
          </blockquote>
          <figcaption className='mt-8 text-guide-muted text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-semibold'>
            {copy.quote.cite}
          </figcaption>
        </figure>
      </section>

      {/* ── Inside the guide ── */}
      <section className='bg-ivory py-20 sm:py-28'>
        <div className='max-w-6xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14 lg:gap-16 items-start'>
          <div>
            <p className='text-guide-muted text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
              {ui.inside} &middot; {copy.contentsCount}
            </p>
            <h2 className='font-serif text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-guide-ink'>
              {copy.contentsHeading}
            </h2>
            <p className='mt-6 font-sans text-charcoal/70 text-lg leading-relaxed font-light max-w-2xl'>
              {copy.howTo}
            </p>

            <ol className='mt-12 grid sm:grid-cols-2 gap-x-10 border-t border-guide-ink/10'>
              {copy.contents.map((item, i) => (
                <li
                  key={item.title}
                  className='flex gap-5 py-5 border-b border-guide-ink/10'
                >
                  <span className='w-8 shrink-0 font-serif text-xl text-guide-muted tabular-nums leading-snug'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className='font-serif text-lg sm:text-xl text-guide-ink leading-snug'>
                      {item.title}
                    </p>
                    {item.note && (
                      <p className='mt-1 font-sans text-charcoal/60 text-sm sm:text-base leading-relaxed font-light'>
                        {item.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className='lg:sticky lg:top-8 bg-white rounded-2xl border border-guide-ink/10 shadow-sm p-8'>
            <div className='flex gap-5 items-center'>
              <GuideBook
                src={copy.cover}
                alt=''
                sizes='80px'
                className='w-20 shrink-0 drop-shadow-md'
              />
              <div>
                <p className='text-guide-muted text-[11px] uppercase tracking-[0.25em] font-sans font-bold'>
                  {ui.freeGuide}
                </p>
                <p className='mt-2 font-serif text-2xl text-guide-ink leading-tight'>
                  {copy.titleLead}{' '}
                  <span className='italic'>{copy.titleAccent}</span>
                </p>
              </div>
            </div>

            <p className='mt-8 text-guide-muted text-xs uppercase tracking-[0.25em] font-sans font-bold'>
              {ui.alsoInside}
            </p>
            <ul className='mt-4 space-y-3'>
              {copy.extras.map((extra) => (
                <li key={extra} className='flex gap-3 items-start'>
                  <span className='mt-2.5 block w-1.5 h-1.5 rounded-full bg-guide-muted shrink-0' />
                  <span className='font-sans text-charcoal/75 leading-relaxed font-light'>
                    {extra}
                  </span>
                </li>
              ))}
            </ul>

            <div
              data-hide-sticky-cta
              className='mt-8 flex flex-col items-stretch text-center'
            >
              <DownloadButton
                guide={guide}
                locale={locale}
                location='inside'
                variant='card'
              />
              <p className='mt-3 text-[10px] sm:text-[11px] font-sans tracking-wider uppercase text-charcoal/50'>
                {details}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className='relative overflow-hidden bg-guide-deep py-24 sm:py-32'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--guide-ink),transparent_70%)] opacity-60' />
        <div className='relative max-w-3xl mx-auto px-6 text-center'>
          <Cross className='mx-auto h-12 w-6 text-guide-accent/60' />
          <h2 className='mt-10 font-serif italic font-medium text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-balance'>
            {copy.closing}
          </h2>
          <div
            data-hide-sticky-cta
            className='mt-12 flex flex-col items-center'
          >
            <DownloadButton
              guide={guide}
              locale={locale}
              location='closing'
              variant='light'
            />
            <p className='mt-3 text-[10px] sm:text-[11px] font-sans tracking-wider uppercase text-cream/50'>
              {details}
            </p>
          </div>
        </div>
      </section>

      {/* ── More guides ── */}
      <section className='bg-cream py-20 sm:py-24'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <p className='text-guide-muted text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-bold mb-4'>
              {SERIES[locale]}
            </p>
            <h2 className='font-serif text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-guide-ink'>
              {ui.moreHeading}
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {otherGuides.map((other) => {
              const otherCopy = other[locale];
              return (
                <Link
                  key={other.id}
                  href={guideHref(other, locale)}
                  data-guide-theme={other.theme}
                  className='group flex gap-5 items-center bg-white rounded-2xl border border-blush/20 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow'
                >
                  <GuideBook
                    src={otherCopy.cover}
                    alt=''
                    sizes='96px'
                    className='w-24 shrink-0 drop-shadow-md transition-transform duration-500 group-hover:-translate-y-1'
                  />
                  <div className='min-w-0'>
                    <p className='text-guide-muted text-[11px] uppercase tracking-[0.2em] font-sans font-bold'>
                      {otherCopy.audience}
                    </p>
                    <h3 className='mt-2 font-serif text-xl text-guide-ink leading-snug'>
                      {otherCopy.titleLead}{' '}
                      <span className='italic'>{otherCopy.titleAccent}</span>
                    </h3>
                    <span className='mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-guide-ink/70 group-hover:text-guide-ink transition-colors'>
                      {ui.view}
                      <span
                        aria-hidden='true'
                        className='transition-transform duration-300 group-hover:translate-x-1'
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer data-hide-sticky-cta className='bg-guide-deep py-12'>
        <div className='max-w-2xl mx-auto px-6 text-center'>
          <p className='font-serif text-2xl text-cream italic mb-6'>
            Sandra Torres
          </p>
          <p className='font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-8'>
            {ui.tagline}
          </p>
          <div className='flex justify-center gap-6 mb-8 text-cream/60 text-sm'>
            <Link
              href={guideHref(guide, 'en')}
              hrefLang='en'
              className={`${locale === 'en' ? 'text-cream' : ''} hover:text-cream transition-colors`}
            >
              EN
            </Link>
            <span>|</span>
            <Link
              href={guideHref(guide, 'es')}
              hrefLang='es'
              className={`${locale === 'es' ? 'text-cream' : ''} hover:text-cream transition-colors`}
            >
              ES
            </Link>
          </div>
          <p className='font-sans text-[11px] text-cream/30'>
            &copy; {new Date().getFullYear()} Becoming Her Method™. {ui.rights}
          </p>
        </div>
      </footer>

      <StickyGuideCTA
        guide={guide.id}
        locale={locale}
        href={copy.pdf}
        downloadName={copy.downloadName}
        title={title}
        detail={details}
        label={ui.downloadShort}
        closeLabel={ui.close}
      />
    </main>
  );
}
