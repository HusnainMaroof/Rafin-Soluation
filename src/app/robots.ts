import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // API routes are for form submissions only — keep them out of indexes
        disallow: ["/api/"],
      },
      {
        // Explicit green light for all of Google's crawlers
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Googlebot-Video",
          "Mediapartners-Google",
          "AdsBot-Google",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
