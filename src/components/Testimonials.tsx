import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="reveal bg-[#07080c] px-5 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.testimonials.eyebrow}</span>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl">{t.testimonials.title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">{t.testimonials.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.testimonials.placeholders.map((placeholder) => (
            <article key={placeholder} className="gcg-card rounded-[18px] p-7">
              <p className="text-5xl font-serif text-[#00e5ff]">“</p>
              <p className="mt-8 text-base leading-8 text-slate-400">{placeholder}</p>
              <div className="mt-8 h-px bg-white/10" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Approved quote pending</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
