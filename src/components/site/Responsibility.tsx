import { Bot, User, ShieldCheck } from "lucide-react";
import { Section, Eyebrow } from "./Section";

export function Responsibility() {
  return (
    <Section id="responsibility" className="overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />
      <div className="relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="reveal"><Eyebrow>AI Responsibility Model</Eyebrow></div>
          <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
            AI Proposes. Humans Decide.
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto h-[420px] md:h-[480px] reveal">
          {/* connection triangle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 480" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="ln" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <line x1="300" y1="80" x2="120" y2="400" stroke="url(#ln)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="300" y1="80" x2="480" y2="400" stroke="url(#ln)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="120" y1="400" x2="480" y2="400" stroke="url(#ln)" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          <Node
            className="absolute left-1/2 -translate-x-1/2 top-0"
            icon={Bot}
            title="AI System"
            desc="Drafts • Recommends • Summarizes"
            accent="purple"
          />
          <Node
            className="absolute left-0 bottom-0"
            icon={User}
            title="Sales Rep / AE"
            desc="Reviews • Approves • Owns Decisions"
            accent="blue"
          />
          <Node
            className="absolute right-0 bottom-0"
            icon={ShieldCheck}
            title="Manager + System"
            desc="Audits • Governs • Sets Guardrails"
            accent="green"
          />
        </div>

        <p className="reveal mt-16 text-center text-xl md:text-2xl font-medium gradient-text max-w-3xl mx-auto leading-snug text-balance">
          Accountability never belongs to the model. It belongs to the workflow owner who approved the action.
        </p>
      </div>
    </Section>
  );
}

function Node({
  icon: Icon,
  title,
  desc,
  className,
  accent,
}: {
  icon: any;
  title: string;
  desc: string;
  className?: string;
  accent: "purple" | "blue" | "green";
}) {
  const glow =
    accent === "purple"
      ? "shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)]"
      : accent === "blue"
      ? "shadow-[0_0_60px_-10px_rgba(59,130,246,0.7)]"
      : "shadow-[0_0_60px_-10px_rgba(16,185,129,0.6)]";
  return (
    <div className={`${className} w-[220px] md:w-[240px]`}>
      <div className={`glass rounded-2xl p-5 text-center ${glow}`}>
        <div className="size-12 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-3">
          <Icon className="size-5 text-white" />
        </div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-[#A1A1AA] mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
