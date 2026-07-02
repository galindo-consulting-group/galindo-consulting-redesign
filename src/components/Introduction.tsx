import heroImg from "../assets/hero.png";
import { useLanguage } from "../context/LanguageContext";

const marqueeItems = [
  "React",
  "TypeScript",
  "Supabase",
  "API Integration",
  "SaaS Architecture",
  "Product Strategy",
  "Analytics",
  "Automation",
];

export default function Introduction() {
  const { t } = useLanguage();
  const loopedItems = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <section id="introduction" className="gcg-shell bg-transparent px-4 pb-14 pt-20 text-[#06315f] sm:px-5 sm:pb-16 sm:pt-24 md:px-6 md:pt-28 lg:px-10">
        <div className="relative z-10 mx-auto grid min-h-[auto] max-w-7xl grid-cols-1 items-center gap-10 md:gap-12 lg:min-h-[760px] lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span className="gcg-kicker gcg-fade-up gcg-fade-delay-1 text-xs font-bold uppercase tracking-[0.2em]">
              {t.introduction.eyebrow}
            </span>

            <div className="gcg-fade-up gcg-fade-delay-2 mt-10 max-w-xl md:mt-14" aria-label="Galindo Consulting Group">
              <h1 className="relative inline-flex w-full max-w-[18rem] flex-col items-start leading-none text-[#06315f] md:max-w-none">
                <span className="pointer-events-none absolute -left-5 -top-3 h-16 w-[17rem] rotate-[-2deg] rounded-[50%] border-[6px] border-[#35dfff] border-b-transparent shadow-[0_0_24px_rgba(0,229,255,0.28)] md:-left-10 md:-top-6 md:h-28 md:w-[430px] md:border-[7px] lg:h-32 lg:w-[500px]" />
                <span className="relative z-10 font-serif text-[4rem] font-normal italic tracking-[-0.06em] text-[#06315f] drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] md:text-8xl lg:text-9xl">
                  Galindo
                </span>
                <span className="relative z-10 ml-3 mt-1 text-[0.9rem] font-bold tracking-[0.02em] text-[#06315f] md:ml-12 md:text-3xl md:tracking-[0.04em] lg:ml-16 lg:text-4xl">
                  Consulting Group
                </span>
              </h1>
            </div>

            <p className="gcg-fade-up gcg-fade-delay-3 mt-6 max-w-2xl text-lg font-semibold leading-snug text-[#0080ff] md:mt-7 md:text-2xl">
              {t.introduction.subtitle}
            </p>

            <div className="gcg-fade-up gcg-fade-delay-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0080ff] px-6 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[#006edb] hover:shadow-[0_10px_34px_rgba(0,128,255,0.24)]"
              >
                {t.introduction.primaryCta}
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#0080ff]/15 px-6 text-sm font-bold uppercase tracking-[0.1em] text-[#06315f] transition hover:-translate-y-0.5 hover:border-[#00e5ff] hover:text-[#0080ff]"
              >
                {t.introduction.secondaryCta}
              </a>
            </div>

            <div className="gcg-fade-up gcg-fade-delay-4 mt-6 max-w-3xl rounded-2xl border border-[#0080ff]/12 bg-white/80 p-4 shadow-[0_18px_54px_rgba(0,0,0,0.24)] backdrop-blur md:p-5">
              <p className="font-mono text-sm font-black uppercase tracking-[0.16em] text-[#06315f] sm:text-base">
                {t.introduction.statsLine}
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[#0080ff] sm:text-base">
                {t.introduction.sectorsLine}
              </p>
            </div>
          </div>

          <div className="gcg-fade-up gcg-fade-delay-3 relative">
            <div className="relative mx-auto max-w-xl rounded-[34px] bg-gradient-to-br from-[#0080ff]/65 via-[#bfe2ff]/85 to-white p-[2px] shadow-[0_28px_80px_rgba(0,86,170,0.22)]">
              <div className="relative overflow-hidden rounded-[32px] bg-[#eef7ff]">
                <img src={heroImg} alt="Galindo Consulting Group" className="aspect-[4/5] w-full object-cover object-center opacity-80 saturate-[0.75]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff]/22 via-white/12 to-[#0080ff]/34 mix-blend-screen" />
                <div className="absolute inset-x-[2px] bottom-[2px] h-1/3 rounded-b-[32px] bg-gradient-to-t from-[#0080ff]/28 to-transparent" />
              </div>
            </div>

            <div className="absolute -left-3 bottom-10 hidden rounded-2xl border border-[#0080ff]/18 bg-white/92 px-5 py-4 text-[#06315f] shadow-[0_18px_44px_rgba(0,86,170,0.2)] backdrop-blur lg:block">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1f5f99]">Since</p>
              <p className="mt-1 text-2xl font-black text-[#0080ff]">2007</p>
              <p className="text-xs text-[#1f5f99]">software delivery</p>
            </div>

            <div className="absolute -right-3 top-10 hidden rounded-2xl border border-[#0080ff]/18 bg-white/92 px-5 py-4 text-[#06315f] shadow-[0_18px_44px_rgba(0,86,170,0.2)] backdrop-blur lg:block">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1f5f99]">Delivery</p>
              <p className="mt-1 text-2xl font-black text-[#0080ff]">Senior</p>
              <p className="text-xs text-[#1f5f99]">SaaS, AI & enterprise</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 border-t border-[#0080ff]/15 pt-8 md:pt-10 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className="font-serif text-2xl font-normal leading-tight text-[#06315f] md:text-4xl">
            {t.introduction.thesisTitle}
          </h2>
          <div>
            <p className="text-base leading-7 text-[#1f5f99] md:text-lg md:leading-8">{t.introduction.thesis}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.introduction.proofPoints.map((point) => (
                <span key={point} className="gcg-pill rounded-full px-4 py-2 text-sm font-bold">
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gcg-marquee py-4 md:py-5">
        <div className="gcg-marquee-track gap-8 px-4 md:gap-12 md:px-6">
          {loopedItems.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#4478aa]">
              <span className="h-1 w-1 rounded-full bg-[#00e5ff]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}








