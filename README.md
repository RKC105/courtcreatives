# CourtCreatives

Marketing website for **CourtCreatives** — Courtney, a wedding content creator based in Belfast, Northern Ireland, specialising in candid TikTok, Instagram Reels and social-first wedding content.

- **Live site:** https://courtcreatives.co.uk (primary domain)
- **Hosting:** Vercel
- **Repo:** `origin` → `rkavanagh105work-arch/courtcreatives`, `upstream` → `RKC105/courtcreatives`

---

## Stack

| | |
|---|---|
| Framework | Next.js 15.5.9 (App Router) |
| Runtime | React 19.1 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Icons | `lucide-react`, plus FontAwesome brand icons for TikTok |
| Email | [Resend](https://resend.com) |
| Fonts | Geist, Geist Mono, Tangerine — all via `next/font/google` |

Next.js 15 requires Node 18.18 or newer.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `eslint.config.mjs`) |

### Environment variables

Create `.env.local` in the project root:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

This is the only environment variable the app uses. Without it the enquiry form returns a 500. `.env*` is gitignored — the key also needs to be set in the Vercel project settings for the deployed site.

---

## Structure

```
src/app/
  layout.tsx              Root layout, fonts, all page metadata / SEO tags
  page.tsx                The entire site — one client component
  globals.css             Tailwind import + theme tokens
  api/submit-form/route.ts  POST handler: enquiry form → email
public/
  logo.png                Site logo + OG/Twitter share image
  logo_withbg.png         Logo used inside the enquiry email template
  aboutme.JPG             About section portrait
  packages.png            Packages section (pricing is an image, not markup)
  vid1–6.mp4              Gallery videos
  robots.txt              Static
  sitemap.xml             Static — update `lastmod` when content changes
```

It's a **single-page site**. Everything renders from `src/app/page.tsx`, and the nav scrolls between sections rather than routing.

The exceptions are `/privacy-policy` and `/terms-and-conditions` (`src/app/privacy-policy/`, `src/app/terms-and-conditions/`), linked from the footer. They share a shell in `src/components/LegalPage.tsx`. Each sets its own `alternates.canonical`, because otherwise it would inherit the root layout's `"/"` and point its canonical at the homepage. If you change a policy, update its "Last updated" date and its `lastmod` in `sitemap.xml`.

### Page sections

In order, matching the nav: **Hero → About → Packages → How it works → Gallery → FAQ → Contact → Footer**.

The nav derives each section's anchor from its label via `item.toLowerCase()`, so a nav label of `"FAQ"` targets `id="faq"` and `"How it works"` targets `id="how it works"`. **Adding a nav item means adding a section with the matching lowercased `id`.** The label list is duplicated in the desktop and mobile menus — change both.

### Design tokens

Hardcoded as Tailwind arbitrary values throughout, not theme config:

| Colour | Use |
|---|---|
| `#fff6f3` | Page background, cards on white sections |
| `#f8ced0` | Primary pink — buttons, icons, accents |
| `#f5b8bb` | Button hover |

Headings use Tangerine, a script face, via `font-[family-name:var(--font-tangerine)]`. Sections alternate between the `#fff6f3` page background and `bg-white`.

---

## Enquiry form

The contact form posts JSON to `POST /api/submit-form`, which renders an HTML email and sends it through Resend to **courtcreatives@outlook.com**.

Required fields (validated client-side): full name, email, wedding date, getting-ready location, ceremony location, reception location. The wedding date is also checked against today so past dates are rejected, and the `<input type="date">` `min` is set on mount. On success the page shows a modal; failures surface via `alert()`.

---

## SEO

This site is a single page competing on local search terms, so the SEO setup carries real weight.

**`src/app/layout.tsx`** owns all head metadata via the Next.js Metadata API. A single `siteUrl` constant at the top of the file feeds `metadataBase`, the canonical, OpenGraph and Twitter tags — so they can't drift onto different hosts. It also sets `geo.region` / `geo.placename` / `geo.position` for local search.

**`src/app/page.tsx`** renders two JSON-LD blocks directly into the markup (not injected client-side, so crawlers see them without executing JavaScript):

- `ProfessionalService` — business details, with `areaServed` generated from the `areasServed` array
- `FAQPage` — generated from the `faqs` array, making the questions eligible for expandable FAQ rich results

The FAQ section and its "Areas I Cover" panel are both driven by those two arrays, which double as the structured-data source. Editing an FAQ answer or adding a town updates the visible page *and* the schema together. The area list covers all six NI counties plus the Republic of Ireland, and exists largely so those town and venue names are crawlable text on the page.

**`next.config.ts`** permanently redirects `www.courtcreatives.co.uk` → apex, and sets an `X-Robots-Tag: index, follow` header.

### Canonical domain — background

The site previously declared `courtcreativesni.com` as its canonical URL across the metadata, structured data, `robots.txt` and `sitemap.xml`. That domain isn't live. Search engines were being told the real page lived at a host that doesn't resolve, which is why audits reported *"the canonical link points to a different domain."*

Fixed by moving everything onto `courtcreatives.co.uk`. Two things to keep in mind:

1. **`siteUrl` in `layout.tsx` and `SITE_URL` in `page.tsx` are separate constants holding the same value.** They're split because `layout.tsx` is a server component and `page.tsx` is a client component. If the domain ever changes again, both need updating — along with `public/robots.txt`, `public/sitemap.xml` and the redirect host in `next.config.ts`.
2. Next.js normalises the root trailing slash away, so the canonical renders as `https://courtcreatives.co.uk` with no trailing slash regardless of whether you write `"/"` or the full URL. This is fine — Google treats the two as identical.

---

## Known wrinkles

Things that are odd but currently harmless, noted so they don't cause confusion later:

- **Resend sends from `onboarding@resend.dev`**, Resend's shared sandbox sender. Enquiries deliver, but moving to a verified sending domain would improve deliverability and stop the emails looking third-party.
- **The comment above the form submit in `page.tsx` says "Submit to JotForm API".** It's stale — the endpoint uses Resend. JotForm isn't a dependency.
- **The enquiry email template hardcodes `© 2025`** in its footer, while the site footer uses the current year.
- **`public/vid7.mp4` and `public/process.png` are unreferenced.** The gallery only uses `vid1`–`vid6`.
- **`globals.css` defines a `prefers-color-scheme: dark` block** setting a near-black body background. It's effectively inert — the page root applies `bg-[#fff6f3]` with `min-h-screen` over it — but the site has no real dark mode.
- **Pricing lives inside `public/packages.png`**, so package changes mean re-exporting that image rather than editing markup. Prices aren't crawlable text.
- **`sitemap.xml` is static.** Its `lastmod` needs bumping manually when content changes meaningfully.

## Deploying

Pushing to `main` deploys via Vercel. Confirm in Vercel → Domains that `courtcreatives.co.uk` remains the primary domain with `www` redirecting to it, since the canonical tag and the `next.config.ts` redirect both assume apex is canonical.
