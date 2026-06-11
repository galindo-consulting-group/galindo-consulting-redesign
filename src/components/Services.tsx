const services = [
  {
    title: "UI/UX Design",
    description:
      "Interfaces projetadas com foco em usabilidade, acessibilidade e conversão. Do wireframe ao protótipo navegável, garantimos experiências que os usuários entendem na primeira interação.",
  },
  {
    title: "Project Collaboration",
    description:
      "Gestão ágil de projetos com sprints definidos, backlog priorizado e comunicação transparente. Integramos ao time do cliente ou assumimos a coordenação completa do projeto.",
  },
  {
    title: "Marketing Strategy",
    description:
      "Estratégias orientadas a dados que conectam produto e audiência. Cobertura de funil completo: posicionamento, growth, e análise de performance de campanhas.",
  },
  {
    title: "API Integration",
    description:
      "Conectamos sistemas legados, plataformas SaaS e serviços externos via REST e GraphQL. Arquitetamos integrações robustas com autenticação, rate limiting e tratamento de falhas.",
  },
  {
    title: "Custom Software Development",
    description:
      "Desenvolvimento sob medida para problemas que ferramentas prontas não resolvem. Desde MVPs até sistemas enterprise, entregamos código escalável, testável e documentado.",
  },
  {
    title: "SEO & Analytics",
    description:
      "Otimização técnica de SEO combinada com instrumentação analítica. Implementamos rastreamento de eventos, dashboards e relatórios que transformam tráfego em decisões.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
          O que fazemos
        </span>
        <h2 className="text-4xl font-bold mt-2 tracking-tight text-slate-900">
          Nossas Competências
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Soluções integradas de engenharia e estratégia para fundadores e corporações que precisam de resultados reais, não de promessas.
        </p>
      </div>

      {/* Grid de Serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {service.title}
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-slate-900 rounded-2xl p-10">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Pronto para escalar seu produto?
        </h3>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto">
          Fale com nosso time técnico e descubra como podemos transformar seu desafio em solução entregável.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200"
        >
          Falar com a Galindo
        </a>
      </div>
    </section>
  );
}
