"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Navbar() {
    const { lang, toggleLanguage } = useLanguage();
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur border-b border-zinc-800 z-50"
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-semibold text-lg">
                    Cesar Meza
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex gap-6 items-center text-sm text-zinc-400">
                    <a href="#projects" className="hover:text-zinc-100 transition">
                        {lang === "en" ? "Projects" : "Proyectos"}
                    </a>

                    <span className="h-4 w-px bg-zinc-700" />

                    <LanguageSwitch />

                    <a
                        href="/Cesar_Meza_CV_EN.pdf"
                        target="_blank"
                        className="hover:text-zinc-100 transition"
                    >
                        {lang === "en" ? "Download CV" : "Descargar CV"}
                    </a>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden">
                    <LanguageSwitch />
                </div>
            </div>
        </motion.nav >
    );
}
