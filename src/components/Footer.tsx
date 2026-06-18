const quickLinks = [
  { label: "Home", href: "#introduction" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const footerServices = [
  "Custom Software",
  "Business Intelligence",
  "API Integration",
  "UI/UX Design",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-slate-300 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a
              href="#introduction"
              className="inline-flex flex-col leading-none text-white"
              aria-label="Galindo Consulting Group home"
            >
              <span className="font-serif text-4xl font-bold italic tracking-tight text-indigo-300  transition-all duration-300 hover:-translate-y-2 hover:shadow-x1">
                Galindo
              </span>
              <span className="mt-1 text-xs font-bold tracking-tight text-slate-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-x1">
                Consulting Group, Inc.
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Real management, real coding, and real people building secure
              software architecture for teams that need reliable delivery.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-white">
              Menu
            </h2>
            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors duration-200 hover:text-indigo-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-white">
              Services
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {footerServices.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-white">
              Contact
            </h2>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p className="break-words">president@galindoinc.com</p>
              <p>+1 703-881-7822</p>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-indigo-400/40 px-5 py-2 font-semibold text-indigo-200 transition-colors duration-200 hover:border-indigo-300 hover:bg-indigo-500/10"
              >
                Solicitar proposta
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Galindo Consulting Group, Inc. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.12em] sm:tracking-[0.18em]">
            Built with React, TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
