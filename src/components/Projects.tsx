const projects = [
  {
    title: "AI-Augmented SaaS Booking Platform",
    description:
      "Full-stack scheduling solution built with Next.js, Supabase, OpenAI API, and Stripe for secure payments.",
    accent: "from-sky-500 to-cyan-300",
    previews: ["SAAS", "SAAS1"],
    stack: ["Next", "React", "TS", "Tailwind", "Supabase", "SQL"],
  },
  {
    title: "Beepr: Native Migration & Geo-Commerce",
    description:
      "Mobile app built with React Native and Expo, PostGIS geolocation, and production Supabase Edge Functions.",
    accent: "from-pink-600 to-rose-400",
    previews: ["LOC-NOT", "CAPTURA-DE-TELA"],
    stack: ["RN", "Expo", "PostGIS", "Edge", "Maps", "API"],
    featured: true,
  },
  {
    title: "Happy-Kids Education Platform",
    description:
      "Educational platform focused on positive psychology, responsive UX, and Node.js/Express microservices.",
    accent: "from-blue-500 to-indigo-300",
    previews: ["LULU-HOME", "EMOTIONS-FEELINGS"],
    stack: ["React", "TS", "Vite", "Node", "SQL", "Express"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-5 py-20 text-white border-b border-slate-800 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-14 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="inline-block rounded-md border border-pink-500/30 bg-pink-500/10 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
              03 · Projects
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Featured Work
            </h2>
            <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-slate-400 sm:text-lg">
              A focused look at product builds, migrations, and software
              platforms delivered with modern web and mobile stacks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-0 flex-col rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 sm:p-7 lg:min-h-140"
            >
              {project.featured ? (
                <div
                  className={`relative -mx-5 -mt-5 mb-6 flex h-40 items-center justify-center overflow-hidden rounded-t-3xl bg-linear-to-br sm:-mx-7 sm:-mt-7 sm:h-52 ${project.accent}`}
                >
                  <div className="absolute h-72 w-72 rounded-full border-4 border-pink-300/40" />
                  <div className="absolute h-56 w-56 rounded-full border-4 border-pink-300/40" />
                  <div className="absolute h-40 w-40 rounded-full border-4 border-pink-300/40" />
                  <span className="relative text-5xl font-black tracking-tighter text-pink-300 sm:text-7xl">
                    beepr
                  </span>
                </div>
              ) : null}

              {!project.featured ? (
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {project.previews.map((preview) => (
                    <div
                      key={preview}
                      className="flex h-28 flex-col justify-end overflow-hidden rounded-lg border border-slate-700 bg-slate-100 p-3 sm:h-32"
                    >
                      <div
                        className={`mb-auto h-16 rounded-md bg-linear-to-br ${project.accent} opacity-80`}
                      />
                      <span className="mt-3 text-center font-mono text-[10px] font-bold uppercase tracking-wide text-cyan-300">
                        {preview}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}

              <h3 className="text-center text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
                {project.title}
              </h3>

              <p className="mx-auto mt-5 max-w-sm text-center text-sm leading-relaxed text-slate-200 sm:text-base">
                {project.description}
              </p>

              <div className="mt-8 border-t border-slate-700 pt-6">
                <div className="flex flex-wrap justify-center gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="flex h-12 min-w-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-800 px-3 text-sm font-bold text-cyan-300 transition-colors duration-200 group-hover:border-cyan-300/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
