<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Learned User Preferences

- Landing and hero should feel standout and drive the PDF download with minimal hesitation; avoid plain or generic layouts—keep the design personal yet polished.
- Visual direction is high-end, elegant, and assertive—avoid casual scrapbook, polaroid, or low-ticket “cheap book” aesthetics.
- When scope could balloon, iterate on the English page first unless the user explicitly asks for Spanish or both locales together.
- Primary freebie CTA should align with the Feminine Cycle Decision System positioning, link the lead PDF, include a short subheader about moving and acting in line with one’s cycle, and allow the sticky/mobile promo to be dismissed.
- Keep the “Becoming Her Method™” brand name in English on Spanish pages; Spanish UI copy lives in `/es` and dedicated `*ES` components where needed.

## Learned Workspace Facts

- Next.js App Router site: English marketing home at `/`, Spanish mirror at `/es` with translated copy and Spanish-specific components (e.g. `TestimonialsES`, `FAQES`, `StickyMobileCTAES`).
- Promotional photography is under `public/sandy/`.
- Lead magnet file is `public/BECOMING HER (2).pdf`, served as `/BECOMING%20HER%20(2).pdf` (download attribute may use a sanitized filename).
- Local development targets Node.js 22 (e.g. `nvm use 22`).
- Body/heading fonts use Google Fonts chosen to approximate a Codec Pro–like pairing after Codec Pro itself was deferred.
