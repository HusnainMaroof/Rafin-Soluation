"use client";

import React from "react";
import { Check } from "lucide-react";
import { COMPLIANCE_POINTS } from "../Static Data/HomeData";

export const ComplianceOverviewSection = () => (
  <section className="bg-white py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full">
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover"
              alt="Compliance"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              Total Compliance Solution
              <span className="text-yellow-500">.</span>
            </h2>
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              A comprehensive compliance solution tailored for the financial
              sector, covering Authorisation, Ongoing compliance, and annual
              audits.
            </p>
            <ul className="space-y-4">
              {COMPLIANCE_POINTS.map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 bg-white border border-slate-200 p-4 rounded-xl transition-colors hover:border-slate-400"
                >
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
