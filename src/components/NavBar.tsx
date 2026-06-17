import { useEffect, useState } from "react";

const navItems = [
  { label: "HOME", href: "#introduction" },
  { label: "About Us", href: "#about" },
  { label: "Our Story", href: "#projects" },
  { label: "Our Services", href: "#services" },
  { label: "Our Groups", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:min-h-20 sm:flex-row sm:gap-6 sm:px-6 lg:px-10">
        <a
          href="#introduction"
          className="group flex w-32 shrink-0 flex-col items-center leading-none text-slate-950 sm:w-36"
          aria-label="Galindo Consulting Group home"
        >
          <span className="relative w-full px-4 text-center font-serif text-2xl font-bold italic tracking-tight text-indigo-700 sm:text-3xl">
            <span className="absolute inset-x-0 -top-1 h-8 rounded-[50%] border-2 border-sky-500 transition-colors group-hover:border-indigo-600 sm:h-9" />
            Galindo
          </span>
          <span className="mt-1 text-[11px] font-bold tracking-tight text-slate-500">
            Consulting Group, Inc.
          </span>
        </a>

        <div className="flex w-full flex-1 items-center overflow-x-auto sm:justify-end">
          <ul className="flex min-w-max items-center gap-1 sm:gap-3 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex h-10 items-center justify-center rounded-full border-2 border-transparent px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-all duration-300 hover:border-sky-500 hover:text-blue-600 focus-visible:border-sky-500 focus-visible:text-blue-600 focus-visible:outline-none sm:h-11 sm:px-5 sm:tracking-[0.24em] lg:px-6 lg:tracking-[0.32em]"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
