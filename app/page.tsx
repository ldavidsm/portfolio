"use client" ;
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Education from './components/education';
import Contact from './components/contact';
import Experience from './components/experience'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Education */}
        <section id="education">
          <Education />
        </section>

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
