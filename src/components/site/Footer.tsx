export function Footer() {
  return (
    <footer id="demo" className="border-t border-white/8 py-12 px-6 md:px-10">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-md gradient-primary" />
          <p className="text-sm text-[#A1A1AA]">
            SalesIntel — AI-Augmented Revenue Workflow Platform
          </p>
        </div>
        <div className="flex items-center gap-8 text-sm text-[#A1A1AA]">
          <a href="#architecture" className="hover:text-white transition">Architecture</a>
          <a href="#workflow" className="hover:text-white transition">Workflow</a>
          <a href="#demo" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
