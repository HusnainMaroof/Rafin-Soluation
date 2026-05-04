"use client";

import React from "react";
import { Check, CreditCard, MonitorSmartphone } from "lucide-react";
import { FadeIn } from "./HelperComponent";
import { FINTECH_POINTS, EMONEY_POINTS } from "../Static Data/HomeData";

export const FinTechAndEMoneySection = () => (
  <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Fin-Tech Services Card */}
        <FadeIn scale>
          <div className="bg-gradient-to-b from-[#161616] to-[#121212] border border-white/5 rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(250,204,21,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-yellow-400/50 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <MonitorSmartphone className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Our Fin-Tech Services
            </h3>
            <p className="text-slate-400 mb-8 flex-grow group-hover:text-slate-300 transition-colors duration-300 relative z-10">
              We assist Fintech clients with comprehensive services, including
              cutting-edge KYC/AML verification tools and automated transaction
              monitoring.
            </p>
            <ul className="space-y-4 pt-8 border-t border-white/10 relative z-10">
              {FINTECH_POINTS.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 text-sm group-hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Check className="w-4 h-4 text-yellow-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* E-Money Licensing Card */}
        <FadeIn delay={0.2} scale>
          <div className="bg-gradient-to-b from-[#161616] to-[#121212] border border-white/5 rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(250,204,21,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-yellow-400/50 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <CreditCard className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              E-Money Licensing
            </h3>
            <p className="text-slate-400 mb-8 flex-grow group-hover:text-slate-300 transition-colors duration-300 relative z-10">
              Rafin Solutions guides UK businesses through the complex FCA
              authorization process to issue E-Money, ensuring strict adherence
              to EMRs.
            </p>
            <ul className="space-y-4 pt-8 border-t border-white/10 relative z-10">
              {EMONEY_POINTS.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 text-sm group-hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Check className="w-4 h-4 text-yellow-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
