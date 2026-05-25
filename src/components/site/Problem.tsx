import { Search, Layers, AlertTriangle } from "lucide-react";
import { Section, Eyebrow } from "./Section";

const cards = [
  {
    icon: Search,
    title: "Blind Enrichment",
    desc: "Traditional enrichment tools fabricate data and provide no visibility into source reliability.",
  },
  {
    icon: Layers,
    title: "Disconnected Intelligence",
    desc: "Meeting notes, transcripts, outreach, and research live across disconnected systems.",
  },
  {
    icon: AlertTriangle,
    title: "Black-Box AI",
    desc: "AI generates recommendations with no audit trail, approval workflow, or explainability.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="reveal">
            <Eyebrow>The Problem</Eyebrow>
          </div>
          <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] gradient-text text-balance">
            Revenue Teams Are Drowning in Noise
          </h2>
          <p className="reveal mt-6 text-lg text-[#A1A1AA] max-w-lg" style={{ transitionDelay: "100ms" }}>
            Sales reps spend more time researching, documenting, and updating
            CRMs than actually selling.
          </p>

          <div className="mt-10 space-y-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="reveal glass glass-hover rounded-2xl p-5 flex items-start gap-4"
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="size-11 shrink-0 rounded-xl gradient-primary flex items-center justify-center shadow-[0_0_24px_-4px_rgba(139,92,246,0.6)]">
                  <c.icon className="size-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-[#A1A1AA] mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal lg:sticky lg:top-32" style={{ transitionDelay: "150ms" }}>
          <div className="relative">
            <div className="absolute -inset-6 bg-[#8B5CF6]/20 blur-3xl rounded-full" />
            <div className="relative aspect-video glass rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="relative text-center">
                <div className="size-14 mx-auto rounded-2xl glass flex items-center justify-center mb-4">
                  <Layers className="size-6 text-[#A1A1AA]" />
                </div>
                <p className="text-[#A1A1AA] text-sm">Placeholder — Current CRM Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
