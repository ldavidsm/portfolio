import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full bg-[#0a0a0a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter flex items-center gap-4">
          <span className="text-amber-500">04.</span> {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna Izquierda: Información */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6 italic">{t('contact.subtitle')}</h3>
              <p className="text-gray-400 text-lg mb-10 max-w-md">
                {t('contact.description')}
              </p>

              <div className="space-y-6">
                <ContactDetail icon={<FaEnvelope />} title={t('contact.details.email')} content="lsenramirabal@gmail.com" />
                <ContactDetail icon={<FaPhoneAlt />} title={t('contact.details.phone')} content="+34 623 96 23 41" />
                <ContactDetail icon={<FaMapMarkerAlt />} title={t('contact.details.location')} content={t('contact.details.mylocation')} />
              </div>
            </div>

            {/* RRSS Rediseñadas para el pie */}
            <div className="flex gap-4 mt-12">
              <a href="https://github.com/ldavidsm" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:text-amber-500 transition-all"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/luis-david-senra-mirabal-483837296/" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:text-amber-500 transition-all"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
            <form className="flex flex-col gap-6 relative z-10">
              <input
                type="text"
                placeholder={t('contact.form.name_placeholder')}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <input
                type="email"
                placeholder={t('contact.form.email_placeholder')}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <textarea
                placeholder={t('contact.form.message_placeholder')}
                rows={5}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
              <a
                href={`mailto:luisdavidsenramirabal@gmail.com?subject=${t('contact.email_subject')}&body=${t('contact.email_body')}`}
                className="bg-amber-500 text-black font-black py-4 px-8 rounded-2xl hover:bg-amber-400 transition-all uppercase tracking-widest text-sm text-center"
              >
                {t('contact.form.send_button')}
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


function ContactDetail({ icon, title, content }: { icon: any, title: string, content: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-amber-500 text-xl">{icon}</div>
      <div>
        <p className="text-xs font-mono uppercase text-gray-500 tracking-tighter">{title}</p>
        <p className="text-white font-medium">{content}</p>
      </div>
    </div>
  );
}