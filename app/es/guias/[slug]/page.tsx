import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuideLanding } from '@/components/GuideLanding';
import { findGuide, guideMetadata, guides } from '@/lib/guides';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.es.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = findGuide('es', slug);
  return guide ? guideMetadata(guide, 'es') : {};
}

export default async function GuiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = findGuide('es', slug);
  if (!guide) notFound();

  return <GuideLanding guide={guide} locale='es' />;
}
