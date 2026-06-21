import { useLanguage } from "../context/LanguageContext";

const projectVisuals = [
  {
    label: "SAAS",
    previews: ["SAAS", "SAAS1"],
    stack: ["Next", "React", "TS", "Supabase", "Stripe", "AI"],
    color: "from-cyan-300 via-sky-500 to-indigo-500",
    mode: "dashboard",
  },
  {
    label: "beepr",
    previews: ["LOC-NOT", "CAPTURA-DE-TELA"],
    stack: ["RN", "Expo", "PostGIS", "Edge", "Maps", "API"],
    color: "from-pink-500 via-rose-500 to-orange-300",
    mode: "mobile",
  },
  {
    label: "KIDS",
    previews: ["LULU-HOME", "EMOTIONS-FEELINGS"],
    stack: ["React", "Vite", "Node", "SQL", "Express", "UX"],
    color: "from-blue-400 via-indigo-500 to-violet-500",
    mode: "learning",
  },
];

type ProjectVisual = (typeof projectVisuals)[number];

function ProjectMockup({ visual }: { visual: ProjectVisual }) {
  if (visual.mode === "mobile") {
    return (
      <div className={`relative min-h-[250px] overflow-hidden rounded-2xl bg-gradient-to-br ${visual.color} p-5`}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
        <div className="relative mx-auto h-56 w-32 rounded-[2rem] border-4 border-slate-950/70 bg-slate-950 shadow-2xl">
          <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-white/25" />
          <div className="mx-3 mt-5 h-12 rounded-2xl bg-white/15" />
          <div className="mx-3 mt-3 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-xl bg-white/20" />
            <div className="h-16 rounded-xl bg-white/10" />
          </div>
          <div className="mx-3 mt-3 h-16 rounded-xl bg-white/15" />
        </div>
        <span className="absolute bottom-5 left-5 font-serif text-5xl font-black tracking-tighter text-white/80">
          {visual.label}
        </span>
      </div>
    );
  }

  if (visual.mode === "learning") {
    return (
      <div className={`relative min-h-[250px] overflow-hidden rounded-2xl bg-gradient-to-br ${visual.color} p-5`}>
        <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/35" />
        <div className="absolute right-12 top-12 h-12 w-12 rounded-full bg-white/20" />
        <div className="relative grid h-full grid-cols-2 gap-3">
          {visual.previews.map((preview, index) => (
            <div key={preview} className="flex min-h-[190px] flex-col justify-end rounded-2xl border border-white/25 bg-white/18 p-4 shadow-xl backdrop-blur-sm">
              <div className={`mb-auto rounded-xl bg-white/20 ${index === 0 ? "h-20" : "h-28"}`} />
              <p className="mt-4 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-white">
                {preview}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-[250px] overflow-hidden rounded-2xl bg-gradient-to-br ${visual.color} p-5`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_16rem)]" />
      <div className="relative rounded-2xl border border-white/25 bg-slate-950/60 p-3 shadow-2xl backdrop-blur">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="grid grid-cols-[0.65fr_1fr] gap-3">
          <div className="space-y-2">
            <div className="h-8 rounded-lg bg-white/16" />
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-20 rounded-lg bg-white/14" />
          </div>
          <div className="space-y-3">
            <div className="h-20 rounded-xl bg-white/18" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 rounded-xl bg-white/12" />
              <div className="h-20 rounded-xl bg-white/12" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-4 grid grid-cols-2 gap-3">
        {visual.previews.map((preview) => (
          <p key={preview} className="rounded-full border border-white/25 bg-white/15 px-3 py-2 text-center font-mono text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
            {preview}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="reveal bg-[#0f1117] px-5 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
            {t.projects.eyebrow}
          </span>
          <div>
            <h2 className="max-w-4xl font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl">
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
              <article key={project.title} className="gcg-card gcg-topline flex min-h-[640px] flex-col rounded-[18px] p-5">
                <ProjectMockup visual={visual} />

                <div className="flex flex-1 flex-col p-1 pt-7">
                  <p className="font-mono text-sm text-slate-500">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap gap-2">
                      {visual.stack.map((tech) => (
                        <span key={tech} className="gcg-pill rounded-full px-3 py-1.5 text-xs font-bold">
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
