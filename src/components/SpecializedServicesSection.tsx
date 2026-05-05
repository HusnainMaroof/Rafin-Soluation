"use client";

import React from "react";
import { CONSULTING_SERVICES } from "../Static Data/HomeData";
import { Button, FadeIn,  } from "./HelperComponent";
import { Check } from "lucide-react";

export const SpecializedServicesSection = () => (
  <section className="bg-[#0b1727] py-24 border-t border-[#1e293b] overflow-hidden">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-cyan-400">Our Specialized Services</h2>
            <p className="text-slate-300 mb-10 leading-relaxed text-lg">Rafin Solutions specialised services assist the financial service providers not only successfully secure the licence but also ensure the compliance during the operations and complying with their ongoing regulatory requirements. Rafin Solutions also assists the FINTECH companies to expand its operation through payment and card schemes.</p>
            <ul className="space-y-4">
              {[
                "Licence authorisation from FCA.",
                "Annual Compliance Audit.",
                "Ongoing compliance monitoring.",
                "SWIFT and SEPA payment schemes.",
                "Principal and associate membership of Visa and MasterCard schemes."
              ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="mt-1 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                     <Check className="w-3.5 h-3.5 stroke-3" />
                   </div>
                   <span className="text-white font-medium">{item}</span>
                 </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <FadeIn scale className="lg:w-1/2 w-full relative">
           <div className="absolute -inset-4 md:-inset-8 bg-white/5 rounded-[3rem] rotate-3 transform z-0 transition-transform duration-700 hover:rotate-6"></div>
           <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] group">
             <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" alt="Specialized Services" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);