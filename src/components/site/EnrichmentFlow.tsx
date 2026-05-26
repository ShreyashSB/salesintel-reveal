import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow } from "./Section";
import { Sparkles, Target, Brain } from "lucide-react";
import shot1 from "@/assets/enrichment-1-summary.png";
import shot2 from "@/assets/enrichment-2-painpoints.png";
import shot3 from "@/assets/enrichment-3-intelligence.png";

type Step = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  annotation: string;
  image: string;
  icon: typeof Sparkles;
  /** focus region as % of the image (left, top, width, height) */
  focus: { x: number; y: number; w: number; h: number };
  /** zoom origin in % (transform-origin) */
  origin: { x: number; y: number };
};

const steps: Step[] = [
  {
    id: "summary",
    index: "01",
    title: "Lead Summary",
    kicker: "Raw Lead → Grounded Context",
    annotation:
      "AI synthesizes grounded company intelligence using enrichment and research signals.",
    image: shot1,
    icon: Sparkles,
    focus: { x: 62, y: 8, w: 22, h: 16 },
    origin: { x: 72, y: 16 },
  },
  {
    id: "painpoints",
    index: "02",
    title: "Pain Points & Recommendations",
    kicker: "Signals → Strategic Opportunities",
    annotation:
      "AI identifies buying signals, operational pain points, and strategic opportunities.",
    image: shot2,
    icon: Target,
    focus: { x: 74, y: 56, w: 24, h: 24 },
    origin: { x: 84, y: 66 },
  },
  {
    id: "intelligence",
    index: "03",
    title: "Continuous Intelligence Layer",
    kicker: "Actions → Living Revenue Intelligence",
    annotation:
      "Every interaction contributes to a continuously evolving lead intelligence layer.",
    image: shot3,
    icon: Brain,
    focus: { x: 74, y: 8, w: 24, h: 56 },
    origin: { x: 86, y: 36 },
  },
];

const STEP_MS = 6500;

export function EnrichmentFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);

  // pause when offscreen
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => (inView.current = e.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      if (!inView.current) return;
      setActive((a) => (a + 1) % steps.length);
    }, STEP_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <Section id="enrichment">
      <div className="reveal">
        <Eyebrow>Lead Enrichment Flow</Eyebrow>
      </div>
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
        <div>
          <h2 className="reveal text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] gradient-text text-balance">
            From Raw Lead to Living Revenue Intelligence
          </h2>
          <p
            className="reveal mt-5 text-[#A1A1AA] text-lg max-w-md"
            style={{ transitionDelay: "100ms" }}
          >
            A cinematic walkthrough of how SalesIntel transforms cold contact
            data into auditable, human-controlled revenue intelligence.
          </p>

          {/* Step rail */}
          <ol className="reveal mt-10 space-y-2" style={{ transitionDelay: "200ms" }}>
            {steps.map((s, i) => {
              const isActive = i === active;
              const Icon = s.icon;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onClick={() => setActive(i)}
                    className={`group w-full text-left rounded-2xl p-4 flex items-start gap-4 transition-all duration-500 border ${
                      isActive
                        ? "bg-white/[0.04] border-[#8B5CF6]/40 shadow-[0_0_40px_-12px_rgba(139,92,246,0.55)]"
                        : "bg-transparent border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div
                      className={`relative size-11 shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "gradient-primary text-white"
                          : "bg-white/5 text-[#A1A1AA]"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#A1A1AA]">
                          {s.index}
                        </span>
                        <span
                          className={`text-sm font-semibold transition-colors ${
                            isActive ? "text-white" : "text-[#D4D4D8]"
                          }`}
                        >
                          {s.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#71717A] mt-1">{s.kicker}</p>
                      {/* progress bar */}
                      <div className="mt-3 h-[2px] rounded-full bg-white/5 overflow-hidden">
                        <div
                          key={`${s.id}-${active}-${paused}`}
                          className={`h-full gradient-primary ${
                            isActive ? "" : "opacity-0"
                          }`}
                          style={{
                            width: isActive ? "100%" : "0%",
                            transition: isActive
                              ? `width ${STEP_MS}ms linear`
                              : "width 300ms ease",
                            animationPlayState: paused ? "paused" : "running",
                          }}
                        />
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Stage */}
        <div
          ref={wrapRef}
          className="reveal relative"
          style={{ transitionDelay: "150ms" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ambient lighting */}
          <div className="pointer-events-none absolute -inset-10">
            <div className="absolute -top-10 -left-10 size-72 rounded-full bg-[#8B5CF6]/25 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-10 -right-10 size-72 rounded-full bg-[#3B82F6]/20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_40px_120px_-30px_rgba(139,92,246,0.45)]">
            {/* thin glowing border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-[#8B5CF6]/30 via-transparent to-[#3B82F6]/30 opacity-60 blur-[2px]" />

            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={s.id}
                  className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    filter: isActive ? "blur(0px)" : "blur(8px)",
                    transition:
                      "opacity 1400ms ease, filter 1400ms ease, transform 7000ms ease-out",
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                    transformOrigin: `${s.origin.x}% ${s.origin.y}%`,
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    draggable={false}
                  />
                  {/* dark vignette for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/70 via-transparent to-[#0A0A0B]/20" />

                  {/* focus highlight */}
                  <div
                    className="absolute rounded-xl border border-[#8B5CF6]/70 shadow-[0_0_0_6px_rgba(139,92,246,0.12),0_0_60px_rgba(139,92,246,0.55)] transition-opacity duration-1000"
                    style={{
                      left: `${s.focus.x}%`,
                      top: `${s.focus.y}%`,
                      width: `${s.focus.w}%`,
                      height: `${s.focus.h}%`,
                      opacity: isActive ? 1 : 0,
                    }}
                  />

                  {/* annotation card */}
                  <div
                    className="absolute left-4 right-4 bottom-4 md:left-6 md:right-auto md:bottom-6 md:max-w-sm"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition:
                        "opacity 900ms ease 300ms, transform 900ms ease 300ms",
                    }}
                  >
                    <div className="glass rounded-2xl p-4 border border-white/10 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[#A1A1AA]">
                        <span className="size-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                        Step {s.index} · {s.title}
                      </div>
                      <p className="mt-2 text-sm text-white/90 leading-relaxed">
                        {s.annotation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* floating intelligence indicators */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-[10px] tracking-wider uppercase text-[#A1A1AA]">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live · Human-Approved
              </div>
            </div>
          </div>

          {/* caption */}
          <p className="mt-5 text-xs text-[#71717A] text-center">
            Auto-advancing showcase · hover to pause · click a step to jump
          </p>
        </div>
      </div>
    </Section>
  );
}
