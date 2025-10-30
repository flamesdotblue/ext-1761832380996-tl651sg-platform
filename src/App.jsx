import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
