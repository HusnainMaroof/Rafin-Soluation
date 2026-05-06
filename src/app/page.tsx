import React from "react";
import {
  ADVISORY_CARDS,
  CONSULTING_SERVICES,
  globalStyles,
} from "../Static Data/HomeData";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";

import { ExperienceSection } from "../components/ExperienceSection";
import { ComplianceOverviewSection } from "../components/ComlianceSection";

import { Footer } from "../components/Footer";
import {
  renderAdvisoryCard,
  renderServiceCard,
  StickySplitSection,
} from "../components/HelperComponent";
import { AMLTrainingSection } from "../components/AMLTrainingSection";
import { FinTechServicesSection } from "../components/FinTechSection";
import { SpecializedServicesSection } from "../components/SpecializedServicesSection";
import { NewsEventsSection } from "../components/NewsEventsSection";

const page = () => {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-clip">
     
        <HeroSection />

        <StickySplitSection
          title="Key Professional Advisory"
          subtitle="We are experienced and specialised in the key services below, ensuring your business stays compliant and competitive."
          items={ADVISORY_CARDS}
          renderCard={renderAdvisoryCard}
        />

        {/* Split Section 2: Services */}
        <StickySplitSection
          title="Consulting Services"
          subtitle="Innovative strategies designed to propel your business forward in the financial sector. Browse our full suite of professional services."
          items={CONSULTING_SERVICES}
          renderCard={renderServiceCard}
        />

        {/* === Normal Scroll Sections === */}
        <div className="relative z-50">
          <ExperienceSection />
          <ComplianceOverviewSection />
          <AMLTrainingSection />
          <FinTechServicesSection />
          <SpecializedServicesSection />
          <NewsEventsSection params={""} />
       
        </div>
      </div>
    </>
  );
};

export default page;
