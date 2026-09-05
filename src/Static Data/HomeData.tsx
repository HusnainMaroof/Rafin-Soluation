// ==========================================
// 1. NAVIGATION
// ==========================================
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/service/aml-cft-compliance",
    dropdown: [
      { label: "AML/CFT Compliance", href: "/service/aml-cft-compliance" },
      { label: "KYC and KYB", href: "/service/kyc-and-kyb" },
      { label: "Transaction Monitoring", href: "/service/transaction-monitoring" },
      { label: "Payment Operations", href: "/service/payment-operations" },
      {
        label: "Transaction Processing",
        href: "/service/transaction-processing",
      },
      { label: "Customer Support", href: "/service/customer-support" },
      {
        label: "Technology and IT Governance",
        href: "/service/technology-and-it-governance",
      },
      { label: "Meta Ads for Fintech", href: "/service/meta-ads-for-fintech" },
    ],
  },
  { label: "Industries", href: "/industry/money-service-businesses" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

// ==========================================
// 2. FOOTER LINKS
// ==========================================
export const FOOTER_LINKS = {
  quickLinks: [
    { title: "About Us", href: "/about-us" },
    { title: "AML/CFT Compliance", href: "/service/aml-cft-compliance" },
    { title: "KYC and KYB", href: "/service/kyc-and-kyb" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms-and-conditions" },
    { title: "Cookie Policy", href: "/privacy-policy#cookies" },
  ],
};
