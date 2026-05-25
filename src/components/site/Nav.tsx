export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 mt-4">
        <div className="glass rounded-2xl flex items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-7 rounded-md gradient-primary shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
            <span className="font-semibold tracking-tight">SalesIntel</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#A1A1AA]">
            <a href="#workflow" className="hover:text-white transition">Workflow</a>
            <a href="#architecture" className="hover:text-white transition">Architecture</a>
            <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
            <a href="#impact" className="hover:text-white transition">Impact</a>
          </nav>
          <span className="hidden md:inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full glass text-[#A1A1AA]">
            <span className="size-1.5 rounded-full bg-[#10B981] animate-pulse" />
            POC Presentation
          </span>
        </div>
      </div>
    </header>
  );
}
