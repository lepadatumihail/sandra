import type { NextConfig } from 'next';
import { guideHref, guides } from './lib/guides';
import { absoluteUrl } from './lib/site';

const nextConfig: NextConfig = {
  async headers() {
    // Each guide PDF names its landing page as canonical, so search engines
    // rank the page (with the rest of the site) instead of the bare file.
    return guides.flatMap((guide) =>
      (['en', 'es'] as const).map((locale) => ({
        source: guide[locale].pdf,
        headers: [
          {
            key: 'Link',
            value: `<${absoluteUrl(guideHref(guide, locale))}>; rel="canonical"`,
          },
        ],
      })),
    );
  },
  async redirects() {
    return [
      {
        source: '/becoming-her-english-full-book.pdf',
        destination: '/',
        permanent: false,
      },
      {
        source: '/becoming-her-spanish.pdf',
        destination: '/es',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
