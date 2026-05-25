import { Globe, Layers, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "./Section";

const steps = [
  {
    n: "01",
    icon: Globe,
    title: "Research Grounding",
    desc: "SalesIntel performs real web research before any AI enrichment occurs. AI synthesizes grounded company intelligence using trusted sources and anti-hallucination prompts.",
    placeholder: "Lead Enrichment Flow",
  },
  {
    n: "02",
    icon: Layers,
    title: "Intelligence Synthesis",
    desc: "Notes, transcripts, enrichment, and interactions accumulate into a living intelligence layer for every lead.",
    placeholder: "Lead Intelligence Layer",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Actionable AI Outputs",
    desc: "AI drafts outreach, follow-ups, agendas, and proposals using accumulated intelligence while deterministic rules compute business-critical decisions.",
    placeholder: "AI Outreach & Recommendations",
  },
];

export function HowItWorks() {
  return (
    <Section id="how">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="reveal"><Eyebrow>How SalesIntel Works</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          From Web Signal to Closed Deal
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 relative">
        {/* connectors */}
        <div className="hidden lg:block absolute top-1/2 left-[33%] right-[33%] h-px bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6]/60 to-[#8B5CF6]/0" />
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="reveal glass glass-hover rounded-2xl p-7 flex flex-col"
            style={{ transitionDelay: `${i * 140}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#A1A1AA] tracking-widest">STEP {s.n}</span>
              <div className="size-10 rounded-xl gradient-primary flex items-center justify-center shadow-[0_0_24px_-4px_rgba(139,92,246,0.6)]">
                <s.icon className="size-5 text-white" />
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-3 text-[#A1A1AA] text-sm leading-relaxed">{s.desc}</p>

            <div className="mt-6 aspect-[5/3] rounded-xl glass flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <p className="relative text-xs text-[#A1A1AA]">{s.placeholder}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
