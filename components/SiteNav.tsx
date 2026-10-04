'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/checkout';
import type { NavGuide } from '@/lib/guides';

const COPY: Record<
  Locale,
  {
    home: string;
    method: string;
    bibleGuides: string;
    freeGuides: string;
    cta: string;
    switchFlag: string;
    switchCode: string;
    switchLabel: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
  }
> = {
  en: {
    home: '/',
    method: 'The Method',
    bibleGuides: 'Bible Guides',
    freeGuides: 'Free Guides',
    cta: 'Get the Method',
    switchFlag: '🇪🇸',
    switchCode: 'ES',
    switchLabel: 'Español',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  es: {
    home: '/es',
    method: 'El Método',
    bibleGuides: 'Guías Bíblicas',
    freeGuides: 'Guías Gratis',
    cta: 'Consigue el Método',
    switchFlag: '🇬🇧',
    switchCode: 'EN',
    switchLabel: 'English',
    menu: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
};

const LINK_CLASS =
  'text-[11px] xl:text-xs uppercase tracking-[0.2em] font-sans font-medium text-cream/75 hover:text-cream transition-colors rounded-sm focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-cream/60';

function Thumb({ src, className }: { src: string; className: string }) {
  return (
    <span
      className={`relative block shrink-0 aspect-[900/1273] overflow-hidden rounded-[2px] shadow-md ${className}`}
    >
      <Image src={src} alt='' fill sizes='48px' className='object-cover' />
    </span>
  );
}

// Transparent over the dark heroes, solid once the page scrolls, and tucked
// away while scrolling down so it never competes with the content.
export function SiteNav({
  locale,
  alternateHref,
  guides,
}: {
  locale: Locale;
  alternateHref: string;
  guides: NavGuide[];
}) {
  const copy = COPY[locale];
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  const pathname = usePathname();
  const guidesId = useId();
  const guidesRef = useRef<HTMLDivElement>(null);
  const pointerTypeRef = useRef<string | null>(null);
  const menuRef = useRef<HTMLDialogElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 8);
      if (Math.abs(y - lastY) > 6) {
        setIsHidden(y > lastY && y > 160);
        lastY = y;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isGuidesOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsGuidesOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!guidesRef.current?.contains(event.target as Node)) {
        setIsGuidesOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isGuidesOpen]);

  // Scroll is locked/unlocked synchronously so in-page anchor links still
  // scroll after the menu closes.
  const openMenu = () => {
    document.documentElement.style.overflow = 'hidden';
    menuRef.current?.showModal();
  };
  const closeMenu = () => {
    document.documentElement.style.overflow = '';
    menuRef.current?.close();
  };

  const isVisible = !isHidden || isGuidesOpen;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-[translate,background-color,box-shadow] duration-300 ease-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${
            isScrolled
              ? 'bg-nav/95 backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]'
              : 'bg-transparent'
          }
        `}
      >
        <nav className='max-w-6xl mx-auto px-6 h-16 lg:h-[72px] flex items-center justify-between gap-6'>
          <Link
            href={copy.home}
            className='font-serif italic text-xl sm:text-2xl text-cream/90 hover:text-cream transition-colors'
          >
            Sandra Torres
          </Link>

          <div className='hidden lg:flex items-center gap-8'>
            <Link href={`${copy.home}#method`} className={LINK_CLASS}>
              {copy.method}
            </Link>

            <div
              ref={guidesRef}
              className='relative'
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') setIsGuidesOpen(true);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === 'mouse') setIsGuidesOpen(false);
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsGuidesOpen(false);
                }
              }}
            >
              <button
                type='button'
                aria-expanded={isGuidesOpen}
                aria-controls={guidesId}
                onPointerDown={(event) => {
                  pointerTypeRef.current = event.pointerType;
                }}
                onClick={() => {
                  // Hover already opened it for mouse users; keyboard and touch toggle.
                  const viaMouse = pointerTypeRef.current === 'mouse';
                  pointerTypeRef.current = null;
                  setIsGuidesOpen((open) => (viaMouse ? true : !open));
                }}
                className={`${LINK_CLASS} inline-flex items-center gap-1.5`}
              >
                {copy.bibleGuides}
                <svg
                  viewBox='0 0 12 12'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  aria-hidden='true'
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${isGuidesOpen ? 'rotate-180' : ''}`}
                >
                  <path d='M2 4l4 4 4-4' />
                </svg>
              </button>

              {/* pt-4 bridges the gap so the pointer can travel into the panel */}
              <div
                id={guidesId}
                className={`
                  absolute left-1/2 top-full -translate-x-1/2 pt-4
                  transition duration-200 ease-out
                  ${isGuidesOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1'}
                `}
              >
                <ul className='w-[22rem] rounded-2xl bg-cream p-2 shadow-2xl ring-1 ring-black/5'>
                  {guides.map((guide) => (
                    <li key={guide.href} data-guide-theme={guide.theme}>
                      <Link
                        href={guide.href}
                        aria-current={
                          pathname === guide.href ? 'page' : undefined
                        }
                        onClick={() => setIsGuidesOpen(false)}
                        className='flex items-center gap-4 rounded-xl px-3 py-2.5 hover:bg-cream-dark aria-[current=page]:bg-cream-dark transition-colors'
                      >
                        <Thumb src={guide.cover} className='w-9' />
                        <span className='min-w-0'>
                          <span className='block font-serif text-lg leading-tight text-guide-ink'>
                            {guide.titleLead}{' '}
                            <span className='italic'>{guide.titleAccent}</span>
                          </span>
                          <span className='mt-1 block text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-guide-muted'>
                            {guide.audience}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href={`${copy.home}#free-guides`} className={LINK_CLASS}>
              {copy.freeGuides}
            </Link>
          </div>

          <div className='flex items-center gap-3'>
            <Link
              href={alternateHref}
              hrefLang={otherLocale}
              aria-label={copy.switchLabel}
              className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cream/25 bg-cream/10 text-cream/80 hover:text-cream hover:bg-cream/20 hover:border-cream/45 transition-colors text-xs font-sans font-medium tracking-wide'
            >
              <span className='text-sm leading-none'>{copy.switchFlag}</span>
              <span>{copy.switchCode}</span>
            </Link>
            <Link
              href={`${copy.home}#get-the-method`}
              className='hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-cream/40 text-cream hover:bg-cream hover:text-nav-ink transition-colors text-[11px] uppercase tracking-[0.2em] font-sans font-semibold'
            >
              {copy.cta}
              <span aria-hidden='true'>&rarr;</span>
            </Link>
            <button
              type='button'
              onClick={openMenu}
              aria-label={copy.openMenu}
              aria-haspopup='dialog'
              className='lg:hidden -mr-2 w-10 h-10 flex items-center justify-center text-cream'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path strokeLinecap='round' strokeWidth='1.5' d='M4 8h16M4 16h16' />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <dialog
        ref={menuRef}
        aria-label={copy.menu}
        onClose={() => {
          document.documentElement.style.overflow = '';
        }}
        className='lg:hidden fixed inset-0 m-0 w-full max-w-none h-dvh max-h-none p-0 overflow-y-auto overscroll-contain bg-nav text-cream backdrop:bg-transparent'
      >
        <div
          className='min-h-full flex flex-col px-6 pb-10 animate-fade-in-up'
          style={{ animationDuration: '0.4s' }}
        >
          <div className='h-16 flex items-center justify-between'>
            <Link
              href={copy.home}
              onClick={closeMenu}
              className='font-serif italic text-xl text-cream/90'
            >
              Sandra Torres
            </Link>
            <button
              type='button'
              onClick={closeMenu}
              aria-label={copy.closeMenu}
              className='-mr-2 w-10 h-10 flex items-center justify-center text-cream'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeWidth='1.5'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <nav className='mt-10'>
            <ul className='space-y-4'>
              <li>
                <Link
                  href={`${copy.home}#method`}
                  onClick={closeMenu}
                  className='font-serif text-4xl text-cream'
                >
                  {copy.method}
                </Link>
              </li>
              <li>
                <Link
                  href={`${copy.home}#free-guides`}
                  onClick={closeMenu}
                  className='font-serif text-4xl text-cream'
                >
                  {copy.freeGuides}
                </Link>
              </li>
            </ul>

            <p className='mt-12 text-[11px] uppercase tracking-[0.3em] font-sans font-semibold text-cream/50'>
              {copy.bibleGuides}
            </p>
            <ul className='mt-4 divide-y divide-cream/10 border-y border-cream/10'>
              {guides.map((guide) => (
                <li key={guide.href} data-guide-theme={guide.theme}>
                  <Link
                    href={guide.href}
                    aria-current={pathname === guide.href ? 'page' : undefined}
                    onClick={closeMenu}
                    className='flex items-center gap-4 py-3'
                  >
                    <Thumb src={guide.cover} className='w-10' />
                    <span className='min-w-0'>
                      <span className='block font-serif text-xl leading-tight text-cream'>
                        {guide.titleLead}{' '}
                        <span className='italic text-guide-accent'>
                          {guide.titleAccent}
                        </span>
                      </span>
                      <span className='mt-1 block text-[10px] uppercase tracking-[0.2em] font-sans text-cream/50'>
                        {guide.audience}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='mt-auto pt-10 flex flex-col items-center gap-6'>
            <Link
              href={`${copy.home}#get-the-method`}
              onClick={closeMenu}
              className='w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-cream text-nav-ink text-xs uppercase tracking-[0.2em] font-sans font-semibold shadow-lg'
            >
              {copy.cta}
              <span aria-hidden='true'>&rarr;</span>
            </Link>
            <Link
              href={alternateHref}
              hrefLang={otherLocale}
              onClick={closeMenu}
              className='inline-flex items-center gap-2 text-sm font-sans text-cream/70 hover:text-cream transition-colors'
            >
              <span className='text-base leading-none'>{copy.switchFlag}</span>
              <span>{copy.switchLabel}</span>
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
