import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { TeamGrid, TeamHero } from "@/src/components/Ourteam";
import { globalStyles } from "@/src/Static Data/HomeData";
import React from "react";

const page = () => {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        
        <TeamHero />
        <TeamGrid />
       
      </div>
    </>
  );
};

export default page;
