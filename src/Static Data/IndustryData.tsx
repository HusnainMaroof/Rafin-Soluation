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
    title: "Remittance Companies",
    desc: "Practical compliance, operations, and governance support for money transfer businesses.",
    overviewText:
      "Rafin Solutions supports remittance companies with practical compliance, operations, payment workflow, customer support, documentation, and outsourced back-office services.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
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
    title: "Money Service Businesses",
    desc: "Practical compliance, operations, and governance support for MSB teams.",
    overviewText:
      "Rafin Solutions supports Money Service Businesses with practical compliance, operations, payment workflow, customer support, documentation, and outsourced back-office services.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
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
    title: "Electronic Money Institutions",
    desc: "Practical compliance, operations, and governance support for EMI teams.",
    overviewText:
      "Rafin Solutions supports Electronic Money Institutions with practical compliance, operations, payment workflow, safeguarding, customer support, and documentation.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
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
    title: "Payment Institutions",
    desc: "Practical compliance, operations, and governance support for payment firms.",
    overviewText:
      "Rafin Solutions supports Payment Institutions with practical compliance, operations, payment workflow, customer support, documentation, and outsourced back-office services.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
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
    title: "Fintech Startups",
    desc: "Practical compliance, operations, and governance support for scaling fintech teams.",
    overviewText:
      "Rafin Solutions supports Fintech Startups with practical compliance, operations, documentation, and outsourced back-office services as they scale.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
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
    title: "Digital Wallets",
    desc: "Practical compliance, operations, and governance support for wallet providers.",
    overviewText:
      "Rafin Solutions supports Digital Wallet providers with practical compliance, operations, customer support, documentation, and outsourced back-office services.",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800",
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
    title: "Payment Service Providers",
    desc: "Practical compliance, operations, and governance support for PSPs.",
    overviewText:
      "Rafin Solutions supports Payment Service Providers with practical compliance, operations, merchant onboarding, customer support, documentation, and outsourced back-office services.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
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
    title: "Foreign Exchange Businesses",
    desc: "Practical compliance, operations, and governance support for FX firms.",
    overviewText:
      "Rafin Solutions supports Foreign Exchange businesses with practical compliance, operations, trade workflows, customer support, documentation, and outsourced back-office services.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
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
