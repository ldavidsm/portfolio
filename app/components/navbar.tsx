"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher"; 

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("education"), href: "#education" },
    { name: t("experience"), href: "#experience" },
    { name: t("skills"), href: "#skills" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nombre */}
        <div className="text-xl font-black tracking-tighter uppercase">
          <span className="text-amber-500">L</span>S<span className="text-amber-500">M</span>
        </div>

        {/* Links de Navegación */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-amber-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

          {/* COMPONENTE DE IDIOMA AQUÍ */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* Versión móvil (opcional, podrías poner el switcher aquí también) */}
        <div className="md:hidden">
           <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}