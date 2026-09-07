import React from "react";
import {
  ShieldCheck,
  RefreshCw,
  Wallet,
  Landmark,
  Cpu,
  Smartphone,
  Zap,
  Repeat,
} from "lucide-react";

export interface IndustryItem {
  slug: string;
  icon: React.ReactNode;
  photo: string;
  title: string;
  desc: string;
  overviewText: string;
  features: { title: string; desc: string }[];
  bentoBoxes: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    points: string[];
  }[];
  challenges?: {
    operational: string[];
    compliance: string[];
  };
  howWeSupport?: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "remittance-companies",
    icon: <Repeat />,
    photo: "/images/industries/remittance-companies.jpg",
    title: "Remittance Companies",
    desc: "Rafin Solutions provides practical compliance, operations, and governance support for remittance and money transfer businesses across multiple corridors.",
    overviewText:
      "Rafin Solutions supports remittance companies with practical compliance, operations, payment workflow, customer support, documentation, and outsourced back-office services.",
    features: [
      {
        title: "Payment Workflows",
        desc: "Clear workflows for transfers, payouts, exceptions, and reconciliation.",
      },
      {
        title: "Corridor Support",
        desc: "Compliance and operations support across your payment corridors.",
      },
    ],
    bentoBoxes: [
      {
        icon: <RefreshCw />,
        title: "Transfer Operations",
        desc: "Practical operations for sending, receiving, and reconciling cross-border transfers.",
        points: ["Exception handling", "Payout coordination"],
      },
      {
        icon: <ShieldCheck />,
        title: "AML Controls",
        desc: "AML/CFT controls designed around transitory customers and corridor risk.",
        points: ["Screening and monitoring", "Audit evidence"],
      },
    ],
    challenges: {
      operational: [
        "Multiple corridors with different payment routes and partner requirements.",
        "Manual onboarding and monitoring processes that create backlogs.",
        "Reconciliation breaks and customer escalations.",
      ],
      compliance: [
        "AML/CFT controls, KYC/KYB, and sanctions screening.",
        "Transaction monitoring across corridors.",
        "Audit evidence and periodic reviews.",
      ],
    },
    howWeSupport: [
      "We review gaps and build practical transfer operations and documentation.",
      "We support screening, monitoring, and exception-handling workflows.",
      "We provide ongoing back-office and compliance capacity.",
    ],
  },
  {
    slug: "money-service-businesses",
    icon: <Landmark />,
    photo: "/images/industries/money-service-businesses.jpg",
    title: "Money Service Businesses",
    desc: "Rafin Solutions provides practical compliance, AML/CFT controls, and operations support for money service businesses across single or multi-site operations.",
    overviewText:
      "Rafin Solutions supports Money Service Businesses with practical compliance, operations, payment workflow, customer support, documentation, and outsourced back-office services.",
    features: [
      {
        title: "Swift Services",
        desc: "Support for money orders, currency exchange, and transfer services.",
      },
      {
        title: "Multi-Site Controls",
        desc: "Consistent AML and operations controls across single or multi-site operations.",
      },
    ],
    bentoBoxes: [
      {
        icon: <ShieldCheck />,
        title: "AML Programmes",
        desc: "AML/CFT programmes built for MSB pace and transitory customers.",
        points: ["Risk-based onboarding", "Real-time screening"],
      },
      {
        icon: <RefreshCw />,
        title: "Reporting",
        desc: "Swift, accurate regulatory reporting without manual overhead.",
        points: ["Multi-jurisdiction submission", "Expert support"],
      },
    ],
    challenges: {
      operational: [
        "Swift access to money orders, currency exchange, and transfer services for transitory customers.",
        "Multiple sites and channels with inconsistent onboarding and monitoring.",
        "Manual processes that create backlogs and reporting gaps.",
      ],
      compliance: [
        "AML/CFT controls, KYC/KYB, sanctions screening, and PEP checks.",
        "Transaction monitoring across single or multi-site operations.",
        "Suspicious activity reporting and audit evidence.",
      ],
    },
    howWeSupport: [
      "We build risk-based AML frameworks tailored to MSB business models and pace.",
      "We support real-time screening, transaction monitoring operations, and regulatory reporting.",
      "We provide practical documentation and ongoing compliance capacity.",
    ],
  },
  {
    slug: "electronic-money-institutions",
    icon: <Wallet />,
    photo: "/images/industries/electronic-money-institutions.jpg",
    title: "Electronic Money Institutions",
    desc: "Rafin Solutions provides practical compliance, safeguarding, and operations support for electronic money institutions and digital account issuance.",
    overviewText:
      "Rafin Solutions supports Electronic Money Institutions with practical compliance, operations, payment workflow, safeguarding, customer support, and documentation.",
    features: [
      {
        title: "E-Money Controls",
        desc: "Practical controls over issuance, redemption, and safeguarding.",
      },
      {
        title: "Ongoing Compliance",
        desc: "Monitoring, reporting, and audit support for EMI obligations.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Wallet />,
        title: "Safeguarding",
        desc: "Clear safeguarding and record-keeping processes that evidence segregation.",
        points: ["Reconciliation", "Audit-ready records"],
      },
      {
        icon: <ShieldCheck />,
        title: "AML/CFT",
        desc: "AML/CFT and onboarding controls suited to digital account issuance.",
        points: ["KYC/KYB design", "Monitoring operations"],
      },
    ],
    challenges: {
      operational: [
        "Digital account issuance at volume with manual onboarding.",
        "Safeguarding, reconciliation, and record-keeping pressure.",
        "Partner and programme-manager coordination.",
      ],
      compliance: [
        "E-money and safeguarding obligations.",
        "AML/CFT controls, KYC/KYB, and sanctions screening.",
        "Monitoring, reporting, and audit evidence.",
      ],
    },
    howWeSupport: [
      "We build onboarding, monitoring, and safeguarding documentation and controls.",
      "We support payment operations and exception handling.",
      "We provide ongoing compliance and reporting capacity.",
    ],
  },
  {
    slug: "payment-institutions",
    icon: <Landmark />,
    photo: "/images/industries/payment-institutions.jpg",
    title: "Payment Institutions",
    desc: "Rafin Solutions provides practical compliance, authorisation support, and operations guidance for payment institutions and payment firms.",
    overviewText:
      "Rafin Solutions supports Payment Institutions with practical compliance, operations, payment workflow, customer support, documentation, and outsourced back-office services.",
    features: [
      {
        title: "Licence Support",
        desc: "Authorisation and ongoing compliance support for payment institutions.",
      },
      {
        title: "Payment Flows",
        desc: "Practical operations for payment flows, exceptions, and reconciliation.",
      },
    ],
    bentoBoxes: [
      {
        icon: <ShieldCheck />,
        title: "Authorisation",
        desc: "End-to-end support for payment institution authorisation and scope.",
        points: ["Business plan drafting", "Regulatory engagement"],
      },
      {
        icon: <RefreshCw />,
        title: "Operations",
        desc: "Payment operations, monitoring, and reporting that evidence control.",
        points: ["Exception handling", "Reporting cadence"],
      },
    ],
    challenges: {
      operational: [
        "Authorisation and ongoing regulatory obligations.",
        "High-volume payment flows with exception and reconciliation pressure.",
        "Banking partner and scheme coordination.",
      ],
      compliance: [
        "AML/CFT controls, KYC/KYB, and sanctions screening.",
        "Transaction monitoring and safeguarding.",
        "Audit evidence and periodic reviews.",
      ],
    },
    howWeSupport: [
      "We support authorisation, compliance frameworks, and payment operations.",
      "We build monitoring and exception-handling workflows.",
      "We prepare firms for audits and banking partner due diligence.",
    ],
  },
  {
    slug: "fintech-startups",
    icon: <Cpu />,
    photo: "/images/industries/fintech-startups.jpg",
    title: "Fintech Startups",
    desc: "Rafin Solutions provides practical compliance, governance, and operations support for fintech startups scaling their regulated financial operations.",
    overviewText:
      "Rafin Solutions supports Fintech Startups with practical compliance, operations, documentation, and outsourced back-office services as they scale.",
    features: [
      {
        title: "Pre-Launch Controls",
        desc: "Compliance, governance, and operating documentation before scaling.",
      },
      {
        title: "Scalable Ops",
        desc: "Back-office and support capacity that grows with your business.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Cpu />,
        title: "Launch Readiness",
        desc: "Practical controls and documentation to launch and raise with confidence.",
        points: ["Policy packs", "Risk frameworks"],
      },
      {
        icon: <ShieldCheck />,
        title: "Ongoing Support",
        desc: "Outsourced operations and compliance capacity as an extension of your team.",
        points: ["Support queues", "Reporting cadence"],
      },
    ],
    challenges: {
      operational: [
        "Limited in-house compliance and operations headcount.",
        "Rapid product iteration outpacing controls and documentation.",
        "Investor and partner due diligence demands.",
      ],
      compliance: [
        "Building a robust AML/CFT framework for a digital-first model.",
        "KYC/KYB, sanctions screening, and adverse media monitoring.",
        "Preparing for authorisation and audit.",
      ],
    },
    howWeSupport: [
      "We design compliance frameworks and documentation that scale with growth.",
      "We support onboarding, monitoring, and reporting operations end-to-end.",
      "We provide practical compliance and back-office capacity.",
    ],
  },
  {
    slug: "digital-wallets",
    icon: <Smartphone />,
    photo: "/images/industries/digital-wallets.jpg",
    title: "Digital Wallets",
    desc: "Rafin Solutions provides practical compliance, onboarding, and operations support for digital wallet providers and mobile payment platforms.",
    overviewText:
      "Rafin Solutions supports Digital Wallet providers with practical compliance, operations, customer support, documentation, and outsourced back-office services.",
    features: [
      {
        title: "Wallet Operations",
        desc: "Practical operations for issuance, transactions, and customer support.",
      },
      {
        title: "Digital Onboarding",
        desc: "KYC/KYB and onboarding controls for high-volume digital account opening.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Smartphone />,
        title: "Digital Onboarding",
        desc: "Identity verification and risk controls for fast, safe account opening.",
        points: ["Verification rules", "Risk scoring"],
      },
      {
        icon: <ShieldCheck />,
        title: "Monitoring",
        desc: "Transaction monitoring and customer support operations that scale.",
        points: ["Alert handling", "Support SOPs"],
      },
    ],
    challenges: {
      operational: [
        "High-volume digital account opening and transaction flows.",
        "Customer support and complaint handling at scale.",
        "Partner and card scheme coordination.",
      ],
      compliance: [
        "AML/CFT controls, KYC/KYB, and sanctions screening.",
        "Transaction monitoring and suspicious activity reporting.",
        "Financial promotions and fair treatment of customers.",
      ],
    },
    howWeSupport: [
      "We build onboarding, monitoring, and support operations for wallet providers.",
      "We support customer support SOPs and complaint handling.",
      "We provide ongoing compliance and back-office capacity.",
    ],
  },
  {
    slug: "payment-service-providers",
    icon: <Zap />,
    photo: "/images/industries/payment-service-providers.jpg",
    title: "Payment Service Providers",
    desc: "Rafin Solutions provides practical compliance, merchant onboarding, and operations support for payment service providers and acquiring firms.",
    overviewText:
      "Rafin Solutions supports Payment Service Providers with practical compliance, operations, merchant onboarding, customer support, documentation, and outsourced back-office services.",
    features: [
      {
        title: "Merchant Onboarding",
        desc: "KYC/KYB and risk controls for merchant and partner onboarding.",
      },
      {
        title: "Scheme Operations",
        desc: "Practical operations across card schemes and acquiring flows.",
      },
    ],
    bentoBoxes: [
      {
        icon: <Zap />,
        title: "Merchant Controls",
        desc: "Risk-based merchant onboarding and monitoring controls.",
        points: ["KYB checks", "Ongoing monitoring"],
      },
      {
        icon: <ShieldCheck />,
        title: "Acquiring Ops",
        desc: "Operations support for settlement, exceptions, and scheme compliance.",
        points: ["Exception handling", "Reporting"],
      },
    ],
    challenges: {
      operational: [
        "High-volume merchant and transaction flows.",
        "Settlement, exception, and chargeback pressure.",
        "Scheme and banking partner coordination.",
      ],
      compliance: [
        "Merchant KYC/KYB and risk monitoring.",
        "AML/CFT controls and sanctions screening.",
        "Scheme rules and audit evidence.",
      ],
    },
    howWeSupport: [
      "We build merchant onboarding and monitoring operations for PSPs.",
      "We support settlement, exception, and scheme compliance workflows.",
      "We provide ongoing compliance and back-office capacity.",
    ],
  },
  {
    slug: "foreign-exchange-businesses",
    icon: <RefreshCw />,
    photo: "/images/industries/foreign-exchange-businesses.jpg",
    title: "Foreign Exchange Businesses",
    desc: "Rafin Solutions provides practical compliance, trade operations, and AML/CFT controls for foreign exchange businesses and FX brokers.",
    overviewText:
      "Rafin Solutions supports Foreign Exchange businesses with practical compliance, operations, trade workflows, customer support, documentation, and outsourced back-office services.",
    features: [
      {
        title: "Trade Workflows",
        desc: "Practical operations for quotes, execution, settlement, and exceptions.",
      },
      {
        title: "FX Controls",
        desc: "AML/CFT and counterparty controls suited to FX activity.",
      },
    ],
    bentoBoxes: [
      {
        icon: <RefreshCw />,
        title: "Trade Operations",
        desc: "Workflows for quotes, execution, and settlement with clear records.",
        points: ["Exception handling", "Reconciliation"],
      },
      {
        icon: <ShieldCheck />,
        title: "AML Controls",
        desc: "AML/CFT and screening controls for clients and counterparties.",
        points: ["Client onboarding", "Monitoring"],
      },
    ],
    challenges: {
      operational: [
        "Fast-moving trade and settlement cycles.",
        "Client and counterparty onboarding pressure.",
        "Reconciliation and exception handling.",
      ],
      compliance: [
        "AML/CFT controls, KYC/KYB, and sanctions screening.",
        "Transaction monitoring and reporting.",
        "Audit evidence and policy maintenance.",
      ],
    },
    howWeSupport: [
      "We build trade operations and compliance controls for FX businesses.",
      "We support client onboarding, monitoring, and reporting.",
      "We provide ongoing compliance and back-office capacity.",
    ],
  },
];
