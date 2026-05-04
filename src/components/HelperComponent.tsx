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
import { CLIENT_LOGOS } from "../Static Data/HomeData";

export const FadeIn = ({
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

export const Button = ({
  children,
  primary = true,
  className = "",
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) => (
  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className={`
      inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300
      ${
        primary
          ? "bg-yellow-400 text-black shadow-[0_4px_14px_0_rgba(250,204,21,0.39)] hover:shadow-[0_6px_20px_rgba(250,204,21,0.23)] hover:bg-yellow-300"
          : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-yellow-400"
      } ${className}
    `}
  >
    {children}
  </motion.button>
);

export const LogoSlider = () => {
  const infiniteLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="w-full relative  overflow-hidden border-y border-white/5 bg-white/[0.01] py-8 md:py-12">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee">
        {infiniteLogos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 text-slate-600 hover:text-slate-300 transition-colors cursor-default"
          >
            {logo.icon}
            <span className="font-tech font-bold text-xl tracking-widest">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SectionHeading = ({
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
    className={`mb-12 ${center ? "text-center flex flex-col items-center" : ""} ${className}`}
  >
    <FadeIn>
      <h2
        className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white`}
      >
        {title}
        {yellow && <span className="text-yellow-400">.</span>}
      </h2>
    </FadeIn>
    {subtitle && (
      <FadeIn delay={0.1}>
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed text-slate-400`}
        >
          {subtitle}
        </p>
      </FadeIn>
    )}
  </div>
);

export const StickySection = ({
  children,
  zIndex,
  bgClass,
}: {
  children: React.ReactNode;
  zIndex: number;
  bgClass: string;
}) => (
  <div
    className={`relative lg:sticky pb-20 lg:top-0 min-h-screen w-full flex items-center justify-center overflow-hidden border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.6)] ${bgClass}`}
    style={{ zIndex }}
  >
    <div className="w-full py-20 lg:py-0">{children}</div>
  </div>
);
