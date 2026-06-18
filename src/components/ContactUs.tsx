export default function ContactUs() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            Contact
          </p>
          <h2 className="text-5xl font-bold text-white leading-tight tracking-tight transition-all duration-300 hover:translate-x-2">
            Hire us 
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400 leading-relaxed">
            We are ready to transform your vision into reliable and scalable software.
            Tell us about your challenge and we'll develop the best technical proposal for your business.
          </p>
        </div>

       
        <div className="grid gap-20 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-12">
            <div className="rounded-[2rem] bg-slate-100 border border-slate-100 p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-x1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                How can we help?
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                We offer bespoke development, systems integration, digital strategy, and
                ongoing support for agile operations. Choose the best channel and let's start the conversation.
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-">
                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">
                    Email
                  </p> 
                  <p className="text-base font-semibold text-slate-800">
                    president@galindoinc.com
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">
                    Telephone
                  </p>
                  <p className="text-base font-semibold text-slate-800">
                    +1 703-881-7822
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-12 shadow-sm  transition-all duration-300 hover:-translate-y-2 hover:shadow-x1">
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Send a quick message.
              </h4>
              <p className="text-base text-slate-600 leading-relaxed">
                We prefer to respond quickly with a straightforward action plan for your project.
              </p>
            </div>
          </div>

          <form className="space-y-6 rounded-[2rem] border border-slate-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-x1">
            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@exemplo.com"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="company">
                Company / Project
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company or project name"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Briefly explain your needs."
                className="mt-3 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition-colors duration-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-800 px-8 py-4 text-base font-bold text-white transition-colors duration-200 hover:bg-gray-800"
            >
              Request proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

