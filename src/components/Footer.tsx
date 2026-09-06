"use client";

import React from "react";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_LINKS } from "../Static Data/HomeData";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/src/lib/seo";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-0 relative z-50">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 relative z-10">
        <div className="pr-4">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Image
              src="/Logo/logo.png"
              alt="Rafin Solutions home"
              width={140}
              height={28}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            A specialist consultancy firm providing a wide range of financial
            services through strategic business consultancy and professional
            oversight.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-heading tracking-widest text-slate-500 uppercase mb-6">
            Contact Info
          </h2>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
              <address className="leading-relaxed not-italic">
                {CONTACT.address.street}
                <br />
                {CONTACT.address.region}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400 shrink-0" aria-hidden="true" />
              <a
                href={CONTACT.phoneHref}
                className="hover:text-yellow-400 transition-colors"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-heading tracking-widest text-slate-500 uppercase mb-6">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors inline-block py-1"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/training/aml-cft-training"
                className="hover:text-yellow-400 transition-colors inline-block py-1"
              >
                Compliance Training
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-heading tracking-widest text-slate-500 uppercase mb-6">
            Legal
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors inline-block py-1"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#050505] py-6 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Rafin Solutions. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-yellow-400 hover:border-yellow-400 transition-all"
          >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
