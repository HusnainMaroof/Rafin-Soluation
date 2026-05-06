"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Settings,
  CreditCard,
  Calculator,
  BookOpen,
  Users,
  MonitorSmartphone,
  Check,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUp,
  Menu,
  ShieldCheck,
  ArrowUpRight,
  Network,
  Hexagon,
  Command,
  Activity,
  Aperture,
  Box,
  Triangle,
  CloudLightning,
} from "lucide-react";
import {
  Button,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "./HelperComponent";
import { CLIENT_LOGOS } from "../Static Data/HomeData";
export const HeroSection = () => {
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
      className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 pt-32 overflow-hidden z-0"
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
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-yellow-300/20 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center w-full grow pt-10 md:pt-20">
        <StaggerContainer className="flex flex-col items-center text-center max-w-4xl w-full">
          <StaggerItem>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_-2px_0_0_rgb(226,232,240,1)] text-xs md:text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
              Technology & Growth Partner
            </div>
          </StaggerItem>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight flex flex-col md:flex-row flex-wrap justify-center gap-x-4">
            <StaggerItem>Redefining</StaggerItem>
            <StaggerItem>
              <span className="font-tronica text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                Financial
              </span>
            </StaggerItem>
            <StaggerItem>Success.</StaggerItem>
          </h1>

          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Expert advisory and professional services tailored to navigate the
              complexities of financial regulations, empowering your fintech
              journey.
            </p>
          </StaggerItem>

          {/* <StaggerItem>
            <Button primary className="group text-base px-8 py-4">
              Book my free consultation{" "}
              <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </StaggerItem> */}
        </StaggerContainer>
      </div>

      {/* Infinite Logo Slider Component */}
      <FadeIn
        delay={0.6}
        direction="none"
        className="w-full relative z-20 mt-auto mb-12"
      >
        <div className="w-full relative overflow-hidden bg-transparent py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-10 text-slate-400 hover:text-slate-900 transition-colors cursor-default"
              >
                {logo.icon}
                <span className="font-tech font-bold text-xl tracking-widest">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
