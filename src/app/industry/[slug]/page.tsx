import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/src/Static Data/IndustryData";
import Industry from "@/src/components/Industry";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const Data = INDUSTRIES_DATA.find((s) => s.slug === slug);

  if (!Data) return notFound();

  return <Industry industry={Data} />;
}
