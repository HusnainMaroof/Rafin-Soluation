import {
  AboutHero,
  ApprovalStatsBanner,
  TailoredComplianceSection,
} from "@/src/components/AboutUs";
import { CTABandSection } from "@/src/components/FinCoreSections";
import {
  renderExpertiseCard,
  StickySplitSection,
} from "@/src/components/HelperComponent";
import { expertiseData } from "@/src/Static Data/AboutUsData";
import React from "react";

const page = () => {
  return (
    <>
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
