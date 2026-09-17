import type { MetadataRoute } from "next";

import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

/**
 * Der Prototyp wird bewusst nicht indexiert, damit er nicht mit der
 * bestehenden Website konkurriert. Vor einem Livegang zu ändern.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
