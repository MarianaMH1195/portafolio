import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background3D />
      {/* Navbar flotante */}
      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      <main className="space-y-0">
        <Projects />

        {/* About & Skills grouped for better flow after Projects */}
        <section className="container mx-auto px-6 md:px-12 space-y-24 py-24">
          <Skills />
          <About />
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
