import { en } from "./en";

export const es: typeof en = {
  languageName: "Español",
  nav: { home: "Inicio", about: "Nosotros", projects: "Proyectos", services: "Servicios", contact: "Contacto" },
  introduction: {
    eyebrow: "01 - Estrategia, ingeniería, entrega", title: "Galindo Consulting Group Inc.", subtitle: "Liderazgo senior de software para equipos de SaaS, IA y producto.", statsLine: "18+ años de experiencia 4100+ proyectos entregados", sectorsLine: "SaaS • IA • Salud • Educación • Enterprise", description: "", primaryCta: "Agendar llamada de descubrimiento", secondaryCta: "Enviar mensaje",
    metrics: [{ value: "18+", label: "años entregando software" }, { value: "2007", label: "desde 2007" }, { value: "Senior", label: "entrega liderada" }],
    thesisTitle: "Productos liderados por fundadores, diseñados desde arquitectura hasta producción.", thesis: "Cada compromiso es liderado por liderazgo técnico senior e ingenieros experimentados, desde arquitectura hasta entrega. Unimos estrategia de producto, implementación y disciplina operativa en un modelo responsable.", proofPoints: ["SaaS", "IA", "Sistemas Enterprise", "Mobile", "Cloud"],
  },
  about: {
    eyebrow: "Quiénes somos", title: "Liderazgo senior y equipos de entrega para productos de software serios.", description: "Galindo combina guía ejecutiva, estrategia de producto e ingeniería práctica para ayudar a empresas a pasar de la idea a sistemas escalables en producción.", leadershipTitle: "Executive Leadership", leadershipIntro: "Operadores senior y líderes técnicos guían estrategia, arquitectura, entrega y resultados de clientes.",
    leaders: [
      { name: "Jorge Galindo", role: "CEO, Galindo Consulting Group", description: "Proporciona liderazgo ejecutivo general, visión de compañía y dirección estratégica global en operaciones y alianzas." },
      { name: "Carlos Galindo", role: "President & Co-Founder", description: "Impulsa expansión de negocio, iniciativas estratégicas y relaciones de alto nivel con clientes globales." },
      { name: "Sergio Pereyra", role: "Global Engineering & Delivery Director", description: "Lidera entrega global de software, arquitectura técnica y ejecución de ingeniería en equipos distribuidos y sistemas de clientes." },
      { name: "Monica Lavayen", role: "Chief Operations & Finance Lead", description: "Supervisa operaciones, planificación financiera, gestión de recursos y eficiencia organizacional en todas las divisiones." },
      { name: "Ivan Szabo", role: "General Manager, E-Commerce & Digital Platforms (Bolivia)", description: "Lidera estrategia regional de e-commerce, operaciones de plataforma y crecimiento de comercio digital en Bolivia." },
    ],
    teamIntro: "Equipo de producto e ingeniería",
    members: [
      { name: "Clariana Abreu", role: "Product Strategy & Delivery Lead", description: "Conecta estrategia de producto con implementación, dando forma a arquitectura SaaS, modelos de datos seguros y flujos con IA." },
      { name: "Victor Ruan", role: "Desarrollador Senior", description: "Construye sistemas front-end modernos, interfaces reactivas y experiencias de alto rendimiento." },
      { name: "Bryan Thomas", role: "Desarrollador Senior", description: "Contribuye con desarrollo senior en aplicaciones escalables, implementación front-end y flujos de integración." },
      { name: "Edwin Guarachi", role: "Desarrollador Senior", description: "Apoya ejecución senior de ingeniería en productos escalables, integraciones y aplicaciones listas para producción." },
      { name: "Rodrigo Schidmit", role: "Solutions Engineer", description: "Apoya entrega responsive de funcionalidades, componentes reutilizables y validación continua." },
      { name: "Hiran Henriques", role: "Solutions Engineer", description: "Trabaja en consumo de APIs, lógica de interacción, marcado semántico y detalles limpios." },
    ],
  },
  projects: {
    eyebrow: "03 - Pruebas principales", title: "Categorías de negocio, resultados medibles y software listo para producción.", description: "Un portafolio enfocado en SaaS, IA, mobile, gaming y educación, construido alrededor de resultados de negocio.",
    items: [
      { title: "Plataforma de Agendamiento con IA & Workforce", label: "SaaS", description: "Plataforma de agendamiento y operaciones para reservas, automatización y coordinación de equipos.", outcome: "Construida alrededor de flujos SaaS, lógica de agendamiento y experiencias escalables." },
      { title: "Plataforma Mobile Commerce", label: "Beepr", description: "Producto mobile commerce con geolocalización, flujos transaccionales y experiencia lista para producción.", outcome: "Experiencia móvil diseñada para comercio real y escala operativa." },
      { title: "Plataforma de Suscripción Educativa", label: "Happy-Kids", description: "Plataforma educativa orientada por suscripción con UX responsive, flujos de aprendizaje y engagement por contenido.", outcome: "Experiencia educativa construida para usuarios recurrentes y entrega escalable de contenido." },
    ],
  },
  results: {
    eyebrow: "04 - Resultados", title: "Resultados seleccionados", items: [
      { title: "$250K+ procesados en los primeros 60 días", description: "Entregamos infraestructura SaaS lista para transacciones desde lanzamiento hasta escala inicial." },
      { title: "50.000+ usuarios mensuales", description: "Construimos experiencias consumer diseñadas para rendimiento, difusión y engagement recurrente." },
      { title: "Sistemas de productividad con IA", description: "Entregamos automatización inteligente, insights personalizados y arquitectura SaaS moderna." },
      { title: "Múltiples apps móviles lanzadas", description: "Lideramos aplicaciones móviles desde requisitos de producto hasta experiencias listas para producción." },
      { title: "Productos de MVP a producción", description: "Ayudamos a empresas a diseñar, lanzar y evolucionar productos en SaaS, IA, mobile, fintech, educación y salud." },
    ],
  },
  industries: { eyebrow: "Foco por industria", title: "Industrias que atendemos", items: ["SaaS", "Inteligencia Artificial", "Salud", "Educación", "Marketplaces", "Sistemas Enterprise"] },
  technology: { eyebrow: "Alineación técnica", title: "Technology Stack", items: ["React", "Next.js", "React Native", "Node.js", "NestJS", "PostgreSQL", "Supabase", "OpenAI", "Claude", "AWS"] },
  howWeWork: { eyebrow: "Modelo de entrega", title: "Cómo trabajamos", items: [
    { title: "Descubrimiento & Planificación", description: "Aclaramos objetivos, alcance, usuarios, restricciones y riesgos técnicos antes de construir." },
    { title: "Arquitectura & Estrategia", description: "Definimos sistema, datos, integraciones, flujos de IA y roadmap de entrega." },
    { title: "Desarrollo de Producto", description: "Construimos con ejecución senior, progreso visible y calidad lista para producción." },
    { title: "Soporte Continuo", description: "Evolucionamos el producto con monitoreo, optimización, roadmap y gobernanza técnica." },
  ] },
  services: { eyebrow: "Qué hacemos", title: "Capacidades centrales", intro: "Desde exploración de producto hasta soporte en producción, Galindo aporta estructura al trabajo que hace confiable el software.", ctaTitle: "¿Listo para construir algo confiable?", ctaLabel: "Agendar consultoría", items: [
    { title: "Producto & UI/UX Design", description: "Flujos de usuario, sistemas de interfaz, prototipos y experiencias accesibles." },
    { title: "CTO Fraccional & Gobernanza", description: "Liderazgo técnico senior, rituales de entrega, visibilidad y controles prácticos." },
    { title: "Desarrollo a Medida", description: "React, TypeScript, APIs, bases de datos y cloud para MVPs y productos enterprise." },
    { title: "Integración de APIs & Sistemas", description: "Integraciones REST, GraphQL, SaaS y legacy con autenticación y observabilidad." },
    { title: "Datos, IA & Automatización", description: "Dashboards, eventos, flujos con IA, pipelines RAG y automatizaciones medibles." },
    { title: "SEO, Analytics & Crecimiento", description: "SEO técnico, analytics, medición de campañas y reportes de performance." },
  ] },
  testimonials: { eyebrow: "Prueba de clientes", title: "Testimonios", description: "Testimonios reales se agregarán aquí cuando se proporcionen los textos aprobados.", placeholders: ["Testimonio de cliente pendiente", "Testimonio de fundador pendiente", "Testimonio de stakeholder pendiente"] },
  gallery: { eyebrow: "Visuales de proyectos", title: "Gallery", description: "Las imágenes de la galería se agregarán aquí cuando se proporcionen fotos y visuales aprobados.", placeholders: ["Screenshot de producto", "Momento de entrega", "Visual de proyecto", "Release mobile", "Revisión de arquitectura", "Hito de lanzamiento"] },
  contact: { eyebrow: "Contacto", title: "Contrátanos", description: "Agenda una llamada o envía un mensaje. Responderemos con un próximo paso práctico.", helpTitle: "¿Cómo podemos ayudar?", helpText: "Apoyamos desarrollo a medida, integración de sistemas, estrategia de producto y operaciones continuas de entrega.", emailLabel: "Email", phoneLabel: "Teléfono", calendlyLabel: "Agendar llamada", messageLabel: "Enviar mensaje", noteTitle: "¿Prefieres un primer mensaje rápido?", noteText: "Envía un resumen corto del desafío. Lo convertiremos en un plan claro.", form: { name: "Nombre completo", namePlaceholder: "Tu nombre", email: "E-mail", emailPlaceholder: "tu@ejemplo.com", company: "Empresa / Proyecto", companyPlaceholder: "Nombre de la empresa o proyecto", message: "Mensaje", messagePlaceholder: "Explica brevemente tu necesidad.", submit: "Solicitar propuesta" } },
  footer: { description: "Gestión real, código real y personas reales construyendo arquitectura segura para equipos que necesitan entregas confiables.", menuTitle: "Menú", servicesTitle: "Servicios", contactTitle: "Contacto", quickLinks: [{ label: "Inicio", href: "#introduction" }, { label: "Nosotros", href: "#about" }, { label: "Proyectos", href: "#projects" }, { label: "Resultados", href: "#results" }, { label: "Servicios", href: "#services" }, { label: "Contacto", href: "#contact" }], services: ["Software a medida", "CTO fraccional", "Integración de APIs", "Automatización con IA"], linkedin: "LinkedIn", companyInfo: "Galindo Consulting Group, Inc.", cta: "Agendar llamada", rights: "© 2026 Galindo Consulting Group, Inc. Todos los derechos reservados.", builtWith: "Creado con React, TypeScript y Tailwind CSS" },
};





