"use client";

import React, { useState } from "react";
import { Button, FadeIn, StaggerContainer, StaggerItem } from "./HelperComponent";
import { ArrowRight, Check, PhoneCall, ShieldCheck, Target } from "lucide-react";
import { globalStyles } from "../Static Data/HomeData";
import { Footer } from "./Footer";
import Link from "next/link";
import { DynamicIcon } from "./DynamicIcon";

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const ServicesHero = ({ service }: { service: Service }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const [firstWord, ...rest] = service.title.split(" ");
  const remainingWords = rest.join(" ") || "Service";

  return (
    <section
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden z-0 bg-slate-50"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.06), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        <StaggerContainer>
          <StaggerItem>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_-2px_0_0_rgb(226,232,240,1)] text-xs md:text-sm font-medium mb-8">
              <span className="text-slate-900 w-4 h-4 flex items-center justify-center">
                {/* ✅ DynamicIcon replaces React.cloneElement */}
                <DynamicIcon name={service.icon} className="w-4 h-4" />
              </span>
              Our Services / {service.title}
            </div>
          </StaggerItem>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight flex flex-col md:flex-row flex-wrap justify-center gap-x-4">
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

// ─── Overview ─────────────────────────────────────────────────────────────────

export const ServiceOverview = ({ service }: { service: Service }) => (
  <section className="bg-white py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <FadeIn scale className="lg:w-1/2 w-full relative">
          <div className="absolute -inset-4 md:-inset-8 bg-blue-100/60 rounded-[3rem] rotate-3 transform z-0 transition-transform duration-700 hover:rotate-6" />
          <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group">
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
              Strategic Planning & Assessment
              <span className="text-yellow-500">.</span>
            </h2>
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

// ─── Bento Features ───────────────────────────────────────────────────────────

export const BentoFeaturesSection = ({ service }: { service: Service }) => (
  <section className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="grid lg:grid-cols-2 gap-8">
        {service.bentoBoxes.map((box, idx) => (
          <FadeIn scale delay={idx * 0.2} key={idx}>
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 group overflow-hidden relative cursor-pointer">
              
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 mb-8 group-hover:bg-slate-900 transition-colors duration-500 shadow-sm">
                {/* ✅ DynamicIcon replaces React.cloneElement */}
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

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const CTASection = () => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <FadeIn scale>
        <div className="bg-[#0f1423] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -top-32 -left-32 w-[60%] h-[60%] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="mb-8">
              <PhoneCall className="w-12 h-12 text-yellow-400 stroke-2 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Ready to secure your <br />
              <span className="text-yellow-400 font-tronica">compliance</span>{" "}
              future?
            </h2>

            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
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

// ─── Page Root ────────────────────────────────────────────────────────────────

export const Services = ({ service }: { service: Service }) => (
  <>
    <style>{globalStyles}</style>
    <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
      <ServicesHero service={service} />
      <ServiceOverview service={service} />
      <BentoFeaturesSection service={service} />
      <CTASection />
    </div>
  </>
);