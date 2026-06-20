import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { languageOptions } from "../locales";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#introduction" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 72);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <a
          href="#introduction"
          className="group flex shrink-0 flex-col leading-none text-slate-950"
          aria-label="Galindo Consulting Group home"
        >
          <span className="font-serif text-3xl font-bold italic tracking-tight text-indigo-700 transition-colors group-hover:text-sky-700">
            Galindo
          </span>
          <span className="mt-1 text-[11px] font-bold tracking-tight text-slate-500">
            Consulting Group, Inc.
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:justify-end">
          <ul className="flex min-w-0 items-center gap-1 overflow-x-auto sm:gap-2 lg:gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex h-10 items-center justify-center rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-700 focus-visible:bg-slate-100 focus-visible:text-indigo-700 focus-visible:outline-none sm:px-4"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 rounded-full border border-slate-200 bg-slate-50 p-1" aria-label="Language selector">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                className={`h-8 rounded-full px-3 text-xs font-bold transition-colors ${
                  language === option.code
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-950"
                }`}
                aria-pressed={language === option.code}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
