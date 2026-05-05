"use client";

import React from "react";
import { ArrowUp, Mail, MapPin, Network, Phone } from "lucide-react";
import { FadeIn } from "./HelperComponent";
import { FOOTER_LINKS } from "../Static Data/HomeData";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-0 relative z-50 overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 relative z-10">
        <div className="pr-4">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <Network className="w-8 h-8 text-yellow-400" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Rafin
                <span className="font-normal text-slate-400">Solutions</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A specialist consultancy firm providing a wide range of financial
              services through strategic business consultancy and professional
              oversight.
            </p>
            {/* <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-yellow-400 hover:border-yellow-400 hover:scale-110 transition-all"><Facebook className="w-4 h-4" /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-yellow-400 hover:border-yellow-400 hover:scale-110 transition-all"><Twitter className="w-4 h-4" /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-yellow-400 hover:border-yellow-400 hover:scale-110 transition-all"><Linkedin className="w-4 h-4" /></a>
             </div> */}
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={0.1}>
            <h4 className="text-xs font-tech tracking-widest text-slate-500 uppercase mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Opposite to Bega Sanitary Store, Gulyana Road Kharian,
                  District Gujrat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>+92 304 5896617</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>rafinsolutions@outlook.com</span>
              </li>
            </ul>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={0.2}>
            <h4 className="text-xs font-tech tracking-widest text-slate-500 uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 hover:translate-x-1 transition-transform inline-block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={0.3}>
            <h4 className="text-xs font-tech tracking-widest text-slate-500 uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 hover:translate-x-1 transition-transform inline-block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <div className="bg-[#050505] py-6 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Rafin Solutions. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-yellow-400 hover:border-yellow-400 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
