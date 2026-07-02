import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { languageOptions } from "../locales";


export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[#0080ff]/15 bg-white/90 px-4 py-3 shadow-[0_18px_60px_rgba(0,86,170,0.16)] backdrop-blur-2xl sm:rounded-full sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          <div
            className="flex h-14 w-[156px] shrink-0 cursor-default flex-col items-start justify-center leading-none sm:w-[178px] sm:items-center"
            aria-label="Galindo Consulting Group"
          >
            <span className="font-serif text-[28px] font-normal italic leading-none tracking-[-0.035em] text-[#06315f] sm:text-[31px]">
              Galindo
            </span>
            <span className="mt-0.5 text-[9px] font-extrabold leading-none tracking-[0.02em] text-[#06315f] sm:text-[10px]">
              Consulting Group
            </span>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <div className="flex shrink-0 rounded-full border border-[#0080ff]/15 bg-[#eef7ff] p-1" aria-label="Language selector">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={`h-8 rounded-full px-2.5 text-[11px] font-bold transition-colors ${
                    language === option.code
                      ? "bg-[#0080ff] text-white shadow-[0_8px_24px_rgba(0,128,255,0.24)]"
                      : "text-[#4478aa] hover:text-[#06315f]"
                  }`}
                  aria-pressed={language === option.code}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0080ff]/15 bg-[#eef7ff] text-[#06315f] transition hover:border-[#0080ff]/30 hover:bg-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="text-lg font-black">{isMenuOpen ? "×" : "≡"}</span>
            </button>
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 sm:flex">
            <ul className="flex min-w-0 flex-wrap items-center justify-end gap-1 sm:gap-2 lg:gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex h-10 items-center justify-center rounded-full border border-transparent px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1f5f99] transition-all duration-200 hover:border-[#0080ff]/25 hover:bg-[#0080ff] hover:text-white focus-visible:border-[#0080ff]/40 focus-visible:bg-[#0080ff] focus-visible:text-white focus-visible:outline-none"
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 rounded-full border border-[#0080ff]/15 bg-[#eef7ff] p-1" aria-label="Language selector">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={`h-8 rounded-full px-3 text-xs font-bold transition-colors ${
                    language === option.code
                      ? "bg-[#0080ff] text-white shadow-[0_8px_24px_rgba(0,128,255,0.24)]"
                      : "text-[#4478aa] hover:text-[#06315f]"
                  }`}
                  aria-pressed={language === option.code}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`${isMenuOpen ? "mt-4 block border-t border-[#0080ff]/12 pt-4" : "hidden"} sm:hidden`}
        >
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center justify-center rounded-2xl border border-[#0080ff]/12 bg-[#f7fbff] px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#1f5f99] transition-all duration-200 hover:border-[#0080ff]/25 hover:bg-[#0080ff] hover:text-white focus-visible:border-[#0080ff]/40 focus-visible:bg-[#0080ff] focus-visible:text-white focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}












