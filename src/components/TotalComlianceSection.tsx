"use client";

import React from "react";
import { Check } from "lucide-react";
import { FadeIn, SectionHeading } from "./HelperComponent";
import { COMPLIANCE_POINTS } from "../Static Data/HomeData";

export const TotalComplianceSection = () => (
  <div className="container mx-auto px-6 lg:px-16 w-full">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <FadeIn scale className="lg:w-1/2 w-full">
        <div className="relative w-full aspect-square max-w-md mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-transform duration-700 hover:scale-[1.02]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            alt="Compliance"
          />
          <div className="absolute inset-0 border-[20px] border-[#0a0a0a] rounded-[2rem] pointer-events-none transition-all duration-700 group-hover:border-[10px]"></div>
        </div>
      </FadeIn>
      <div className="lg:w-1/2 w-full">
        <SectionHeading title="Total Compliance Solution" yellow />
        <FadeIn delay={0.2}>
          <p className="text-slate-400 leading-relaxed mb-8 text-lg">
            A comprehensive compliance solution tailored for the financial
            sector, covering Authorisation, Ongoing compliance, and annual
            audits.
          </p>
          <ul className="space-y-4">
            {COMPLIANCE_POINTS.map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl group transition-all duration-300 hover:bg-[#161616] hover:border-yellow-400/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(250,204,21,0.2)]"
              >
                <Check className="w-5 h-5 text-yellow-400 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  </div>
);
