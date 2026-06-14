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
  Palette,
  Smartphone,
  Landmark,
} from "lucide-react";

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
  
  :root {
    --brand-yellow: #facc15;
    --brand-white: #ffffff;
    --brand-light: #f8fafc;
    --brand-dark: #0f172a;
  }
  
  body {
    background-color: var(--brand-light);
    color: var(--brand-dark);
    font-family: 'Inter', sans-serif;
  }
  
  .font-tech {
    font-family: 'Tronica Mono', 'Space Mono', monospace;
  }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: #f1f5f9; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 5px; }
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

// ==========================================
// 2. DATA (From User Prompt)
// ==========================================
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    dropdown: [
      { label: "Who We Are?", href: "/about-us" },
      // { label: "Our Team", href: "/our-team" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "Compliance Solutions", href: "/service/total-compliance" },
      { label: "Fintech Services", href: "/service/fin-tech-services" },
      { label: "Trainings", href: "/service/aml-training" },
      {
        label: "Brand Building and Management",
        href: "/service/branding-design",
      },
      {
        label: "Licensing and Regulatory Support",
        href: "/service/consumer-credit",
      },
    ],
  },

  {
    label: "Industry",
    dropdown: [
      {
        label: "Banks and Financial Institutions",
        href: "/industry/banks-financial-institutions",
      },
      { label: "Credit Unions", href: "/industry/credit-unions" },
      { label: "MSBs", href: "/industry/msbs" },
      { label: "Payments", href: "/industry/payments" },
      {
        label: "Corporate and Listed Firms",
        href: "/industry/corporate-listed-firms",
      },
      { label: "Fintech", href: "/industry/fintech" },
      // { label: "Crypto", href: "/industry/crypto" },
    ],
  },
  { label: "News & Event", href: "/news-events" },
  { label: "Contact", href: "/contact-us" },
];

// data.ts
export const CLIENT_LOGOS = [
  { icon: "Building2", name: "BARCLAYS" },
  { icon: "Landmark", name: "HSBC" },
  { icon: "Briefcase", name: "DELOITTE" },
  { icon: "Scale", name: "PWC" },
  { icon: "ShieldCheck", name: "FCA REGULATED" },
  { icon: "Globe", name: "SWIFT" },
  { icon: "CreditCard", name: "MASTERCARD" },
  { icon: "Network", name: "VISA" },
];

export const ADVISORY_CARDS = [
  {
    title: "Compliance Solution",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800",
    desc: "Comprehensive compliance solution tailored for the financial services including Authorisation, Ongoing monitoring, and health checks.",
    url: "/service/total-compliance",
  },
  {
    title: "Fin-Tech Service",
    desc: "Assist Fintech clients with services, including KYC/AML verification tools, monitoring, and visa/master card membership.",
    url: "/service/fin-tech-services",
  },
  {
    title: "AML/CFT Training",
    desc: "Extensive AML/CFT training programs that encompass a broad spectrum of AML regulations.",
    url: "/service/aml-training",
  },
];

export const CONSULTING_SERVICES = [
  {
    icon: <Settings />,
    title: "Compliance Solutions",
    desc: "Comprehensive compliance tailored for financial services.",
  },
  {
    icon: <MonitorSmartphone />,
    title: "Fintech Services",
    desc: "KYC/AML tools, and SWIFT/SEPA access.",
  },
  {
    icon: <Users />,
    title: "Trainings",
    desc: "Extensive AML/CFT training programs.",
  },
  {
    icon: <Palette />,
    title: "Brand Building and Management",
    desc: "Create modern and memorable brand identities that make your business stand out.",
  },
  {
    icon: <Landmark />,
    title: "Licensing and Regulatory Support",
    desc: "Expert FCA authorisation and consumer credit compliance services.",
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
    { title: "About Us", href: "/about-us" },
    { title: "Total Compliance", href: "/service/total-compliance" },
    { title: "Careers", href: "/careers" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  legal: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
};
export const NEWS_DATA = [
  {
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
    day: "18",
    month: "Aug",
    title:
      "The Ultimate Guide to AML Compliance Regulation: Tips and Best Practices",
    desc: "Anti-Money Laundering (AML) compliance regulations are a collection of laws, rules, and guidelines designed to stop illicit revenue generation...",
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
    day: "12",
    month: "May",
    title: "Importance of AML Compliance in Today’s Financial Landscape",
    desc: "AML, which is likewise abbreviated for Anti-Money Laundering Compliance, denotes the operations and rules that financial institutions commit to follow...",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    day: "05",
    month: "May",
    title: "MasterCard for Small Businesses: Streamlining Transactions",
    desc: "Master Card for Small Business: Introduction Master Card is a leading global payment solutions provider that offers a range of...",
  },
  {
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
    day: "22",
    month: "Apr",
    title: "Navigating the Changing Landscape of Fintech Regulations",
    desc: "As fintech continues to disrupt traditional banking, regulatory bodies are adapting quickly. Discover what this means for your startup...",
  },
  {
    img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=600",
    day: "15",
    month: "Mar",
    title: "How AI is Revolutionizing Transaction Monitoring",
    desc: "Artificial intelligence and machine learning are significantly reducing false positives in transaction monitoring systems globally...",
  },
  {
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
    day: "03",
    month: "Mar",
    title: "Understanding FCA's New Consumer Duty Rules",
    desc: "The Financial Conduct Authority's new Consumer Duty sets higher and clearer standards of consumer protection across financial services...",
  },
  {
    img: "https://images.unsplash.com/photo-1444653389962-8149286c578a?auto=format&fit=crop&q=80&w=600",
    day: "28",
    month: "Feb",
    title: "Crypto Assets: Navigating The Travel Rule",
    desc: "The implementation of the Travel Rule for crypto assets brings new compliance challenges. Here is everything you need to prepare...",
  },
  {
    img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600",
    day: "14",
    month: "Feb",
    title: "The Role of a MLRO in Modern Payment Institutions",
    desc: "Money Laundering Reporting Officers (MLROs) face increasing pressure. What are the key responsibilities and liabilities in today's landscape?",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    day: "02",
    month: "Feb",
    title: "Preparing for your Next Compliance Audit",
    desc: "Compliance audits don't have to be stressful. Learn our top ten tips for ensuring your next audit runs smoothly and successfully...",
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    day: "19",
    month: "Jan",
    title: "PSD2 to PSD3: What the Transition Means for You",
    desc: "With the European Commission proposing PSD3, we break down the major differences and how payment service providers should adapt...",
  },
];
