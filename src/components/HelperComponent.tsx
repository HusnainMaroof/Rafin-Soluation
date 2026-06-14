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
import { redirect } from "next/navigation";

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

export const StaggerContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10%" }}
    variants={{
      visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

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
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`
      group inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300
      ${
        primary
          ? "bg-slate-900 text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:bg-black hover:-translate-y-1"
          : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:border-slate-900 hover:-translate-y-1"
      } ${className}
    `}
  >
    {children}
  </motion.button>
);

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, filter: "blur(8px)", scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StickySplitSection = ({
  title,
  subtitle,
  items,
  renderCard,
}: {
  title: string;
  subtitle: string;
  items: any[];
  renderCard: (item: any, idx: number) => React.ReactNode;
}) => {
  return (
    <div className="container mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-16 py-24 border-t border-slate-200 bg-white">
      {/* LEFT PANE: Sticky / Pinned */}
      <div className="lg:w-1/3 shrink-0">
        <div className="lg:sticky lg:top-35 flex flex-col justify-start">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold mb-6 uppercase tracking-widest w-max">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            Featured
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
            {title}
            <span className="text-yellow-500">.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8 max-w-sm">
            {subtitle}
          </p>
          {/* <div className="hidden lg:block">
            <Button primary={false} className="group">
              Explore all{" "}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div> */}
        </div>
      </div>

      {/* RIGHT PANE: Scrolling Content */}
      <div className="lg:w-2/3 flex flex-col gap-6 lg:gap-8">
        {items.map((item, idx) => (
          <FadeIn key={idx} delay={0.1} className="w-full">
            {renderCard(item, idx)}
          </FadeIn>
        ))}
        {/* <div className="lg:hidden mt-8">
          <Button primary={false} className="w-full">
            Explore all <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div> */}
      </div>
    </div>
  );
};

// Custom render functions for the cards in the Split Layouts
export const renderAdvisoryCard = (card: any, idx: number) => {
  if (card.img) {
    // Featured card with image
    return (
      <div className="group relative bg-white rounded-4xl p-8 md:p-12 min-h-100 border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.15),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 flex flex-col justify-end ">
        <img
          src={card.img}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 ease-out"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/90 to-white/50"></div>

        <div className="relative z-10">
          <div className="w-12 h-12 bg-slate-900 text-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-[0_4px_10px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            {card.title}
          </h3>
          <p className="text-slate-600 text-lg max-w-md mb-8">{card.desc}</p>
          <button
            onClick={() => redirect(card.url)}
            className="text-slate-900 font-bold flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer"
          >
            Learn more <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }
  // Regular card
  return (
    <div
      onClick={() => redirect(card.url)}
      className="bg-white rounded-4xl p-8 border border-slate-200 flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.15),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 cursor-pointer"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500">
        <ArrowUpRight className="text-slate-900 w-6 h-6" />
      </div>
      <h3 className="font-bold text-xl text-slate-900 mb-3 transition-colors duration-300">
        {card.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed grow">{card.desc}</p>
    </div>
  );
};

export const renderServiceCard = (srv: any, idx: number) => (
  <div className="p-8 rounded-4xl bg-white border border-slate-200 flex flex-col group transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 cursor-pointer">
    <div className="flex items-center gap-6 mb-4">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-slate-900 group-hover:text-yellow-400 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
        {React.cloneElement(srv.icon, { className: "w-6 h-6" })}
      </div>
      <h3 className="font-bold text-2xl text-slate-900 transition-colors duration-300">
        {srv.title}
      </h3>
    </div>
    <p className="text-slate-600 text-base leading-relaxed pl-20">{srv.desc}</p>
  </div>
);
export const renderExpertiseCard = (item: any, idx: number) => (
  <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-8 group transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 cursor-pointer">
    <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-700 shrink-0 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-yellow-400 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
      {React.cloneElement(item.icon, { className: "w-8 h-8" })}
    </div>
    <div>
      <h3 className="font-bold text-2xl text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
    </div>
  </div>
);
