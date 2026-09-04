"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./HelperComponent";

/* ============================================================
   Core Value Proposition — numbered 01-04 cards (FinCore style)
   ============================================================ */
const VALUE_STEPS = [
  {
    num: "01",
    title: "Advise",
    desc: "Regulatory guidance, licensing support, and clear strategies for your business.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Compliance frameworks, KYC/AML tooling, and fintech infrastructure done right.",
  },
  {
    num: "03",
    title: "Train",
    desc: "Practical AML/CFT training that your day-to-day teams can actually adopt.",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Ongoing monitoring, governance, and brand support as your business scales.",
  },
];

export const CoreValueSection = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-3">
          Core Value Proposition
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          One advisory partner for your entire financial operations.
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Rafin Solutions helps financial businesses stay compliant and
          competitive through advisory, fintech services, training, and
          professional oversight.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VALUE_STEPS.map((step) => (
          <div
            key={step.num}
            className="rounded-xl border border-slate-200 bg-slate-50 p-8 hover:border-yellow-400 transition-colors"
          >
            <div className="text-4xl font-extrabold text-yellow-400 font-heading mb-6">
              {step.num}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {step.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   About — "Built by practitioners" style block with badge row
   ============================================================ */
const BADGES = [
  "UK FCA",
  "HMRC",
  "Consumer Credit",
  "AML/CFT",
  "KYC / KYB",
  "Risk Management",
];

export const AboutSection = () => (
  <section className="bg-slate-50 py-24 border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-3">
          About Rafin
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          Built by practitioners, not theorists.
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Rafin Solutions is a specialist consultancy providing compliance,
          governance, and fintech services through hands-on experience with
          regulated financial institutions worldwide.
        </p>
        <p className="text-base text-slate-600 leading-relaxed">
          We protect fintechs globally — from licence authorisation and ongoing
          compliance monitoring to AML/CFT training and payment-scheme access.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 content-start">
        {BADGES.map((badge) => (
          <div
            key={badge}
            className="px-6 py-4 rounded-xl bg-white border border-slate-200 font-semibold text-slate-800 shadow-sm"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   Flagship Engagement — 4-step numbered process (FinCore style)
   ============================================================ */
const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We understand your business, regulatory gaps, priorities, and immediate compliance pressure points.",
  },
  {
    num: "02",
    title: "Scope & Proposal",
    desc: "We agree services, deliverables, timelines, and the right engagement model for your business.",
  },
  {
    num: "03",
    title: "Onboarding",
    desc: "We integrate with your workflows, systems, documentation, and reporting channels.",
  },
  {
    num: "04",
    title: "Go Live",
    desc: "We deliver, monitor, report, and scale the support model as your business grows.",
  },
];

export const EngagementSection = () => (
  <section className="bg-slate-900 py-24 text-white">
    <div className="container mx-auto px-6 lg:px-16 w-full">
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-3">
          Flagship Engagement
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Your Dedicated Advisory Team
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          One team, one point of accountability — covering compliance,
          licensing, fintech services, training, and ongoing governance.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.num}
            className="rounded-xl border border-white/10 bg-white/5 p-8 hover:border-yellow-400/50 transition-colors"
          >
            <div className="text-4xl font-extrabold text-yellow-400 font-heading mb-6">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


/* ============================================================
   FAQ — accordion (FinCore style)
   ============================================================ */
const FAQS = [
  {
    q: "Does Rafin Solutions provide ongoing compliance support?",
    a: "Yes. Rafin provides project-based or ongoing compliance support, including licence authorisation, ongoing monitoring, annual compliance audits, and safeguarding.",
  },
  {
    q: "Can Rafin help with AML/CFT training?",
    a: "Yes. Rafin delivers business-tailored online and in-person training programs with comprehensive coverage of current AML regulations.",
  },
  {
    q: "What fintech services does Rafin provide?",
    a: "Rafin assists fintech clients with KYC/AML verification tools, SWIFT and SEPA payment scheme access, Visa/MasterCard membership, and automated transaction monitoring.",
  },
  {
    q: "Which industries does Rafin support?",
    a: "Rafin supports banks and financial institutions, credit unions, MSBs, payment businesses, corporate and listed firms, and fintech companies.",
  },
  {
    q: "How can a client request a proposal?",
    a: "Clients can book a consultation or contact Rafin with their requirements. A proposal is prepared after scope, urgency, and service areas are reviewed.",
  },
];

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-4xl">
        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-3">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Common questions before a consultation.
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const open = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                  onClick={() => setOpenIdx(open ? null : idx)}
                >
                  {faq.q}
                  <span
                    className={`text-2xl font-light text-yellow-500 shrink-0 transition-transform duration-200 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open && (
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   Final CTA band (FinCore style)
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
