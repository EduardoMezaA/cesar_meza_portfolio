"use client";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/i18n/content";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section className="py-4 md:py-2">
      <p className="text-zinc-400">
        {content.about.text[lang]}
      </p>
    </section>
  );
}
