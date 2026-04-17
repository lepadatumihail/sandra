import type { Metadata } from 'next';
import { PurchaseThankYou } from '@/components/PurchaseThankYou';

export const metadata: Metadata = {
  title: 'Gracias — Becoming Her Method',
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return <PurchaseThankYou locale='es' />;
}
