export default function Introduction() {
  const metrics = [
    { value: "18+", label: "Years of Engineering Governance" },
    { value: "100%", label: "Agile Compliance & Velocity" },
    { value: "50k+", label: "Audited Production Hours" },
  ];

  return (
    <section id="introduction" className="py-28 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white border-b border-slate-800/60 relative overflow-hidden">
      {/* Subtle architectural grid glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 1. SECTION HEADER — LEFT ALIGNED EDITORIAL STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mb-24 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-3 py-1.5 rounded-md font-mono inline-block">
              01 · Introduction
            </span>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none mb-6">
              Galindo Consulting <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-indigo-200 to-slate-400">
                Group Inc.
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Real Management. Real Coding. Real People. <br />
              <span className="text-slate-400 block mt-4 text-lg font-normal border-l-2 border-indigo-500 pl-4">
                Since 2007, we have engineered high-availability software architectures and implemented sophisticated agile project governance for businesses that demand zero operational friction.
              </span>
            </p>
          </div>
        </div>

        {/* 2. METRICS GRID — MONO ARCHITECTURE WITH SUBTLE HOVER GLOW */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-8 py-14 border-t border-b border-slate-800/80 mb-24">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-2 group">
              <span className="text-6xl font-black tracking-tighter text-white font-mono transition-transform duration-300 group-hover:translate-x-1">
                {metric.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-indigo-300 font-mono font-bold">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3. PHILOSOPHY & EXECUTIVE LEADERSHIP */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr] gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-slate-200">
              Our Operational Thesis
            </h3>
            <p className="text-slate-400 leading-relaxed text-base font-light">
              We operate under a strict execution model where elite front-end engineering and modular backend stability must meet radical project transparency. We specialize in mitigating architectural drift, turning complex technical debt into clean, predictable delivery vectors that align directly with shareholder expectations.
            </p>
          </div>

          {/* LEADERSHIP BRAND BLOCK */}
          <div className="p-8 bg-slate-900/50 rounded-2xl border border-indigo-950 backdrop-blur-md shadow-2xl relative group hover:border-indigo-900 transition-colors duration-300">
            <div className="absolute top-0 right-8 w-16 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 block mb-2 font-bold">
              Executive Governance
            </span>
            <h4 className="text-base font-bold text-slate-100 leading-snug">
              Technical Direction & Global Portfolio Strategy
            </h4>
            
            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <p className="text-slate-400 text-sm leading-relaxed italic font-light">
                "Ensuring that every compiled repository, every cloud infrastructure deployment, and every iterative sprint velocity matches the rigorous compliance standards our corporate clients command."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}