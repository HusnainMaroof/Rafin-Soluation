import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { INDUSTRIES_DATA } from "@/src/Static Data/IndustryData";
import Industry from "@/src/components/Industry";
import { JsonLd } from "@/src/lib/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  webpageJsonLd,
} from "@/src/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({ slug: industry.slug }));
}

// Unknown slugs (not in INDUSTRIES_DATA) should hard-404 rather than render a soft 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((s) => s.slug === slug);

  if (!industry) return {};

  return buildMetadata({
    title: industry.title,
    description: industry.desc,
    path: `/industry/${industry.slug}`,
    keywords: [
      industry.title,
      `${industry.title} compliance`,
      `${industry.title} support`,
    ],
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const Data = INDUSTRIES_DATA.find((s) => s.slug === slug);

  if (!Data) return notFound();

  return (
    <>
      <JsonLd
        data={webpageJsonLd({
          title: `${Data.title} | Rafin Solutions`,
          description: Data.desc,
          path: `/industry/${Data.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industry/money-service-businesses" },
          { name: Data.title, path: `/industry/${Data.slug}` },
        ])}
      />
      <Industry industry={Data} />
    </>
  );
}
