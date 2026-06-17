export default function Introduction() {
  const metrics = [
    { value: "18+", label: "Years of Engineering Governance" },
    { value: "100%", label: "Agile Compliance & Velocity" },
    { value: "50k+", label: "Audited Production Hours" },
  ];

  return (
    <section id="introduction" className="py-20 px-5 sm:px-8 sm:py-24 md:px-16 md:py-32 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-950 relative overflow-hidden w-full">
      
      {/* Luzes de fundo corporativas e grid técnico expandido */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[5rem] opacity-25 z-0" />
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none z-0 md:h-150 md:w-150 md:blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-sky-500/5 blur-[90px] pointer-events-none z-0 md:h-100 md:w-100 md:blur-[130px]" />

      {/* Container expandido para tomar as laterais da tela */}
      <div className="max-w-360 mx-auto relative z-10 w-full">
        
        {/* 1. SEÇÃO PRINCIPAL — MANIFESTO IMPACTANTE DE LARGURA TOTAL */}
        <div className="w-full text-left mb-16 md:mb-24">
          <div className="mb-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-950/80 border border-indigo-500/30 px-3 py-1.5 rounded-md shadow-inner inline-block">
              01 · Introduction
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05] w-full max-w-6xl">
            Galindo Consulting <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-neutral-100 via-indigo-200 to-slate-500">
              Group Inc.
            </span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8 lg:gap-10 mt-10 pt-10 border-t border-slate-800/40 items-start">
            <p className="text-xl sm:text-2xl font-mono text-indigo-400 font-semibold uppercase tracking-wider leading-tight">
              Real Management. <br />
              Real Coding. <br />
              Real People.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-4xl border-l-2 border-indigo-500 pl-5 md:pl-8">
              Since 2007, we have engineered high-availability software architectures and implemented sophisticated agile project governance for businesses that demand zero operational friction.
            </p>
          </div>
        </div>

        {/* 2. METRICS — DESIGN CRIATIVO EM LAYOUT DE CARDS VAZADOS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-16 md:mb-24">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label} 
              className="relative flex flex-col p-6 md:p-8 bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-800/60 group hover:border-indigo-500/40 transition-all duration-300 shadow-lg"
            >
              {/* Identificador minúsculo de blueprint */}
              <span className="absolute top-4 right-6 text-[10px] font-mono text-slate-600 group-hover:text-indigo-400 transition-colors duration-300">
                // SYS_METRIC_0{index + 1}
              </span>
              <span className="text-5xl md:text-7xl font-black tracking-tighter text-white font-mono transition-transform duration-300 group-hover:translate-x-2 block">
                {metric.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-bold mt-4 block border-t border-slate-800/60 pt-4">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3. PHILOSOPHY & EXECUTIVE LEADERSHIP */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1.5fr] gap-12 lg:gap-20 items-stretch w-full">
          <div className="flex flex-col justify-center gap-6 p-6 md:p-8 bg-slate-950/40 rounded-2xl border border-slate-800/40">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-mono text-indigo-400">
              Our Operational Thesis
            </h3>
            <p className="text-slate-400 leading-relaxed text-base sm:text-lg font-light">
              We operate under a strict execution model where elite front-end engineering and modular backend stability must meet radical project transparency. We specialize in mitigating architectural drift, turning complex technical debt into clean, predictable delivery vectors that align directly with shareholder expectations.
            </p>
          </div>

          {/* LEADERSHIP BRAND BLOCK */}
          <div className="p-6 md:p-10 bg-linear-to-br from-slate-900 to-indigo-950/40 rounded-2xl border border-indigo-950/80 backdrop-blur-md shadow-2xl relative flex flex-col justify-between group hover:border-indigo-500/30 transition-all duration-300">
            <div className="absolute top-0 right-12 w-24 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 block mb-3 font-bold">
                Executive Governance
              </span>
              <h4 className="text-xl font-bold text-slate-100 tracking-tight leading-snug">
                Technical Direction & Global Portfolio Strategy
              </h4>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800/60">
              <p className="text-slate-400 text-sm leading-relaxed italic font-light relative">
                <span className="text-3xl text-indigo-500 font-serif absolute -top-4 -left-2 opacity-30">“</span>
                Ensuring that every compiled repository, every cloud infrastructure deployment, and every iterative sprint velocity matches the rigorous compliance standards our corporate clients command.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
