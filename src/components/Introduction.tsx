import { useLanguage } from "../context/LanguageContext";

export default function Introduction() {
  const { t } = useLanguage();

  return (
    <section
      id="introduction"
      className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-24 text-white sm:px-6 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid min-h-[620px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex rounded-full border border-indigo-300/25 bg-indigo-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">
              {t.introduction.eyebrow}
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t.introduction.title}
            </h1>

            <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug text-sky-100 sm:text-3xl">
              {t.introduction.subtitle}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.introduction.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition-colors hover:bg-sky-100"
              >
                {t.introduction.primaryCta}
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                {t.introduction.secondaryCta}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {t.introduction.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur"
              >
                <span className="block font-mono text-5xl font-black tracking-tight text-white sm:text-6xl">
                  {metric.value}
                </span>
                <span className="mt-3 block text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              {t.introduction.thesisTitle}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-300">{t.introduction.thesis}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.introduction.proofPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
