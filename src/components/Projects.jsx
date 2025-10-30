import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'MERN Blog Platform',
    description:
      'A full-stack blogging app with JWT auth, role-based access, and a rich text editor. Users can create, edit, and comment on posts.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    demo: '#',
    repo: 'https://github.com/meet-dev/mern-blog',
  },
  {
    title: 'Task Manager API + Dashboard',
    description:
      'Task management REST API with filtering, pagination, and a responsive React dashboard. Includes simple charts and search.',
    tech: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'React'],
    demo: '#',
    repo: 'https://github.com/meet-dev/task-manager',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A responsive portfolio site featuring interactive 3D elements, smooth animations, and optimized Lighthouse scores.',
    tech: ['Vite', 'React', 'Framer Motion', 'Tailwind'],
    demo: '#',
    repo: 'https://github.com/meet-dev/portfolio',
  },
];

function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
          <a
            href="https://github.com/meet-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] rounded-full bg-white/5 px-2 py-1 text-neutral-200 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-neutral-200 hover:text-white"
                >
                  <ExternalLink size={14} /> Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-neutral-200 hover:text-white"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
