import { useLanguage } from "../context/LanguageContext";


export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-[#0080ff]/15 bg-transparent px-5 py-14 text-[#1f5f99] sm:px-6 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(0,229,255,0.12),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.1),transparent_22rem)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-[#0080ff]/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.95fr_1fr]">
          <div>
            <a
              href="#introduction"
              className="inline-flex items-center"
              aria-label="Galindo Consulting Group home"
            >
              <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-[#00e5ff]/25 bg-white p-2 shadow-[0_18px_54px_rgba(0,229,255,0.12)] transition hover:border-[#00e5ff]/70">
                <img src="/galindo-icon.jfif" alt="Galindo Consulting Group" className="h-full w-full object-contain" />
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#1f5f99]">
              {t.footer.description}
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#4478aa]">
              {t.footer.companyInfo}
            </p>
          </div>

          <div>
            <h2 className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
              {t.footer.menuTitle}
            </h2>
            <nav className="mt-6 flex flex-col gap-3">
              {t.footer.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#1f5f99] transition-colors duration-200 hover:text-[#00e5ff]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
              {t.footer.servicesTitle}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {t.footer.services.map((service) => (
                <li key={service} className="text-sm font-semibold text-[#1f5f99]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
              {t.footer.contactTitle}
            </h2>
            <div className="mt-6 space-y-4 text-sm text-[#1f5f99]">
              <a className="block break-words font-semibold transition-colors hover:text-[#00e5ff]" href="mailto:president@galindoinc.com">
                president@galindoinc.com
              </a>
              <a className="block font-semibold transition-colors hover:text-[#00e5ff]" href="tel:+17038817822">
                +1 703-881-7822
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex rounded-full border border-[#00e5ff]/35 bg-[#00e5ff]/10 px-5 py-2.5 text-sm font-bold text-[#8beeff] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#07080c]"
                >
                  {t.footer.cta}
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-[#0080ff]/15 px-5 py-2.5 text-sm font-bold text-[#1f5f99] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00e5ff] hover:text-[#00e5ff]"
                >
                  {t.footer.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-[#4478aa] sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <p className="font-mono uppercase tracking-[0.12em] sm:tracking-[0.18em]">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}








