import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Let’s build something great</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            I’m actively looking for a full-time role or internship in full stack development. If you think I’d be a good fit, let’s connect.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a href="mailto:meet.dev@example.com" className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-4 py-3 text-sm font-medium hover:bg-neutral-200 transition">
              <Mail size={18} /> meet.dev@example.com
            </a>
            <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-lg bg-transparent border border-white/30 px-4 py-3 text-sm font-medium hover:bg-white/10 transition">
              <Phone size={18} /> +91 99999 99999
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a aria-label="GitHub" href="https://github.com/meet-dev" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/meet-dev" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <footer className="mt-8 text-xs text-neutral-400">
          © {new Date().getFullYear()} Meet. Built with React, Tailwind, and Spline.
        </footer>
      </div>
    </section>
  );
}

export default Contact;
