"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./HelperComponent";

/* ============================================================
   Shared CTA band used at the bottom of inner pages.
   ============================================================ */
export const CTABandSection = () => (
  <section className="bg-slate-50 py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 max-w-3xl">
        Ready to strengthen your financial operations?
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
        Whether you need a single compliance document, a full licensing setup,
        or ongoing advisory support, Rafin Solutions is ready to deliver.
      </p>
      <Link href="/contact-us">
        <Button primary className="text-base px-8 py-4">
          Book a Consultation
        </Button>
      </Link>
    </div>
  </section>
);
