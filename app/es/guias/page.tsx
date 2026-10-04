import type { Metadata } from 'next';
import { GuidesHub } from '@/components/GuidesHub';
import { guidesHubMetadata } from '@/lib/guides';

export const metadata: Metadata = guidesHubMetadata('es');

export default function GuiasPage() {
  return <GuidesHub locale='es' />;
}
