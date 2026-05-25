import { Compass, Mic, Layers3, PenLine, BarChart3, GitMerge } from "lucide-react";
import { Section, Eyebrow } from "./Section";

const items = [
  { icon: Compass, title: "Lead Enrichment", desc: "Grounded web research + AI synthesis for trustworthy lead intelligence." },
  { icon: Mic, title: "Transcript Analysis", desc: "Extract sentiment, objections, buying intent, urgency, and action items." },
  { icon: Layers3, title: "Unified Intelligence Layer", desc: "All lead knowledge accumulates into a continuously evolving intelligence profile." },
  { icon: PenLine, title: "AI Outreach Generation", desc: "Generate contextual outreach drafts grounded in real customer intelligence." },
  { icon: BarChart3, title: "Real-Time Dashboard", desc: "Live funnel metrics, rep performance, AI usage analytics, and activity streams." },
  { icon: GitMerge, title: "Conflict Resolution", desc: "Fuzzy duplicate detection with structured merge/review workflows." },
];

export function Capabilities() {
  return (
    <Section id="capabilities">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="reveal"><Eyebrow>Core Capabilities</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          Built for Modern Revenue Teams
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="reveal glass glass-hover rounded-2xl p-7 group"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="size-12 rounded-xl gradient-primary flex items-center justify-center shadow-[0_0_24px_-4px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_40px_-4px_rgba(139,92,246,0.8)] transition-shadow">
              <it.icon className="size-5 text-white" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{it.title}</h3>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
