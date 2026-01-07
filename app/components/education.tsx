export default function Education() {
  const educations = [
    {
      year: "2017 - 2022",
      degree: "Ingeniería en Ciencias Informaticas",
      institution: "Universidad de Ciencias Informaticas",
      description: "Durante mi formación universitaria, desarrollé una sólida base en ciencias de la computación, programación y desarrollo de software. La carrera me proporcionó conocimientos profundos en algoritmos, estructuras de datos, ingeniería de software y tecnologías web modernas.."
    },
    {
      year: "2024 - 2025",
      degree: "Master en Diseño y Programacion Web FullStack",
      institution: "Escuela Mastermedia",
      description: "Formación intensiva en el ecosistema Web y diseño de APIs."
    },
  ];

  return (
    <section id="education" className="w-full bg-[#0a0a0a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 text-right uppercase tracking-tighter flex items-center justify-end gap-4">
          Educación <span className="text-amber-500">.02</span>
        </h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
          {educations.map((edu, index) => (
            <div key={index} className="mb-12 relative">
              {/* Punto indicador */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
              
              {/* Contenido de la tarjeta */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:-left-[50%]' : 'md:pl-16'} relative`}>
                <span className="text-amber-500 font-mono text-sm font-bold uppercase tracking-widest">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-bold mt-1 mb-2">{edu.degree}</h3>
                <h4 className="text-gray-400 font-medium mb-4">{edu.institution}</h4>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-gray-400 text-sm leading-relaxed ">
                  {edu.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}