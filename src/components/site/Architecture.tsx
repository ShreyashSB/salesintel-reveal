import { Brain, Database, Cpu, ArrowDown, MessageSquare } from "lucide-react";
import { Section, Eyebrow } from "./Section";

const nodes = [
  { icon: MessageSquare, title: "Transcript Analysis", tag: "LLM", desc: "Extracts structured signals from raw conversation" },
  { icon: Database, title: "Structured Signals", tag: "Data", desc: "Sentiment, objections, intent, urgency" },
  { icon: Cpu, title: "Deterministic Rules Engine", tag: "Logic", desc: "Computes business outcomes from signals" },
];

const outcomes = ["Escalate Opportunity", "Create Follow-Up", "Recommend Proposal"];

export function Architecture() {
  return (
    <Section id="architecture">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="reveal"><Eyebrow>Hybrid AI Architecture</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          Hybrid AI Architecture
        </h2>
        <p className="reveal mt-6 text-lg text-[#A1A1AA]" style={{ transitionDelay: "100ms" }}>
          LLMs generate intelligence. Deterministic systems make business decisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: flow */}
        <div className="space-y-3 reveal">
          {nodes.map((n, i) => (
            <div key={n.title}>
              <div
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="size-12 rounded-xl gradient-primary flex items-center justify-center">
                  <n.icon className="size-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{n.title}</h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA]">{n.tag}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mt-1">{n.desc}</p>
                </div>
              </div>
              <div className="flex justify-center py-1">
                <ArrowDown className="size-4 text-[#8B5CF6]/60" />
              </div>
            </div>
          ))}

          <div className="glass rounded-2xl p-5 reveal" style={{ transitionDelay: "400ms" }}>
            <div className="text-xs text-[#A1A1AA] uppercase tracking-widest mb-3">Outcomes</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {outcomes.map((o) => (
                <div key={o} className="rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 px-3 py-2 text-xs font-medium text-[#6ee7b7] text-center">
                  {o}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center py-1">
            <ArrowDown className="size-4 text-[#8B5CF6]/60" />
          </div>

          <div className="glass rounded-2xl p-5 flex items-center gap-4 reveal" style={{ transitionDelay: "500ms" }}>
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Brain className="size-5 text-[#c4b5fd]" />
            </div>
            <div>
              <h4 className="font-semibold">LLM Narrates Decision</h4>
              <p className="text-xs text-[#A1A1AA] mt-1">Explains the deterministic outcome in plain language for the rep</p>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="reveal" style={{ transitionDelay: "200ms" }}>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] gradient-text leading-snug text-balance">
            Critical business decisions are never dependent on LLM reliability.
          </h3>
          <p className="mt-6 text-[#A1A1AA] leading-relaxed">
            The rules engine computes outcomes deterministically using structured
            data extracted from AI analysis. LLMs do what they're good at —
            understanding language — while a predictable engine handles what's
            non-negotiable.
          </p>

          <div className="mt-8 glass rounded-2xl p-6 border-l-4 border-l-[#8B5CF6]">
            <p className="text-lg font-medium gradient-text leading-snug">
              "No hallucinated escalations. No missed follow-ups. No AI-generated actions without human review."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
