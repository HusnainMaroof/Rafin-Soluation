"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Scale } from "lucide-react";
import {
  Button,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "./HelperComponent";
import { complianceData } from "../Static Data/AboutUsData";
import Link from "next/link";

export const AboutHero = () => {

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center bg-slate-50 pt-32 pb-20 overflow-hidden z-0"
    >
      {/* Tracking Shadow Cursor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col lg:flex-row items-center gap-16 w-full grow pt-10">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <StaggerContainer>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              <StaggerItem>Welcome to</StaggerItem>
              <StaggerItem>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                  Rafin Solutions
                </span>
              </StaggerItem>
            </h1>

            <StaggerItem>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                We are a specialist consultancy firm offering financial services
                compliance. We seek to protect clients through professional
                compliance management solutions.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-4">
                {/* <Link href="/our-team">
                  <Button primary>Meet Our Team</Button>
                </Link> */}
                <Link href="/service/aml-cft-compliance">
                  <Button >Our Services</Button>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <FadeIn direction="left" className="lg:w-1/2 w-full relative">
          <div className="relative h-full min-h-[420px] rounded-[3rem] overflow-hidden border border-slate-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_-8px_0_0_rgba(226,232,240,1)]">
            {/* Contextual hero photo — global reach */}
            <Image
              src="/images/about-us/global-reach.jpg"
              alt="A globe representing Rafin Solutions' global reach across the UK, EU and beyond"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Soft overlay to keep text readable */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow">
                Global Reach
              </h3>
              <p className="text-slate-100 leading-relaxed max-w-sm drop-shadow">
                Assisting FinTechs and regulated financial businesses across
                the UK, EU, and beyond with practitioner-built compliance and
                operations support.
              </p>
            </div>

            {/* Bottom accent card */}
            <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/about-us/compliance-led.jpg"
                  alt=""
                  aria-hidden
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">
                  Compliance-led operations
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Practical support for regulated financial services firms.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const ApprovalStatsBanner = () => (
  <section className="relative z-30 container mx-auto px-6 lg:px-16 py-12 lg:py-0 lg:-mt-16">
    <FadeIn scale>
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.08),inset_0_-8px_0_0_rgb(226,232,240,1)] overflow-hidden relative border border-slate-200">
        <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-400/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              What we help with
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden group">
              <div className="relative h-28 overflow-hidden">
                <Image
                  src="/images/about-us/stat-licence.jpg"
                  alt="Licence authorisation support"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">
                  Licence authorisation support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Practical help preparing applications and remediating gaps for
                  financial services authorisation.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden group">
              <div className="relative h-28 overflow-hidden">
                <Image
                  src="/images/about-us/stat-monitoring.jpg"
                  alt="Ongoing compliance"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">
                  Ongoing compliance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Monitoring, policies, reporting packs, and audit-ready evidence
                  for regulated businesses.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden group">
              <div className="relative h-28 overflow-hidden">
                <Image
                  src="/images/about-us/stat-regulatory.jpg"
                  alt="Regulatory insight"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">
                  Regulatory insight
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Practitioner guidance across UK, EU, and international AML/CFT
                  expectations.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden group">
              <div className="relative h-28 overflow-hidden">
                <Image
                  src="/images/about-us/fintech-digital.jpg"
                  alt="Fintech operations"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">
                  Fintech operations
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  KYC/KYB, payments, transaction monitoring, support, and
                  technology governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
);

export const TailoredComplianceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center flex flex-col items-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              Tailor your Business Compliance
              <span className="text-yellow-500">.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-slate-600">
              Dedicated compliance products and solutions to protect and grow
              your enterprise.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceData.map((item, idx) => (
            <FadeIn scale key={idx} delay={idx * 0.1}>
              <Link
                href={item.href}
                aria-label={item.linkLabel}
                className="p-8 rounded-4xl bg-white border border-slate-200 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-4px_0_0_rgb(226,232,240,1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12),inset_0_-6px_0_0_rgb(15,23,42,1)] hover:border-slate-900 group h-full flex flex-col overflow-hidden"
              >
                {item.image && (
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-8 shrink-0">
                    <Image
                      src={item.image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                )}
                <h3 className="font-bold text-xl text-slate-900 mb-4 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 grow">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider">
                    {item.linkLabel}
                    <ArrowRight className="w-4 h-4 text-yellow-500" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
