export default function About() {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter flex items-center gap-4">
          <span className="text-amber-500">01.</span> Sobre mí
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bloque Principal Bio */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors">
            <p className="text-xl leading-relaxed text-gray-300">
              Soy <span className="text-white font-bold">Luis Senra Mirabal</span>,Ingeniero en Ciencias Informáticas enfocado en el trabajo con lenguaje python en el análisis, manejo, visualización de datos y en el desarrollo web. Dominio del trabajo con tecnologías de última generación y fácil adaptación a diferentes entornos de trabajo, con una enorme pasión y dedicación por la profesión con ganas de afrontar nuevos retos y desafíos para seguir creciendo profesionalmente.Destaco por mi capacidad analítica, adaptabilidad y trabajo en equipo, fomentando la colaboración y el aprendizaje continuo. Mi objetivo es superar las expectativas en cada proyecto, aportando soluciones innovadoras que mantengan altos estándares de calidad y eficiencia en cada línea de código.
            </p>
            <p className="mt-4 text-gray-400">
              Me apasiona transformar problemas complejos en sistemas escalables, siempre con un ojo puesto en la 
              eficiencia del código y la integridad de los datos.
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