export default function AboutUs() {
  const team = [
    {
      name: "Sergio Pereyra",
      role: "Engineering Manager & CTO",
      initials: "SP",
      description: "Responsible for global portfolio management, engineering governance, and technical alignment across all corporate client applications.",
    },
    {
      name: "Clariana Abreu",
      role: "Lead Developer & Senior Full-Stack Engineer",
      initials: "CA",
      description: "Oversees core software architecture, manages scalable technical documentation, and leads end-to-end full-stack execution.",
    },
    {
      name: "Ruan Victor",
      role: "Senior Developer",
      initials: "RV",
      description: "Specializes in modern front-end infrastructure, reactive data layer integrations, and cross-platform native performance.",
    },
    {
      name: "Rodrigo Schidmit",
      role: "Junior Developer",
      initials: "RS",
      description: "Handles responsive feature implementation, isolated system component building, and continuous technical testing.",
    },
    {
      name: "Hiran Henriques",
      role: "Junior Developer",
      initials: "HH",
      description: "Focuses on robust API consumption layer setup, UI interaction logic, and clean semantic code compliance.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-sky-50 to-white text-slate-700 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mb-16 items-start">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 px-2.5 py-1 rounded">
              02 · Executive Team
            </span>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              The Operators
            </h2>
            <p className="text-lg text-slate-500 font-light mt-2">
              The core engineering minds driving our development cycles and systems delivery.
            </p>
          </div>
        </div>

        {/* TEAM GRID — LADO A LADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="group flex flex-col p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-sky-100/60 transition-all duration-200 hover:bg-white hover:shadow-md hover:border-blue-200"
            >
              {/* TOP ROW: INDEX & AVATAR */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-400">
                  {String(index + 1).padStart(2, "0")} ·
                </span>
                
                <div className="w-12 h-12 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-200">
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-600">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* NAME & ROLE */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-slate-400 block mt-1">
                  {member.role}
                </span>
              </div>

              {/* TECHNICAL DESCRIPTION */}
              <p className="text-slate-500 text-sm leading-relaxed font-light mt-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}