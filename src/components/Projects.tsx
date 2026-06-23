import capturaImg from "../assets/Captura de tela 2026-04-26 221559.png";
import emotionsImg from "../assets/emotions-feelings.png";
import saasImg from "../assets/saas.png";
import { useLanguage } from "../context/LanguageContext";

const projectVisuals = [
  { image: saasImg, label: "SaaS", stack: ["Scheduling", "AI", "Workforce", "Payments", "Automation", "Cloud"] },
  { image: capturaImg, label: "Mobile", stack: ["React Native", "Commerce", "Geo", "API", "UX", "Scale"] },
  { image: emotionsImg, label: "Education", stack: ["React", "Subscription", "Learning", "Content", "UX", "Node"] },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="reveal bg-transparent px-5 py-24 text-[#06315f] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.projects.eyebrow}</span>
          <div>
            <h2 className="max-w-4xl font-serif text-4xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">{t.projects.title}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#1f5f99]">{t.projects.description}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.projects.items.map((project, index) => {
            const visual = projectVisuals[index];
            return (
              <article key={project.title} className="gcg-card gcg-topline flex min-h-[640px] flex-col overflow-hidden rounded-[18px]">
                <div className="relative h-72 overflow-hidden bg-[#0f1117]">
                  <img src={visual.image} alt={project.title} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-[#07080c]/20 to-transparent" />
                  <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/40 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    {visual.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-sm text-[#4478aa]">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-tight text-[#06315f]">{project.title}</h3>
                  <p className="mt-5 text-base leading-7 text-[#1f5f99]">{project.description}</p>
                  <p className="mt-5 rounded-2xl border border-[#00e5ff]/20 bg-[#00e5ff]/10 p-4 text-sm font-bold leading-6 text-[#8beeff]">{project.outcome}</p>
                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap gap-2">
                      {visual.stack.map((tech) => (
                        <span key={tech} className="gcg-pill rounded-full px-3 py-1.5 text-xs font-bold">{tech}</span>
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




