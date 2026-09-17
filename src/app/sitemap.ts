import type { MetadataRoute } from "next";

import { SITE_URL, legalNav, mainNav } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    ...mainNav.map((n) => ({ url: `${SITE_URL}${n.href}`, lastModified: now, priority: 0.8 })),
    ...legalNav.map((n) => ({ url: `${SITE_URL}${n.href}`, lastModified: now, priority: 0.2 })),
  ];
}
