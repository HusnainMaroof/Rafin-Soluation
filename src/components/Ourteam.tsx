"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Users, Network, Link } from "lucide-react";
import { TEAM_MEMBERS } from "../Static Data/TeamData";
import { globalStyles } from "../Static Data/HomeData";
import { FadeIn, StaggerContainer, StaggerItem } from "./HelperComponent";

// ==========================================
// 3. SHARED UI COMPONENTS
// ==========================================

export const TeamHero = () => {
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
      className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden z-0 bg-slate-50"
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
        <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        <StaggerContainer>
          <StaggerItem>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_-2px_0_0_rgb(226,232,240,1)] text-xs md:text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
              Our Team
            </div>
          </StaggerItem>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight flex flex-col md:flex-row flex-wrap justify-center gap-x-4">
            <StaggerItem>The Minds Behind</StaggerItem>
            <StaggerItem>
              <span className="font-tech text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                Rafin Solutions
              </span>
            </StaggerItem>
          </h1>

          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              A collective of industry-leading experts, consultants, and
              visionaries dedicated to navigating the complexities of financial
              regulations and driving your business forward.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export const TeamGrid = () => {
  return (
    <section className="pb-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <FadeIn scale key={idx} delay={(idx % 4) * 0.1}>
              <div className="group relative bg-white rounded-4xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.15),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 h-full cursor-pointer">
                {/* Top Image Container */}
                <div className="h-64 sm:h-72 overflow-hidden relative border-b border-slate-100">
                  <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  />

                  {/* Social Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-yellow-400 hover:border-slate-900 transition-colors shadow-sm"
                    >
                      <Link className="w-4 h-4" /> Linkden
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-yellow-400 hover:border-slate-900 transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Bottom Content Container */}
                <div className="p-6 md:p-8 flex flex-col grow relative z-10 bg-white">
                  <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-slate-600 font-semibold text-sm mb-4">
                    {member.role}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mt-auto border-t border-slate-100 pt-4 group-hover:text-slate-700 transition-colors duration-300">
                    {member.qualifications}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. MAIN APP (Team Page Component)
// ==========================================
