import type { Locale } from '@/lib/checkout';
import {
  GUIDES_HUB_COPY,
  GUIDES_HUB_PATH,
  guideHref,
  guideTitle,
  guides,
} from '@/lib/guides';
import { HOME_PATH, METHOD, absoluteUrl } from '@/lib/site';

// A plain-markdown map of the site for AI assistants and agents
// (https://llmstxt.org), built from the same data as the pages.
export const dynamic = 'force-static';

const PRICE = `$${Number(METHOD.price)} ${METHOD.currency}`;
const PAGES: Record<Locale, string> = { en: 'pages', es: 'páginas' };

function guideList(locale: Locale) {
  return [
    `- [${GUIDES_HUB_COPY[locale].name}](${absoluteUrl(GUIDES_HUB_PATH[locale])})`,
    ...guides.map((guide) => {
      const copy = guide[locale];
      const url = absoluteUrl(guideHref(guide, locale));
      return `- [${guideTitle(guide, locale)}](${url}): ${copy.description} ${copy.pages} ${PAGES[locale]}, [PDF](${absoluteUrl(copy.pdf)}).`;
    }),
  ];
}

export function GET() {
  const body = [
    `# ${METHOD.name} by Sandra Torres`,
    '',
    `> Sandra Torres is the creator of the ${METHOD.name}, a step-by-step method that helps women break emotional patterns, build deep self-love and become the most powerful version of themselves. The site is in English and Spanish and also gives away free guides, including four Scripture-based ones.`,
    '',
    `## The ${METHOD.name}`,
    '',
    `- [${METHOD.name} (English)](${absoluteUrl(HOME_PATH.en)}): The complete method as a ${METHOD.pages}-page PDF: 5 deep-dive modules, interactive worksheets, Sandra's story and framework, and the Feminine Cycle Decision System as a bonus. ${PRICE}, emailed as a PDF right after checkout. Digital download, no refunds.`,
    `- [${METHOD.name} (Español)](${absoluteUrl(HOME_PATH.es)}): The same method in Spanish, also ${PRICE}.`,
    '',
    '## Free Bible guides (English)',
    '',
    ...guideList('en'),
    '',
    '## Guías bíblicas gratis (español)',
    '',
    ...guideList('es'),
    '',
    '## More free guides',
    '',
    `- [Module 1: Identity Reset](${absoluteUrl('/module1-en.pdf')}): The first step of the method: define who you are becoming and start shifting from your past version into your future self. PDF, English.`,
    `- [Feminine Cycle Decision System](${absoluteUrl('/feminine-en.pdf')}): Move and act in alignment with your cycle and make better decisions in each energy phase. PDF, also in [Spanish](${absoluteUrl('/feminine-es.pdf')}).`,
    `- [Glow Up Guide](${absoluteUrl('/glowup-en.pdf')}): A one-page reset: identity, habits, inner work, standards, energy and a daily routine. PDF, also in [Spanish](${absoluteUrl('/glowup-es.pdf')}).`,
    '',
    '## Optional',
    '',
    `- [Sitemap](${absoluteUrl('/sitemap.xml')})`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
