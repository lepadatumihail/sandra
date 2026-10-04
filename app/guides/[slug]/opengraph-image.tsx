import { findGuide, guides } from '@/lib/guides';
import { guideOgImage } from '@/lib/og';

export const alt = 'Free guide by Sandra Torres';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Prerender at build time, where public/ (the cover PNGs) is on disk.
export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.en.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = findGuide('en', slug);
  if (!guide) return new Response(null, { status: 404 });

  return guideOgImage(guide, 'en');
}
