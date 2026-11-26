# State Dispatchers — Next.js site

Next.js 15 (App Router) + TypeScript. Static, mobile-first, bilingual (EN/ES), SEO-ready.

## Run
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to the real domain
npm run dev                  # http://localhost:3000
npm run build && npm start
```
Deploys as-is to Vercel (or any Node host). All pages are statically generated.

## Structure
- `app/(en)/…` — English at the root: `/`, `/about`, `/contact`, `/trucks/<slug>`
- `app/(es)/es/…` — Spanish under `/es`. Each group has its own root layout so `<html lang>` is correct.
- `views/` — page bodies shared by both languages (Home, Truck, About, Contact, Shell)
- `components/` — Header (menu + EN/ES), HeroSlider, LoadCard, TruckGrid, Faq (native `<details>`), ContactForm, CallBar, Footer…
- `lib/content.ts` — **all copy** (EN + ES) and truck data. Edit text here.
- `lib/site.ts` — phone, email, MC #, pricing (6% / $145), site URL
- `lib/seo.ts` — metadata + JSON-LD builders
- `app/globals.css` — design tokens + all styles (Hi-Vis system, 960px breakpoint)
- `app/api/contact/route.ts` — form endpoint (validates; **TODO** wire to email/CRM)

## SEO included
- Unique `<title>`/description per page and language, canonical URLs, `hreflang` alternates (en, es, x-default)
- Open Graph + Twitter cards
- JSON-LD: ProfessionalService (24/7, 48 states, EN/ES), WebSite, FAQPage, Service + Offers per truck type, BreadcrumbList
- `/sitemap.xml` (with language alternates) and `/robots.txt`
- Semantic HTML (one h1 per page, landmarks, ordered steps, `<dl>` load stats), skip link, visible focus
- `next/image` (AVIF/WebP, responsive sizes, hero preloaded), self-hosted variable fonts via `next/font` (no layout shift)
- FAQ uses native `<details>` so answers are in the HTML and work without JS

## Before launch — replace placeholders
- `lib/site.ts`: MC number
- Booked-load card numbers (`components/LoadCard.tsx`) — use a real load
- Testimonials (`lib/content.ts` q1–q3) — the driver photos are AI-generated; use real customers or remove "verified" claims
- Add a favicon/logo at `app/icon.png` once a logo exists
- Convert PNGs in `/public/images` to JPG/WebP for smaller repo size (next/image already serves optimized formats)
