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
    { label: "Results", href: "#results" },
    { label: t.nav.services, href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="mx-auto mt-3 flex max-w-7xl flex-col gap-3 rounded-none border border-white/10 bg-[#07080c]/86 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-5 lg:px-6">
        <a
          href="#introduction"
          className="group flex shrink-0 flex-col leading-none"
          aria-label="Galindo Consulting Group home"
        >
          <span className="font-serif text-3xl font-bold italic tracking-tight text-white transition-colors group-hover:text-[#00e5ff]">
            Galindo
          </span>
          <span className="mt-1 text-[11px] font-bold tracking-tight text-slate-500 transition-colors group-hover:text-slate-300">
            Consulting Group, Inc.
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:justify-end">
          <ul className="flex min-w-0 items-center gap-1 overflow-x-auto sm:gap-2 lg:gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex h-10 items-center justify-center rounded-full border border-transparent px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-all duration-200 hover:border-[#00e5ff]/25 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff] focus-visible:border-[#00e5ff]/40 focus-visible:bg-[#00e5ff]/10 focus-visible:text-[#00e5ff] focus-visible:outline-none sm:px-3"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 rounded-full border border-white/10 bg-white/[0.04] p-1" aria-label="Language selector">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                className={`h-8 rounded-full px-3 text-xs font-bold transition-colors ${
                  language === option.code
                    ? "bg-[#00e5ff] text-[#07080c] shadow-[0_8px_24px_rgba(0,229,255,0.22)]"
                    : "text-slate-500 hover:text-white"
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





