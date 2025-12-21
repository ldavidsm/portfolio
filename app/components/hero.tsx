export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 overflow-hidden">
      {/* Decoración circular */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/10 rounded-full animate-spin-slow"></div>
      
      <div className="text-center px-4 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Brian Pérez López
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Software Engineer
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}