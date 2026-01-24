

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="space-y-0">
        <Projects />

        {/* About & Skills grouped for better flow after Projects */}
        <section className="container mx-auto px-6 md:px-12 space-y-24 py-24">
          <Skills />
          <About />
        </section>
      </main>
      <Contact />
    </div>
  );
}

export default App;
