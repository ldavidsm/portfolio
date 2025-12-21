// components/Education.jsx
export default function Education() {
  const educations = [
    {
      year: "2020 - 2024",
      degree: "Ingeniería en Sistemas",
      institution: "Universidad Ejemplo",
      description: "Enfocado en desarrollo web, algoritmos y bases de datos."
    },
    {
      year: "2018 - 2020",
      degree: "Curso de Desarrollo Web",
      institution: "Academia Ejemplo",
      description: "Aprendizaje intensivo en HTML, CSS, JS y React."
    },
  ];

  return (
    <section id="education" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Educación</h2>
        <div className="flex flex-col gap-8">
          {educations.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <span className="text-blue-600 font-semibold md:w-32">{edu.year}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
