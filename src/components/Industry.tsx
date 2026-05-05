"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Search,
  Target,
  PhoneCall,
  Building2,
  BarChart3,
  ClipboardCheck,
  Users,
  Zap,
  RefreshCw,
  Eye,
  FileText,
  CreditCard,
  TrendingUp,
  Briefcase,
  Scale,
  Cpu,
  Network,
  Lock,
  Bitcoin,
  Globe,
  Settings,
  LucideIcon,
} from "lucide-react";

// ==========================================
// 1. GLOBAL STYLES (Light Theme)
// ==========================================
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
  
  :root {
    --brand-yellow: #facc15;
    --brand-white: #ffffff;
    --brand-light: #f8fafc;
    --brand-dark: #0f172a;
  }
  
  .font-tech {
    font-family: 'Tronica Mono', 'Space Mono', monospace;
  }

  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .perspective-1000 {
    perspective: 1000px;
  }
`;

// ==========================================
// 2. DATA TYPING & CONTENT
// ==========================================

interface IndustryItem {
  slug: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  overviewText: string;
  image: string;
  features: { title: string; desc: string }[];
  bentoBoxes: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    points: string[];
  }[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "banks-financial-institutions",
    icon: <Building2 />,
    title: "Banks Institutions",
    desc: "Unified AML compliance for high-volume banking environments.",
    overviewText:
      "Navigating anti-money laundering (AML) compliance for banks and financial institutions presents distinctive challenges — significant daily transaction volume across traditional and digital channels, an ever-evolving regulatory framework, and the intricate task of managing false positives. Rafin Solutions offers an integrated compliance platform that implements real-time data collection and automation, adopting a risk-based approach across all facets of compliance.",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Unified AML Platform",
        desc: "An integrated compliance platform merging all functions — from the first red flag to the final regulatory report — into a single cohesive system.",
      },
      {
        title: "AML Search & Transaction Monitoring",
        desc: "Advanced real-time transaction monitoring to detect and address suspicious activity promptly.",
      },
    ],
    bentoBoxes: [
      {
        icon: <BarChart3 />,
        title: "Risk Intelligence",
        desc: "Comprehensive AML Policy Risk Assessment tailored to your institution's unique needs with daily client risk score updates.",
        points: [
          "AML policy risk assessment",
          "External AML audit preparation",
        ],
      },
      {
        icon: <ClipboardCheck />,
        title: "Regulatory Reporting",
        desc: "Streamlined preparation, validation, and submission of regulatory reports, removing manual overhead and reducing error risk.",
        points: ["Automated submission", "Sanctions/PEP integration"],
      },
    ],
  },
  {
    slug: "credit-unions",
    icon: <Users />,
    title: "Credit Unions",
    desc: "Scalable AML solutions built for credit union operations.",
    overviewText:
      "In the fast-paced world of finance, staying on top means adapting to new technologies, currencies, and regulatory rules. Our adaptive AML Credit Union Solution is a smart, cost-effective platform that grows with your needs, making compliance straightforward.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Instant Identity Verification",
        desc: "Seamlessly validate member identities in real-time by integrating with your onboarding system.",
      },
      {
        title: "Tailored Risk Scoring",
        desc: "Create a customised risk scoring model aligned with your risk tolerance, with real-time updates.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Zap />,
        title: "Automation & Efficiency",
        desc: "Time-consuming AML tasks are automated, freeing your team to focus on investigations rather than manual processes.",
        points: ["Minimise false positives", "Swift resolutions"],
      },
      {
        icon: <ShieldCheck />,
        title: "Sanctions & Monitoring",
        desc: "Real-time checks against sanction lists and internal high-risk databases during onboarding and ongoing monitoring.",
        points: ["Risk-free onboarding", "Multi-jurisdiction reporting"],
      },
    ],
  },
  {
    slug: "msbs",
    icon: <RefreshCw />,
    title: "Money Services",
    desc: "AML programs purpose-built for Money Services Businesses.",
    overviewText:
      "While MSBs share AML obligations with other financial institutions, the compliance game is fundamentally different. You provide swift access to money orders, currency exchange, and transfer services — often to transitory customers. You need a solution built for your pace.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Real-Time Name Screening",
        desc: "Real-time screening against sanctions watchlists and PEP databases during all interactions.",
      },
      {
        title: "Customisable Risk Scoring",
        desc: "Build a risk scoring model aligned with your organization's risk tolerance, updated dynamically.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Eye />,
        title: "Suspicious Detection",
        desc: "Detect suspicious transactions — including structuring and flipping — across single or multi-site operations in real time.",
        points: ["Real-time oversight", "Daily threshold updates"],
      },
      {
        icon: <FileText />,
        title: "Swift Reporting",
        desc: "Regulatory reporting simplified — accurate, and seamlessly submitted across multiple jurisdictions without manual overhead.",
        points: ["Multi-jurisdiction submission", "Continuous expert support"],
      },
    ],
  },
  {
    slug: "payments",
    icon: <CreditCard />,
    title: "Payment Processors",
    desc: "Compliance infrastructure for payment processors and institutions.",
    overviewText:
      "Payment processors operate under intensifying scrutiny. We help you navigate this pressure with a robust AML solution designed specifically for payment firms, from licence application to audit readiness.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Licence Support",
        desc: "End-to-end management of your Payment Institution licence application, streamlining submission to authorities.",
      },
      {
        title: "Transaction Software",
        desc: "Sophisticated software enabling real-time transaction oversight to identify suspicious activities promptly.",
      },
    ],
    bentoBoxes: [
      {
        icon: <TrendingUp />,
        title: "Ongoing Compliance",
        desc: "Continuous support as regulations evolve, including automated reporting and comprehensive risk assessments.",
        points: ["Automated preparation", "Specific exposure frameworks"],
      },
      {
        icon: <ShieldCheck />,
        title: "External AML Audit",
        desc: "Prepare for external AML audits with confidence. We support you in demonstrating compliance to banking partners.",
        points: ["Pre-audit documentation", "Compliance evidence"],
      },
    ],
  },
  {
    slug: "corporate-listed-firms",
    icon: <Briefcase />,
    title: "Corporate Firms",
    desc: "Governance and AML compliance for corporate and public companies.",
    overviewText:
      "For corporate and listed firms, regulatory compliance is the cornerstone of trust. We offer a comprehensive approach: from fortifying governance to providing a robust AML Safety Manual.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Corporate Governance",
        desc: "Elevate your governance standards, ensuring transparency, accountability, and ethical practices for growth.",
      },
      {
        title: "AML Safety Manual",
        desc: "A tailored Anti-Money Laundering Safety Manual crafted to the unique needs of corporate firms.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Scale />,
        title: "Risk Assessment",
        desc: "Comprehensive risk assessments tailored to your specific industry nuances, fortifying your management framework.",
        points: ["Industry-specific identification", "Regulatory updates"],
      },
      {
        icon: <ClipboardCheck />,
        title: "Regulatory Reporting",
        desc: "Streamlined preparation and electronic submission of reports, removing manual effort and reducing risk.",
        points: ["Validated preparation", "Electronic submission"],
      },
    ],
  },
  {
    slug: "fintech",
    icon: <Cpu />,
    title: "FinTech Startups",
    desc: "Scalable AML compliance for digital-first financial businesses.",
    overviewText:
      "The increasing scrutiny from regulators necessitates a robust AML framework tailored specifically for FinTech organisations. Our cloud-based solution scales with your transaction volume.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Real-Time Due Diligence",
        desc: "Integrate with your onboarding system for efficient and automated due diligence fulfilment.",
      },
      {
        title: "360° Client View",
        desc: "A comprehensive view of client information, facilitating easier investigation and faster resolution.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Network />,
        title: "Scalable Cloud",
        desc: "Our solution scales with volume, offering cost-effective deployment with the compliance insights your team needs.",
        points: ["FinTech growth design", "Adverse media screening"],
      },
      {
        icon: <Lock />,
        title: "Automated Reporting",
        desc: "Streamline validation and submission of CTRs, SARs, and STRs across jurisdictions with advanced case management.",
        points: ["Multi-jurisdiction submission", "Team collaboration tools"],
      },
    ],
  },
  {
    slug: "crypto",
    icon: <Bitcoin />,
    title: "Crypto Assets",
    desc: "Compliance and risk management for digital asset businesses.",
    overviewText:
      "Businesses operating in digital assets require solutions that seamlessly integrate traditional compliance rigour with the dynamic requirements of the crypto market.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Regulatory Assurance",
        desc: "Ensure adherence to standards in the crypto space with our integrated compliance solutions.",
      },
      {
        title: "Strategic Risk Mgmt",
        desc: "Navigate volatile cryptocurrency markets with protocols that minimise transaction-associated exposure.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Globe />,
        title: "Digital Infrastructure",
        desc: "Secure wallet solutions, efficient processing, and technology integration aligned with the evolving crypto landscape.",
        points: ["Secure user-friendly wallets", "Data-driven analytics"],
      },
      {
        icon: <ShieldCheck />,
        title: "AML for Crypto",
        desc: "Instant verification, sanctions screening, and real-time monitoring — the complete AML stack for digital assets.",
        points: ["Real-time PEP screening", "Tailored profile updates"],
      },
    ],
  },
];

// ==========================================
// 3. SHARED UI & ANIMATION COMPONENTS
// ==========================================
const FadeIn = ({
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
    up: { y: 30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        scale: scale ? 0.96 : 1,
        ...directions[direction],
      }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom ease for a snappier, premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-5%" }}
    variants={{
      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20, filter: "blur(5px)", scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Helper to safely render icons with specific classes
const IconBox = ({
  icon,
  className = "",
  size = "w-4 h-4",
}: {
  icon: React.ReactNode;
  className?: string;
  size?: string;
}) => {
  return (
    <span
      className={`${className} ${size} flex items-center justify-center shrink-0`}
    >
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<any>, {
            className: "w-full h-full",
          })
        : icon}
    </span>
  );
};

// ==========================================
// 4. DESIGN SECTIONS
// ==========================================

export const IndustryHero = ({ industry }: { industry: IndustryItem }) => {
  const words = industry.title
    ? industry.title.split(" ")
    : ["Industry", "Solutions"];
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(" ");

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden z-0 bg-white flex flex-col items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 opacity-80"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full max-w-5xl">
        <StaggerContainer>
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-bold text-slate-600 mb-8 uppercase tracking-widest">
              <IconBox icon={<Settings />} className="text-slate-900" />
              <span>Industry Expertise / {industry.title}</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-extrabold text-slate-900 mb-8 tracking-tighter leading-[0.95] flex flex-col md:flex-row items-center justify-center md:gap-x-8">
              <span>{firstWord}</span>
              <span className="font-tech text-yellow-400 drop-shadow-[0_10px_10px_rgba(250,204,21,0.2)]">
                {restOfTitle || "Solutions"}
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
              {industry.desc}
            </p>
          </StaggerItem>

          <StaggerItem>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white font-bold shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] transition-all group"
            >
              Start Your Application{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export const IndustryOverview = ({ industry }: { industry: IndustryItem }) => (
  <section className="bg-slate-50 py-32 border-y border-slate-200 relative overflow-hidden">
    <div className="absolute right-0 top-0 w-1/2 h-full bg-yellow-400/[0.03] blur-[120px] pointer-events-none"></div>

    <div className="container mx-auto px-6 lg:px-16 w-full relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <FadeIn
          scale
          direction="none"
          className="lg:w-1/2 w-full relative perspective-1000"
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: -2 }}
            className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] group border border-white"
          >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img
              src={industry.image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              alt={industry.title}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-10 -right-8 md:-right-12 bg-white p-7 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12),inset_0_-6px_0_0_rgb(226,232,240,1)] max-w-[280px] border border-slate-100 z-20 hover:-translate-y-2 transition-transform duration-500 hidden md:block"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-0.5">
                  Objective
                </div>
                <div className="font-extrabold text-slate-900 text-lg">
                  Risk Control
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-semibold leading-relaxed">
              Tailored mitigation strategies for your financial sector.
            </p>
          </motion.div>
        </FadeIn>

        <div className="lg:w-1/2 w-full">
          <SectionHeading title="Strategic Approach" yellow className="mb-10" />
          <FadeIn delay={0.2}>
            <p className="text-slate-600 leading-relaxed mb-12 text-xl font-medium border-l-[6px] border-yellow-400 pl-8">
              {industry.overviewText}
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {industry.features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-slate-900 transition-all duration-500 group flex items-start gap-6 cursor-pointer">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-yellow-500 shrink-0 group-hover:bg-yellow-400 group-hover:text-slate-900 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                    <Check className="w-7 h-7" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-xl group-hover:text-yellow-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-500 text-base leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  </section>
);

const IndustryBentoSection = ({ industry }: { industry: IndustryItem }) => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-16 w-full relative z-10">
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter">
              Sector Deliverables.
            </h2>
            <p className="text-slate-500 text-xl font-medium">
              Strategic compliance components designed specifically for{" "}
              {industry.title}.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {industry.bentoBoxes.map((box, idx) => (
            <FadeIn scale delay={idx * 0.1} key={idx} className="h-full">
              <div className="bg-white border border-slate-200 rounded-[3.5rem] p-12 md:p-16 h-full flex flex-col transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.01] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-6px_0_0_rgb(226,232,240,1)] hover:shadow-[0_50px_100px_-20px_rgb(0,0,0,0.1),inset_0_-8px_0_0_rgb(15,23,42,1)] hover:border-slate-900 group overflow-hidden relative cursor-pointer">
                <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-slate-200 mb-12 group-hover:bg-slate-900 transition-all duration-500 shadow-inner group-hover:rotate-6">
                  <IconBox
                    icon={box.icon}
                    size="w-10 h-10"
                    className="text-yellow-500 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 group-hover:text-slate-800 transition-colors duration-300 tracking-tighter">
                  {box.title}
                </h3>
                <p className="text-slate-500 text-xl mb-12 flex-grow leading-relaxed relative z-10 font-medium group-hover:text-slate-600">
                  {box.desc}
                </p>

                <ul className="space-y-6 pt-10 border-t border-slate-100 relative z-10">
                  {box.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-5 text-slate-700 group/item hover:translate-x-3 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 75}ms` }}
                    >
                      <div className="bg-yellow-100 p-1.5 rounded-xl mt-0.5 group-hover:bg-yellow-400 transition-all shadow-sm">
                        <Check
                          className="w-5 h-5 text-yellow-600 group-hover:text-slate-900"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="font-bold text-lg leading-relaxed text-slate-800">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SectionHeading = ({
  title,
  subtitle,
  yellow = false,
  className = "",
}: {
  title: string;
  subtitle?: string;
  yellow?: boolean;
  className?: string;
}) => (
  <div className={`flex flex-col ${className}`}>
    <FadeIn>
      <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight text-slate-900">
        {title}
        {yellow && <span className="text-yellow-400">.</span>}
      </h2>
    </FadeIn>
    {subtitle && (
      <FadeIn delay={0.1}>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-slate-500 font-medium">
          {subtitle}
        </p>
      </FadeIn>
    )}
  </div>
);

export const CTASection = () => (
  <section className="py-24 bg-slate-50 relative border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <FadeIn scale direction="none">
        <div className="bg-[#0f1423] rounded-[4rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl border border-slate-800 group">
          <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-yellow-400/10 blur-[100px] pointer-events-none group-hover:bg-yellow-400/20 transition-all duration-700"></div>
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-400/10 blur-[100px] pointer-events-none group-hover:bg-blue-400/20 transition-all duration-700"></div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mb-10"
            >
              <PhoneCall className="w-16 h-16 text-yellow-400 stroke-[2.5]" />
            </motion.div>

            <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-8 tracking-tighter leading-[1] drop-shadow-lg">
              Ready to secure your <br />
              <span className="text-yellow-400 font-tech">compliance</span>{" "}
              future?
            </h2>

            <p className="text-slate-300 text-xl md:text-2xl mb-14 max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
              Get in touch with our expert consultants today to secure your
              business and streamline your regulatory framework.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-4 px-12 py-5 rounded-full text-lg font-black transition-all duration-300 bg-yellow-400 text-slate-900 shadow-[0_10px_30px_rgba(250,204,21,0.4)] hover:bg-yellow-300"
            >
              Contact Us Now{" "}
              <ArrowRight className="w-6 h-6 ml-1 transition-transform group-hover:translate-x-2" />
            </motion.button>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

// ==========================================
// 5. EXPORTED COMPONENT
// ==========================================
export const Industry = ({ industry }: { industry?: IndustryItem }) => {
  const displayIndustry = industry || INDUSTRIES_DATA[0];

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans bg-white selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden">
        <IndustryHero industry={displayIndustry} />
        <IndustryOverview industry={displayIndustry} />
        <IndustryBentoSection industry={displayIndustry} />
        <CTASection />
      </div>
    </>
  );
};

export default Industry;
