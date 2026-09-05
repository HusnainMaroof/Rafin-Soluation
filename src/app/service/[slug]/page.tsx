import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES_DATA } from "@/src/Static Data/ServiceData";
import { Services } from "@/src/components/Service";
import { JsonLd } from "@/src/lib/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  serviceJsonLd,
} from "@/src/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.slug }));
}

// Unknown slugs (not in SERVICES_DATA) should hard-404 rather than render a soft 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.desc,
    path: `/service/${service.slug}`,
    keywords: [
      service.title,
      `${service.title} consultancy`,
      ...service.features.map((f) => f.title.toLowerCase()),
    ],
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          slug: service.slug,
          title: service.title,
          description: service.desc,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/service/aml-cft-compliance" },
          { name: service.title, path: `/service/${service.slug}` },
        ])}
      />
      <Services service={service} />
    </>
  );
}
