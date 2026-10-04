import type { MetadataRoute } from 'next';
import type { Locale } from '@/lib/checkout';
import { GUIDES_HUB_PATH, guideHref, guides } from '@/lib/guides';
import { HOME_PATH, absoluteUrl } from '@/lib/site';

// One entry per language, each listing the full EN/ES pair plus x-default.
function localized(
  paths: Record<Locale, string>,
  priority: number,
): MetadataRoute.Sitemap {
  const languages = {
    en: absoluteUrl(paths.en),
    es: absoluteUrl(paths.es),
    'x-default': absoluteUrl(paths.en),
  };

  return (['en', 'es'] as const).map((locale) => ({
    url: absoluteUrl(paths[locale]),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localized(HOME_PATH, 1),
    ...localized(GUIDES_HUB_PATH, 0.8),
    ...guides.flatMap((guide) =>
      localized(
        { en: guideHref(guide, 'en'), es: guideHref(guide, 'es') },
        0.8,
      ),
    ),
  ];
}
