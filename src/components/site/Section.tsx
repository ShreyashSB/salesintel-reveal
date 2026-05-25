import { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-[120px] px-6 md:px-10 ${className}`}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-wider uppercase text-[#A1A1AA] mb-6">
      <span className="size-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
      {children}
    </div>
  );
}
