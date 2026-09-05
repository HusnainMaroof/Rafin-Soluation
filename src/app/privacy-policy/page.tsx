import type { Metadata } from "next";
import {
  LegalHero,
  PrivacyPolicyContent,
} from "@/src/components/LegalPages";
import { CTABandSection } from "@/src/components/SharedCTASection";
import React from "react";
import { buildMetadata, webpageJsonLd } from "@/src/lib/seo";
import { JsonLd } from "@/src/lib/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the Rafin Solutions privacy policy to understand how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
  keywords: [
    "Rafin Solutions privacy policy",
    "data protection",
    "UK GDPR",
  ],
});

const page = () => {
  return (
    <>
      <JsonLd
        data={webpageJsonLd({
          title: "Privacy Policy | Rafin Solutions",
          description:
            "Read the Rafin Solutions privacy policy to understand how we collect, use, and protect your personal information.",
          path: "/privacy-policy",
        })}
      />
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        <LegalHero
          title="Privacy"
          highlight="Policy"
          description="How Rafin Solutions collects, uses, and protects your personal information."
        />
        <PrivacyPolicyContent />
        <CTABandSection />
      </div>
    </>
  );
};

export default page;
