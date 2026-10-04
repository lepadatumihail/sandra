import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Locale } from '@/lib/checkout';
import type { Guide } from '@/lib/guides';

// Mirrors the [data-guide-theme] palettes in app/globals.css
const PALETTE: Record<Guide['theme'], { deep: string; ink: string; accent: string }> = {
  burgundy: { deep: '#2a0c11', ink: '#571a23', accent: '#e7c6c8' },
  navy: { deep: '#0b1322', ink: '#121e30', accent: '#cdbca3' },
};

const CAPTION: Record<Locale, string> = {
  en: 'Free guide · torresmethod.com',
  es: 'Guía gratuita · torresmethod.com',
};

const BOOK_HEIGHT = 470;
const BOOK_WIDTH = Math.round((BOOK_HEIGHT * 900) / 1273);

// Social preview: the guide's own cover as a book on its palette.
export async function guideOgImage(guide: Guide, locale: Locale) {
  const { deep, ink, accent } = PALETTE[guide.theme];
  const cover = await readFile(
    join(process.cwd(), 'public', guide[locale].cover),
  );
  const page = {
    position: 'absolute',
    width: BOOK_WIDTH,
    height: BOOK_HEIGHT,
    borderRadius: 4,
  } as const;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: deep,
          backgroundImage: `radial-gradient(circle at 50% 40%, ${ink}, ${deep} 75%)`,
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: BOOK_WIDTH + 8,
            height: BOOK_HEIGHT + 8,
          }}
        >
          <div
            style={{
              ...page,
              top: 8,
              left: 8,
              backgroundColor: '#f5f0e8',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.55)',
            }}
          />
          <div
            style={{ ...page, top: 4, left: 4, backgroundColor: '#fffcf6' }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
          <img
            src={`data:image/png;base64,${cover.toString('base64')}`}
            alt=''
            width={BOOK_WIDTH}
            height={BOOK_HEIGHT}
            style={{ ...page, top: 0, left: 0 }}
          />
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 20,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: accent,
          }}
        >
          {CAPTION[locale]}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
