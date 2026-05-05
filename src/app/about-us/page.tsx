import {
  AboutHero,
  ApprovalStatsBanner,
  TailoredComplianceSection,
} from "@/src/components/AboutUs";
import { Footer } from "@/src/components/Footer";
import {
  renderExpertiseCard,
  StickySplitSection,
} from "@/src/components/HelperComponent";
import { Navbar } from "@/src/components/Navbar";
import { expertiseData } from "@/src/Static Data/AboutUsData";
import { globalStyles } from "@/src/Static Data/HomeData";
import React from "react";

const page = () => {
  return (
    <>
      <style>{globalStyles}</style>
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
 
      </div>
    </>
  );
};

export default page;
