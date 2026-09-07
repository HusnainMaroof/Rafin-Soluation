import type { Metadata } from "next";
import React from "react";
import {
  HeroSection,
  CoreValueSection,
  AboutSection,
  ServicesGridSection,
  EngagementSection,
  WhySection,
  IndustriesSection,
  ExpertiseSection,
  CaseStudiesSection,
  FAQSection,
  CTABandSection,
} from "../components/HomepageSections";
import {
  buildMetadata,
  faqJsonLd,
  orgJsonLd,
  webpageJsonLd,
  websiteJsonLd,
} from "@/src/lib/seo";
import { JsonLd } from "@/src/lib/JsonLd";
import { FAQ_ITEMS } from "@/src/Static Data/FaqData";

export const metadata: Metadata = buildMetadata({
  title: "Compliance & Fintech Consultancy | Rafin Solutions",
  description:
    "Rafin Solutions helps regulated financial businesses with AML/CFT compliance, KYC/KYB, payments operations, training, and outsourced back-office support.",
  path: "/",
  keywords: [
    "financial services compliance consultancy",
    "AML/CFT compliance",
    "FCA authorisation support",
    "KYC KYB outsourcing",
    "fintech operations support",
  ],
});

const page = () => {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd
        data={webpageJsonLd({
          title: "Rafin Solutions | Compliance & Fintech Consultancy",
          description:
            "Rafin Solutions helps regulated financial businesses with AML/CFT compliance, KYC/KYB, payments operations, training, and outsourced back-office support.",
          path: "/",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        <HeroSection />
        <CoreValueSection />
        <AboutSection />
        <div id="services">
          <ServicesGridSection />
        </div>
        <EngagementSection />
        <WhySection />
        <IndustriesSection />
        <ExpertiseSection />
        <CaseStudiesSection />
        <FAQSection />
        <CTABandSection />
      </div>
    </>
  );
};

export default page;
