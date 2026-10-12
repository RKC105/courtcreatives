// Single source of truth for the canonical host and business identity.
// Imported by the root layout (metadata), the homepage (JSON-LD), robots.ts and
// sitemap.ts, so none of them can drift onto a different domain or name.
export const site = {
  name: "CourtCreatives",
  url: "https://courtcreatives.co.uk", // production origin, no trailing slash
  locale: "en_GB",
  email: "courtcreatives@outlook.com",
  sameAs: [
    "https://www.instagram.com/courtcreatives_/",
    "https://www.tiktok.com/@courtcreatives_",
  ],
} as const;
