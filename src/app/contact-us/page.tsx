import type { Metadata } from "next";
import ContactUS from "@/src/components/ContectUS";
import { CTABandSection } from "@/src/components/SharedCTASection";
import React from "react";
import { buildMetadata, breadcrumbJsonLd, CONTACT, orgJsonLd, webpageJsonLd } from "@/src/lib/seo";
import { JsonLd } from "@/src/lib/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Rafin Solutions to discuss compliance, licensing, AML/CFT, fintech operations, or training support for your financial business.",
  path: "/contact-us",
  keywords: [
    "contact Rafin Solutions",
    "book compliance consultation",
    "fintech compliance advice",
    "FCA authorisation enquiry",
  ],
});

const page = () => {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <JsonLd
        data={webpageJsonLd({
          title: "Contact Us | Rafin Solutions",
          description:
            "Get in touch with Rafin Solutions to discuss compliance, licensing, AML/CFT, fintech operations, or training support.",
          path: "/contact-us",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact-us" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Rafin Solutions",
          url: "https://rafinsolutions.com/contact-us",
          mainEntity: {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: CONTACT.phoneHref.replace("tel:", ""),
            email: CONTACT.email,
            availableLanguage: ["English"],
          },
        }}
      />
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        <ContactUS />
        <CTABandSection />
      </div>
    </>
  );
};

export default page;
