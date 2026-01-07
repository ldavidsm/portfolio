import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0a0a0a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter flex items-center gap-4">
          <span className="text-amber-500">04.</span> Contacto
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna Izquierda: Información */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6 italic">¿Hablamos de tu próximo proyecto?</h3>
              <p className="text-gray-400 text-lg mb-10 max-w-md">
                Estoy disponible para nuevos retos y colaboraciones en el área de desarrollo y datos.
              </p>
              
              <div className="space-y-6">
                <ContactDetail icon={<FaEnvelope />} title="Email" content="lsenramirabal@gmail.com" />
                <ContactDetail icon={<FaPhoneAlt />} title="Teléfono" content="+34 623 96 23 41" />
                <ContactDetail icon={<FaMapMarkerAlt />} title="Ubicación" content="Madrid, España" />
              </div>
            </div>

            {/* RRSS Rediseñadas para el pie */}
            <div className="flex gap-4 mt-12">
              <a href="https://github.com/ldavidsm" target = "_blank" className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:text-amber-500 transition-all"><FaGithub size={20}/></a>
              <a href="https://www.linkedin.com/in/luis-david-senra-mirabal-483837296/" target = "_blank" className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:text-amber-500 transition-all"><FaLinkedin size={20}/></a>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
            <form className="flex flex-col gap-6 relative z-10">
              <input
                type="text"
                placeholder="Nombre completo"
                className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <textarea
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
              <a 
                href="mailto:luisdavidsenramirabal@gmail.com?subject=Contacto desde Portfolio&body=Hola Luis David,%0D%0A%0D%0AMe gustaría contactarte acerca de..."
                className="bg-amber-500 text-black font-black py-4 px-8 rounded-2xl hover:bg-amber-400 transition-all uppercase tracking-widest text-sm text-center"
                >
              Enviar Email Directo
            </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-componente de ayuda para la info de contacto
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