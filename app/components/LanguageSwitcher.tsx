"use client";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-amber-500/50 transition-all duration-300"
    >
      {/* Indicador visual */}
      <span className={`text-xs font-mono ${currentLanguage === 'es' ? 'text-amber-500 font-bold' : 'text-gray-500'}`}>
        ES
      </span>
      
      <div className="w-[1px] h-3 bg-white/20"></div>
      
      <span className={`text-xs font-mono ${currentLanguage === 'en' ? 'text-amber-500 font-bold' : 'text-gray-500'}`}>
        EN
      </span>

      {/* Brillo sutil al pasar el mouse */}
      <div className="absolute inset-0 rounded-full bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors"></div>
    </button>
  );
}