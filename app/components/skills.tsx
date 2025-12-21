// components/Skills.jsx
export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React / Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Git / GitHub", level: 90 },
  ];

  return (
    <section id="skills" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
