// data/services.ts — FinCore-aligned service catalog

export interface ServiceCopyBlock {
  title: string;
  points: string[];
}

export interface ServiceData {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  overviewText: string;
  image: string;
  features: { title: string; desc: string }[];
  bentoBoxes: {
    icon: string;
    title: string;
    desc: string;
    points: string[];
  }[];
  copyBlocks?: ServiceCopyBlock[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "aml-cft-compliance",
    icon: "ShieldCheck",
    title: "AML/CFT Compliance",
    desc: "Build practical AML/CFT frameworks, risk assessments, monitoring controls and reporting processes tailored to your business model.",
    overviewText:
      "AML/CFT Compliance support from Rafin Solutions helps regulated and growing financial businesses create practical, documented, and operationally usable controls.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Risk-Based Frameworks",
        desc: "AML/CFT frameworks and risk assessments aligned to your business model and regulated activities.",
      },
      {
        title: "Operational Controls",
        desc: "Monitoring controls, reporting processes, and documentation that your team can actually use.",
      },
    ],
    bentoBoxes: [
      {
        icon: "FileSearch",
        title: "Policy & Documentation",
        desc: "Practical AML/CFT policies, SOPs, risk assessments, and audit-ready evidence packs.",
        points: [
          "Business-tailored policy documentation",
          "Risk assessment and control design",
        ],
      },
      {
        icon: "ScanLine",
        title: "Monitoring & Reporting",
        desc: "Screening, transaction monitoring, and SAR workflows that produce clear decision trails.",
        points: ["Alert review workflows", "Management reporting"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "Unclear procedures and inconsistent review standards.",
          "Operational backlogs and fragmented vendor support.",
          "Weak documentation and limited internal capacity.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "Policy and SOP support, workflow review, and control design.",
          "Documentation, operational trackers, review templates, and reporting structures.",
          "Implementation guidance.",
        ],
      },
      {
        title: "Day-to-Day Activities",
        points: [
          "Reviewing queues, documenting decisions, and updating trackers.",
          "Coordinating with internal teams and escalating exceptions.",
          "Preparing summaries and maintaining audit trails.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "Client-branded documents, checklists, and registers.",
          "SOPs, reporting packs, remediation notes, and workflow maps.",
          "Practical implementation plans.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "Clearer accountability and better evidence.",
          "Scalable operations and stronger governance.",
          "Fewer process gaps and consistent customer or partner handling.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "Fintech startups, MSBs, and remittance providers.",
          "Payment institutions, EMIs, digital wallets, APIs, and PSPs.",
          "Regulated financial service teams.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and scope confirmation.",
          "Document and workflow review.",
          "Delivery, stakeholder feedback, and handover.",
          "Optional ongoing support.",
        ],
      },
    ],
  },
  {
    slug: "kyc-and-kyb",
    icon: "UserCheck",
    title: "KYC and KYB",
    desc: "Design reliable KYC and KYB onboarding workflows, verification rules, risk scoring and approval controls for individuals and businesses.",
    overviewText:
      "KYC and KYB support from Rafin Solutions helps regulated and growing financial businesses create practical, documented, and operationally usable onboarding controls.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Onboarding Workflows",
        desc: "Clear KYC/KYB onboarding journeys for individuals and businesses, from application to approval.",
      },
      {
        title: "Verification & Scoring",
        desc: "Verification rules and risk scoring that balance control with customer experience.",
      },
    ],
    bentoBoxes: [
      {
        icon: "ClipboardCheck",
        title: "Approval Controls",
        desc: "Structured review and approval controls with clear decision records and escalation routes.",
        points: ["Documented decision trails", "Audit-ready records"],
      },
      {
        icon: "Fingerprint",
        title: "Identity Verification",
        desc: "Verification rule design that supports individuals and corporate structures.",
        points: ["Risk-based verification", "Business and beneficial owner checks"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "Inconsistent onboarding standards and slow review queues.",
          "Weak documentation and fragmented vendor tooling.",
          "Limited internal capacity to maintain KYC/KYB controls.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "KYC/KYB workflow design and verification rule support.",
          "Risk scoring and approval control design.",
          "Documentation, trackers, and review templates.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "Onboarding procedure documents and workflow maps.",
          "Verification and risk-scoring matrices.",
          "Registers, SOPs, and reporting packs.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "Faster, more consistent onboarding.",
          "Stronger identity and risk controls.",
          "Clearer evidence for audits and regulators.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "Fintech startups, MSBs, and payment institutions.",
          "EMIs, digital wallets, APIs, and PSPs.",
          "Regulated financial service teams.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and scope confirmation.",
          "Workflow and document review.",
          "Delivery, feedback, and handover.",
          "Optional ongoing support.",
        ],
      },
    ],
  },
  {
    slug: "transaction-monitoring",
    icon: "Radar",
    title: "Transaction Monitoring",
    desc: "Develop risk-based transaction monitoring rules, alert investigation workflows, threshold tuning and management reporting.",
    overviewText:
      "Transaction monitoring support from Rafin Solutions helps regulated financial businesses build practical alert review and investigation operations that produce clear, defensible decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Risk-Based Rules",
        desc: "Monitoring rule design and threshold tuning aligned to your risk appetite.",
      },
      {
        title: "Alert Workflows",
        desc: "Alert investigation workflows with clear notes, escalations, and decision trails.",
      },
    ],
    bentoBoxes: [
      {
        icon: "Settings2",
        title: "Rule Tuning",
        desc: "Practical tuning of monitoring rules and thresholds to reduce noise and catch real risk.",
        points: ["Threshold tuning", "Scenario coverage"],
      },
      {
        icon: "BarChart3",
        title: "Management Reporting",
        desc: "Reporting cadence and packs that evidence monitoring activity to stakeholders.",
        points: ["Clear decision records", "Audit-ready evidence"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "High false-positive volumes and unclear investigation standards.",
          "Inconsistent escalation and weak decision records.",
          "Limited management reporting on monitoring activity.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "Monitoring rule and workflow review.",
          "Alert investigation and escalation design.",
          "Reporting structures and documentation.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "Workflow maps and investigation templates.",
          "Threshold and scenario documentation.",
          "Reporting packs and registers.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "Better detection with less noise.",
          "Consistent, documented decisions.",
          "Stronger evidence for audits and regulators.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "Payment institutions, EMIs, and MSBs.",
          "Banks, digital wallets, and fintech startups.",
          "Regulated financial service teams.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and scope confirmation.",
          "Rule and workflow review.",
          "Delivery, feedback, and handover.",
          "Optional ongoing support.",
        ],
      },
    ],
  },
  {
    slug: "payment-operations",
    icon: "CreditCard",
    title: "Payment Operations",
    desc: "Improve payment operations through clear workflows for settlements, exceptions, reconciliation, partner coordination and operational reporting.",
    overviewText:
      "Payment operations support from Rafin Solutions helps payment and fintech businesses run reliable settlement, exception, and reconciliation processes.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Clear Workflows",
        desc: "Workflows for settlements, exceptions, and reconciliation that reduce operational risk.",
      },
      {
        title: "Partner Coordination",
        desc: "Structured coordination with banking partners, schemes, and vendors.",
      },
    ],
    bentoBoxes: [
      {
        icon: "Repeat",
        title: "Reconciliation",
        desc: "Practical reconciliation processes and exception handling that keep breaks visible and resolved.",
        points: ["Break management", "Clear ownership"],
      },
      {
        icon: "FileBarChart",
        title: "Operational Reporting",
        desc: "Reporting cadence that evidences payment operations performance and risk.",
        points: ["Management packs", "Escalation routes"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "Manual workflows and unclear ownership across payment operations.",
          "Reconciliation breaks and exception backlogs.",
          "Inconsistent partner coordination and reporting.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "Workflow design for settlements, exceptions, and reconciliation.",
          "Partner coordination and escalation design.",
          "Operational reporting structures.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "Workflow maps and SOPs.",
          "Reconciliation and exception procedures.",
          "Reporting packs and trackers.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "Fewer exceptions and faster resolution.",
          "Clearer ownership and accountability.",
          "Better operational evidence.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "Payment institutions and PSPs.",
          "EMIs, MSBs, and remittance providers.",
          "Fintech businesses running payment flows.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and scope confirmation.",
          "Process review and workflow design.",
          "Delivery, feedback, and handover.",
          "Optional ongoing support.",
        ],
      },
    ],
  },
  {
    slug: "transaction-processing",
    icon: "ArrowLeftRight",
    title: "Transaction Processing",
    desc: "Support accurate transaction processing, status management, failed-payment handling, reprocessing, reconciliation and exception escalation.",
    overviewText:
      "Transaction processing support from Rafin Solutions helps payment teams maintain accurate, well-managed processing operations with clear exception handling.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Status Management",
        desc: "Clear transaction status management and failed-payment handling processes.",
      },
      {
        title: "Exception Escalation",
        desc: "Structured reprocessing, reconciliation, and escalation routes.",
      },
    ],
    bentoBoxes: [
      {
        icon: "CircleAlert",
        title: "Failed Payments",
        desc: "Practical handling for failed payments, reprocessing, and customer communication.",
        points: ["Clear escalation", "Consistent handling"],
      },
      {
        icon: "ListChecks",
        title: "Processing Controls",
        desc: "Controls and checks that keep transaction processing accurate and evidenced.",
        points: ["Quality checks", "Audit trails"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "Inaccurate transaction status management.",
          "Inconsistent failed-payment handling and reprocessing.",
          "Weak exception escalation and reconciliation evidence.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "Transaction processing workflow design.",
          "Failed-payment and reprocessing procedures.",
          "Exception escalation and reconciliation support.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "Processing SOPs and workflow maps.",
          "Status and exception handling guides.",
          "Reconciliation and reporting templates.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "More accurate processing.",
          "Consistent handling of failed payments.",
          "Clearer audit trails.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "Payment institutions, PSPs, and EMIs.",
          "Remittance and MSB businesses.",
          "Fintech teams running high-volume processing.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and scope confirmation.",
          "Processing review and procedure design.",
          "Delivery, feedback, and handover.",
          "Optional ongoing support.",
        ],
      },
    ],
  },
  {
    slug: "customer-support",
    icon: "Headset",
    title: "Customer Support",
    desc: "Build responsive fintech customer support operations with clear SOPs, escalation paths, quality reviews, complaint handling and reporting.",
    overviewText:
      "Customer support operations support from Rafin Solutions helps financial businesses deliver responsive, consistent support with clear escalation and quality control.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Support SOPs",
        desc: "Clear SOPs and escalation paths so every customer query is handled consistently.",
      },
      {
        title: "Quality & Complaints",
        desc: "Quality reviews and complaint handling that protect customers and the business.",
      },
    ],
    bentoBoxes: [
      {
        icon: "MessagesSquare",
        title: "Responsive Operations",
        desc: "Queue management and response standards that keep customers informed.",
        points: ["Response standards", "Escalation routes"],
      },
      {
        icon: "ShieldCheck",
        title: "Complaint Handling",
        desc: "Structured complaint handling aligned to regulatory expectations.",
        points: ["Quality reviews", "Reporting cadence"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "Inconsistent responses and unclear escalation.",
          "Weak complaint handling and quality review.",
          "Limited reporting on support performance.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "Support SOP and escalation path design.",
          "Quality review and complaint handling processes.",
          "Reporting structures and documentation.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "Support SOPs and script guidance.",
          "Escalation and complaint handling maps.",
          "Quality and reporting templates.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "Consistent, responsive customer service.",
          "Better complaint outcomes.",
          "Clearer evidence of fair treatment.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "EMIs, payment institutions, and digital wallets.",
          "Fintech startups and MSBs.",
          "Regulated firms with customer-facing operations.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and scope confirmation.",
          "Support review and SOP design.",
          "Delivery, feedback, and handover.",
          "Optional ongoing support.",
        ],
      },
    ],
  },
  {
    slug: "technology-and-it-governance",
    icon: "Cpu",
    title: "Technology and IT Governance",
    desc: "Strengthen technology governance with access controls, change management, incident processes, vendor oversight, security reviews and IT reporting.",
    overviewText:
      "Technology and IT governance support from Rafin Solutions helps financial businesses build practical controls over systems, access, change, incidents, and vendors.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Access & Change",
        desc: "Access controls and change management that keep systems safe and evidenced.",
      },
      {
        title: "Vendor & Security",
        desc: "Vendor oversight, security reviews, and incident processes aligned to regulation.",
      },
    ],
    bentoBoxes: [
      {
        icon: "KeyRound",
        title: "Access Control",
        desc: "Clear access control frameworks and review routines for systems and data.",
        points: ["Access reviews", "Segregation of duties"],
      },
      {
        icon: "GitBranch",
        title: "Change & Incident",
        desc: "Change management and incident processes with clear ownership and records.",
        points: ["Incident response", "BCP/DR alignment"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "Weak access controls and change management.",
          "Unclear incident processes and vendor oversight.",
          "Limited IT governance evidence for audits.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "Access control and change management design.",
          "Incident process and vendor oversight support.",
          "Security reviews and IT reporting structures.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "IT governance policies and SOPs.",
          "Access, change, and incident registers.",
          "Vendor and security review templates.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "Stronger system controls.",
          "Clearer incident ownership.",
          "Better audit evidence.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "Fintech startups and payment institutions.",
          "EMIs, PSPs, and digital wallets.",
          "Regulated firms relying on technology operations.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and scope confirmation.",
          "Governance review and control design.",
          "Delivery, feedback, and handover.",
          "Optional ongoing support.",
        ],
      },
    ],
  },
  {
    slug: "meta-ads-for-fintech",
    icon: "Megaphone",
    title: "Meta Ads for Fintech",
    desc: "Plan compliant, structured Meta Ads activity for fintech campaigns, including messaging review, campaign setup coordination, landing-page alignment, and performance reporting.",
    overviewText:
      "Meta Ads support from Rafin Solutions helps regulated financial businesses run structured, compliant advertising activity that protects customers and the brand.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Messaging Review",
        desc: "Compliant advertising messaging that aligns with financial promotions rules.",
      },
      {
        title: "Campaign Coordination",
        desc: "Campaign setup coordination and landing-page alignment for cleaner conversion.",
      },
    ],
    bentoBoxes: [
      {
        icon: "Target",
        title: "Compliant Campaigns",
        desc: "Structured campaign planning with clear audience, messaging, and landing-page alignment.",
        points: ["Messaging review", "Landing-page alignment"],
      },
      {
        icon: "LineChart",
        title: "Performance Reporting",
        desc: "Reporting that ties spend to outcomes and keeps promotions compliant.",
        points: ["Performance tracking", "Compliance evidence"],
      },
    ],
    copyBlocks: [
      {
        title: "Client Problems Addressed",
        points: [
          "Financial promotions risk in advertising activity.",
          "Misaligned campaign messaging and landing pages.",
          "Weak performance reporting.",
        ],
      },
      {
        title: "What Is Included",
        points: [
          "Messaging review and campaign setup coordination.",
          "Landing-page alignment support.",
          "Performance reporting structures.",
        ],
      },
      {
        title: "Deliverables",
        points: [
          "Campaign plans and messaging guidance.",
          "Compliance review checklists.",
          "Reporting templates and evidence packs.",
        ],
      },
      {
        title: "Benefits",
        points: [
          "Lower promotions risk.",
          "Better campaign structure.",
          "Clearer performance evidence.",
        ],
      },
      {
        title: "Who This Service Is For",
        points: [
          "Fintech startups running growth campaigns.",
          "EMIs, payment apps, and digital wallets.",
          "Regulated firms advertising financial products.",
        ],
      },
      {
        title: "Working Process",
        points: [
          "Discovery and campaign scope.",
          "Messaging and landing-page review.",
          "Setup coordination and launch.",
          "Performance reporting and optional support.",
        ],
      },
    ],
  },
];
