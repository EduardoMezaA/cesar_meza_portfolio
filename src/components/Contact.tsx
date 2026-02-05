"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/i18n/content";

export default function Contact() {
  const { lang } = useLanguage();
  const c = content.contact;

  return (
    <section id="contact" className="py-20 md:py-26 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-title"
      >
        {c.title[lang]}
      </motion.h2>

      <p className="mt-4 text-zinc-400">
        {c.subtitle[lang]}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href={`mailto:${c.email}`}
          className="btn-primary"
        >
          Email
        </a>

        <a
          href={c.linkedin}
          target="_blank"
          className="btn-secondary"
        >
          LinkedIn
        </a>

        <a
          href={c.github}
          target="_blank"
          className="btn-secondary"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
