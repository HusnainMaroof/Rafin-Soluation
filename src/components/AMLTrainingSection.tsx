"use client";

import React from "react";
import { FadeIn, Button, SectionHeading } from "./HelperComponent";
import { TRAINING_POINTS } from "../Static Data/HomeData";

export const AMLTrainingSection = () => (
  <section className="py-32 bg-[#050505]">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
        <FadeIn direction="left" scale className="lg:w-1/2 w-full">
           <div className="bg-[#121212] border border-white/5 p-8 rounded-[2rem] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_-15px_rgba(250,204,21,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-yellow-400/40 group">
             <div className="overflow-hidden rounded-xl mb-8 border border-white/5 relative">
               <div className="absolute inset-0 bg-yellow-400/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
               <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" className="w-full h-64 object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" alt="Training" />
             </div>
             <h4 className="font-bold text-white text-xl mb-4 group-hover:text-yellow-400 transition-colors">Why Choose Our Training?</h4>
             <ul className="space-y-3">
              {TRAINING_POINTS.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0 group-hover:animate-pulse"></div>
                  <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{text}</span>
                </li>
              ))}
             </ul>
           </div>
        </FadeIn>
        <div className="lg:w-1/2 w-full">
          <SectionHeading title="AML/CFT Training" yellow />
          <FadeIn delay={0.2}>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              We provide extensive AML/CFT training programs encompassing a broad spectrum of regulations. Designed by active industry professionals, our training reflects the latest trends.
            </p>
            <Button>Explore Programs</Button>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);