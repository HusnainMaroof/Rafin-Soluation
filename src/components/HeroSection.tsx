"use client";
import React from "react";
import { Button, FadeIn } from "./HelperComponent";

const STATS = [
  { value: "7+", label: "Years Fintech Experience" },
  { value: "5+", label: "Service Areas" },
  { value: "100+", label: "Institutions Trusted" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 pt-32 overflow-hidden z-0">
      {/* Original background: grid pattern + soft glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-yellow-300/20 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-12 lg:gap-20 w-full">
          {/* LEFT: heading + paragraph + CTAs */}
          <div className="lg:w-3/5 w-full flex flex-col items-start">
            <FadeIn className="flex flex-col items-start">
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight flex flex-col">
                <span>Redefining</span>
                <span className="font-tronica text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                  Financial
                </span>
                <span>Success.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10">
                Expert advisory and professional services tailored to navigate
                the complexities of financial regulations, empowering your
                fintech journey.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/contact-us">
                  <Button primary className="text-base px-8 py-4">
                    Book a Consultation
                  </Button>
                </a>
                <a href="#services">
                  <Button primary={false} className="text-base px-8 py-4">
                    Explore Services
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: button-style stat cards in a row, pinned to bottom corner */}
          <div className="lg:w-2/5 w-full flex flex-col justify-end items-stretch lg:items-end">
            <FadeIn className="w-full flex lg:justify-end">
              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-full border border-slate-200 px-5 py-3 flex items-center justify-center gap-2 shadow-sm hover:border-slate-900 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <span className="text-xl font-extrabold text-slate-900 font-heading">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-600 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
