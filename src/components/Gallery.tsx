import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="reveal bg-[#0f1117] px-5 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.gallery.eyebrow}</span>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl">{t.gallery.title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">{t.gallery.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.gallery.placeholders.map((item, index) => (
            <div key={item} className="gcg-card flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-[18px] bg-gradient-to-br from-[#00e5ff]/20 via-[#7c3aed]/15 to-white/[0.03] p-6">
              <span className="font-mono text-sm font-bold text-[#00e5ff]">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 font-serif text-2xl font-normal text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
