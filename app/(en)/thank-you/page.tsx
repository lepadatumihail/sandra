import type { Metadata } from 'next';
import { PurchaseThankYou } from '@/components/PurchaseThankYou';

export const metadata: Metadata = {
  title: 'Thank you — Becoming Her Method',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <PurchaseThankYou locale='en' />;
}
