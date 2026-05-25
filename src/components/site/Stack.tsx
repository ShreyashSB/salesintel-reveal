import { Section, Eyebrow } from "./Section";

const techs = [
  "FastAPI", "Angular 17", "PostgreSQL", "SQLAlchemy", "Pydantic v2",
  "Ollama Cloud", "DuckDuckGo Search", "SSE", "Angular Material",
];

export function Stack() {
  return (
    <Section id="stack">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="reveal"><Eyebrow>Tech Stack</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          Enterprise-Grade Stack
        </h2>
      </div>

      <div className="reveal flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {techs.map((t, i) => (
          <span
            key={t}
            className="reveal glass glass-hover px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {t}
          </span>
        ))}
      </div>

      <p className="reveal mt-10 text-center text-[#A1A1AA] max-w-2xl mx-auto">
        API-first architecture with real-time event streaming and fully documented OpenAPI endpoints.
      </p>
    </Section>
  );
}
