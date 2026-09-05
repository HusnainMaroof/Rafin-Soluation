export interface ExpertiseItem {
  image: string;
  title: string;
  desc: string;
}

export interface ComplianceItem {
  image: string;
  title: string;
  desc: string;
  href: string;
  linkLabel: string;
}

export const expertiseData: ExpertiseItem[] = [
  {
    image: "/images/about-us/strategic.jpg",
    title: "Strategic",
    desc: "Long-term compliance roadmaps, regulatory positioning, and structural integration for entering new markets.",
  },
  {
    image: "/images/about-us/business-as-usual.jpg",
    title: "Business as Usual",
    desc: "Day-to-day compliance support, ongoing monitoring, and routine checks to ensure seamless operations.",
  },
  {
    image: "/images/about-us/problem-solving.jpg",
    title: "Problem-Solving",
    desc: "Targeted interventions, audit remediation, and rapid response to complex regulatory inquiries or challenges.",
  },
];

export const complianceData: ComplianceItem[] = [
  {
    image: "/images/about-us/authorisation.jpg",
    title: "Authorisation",
    desc: "We guide businesses through the rigorous FCA authorization process, increasing approval chances significantly.",
    href: "/service/aml-cft-compliance",
    linkLabel: "Explore licence authorisation support",
  },
  {
    image: "/images/about-us/ongoing-monitoring.jpg",
    title: "Ongoing Monitoring",
    desc: "Continuous oversight to ensure your business remains compliant amidst evolving regulatory landscapes.",
    href: "/service/transaction-monitoring",
    linkLabel: "Explore ongoing compliance support",
  },
  {
    image: "/images/about-us/team-training.jpg",
    title: "Team Training",
    desc: "Equipping your staff with the latest knowledge in AML, CFT, and general compliance requirements.",
    href: "/training/aml-cft-training",
    linkLabel: "Explore AML/CFT training",
  },
];
