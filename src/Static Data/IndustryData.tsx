import React from "react";
import {
  Search,
  ShieldCheck,
  Settings,
  Network,
  Landmark,
  RefreshCw,
  FileText,
  Coins,
  Scale,
  Clock,
  Briefcase,
  Building2,
  Users,
  CreditCard,
  Cpu,
  Bitcoin,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Lock,
  Globe,
  ClipboardCheck,
  Zap,
  Eye,
} from "lucide-react";

export interface IndustryItem {
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