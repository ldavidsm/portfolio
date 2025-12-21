// components/About.jsx
export default function About() {
  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Sobre mí</h2>
          <p className="text-gray-600 mb-6">
            Soy Brian Pérez López, un Software Engineer apasionado por crear soluciones web modernas y eficientes.
            Me especializo en Next.js, React y desarrollo full-stack, enfocándome en la experiencia del usuario y la
            calidad del código.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Contáctame
          </a>
        </div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/avatar.jpg" // reemplaza con la imagen real
            alt="Brian Pérez López"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
