import { Outfit, Playfair_Display } from 'next/font/google';

// Loaded once here so the English and Spanish root layouts share one instance.
export const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});
