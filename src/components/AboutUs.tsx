"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Building2,
  Briefcase,
  Scale,
  FileText,
  Search,
  Users,
  Lock,
  PieChart,
  ShieldAlert,
  CreditCard,
  Network,
} from "lucide-react";
import {
  Button,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "./HelperComponent";
import { globalStyles } from "../Static Data/HomeData";
import { complianceData } from "../Static Data/AboutUsData";

export const AboutHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center bg-slate-50 pt-32 pb-20 overflow-hidden z-0"
      onMouseMove={handleMouseMove}
    >
      {/* Tracking Shadow Cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.06), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col lg:flex-row items-center gap-16 w-full grow pt-10">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <StaggerContainer>
            <StaggerItem>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_-2px_0_0_rgb(226,232,240,1)] text-xs md:text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
                Our Story / Who We Are
              </div>
            </StaggerItem>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              <StaggerItem>Welcome to</StaggerItem>
              <StaggerItem>
                <span className="font-tech text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                  Rafin Solutions
                </span>
              </StaggerItem>
            </h1>

            <StaggerItem>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                We are a specialist consultancy firm offering financial services
                compliance. We seek to protect clients through professional
                compliance management solutions.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-4">
                <Button primary>Meet Our Team</Button>
                <Button primary={false}>Our Services</Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <FadeIn direction="left" className="lg:w-1/2 w-full h-125 relative">
          <div className="absolute inset-0 rounded-[3rem] bg-linear-to-tr from-slate-200 to-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_-8px_0_0_rgba(226,232,240,1)] group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
              alt="Rafin Solutions Office"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
            />
            {/* Interactive Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl max-w-70 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 shadow-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-lg">
                  Global Reach
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Assisting FinTechs across the UK, EU, and beyond.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const ApprovalStatsBanner = () => (
  <section className="relative z-30 container mx-auto px-6 lg:px-16 py-12 lg:py-0 lg:-mt-16">
    <FadeIn scale>
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.2),inset_0_-8px_0_0_rgba(15,23,42,1)] flex flex-col md:flex-row items-center justify-between gap-8 group hover:-translate-y-2 transition-transform duration-500 cursor-pointer overflow-hidden relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:scale-150"></div>

        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <ShieldCheck className="w-8 h-8 text-yellow-400 group-hover:text-slate-900" />
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-tech font-bold text-yellow-400 tracking-tighter mb-2">
              150+
            </h3>
            <p className="text-white font-medium text-lg">
              Financial Services firms approved
            </p>
          </div>
        </div>

        <div className="w-full md:w-px h-px md:h-24 bg-slate-700 relative z-10"></div>

        <div className="text-slate-300 max-w-sm text-center md:text-left text-sm md:text-base leading-relaxed relative z-10">
          Successfully authorized by the{" "}
          <strong className="text-white">FCA</strong> and European regulatory
          bodies.
        </div>
      </div>
    </FadeIn>
  </section>
);

export const TailoredComplianceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center flex flex-col items-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              Tailor your Business Compliance
              <span className="text-yellow-500">.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-slate-600">
              Dedicated compliance products and solutions to protect and grow
              your enterprise.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceData.map((item, idx) => (
            <FadeIn scale key={idx} delay={idx * 0.1}>
              <div className="p-8 rounded-4xl bg-white border border-slate-200 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 cursor-pointer group h-full flex flex-col">
                <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 mb-8 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-yellow-400 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-4 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 grow">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider">
                    Click here{" "}
                    <ArrowRight className="w-4 h-4 text-yellow-500" />
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
