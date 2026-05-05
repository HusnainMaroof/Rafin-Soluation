import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/src/Static Data/ServiceData";
import { Services } from "@/src/components/Service";

export default async function Page({ params }: any) {
  const { slug } = await params;

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return notFound();

  return <Services service={service} />;
}
