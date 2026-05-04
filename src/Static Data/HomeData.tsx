"use client";
import {
  ArrowRight,
  Settings,
  CreditCard,
  Calculator,
  BookOpen,
  Users,
  MonitorSmartphone,
  Check,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUp,
  Menu,
  ShieldCheck,
  ArrowUpRight,
  Network,
  Hexagon,
  Command,
  Activity,
  Aperture,
  Box,
  Triangle,
  CloudLightning,
} from "lucide-react";
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    dropdown: [
      { label: 'Who We Are?', href: '/about-us' },
      { label: 'Our Team', href: '/our-team' }
    ]
  },
  {
    label: 'Services',
    dropdown: [
      { label: 'Compliance Solutions', href: '/services' },
      { label: 'Consumer Credit', href: '/services' },
      { label: 'E-Money Service', href: '/services' },
      { label: 'UK Currency Exchange Law', href: '/services' },
      { label: 'Money Laundering Regulations', href: '/services' },
      { label: 'Training and Competence', href: '/services' },
      { label: 'Fin-tech Services', href: '/services' }
    ]
  },
  {
    label: 'Training',
    dropdown: [
      { label: 'AML/CFT Training', href: '/training' },
      { label: 'Consumer Training', href: '/training' },
      { label: 'Approved Person\'s Training', href: '/training' }
    ]
  },
  {
    label: 'Industry',
    dropdown: [
      { label: 'Banks and Financial Institutions', href: '/industry' },
      { label: 'Credit Unions', href: '/industry' },
      { label: 'MSBs', href: '/industry' },
      { label: 'Payments', href: '/industry' },
      { label: 'Corporate and Listed Firms', href: '/industry' },
      { label: 'Fintech', href: '/industry' },
      { label: 'Crypto', href: '/industry' }
    ]
  },
  { label: 'News & Event', href: '/news-events' },
  { label: 'Contact', href: '/contact' }
];

export const CLIENT_LOGOS = [
  { icon: <Hexagon className="w-8 h-8" />, name: "VANGUARD" },
  { icon: <Command className="w-8 h-8" />, name: "NEXUS" },
  { icon: <Activity className="w-8 h-8" />, name: "PULSE" },
  { icon: <Aperture className="w-8 h-8" />, name: "APERTURE" },
  { icon: <Box className="w-8 h-8" />, name: "BLOCK" },
  { icon: <Triangle className="w-8 h-8" />, name: "PRISM" },
  { icon: <CloudLightning className="w-8 h-8" />, name: "AURA" },
  { icon: <Network className="w-8 h-8" />, name: "SYNAPSE" },
];

export const ADVISORY_CARDS = [
  {
    title: "Compliance Solution",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    desc: "Comprehensive compliance solution tailored for the financial services including Authorisation, Ongoing monitoring, and health checks.",
  },
  {
    title: "Fin-Tech Service",
    desc: "Assist Fintech clients with services, including KYC/AML verification tools, monitoring, and visa/master card membership.",
  },
  {
    title: "AML/CFT Training",
    desc: "Extensive AML/CFT training programs that encompass a broad spectrum of AML regulations.",
  },
];

export const CONSULTING_SERVICES = [
  {
    icon: <Settings />,
    title: "Total Compliance",
    desc: "Comprehensive compliance tailored for financial services.",
  },

  {
    icon: <Calculator />,
    title: "AML Audit",
    desc: "Comprehensive Audit under FCA guidelines.",
  },
  {
    icon: <BookOpen />,
    title: "Money Laundering",
    desc: "Ensure business compliance with regulations.",
  },
  {
    icon: <Users />,
    title: "AML Training",
    desc: "Extensive AML/CFT training programs.",
  },
  {
    icon: <MonitorSmartphone />,
    title: "Fin-Tech Services",
    desc: "KYC/AML tools, and SWIFT/SEPA access.",
  },
];

export const COMPLIANCE_POINTS = [
  "Licence authorisation for Financial Services.",
  "Annual Compliance Audit with safeguarding.",
  "Ongoing compliance monitoring.",
];

export const TRAINING_POINTS = [
  "Business-tailored online/in-person training.",
  "Comprehensive annual programs.",
  "In-depth coverage of current AML Regulations.",
];

export const FINTECH_POINTS = [
  "SWIFT & SEPA payment schemes.",
  "Visa/MasterCard membership.",
  "Automated transaction monitoring.",
];


export const FOOTER_LINKS = {
  quickLinks: [
    "About Us",
    "Specialized Services",
    "AML Training",
    "Careers",
    "Contact Us",
  ],
  legal: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
};




export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
  
  :root {
    --brand-yellow: #facc15;
    --brand-black: #050505;
    --brand-dark: #121212;
  }
  
  body {
    background-color: var(--brand-black);
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
  
  .font-tech {
    font-family: 'Tronica Mono', 'Space Mono', monospace;
  }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: #050505; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: #facc15; }

  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  
  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
  }
  
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`;
