import type { Metadata } from 'next';
import { GuidesHub } from '@/components/GuidesHub';
import { guidesHubMetadata } from '@/lib/guides';

export const metadata: Metadata = guidesHubMetadata('en');

export default function GuidesPage() {
  return <GuidesHub locale='en' />;
}
