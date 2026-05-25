import { Section, Eyebrow } from "./Section";

const personas = [
  {
    role: "Sales Rep",
    quote: "I can finally trust the data in my CRM and spend more time selling instead of researching.",
    bullets: ["AI enrichment", "Outreach drafts", "Call summaries", "Next-action suggestions"],
  },
  {
    role: "Account Executive",
    quote: "Proposal creation and discovery preparation are dramatically faster because the intelligence layer already understands the customer.",
    bullets: ["Discovery insights", "Buying signal detection", "Proposal drafting", "Meeting summaries"],
  },
  {
    role: "Sales Manager",
    quote: "I can see exactly what AI generated, what reps approved, and where pipeline momentum is slowing down.",
    bullets: ["Funnel analytics", "Rep performance", "AI activity tracking", "Coaching insights"],
  },
  {
    role: "RevOps",
    quote: "The deterministic rules engine gives us consistent workflows regardless of LLM variability.",
    bullets: ["Audit trails", "Rule configuration", "Duplicate management", "Workflow governance"],
  },
];

export function UseCases() {
  return (
    <Section id="usecases">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="reveal"><Eyebrow>Use Cases</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          Who Uses SalesIntel
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {personas.map((p, i) => (
          <div
            key={p.role}
            className="reveal glass glass-hover rounded-2xl p-7"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#8B5CF6]/15 text-[#c4b5fd] border border-[#8B5CF6]/30">
              {p.role}
            </span>
            <p className="mt-5 text-lg gradient-text leading-snug font-medium">
              "{p.quote}"
            </p>
            <div className="mt-6 pt-6 border-t border-white/8 grid grid-cols-2 gap-2">
              {p.bullets.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                  <span className="size-1.5 rounded-full bg-[#8B5CF6]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
