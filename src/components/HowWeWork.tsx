import { useLanguage } from "../context/LanguageContext";

export default function HowWeWork() {
  const { t } = useLanguage();

  return (
    <section className="reveal bg-[#07080c] px-5 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.howWeWork.eyebrow}</span>
        <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl">{t.howWeWork.title}</h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.howWeWork.items.map((step, index) => (
            <article key={step.title} className="gcg-card gcg-topline rounded-[18px] p-6">
              <span className="font-mono text-sm font-bold text-[#00e5ff]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-serif text-2xl font-normal leading-tight text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
