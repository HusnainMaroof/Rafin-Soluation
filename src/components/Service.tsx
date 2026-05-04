"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Target,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import { globalStyles } from "../Static Data/HomeData";
import { Button, FadeIn, SectionHeading } from "./HelperComponent";
import { SERVICES_DATA } from "../Static Data/ServiceData";

// ==========================================
// 4. DYNAMIC LAYOUT SECTIONS
// ==========================================

const ServicesHero = ({ service }: { service: any }) => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden z-0">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
      <FadeIn>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs md:text-sm font-medium mb-6">
          <span className="text-yellow-400 w-4 h-4 flex items-center justify-center">
            {React.cloneElement(service.icon, { className: "w-4 h-4" })}
          </span>
          Our Services / {service.title}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          {service.title.split(" ")[0]} <br className="hidden md:block" />
          <span className="font-tech text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            {service.title.substring(service.title.indexOf(" ") + 1) ||
              "Service"}
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
          {service.desc}
        </p>
      </FadeIn>
    </div>
  </section>
);

const ServiceOverview = ({ service }: { service: any }) => (
  <section className="pb-32 bg-[#050505]">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="relative group">
          <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(250,204,21,0.15)] group-hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent z-10 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4 bg-[#121212]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-black">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-white">Thorough Assessment</p>
                <p className="text-xs text-slate-400">
                  Identifying key risk areas
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div>
          <SectionHeading
            title="Strategic Planning & Assessment"
            yellow
            className="mb-8"
          />
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {service.overviewText}
            </p>
            <div className="bg-[#121212] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-6 transition-all duration-500 hover:border-yellow-400/30 hover:shadow-[0_15px_40px_-10px_rgba(250,204,21,0.1)] hover:-translate-y-1">
              {service.features.map((feature: any, idx: number) => (
                <React.Fragment key={idx}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-yellow-400/10 p-2 rounded-lg text-yellow-400 shrink-0">
                      {idx === 0 ? (
                        <ShieldCheck className="w-5 h-5" />
                      ) : (
                        <Target className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  {idx === 0 && <div className="w-full h-px bg-white/5"></div>}
                </React.Fragment>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

const BentoFeaturesSection = ({ service }: { service: any }) => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {service.bentoBoxes.map((box: any, idx: number) => (
            <FadeIn scale delay={idx * 0.2} key={idx}>
              <div className="bg-gradient-to-b from-[#161616] to-[#121212] border border-white/5 rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(250,204,21,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-yellow-400/50 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {box.icon}
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors duration-300">
                  {box.title}
                </h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                  {box.desc}
                </p>

                <ul className="space-y-4 pt-8 border-t border-white/10 relative z-10">
                  {box.points.map((point: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 75}ms` }}
                    >
                      <Check className="w-5 h-5 text-yellow-400 shrink-0" />
                      <span>{point}</span>
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

const CTASection = () => (
  <section className="py-32 bg-[#050505] relative overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-400/5 rounded-full blur-[150px] mix-blend-screen" />
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center max-w-4xl">
      <FadeIn scale>
        <div className="bg-[#121212] border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(250,204,21,0.1)] flex flex-col items-center">
          <PhoneCall
            className="w-16 h-16 text-yellow-400 mb-8 animate-bounce"
            style={{ animationDuration: "3s" }}
          />

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Are you looking for <br />
            <span className="font-tech text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              MLR & FCA
            </span>{" "}
            compliance support?
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Get in touch with our expert consultants today to secure your
            business and streamline your regulatory framework.
          </p>

          <Button
            primary
            className="text-lg px-12 py-5 group shadow-[0_0_30px_rgba(250,204,21,0.2)]"
          >
            Contact Us{" "}
            <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

// ==========================================
// 5. MAIN APP (Dynamic Services Page)
// ==========================================
export default function Services() {
  const [currentService, setCurrentService] = useState(SERVICES_DATA[0]);

  useEffect(() => {
    // Function to figure out which service to show based on URL parameters or hash
    const getServiceFromUrl = () => {
      const hash = window.location.hash.replace("#", "");
      const params = new URLSearchParams(window.location.search);
      const query = params.get("service") || params.get("type");

      const slugToFind = hash || query;

      // If no slug is found in the URL, redirect to the main page
      if (!slugToFind) {
        window.location.href = "/";
        return;
      }

      const found = SERVICES_DATA.find((s) => s.slug === slugToFind);

      if (found) {
        setCurrentService(found);
      } else {
        // If the slug is invalid (doesn't match any service), redirect to the main page
        window.location.href = "/";
      }
    };

    getServiceFromUrl(); // Check on mount

    // Listen for hash changes if user navigates within the same page
    window.addEventListener("hashchange", getServiceFromUrl);
    return () => window.removeEventListener("hashchange", getServiceFromUrl);
  }, []);

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans bg-[#050505] text-slate-200 selection:bg-yellow-400 selection:text-black overflow-x-hidden">
        {/* Pass the currently selected service down to the sections */}
        <ServicesHero service={currentService} />
        <ServiceOverview service={currentService} />
        <BentoFeaturesSection service={currentService} />
        <CTASection />
      </div>
    </>
  );
}
