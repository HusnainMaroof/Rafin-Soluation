import { notFound } from "next/navigation";
import TrainingPage from "@/src/components/Traning";
import { trainingPages } from "@/src/Static Data/traningData";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const trainingModule = trainingPages.find((s) => s.slug === slug);

  if (!trainingModule) return notFound();

  return <TrainingPage slug={trainingModule} />;
}