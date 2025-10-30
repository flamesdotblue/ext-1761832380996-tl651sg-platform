import { Github, Linkedin, Mail, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-center min-h-screen">
        <header className="flex items-center justify-between py-6">
          <a href="#home" className="text-lg font-semibold tracking-tight">Meet</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-200">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </header>

        <div className="mt-10 sm:mt-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-neutral-200 ring-1 ring-white/20">
            <Rocket size={14} />
            <span>Fresher • Open to Opportunities</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            Meet — Full Stack Developer
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300 text-base sm:text-lg">
            I build modern, responsive web apps with clean code and a strong focus on user experience. Currently seeking an entry-level role to learn, contribute, and grow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition">
              View Projects
            </a>
            <a href="mailto:meet.dev@example.com" className="inline-flex items-center gap-2 rounded-lg bg-transparent border border-white/30 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a aria-label="GitHub" href="https://github.com/meet-dev" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/meet-dev" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
              <Linkedin size={18} />
            </a>
            <a aria-label="Email" href="mailto:meet.dev@example.com" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
