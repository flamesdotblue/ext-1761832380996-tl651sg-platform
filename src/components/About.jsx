import { GraduationCap, MapPin, Code } from 'lucide-react';

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-200 ring-1 ring-white/10">
      {children}
    </span>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
        <p className="mt-4 max-w-3xl text-neutral-300">
          Hi, I’m Meet — a self-driven Full Stack Developer passionate about building engaging web experiences. I enjoy translating ideas into performant interfaces and scalable backends. As a fresher, I’ve completed several hands-on projects that showcase my skills across the stack, from designing REST APIs to crafting polished UI.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-neutral-200">
              <GraduationCap size={18} />
              <h3 className="font-medium">Education</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">B.E. in Computer Engineering</p>
            <p className="text-xs text-neutral-400">2020 – 2024</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-neutral-200">
              <MapPin size={18} />
              <h3 className="font-medium">Location</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">Ahmedabad, India</p>
            <p className="text-xs text-neutral-400">Open to remote and onsite roles</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-neutral-200">
              <Code size={18} />
              <h3 className="font-medium">Focus</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">Full Stack Web Development</p>
            <p className="text-xs text-neutral-400">Clean code, UX, and performance</p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-medium text-neutral-200">Tech I use</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Express</Badge>
            <Badge>MongoDB</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>REST APIs</Badge>
            <Badge>Git & GitHub</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
