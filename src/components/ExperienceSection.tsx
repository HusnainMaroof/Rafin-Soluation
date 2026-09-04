"use client ";

import { ShieldCheck } from "lucide-react";

export const ExperienceSection = () => (
  <section className="bg-slate-50 py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full">
          <h2 className="font-tronica text-6xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tighter">
            7+
          </h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Years of Excellence.
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Rafin Solutions has expanded its offerings from compliance
            consultancy to corporate governance and Risk Management culture.
            We protect FINTECHs globally.
          </p>
          <div className="flex items-center gap-4 text-slate-900 font-bold bg-slate-50 border border-slate-200 p-4 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-yellow-500" />
            100+ Financial Institutions Trusted
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="15 Years of Experiences"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
