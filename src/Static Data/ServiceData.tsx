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
          <Coins className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
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
          <Target className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
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
    slug: "aml-training",
    icon: (
      <Users className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
    title: "AML Training & Competence",
    desc: "Professional AML training programs to keep your team compliant and informed.",
    overviewText:
      "Ensure your staff are fully equipped to handle Anti-Money Laundering responsibilities with our comprehensive training programs. We provide practical, up-to-date training tailored to your business model and regulatory environment.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Staff Training Programs",
        desc: "Role-based AML training for employees at all levels.",
      },
      {
        title: "Regulatory Awareness",
        desc: "Keeping your team updated with the latest AML laws and obligations.",
      },
    ],
    bentoBoxes: [
      {
        icon: (
          <BookOpen className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Structured Learning",
        desc: "Well-designed AML courses that combine theory with real-world case studies.",
        points: [
          "Interactive sessions and assessments",
          "Certification upon completion",
        ],
      },
      {
        icon: (
          <Users className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Team Competence",
        desc: "We ensure your entire team meets regulatory expectations and performs confidently during audits.",
        points: ["Ongoing refresher training", "Audit-ready staff preparation"],
      },
    ],
  },
  {
    slug: "money-laundering",
    icon: (
      <BookOpen className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
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
          <Scale className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
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
          <Clock className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
        ),
        title: "Ongoing Monitoring",
        desc: "Compliance is not a one-time task. We provide continuous support to ensure your safeguards remain effective over time.",
        points: ["Periodic risk reviews", "Real-time regulatory updates"],
      },
    ],
  },

  {
    slug: "fin-tech-services",
    icon: (
      <MonitorSmartphone className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
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
          <MonitorSmartphone className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
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
          <Network className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6  transition-transform duration-500" />
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
    icon: (
      <Palette className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
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
          <Palette className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
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
          <Smartphone className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Digital Experience",
        desc: "Your digital presence is your storefront. We ensure every user interaction is seamless, beautiful, and conversion-focused.",
        points: ["High-fidelity prototyping", "User journey mapping"],
      },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: (
      <Smartphone className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
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
          <Smartphone className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
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
          <ShieldCheck className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
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
    icon: (
      <Landmark className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
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
          <Briefcase className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
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
          <FileText className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
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
    slug: "uk-currency-exchange",
    icon: (
      <RefreshCw className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
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
          <RefreshCw className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "MSB Compliance",
        desc: "Tailored policies and procedures specifically designed for the unique risks associated with currency exchange.",
        points: ["Risk assessment frameworks", "Cash handling protocols"],
      },
      {
        icon: (
          <Search className="w-12 h-12 text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        ),
        title: "Audit & Review",
        desc: "Independent reviews of your exchange operations to ensure ongoing compliance with HMRC and FCA standards.",
        points: ["Record-keeping assessments", "Staff awareness evaluations"],
      },
    ],
  },
];
