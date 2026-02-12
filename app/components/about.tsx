import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full bg-[#0a0a0a] py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter flex items-center gap-4">
          <span className="text-amber-500">01.</span> {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bloque Principal Bio */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors">
            <p className="text-xl leading-relaxed text-gray-300">
              <Trans
                i18nKey="about.bio_part1"
                components={{ 1: <span className="text-white font-bold" /> }}
              />
            </p>
            <p className="mt-4 text-gray-400">
              {t('about.bio_part2')}
            </p>
          </div>

          {/* Bloque Imagen con estilo */}
          <div className="relative group overflow-hidden rounded-3xl ">
            <img
              src="/avat.jpg"
              alt="Luis David Senra Mirabal"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 border-2 border-amber-500/20 rounded-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}