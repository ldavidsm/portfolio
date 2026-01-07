export default function Skills() {
  const skills = [
    { name: "PostgreSQL", level: 80, color: "#512bd4" },
    { name: "Python", level: 80, color: "#239120" },
    { name: "FastApi", level: 85, color: "#4fc08d" },
    { name: "PowerBi", level: 75, color: "#512bd4" },
    { name: "MySQL", level: 75, color: "#cc2927" },
    { name: "React", level: 70, color: "#0078d4" },
  ];

  return (
    <section id="skills" className="w-full bg-[#0a0a0a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter flex items-center gap-4">
          <span className="text-amber-500">05.</span> Habilidades
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Descripción Narrativa */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-500 font-mono">
              Especialización Técnica
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Desarrollo soluciones web full-stack de alto rendimiento con FastAPI (Python) para backends escalables, PostgreSQL para gestión robusta de datos, y React en el frontend para interfaces dinámicas y reactivas.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 italic text-gray-400">
"Conecto lógica de negocio ágil con experiencias de usuario fluidas, desde la base de datos hasta la interfaz."            </div>
            <p className="text-gray-400">
              Arquitecturas API-first, optimización de consultas en bases de datos relacionales, y aplicaciones React mantenibles y eficientes.
            </p>
          </div>

          {/* Columna Derecha: Progress Bars Visuales */}
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-sm font-mono text-amber-500/70 block mb-1">
                      {skill.level >= 90 ? "Expert" : "Advanced"}
                    </span>
                    <h4 className="font-bold text-lg tracking-wide">{skill.name}</h4>
                  </div>
                  <span className="text-amber-500 font-mono font-bold">{skill.level}%</span>
                </div>
                
                {/* Barra de Progreso Estilizada */}
                <div className="w-full bg-white/5 rounded-full h-3 border border-white/10 overflow-hidden p-[2px]">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                    style={{ 
                      width: `${skill.level}%`, 
                      backgroundColor: skill.color,
                      boxShadow: `0 0 15px ${skill.color}50`
                    }}
                  >
                    {/* Brillo interno de la barra */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}