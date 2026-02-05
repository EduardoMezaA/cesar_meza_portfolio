"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/i18n/content";
import Image from "next/image";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-title"
      >
        {lang === "en" ? "Projects" : "Proyectos"}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {content.projects.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.01 }}
            className="card card-hover p-6"
          >

              {/* Image */}
              <div className="relative w-full aspect-[16/7] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>

              {/* Content */}
              <h3 className="mt-4 text-xl font-semibold">
                {project.name}
              </h3>

              <p className="mt-2 text-zinc-400">
                {project.description[lang]}
              </p>

              <ul className="mt-4 list-disc pl-5 text-zinc-400 space-y-1">
                {project.bullets[lang].map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>


          </motion.div>
        ))}
      </div>
    </section>
  );
}
