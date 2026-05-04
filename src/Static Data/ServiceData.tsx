"use client";

import React from "react";
import {
  Search,
  Target,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Check,
  Settings,
  Calculator,
  BookOpen,
  Users,
  MonitorSmartphone,
  Palette,
  Network,
  Smartphone,
  CreditCard,
} from "lucide-react";
import {
  FileText,
  Coins,
  Scale,
  Clock,
  Briefcase,
  RefreshCw,
  Landmark,
} from "lucide-react";
export const SERVICES_DATA = [
  {
    slug: "total-compliance",
    icon: <Settings />,
    title: "Total Compliance",
    desc: "Comprehensive compliance tailored for financial services.",
    overviewText:
      "Rafin Solutions offers a wide and very diverse range of compliance services including strategic planning and implementation of compliance policies within your organisation. We offer a simple check of your whole organisation and various services/products you offer in order to assess your needs and identify areas of key importance and high risk.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Holistic Management",
        desc: "We can do this as part of an exercise in managing your compliance solution.",
      },
      {
        title: "Tailored Interventions",
        desc: "A tailored activity to address a particular issue/situation.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Coins className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Flexible Pricing",
        desc: "Our prices are very flexible and could be tailored to suit whatever service(s) you require. We provide a suitable price to meet your needs.",
        points: [
          "Full application process from documents to FCA queries",
          "Specific point-in-time advice or targeted guidance",
        ],
      },
      {
        icon: (
          <Target className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Tailored & Suitable Service",
        desc: "For each client, we seek to develop and maintain a detailed understanding of the business environment and model, so as to enable us provide a well-tailored and suitable service.",
        points: [
          "Proactive approach adding value to our clients",
          "Manage compliance diligence while saving time and money",
        ],
      },
    ],
  },
  {
    slug: "aml-audit",
    icon: <Calculator />,
    title: "AML Audit",
    desc: "Comprehensive Audit under FCA guidelines.",
    overviewText:
      "We provide comprehensive Anti-Money Laundering (AML) audits aligned with the latest FCA guidelines. Our expert consultants dive deep into your operational controls to ensure complete regulatory adherence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Risk Assessment",
        desc: "Detailed evaluation of your current AML risk frameworks.",
      },
      {
        title: "Remediation Strategy",
        desc: "Clear, actionable steps to resolve identified compliance gaps.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <ShieldCheck className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Independent Assurance",
        desc: "Gain peace of mind with a completely independent review of your financial crime controls and reporting mechanisms.",
        points: [
          "FCA-aligned auditing processes",
          "Detailed reporting and board feedback",
        ],
      },
      {
        icon: (
          <FileText className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Policy Optimization",
        desc: "We don't just audit; we help refine your existing policies to be more efficient and resilient against financial crime.",
        points: [
          "Streamlined KYC/KYB procedures",
          "Suspicious Activity Report (SAR) reviews",
        ],
      },
    ],
  },
  {
    slug: "money-laundering",
    icon: <BookOpen />,
    title: "Money Laundering",
    desc: "Ensure business compliance with regulations.",
    overviewText:
      "Navigate the complex landscape of Money Laundering Regulations. We ensure your business is fully compliant with the latest directives, safeguarding you from severe regulatory penalties.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Regulatory Mapping",
        desc: "Aligning your business operations directly with ML regulations.",
      },
      {
        title: "Control Implementation",
        desc: "Deploying robust safeguards and detection mechanisms.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Scale className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Legislative Alignment",
        desc: "Stay ahead of regulatory changes with our continuous legislative monitoring and alignment services.",
        points: [
          "Up-to-date with 2017/2019 MLR",
          "Sanctions and PEP screening integration",
        ],
      },
      {
        icon: (
          <Clock className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Ongoing Monitoring",
        desc: "Compliance is not a one-time task. We provide continuous support to ensure your safeguards remain effective over time.",
        points: ["Periodic risk reviews", "Real-time regulatory updates"],
      },
    ],
  },
  {
    slug: "aml-training",
    icon: <Users />,
    title: "AML Training",
    desc: "Extensive AML/CFT training programs.",
    overviewText:
      "Empower your team with our extensive Anti-Money Laundering (AML) and Countering the Financing of Terrorism (CFT) training programs, customized for your specific business model.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Custom Curriculum",
        desc: "Training material designed specifically for your industry's risks.",
      },
      {
        title: "Certification",
        desc: "Formal assessments and completion certificates for staff.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Users className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Interactive Sessions",
        desc: "Engaging, scenario-based learning available both online and in-person to maximize retention and practical application.",
        points: ["Real-world case studies", "Interactive Q&A and assessments"],
      },
      {
        icon: (
          <BookOpen className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Role-Specific Modules",
        desc: "Different roles face different risks. Our training is segmented to provide relevant knowledge from front-line staff to MLROs.",
        points: [
          "Senior Management training",
          "Front-line detection techniques",
        ],
      },
    ],
  },
  {
    slug: "fin-tech-services",
    icon: <MonitorSmartphone />,
    title: "Fin-Tech Services",
    desc: "KYC/AML tools, and SWIFT/SEPA access.",
    overviewText:
      "We specialize in guiding Fin-Tech startups and established players through the complex technological and regulatory hurdles required to operate and scale globally.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Payment Integration",
        desc: "Assistance with SWIFT, SEPA, and major card networks.",
      },
      {
        title: "Tech Compliance",
        desc: "Ensuring your technological stack meets regulatory standards.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <MonitorSmartphone className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Automated Solutions",
        desc: "We help you select, integrate, and optimize the best automated KYC, KYB, and transaction monitoring tools available.",
        points: [
          "Partnered with leading RegTech providers",
          "Seamless API integration guidance",
        ],
      },
      {
        icon: (
          <Network className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Network Access",
        desc: "Unlock global payment capabilities with our expert guidance on securing necessary memberships and network access.",
        points: [
          "Visa/MasterCard principal membership",
          "SWIFT & SEPA scheme access",
        ],
      },
    ],
  },
  {
    slug: "branding-design",
    icon: <Palette />,
    title: "Branding & Design",
    desc: "Create modern and memorable brand identities that make your business stand out.",
    overviewText:
      "Stand out in a crowded market with our premium branding and design services. We craft memorable, trustworthy identities specifically tailored for the financial and tech sectors.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Corporate Identity",
        desc: "Logos, typography, and visual systems that build immediate trust.",
      },
      {
        title: "UI/UX Design",
        desc: "Intuitive, modern interfaces for web and mobile platforms.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Palette className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Visual Excellence",
        desc: "We bridge the gap between strict financial professionalism and modern, engaging design aesthetics.",
        points: [
          "Comprehensive brand guidelines",
          "Marketing collateral & pitch decks",
        ],
      },
      {
        icon: (
          <Smartphone className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Digital Experience",
        desc: "Your digital presence is your storefront. We ensure every user interaction is seamless, beautiful, and conversion-focused.",
        points: ["High-fidelity prototyping", "User journey mapping"],
      },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: <Smartphone />,
    title: "Mobile App Development",
    desc: "Build fast, smooth, and user-friendly mobile apps for Android and iOS.",
    overviewText:
      "Bring your Fin-Tech vision to life with our cutting-edge mobile app development services. We build secure, scalable, and high-performance applications for both iOS and Android.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Cross-Platform Build",
        desc: "Efficient development using modern frameworks like React Native.",
      },
      {
        title: "Bank-Grade Security",
        desc: "Implementing the highest security standards for financial data.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Smartphone className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "End-to-End Development",
        desc: "From initial wireframes and architecture planning to app store deployment and post-launch maintenance.",
        points: [
          "Agile development methodology",
          "Native and cross-platform options",
        ],
      },
      {
        icon: (
          <ShieldCheck className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Secure & Scalable",
        desc: "Built with the financial sector in mind, ensuring your application can handle growth while protecting sensitive user data.",
        points: [
          "Biometric authentication integration",
          "Encrypted data handling",
        ],
      },
    ],
  },
  {
    slug: "consumer-credit",
    icon: <Landmark />,
    title: "Consumer Credit",
    desc: "Navigate the complex landscape of consumer credit regulation.",
    overviewText:
      "Expert authorization and compliance services for firms operating in the Consumer Credit space, ensuring your lending practices meet strict FCA requirements.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "FCA Authorisation",
        desc: "End-to-end management of your consumer credit licence application.",
      },
      {
        title: "Credit Policy Review",
        desc: "Ensuring lending criteria aligns with regulatory expectations.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Briefcase className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Licensing Support",
        desc: "Whether you need limited or full permission, we guide you through the intricate FCA application process.",
        points: [
          "Business plan formulation",
          "Regulatory business profile drafting",
        ],
      },
      {
        icon: (
          <FileText className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Ongoing Compliance",
        desc: "Maintaining compliance in a sector subject to intense regulatory scrutiny and constant updates.",
        points: [
          "Financial promotions review",
          "Affordability assessment frameworks",
        ],
      },
    ],
  },
  {
    slug: "e-money-service",
    icon: <CreditCard />,
    title: "E-Money Service",
    desc: "Expert guidance for Electronic Money Institutions (EMIs).",
    overviewText:
      "We guide UK and EU businesses through the complex authorization process to issue E-Money, ensuring strict adherence to Electronic Money Regulations (EMRs).",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "EMI Authorisation",
        desc: "Full support for Small or Authorised Electronic Money Institution applications.",
      },
      {
        title: "Safeguarding Audits",
        desc: "Ensuring client funds are protected according to regulatory standards.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <CreditCard className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Application Excellence",
        desc: "Our senior consultants manage the rigorous application process, minimizing delays and maximizing approval chances.",
        points: [
          "Capital requirements guidance",
          "IT and security framework review",
        ],
      },
      {
        icon: (
          <ShieldCheck className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Operational Readiness",
        desc: "We ensure your business is practically ready to operate as an EMI from day one of authorization.",
        points: [
          "Safeguarding account setups",
          "Agent and distributor onboarding",
        ],
      },
    ],
  },
  {
    slug: "uk-currency-exchange",
    icon: <RefreshCw />,
    title: "UK Currency Exchange Law",
    desc: "Compliance solutions for Foreign Exchange and MSBs.",
    overviewText:
      "Specialized compliance, registration, and advisory services for Money Service Businesses (MSBs) and bureaus de change operating under UK and international law.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "HMRC Registration",
        desc: "Seamless handling of your MSB registration requirements.",
      },
      {
        title: "Transaction Monitoring",
        desc: "Systems to detect and report suspicious currency transactions.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <RefreshCw className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "MSB Compliance",
        desc: "Tailored policies and procedures specifically designed for the unique risks associated with currency exchange.",
        points: ["Risk assessment frameworks", "Cash handling protocols"],
      },
      {
        icon: (
          <Search className="w-12 h-12 text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Audit & Review",
        desc: "Independent reviews of your exchange operations to ensure ongoing compliance with HMRC and FCA standards.",
        points: ["Record-keeping assessments", "Staff awareness evaluations"],
      },
    ],
  },
];
