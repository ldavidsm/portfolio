"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const links = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("education"), href: "#education" },
    { name: t("experience"), href: "#experience" },
    { name: t("skills"), href: "#skills" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-semibold text-white">Luis Senra Mirabal</span>

        {/* Links + Dropdown */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Dropdown de idioma */}
          <select
            value={lang}
            onChange={(e) => changeLanguage(e.target.value)}
            className="text-sm bg-black/50 text-white border border-white/40 rounded px-2 py-1 hover:bg-white/20 transition"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </motion.nav>
  );
}
