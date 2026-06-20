import { useLanguage } from "../context/LanguageContext";

const projectVisuals = [
  {
    accent: "from-sky-500 to-cyan-300",
    previews: ["Scheduling", "Payments"],
    stack: ["Next", "React", "TS", "Supabase", "Stripe", "AI"],
  },
  {
    accent: "from-pink-600 to-rose-400",
    previews: ["Geo", "Mobile"],
    stack: ["RN", "Expo", "PostGIS", "Edge", "Maps", "API"],
    featured: true,
  },
  {
    accent: "from-blue-500 to-indigo-300",
    previews: ["Learning", "Services"],
    stack: ["React", "Vite", "Node", "SQL", "Express", "UX"],
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-slate-950 px-5 py-20 text-white sm:px-6 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <span className="inline-flex w-fit rounded-full border border-pink-300/25 bg-pink-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-200">
            {t.projects.eyebrow}
          </span>
          <div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              {t.projects.title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
              {t.projects.description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.projects.items.map((project, index) => {
            const visual = projectVisuals[index];

            return (
              <article
                key={project.title}
                className="group flex min-h-[520px] flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40"
              >
                <div className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${visual.accent} p-5`}>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                  {visual.featured ? (
                    <span className="relative text-6xl font-black tracking-tighter text-white/80">
                      beepr
                    </span>
                  ) : (
                    <div className="relative grid w-full grid-cols-2 gap-3">
                      {visual.previews.map((preview) => (
                        <div key={preview} className="rounded-md border border-white/30 bg-white/20 p-4 backdrop-blur">
                          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-white">
                            {preview}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-sm text-slate-500">0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap gap-2">
                      {visual.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-bold text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
