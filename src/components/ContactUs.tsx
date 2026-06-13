export default function ContactUs() {
  return (
    <section id="contact" className="py-24 px-6 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            Contact
          </p>
          <h2 className="text-5xl font-bold text-black leading-tight tracking-tight">
            Contrate-nos
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Estamos prontos para transformar sua visão em software confiável e escalável.
            Conte-nos seu desafio e vamos estruturar a melhor proposta técnica para o seu negócio.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Como podemos ajudar?
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                Oferecemos desenvolvimento sob medida, integração de sistemas, estratégia digital e
                apoio contínuo para operações ágeis. Escolha o melhor canal e vamos iniciar a conversa.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">
                    Email
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    president@galindoinc.com
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">
                    Telefone
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    +1 703-881-7822
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Envie uma mensagem rápida
              </h4>
              <p className="text-base text-slate-600 leading-relaxed">
                Preferimos responder rapidamente com um plano de ação direto para o seu projeto.
              </p>
            </div>
          </div>

          <form className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@exemplo.com"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="company">
                Empresa / Projeto
              </label>
              <input
                id="company"
                type="text"
                placeholder="Nome da empresa ou projeto"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Explique brevemente suas necessidades"
                className="mt-3 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
            >
              Solicitar proposta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
