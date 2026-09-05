import React from "react";
import Link from "next/link";

/* ============================================================
   Shared legal page hero (light + dotted, matches site theme)
   ============================================================ */
export const LegalHero = ({
  title,
  highlight,
  description,
}: {
  title: string;
  highlight: string;
  description: string;
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden z-0 bg-slate-50 flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm text-xs md:text-sm font-bold mb-8 uppercase tracking-widest">
          <span className="text-yellow-500">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-600">
            {highlight}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
          {description}
        </p>
        <p className="text-sm text-slate-400 mt-6 font-medium">
          Last updated: 5 September 2026
        </p>
      </div>
    </section>
  );
};

/* ============================================================
   Small helpers for consistent legal content rendering
   ============================================================ */
const LegalList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
        <span className="mt-2.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const LegalSection = ({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="py-14 md:py-16 border-t border-slate-200 first:border-t-0 scroll-mt-24"
  >
    <div className="container mx-auto px-6 lg:px-16 w-full max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
        {heading}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  </section>
);

const LegalNote = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-yellow-200 bg-yellow-50 px-5 py-4 text-sm text-slate-700 leading-relaxed">
    {children}
  </div>
);

/* ============================================================
   Privacy Policy content
   ============================================================ */
export const PrivacyPolicyContent = () => (
  <>
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-3xl">
        <p className="text-slate-600 leading-relaxed">
          Rafin Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting
          your privacy. This Privacy Policy explains what personal information
          we collect through our website at{" "}
          <span className="font-semibold text-slate-800">
            rafinsolutions.com
          </span>{" "}
          (the &ldquo;Site&rdquo;) and through our consultancy services, how we use it, and
          the rights you have in relation to it. It applies to the personal
          information of website visitors, enquirers, and actual and potential
          clients.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We process personal information in accordance with the UK General
          Data Protection Regulation (UK GDPR), the EU General Data Protection
          Regulation (EU GDPR), and applicable data protection legislation.
        </p>
      </div>
    </section>

    <LegalSection heading="Who we are">
      <p className="text-slate-600 leading-relaxed">
        Rafin Solutions is a specialist consultancy that provides compliance,
        governance, and financial-services support to businesses operating in
        or seeking to enter regulated financial services. For the purposes of
        data protection law, we act as the controller of the personal
        information described in this policy.
      </p>
      <p className="text-slate-600 leading-relaxed">
        Our registered office address is: Opposite to Bega Sanitary Store,
        Gulyana Road, Kharian, District Gujrat, Pakistan.
      </p>
    </LegalSection>

    <LegalSection heading="Information we collect">
      <p className="text-slate-600 leading-relaxed">
        We collect information that you provide to us directly and information
        collected automatically when you use our Site. The categories we
        collect include:
      </p>
      <LegalList
        items={[
          "Contact details you submit through our enquiry form, such as your name, company name, email address, and phone number.",
          "Information you provide by email, phone, or video call when you request a consultation, ask a question, or instruct us to provide services.",
          "Details contained in documents you share with us during a consultation or engagement, which may include personal information of your directors, officers, employees, or customers.",
          "Technical information collected automatically, such as your IP address, browser type, device information, and pages you visit on our Site.",
          "Information you provide if you apply for a role with us, such as your CV, employment history, and qualifications.",
          "Details of referrals, if someone recommends our services to you.",
        ]}
      />
    </LegalSection>

    <LegalSection heading="How we use your information">
      <p className="text-slate-600 leading-relaxed">
        We use personal information for the following purposes:
      </p>
      <LegalList
        items={[
          "To respond to enquiries and provide the information, proposals, and services you request.",
          "To assess whether we can assist you and to prepare scopes of work and proposals.",
          "To deliver consultancy services under an engagement and to invoice and manage our client relationship.",
          "To send you relevant updates, insights, or newsletters where you have asked to receive them and you may opt out at any time.",
          "To understand how visitors use our Site so we can improve it.",
          "To comply with our legal, regulatory, and professional obligations, including record-keeping requirements.",
          "To assess job applications and manage our recruitment process.",
        ]}
      />
    </LegalSection>

    <LegalSection heading="Legal bases for processing">
      <p className="text-slate-600 leading-relaxed">
        Where the GDPR and UK GDPR apply, we rely on the following lawful bases:
      </p>
      <LegalList
        items={[
          "Consent, where you have given it clearly, for example to receive marketing communications. You can withdraw consent at any time.",
          "Performance of a contract, where processing is necessary to provide services you have engaged us to deliver or to take steps at your request before entering an engagement.",
          "Legitimate interests, such as operating and improving our Site, responding to enquiries, managing our client relationships, and keeping appropriate business records, provided your interests and rights do not override ours.",
          "Compliance with a legal obligation, where we must process information to satisfy a legal, regulatory, or professional requirement.",
        ]}
      />
    </LegalSection>

    <LegalSection id="cookies" heading="Cookies and analytics">
      <p className="text-slate-600 leading-relaxed">
        Our Site may place small text files known as cookies on your device to
        help the Site function properly and to collect information about how
        visitors use it. Cookies may be used to remember your preferences, keep
        the Site secure, and understand aggregate usage patterns such as the
        pages visited and time spent on the Site.
      </p>
      <p className="text-slate-600 leading-relaxed">
        Where analytics cookies are used, the information collected is
        aggregated and used to improve our content and user experience. You can
        control or delete cookies through your browser settings at any time.
        Disabling certain cookies may affect how the Site works for you.
      </p>
    </LegalSection>

    <LegalSection heading="Sharing and disclosure">
      <p className="text-slate-600 leading-relaxed">
        We do not sell, rent, or trade your personal information. We only share
        it where necessary and always in line with this policy, including with:
      </p>
      <LegalList
        items={[
          "Service providers who support our business, such as IT hosting, email, and analytics providers, who process information on our behalf under appropriate contracts.",
          "Professional advisers such as legal, accounting, and regulatory specialists where needed to deliver our services.",
          "Regulators, law enforcement, courts, or other authorities where we are required or permitted to do so by law.",
          "A prospective buyer or successor in the event of a merger, sale, or restructuring of our business.",
        ]}
      />
    </LegalSection>

    <LegalSection heading="International transfers">
      <p className="text-slate-600 leading-relaxed">
        As a consultancy operating internationally, your personal information
        may be processed in countries outside the UK and the EEA, including
        Pakistan where our office is based. Where we transfer personal
        information outside the UK or EEA, we take steps to ensure it receives
        an equivalent level of protection, for example through the UK or EU
        adequacy regulations or by using appropriate safeguards such as
        standard contractual clauses.
      </p>
    </LegalSection>

    <LegalSection heading="Data retention">
      <p className="text-slate-600 leading-relaxed">
        We keep personal information only for as long as necessary for the
        purposes described in this policy, and to satisfy legal, regulatory,
        tax, and professional record-keeping obligations. Enquiry and
        pre-engagement information is typically retained for a limited period.
        Where an engagement is entered into, records are retained in line with
        our professional obligations and any applicable regulatory
        requirements. When information is no longer needed, we delete or
        anonymise it securely.
      </p>
    </LegalSection>

    <LegalSection heading="Your rights">
      <p className="text-slate-600 leading-relaxed">
        Subject to applicable law, you have the right to:
      </p>
      <LegalList
        items={[
          "Request access to the personal information we hold about you.",
          "Request correction of inaccurate or incomplete information.",
          "Request erasure of your personal information in certain circumstances.",
          "Request restriction of processing in certain circumstances.",
          "Object to processing based on our legitimate interests.",
          "Request portability of information you have provided to us in a structured, machine-readable form.",
          "Withdraw consent at any time where processing is based on consent.",
          "Lodge a complaint with a supervisory authority, such as the UK Information Commissioner's Office (ICO), if you are concerned about how we handle your information.",
        ]}
      />
      <p className="text-slate-600 leading-relaxed">
        To exercise any of these rights, please contact us using the details
        below. We will respond within the timeframes required by applicable law
        and may need to verify your identity before responding.
      </p>
    </LegalSection>

    <LegalSection heading="Security">
      <p className="text-slate-600 leading-relaxed">
        We apply appropriate technical and organisational measures to protect
        personal information against unauthorised access, loss, alteration, and
        disclosure. These include access controls, secure storage of records,
        and confidentiality obligations on our team and service providers.
        Please note that no method of transmission over the internet is
        completely secure, and we cannot guarantee the absolute security of
        information transmitted to us electronically.
      </p>
    </LegalSection>

    <LegalSection heading="Children's privacy">
      <p className="text-slate-600 leading-relaxed">
        Our Site and services are directed at businesses and are not intended
        for children. We do not knowingly collect personal information from
        children. If you believe a child has provided us with personal
        information, please contact us and we will take steps to delete it.
      </p>
    </LegalSection>

    <LegalSection heading="Third-party links">
      <p className="text-slate-600 leading-relaxed">
        Our Site may contain links to third-party websites. This Privacy Policy
        does not apply to those websites, and we are not responsible for their
        privacy practices. We encourage you to read the privacy policy of any
        website you visit.
      </p>
    </LegalSection>

    <LegalSection heading="Changes to this policy">
      <p className="text-slate-600 leading-relaxed">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, technology, or legal requirements. The latest version
        will always be available on this page, and the &ldquo;Last updated&rdquo; date
        above will be revised accordingly. Where changes are significant, we
        will take reasonable steps to bring them to your attention.
      </p>
    </LegalSection>

    <LegalSection heading="Contact us">
      <p className="text-slate-600 leading-relaxed">
        If you have any questions about this Privacy Policy or wish to exercise
        your rights, please contact us at:
      </p>
      <LegalList
        items={[
          "Email: rafinsolutions@outlook.com",
          "Phone: +92 304 5896617",
          "Address: Opposite to Bega Sanitary Store, Gulyana Road, Kharian, District Gujrat, Pakistan",
        ]}
      />
      <LegalNote>
        This Privacy Policy provides general information about how Rafin
        Solutions handles personal data. It is not legal advice. If you have
        specific concerns about your data, or about data protection obligations
        for your own business, we recommend seeking advice from a qualified
        professional.
      </LegalNote>
    </LegalSection>
  </>
);

/* ============================================================
   Terms and Conditions content
   ============================================================ */
export const TermsContent = () => (
  <>
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-3xl">
        <p className="text-slate-600 leading-relaxed">
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the website
          at{" "}
          <span className="font-semibold text-slate-800">
            rafinsolutions.com
          </span>{" "}
          (the &ldquo;Site&rdquo;) operated by Rafin Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By
          accessing or using the Site, you agree to be bound by these Terms. If
          you do not agree with any part of them, please do not use the Site.
        </p>
        <p className="text-slate-600 leading-relaxed">
          These Terms apply to all visitors and users of the Site. Where we
          provide consultancy services to a client, those services are
          governed by a separate written engagement or proposal, and these
          Terms do not replace it.
        </p>
      </div>
    </section>

    <LegalSection heading="About us">
      <p className="text-slate-600 leading-relaxed">
        Rafin Solutions is a specialist consultancy providing compliance,
        governance, and financial-services support, including assistance with
        licensing, AML/CFT compliance, KYC/KYB, training, and fintech services.
        We operate from Opposite to Bega Sanitary Store, Gulyana Road,
        Kharian, District Gujrat, Pakistan, and serve clients internationally.
      </p>
      <LegalNote>
        Rafin Solutions is not a regulated financial services firm and does
        not provide legal advice. Content on this Site, including any
        commentary on regulation or compliance, is provided for general
        information only and must not be relied upon as professional or legal
        advice.
      </LegalNote>
    </LegalSection>

    <LegalSection heading="Use of the website">
      <p className="text-slate-600 leading-relaxed">
        You agree to use the Site only for lawful purposes and in a way that
        does not infringe the rights of, or restrict or inhibit the use of the
        Site by, any third party. You must not:
      </p>
      <LegalList
        items={[
          "Use the Site in any way that breaches any applicable local, national, or international law.",
          "Attempt to gain unauthorised access to the Site, our systems, or the systems of other users.",
          "Introduce or transmit viruses, malware, or any other harmful code.",
          "Use the Site to send unsolicited commercial communications.",
          "Scrape, copy, or republish content from the Site without our prior written permission.",
        ]}
      />
    </LegalSection>

    <LegalSection heading="Our services and proposals">
      <p className="text-slate-600 leading-relaxed">
        Information about our services on the Site is provided for general
        awareness and does not constitute an offer to provide services. Where
        you contact us about our services, we may invite you to a consultation
        and prepare a proposal or scope of work. No engagement is formed until
        a written agreement or statement of work is agreed and signed by both
        parties.
      </p>
      <p className="text-slate-600 leading-relaxed">
        Each engagement is subject to its own terms, including deliverables,
        fees, timelines, and any regulatory conditions. In the event of any
        conflict between these Terms and an engagement agreement, the
        engagement agreement will prevail.
      </p>
    </LegalSection>

    <LegalSection heading="Client responsibilities">
      <p className="text-slate-600 leading-relaxed">
        Where you engage us to provide services, you agree to:
      </p>
      <LegalList
        items={[
          "Provide accurate, complete, and up-to-date information and documentation as reasonably requested.",
          "Cooperate with us and respond promptly to requests so that we can deliver services effectively.",
          "Ensure that any information you provide about third parties (such as your customers, directors, or employees) has been obtained and shared lawfully.",
          "Notify us promptly of any material changes to your business or circumstances that may affect the services.",
        ]}
      />
    </LegalSection>

    <LegalSection heading="Fees and payment">
      <p className="text-slate-600 leading-relaxed">
        Fees for our services are set out in the relevant proposal or
        engagement agreement. Unless otherwise agreed, fees are quoted
        exclusive of applicable taxes, which will be added where required.
        Invoices are payable in accordance with the terms stated on the
        invoice, and we reserve the right to suspend work on overdue accounts
        until payment is received.
      </p>
    </LegalSection>

    <LegalSection heading="Intellectual property">
      <p className="text-slate-600 leading-relaxed">
        All content on the Site, including text, graphics, logos, images, and
        software, is the property of Rafin Solutions or its licensors and is
        protected by applicable intellectual property laws. You may view and
        download content from the Site for your personal, non-commercial use
        only. You must not reproduce, distribute, modify, or republish any
        content without our prior written consent.
      </p>
      <p className="text-slate-600 leading-relaxed">
        Deliverables we produce for clients under an engagement are subject to
        the ownership and licence terms set out in the relevant engagement
        agreement.
      </p>
    </LegalSection>

    <LegalSection heading="Confidentiality">
      <p className="text-slate-600 leading-relaxed">
        We treat information shared with us by clients and enquirers as
        confidential and use it only for the purposes for which it was
        provided. Nothing in these Terms prevents us from disclosing
        information where required by law, regulation, or a professional
        obligation, or where it is already in the public domain.
      </p>
    </LegalSection>

    <LegalSection heading="Limitation of liability">
      <p className="text-slate-600 leading-relaxed">
        The Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        basis. To the extent permitted by law, we make no warranties,
        express or implied, about the Site, including that it will be
        uninterrupted, error-free, or free from harmful components.
      </p>
      <p className="text-slate-600 leading-relaxed">
        To the fullest extent permitted by law, Rafin Solutions will not be
        liable for any indirect, incidental, special, or consequential loss or
        damage arising out of or in connection with your use of the Site,
        including loss of profits, data, or goodwill. Nothing in these Terms
        limits or excludes liability that cannot be limited or excluded under
        applicable law.
      </p>
      <LegalNote>
        Liability for professional services we provide is addressed
        exclusively in the relevant engagement agreement, which will contain
        the applicable limitations, exclusions, and any cap on liability.
      </LegalNote>
    </LegalSection>

    <LegalSection heading="Indemnity">
      <p className="text-slate-600 leading-relaxed">
        You agree to indemnify and hold Rafin Solutions and its team harmless
        from and against any claims, losses, liabilities, and expenses arising
        out of your misuse of the Site or your breach of these Terms.
      </p>
    </LegalSection>

    <LegalSection heading="Third-party links">
      <p className="text-slate-600 leading-relaxed">
        The Site may contain links to third-party websites. These links are
        provided for your convenience only. We do not endorse and are not
        responsible for the content, products, or services of any third-party
        website. Your use of third-party websites is subject to their own terms
        and policies.
      </p>
    </LegalSection>

    <LegalSection heading="Termination">
      <p className="text-slate-600 leading-relaxed">
        We may suspend or terminate your access to the Site at any time,
        without notice, if you breach these Terms or if we reasonably believe
        your use of the Site poses a risk to us or others. Provisions of these
        Terms that by their nature should survive termination, including
        intellectual property, confidentiality, and limitation of liability,
        will continue to apply.
      </p>
    </LegalSection>

    <LegalSection heading="Governing law and jurisdiction">
      <p className="text-slate-600 leading-relaxed">
        These Terms are governed by the laws of England and Wales, without
        regard to its conflict of law principles. Any dispute arising out of or
        in connection with these Terms or your use of the Site will be subject
        to the exclusive jurisdiction of the courts of England and Wales.
      </p>
    </LegalSection>

    <LegalSection heading="Changes to these terms">
      <p className="text-slate-600 leading-relaxed">
        We may revise these Terms from time to time. The latest version will
        always be published on this page, and the &ldquo;Last updated&rdquo; date will be
        revised accordingly. Your continued use of the Site after changes are
        published constitutes acceptance of the revised Terms.
      </p>
    </LegalSection>

    <LegalSection heading="Contact us">
      <p className="text-slate-600 leading-relaxed">
        If you have any questions about these Terms, please contact us at:
      </p>
      <LegalList
        items={[
          "Email: rafinsolutions@outlook.com",
          "Phone: +92 304 5896617",
          "Address: Opposite to Bega Sanitary Store, Gulyana Road, Kharian, District Gujrat, Pakistan",
        ]}
      />
      <p className="text-slate-600 leading-relaxed">
        Alternatively, you can reach us through our{" "}
        <Link
          href="/contact-us"
          className="font-semibold text-yellow-600 hover:text-yellow-500 transition-colors"
        >
          contact page
        </Link>
        .
      </p>
    </LegalSection>
  </>
);
