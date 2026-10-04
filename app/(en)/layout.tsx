import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { outfit, playfair } from '@/lib/fonts';
import { siteMetadata } from '@/lib/site';
import '../globals.css';

// English root layout. Spanish pages under /es have their own, so each
// language is served with the right <html lang>.
export const metadata: Metadata = siteMetadata('en');

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
      <body className='min-h-full flex flex-col'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
