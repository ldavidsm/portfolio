import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Education from './components/education';
import Contact from './components/contact';

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

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Education */}
        <section id="education">
          <Education />
        </section>
        {/* Contact  */}
        <section id="contact">
          <Contact/>
        </section>
      </main>
    </>
  );
}
