import { useLanguage } from "../context/LanguageContext";

export default function IndustryFocus() {
  const { t } = useLanguage();

  return (
    <section className="reveal bg-transparent px-4 py-16 text-[#06315f] sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.industries.eyebrow}</span>
        <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">{t.industries.title}</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {t.industries.items.map((industry) => (
            <div key={industry} className="gcg-card flex min-h-28 items-center justify-center rounded-[18px] p-5 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-[#8beeff]">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



