import type { Metadata } from "next";
import {
  AboutHero,
  ApprovalStatsBanner,
  TailoredComplianceSection,
} from "@/src/components/AboutUs";
import { CTABandSection } from "@/src/components/SharedCTASection";
import {
  renderExpertiseCard,
  StickySplitSection,
} from "@/src/components/HelperComponent";
import { expertiseData } from "@/src/Static Data/AboutUsData";
import React from "react";
import { buildMetadata, breadcrumbJsonLd, orgJsonLd, webpageJsonLd } from "@/src/lib/seo";
import { JsonLd } from "@/src/lib/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Rafin Solutions is a specialist compliance consultancy built on hands-on experience inside regulated payment, remittance, EMI, MSB, and fintech environments.",
  path: "/about-us",
  keywords: [
    "about Rafin Solutions",
    "compliance consultancy firm",
    "AML/CFT consultants",
    "regulated financial services experts",
  ],
});

const page = () => {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <JsonLd
        data={webpageJsonLd({
          title: "About Us | Rafin Solutions",
          description:
            "Rafin Solutions is a specialist compliance consultancy built on hands-on experience inside regulated payment, remittance, EMI, MSB, and fintech environments.",
          path: "/about-us",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        <AboutHero />
        <ApprovalStatsBanner />

        <StickySplitSection
          title="Our Expertise and Upfront Advices"
          subtitle="We offer a range of services for clients seeking solutions from a strategic, business as usual, or problem-solving perspective."
          items={expertiseData}
          renderCard={renderExpertiseCard}
        />

        <TailoredComplianceSection />
        <CTABandSection />
      </div>
    </>
  );
};

export default page;
