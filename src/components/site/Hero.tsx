export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Mesh gradient */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 size-[420px] rounded-full bg-[#8B5CF6]/20 blur-[120px] animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 size-[380px] rounded-full bg-[#3B82F6]/20 blur-[120px] animate-float pointer-events-none"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-wider uppercase text-[#A1A1AA] mb-8 reveal">
          <span className="size-1.5 rounded-full bg-[#10B981] animate-pulse" />
          AI-Augmented Revenue Workflow Platform
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.04em] leading-[1.02] text-balance">
          <span className="gradient-text">AI That Sells </span>
          <span className="gradient-text-accent">With You</span>
          <br />
          <span className="gradient-text">— Not For You</span>
        </h1>

        <p
          className="reveal mt-8 text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed text-balance"
          style={{ transitionDelay: "120ms" }}
        >
          SalesIntel augments every stage of the revenue pipeline with grounded
          intelligence, deterministic workflows, and human-approved AI actions.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ transitionDelay: "240ms" }}
        >
          <a
            href="#workflow"
            className="group px-6 py-3.5 rounded-xl gradient-primary font-medium shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_10px_60px_-10px_rgba(139,92,246,0.8)] transition-all"
          >
            See How It Works
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#demo"
            className="px-6 py-3.5 rounded-xl glass glass-hover font-medium"
          >
            Book a Demo
          </a>
        </div>

        <p
          className="reveal mt-12 text-sm text-[#A1A1AA]/80"
          style={{ transitionDelay: "360ms" }}
        >
          AI drafts. Humans approve. Humans own every customer decision.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />
    </section>
  );
}
