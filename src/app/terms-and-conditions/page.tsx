import type { Metadata } from "next";
import { LegalHero, TermsContent } from "@/src/components/LegalPages";
import { CTABandSection } from "@/src/components/SharedCTASection";
import React from "react";
import { buildMetadata, webpageJsonLd } from "@/src/lib/seo";
import { JsonLd } from "@/src/lib/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions that govern your use of the Rafin Solutions website and services.",
  path: "/terms-and-conditions",
  keywords: [
    "Rafin Solutions terms",
    "website terms of use",
    "consultancy engagement terms",
  ],
});

const page = () => {
  return (
    <>
      <JsonLd
        data={webpageJsonLd({
          title: "Terms & Conditions | Rafin Solutions",
          description:
            "Read the terms and conditions that govern your use of the Rafin Solutions website and services.",
          path: "/terms-and-conditions",
        })}
      />
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        <LegalHero
          title="Terms &"
          highlight="Conditions"
          description="The terms that govern your use of our website and services."
        />
        <TermsContent />
        <CTABandSection />
      </div>
    </>
  );
};

export default page;
