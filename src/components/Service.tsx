"use client";

import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./HelperComponent";
import { ArrowRight, Check, PhoneCall, ShieldCheck, Target } from "lucide-react";
import Link from "next/link";
import { DynamicIcon } from "./DynamicIcon";
import type { ServiceData } from "../Static Data/ServiceData";

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface Feature {
  title: string;
  desc: string;
}

interface BentoBox {
  icon: string;
  title: string;
  desc: string;
  points: string[];
}

interface Service {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  overviewText: string;
  image: string;
  features: Feature[];
  bentoBoxes: BentoBox[];
}

// Render the FinCore-style structured service copy blocks
export const ServiceDetailSections = ({ service }: { service: ServiceData }) => {
  const blocks = service.copyBlocks ?? [];

  return (
    <>
      {blocks.map((block, idx) => (
        <section
          key={block.title}
          className={`py-16 md:py-20 border-t border-slate-200 ${
            idx % 2 === 0 ? "bg-slate-50" : "bg-white"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  {block.title}
                </h2>
              </FadeIn>
            </div>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {block.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 text-slate-900 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </span>
                  <span className="text-slate-700 font-medium leading-relaxed">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
};

// â”€â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const ServicesHero = ({ service }: { service: Service }) => {

  const [firstWord, ...rest] = service.title.split(" ");
  const remainingWords = rest.join(" ") || "Service";

  return (
    <section
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden z-0 bg-slate-50"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        <StaggerContainer>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight flex flex-col md:flex-row flex-wrap justify-center gap-x-4">
            <StaggerItem>{firstWord}</StaggerItem>
            <StaggerItem>
              <span className="font-tronica text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                {remainingWords}
              </span>
            </StaggerItem>
          </h1>

          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              {service.desc}
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

// â”€â”€â”€ Overview â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const ServiceOverview = ({ service }: { service: Service }) => (
  <section className="bg-white py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <FadeIn scale className="lg:w-1/2 w-full relative">
          <div className="absolute -inset-4 md:-inset-8 bg-yellow-100/70 rounded-[3rem] rotate-3 transform z-0 transition-transform duration-700 hover:rotate-6" />
          <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group aspect-[4/3] sm:aspect-[16/10]">
            <img
              src={service.image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              alt={service.title}
            />
          </div>
        </FadeIn>

        <div className="lg:w-1/2 w-full">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              {service.title}
              <span className="text-yellow-500">.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed -mt-4">
              Practical, documented, and operationally usable support.
            </p>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {service.overviewText}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-4xl p-8 flex flex-col gap-6 transition-all duration-500 hover:border-slate-900 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)]">
              {service.features.map((feature, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-white border border-slate-200 p-2 rounded-lg text-slate-900 shrink-0 shadow-sm">
                      {idx === 0 ? (
                        <ShieldCheck className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <Target className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  {idx === 0 && <div className="w-full h-px bg-slate-200" />}
                </React.Fragment>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

// â”€â”€â”€ Bento Features â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const BentoFeaturesSection = ({ service }: { service: Service }) => (
  <section className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="grid lg:grid-cols-2 gap-8">
        {service.bentoBoxes.map((box, idx) => (
          <FadeIn scale delay={idx * 0.2} key={idx}>
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(226,232,240,1)] hover:border-yellow-400 group overflow-hidden relative cursor-pointer">
              
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 mb-8 group-hover:bg-slate-900 transition-colors duration-500 shadow-sm">
                {/* âœ… DynamicIcon replaces React.cloneElement */}
                <DynamicIcon
                  name={box.icon}
                  className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-500 group-hover:text-yellow-400"
                />
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-slate-800 transition-colors duration-300">
                {box.title}
              </h3>
              <p className="text-slate-600 mb-8 grow leading-relaxed relative z-10">
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
                    <span className="font-medium">{point}</span>
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

// â”€â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const CTASection = () => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <FadeIn scale>
        <div className="bg-slate-50 rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl border border-slate-200">
          <div className="absolute -top-32 -left-32 w-[60%] h-[60%] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="mb-8">
              <PhoneCall className="w-12 h-12 text-yellow-500 stroke-2 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Ready to secure your <br />
              <span className="text-yellow-600 font-tronica">compliance</span>{" "}
              future?
            </h2>

            <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Get in touch with our expert consultants today to secure your
              business and streamline your regulatory framework.
            </p>

            <Link href="/contact-us">
              <button className="group cursor-pointer inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 bg-yellow-400 text-slate-900 shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.7)] hover:bg-yellow-300 hover:-translate-y-1">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

// â”€â”€â”€ Page Root â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const Services = ({ service }: { service: Service }) => (
  <>
    <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
      <ServicesHero service={service} />
      <ServiceOverview service={service} />
      <ServiceDetailSections service={service} />
      <BentoFeaturesSection service={service} />
      <CTASection />
    </div>
  </>
);