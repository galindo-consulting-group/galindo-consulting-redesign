export default function AboutUs() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white text-slate-900">
      {/* 1. Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Quem Somos</span>
        <h2 className="text-4xl font-bold mt-2 tracking-tight">Galindo Consulting Group Inc.</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Real Management. Real Coding. Real People. Entregando soluções certificadas de desenvolvimento e gestão ágil de projetos desde 2007.
        </p>
      </div>

      {/* 2. Grid de Métricas (Conquistas) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-4xl font-extrabold text-blue-600">18+</div>
          <div className="text-sm font-medium text-slate-500 mt-2 uppercase">Anos de Experiência</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-4xl font-extrabold text-blue-600">100%</div>
          <div className="text-sm font-medium text-slate-500 mt-2 uppercase">Metodologia Ágil</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-4xl font-extrabold text-blue-600">Milhares</div>
          <div className="text-sm font-medium text-slate-500 mt-2 uppercase">De Horas Auditadas</div>
        </div>
      </div>

      {/* 3. Bloco de Filosofia/Valores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Nossa Filosofia</h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Acreditamos que o desenvolvimento de software de alta performance só acontece quando alinhamos engenharia escalável com transparência radical. Nosso foco é transformar a complexidade técnica em resultados de negócios claros e mensuráveis para fundadores e corporações.
          </p>
        </div>
        <div className="bg-slate-900 text-slate-100 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-semibold text-blue-400">Liderança Executiva</h4>
          <p className="mt-2 text-sm text-slate-400">Direção Técnica & Gestão de Portfólio</p>
          <div className="mt-6 border-t border-slate-800 pt-4">
            <p className="text-slate-200 leading-relaxed italic">
              "Garantindo que cada linha de código e cada sprint entregue reflitam a maturidade de engenharia que nossos clientes exigem."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}