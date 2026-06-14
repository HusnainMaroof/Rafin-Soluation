"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Target,
  PhoneCall,
  Settings,
  LucideProps,
  Link,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./HelperComponent";
import { INDUSTRIES_DATA, IndustryItem } from "../Static Data/IndustryData";
import { globalStyles } from "../Static Data/HomeData";

const renderIcon = (icon: React.ReactNode, className: string) => {
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement<LucideProps>, {
      className,
    });
  }
  return icon;
};

export const IndustryHero = ({ industry }: { industry: any }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  const titleWords = (industry?.title || "Industry Solutions").split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <section
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden z-0 bg-slate-50"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.04), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-grid-pattern z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        <StaggerContainer className="flex flex-col items-center">
          <StaggerItem>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_-2px_0_0_rgb(226,232,240,1)] text-xs md:text-sm font-medium mb-8">
              <span className="text-slate-900 w-4 h-4 flex items-center justify-center">
                {renderIcon(industry?.icon || <Settings />, "w-4 h-4")}
              </span>
              Industry Expertise / {industry?.title || "Solutions"}
            </div>
          </StaggerItem>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight flex flex-col md:flex-row flex-wrap justify-center gap-x-4">
            <StaggerItem>{firstWord}</StaggerItem>
            <StaggerItem>
              <span className="font-tronica block text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                {restOfTitle || "Solutions"}
              </span>
            </StaggerItem>
          </h1>

          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              {industry?.desc ||
                "Strategic compliance solutions designed for specific financial sectors."}
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export const IndustryOverview = ({ industry }: { industry: IndustryItem }) => (
  <section className="bg-white py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <FadeIn scale className="lg:w-1/2 w-full relative">
          <div className="absolute -inset-4 md:-inset-8 bg-blue-100/60 rounded-[3rem] rotate-3 transform z-0 transition-transform duration-700 hover:rotate-6"></div>

          <div className="relative w-full aspect-square  mx-auto rounded-4xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] group transition-transform duration-700 hover:scale-[1.02]">
            <img
              src={industry.image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              alt={industry.title}
            />
          </div>
        </FadeIn>

        <div className="lg:w-1/2 w-full">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              Sector Overview & Approach
              <span className="text-yellow-500">.</span>
            </h2>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              {industry.overviewText}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-4xl p-8 flex flex-col gap-6 transition-all duration-500 hover:border-slate-900 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)]">
              {industry.features.map((feature, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-start gap-5">
                    <div className="mt-1 bg-white border border-slate-200 p-2.5 rounded-xl text-yellow-500 shrink-0 shadow-sm">
                      {idx === 0 ? (
                        <ShieldCheck className="w-6 h-6" />
                      ) : (
                        <Target className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  {idx < industry.features.length - 1 && (
                    <div className="w-full h-px bg-slate-200"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export const IndustryBentoSection = ({
  industry,
}: {
  industry: IndustryItem;
}) => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-16 w-full">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Sector Deliverables
            </h2>
            <p className="text-slate-600 font-medium">
              Strategic compliance components designed specifically to address
              the needs of your industry.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {industry.bentoBoxes.map((box, idx) => (
            <FadeIn scale delay={idx * 0.2} key={idx}>
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 group overflow-hidden relative cursor-pointer">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 mb-8 group-hover:bg-slate-900 transition-colors duration-500 shadow-sm relative z-10">
                  {renderIcon(
                    box.icon,
                    "w-8 h-8 text-yellow-500 m-0 p-0 mb-0 group-hover:scale-110 transition-transform duration-500 group-hover:text-yellow-400",
                  )}
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-slate-800 transition-colors duration-300 relative z-10 tracking-tight">
                  {box.title}
                </h3>
                <p className="text-slate-600 mb-8 grow leading-relaxed relative z-10 font-medium">
                  {box.desc}
                </p>

                <ul className="space-y-4 pt-8 border-t border-slate-100 relative z-10">
                  {box.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 text-sm group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 75}ms` }}
                    >
                      <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                      <span className="font-semibold leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => (
  <section className="py-24 bg-slate-50 relative border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <FadeIn scale>
        <div className="bg-[#0f1423] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -top-32 -left-32 w-[60%] h-[60%] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="mb-8">
              <PhoneCall className="w-12 h-12 text-yellow-400 stroke-2 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Ready to secure your <br />
              <span className="text-yellow-400 font-tronica">compliance</span> future?
            </h2>

            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Get in touch with our expert consultants today to secure your
              business and streamline your regulatory framework.
            </p>

             <Link href={"/contact-us"}>
              {" "}
              <button className="group cursor-pointer inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 bg-yellow-400 text-slate-900 shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.7)] hover:bg-yellow-300 hover:-translate-y-1">
                Contact Us{" "}
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);


// ==========================================
// 5. MAIN COMPONENT
// ==========================================
export const Industry = ({ industry }: { industry?: IndustryItem }) => {
  const displayIndustry = industry || INDUSTRIES_DATA[0];

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans bg-white selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden">
        <IndustryHero industry={displayIndustry} />
        <IndustryOverview industry={displayIndustry} />
        <IndustryBentoSection industry={displayIndustry} />
        <CTASection />
      </div>
    </>
  );
};

export default Industry;
