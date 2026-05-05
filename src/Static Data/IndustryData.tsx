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

export const INDUSTRIES_DATA = [
  {
    slug: "banks-financial-institutions",
    icon: <Building2 />,
    title: "Banks & Financial Institutions",
    desc: "Unified AML compliance for high-volume banking environments.",
    overviewText:
      "Navigating anti-money laundering (AML) compliance for banks and financial institutions presents distinctive challenges — significant daily transaction volume across traditional and digital channels, an ever-evolving regulatory framework, and the intricate task of managing false positives. Rafin Solutions offers an integrated compliance platform that implements real-time data collection and automation, adopting a risk-based approach across all facets of compliance. From identifying initial red flags to compiling regulatory reports, we simplify the compliance journey at every stage.",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Unified AML Platform",
        desc: "An integrated compliance platform merging all functions — from the first red flag to the final regulatory report — into a single cohesive system.",
      },
      {
        title: "AML Search & Transaction Monitoring",
        desc: "Advanced real-time transaction monitoring to detect and address suspicious activity promptly, upholding the highest compliance standards.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <BarChart3 className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Risk Intelligence",
        desc: "Comprehensive AML Policy Risk Assessment tailored to your institution's unique needs, with daily updates on clients whose risk scores have exceeded your defined thresholds.",
        points: [
          "AML policy risk assessment & strategic partnerships",
          "External AML audit preparation & AML/CFT training",
        ],
      },
      {
        icon: (
          <ClipboardCheck className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Regulatory Reporting",
        desc: "Streamlined preparation, validation, and submission of regulatory reports, removing manual overhead and reducing the risk of error at submission.",
        points: [
          "Automated report preparation and validation",
          "Sanctions and PEP screening integration",
        ],
      },
    ],
  },

  {
    slug: "credit-unions",
    icon: <Users />,
    title: "Credit Unions",
    desc: "Scalable AML solutions built for credit union operations.",
    overviewText:
      "In the fast-paced world of finance, staying on top means adapting to new technologies, currencies, and regulatory rules. Our adaptive AML Credit Union Solution is a smart, cost-effective platform that grows with your needs, making compliance straightforward. We reduce false positives, deliver daily risk updates, provide real-time regulatory alerts, and offer continuous expert support — all designed to save your team time and reduce operational cost.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Instant Identity Verification",
        desc: "Seamlessly validate member identities in real-time by integrating with your onboarding system, gaining better insights and spotting anomalies quickly.",
      },
      {
        title: "Tailored Risk Scoring",
        desc: "Create a customised risk scoring model aligned with your risk tolerance, with real-time updates that adapt dynamically as new data emerges.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Zap className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Automation & Efficiency",
        desc: "Time-consuming AML tasks are automated, freeing your team to focus on investigations and maintaining compliance rather than manual processes.",
        points: [
          "Machine learning to minimise false positives",
          "Efficient case management for swift resolutions",
        ],
      },
      {
        icon: (
          <ShieldCheck className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Sanctions & Transaction Monitoring",
        desc: "Real-time checks against sanction lists and internal high-risk databases during onboarding, plus continuous monitoring of all transaction types — deposits, wires, and checks.",
        points: [
          "Risk-free onboarding with sanctions screening",
          "Streamlined multi-jurisdiction regulatory reporting",
        ],
      },
    ],
  },

  {
    slug: "msbs",
    icon: <RefreshCw />,
    title: "MSBs",
    desc: "AML programs purpose-built for Money Services Businesses.",
    overviewText:
      "While MSBs share AML obligations with other financial institutions, the compliance game is fundamentally different. You provide swift access to money orders, check cashing, currency exchange, and transfer services — often to transitory customers with limited KYC capture opportunities and restricted visibility into transaction flow. What you need is an AML solution tailored specifically for MSBs: powerful, effective, and designed to meet your distinct operational needs.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Real-Time Name Screening",
        desc: "Real-time screening against sanctions watchlists, PEP databases, and internal high-risk lists during onboarding and all subsequent interactions.",
      },
      {
        title: "Customisable Risk Scoring",
        desc: "Build a risk scoring model aligned with your organisation's risk tolerance, continuously updated based on client activity and third-party data.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Eye className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Suspicious Activity Detection",
        desc: "Whether overseeing compliance for a single location or multiple retail outlets, detect suspicious transactions — including structuring, smurfing, and flipping — in real time.",
        points: [
          "Real-time oversight across single or multi-site operations",
          "Daily client risk threshold updates",
        ],
      },
      {
        icon: (
          <FileText className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Swift Regulatory Reporting",
        desc: "Regulatory reporting simplified — swift, accurate, and seamlessly submitted across multiple jurisdictions without manual overhead.",
        points: [
          "Multi-jurisdiction report submission",
          "Continuous professional support from onboarding onwards",
        ],
      },
    ],
  },

  {
    slug: "payments",
    icon: <CreditCard />,
    title: "Payments",
    desc: "Compliance infrastructure for payment processors and institutions.",
    overviewText:
      "Payment processors operate under intensifying scrutiny — regulators and banking partners require secure payments that meet exacting standards, while customers demand fast, precise, and uninterrupted service. We help you navigate this dual pressure with a robust AML solution designed specifically for payment firms, from licence application through to ongoing compliance and external audit readiness.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Licence Application Support",
        desc: "End-to-end management of your Payment Institution licence application, streamlining submission to the relevant authority for a seamless experience.",
      },
      {
        title: "Transaction Monitoring via Software",
        desc: "Sophisticated software enabling real-time transaction oversight to identify and address suspicious activities promptly.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <TrendingUp className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Ongoing Compliance",
        desc: "Continuous support to uphold compliance requirements as regulations evolve, including automated regulatory reporting and comprehensive risk assessments tailored to payment operations.",
        points: [
          "Automated regulatory report preparation and submission",
          "Risk assessment frameworks for payment-specific exposure",
        ],
      },
      {
        icon: (
          <ShieldCheck className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "External AML Audit",
        desc: "Prepare for external AML audits with confidence. We support your institution in demonstrating compliance, minimising risk, and ensuring a smooth audit process.",
        points: [
          "Pre-audit preparation and documentation review",
          "Demonstrable compliance evidence for banking partners",
        ],
      },
    ],
  },

  {
    slug: "corporate-listed-firms",
    icon: <Briefcase />,
    title: "Corporate & Listed Firms",
    desc: "Governance and AML compliance for corporate and public companies.",
    overviewText:
      "For corporate and listed firms, regulatory compliance is not merely a box to check — it is the cornerstone of trust, integrity, and sustainable growth. Adherence to compliance standards ensures transparency, ethical practices, and accountability, fostering an environment for long-term success. We offer a comprehensive, tailored approach: from fortifying corporate governance to providing a robust AML Safety Manual, conducting strategic risk assessments, and automating regulatory reporting.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Corporate Governance",
        desc: "Elevate your corporate governance standards, ensuring transparency, accountability, and ethical practices for sustainable growth.",
      },
      {
        title: "AML Safety Manual",
        desc: "A tailored Anti-Money Laundering Safety Manual crafted to the unique operational needs of corporate and listed firms.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Scale className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Strategic Risk Assessment",
        desc: "Comprehensive risk assessments tailored to your specific industry and operational nuances, fortifying your risk management framework and meeting regulatory expectations.",
        points: [
          "Industry-specific risk identification and mitigation",
          "Ongoing review aligned with regulatory updates",
        ],
      },
      {
        icon: (
          <ClipboardCheck className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Regulatory Reporting",
        desc: "Streamlined preparation, validation, and electronic submission of all necessary regulatory reports for corporate and listed firms — removing manual effort and reducing submission risk.",
        points: [
          "Automated report preparation and validation",
          "Multi-jurisdiction electronic submission",
        ],
      },
    ],
  },

  {
    slug: "fintech",
    icon: <Cpu />,
    title: "FinTech",
    desc: "Scalable AML compliance for digital-first financial businesses.",
    overviewText:
      "Navigating the complex landscape of AML compliance is a critical imperative for FinTechs. The increasing scrutiny from regulators and the ever-evolving nature of financial crime necessitate a robust AML framework tailored specifically for FinTech organisations. Our cloud-based solution scales with your transaction volume, integrates with your onboarding systems for real-time identity verification, and delivers the comprehensive compliance visibility your banking partners demand.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Real-Time Due Diligence",
        desc: "Integrate with your onboarding system, risk intelligence data, and identity verification solutions for efficient and automated due diligence fulfilment.",
      },
      {
        title: "360° Client View",
        desc: "A comprehensive view of client information and activities, facilitating easier investigation and faster resolution of suspicious activity.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Network className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Scalable Cloud Platform",
        desc: "Our cloud solution scales according to your transaction volume, offering cost-effective deployment with the compliance insights and daily client risk updates your team needs to operate confidently.",
        points: [
          "Designed for FinTech scalability and growth",
          "Sanctions, OFAC, PEPs, and adverse media screening",
        ],
      },
      {
        icon: (
          <Lock className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Automated Reporting & Case Management",
        desc: "Streamline preparation, validation, and electronic submission of regulatory reports (CTRs, SARs, LCTRs, STRs) across multiple jurisdictions, alongside an advanced case management system for team collaboration.",
        points: [
          "Multi-jurisdiction report submission",
          "Advanced automated case management",
        ],
      },
    ],
  },

  {
    slug: "crypto",
    icon: <Bitcoin />,
    title: "Crypto",
    desc: "Compliance and risk management for digital asset businesses.",
    overviewText:
      "Embark on a compliant journey into the world of digital assets with our cutting-edge crypto services. As digital assets continue to attract regulatory attention globally, businesses operating in this space require solutions that seamlessly integrate traditional compliance rigour with the dynamic requirements of the crypto market. We provide comprehensive services spanning identity verification, transaction monitoring, risk management, and full regulatory compliance assurance.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Regulatory Compliance Assurance",
        desc: "Ensure adherence to regulatory standards and compliance requirements in the crypto space with our integrated compliance solutions.",
      },
      {
        title: "Strategic Risk Management",
        desc: "Navigate the volatile nature of cryptocurrency markets with risk management protocols that minimise exposure associated with crypto transactions.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <Globe className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
        ),
        title: "Digital Asset Infrastructure",
        desc: "Secure digital wallet solutions, efficient transaction processing, and cutting-edge technology integration aligned with the ever-evolving crypto market landscape.",
        points: [
          "Secure and user-friendly digital wallet solutions",
          "Data-driven analytics for market and user behaviour insights",
        ],
      },
      {
        icon: (
          <ShieldCheck className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "AML Compliance for Crypto",
        desc: "Instant identity verification, sanctions screening, real-time transaction monitoring, and streamlined regulatory reporting — the complete AML stack adapted for digital asset operations.",
        points: [
          "Real-time sanctions and PEP screening on onboarding",
          "Tailored risk scoring with continuous profile updates",
        ],
      },
    ],
  },
];