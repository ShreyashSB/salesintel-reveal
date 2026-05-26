import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Workflow } from "@/components/site/Workflow";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Architecture } from "@/components/site/Architecture";
import { Capabilities } from "@/components/site/Capabilities";
import { Responsibility } from "@/components/site/Responsibility";
import { UseCases } from "@/components/site/UseCases";
import { Impact } from "@/components/site/Impact";
import { Gallery } from "@/components/site/Gallery";
import { EnrichmentFlow } from "@/components/site/EnrichmentFlow";
import { Stack } from "@/components/site/Stack";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SalesIntel — AI-Augmented Revenue Workflow Platform" },
      {
        name: "description",
        content:
          "SalesIntel augments every stage of the revenue pipeline with grounded intelligence, deterministic workflows, and human-approved AI actions.",
      },
      { property: "og:title", content: "SalesIntel — AI That Sells With You" },
      {
        property: "og:description",
        content:
          "Human-controlled AI workflows with deterministic decision systems for enterprise sales teams.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="relative bg-[#0A0A0B] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <EnrichmentFlow />
      <Workflow />
      <HowItWorks />
      <Architecture />
      <Capabilities />
      <Responsibility />
      <UseCases />
      <Impact />
      <Gallery />
      <Stack />
      <Footer />
    </main>
  );
}
