"use client";

import React from "react";
import { CONSULTING_SERVICES } from "../Static Data/HomeData";
import { Button, FadeIn, SectionHeading } from "./HelperComponent";

export const ConsultingServicesSection = () => (
  <div className="container mx-auto px-6 lg:px-16 w-full">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <SectionHeading
        title="Consulting Services"
        subtitle="Innovative strategies designed to propel your business forward in the financial sector."
        yellow
        className="mb-0"
      />
      <FadeIn delay={0.2} direction="left">
        <Button primary={false} className="hidden md:flex whitespace-nowrap">
          View All Services
        </Button>
      </FadeIn>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CONSULTING_SERVICES.map((srv, idx) => (
        <FadeIn scale key={idx} delay={idx * 0.1}>
          <div className="p-8 rounded-[2rem] bg-[#121212] border border-white/5 h-full flex flex-col group transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_-15px_rgba(250,204,21,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#161616] hover:border-yellow-400/30">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]">
              {React.cloneElement(srv.icon, { className: "w-5 h-5" })}
            </div>
            <h3 className="font-bold text-lg text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
              {srv.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              {srv.desc}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);
