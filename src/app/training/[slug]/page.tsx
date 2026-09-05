import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TrainingPage from "@/src/components/Traning";
import { trainingPages } from "@/src/Static Data/traningData";
import { JsonLd } from "@/src/lib/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  courseJsonLd,
  SITE_NAME_ACADEMY,
} from "@/src/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return trainingPages.map((training) => ({ slug: training.slug }));
}

// Unknown slugs (not in trainingPages) should hard-404 rather than render a soft 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trainingModule = trainingPages.find((s) => s.slug === slug);

  if (!trainingModule) return {};

  return buildMetadata({
    title: trainingModule.title,
    description: trainingModule.description,
    path: `/training/${trainingModule.slug}`,
    keywords: [
      trainingModule.title,
      "AML compliance training",
      "financial services training",
      "Rafin Solutions Academy",
    ],
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const trainingModule = trainingPages.find((s) => s.slug === slug);

  if (!trainingModule) return notFound();

  return (
    <>
      <JsonLd data={courseJsonLd(trainingModule)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: SITE_NAME_ACADEMY, path: "/training/aml-cft-training" },
          { name: trainingModule.title, path: `/training/${trainingModule.slug}` },
        ])}
      />
      <TrainingPage slug={trainingModule} />
    </>
  );
}