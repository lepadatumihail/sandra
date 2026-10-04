import type { Metadata } from 'next';
import type { Locale } from '@/lib/checkout';

export const SITE_URL = 'https://www.torresmethod.com';

// Sandra's public profiles (Instagram, TikTok…). They become `sameAs` in the
// structured data, which is how search engines and AI assistants tell her
// apart from everyone else named Sandra Torres.
export const SOCIAL_PROFILES: string[] = [];

export const HOME_PATH: Record<Locale, string> = { en: '/', es: '/es' };

// The paid book sold on both home pages: a PDF emailed right after checkout.
export const METHOD = {
  name: 'Becoming Her Method™',
  price: '19.00',
  currency: 'USD',
  pages: 40,
  cover: '/branding/becoming-her-cover.png',
};

export const SITE_COPY: Record<
  Locale,
  { title: string; description: string; ogLocale: string }
> = {
  en: {
    title: 'Becoming Her Method™ — by Sandra Torres',
    description:
      'A proven step-by-step method to help you break emotional patterns, build deep self-love, and become the most powerful version of yourself.',
    ogLocale: 'en_US',
  },
  es: {
    title: 'Becoming Her Method™ — por Sandra Torres',
    description:
      'Un método probado paso a paso para ayudarte a romper patrones emocionales, construir amor propio profundo y convertirte en la versión más poderosa de ti misma.',
    ogLocale: 'es_ES',
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).href;
}

// Canonical URL plus the EN/ES pair; English is the fallback for other languages.
export function localeAlternates(
  paths: Record<Locale, string>,
  locale: Locale,
): Metadata['alternates'] {
  return {
    canonical: paths[locale],
    languages: { en: paths.en, es: paths.es, 'x-default': paths.en },
  };
}

// Defaults for every page under a locale's root layout.
export function siteMetadata(locale: Locale): Metadata {
  const { title, description, ogLocale } = SITE_COPY[locale];
  const image = { url: '/og-image.jpg', width: 1200, height: 630, alt: title };

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'website',
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

// openGraph is replaced, not merged, so the home pages restate it with their URL.
export function homeMetadata(locale: Locale): Metadata {
  return {
    alternates: localeAlternates(HOME_PATH, locale),
    openGraph: { ...siteMetadata(locale).openGraph, url: HOME_PATH[locale] },
  };
}
