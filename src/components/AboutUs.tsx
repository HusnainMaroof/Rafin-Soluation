"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Building2,
  Briefcase,
  Scale,
  FileText,
  Search,
  Users,
  Lock,
  PieChart,
  ShieldAlert,
  CreditCard,
  Network,
} from "lucide-react";
import { FadeIn, SectionHeading } from "./HelperComponent";
import { globalStyles } from "../Static Data/HomeData";




const AboutHero = () => (
  <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#050505] pt-32 pb-20 overflow-hidden z-0">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-yellow-400/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col lg:flex-row items-center gap-16 w-full flex-grow pt-10">
      <div className="lg:w-1/2 flex flex-col justify-center">
        <FadeIn>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs md:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Our Story / Who We Are
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Welcome to <br />
            <span className="font-tech text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Rafin Solutions
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-slate-400 mb-6 leading-relaxed font-light">
            Rafin Solutions is a specialist financial services compliance firm,
            whose vast experience of regulatory matters in the financial
            services sector can help every size of firm, at a strategic level as
            well as on a day to day basis.
          </p>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
            It’s a firm providing Knowledge, Guidance and Best Practices
            consulting, independent reviews and testing, training and support to
            FinTech companies, Money Services Businesses, Payment Processors and
            E-money throughout the UK/Europe.
          </p>
        </FadeIn>
      </div>

      <FadeIn direction="left" delay={0.3} className="lg:w-1/2 w-full">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 group shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] aspect-[4/3] max-w-lg mx-auto">
          <div className="absolute inset-0 bg-white/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
            alt="Corporate Team"
            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

const ApprovalStatsBanner = () => (
  <section className="relative z-30 container mx-auto px-6 lg:px-16 py-12 lg:py-0 lg:-mt-12">
    <FadeIn scale>
      <div className="bg-gradient-to-r from-[#121212] to-[#161616] rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-slate-400/30 transition-colors duration-500">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-slate-200 group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-tech font-bold text-yellow-400 tracking-tighter mb-2">
              150+
            </h3>
            <p className="text-white font-medium text-lg">
              Financial Services firms approved in UK/EU
            </p>
          </div>
        </div>
        <div className="w-full md:w-px h-px md:h-20 bg-white/10"></div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Rafin Solutions clients got successfully approved Licensed of more
          than 150 firms like Payment institutions including E-Money / API / SPI
          / Consumer credit / Investment.
        </p>
      </div>
    </FadeIn>
  </section>
);

const ExpertiseSection = () => {
  const expertiseData = [
    {
      icon: <Building2 className="w-6 h-6 text-slate-300" />,
      title: "New Authorisations",
      desc: "We assist firms in the preparation of applications for new authorisations by the FCA/PRA, together with any business plans, financial projections, declarations or solvency calculations that may be necessary.",
    },
    {
      icon: <Scale className="w-6 h-6 text-slate-300" />,
      title: "Strategy & Restructuring",
      desc: "Whether buying, selling, restructuring or refinancing, we assess the potential financial impact of prevailing regulatory issues and help our clients to negotiate the regulatory hurdles ahead.",
    },
    {
      icon: <FileText className="w-6 h-6 text-slate-300" />,
      title: "Regulatory Approach",
      desc: "Facilitating and consulting on the regulatory approach, drafting policy and strategy statements, monitoring policy effectiveness, and integration of multiple entities.",
    },
    {
      icon: <Search className="w-6 h-6 text-slate-300" />,
      title: "Inspections & Support",
      desc: "Ongoing support and implementation of regulatory inspections, supervisory visits, enforcement measures, reviewing authorisation processes, and capital adequacy assessments.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-slate-300" />,
      title: "Business as Usual",
      desc: "Support in the design and implementation of systems and controls, conducting compliance health checks, regulatory gap analyses, and preparing senior management for ARROW.",
    },
    {
      icon: <Users className="w-6 h-6 text-slate-300" />,
      title: "Programmes & Projects",
      desc: "Assistance with remedial work under risk mitigation programmes. Provision of subject matter expert advice or secondment of technical resources for retail and wholesale organisations.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionHeading
          title="Our Expertise and Upfront Advices"
          subtitle="We offer a range of services for clients seeking solutions from a strategic, business as usual, or problem-solving perspective."
          yellow
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, idx) => (
            <FadeIn scale key={idx} delay={idx * 0.1}>
              <div className="bg-[#121212] rounded-[2rem] p-8 h-full border border-white/5 flex flex-col group relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(250,204,21,0.05),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const TailoredComplianceSection = () => {
  const complianceData = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Outsourced Compliance",
      desc: "Whether buying, selling, restructuring or refinancing, we assess potential financial impact and help negotiate regulatory hurdles. We support new/existing regulators in developing strategy, operational processes, and regime implementation.",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Compliance Audit",
      desc: "A compliance audit service that aims to provide a health check and detailed review of your organisation’s compliance standards, recommending solutions to remedy findings revealed by the report.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Money Laundering",
      desc: "The Money Laundering Regulations 2017 placed enormous burdens on professionals. In response, we have developed a service aimed at providing professional guidance and securing compliance.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Total Compliance Solutions",
      desc: "A diverse range of services including strategic planning. We assess your needs, identify high-risk areas, and manage your compliance solution as a whole or address particular tailored situations.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "PSD2",
      desc: "Expert guidance on PSD2, which was implemented in the UK by the Payment Services Regulations 2017 (PSRs 2017), ensuring your payment frameworks meet modern legislative standards.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionHeading
          title="Tailor your Business Compliance"
          subtitle="Dedicated compliance products and solutions to protect and grow your enterprise."
          center
          yellow
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {complianceData.map((item, idx) => (
            <FadeIn
              scale
              key={idx}
              delay={idx * 0.1}
              className={idx === 3 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#161616] to-[#121212] border border-white/5 hover:border-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(250,204,21,0.1)] group h-full flex flex-col">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-300 mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-yellow-400 flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider cursor-pointer group-hover:text-yellow-300">
                    Click here <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. MAIN APP
// ==========================================
export default function AboutUs() {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans bg-[#050505] text-slate-200 selection:bg-slate-300 selection:text-black overflow-x-hidden pb-24">
        <AboutHero />
        <ApprovalStatsBanner />
        <ExpertiseSection />
        <TailoredComplianceSection />
      </div>
    </>
  );
}
