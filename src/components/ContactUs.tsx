import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="reveal bg-transparent px-5 py-24 text-[#06315f] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-5xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#1f5f99]">{t.contact.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="gcg-card rounded-[18px] p-7 sm:p-8">
              <h3 className="font-serif text-3xl font-normal text-[#06315f]">{t.contact.helpTitle}</h3>
              <p className="mt-4 text-base leading-7 text-[#1f5f99]">{t.contact.helpText}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href="mailto:president@galindoinc.com" className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-5 transition hover:border-[#00e5ff]/35">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4478aa]">
                    {t.contact.emailLabel}
                  </p>
                  <p className="mt-3 break-words text-base font-bold text-[#06315f]">president@galindoinc.com</p>
                </a>

                <a href="tel:+17038817822" className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-5 transition hover:border-[#00e5ff]/35">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4478aa]">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-3 text-base font-bold text-[#06315f]">+1 703-881-7822</p>
                </a>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-extrabold uppercase tracking-[0.1em] text-[#0080ff] transition hover:bg-[#eaf5ff]">
                  {t.contact.calendlyLabel}
                </a>
                <a href="mailto:president@galindoinc.com" className="inline-flex h-12 items-center justify-center rounded-full border border-[#0080ff]/15 px-5 text-sm font-bold uppercase tracking-[0.1em] text-[#06315f] transition hover:border-[#00e5ff] hover:text-[#00e5ff]">
                  {t.contact.messageLabel}
                </a>
              </div>
            </div>

            <div className="gcg-card rounded-[18px] p-7 sm:p-8">
              <h4 className="font-serif text-2xl font-normal text-[#06315f]">{t.contact.noteTitle}</h4>
              <p className="mt-3 text-base leading-7 text-[#1f5f99]">{t.contact.noteText}</p>
            </div>
          </div>

          <form className="gcg-card rounded-[18px] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="name">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t.contact.form.namePlaceholder}
                  className="mt-3 h-12 w-full rounded-xl border border-[#0080ff]/20 bg-white px-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="email">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  className="mt-3 h-12 w-full rounded-xl border border-[#0080ff]/20 bg-white px-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="company">
                {t.contact.form.company}
              </label>
              <input
                id="company"
                type="text"
                placeholder={t.contact.form.companyPlaceholder}
                className="mt-3 h-12 w-full rounded-xl border border-[#0080ff]/20 bg-white px-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="message">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder={t.contact.form.messagePlaceholder}
                className="mt-3 w-full resize-none rounded-xl border border-[#0080ff]/20 bg-white px-4 py-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-extrabold uppercase tracking-[0.1em] text-[#0080ff] transition hover:-translate-y-0.5 hover:bg-[#eaf5ff]"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}






