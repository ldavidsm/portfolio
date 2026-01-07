import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* 1. Fondo de Rejilla (Grid Points) */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* 2. Resplandor Ámbar (Glow Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full z-0"></div>

      <div className="text-center z-10 flex flex-col items-center">
        
        {/* 3. Título con tipografía fuerte */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 uppercase">
          Luis Senra Mirabal
        </h1>

        {/* 4. Subtítulo estilo Código / Terminal */}
        <div className="flex items-center gap-2 text-amber-500 font-mono text-lg md:text-2xl mb-10">
          <span className="opacity-70">{">"}</span>
          <p className="tracking-widest">Web Developer & Database Specialist</p>
        </div>

        {/* 5. Redes Sociales (Iconos circulares) */}
        <div className="flex gap-5">
          <SocialIcon href="https://github.com/ldavidsm" icon={<FaGithub />} />
          <SocialIcon href="https://www.linkedin.com/in/luis-david-senra-mirabal-483837296/" icon={<FaLinkedin />} />
          <SocialIcon href="mailto:lsenramirabal@gmail.com" icon={<FaEnvelope />} />
        </div>
      </div>

      {/* 6. Indicador de Scroll (Opcional, estilo minimalista) */}
      <div className="absolute bottom-10 animate-bounce opacity-30">
        <div className="w-1 h-10 border-r border-white"></div>
      </div>
    </section>
  );
}

// Sub-componente para los iconos para mantener el código limpio
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-white/5 border border-white/10 text-white text-xl hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
    >
      {icon}
    </a>
  );
}