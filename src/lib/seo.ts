import type { Metadata } from "next";

/* ============================================================
   Central SEO configuration for Rafin Solutions
   ============================================================ */

export const SITE_URL = "https://rafinsolutions.com";
export const SITE_NAME = "Rafin Solutions";
export const SITE_NAME_ACADEMY = "Rafin Solutions Academy";
export const SITE_DESCRIPTION =
  "Rafin Solutions is a specialist compliance and fintech consultancy helping regulated financial businesses with licensing, AML/CFT, KYC/KYB, payments operations, training, and outsourced back-office support.";

export const CONTACT = {
  email: "rafinsolutions@outlook.com",
  phoneDisplay: "+92 304 5896617",
  phoneHref: "tel:+923045896617",
  address: {
    street: "Opposite to Bega Sanitary Store, Gulyana Road, Kharian",
    region: "District Gujrat, Pakistan",
  },
};

export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image.png`;

/** Shared keywords used across the site (kept natural, not stuffed). */
export const CORE_KEYWORDS = [
  "compliance consultancy",
  "fintech compliance",
  "AML/CFT",
  "KYC KYB",
  "payment operations",
  "FCA authorisation support",
];

/**
 * Social profile URLs, referenced by the Organization JSON-LD (`sameAs`).
 * Add your real profiles here, e.g.:
 * "https://www.linkedin.com/company/rafinsolutions",
 * "https://x.com/rafinsolutions",
 */
export const SOCIAL_PROFILES: string[] = [];

export interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  ogImage?: string;
}

/**
 * Build a complete Metadata object (title, description, keywords,
 * canonical, OpenGraph, Twitter card, robots) for an indexable page.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  ogImage = DEFAULT_OG_IMAGE,
}: BuildMetadataArgs): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [...keywords, ...CORE_KEYWORDS],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: "en_GB",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* ============================================================
   JSON-LD (Schema.org) builders
   ============================================================ */

export type JsonLdValue = Record<string, unknown>;

export function orgJsonLd(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/Logo/logo.png`,
    email: CONTACT.email,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite to Bega Sanitary Store, Gulyana Road, Kharian",
      addressRegion: "District Gujrat",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT.email,
      telephone: CONTACT.phoneHref.replace("tel:", ""),
      availableLanguage: ["English"],
    },
    ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

export function websiteJsonLd(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webpageJsonLd(opts: {
  title: string;
  description: string;
  path: string;
}): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url: opts.path === "/" ? SITE_URL : `${SITE_URL}${opts.path}`,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function serviceJsonLd(opts: {
  slug: string;
  title: string;
  description: string;
}): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.title,
    description: opts.description,
    serviceType: opts.title,
    url: `${SITE_URL}/service/${opts.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["GB", "EU", "Global"],
    inLanguage: "en-GB",
  };
}

export function courseJsonLd(opts: {
  slug: string;
  title: string;
  description: string;
}): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.title,
    description: opts.description,
    url: `${SITE_URL}/training/${opts.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME_ACADEMY,
      sameAs: SITE_URL,
    },
    inLanguage: "en-GB",
  };
}

export function faqJsonLd(items: { q: string; a: string }[]): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Team members as an ItemList of Person entities, linked to the
 * Organization via its canonical @id.
 */
export function teamJsonLd(
  members: { name: string; role: string }[],
): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: members.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/our-team`,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: {
  name: string;
  path: string;
}[]): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
