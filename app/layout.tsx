import type { Metadata } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sandra-omega.vercel.app'),
  title: 'Becoming Her Method™ — by Sandra Torres',
  description:
    'A proven step-by-step method to help you break emotional patterns, build deep self-love, and become the most powerful version of yourself.',
  openGraph: {
    title: 'Becoming Her Method™ — by Sandra Torres',
    description:
      'A proven step-by-step method to help you break emotional patterns, build deep self-love, and become the most powerful version of yourself.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Becoming Her Method™ — by Sandra Torres',
    description:
      'A proven step-by-step method to help you break emotional patterns, build deep self-love, and become the most powerful version of yourself.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
