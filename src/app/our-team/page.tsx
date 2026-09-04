import { CTABandSection } from "@/src/components/FinCoreSections";
import { TeamGrid, TeamHero } from "@/src/components/Ourteam";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        
        <TeamHero />
        <TeamGrid />
        <CTABandSection />
    
      </div>
    </>
  );
};

export default page;
