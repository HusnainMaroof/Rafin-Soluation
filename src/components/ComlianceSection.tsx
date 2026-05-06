"use client";

import React from "react";
import { Check } from "lucide-react";
import { FadeIn } from "./HelperComponent";
import { COMPLIANCE_POINTS } from "../Static Data/HomeData";

export const ComplianceOverviewSection = () => (
  <section className="bg-white py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <FadeIn scale className="lg:w-1/2 w-full relative">
          <div className="absolute -inset-4 md:-inset-8 bg-blue-100/60 rounded-[3rem] rotate-3 transform z-0 transition-transform duration-700 hover:rotate-6"></div>
          <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              alt="Compliance"
            />
          </div>
        </FadeIn>

        <div className="lg:w-1/2 w-full">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              Total Compliance Solution
              <span className="text-yellow-500">.</span>
            </h2>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              A comprehensive compliance solution tailored for the financial
              sector, covering Authorisation, Ongoing compliance, and annual
              audits.
            </p>
            <ul className="space-y-4">
              {COMPLIANCE_POINTS.map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 bg-white border border-slate-200 p-4 rounded-xl group transition-all duration-300 hover:border-slate-900 hover:-translate-y-1 shadow-[0_4px_15px_rgb(0,0,0,0.02),inset_0_-3px_0_0_rgb(226,232,240,1)] hover:shadow-[0_15px_30px_rgb(0,0,0,0.1),inset_0_-4px_0_0_rgb(15,23,42,1)] cursor-pointer"
                >
                  <Check className="w-5 h-5 text-yellow-500 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);
