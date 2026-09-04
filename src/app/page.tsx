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
  InsightsSection,
  FAQSection,
  CTABandSection,
} from "../components/HomepageSections";

const page = () => {
  return (
    <>
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
        <InsightsSection />
        <FAQSection />
        <CTABandSection />
      </div>
    </>
  );
};

export default page;
