import { useLanguage } from "../context/LanguageContext";

const projectCards = [
  {
    icon: "⛓",
    label: "SAAS",
    title: "NextBlock - Blockchain API Platform",
    description: "A B2B SaaS platform built on Solana that went from zero to $250K in processed transactions within its first 60 days, with production-ready infrastructure and usage-based billing.",
    outcome: "Scaled to $250K in transactions in 60 days with high-performance API and automated monetization.",
    metrics: [
      { value: "$250K", label: "Processed" },
      { value: "60", label: "Days" },
      { value: "API", label: "SaaS Platform" },
    ],
    stack: ["React", "Flask", "MySQL", "Solana", "API", "Payments"],
    url: "https://nextblock.io",
  },
  {
    icon: "🤖",
    label: "AI / SAAS",
    title: "Interviewiz - AI Interview Prep Platform",
    description: "An AI-powered platform that helps job seekers prepare for technical interviews through adaptive assessments, AI-generated feedback loops, and progress tracking.",
    outcome: "AI-driven question generation, SaaS subscription model, and clean UX built for repeat usage.",
    metrics: [
      { value: "AI", label: "Feedback" },
      { value: "SaaS", label: "Model" },
      { value: "UX", label: "Repeat Use" },
    ],
    stack: ["React", "Flask", "MySQL", "AI", "SaaS", "UX"],
    url: "https://interviewiz.com",
  },
  {
    icon: "⚡",
    label: "CONFIGURATOR",
    title: "Electric Motorcycle Configurator",
    description: "An interactive vehicle configuration experience with dynamic pricing, real-time product customization, and responsive user flows for an electric motorcycle brand.",
    outcome: "Custom configuration engine with dynamic pricing and production-ready UX for complex product options.",
    metrics: [
      { value: "Live", label: "Pricing" },
      { value: "Custom", label: "Options" },
      { value: "UX", label: "Configurator" },
    ],
    stack: ["React", "Interactive", "E-Commerce", "UX", "Dynamic Pricing"],
    url: "https://konfigurator.metorbike-riderclub.de/info",
  },
  {
    icon: "🧠",
    label: "AI / PRODUCTIVITY",
    title: "MentalPilot - AI Productivity Platform",
    description: "An AI-powered productivity and habit-tracking application with personalized insights, workflow automation, and modern SaaS architecture built on Next.js.",
    outcome: "Personalized AI insights and workflow automation wrapped in a scalable SaaS architecture.",
    metrics: [
      { value: "AI", label: "Insights" },
      { value: "Next.js", label: "Stack" },
      { value: "Flow", label: "Automation" },
    ],
    stack: ["Next.js", "AI", "SaaS", "Productivity", "Automation"],
    url: "https://mental-pilot.vercel.app",
  },
  {
    icon: "🌍",
    label: "CONSUMER WEB",
    title: "GTA GeoGuesser - Viral Web App",
    description: "A location-based gaming platform set inside GTA's map, scaled to 50,000+ monthly active users, with optimized frontend rendering and a self-sustaining community-driven traffic loop.",
    outcome: "50,000+ monthly users, fast load times despite heavy map logic, and high organic shareability.",
    metrics: [
      { value: "50K+", label: "Monthly Users" },
      { value: "Fast", label: "Rendering" },
      { value: "Viral", label: "Traffic" },
    ],
    stack: ["Tailwind", "Django", "SQLite", "Gaming", "Performance"],
    url: "https://gta-geoguesser.com",
  },
  {
    icon: "📅",
    label: "SAAS",
    title: "Consulting Scheduler - Booking Platform",
    description: "A Calendly-style booking platform with timezone-safe availability logic, authenticated user flows, and reliable state management built entirely in Next.js and TypeScript.",
    outcome: "Complex multi-timezone scheduling logic with authenticated flows and clean booking UX.",
    metrics: [
      { value: "TZ", label: "Safe Logic" },
      { value: "Auth", label: "Flows" },
      { value: "TS", label: "Build" },
    ],
    stack: ["Next.js", "TypeScript", "SaaS", "Scheduling", "Auth"],
    url: "https://nextjs-ts-consulting-scheduler.vercel.app",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="reveal bg-transparent px-4 py-16 text-[#06315f] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.projects.eyebrow}</span>
          <div>
            <h2 className="max-w-4xl font-serif text-3xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">{t.projects.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#1f5f99] sm:text-lg sm:leading-8">{t.projects.description}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-3">
          {projectCards.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="gcg-card gcg-topline group relative flex flex-col overflow-hidden rounded-[18px] p-5 text-white no-underline transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0080ff] sm:p-7 lg:min-h-[620px]"
              aria-label={`Open project ${project.title}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.2),transparent_18rem),radial-gradient(circle_at_90%_12%,rgba(191,226,255,0.18),transparent_20rem)]" />
              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-3xl shadow-[0_14px_34px_rgba(0,35,80,0.12)]">
                    {project.icon}
                  </div>
                  <span className="rounded-full border border-white/25 bg-black/20 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    {project.label}
                  </span>
                </div>

                <p className="font-mono text-sm font-light text-white/62">{String(index + 4).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-2xl font-normal leading-tight tracking-tight text-white sm:text-3xl">{project.title}</h3>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={`${project.title}-${metric.label}`} className="rounded-2xl border border-white/15 bg-white/12 p-3">
                      <p className="text-lg font-black leading-none text-white">{metric.value}</p>
                      <p className="mt-2 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-white/70">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-white/90 sm:text-[15px]">{project.description}</p>
                <p className="mt-5 rounded-2xl border border-white/10 bg-[#4466DD] p-4 text-sm font-bold leading-6 text-white">{project.outcome}</p>

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/45 px-3 py-1.5 text-xs font-bold text-white/95">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
