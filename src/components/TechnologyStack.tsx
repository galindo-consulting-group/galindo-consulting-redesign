import { useLanguage } from "../context/LanguageContext";

export default function TechnologyStack() {
  const { t } = useLanguage();

  return (
    <section className="reveal bg-[#0f1117] px-5 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.technology.eyebrow}</span>
        <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl">{t.technology.title}</h2>
        <div className="gcg-card mt-10 flex flex-wrap justify-center gap-3 rounded-[18px] p-6">
          {t.technology.items.map((tech) => (
            <span key={tech} className="gcg-pill rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
