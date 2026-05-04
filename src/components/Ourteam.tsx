"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Users, Network, Link } from "lucide-react";
import { TEAM_MEMBERS } from "../Static Data/TeamData";
import { globalStyles } from "../Static Data/HomeData";

// ==========================================
// 3. SHARED UI COMPONENTS
// ==========================================
const FadeIn = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  scale = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  scale?: boolean;
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(12px)",
        scale: scale ? 0.95 : 1,
        ...directions[direction],
      }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({
  title,
  subtitle,
  center = false,
  yellow = false,
  className = "",
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  yellow?: boolean;
  className?: string;
}) => (
  <div
    className={`mb-16 ${center ? "text-center flex flex-col items-center" : ""} ${className}`}
  >
    <FadeIn>
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-white`}
      >
        {title}
        {yellow && <span className="text-yellow-400">.</span>}
      </h2>
    </FadeIn>
    {subtitle && (
      <FadeIn delay={0.1}>
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed text-slate-400 ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      </FadeIn>
    )}
  </div>
);

// ==========================================
// 4. LAYOUT SECTIONS
// ==========================================
const TeamHero = () => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden z-0">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
      <FadeIn>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs md:text-sm font-medium mb-6">
          <Users className="w-4 h-4 text-yellow-400" />
          Our Team
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          The Minds Behind <br />
          <span className="font-tronica text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            Rafin Solutions
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
          A collective of industry-leading experts, consultants, and visionaries
          dedicated to navigating the complexities of financial regulations and
          driving your business forward.
        </p>
      </FadeIn>
    </div>
  </section>
);

const TeamGrid = () => {
  return (
    <section className="pb-32 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <FadeIn scale key={idx} delay={(idx % 4) * 0.1}>
              <div className="group relative bg-[#121212] rounded-[2rem] border border-white/5 flex flex-col overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(250,204,21,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-yellow-400/30 h-full">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top Image Container */}
                <div className="h-64 sm:h-72 overflow-hidden relative border-b border-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />

                  {/* Social Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors"
                    >
                      <Link className="w-4 h-4" />
                      Linkden
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Bottom Content Container */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-[#161616] to-[#121212]">
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-yellow-400/90 font-medium text-sm mb-4">
                    {member.role}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mt-auto border-t border-white/5 pt-4 group-hover:text-slate-300 transition-colors duration-300">
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
export default function OurTeam() {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans bg-[#050505] text-slate-200 selection:bg-yellow-400 selection:text-black overflow-x-hidden">
        <TeamHero />
        <TeamGrid />
      </div>
    </>
  );
}
