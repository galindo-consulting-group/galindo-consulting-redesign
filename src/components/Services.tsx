import { useLanguage } from "../context/LanguageContext";

const serviceMarks = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="reveal bg-transparent px-5 py-24 text-[#06315f] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
              {t.services.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#1f5f99] lg:justify-self-end">
            {t.services.intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <article key={service.title} className="gcg-card gcg-topline rounded-[18px] p-7">
              <span className="font-mono text-sm font-bold text-[#00e5ff]">
                {serviceMarks[index]}
              </span>
              <h3 className="mt-6 font-serif text-2xl font-normal leading-tight text-[#06315f]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#1f5f99]">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="gcg-card mt-12 flex flex-col gap-5 rounded-[18px] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="font-serif text-3xl font-normal leading-snug text-[#06315f]">{t.services.ctaTitle}</p>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-extrabold uppercase tracking-[0.1em] text-[#0080ff] transition hover:-translate-y-0.5 hover:bg-[#eaf5ff]"
          >
            {t.services.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}




