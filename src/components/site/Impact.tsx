import { Section, Eyebrow } from "./Section";
import { useCountUp } from "@/hooks/use-count-up";

const metrics = [
  { value: 4, suffix: "×", label: "More leads researched per analyst" },
  { value: 70, suffix: "%", label: "Reduction in admin workload" },
  { value: 96, suffix: "%", label: "Meeting summary completion rate" },
  { value: 0, suffix: "", label: "AI messages sent without human approval" },
];

function Metric({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { value: v, ref } = useCountUp(value);
  const display = value === 0 ? "0" : Math.round(v).toString();
  return (
    <div
      ref={ref}
      className="reveal glass glass-hover rounded-2xl p-8 md:p-10 text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-6xl md:text-7xl font-semibold tracking-[-0.04em] gradient-text-accent">
        {display}
        <span>{suffix}</span>
      </div>
      <p className="mt-3 text-sm text-[#A1A1AA]">{label}</p>
    </div>
  );
}

export function Impact() {
  return (
    <Section id="impact">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="reveal"><Eyebrow>Business Impact</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          Operational Impact
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, i) => (
          <Metric key={m.label} {...m} delay={i * 100} />
        ))}
      </div>
    </Section>
  );
}
