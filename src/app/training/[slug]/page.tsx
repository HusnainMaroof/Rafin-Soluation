import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/src/Static Data/ServiceData";
import TrainingPage from "@/src/components/Traning";
import { trainingPages } from "@/src/Static Data/traningData";

export default async function Page({ params }: any) {
  const { slug } = await params;

  const trainingModule = trainingPages.find((s) => s.slug === slug);

  if (!trainingModule) return notFound();

  return <TrainingPage slug={trainingModule} params={params} />;
}