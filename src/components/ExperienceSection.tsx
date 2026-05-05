"use client ";

import { ShieldCheck } from "lucide-react";
import { FadeIn } from "./HelperComponent";

export const ExperienceSection = () => (
  <section className="bg-slate-50 py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <FadeIn scale>
        <div className="bg-white rounded-[3rem] border border-slate-200 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden transition-all duration-700 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_40px_80px_rgb(0,0,0,0.15),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 cursor-pointer group/wrap">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="lg:w-1/2 w-full relative z-10">
            <h2 className="font-tech text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-300 mb-6 tracking-tighter drop-shadow-sm">
              15+
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Years of Excellence.
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Rafin Solutions has expanded its offerings from compliance
              consultancy to corporate governance and Risk Management culture.
              We protect FINTECHs globally.
            </p>
            <div className="flex items-center gap-4 text-slate-900 font-bold bg-slate-50 border border-slate-200 p-4 rounded-2xl  shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_-2px_0_0_rgb(226,232,240,1)] group-hover/wrap:border-slate-900 transition-colors">
              <ShieldCheck className="w-6 h-6 text-yellow-500" />
              100+ Financial Institutions Trusted
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-100 relative rounded-4xl overflow-hidden border border-slate-200 z-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="15 Years of Experiences"
              className="w-full h-full object-cover group-hover/wrap:scale-[1.05] transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
