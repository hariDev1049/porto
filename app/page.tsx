'use client';
import { Link } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

export default function Home() {
  return (
    <>
      <section id="home" className="pt-3">
        <Hero />
      </section>

      <section id="experience" className="pt-3">
        <Experience />
      </section>

      <section id="projects" className="pt-3">
        <Projects />
      </section>

      <section id="contact" className="pt-3">
        <Contact />
      </section>
    </>
  );
}
