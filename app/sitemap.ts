import type { MetadataRoute } from 'next';
import { guideHref, guides } from '@/lib/guides';

const baseUrl = 'https://www.torresmethod.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...guides.flatMap((guide) =>
      (['en', 'es'] as const).map((locale) => ({
        url: `${baseUrl}${guideHref(guide, locale)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${guideHref(guide, 'en')}`,
            es: `${baseUrl}${guideHref(guide, 'es')}`,
          },
        },
      })),
    ),
  ];
}
