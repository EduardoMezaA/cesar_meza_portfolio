"use client";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/i18n/content";

export default function Hero() {
  const { lang } = useLanguage();
  const hero = content.hero;

  return (
    <section className="py-24 md:py-32">
      <h1 className="text-4xl md:text-5xl font-bold">
        {hero.title[lang]}
      </h1>

      <p className="mt-2 text-xl text-zinc-400">
        {hero.subtitle[lang]}
      </p>

      <p className="mt-6 max-w-xl text-zinc-400">
        {hero.description[lang]}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="btn-primary">{hero.projectsBtn[lang]}</a>

        {/* Mobile CV button */}
        <a
          href="/Cesar_Meza_CV_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary md:hidden"
        >
          {lang === "en" ? "Download CV" : "Descargar CV"}
        </a>
      </div>
    </section>
  );
}
