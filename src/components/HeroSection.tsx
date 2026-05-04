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
import { Button, FadeIn, LogoSlider } from "./HelperComponent";
export const HeroSection = () => (
  <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-[#050505] pt-32 overflow-hidden z-0">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-yellow-400/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-yellow-600/10 rounded-full blur-[100px] mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-20  flex items-center justify-center w-full grow pt-10 ">
      <div className="flex flex-col items-center text-center max-w-4xl w-full">
        <FadeIn delay={0.1} scale>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
            Redefining <br className="md:hidden" />
            <span className="text-transparent bg-clip-text font-tronica bg-linear-to-r from-yellow-400 to-yellow-200 text-wrap block">
              Financial
            </span>
            Success.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-slate-400  max-w-2xl mx-auto leading-relaxed font-light">
            Expert advisory and professional services tailored to navigate the
            complexities of financial regulations, empowering your fintech
            journey.
          </p>
        </FadeIn>
      </div>
    </div>
    <FadeIn delay={0.5} direction="none" className="w-full relative z-20">
      <LogoSlider />
    </FadeIn>
  </section>
);
