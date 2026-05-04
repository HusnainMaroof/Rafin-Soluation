"use client ";

import { ShieldCheck } from "lucide-react";
import { FadeIn } from "./HelperComponent";

export const ExperienceSection = () => (
  <div className="container mx-auto px-6 lg:px-16 w-full">
    <FadeIn scale>
      <div className="bg-[#121212] rounded-[3rem] border border-white/10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(250,204,21,0.1),inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="lg:w-1/2 w-full relative z-10">
          <h2 className="font-tech text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-6 tracking-tighter drop-shadow-sm">
            15+
          </h2>
          <h3 className="text-3xl font-bold text-white mb-6">
            Years of Excellence.
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6 text-lg">
            Rafin Solutions has expanded its offerings from compliance
            consultancy to corporate governance and Risk Management culture. We
            protect FINTECHs globally.
          </p>
          <div className="flex items-center gap-4 text-white font-bold bg-white/5 border border-white/10 p-4 rounded-2xl inline-flex shadow-sm hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1">
            <ShieldCheck className="w-6 h-6 text-yellow-400" />
            100+ Financial Institutions Trusted
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-[400px] relative rounded-[2rem] overflow-hidden border border-white/10 z-10 group shadow-lg">
          <div className="absolute inset-0 bg-[#050505]/40 z-10 mix-blend-overlay group-hover:bg-[#050505]/10 transition-colors duration-700"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="15 Years of Experiences"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      </div>
    </FadeIn>
  </div>
);
