"use client";
import React from "react";
import { ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";
import { FadeIn, SectionHeading } from "./HelperComponent";
import { ADVISORY_CARDS } from "../Static Data/HomeData";

export const KeyAdvisorySection = () => (
  <div className="container mx-auto px-6 lg:px-16 w-full">
    <SectionHeading 
      title="Key Professional Advisory" 
      subtitle="We are experienced and specialised in the key services below, ensuring your business stays compliant and competitive."
      yellow
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Featured Card */}
      <FadeIn scale className="md:col-span-2 md:row-span-2">
         <div className="group relative bg-[#121212] rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-end min-h-[400px] border border-white/5 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_-15px_rgba(250,204,21,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-yellow-400/40">
           <img src={ADVISORY_CARDS[0].img} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" alt="" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#121212]/80 to-transparent group-hover:via-[#121212]/60 transition-all duration-500"></div>
           
           <div className="relative z-10 transform group-hover:translate-y-[-5px] transition-transform duration-500">
             <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] group-hover:scale-110 transition-all duration-500">
               <ShieldCheck className="w-6 h-6" />
             </div>
             <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">{ADVISORY_CARDS[0].title}</h3>
             <p className="text-slate-300 text-lg max-w-md mb-8 drop-shadow-sm transition-colors duration-300 group-hover:text-white">{ADVISORY_CARDS[0].desc}</p>
             <button className="text-yellow-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
               Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
         </div>
      </FadeIn>

      {/* Sub Cards */}
      {ADVISORY_CARDS.slice(1).map((card, idx) => (
        <FadeIn scale key={idx} delay={(idx + 1) * 0.1} className={idx === 2 ? "md:col-span-3 lg:col-span-1" : ""}>
          <div className="bg-gradient-to-b from-[#161616] to-[#121212] rounded-[2rem] p-8 h-full border border-white/5 flex flex-col group relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_15px_40px_-10px_rgba(250,204,21,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-yellow-400/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500">
              <ArrowUpRight className="text-yellow-400 w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-white mb-3 mt-4 group-hover:text-yellow-400 transition-colors duration-300">{card.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-grow group-hover:text-slate-300 transition-colors duration-300">{card.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);