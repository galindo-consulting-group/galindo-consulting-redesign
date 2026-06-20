import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-white px-5 py-20 sm:px-6 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 text-5xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t.contact.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-2xl font-black text-slate-950">{t.contact.helpTitle}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{t.contact.helpText}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    {t.contact.emailLabel}
                  </p>
                  <p className="mt-3 break-words text-base font-bold text-slate-900">
                    president@galindoinc.com
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-3 text-base font-bold text-slate-900">+1 703-881-7822</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <h4 className="text-xl font-black">{t.contact.noteTitle}</h4>
              <p className="mt-3 text-base leading-7 text-slate-300">{t.contact.noteText}</p>
            </div>
          </div>

          <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-bold text-slate-800" htmlFor="name">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t.contact.form.namePlaceholder}
                  className="mt-3 h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none transition-colors focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-800" htmlFor="email">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  className="mt-3 h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none transition-colors focus:border-indigo-400 focus:bg-white"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-bold text-slate-800" htmlFor="company">
                {t.contact.form.company}
              </label>
              <input
                id="company"
                type="text"
                placeholder={t.contact.form.companyPlaceholder}
                className="mt-3 h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none transition-colors focus:border-indigo-400 focus:bg-white"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-bold text-slate-800" htmlFor="message">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder={t.contact.form.messagePlaceholder}
                className="mt-3 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900 outline-none transition-colors focus:border-indigo-400 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-8 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-indigo-800"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
