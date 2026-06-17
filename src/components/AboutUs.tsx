import clarianaImg from "../assets/clariana.jpg";
import hiranImg from "../assets/hiran.jfif";
import rodrigoImg from "../assets/rodrigo.jpeg";
import sergioImg from "../assets/sergio.jpeg";
import ruanImg from "../assets/victor-ruan.jfif";

export default function AboutUs() {
  const team = [
    {
      name: "Sergio Pereyra",
      role: "Engineering Manager & CTO",
      initials: "SP",
      image: sergioImg,
      imagePlacement: "object-center",
      description: "Responsible for global portfolio management, engineering governance, and technical alignment across all corporate client applications.",
    },
    {
      name: "Clariana Abreu",
      role: "Product Manager & Lead Product Engineer",
      initials: "CA",
      image: clarianaImg,
      imagePlacement: "object-[center_55%]", 
      description: "Bridges the gap between engineering execution and product strategy (GTM). Architect of multi-tenant SaaS platforms, robust security architectures using PostgreSQL RLS, and production-grade RAG pipelines.",
    },
    {
      name: "Ruan Victor",
      role: "Senior Developer",
      initials: "RV",
      image: ruanImg,
      imagePlacement: "object-center",
      description: "Specializes in modern front-end infrastructure, reactive data layer integrations, and cross-platform native performance.",
    },
    {
      name: "Rodrigo Schidmit",
      role: "Junior Developer",
      initials: "RS",
      image: rodrigoImg,
      imagePlacement: "object-center",
      description: "Handles responsive feature implementation, isolated system component building, and continuous technical testing.",
    },
    {
      name: "Hiran Henriques",
      role: "Junior Developer",
      initials: "HH",
      image: hiranImg,
      imagePlacement: "object-center",
      description: "Focuses on robust API consumption layer setup, UI interaction logic, and clean semantic code compliance.",
    },
  ];

  return (
    <section id="about" className="py-20 px-5 sm:px-8 md:px-16 md:py-24 bg-slate-900 text-slate-300 border-b border-slate-950">
      <div className="max-w-[90rem] mx-auto">
        
        {/* TEXTO DE INTRODUÇÃO MAIS LARGO */}
        <div className="w-full mb-14 text-left md:mb-20">
          <div className="mb-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-950/80 border border-indigo-500/30 px-3 py-1.5 rounded-md shadow-inner inline-block">
              Who We Are
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white block w-full">
            We build architecture that survives production chaos.
          </h2>
          
          {/* max-w-6xl expande a linha horizontal do parágrafo */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed w-full max-w-6xl mt-6">
            We design, build, and stabilize scalable software infrastructure for international startups and global SaaS environments. Moving beyond standard feature coding, we engineer solutions centered on data security, absolute uptime, and strategic product alignment.
          </p>
        </div>

        {/* GRID RESTAURADO: 3 EM CIMA, RESTANTE EM BAIXO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="group relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-2xl bg-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[460px] lg:min-h-[500px]"
            >
              {/* IMAGEM DE FUNDO */}
              <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-slate-950">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${member.imagePlacement}`}
                  />
                ) : (
                  <span className="text-2xl font-mono font-bold tracking-widest text-slate-700">
                    {member.initials}
                  </span>
                )}
              </div>

              {/* INDEX FLUTUANTE */}
              <span className="absolute top-5 left-5 z-20 text-[10px] font-mono bg-slate-950/50 border border-slate-800/30 text-slate-400 px-2 py-0.5 rounded-md backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* GRADIENTE */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent/10" />

              {/* CONTEÚDO */}
              <div className="relative z-20 mt-auto flex flex-col gap-3 p-6 text-left md:p-8">
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-indigo-300 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <span className="text-xs font-mono text-indigo-400 block mt-1 font-semibold">
                    {member.role}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {member.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
