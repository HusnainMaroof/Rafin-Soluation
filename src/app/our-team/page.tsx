import type { Metadata } from "next";
import { CTABandSection } from "@/src/components/SharedCTASection";
import { TeamGrid, TeamHero } from "@/src/components/Ourteam";
import React from "react";
import { buildMetadata, teamJsonLd, webpageJsonLd } from "@/src/lib/seo";
import { JsonLd } from "@/src/lib/JsonLd";
import { TEAM_MEMBERS } from "@/src/Static Data/TeamData";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the practitioners behind Rafin Solutions — compliance, risk, and fintech specialists supporting regulated financial businesses.",
  path: "/our-team",
  keywords: [
    "Rafin Solutions team",
    "compliance consultants",
    "AML specialists",
    "financial crime consultants",
  ],
});

const page = () => {
  return (
    <>
      <JsonLd data={teamJsonLd(TEAM_MEMBERS)} />
      <JsonLd
        data={webpageJsonLd({
          title: "Our Team | Rafin Solutions",
          description:
            "Meet the practitioners behind Rafin Solutions — compliance, risk, and fintech specialists supporting regulated financial businesses.",
          path: "/our-team",
        })}
      />
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        <TeamHero />
        <TeamGrid />
        <CTABandSection />
      </div>
    </>
  );
};

export default page;
