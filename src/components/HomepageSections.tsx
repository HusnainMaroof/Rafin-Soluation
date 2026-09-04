"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Landmark,
  MonitorSmartphone,
  Palette,
  Scale,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

/* ============================================================
   FinCore-style homepage sections built with Rafin's data +
   Rafin's existing theme (white / slate / yellow, Manrope
   headings, Inter body, rounded-xl cards).
   Structure mirrors https://fincoresolutions.com homepage.
   ============================================================ */

const container = "container mx-auto px-6 lg:px-16 w-full";

/* Section heading with gold underline, matching FinCore's
   `.section-heading` layout: eyebrow + h2 + paragraph. */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) => (
  <div
    className={`max-w-3xl mb-9 ${
      center ? "mx-auto text-center" : ""
    }`}
  >
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 ${
        light ? "text-yellow-400" : "text-yellow-600"
      }`}
    >
      {eyebrow}
    </p>
    <h2
      className={`text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4 ${
        light ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`text-base md:text-lg leading-relaxed ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

/* Small dark icon tile used across FinCore-style cards */
const IconTile = ({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <div
    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
      dark ? "bg-slate-900 text-yellow-500" : "bg-slate-100 text-slate-700"
    }`}
  >
    {children}
  </div>
);

/* ------------------------------------------------------------
   1. HERO  — dark FinCore hero: eyebrow + h1 + paragraph +
   primary/secondary CTAs + trust row, with Rafin's dotted-grid
   and glow visuals, mapped to a 2-column layout.
   ------------------------------------------------------------ */
const HERO_STATS = [
  { value: "8+", label: "Years Fintech Experience" },
  { value: "5+", label: "Service Areas" },
  { value: "100+", label: "Institutions Trusted" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[720px] flex items-center overflow-hidden bg-slate-50 pt-32 pb-24">
      {/* Subtle grid + glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-[42vw] h-[42vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[5%] right-[10%] w-[30vw] h-[30vw] bg-yellow-300/20 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className={`${container} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-yellow-600 mb-5">
              <span className="w-8 h-0.5 bg-yellow-500 inline-block" />
              Practical fintech operating support
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] mb-6 text-slate-900">
              Your Fintech. <br />
              <span className="font-tronica text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
                Our Expertise
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Compliance • Operations • Payment Processing • Customer Support •
              Technology • Training • Branding • Business Development
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-md bg-yellow-400 text-slate-900 text-sm font-extrabold transition-colors hover:bg-yellow-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/service/aml-cft-compliance"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-extrabold transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-10 sm:mt-12 max-w-lg">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-3 sm:px-4 sm:py-4 shadow-sm"
                >
                  <strong className="block text-yellow-600 text-lg sm:text-xl font-extrabold leading-tight">
                    {stat.value}
                  </strong>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: ecosystem visual built with Rafin styling */}
          <div className="hidden lg:block">
            <FinCoreVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Simplified visual panel echoing FinCore's ops-ecosystem:
   a glass panel with a central badge, rings, and capability nodes. */
const FinCoreVisual = () => {
  const nodes = [
    { label: "Compliance", sub: "AML/KYC", className: "left-6 top-10" },
    { label: "Payments", sub: "Ops", className: "right-6 top-8" },
    { label: "Support", sub: "Queues", className: "left-10 bottom-12" },
    { label: "Technology", sub: "Governance", className: "right-10 bottom-16" },
    { label: "Risk", sub: "Monitoring", className: "left-1/2 -translate-x-1/2 bottom-4" },
  ];
  return (
    <div className="relative h-[460px] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xl">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-yellow-400/50 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-300 text-slate-900 shadow-[0_0_60px_rgba(250,204,21,0.45)] z-10">
        <strong className="text-xl font-extrabold">Rafin</strong>
        <span className="text-[10px] font-bold uppercase tracking-widest -mt-1">
          Solutions
        </span>
      </div>
      {/* orbit rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-slate-200" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-yellow-400/30" />
      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute ${node.className} z-10 min-w-[120px] rounded-lg border border-slate-200 bg-white/90 px-3 py-2.5 backdrop-blur shadow-sm`}
        >
          <strong className="block text-yellow-600 text-sm font-bold leading-tight">
            {node.label}
          </strong>
          <span className="text-xs font-semibold text-slate-500">{node.sub}</span>
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------------
   2. CORE VALUE PROPOSITION — two-column value board:
   heading left, 2x2 pill grid right (FinCore value-section).
   ------------------------------------------------------------ */
const VALUE_STEPS = [
  {
    num: "01",
    title: "Control",
    desc: "Policies, SOPs, risk checks, and clear decision records.",
  },
  {
    num: "02",
    title: "Operate",
    desc: "KYC/KYB, payments, reconciliations, alerts, and support queues.",
  },
  {
    num: "03",
    title: "Evidence",
    desc: "Registers, trackers, audit packs, dashboards, and reporting cadence.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "Flexible outsourced capacity across compliance and back-office functions.",
  },
];

export const CoreValueSection = () => (
  <section className="bg-white py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
        <SectionHeading
          eyebrow="Core Value Proposition"
          title="One operating partner for your entire financial operations."
          subtitle="Helping financial businesses build efficient operations through compliance, technology, payment processing, customer support, and operational excellence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUE_STEPS.map((step) => (
            <div
              key={step.num}
              className="relative rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:border-yellow-400 transition-colors overflow-hidden"
            >
              <span className="text-xs font-extrabold text-yellow-600 tracking-widest">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed m-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   3. ABOUT — home-about split: text left, visual stack right
   with jurisdiction badges (FinCore home-about + metric-grid).
   ------------------------------------------------------------ */
const JURISDICTIONS = [
  { country: "UK", body: "FCA / HMRC" },
  { country: "EU", body: "EBA / AMLA" },
  { country: "US", body: "FinCEN / OFAC" },
  { country: "Canada", body: "FINTRAC" },
  { country: "Australia", body: "AUSTRAC" },
  { country: "Global", body: "FATF standards" },
];

export const AboutSection = () => (
  <section className="bg-slate-50 py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <SectionHeading
          eyebrow="About Rafin Solutions"
          title={
            <>
              Built by practitioners,{" "}
              <span className="text-yellow-500">not theorists.</span>
            </>
          }
          subtitle="Rafin Solutions is a specialist compliance consultancy and outsourced-operations firm built on hands-on experience inside regulated payment, remittance, EMI, MSB, API, and digital financial service environments."
        />
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-4">
              Regulatory jurisdictions covered
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {JURISDICTIONS.map((j) => (
                <div
                  key={j.country}
                  className="rounded-lg bg-slate-50 border border-slate-100 p-3"
                >
                  <strong className="block text-yellow-600 text-lg font-extrabold leading-tight">
                    {j.country}
                  </strong>
                  <span className="text-xs font-bold text-slate-500">
                    {j.body}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   4. SERVICES GRID — FinCore .grid.services (4-col) of Rafin's
   real services, each card = icon + title + desc + View Service.
   ------------------------------------------------------------ */
const HOME_SERVICES = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "AML/CFT Compliance",
    desc: "Build practical AML/CFT frameworks, risk assessments, monitoring controls and reporting processes tailored to your business model.",
    href: "/service/aml-cft-compliance",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "KYC and KYB",
    desc: "Design reliable KYC and KYB onboarding workflows, verification rules, risk scoring and approval controls.",
    href: "/service/kyc-and-kyb",
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    title: "Transaction Monitoring",
    desc: "Develop risk-based monitoring rules, alert investigation workflows, threshold tuning and management reporting.",
    href: "/service/transaction-monitoring",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Payment Operations",
    desc: "Improve payment operations through clear workflows for settlements, exceptions, reconciliation and reporting.",
    href: "/service/payment-operations",
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    title: "Transaction Processing",
    desc: "Support accurate processing, status management, failed-payment handling, reprocessing and exception escalation.",
    href: "/service/transaction-processing",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Customer Support",
    desc: "Build responsive support operations with clear SOPs, escalation paths, quality reviews and complaint handling.",
    href: "/service/customer-support",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Technology and IT Governance",
    desc: "Strengthen technology governance with access controls, change management, incident processes and vendor oversight.",
    href: "/service/technology-and-it-governance",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Meta Ads for Fintech",
    desc: "Plan compliant, structured Meta Ads activity, including messaging review, setup coordination and performance reporting.",
    href: "/service/meta-ads-for-fintech",
  },
];

export const ServicesGridSection = () => (
  <section className="bg-white py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <SectionHeading
        center
        eyebrow="Core Services"
        title="Everything Your Financial Business Needs Under One Partner"
        subtitle="From regulatory compliance to fintech operations, training, branding, and licensing, our specialists work as an extension of your team."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {HOME_SERVICES.map((srv) => (
          <Link
            key={srv.title}
            href={srv.href}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <IconTile dark>{srv.icon}</IconTile>
            <h3 className="font-bold text-slate-900 leading-snug mb-2">
              {srv.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
              {srv.desc}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-yellow-600 mt-auto">
              View Service
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
        {/* Anchor card to the services overview */}
        <Link
          href="/service/aml-cft-compliance"
          className="group flex flex-col items-start justify-center rounded-xl border border-slate-200 bg-slate-50 p-6 hover:border-yellow-400 transition-colors"
        >
          <h3 className="font-bold text-lg text-slate-900 mb-2">Need something else?</h3>
          <p className="text-sm text-slate-600 mb-4">
            Browse all our consulting services and see how we can support your
            next compliance milestone.
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-yellow-600">
            All Services
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   5. FLAGSHIP ENGAGEMENT (dark) — left sticky lead text + right
   numbered process steps, echoing FinCore's vbo/section-dark.
   Uses Rafin's existing EngagementSection concept restyled.
   ------------------------------------------------------------ */
const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We understand your business, regulatory gaps, priorities, systems, and immediate operational pressure points.",
  },
  {
    num: "02",
    title: "Scope & Proposal",
    desc: "We agree functions, deliverables, timelines, reporting cadence, and the right engagement model.",
  },
  {
    num: "03",
    title: "Onboarding",
    desc: "We integrate into your systems, workflows, communication channels, trackers, and approval routes.",
  },
  {
    num: "04",
    title: "Go Live",
    desc: "We operate, report, identify risk, improve processes, and scale the support model as your business grows.",
  },
];

export const EngagementSection = () => (
  <section className="bg-slate-50 py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Flagship Engagement"
            title="Your Outsourced Fintech Operations Team"
            subtitle="One team, one point of accountability, covering compliance, operations, KYC/KYB, fraud risk, support, technology coordination, marketing, documentation, and reporting."
          />
        </div>
        <div className="flex flex-col gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[54px_1fr] gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-400 text-slate-900 font-extrabold">
                {step.num}
              </span>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   6. WHY — 3-col card grid (FinCore .grid.why).
   ------------------------------------------------------------ */
const WHY_CARDS = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Built by Practitioners",
    desc: "Every service is based on work delivered in live, regulated financial environments.",
  },
  {
    icon: <Scale className="w-5 h-5" />,
    title: "Regulatory Depth",
    desc: "Compliance work aligned with applicable AML/CFT expectations and practical audit evidence needs.",
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    title: "Operational Reality",
    desc: "Experience with live payment flows, partner relationships, reconciliation breaks, fraud queues, and escalations.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Multi-Function Coverage",
    desc: "One engagement can cover compliance, operations, KYC, support, training, and technology coordination.",
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    title: "Flexible and Scalable",
    desc: "Project, retainer, or outsourced support that can expand or narrow as your business changes.",
  },
  {
    icon: <ArrowUpRight className="w-5 h-5" />,
    title: "Internationally Aware",
    desc: "Practical support for cross-border fintech, remittance, payment, SaaS, and regulated financial models.",
  },
];

export const WhySection = () => (
  <section className="bg-white py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <SectionHeading
        center
        eyebrow="Why Rafin Solutions"
        title="Practical depth for regulated financial teams."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHY_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <IconTile>{card.icon}</IconTile>
            <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   7. INDUSTRIES — FinCore .grid.services.industry-grid mapping to
   Rafin's real industry pages.
   ------------------------------------------------------------ */
const HOME_INDUSTRIES = [
  { title: "Remittance Companies", href: "/industry/remittance-companies" },
  { title: "Money Service Businesses", href: "/industry/money-service-businesses" },
  { title: "Electronic Money Institutions", href: "/industry/electronic-money-institutions" },
  { title: "Payment Institutions", href: "/industry/payment-institutions" },
  { title: "Fintech Startups", href: "/industry/fintech-startups" },
  { title: "Digital Wallets", href: "/industry/digital-wallets" },
  { title: "Payment Service Providers", href: "/industry/payment-service-providers" },
  { title: "Foreign Exchange Businesses", href: "/industry/foreign-exchange-businesses" },
];

export const IndustriesSection = () => (
  <section className="bg-slate-50 py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <SectionHeading
        center
        eyebrow="Industries Supported"
        title="Built for payment, remittance, fintech, and regulated financial service teams."
        subtitle="Support is tailored for the practical realities of MSBs, EMIs, PSPs, digital wallets, payment institutions, SaaS platforms, and regulated financial firms."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {HOME_INDUSTRIES.map((ind) => (
          <Link
            key={ind.title}
            href={ind.href}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="font-bold text-slate-900 leading-snug mb-2">
              {ind.title}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-yellow-600">
              View Industry
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   8. EXPERTISE — 3 detail boxes (FinCore detail-grid.expertise).
   ------------------------------------------------------------ */
const EXPERTISE = [
  {
    title: "Compliance",
    points: [
      "AML/CFT frameworks",
      "KYC/KYB design",
      "Screening & monitoring",
      "Policies and audit evidence",
    ],
  },
  {
    title: "Operations",
    points: [
      "Payments & reconciliation",
      "Exception handling",
      "Support queues",
      "Reporting cadence",
    ],
  },
  {
    title: "Governance",
    points: [
      "Technology governance",
      "Access control",
      "Vendor risk",
      "BCP/DR and evidence registers",
    ],
  },
];

export const ExpertiseSection = () => (
  <section className="bg-white py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <SectionHeading
        center
        eyebrow="Compliance and Operational Expertise"
        title="Documentation, controls, workflow execution, and governance in one operating model."
        subtitle="Rafin can support AML/CFT documentation, onboarding reviews, transaction monitoring workflows, payment operations, vendor risk, IT governance, BCP/DR, customer support, and practical reporting packs."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {EXPERTISE.map((box) => (
          <div
            key={box.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h4 className="text-yellow-600 text-sm font-extrabold uppercase tracking-wider mb-4">
              {box.title}
            </h4>
            <ul className="space-y-2.5">
              {box.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2.5 text-slate-700 text-sm font-medium"
                >
                  <Check className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   9. CASE STUDIES — FinCore mini-grid of 3 case cards.
   ------------------------------------------------------------ */
const CASE_STUDIES = [
  {
    title: "UK Remittance Operations Review",
    desc: "An anonymised remittance team needed clearer onboarding, monitoring, reconciliation, and escalation workflows.",
    href: "/service/payment-operations",
  },
  {
    title: "Payment Institution Back-Office Buildout",
    desc: "An anonymised payment institution required a practical structure for support queues, partner onboarding, and transaction operations.",
    href: "/service/customer-support",
  },
  {
    title: "Fintech Startup Pre-Launch Control Pack",
    desc: "An anonymised fintech startup needed pre-launch compliance, governance, and operating documentation before scaling activity.",
    href: "/service/aml-cft-compliance",
  },
];

export const CaseStudiesSection = () => (
  <section className="bg-slate-50 py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <SectionHeading
        center
        eyebrow="Featured Case Studies"
        title="Practical operating challenges and support structures."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CASE_STUDIES.map((cs) => (
          <Link
            key={cs.title}
            href={cs.href}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-bold text-slate-900 leading-snug mb-2">
              {cs.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
              {cs.desc}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-yellow-600">
              Read Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   10. INSIGHTS — FinCore post-grid of the latest News & Events.
   ------------------------------------------------------------ */
import { NEWS_DATA } from "../Static Data/HomeData";

export const InsightsSection = () => (
  <section className="bg-white py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
        <SectionHeading
          eyebrow="Insights"
          title="Latest compliance and operations articles."
        />
        <Link
          href="/news-events"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-yellow-600 transition-colors shrink-0 mb-9"
        >
          View all news
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {NEWS_DATA.slice(0, 3).map((item, idx) => (
          <Link
            key={idx}
            href="/news-events"
            className="group flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 text-white rounded-lg px-3 py-1.5 text-xs font-bold">
                {item.day} {item.month}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="font-bold text-slate-900 leading-snug mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 grow">
                {item.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-yellow-600">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   11. FAQ — FinCore mini-grid of FAQ cards (Rafin's FAQ content,
   rendered as cards rather than an accordion to match FinCore).
   ------------------------------------------------------------ */
const FAQ_ITEMS = [
  {
    q: "Does Rafin Solutions provide ongoing compliance support?",
    a: "Yes. Rafin provides project-based or ongoing compliance support, including licence authorisation, ongoing monitoring, annual compliance audits, and safeguarding.",
  },
  {
    q: "Can Rafin prepare AML and KYC policies?",
    a: "Yes. Rafin can prepare practical AML/CFT, KYC, KYB, onboarding, monitoring, escalation, and review documentation tailored to your business model.",
  },
  {
    q: "Can Rafin support transaction monitoring operations?",
    a: "Yes. Rafin can support transaction monitoring through alert review workflows, investigation notes, escalation routes, and documented decision trails.",
  },
  {
    q: "Does Rafin provide AML/CFT training?",
    a: "Yes. Rafin delivers business-tailored online and in-person AML/CFT training, with assessments and scenario-based learning.",
  },
  {
    q: "How can a client request a proposal?",
    a: "Clients can book a consultation or contact Rafin with their requirements. A proposal is prepared after scope, urgency, and service areas are reviewed.",
  },
  {
    q: "What type of businesses does Rafin support?",
    a: "Rafin supports banks, credit unions, MSBs, payment firms, fintech startups, and regulated financial service teams globally.",
  },
];

export const FAQSection = () => (
  <section className="bg-slate-50 py-20 border-t border-slate-200">
    <div className={`${container}`}>
      <SectionHeading
        center
        eyebrow="FAQ"
        title="Common questions before a consultation."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FAQ_ITEMS.map((faq) => (
          <div
            key={faq.q}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="font-bold text-slate-900 leading-snug mb-2">
              {faq.q}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------
   12. FINAL CTA — dark band with a gold underline heading
   (FinCore .cta, centered layout).
   ------------------------------------------------------------ */
export const CTABandSection = () => (
  <section className="bg-slate-50 py-20 text-slate-900 border-t border-slate-200">
    <div className={`${container}`}>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5 underline decoration-yellow-400 decoration-[3px] underline-offset-8">
          Ready to strengthen your financial operations?
        </h2>
        <p className="text-slate-600 max-w-2xl text-lg leading-relaxed mb-8">
          Whether you need a single compliance document, a full licensing setup,
          or ongoing advisory support, Rafin Solutions is ready to deliver.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center gap-2 min-h-11 px-7 rounded-md bg-yellow-400 text-slate-900 text-sm font-extrabold transition-colors hover:bg-yellow-300"
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  </section>
);
