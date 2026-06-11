const projects = [
  {
    id: 1,
    title: "Enterprise Resource Planning System",
    client: "Indústria Manufatureira — Manassas, VA",
    problem:
      "O cliente operava com planilhas descentralizadas e sem rastreabilidade de estoque em tempo real, gerando perda de receita e retrabalho operacional.",
    solution:
      "Desenvolvemos um ERP customizado com módulos de inventário, compras e relatórios financeiros integrados, substituindo processos manuais por automação orientada a dados.",
    results: ["Redução de 40% no tempo de fechamento mensal", "Rastreabilidade 100% em tempo real", "ROI atingido em 8 meses"],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    title: "Marketing Analytics Dashboard",
    client: "Agência de Marketing Digital — Remote",
    problem:
      "Dados de campanhas espalhados em múltiplas plataformas (Google Ads, Meta, HubSpot) sem visão unificada para tomada de decisão.",
    solution:
      "Construímos um dashboard centralizado com ingestão de dados via APIs das plataformas, normalização e visualização em tempo real com alertas configuráveis.",
    results: ["Consolidação de 6 fontes de dados em 1 interface", "Tempo de análise reduzido de 4h para 15 min", "Aumento de 25% no ROAS médio das campanhas"],
    stack: ["TypeScript", "React", "Python", "REST APIs"],
  },
  {
    id: 3,
    title: "Customer Portal — SaaS B2B",
    client: "Startup de Logística — Austin, TX",
    problem:
      "Ausência de portal self-service forçava o time de suporte a processar manualmente 100% das solicitações de clientes, criando gargalo operacional.",
    solution:
      "Entregamos um portal B2B completo com autenticação, gestão de contratos, rastreamento de pedidos e integração com o sistema legado via API REST.",
    results: ["70% das solicitações resolvidas sem intervenção humana", "NPS aumentou de 32 para 67 em 6 meses", "Escala de 200 para 1.200 clientes ativos"],
    stack: ["React", "TypeScript", "REST API", "JWT"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
          Case Studies
        </span>
        <h2 className="text-4xl font-bold mt-2 tracking-tight text-slate-900">
          Projetos & Resultados
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Cada projeto é uma prova de engenharia aplicada. Veja os desafios reais que resolvemos e os resultados mensuráveis que entregamos.
        </p>
      </div>

      {/* Cards de Case Study */}
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
          >
            {/* Lado esquerdo — contexto */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  Case #{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{project.client}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Problema
                  </p>
                  <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Solução
                  </p>
                  <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Lado direito — resultados */}
            <div className="bg-slate-900 p-8 flex flex-col justify-center">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
                Resultados Entregues
              </p>
              <ul className="flex flex-col gap-4">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span className="text-slate-200 leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
