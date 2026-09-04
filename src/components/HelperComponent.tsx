"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { redirect } from "next/navigation";

// Plain wrapper â€” kept for API compatibility. No animations.
export const FadeIn = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  scale?: boolean;
}) => <div className={className}>{children}</div>;

export const StaggerContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export const Button = ({
  children,
  primary = true,
  className = "",
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) => (
  <button
    className={`group inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200
    ${
      primary
        ? "bg-slate-900 text-white hover:bg-slate-700"
        : "bg-white text-slate-900 border border-slate-300 hover:border-slate-900"
    } ${className}
  `}
  >
    {children}
  </button>
);

export const StickySplitSection = <T,>({
  title,
  subtitle,
  items,
  renderCard,
}: {
  title: string;
  subtitle: string;
  items: T[];
  renderCard: (item: T, idx: number) => React.ReactNode;
}) => {
  return (
    <div className="container mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-16 py-20 border-t border-slate-200 bg-white">
      {/* LEFT PANE: Sticky / Pinned */}
      <div className="lg:w-1/3 shrink-0">
        <div className="lg:sticky lg:top-32 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8 max-w-sm">
            {subtitle}
          </p>
        </div>
      </div>

      {/* RIGHT PANE: Scrolling Content */}
      <div className="lg:w-2/3 flex flex-col gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="w-full">
            {renderCard(item, idx)}
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom render functions for the cards in the Split Layouts
export const renderAdvisoryCard = (card: {
  img?: string;
  url: string;
  title?: string;
  desc?: string;
}, idx: number) => {
  if (card.img) {
    // Featured card with image
    return (
      <div
        onClick={() => redirect(card.url)}
        className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-400 transition-colors cursor-pointer flex flex-col"
      >
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {card.title}
          </h3>
          <p className="text-slate-600 text-lg max-w-md mb-8">{card.desc}</p>
          <span className="text-slate-900 font-semibold flex items-center gap-2">
            Learn more <ArrowRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    );
  }
  // Regular card
  return (
    <div
      onClick={() => redirect(card.url)}
      className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col group relative transition-colors hover:border-slate-400 cursor-pointer"
    >
      <ArrowUpRight className="absolute top-6 right-6 text-slate-400 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="font-semibold text-lg text-slate-900 mb-3">{card.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
    </div>
  );
};

export const renderServiceCard = (srv: {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  desc: string;
}, idx: number) => (
  <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col group transition-colors hover:border-slate-400 cursor-pointer">
    <div className="flex items-center gap-5 mb-4">
      <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
        {React.cloneElement(srv.icon, { className: "w-5 h-5" })}
      </div>
      <h3 className="font-semibold text-xl text-slate-900">{srv.title}</h3>
    </div>
    <p className="text-slate-600 text-base leading-relaxed pl-17">{srv.desc}</p>
  </div>
);

export const renderExpertiseCard = (item: {
  icon: React.ReactElement<{ className?: string }>;
  title?: string;
  desc?: string;
}, idx: number) => (
  <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-6 group transition-colors hover:border-slate-400 cursor-pointer">
    <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-700 shrink-0">
      {React.cloneElement(item.icon, { className: "w-6 h-6" })}
    </div>
    <div>
      <h3 className="font-semibold text-xl text-slate-900 mb-2">{item.title}</h3>
      <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
    </div>
  </div>
);
