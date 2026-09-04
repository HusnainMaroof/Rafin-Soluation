import { NewsEventsSection } from "@/src/components/NewsEventsSection";
import { CTABandSection } from "@/src/components/FinCoreSections";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
      <NewsEventsSection />
      <CTABandSection />
    </div>
  );
};

export default page;
