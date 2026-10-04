import type { Locale } from '@/lib/checkout';
import {
  GUIDES_HUB_COPY,
  GUIDES_HUB_PATH,
  guideHref,
  guideTitle,
  guides,
  type Guide,
} from '@/lib/guides';
import {
  HOME_PATH,
  METHOD,
  SITE_COPY,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
} from '@/lib/site';

// schema.org graphs that tell search engines and AI assistants who Sandra is,
// what the method costs and what each free guide contains.

const PERSON_ID = `${SITE_URL}/#sandra-torres`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const LABELS: Record<Locale, { home: string; creator: string }> = {
  en: { home: 'Home', creator: 'Creator of the Becoming Her Method™.' },
  es: { home: 'Inicio', creator: 'Creadora del Becoming Her Method™.' },
};

function person(locale: Locale) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Sandra Torres',
    url: absoluteUrl(HOME_PATH.en),
    image: absoluteUrl('/sandra/IMG_4337.JPG'),
    description: LABELS[locale].creator,
    ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

function breadcrumbs(locale: Locale, current?: { name: string; path: string }) {
  const trail = [
    { name: LABELS[locale].home, path: HOME_PATH[locale] },
    { name: GUIDES_HUB_COPY[locale].name, path: GUIDES_HUB_PATH[locale] },
    ...(current ? [current] : []),
  ];

  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function homeJsonLd(locale: Locale) {
  const url = absoluteUrl(HOME_PATH[locale]);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: 'Becoming Her Method',
        alternateName: 'Torres Method',
        url: absoluteUrl(HOME_PATH.en),
        inLanguage: ['en', 'es'],
        publisher: { '@id': PERSON_ID },
      },
      person(locale),
      {
        // A Book that is also a Product, so the price is machine-readable.
        '@type': ['Book', 'Product'],
        '@id': `${url}#book`,
        name: METHOD.name,
        description: SITE_COPY[locale].description,
        url,
        image: absoluteUrl(METHOD.cover),
        inLanguage: locale,
        bookFormat: 'https://schema.org/EBook',
        numberOfPages: METHOD.pages,
        author: { '@id': PERSON_ID },
        brand: { '@type': 'Brand', name: 'Becoming Her Method' },
        offers: {
          '@type': 'Offer',
          price: METHOD.price,
          priceCurrency: METHOD.currency,
          availability: 'https://schema.org/InStock',
          url,
        },
      },
    ],
  };
}

export function guideJsonLd(guide: Guide, locale: Locale) {
  const copy = guide[locale];
  const path = guideHref(guide, locale);
  const url = absoluteUrl(path);
  const name = guideTitle(guide, locale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Book',
        '@id': `${url}#book`,
        name,
        description: copy.description,
        url,
        image: absoluteUrl(copy.cover),
        inLanguage: locale,
        bookFormat: 'https://schema.org/EBook',
        numberOfPages: copy.pages,
        isAccessibleForFree: true,
        author: person(locale),
        encoding: {
          '@type': 'MediaObject',
          contentUrl: absoluteUrl(copy.pdf),
          encodingFormat: 'application/pdf',
        },
      },
      breadcrumbs(locale, { name, path }),
    ],
  };
}

export function guidesHubJsonLd(locale: Locale) {
  const url = absoluteUrl(GUIDES_HUB_PATH[locale]);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': url,
        name: GUIDES_HUB_COPY[locale].title,
        description: GUIDES_HUB_COPY[locale].description,
        url,
        inLanguage: locale,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: guides.map((guide, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: guideTitle(guide, locale),
            url: absoluteUrl(guideHref(guide, locale)),
          })),
        },
      },
      breadcrumbs(locale),
    ],
  };
}
