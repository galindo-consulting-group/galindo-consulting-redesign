import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-slate-50 px-5 py-20 sm:px-6 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
              {t.services.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            {t.services.intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <article
              key={service.title}
              className="border-b border-slate-200 px-0 py-8 md:px-6 lg:min-h-[270px] lg:border-r lg:last:border-r-0"
            >
              <span className="font-mono text-sm text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-lg bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-2xl font-black leading-snug">{t.services.ctaTitle}</p>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition-colors hover:bg-sky-100"
          >
            {t.services.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
