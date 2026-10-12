import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// lastModified is only worth sending if it's accurate, so these are bumped by
// hand when a page's content meaningfully changes (not on every build).
// Google ignores priority and changefreq, so they're omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: "2026-10-12" },
    { url: `${site.url}/privacy-policy`, lastModified: "2026-10-03" },
    { url: `${site.url}/terms-and-conditions`, lastModified: "2026-10-03" },
  ];
}
