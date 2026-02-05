"use client";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/i18n/content";

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 md:py-30">
      <h2 className="section-title">{lang === "en" ? "Experience" : "Experiencia"}</h2>

      {content.experience.map((job) => (
        <div key={job.company} className="mt-8">
          <h3 className="font-semibold">
            {job.role[lang]} — {job.company}
          </h3>
          <p className="text-sm text-zinc-500">{job.period}</p>

          <ul className="list-disc pl-5 mt-3 text-zinc-400">
            {job.bullets[lang].map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
