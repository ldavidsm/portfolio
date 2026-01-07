export default function Experience() {
  const experiences = [
    {
      year: "2022 - 2024",
      role: "Desarrollador Web y Especialista en Base de Datos",
      company: "Empresa Ejemplo",
      description: "Mantenimiento, optimizacion y administracion de las bases de datos del ecosistema DecidimOS. Implementacion de APIs y modulos para el desarrollo del mismo ",
      tech: ["Python", "PostrgreSQL", "MySQL", "Grafana"]
    },
    {
      year: "2021 - 2023",
      role: "Full Stack Developer",
      company: "Startup Ejemplo",
      description: "Implementación de APIs REST, integración con bases de datos SQL Server y mantenimiento de sistemas.",
      tech: ["Node.js", "SQL Server", "React"]
    }
  ];

  return (
    <section id="experience" className="w-full bg-[#0a0a0a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter flex items-center gap-4">
          <span className="text-amber-500">03.</span> Experiencia
        </h2>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <span className="text-amber-500 font-mono text-sm tracking-widest">{exp.year}</span>
                  <h3 className="text-2xl font-bold mt-1 text-white group-hover:text-amber-500 transition-colors">{exp.role}</h3>
                  <p className="text-gray-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}