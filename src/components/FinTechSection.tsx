"use client";

import React from "react";
import { Check, CreditCard, MonitorSmartphone } from "lucide-react";
import { FadeIn } from "./HelperComponent";
import { FINTECH_POINTS,  TRAINING_POINTS } from "../Static Data/HomeData";

export const FinTechServicesSection = () => (
  <section className="bg-white py-24 border-t border-slate-200 overflow-hidden">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Our Fin-Tech Services</h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">Assist Fintech clients with comprehensive services, including KYC/AML verification tools & automated transaction monitoring (partnering ship with Comply Advantage & SUMSUB), assist the FINTECH companies to successfully secure the visa/master card membership, and full access to SWIFT & SEPA payment schemes.</p>
            <h3 className="text-2xl font-bold mb-6 text-slate-800">What's included in Fin-Tech Services?</h3>
            <ul className="space-y-4">
              {[
                "Assist in SWIFT and SEPA payment schemes.",
                "Principal and associate membership of Visa and MasterCard schemes.",
                "Assist in KYC, AML monitoring tool including Sanction and PEP Check (partnering ship with Comply Advantage and SUMSUB).",
                "Automated transaction monitoring tools (Partnering ship with Comply Advantage and SUMSUB)."
              ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                     <Check className="w-3.5 h-3.5 stroke-3" />
                   </div>
                   <span className="text-slate-700 font-medium">{item}</span>
                 </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <FadeIn scale className="lg:w-1/2 w-full relative">
           <div className="absolute -inset-4 md:-inset-8 bg-blue-50 rounded-[3rem] -rotate-3 transform z-0 transition-transform duration-700 hover:-rotate-6"></div>
           <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Fin-Tech Services" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);