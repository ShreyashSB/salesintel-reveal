import { LayoutDashboard, Brain, Mic, Send } from "lucide-react";
import { Section, Eyebrow } from "./Section";

const items = [
  { icon: LayoutDashboard, label: "Dashboard & Funnel" },
  { icon: Brain, label: "Lead Intelligence View" },
  { icon: Mic, label: "Transcript Analysis" },
  { icon: Send, label: "AI Outreach Generation" },
];

export function Gallery() {
  return (
    <Section id="gallery">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="reveal"><Eyebrow>Product Experience</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          Product Experience
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <div
            key={it.label}
            className="reveal group relative aspect-video glass glass-hover rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#8B5CF6]/10 to-[#3B82F6]/10" />
            <div className="relative text-center">
              <div className="size-14 mx-auto rounded-2xl glass flex items-center justify-center mb-4">
                <it.icon className="size-6 text-[#c4b5fd]" />
              </div>
              <p className="text-sm text-[#A1A1AA]">{it.label}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="reveal mt-10 text-center text-sm text-[#A1A1AA]/70">
        Production screenshots will be added in future versions.
      </p>
    </Section>
  );
}
