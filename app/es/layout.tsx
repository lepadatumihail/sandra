import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { outfit, playfair } from '@/lib/fonts';
import { siteMetadata } from '@/lib/site';
import '../globals.css';

// Spanish root layout for everything under /es.
export const metadata: Metadata = siteMetadata('es');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='es'
      data-scroll-behavior='smooth'
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
