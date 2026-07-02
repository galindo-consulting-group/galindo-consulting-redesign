import { useLanguage } from "../context/LanguageContext";

export default function Results() {
  const { t } = useLanguage();

  return (
    <section id="results" className="reveal bg-transparent px-4 py-16 text-[#06315f] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
            {t.results.eyebrow}
          </span>
          <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">
            {t.results.title}
          </h2>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {t.results.items.map((result, index) => (
            <article
              key={result.title}
              className="gcg-card gcg-topline flex flex-col rounded-[18px] p-5 sm:p-6 lg:min-h-[320px]"
            >
              <span className="font-mono text-sm font-bold text-[#00e5ff]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-2xl font-normal leading-tight text-[#06315f]">
                {result.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#1f5f99]">
                {result.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



