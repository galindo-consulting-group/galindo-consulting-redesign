const services = [
  {
    title: "UI/UX Design",
    description:
      "Interfaces built for usability, accessibility, and conversion. From wireframe to navigable prototype, we deliver experiences users understand on the first interaction.",
  },
  {
    title: "Project Collaboration",
    description:
      "Agile project management with defined sprints, prioritized backlog, and transparent communication. We embed into your team or take full ownership of project coordination.",
  },
  {
    title: "Marketing Strategy",
    description:
      "Data-driven strategies that connect product and audience. Full-funnel coverage: positioning, growth, and campaign performance analysis.",
  },
  {
    title: "API Integration",
    description:
      "We connect legacy systems, SaaS platforms, and external services via REST and GraphQL. Robust integrations architected with authentication, rate limiting, and fault tolerance.",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailor-made solutions for problems off-the-shelf tools can't solve. From MVPs to enterprise systems, we deliver scalable, testable, and documented code.",
  },
  {
    title: "SEO & Analytics",
    description:
      "Technical SEO optimization combined with analytical instrumentation. We implement event tracking, dashboards, and reports that turn traffic into decisions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            What We Do
          </p>
          <h2 className="text-5xl font-bold text-black leading-tight tracking-tight">
            Our Core <br /> Competencies
          </h2>
        </div>

        {/* Service List */}
        <div className="divide-y divide-neutral-200">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-[3rem_1fr_2fr] items-start gap-8 py-8"
            >
              <span className="text-sm font-mono text-neutral-400 pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-black">
                {service.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-neutral-200 pt-12">
          <p className="text-2xl font-bold text-black leading-snug">
            Ready to build <br /> something real?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-black hover:bg-neutral-800 text-white font-semibold rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            Talk to Galindo →
          </a>
        </div>

      </div>
    </section>
  );
}
