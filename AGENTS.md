<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Learned User Preferences

- Landing and hero should feel standout and drive the PDF download with minimal hesitation; avoid plain or generic layouts—keep the design personal yet polished.
- Visual direction is high-end, elegant, and assertive—avoid casual scrapbook, polaroid, or low-ticket "cheap book" aesthetics.
- When scope could balloon, iterate on the English page first unless the user explicitly asks for Spanish or both locales together.
- Primary freebie CTA should align with the Feminine Cycle Decision System positioning, link the lead PDF, include a short subheader about moving and acting in line with one's cycle, and allow the sticky/mobile promo to be dismissed.
- Keep the "Becoming Her Method™" brand name in English on Spanish pages; Spanish UI copy lives in `/es` and dedicated `*ES` components where needed.
- Copy should sound authentic and direct, not polished-corporate or motivational-poster; user rejects generic self-help language in favor of raw, human voice.

## Learned Workspace Facts

- Next.js App Router site: English marketing home at `/`, Spanish mirror at `/es` with translated copy and Spanish-specific components (e.g. `TestimonialsES`, `FAQES`, `StickyMobileCTAES`).
- Promotional photography is under `public/sandra/`.
- Main CTA PDF is `public/becoming-her-english-full-book.pdf` (EN and `/es` until a Spanish full book exists); Lemon Squeezy is deferred; hero, turning-point, and sticky CTAs link directly to that PDF.
- English free guides: `public/module1-en.pdf`, `public/feminine-en.pdf`, `public/glowup-en.pdf`. Spanish page uses `public/feminine-es.pdf` and `public/glowup-es.pdf`; Module 1 on `/es` links to `module1-en.pdf` until `module1-es.pdf` exists.
- Local development targets Node.js 22 (e.g. `nvm use 22`).
- Body/heading fonts use Google Fonts chosen to approximate a Codec Pro–like pairing after Codec Pro itself was deferred.
- Production domain `https://www.torresmethod.com`; `metadataBase` in the root layout and sitemap/robots use this URL.
- Vercel Analytics (`@vercel/analytics/next`) is integrated in the root layout; custom event tracking via `track()` covers CTA clicks, free-guide downloads, and sticky-CTA dismissals.
- Shared client components: `CTAButton` (`components/CTAButton.tsx`) and `TrackedDownloadLink` (`components/TrackedDownloadLink.tsx`) wrap primary CTA and guide download links with built-in Vercel Analytics tracking.
