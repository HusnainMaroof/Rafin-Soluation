"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Check,
  PhoneCall,
  LucideProps,
  Link,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./HelperComponent";
import { INDUSTRIES_DATA, IndustryItem } from "../Static Data/IndustryData";

const renderIcon = (icon: React.ReactNode, className: string) => {
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement<LucideProps>, {
      className,
    });
  }
  return icon;
};

export const IndustryHero = ({ industry }: { industry: IndustryItem }) => {

  const titleWords = (industry?.title || "Industry Solutions").split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <section
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden z-0 bg-slate-50"
    >

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        <StaggerContainer className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight flex flex-col md:flex-row flex-wrap justify-center gap-x-4">
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
          <div className="absolute -inset-4 md:-inset-8 bg-yellow-100/70 rounded-[3rem] rotate-3 transform z-0 transition-transform duration-700 hover:rotate-6"></div>

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
              {industry.title}
              <span className="text-yellow-500">.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed -mt-4">
              Practical support for your industry.
            </p>
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
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(226,232,240,1)] hover:border-yellow-400 group overflow-hidden relative cursor-pointer">
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

export const IndustryDetailSections = ({
  industry,
}: {
  industry: IndustryItem;
}) => {
  const challenges = industry?.challenges;

  return (
    <>
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-16 w-full">
          <div className="text-center flex flex-col items-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Industry Overview
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-600 max-w-3xl leading-relaxed text-lg font-medium">
                {industry?.overviewText}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {challenges && (
        <>
          <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-16 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <FadeIn>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                      Common Operational Challenges
                    </h3>
                  </FadeIn>
                  <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    {challenges.operational.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <FadeIn>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                      Compliance Challenges
                    </h3>
                  </FadeIn>
                  <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    {challenges.compliance.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-16 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
                <div className="lg:sticky lg:top-28">
                  <FadeIn>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
                      How Rafin Can Support
                    </h3>
                  </FadeIn>
                </div>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  {(industry?.howWeSupport ?? []).map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
                    >
                      <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 text-slate-900 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-3" />
                      </span>
                      <span className="text-slate-700 font-medium leading-relaxed">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export const CTASection = () => (
  <section className="py-24 bg-slate-50 relative border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <FadeIn scale>
        <div className="bg-slate-50 rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl border border-slate-200">
          <div className="absolute -top-32 -left-32 w-[60%] h-[60%] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="mb-8">
              <PhoneCall className="w-12 h-12 text-yellow-500 stroke-2 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Ready to secure your <br />
              <span className="text-yellow-600 font-tronica">compliance</span> future?
            </h2>

            <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
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
      <div className="min-h-screen font-sans bg-white selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden">
        <IndustryHero industry={displayIndustry} />
        <IndustryDetailSections industry={displayIndustry} />
        <IndustryOverview industry={displayIndustry} />
        <IndustryBentoSection industry={displayIndustry} />
        <CTASection />
      </div>
    </>
  );
};

export default Industry;
