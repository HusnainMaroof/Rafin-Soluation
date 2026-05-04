import React from "react";
import { globalStyles } from "../Static Data/HomeData";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { KeyAdvisorySection } from "../components/AdvisorySection";
import { StickySection } from "../components/HelperComponent";
import { ConsultingServicesSection } from "../components/ServiceSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { TotalComplianceSection } from "../components/TotalComlianceSection";
import { AMLTrainingSection } from "../components/AMLTrainingSection";
import {
  FinTechAndAMLSection,
} from "../components/FinTechAndAMLSection";
import { Footer } from "../components/Footer";

const page = () => {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans bg-[#050505] text-slate-200 selection:bg-yellow-400 selection:text-black overflow-clip">
        <Navbar />
        <HeroSection />

        {/* === Stacked / Pinned Sections Group === */}
        <div className="relative w-full z-10">
          <StickySection zIndex={10} bgClass="bg-[#050505]">
            <KeyAdvisorySection />
          </StickySection>

          <StickySection zIndex={20} bgClass="bg-[#0a0a0a]">
            <ConsultingServicesSection />
          </StickySection>

          <StickySection zIndex={30} bgClass="bg-[#050505]">
            <ExperienceSection />
          </StickySection>

          <StickySection zIndex={40} bgClass="bg-[#0a0a0a]">
            <TotalComplianceSection />
          </StickySection>
        </div>

        {/* === Normal Scroll Sections === */}
        <div className="relative z-[50] bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/5 rounded-t-[2rem] lg:rounded-none overflow-hidden">
          <FinTechAndAMLSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
