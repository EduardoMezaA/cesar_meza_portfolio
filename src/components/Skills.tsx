"use client";
import { content } from "@/data/i18n/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { skills } = content;
  const { lang } = useLanguage();

  return (
    <section className="py-14 md:py-28">
      <h2 className="section-title">{lang === "en" ? "Skills" : "Habilidades"}</h2>

      <SkillGroup title="Frontend" items={skills.frontend} />
      <SkillGroup title="Backend" items={skills.backend} />
      <SkillGroup title={lang === "en" ? "Databases" : "Bases de Datos"} items={skills.databases} />
      <SkillGroup title={lang === "en" ? "Tools & DevOps" : "Herramientas & DevOps"} items={skills.tools} />
      <SkillGroup title="UI / UX" items={skills.uiux[lang]} />
      <SkillGroup title={lang === "en" ? "AI" : "IA"} items={skills.ai[lang]} />
    </section>
  );
}

function SkillGroup({ title, items }: any) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {items.map((i: string) => (
          <span key={i} className="tag">{i}</span>
        ))}
      </div>
    </div>
  );
}
