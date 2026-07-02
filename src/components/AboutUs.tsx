import bryanImg from "../assets/bryan-senior-developer.jpeg";
import carlosImg from "../assets/carlos-ceo-partner.jpeg";
import clarianaImg from "../assets/clariana.jpg";
import edwinImg from "../assets/edwin-senior-developer.jpeg";
import hiranImg from "../assets/hiran.jfif";
import ivanImg from "../assets/ivan-general-manager.jpeg";
import jorgeImg from "../assets/jorge-ceo.jpeg";
import monicaImg from "../assets/Monica-ceo-partner.jpeg";
import rodrigoImg from "../assets/rodrigo.jpeg";
import sergioImg from "../assets/sergio1.jfif";
import ruanImg from "../assets/victor-ruan.jfif";
import { useLanguage } from "../context/LanguageContext";

const leaderImages = [
  { image: jorgeImg, imagePlacement: "object-center" },
  { image: carlosImg, imagePlacement: "object-center" },
  { image: sergioImg, imagePlacement: "object-center" },
  { image: monicaImg, imagePlacement: "object-center" },
  { image: ivanImg, imagePlacement: "object-center" },
];

const memberImages = [
  { image: clarianaImg, imagePlacement: "object-[center_55%]" },
  { image: ruanImg, imagePlacement: "object-center" },
  { image: bryanImg, imagePlacement: "object-center" },
  { image: edwinImg, imagePlacement: "object-center" },
  { image: rodrigoImg, imagePlacement: "object-center" },
  { image: hiranImg, imagePlacement: "object-center" },
];

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="gcg-shell reveal bg-transparent px-4 py-16 text-[#06315f] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 max-w-5xl sm:mb-14">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.about.eyebrow}</span>
          <h2 className="mt-5 max-w-4xl font-serif text-3xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl lg:text-6xl">{t.about.title}</h2>
          <p className="mt-5 max-w-4xl text-base leading-7 text-[#1f5f99] sm:mt-6 sm:text-lg sm:leading-8">{t.about.description}</p>
        </div>

        <div className="mb-6 flex flex-col gap-3 border-y border-[#0080ff]/15 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00e5ff]">{t.about.leadershipTitle}</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4478aa]">{t.about.leadershipIntro}</p>
          </div>
          <p className="font-mono text-sm text-[#4478aa]">05</p>
        </div>

        <div className="mx-auto grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {t.about.leaders.map((leader, index) => {
            const imageData = leaderImages[index];
            return (
              <article key={`${leader.name}-${leader.role}`} className={`gcg-card gcg-topline flex flex-col overflow-hidden rounded-[18px] lg:col-span-2 lg:min-h-[500px] ${index === 3 ? "lg:col-start-2" : ""}`}>
                <div className="relative h-60 shrink-0 overflow-hidden bg-[#0f1117] sm:h-72">
                  <img src={imageData.image} alt={leader.name} className={`h-full w-full object-cover grayscale-[12%] transition duration-700 group-hover:scale-105 ${imageData.imagePlacement}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-[#06315f]">{leader.name}</h3>
                  <p className="mt-2 text-sm font-bold text-[#00e5ff]">{leader.role}</p>
                  <p className="mt-4 text-sm leading-6 text-[#1f5f99]">{leader.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mb-6 mt-12 flex items-center justify-between border-y border-[#0080ff]/15 py-4 sm:mt-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4478aa]">{t.about.teamIntro}</p>
          <p className="font-mono text-sm text-[#4478aa]">06</p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.members.map((member, index) => {
            const imageData = memberImages[index];
            return (
              <article key={member.name} className={`gcg-card gcg-topline flex flex-col overflow-hidden rounded-[18px] lg:min-h-[480px] ${index === 4 ? "lg:col-start-2" : ""}`}>
                <div className="relative h-56 shrink-0 overflow-hidden bg-[#0f1117] sm:h-64">
                  <img src={imageData.image} alt={member.name} className={`h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 ${imageData.imagePlacement}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-[#06315f]">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold text-[#00e5ff]">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-[#1f5f99]">{member.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}










