import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import MyWork from './components/Mywork';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <MyWork/>
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
