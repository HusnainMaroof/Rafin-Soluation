import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";
import { SERVICES_DATA } from "@/src/Static Data/ServiceData";
import { INDUSTRIES_DATA } from "@/src/Static Data/IndustryData";
import { trainingPages } from "@/src/Static Data/traningData";

const today = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/our-team`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${SITE_URL}/service/${service.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES_DATA.map(
    (industry) => ({
      url: `${SITE_URL}/industry/${industry.slug}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const trainingPagesSitemap: MetadataRoute.Sitemap = trainingPages.map(
    (training) => ({
      url: `${SITE_URL}/training/${training.slug}`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    }),
  );

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...trainingPagesSitemap,
  ];
}
