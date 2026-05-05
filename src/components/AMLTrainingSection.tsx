"use client";

import React from "react";
import { FadeIn} from "./HelperComponent";
import { TRAINING_POINTS } from "../Static Data/HomeData";
import { Check } from "lucide-react";

export const AMLTrainingSection = () => (
  <section className="bg-slate-50 py-24 border-t border-slate-200 overflow-hidden">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <FadeIn scale className="lg:w-1/2 w-full relative">
           <div className="absolute -inset-4 md:-inset-8 bg-blue-100/60 rounded-[3rem] rotate-3 transform z-0 transition-transform duration-700 hover:rotate-6"></div>
           <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group">
             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="AML Training" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
           </div>
        </FadeIn>
        <div className="lg:w-1/2 w-full z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">AML/CFT Training</h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">Provides extensive AML/CFT training programs that encompass a broad spectrum of regulations, offering both online and in-person training sessions. Training is designed by the professionals working in the industry by considering the recent trends and regulatory requirements.</p>
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Why Choose our Professional Training?</h3>
            <ul className="space-y-4">
              {[
                "AML / CFT business tailored online training programmes.",
                "Design annual comprehensive training programs for FINTECH companies.",
                "Assessment tests after the completion of the training programmes.",
                "AML & CFT Regulations.",
                "Scenario based real life training examples."
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
      </div>
    </div>
  </section>
);
