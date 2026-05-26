import { Section, Eyebrow } from "./Section";
import crmExperience from "@/assets/current-crm-experience.png";

export function Gallery() {
  return (
    <Section id="gallery">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="reveal"><Eyebrow>Product Experience</Eyebrow></div>
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] gradient-text text-balance">
          The Current CRM Reality
        </h2>
        <p className="reveal mt-4 text-[#A1A1AA] text-lg">
          Spreadsheets. Disconnected data. Manual everything.
        </p>
      </div>

      <div className="reveal relative glass rounded-2xl overflow-hidden p-2 md:p-3">
        <img
          src={crmExperience}
          alt="Current CRM experience showing disconnected spreadsheets, manual data entry, and error-prone workflows"
          className="w-full h-auto rounded-xl"
          loading="lazy"
        />
      </div>
    </Section>
  );
}
