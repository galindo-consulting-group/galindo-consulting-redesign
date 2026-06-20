import clarianaImg from "../assets/clariana.jpg";
import hiranImg from "../assets/hiran.jfif";
import rodrigoImg from "../assets/rodrigo.jpeg";
import sergioImg from "../assets/sergio.jpeg";
import ruanImg from "../assets/victor-ruan.jfif";
import { useLanguage } from "../context/LanguageContext";

const memberImages = [
  { image: sergioImg, imagePlacement: "object-center" },
  { image: clarianaImg, imagePlacement: "object-[center_55%]" },
  { image: ruanImg, imagePlacement: "object-center" },
  { image: rodrigoImg, imagePlacement: "object-center" },
  { image: hiranImg, imagePlacement: "object-center" },
];

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-slate-900 px-5 py-20 text-slate-100 sm:px-6 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-5xl">
          <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.about.title}
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            {t.about.description}
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between border-y border-slate-700/70 py-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
            {t.about.teamIntro}
          </p>
          <p className="font-mono text-sm text-slate-500">05</p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.about.members.map((member, index) => {
            const imageData = memberImages[index];

            return (
              <article
                key={member.name}
                className="group flex min-h-[520px] flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/50"
              >
                <div className="relative h-72 shrink-0 overflow-hidden bg-slate-800">
                  <img
                    src={imageData.image}
                    alt={member.name}
                    className={`h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 ${imageData.imagePlacement}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-2xl font-black leading-tight tracking-tight text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-indigo-300">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{member.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
