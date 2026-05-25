import { Target, Send, MessageSquare, CheckCircle2, FileText, Trophy } from "lucide-react";
import { Section, Eyebrow } from "./Section";

const stages = [
  { icon: Target, name: "ICP", owner: "AI", desc: "AI-driven enrichment" },
  { icon: Send, name: "Outreach", owner: "Human", desc: "Human-approved outreach" },
  { icon: MessageSquare, name: "L1 Discovery", owner: "Human", desc: "Human-led conversation" },
  { icon: CheckCircle2, name: "L2 Qualification", owner: "Human", desc: "Human-led qualification" },
  { icon: FileText, name: "Proposal", owner: "AI", desc: "AI-assisted proposals" },
  { icon: Trophy, name: "Won", owner: "Human", desc: "Human owns the deal" },
];

export function Workflow() {
  return (
    <Section id="workflow">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="reveal"><Eyebrow>Human + AI Workflow</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] gradient-text text-balance">
          AI Handles the Prep. Humans Handle the Selling.
        </h2>
        <p className="reveal mt-6 text-lg text-[#A1A1AA]" style={{ transitionDelay: "100ms" }}>
          The workflow stays human-controlled while AI eliminates repetitive admin work.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative reveal">
        <div className="absolute top-[44px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {stages.map((s, i) => (
            <div
              key={s.name}
              className="reveal flex flex-col items-center text-center group"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative">
                <div className="size-[88px] rounded-2xl glass flex items-center justify-center group-hover:border-[#8B5CF6]/40 transition-all">
                  <s.icon className="size-7 text-white" />
                </div>
                <span
                  className={`absolute -top-2 -right-2 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full ${
                    s.owner === "AI"
                      ? "bg-[#8B5CF6]/20 text-[#c4b5fd] border border-[#8B5CF6]/40"
                      : "bg-[#10B981]/15 text-[#6ee7b7] border border-[#10B981]/40"
                  }`}
                >
                  {s.owner}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-sm">{s.name}</h3>
              <p className="text-xs text-[#A1A1AA] mt-1.5 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlighted quote */}
      <div className="reveal mt-24 relative" style={{ transitionDelay: "200ms" }}>
        <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-3xl" />
        <div className="relative glass rounded-2xl p-10 md:p-14 border-l-4 border-l-[#8B5CF6]">
          <p className="text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-snug gradient-text text-balance">
            "Every AI-generated action enters{" "}
            <code className="font-mono text-[#c4b5fd] bg-[#8B5CF6]/10 px-2 py-0.5 rounded">pending_review</code>{" "}
            before any customer-facing action occurs."
          </p>
        </div>
      </div>
    </Section>
  );
}
