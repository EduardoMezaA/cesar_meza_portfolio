"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { lang, toggleLanguage } = useLanguage();
  const isEnglish = lang === "en";

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200 transition"
      aria-label="Toggle language"
    >
      <span className={!isEnglish ? "opacity-40" : ""}>EN</span>

      <div className="relative w-10 h-5 bg-zinc-800 rounded-full">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 w-4 h-4 bg-indigo-500 rounded-full"
          style={{
            left: isEnglish ? "2px" : "22px",
          }}
        />
      </div>

      <span className={isEnglish ? "opacity-40" : ""}>ES</span>
    </button>
  );
}
