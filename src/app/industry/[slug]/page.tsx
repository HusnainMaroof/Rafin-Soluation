import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/src/Static Data/ServiceData";
import { Services } from "@/src/components/Service";
import { INDUSTRIES_DATA } from "@/src/Static Data/IndustryData";
import Industry from "@/src/components/Industry";

export default async function Page({ params }: any) {
  const { slug } = await params;

  const Data = INDUSTRIES_DATA.find((s) => s.slug === slug);

  if (!Data) return notFound();

  return <Industry industry={Data} />;
}
