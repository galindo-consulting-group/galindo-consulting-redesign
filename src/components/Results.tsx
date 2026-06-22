import { useLanguage } from "../context/LanguageContext";

export default function Results() {
  const { t } = useLanguage();

  return (
    <section id="results" className="reveal bg-[#07080c] px-5 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
            {t.results.eyebrow}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl">
            {t.results.title}
          </h2>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {t.results.items.map((result, index) => (
            <article
              key={result.title}
              className="gcg-card gcg-topline flex min-h-[320px] flex-col rounded-[18px] p-6"
            >
              <span className="font-mono text-sm font-bold text-[#00e5ff]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-2xl font-normal leading-tight text-white">
                {result.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                {result.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
