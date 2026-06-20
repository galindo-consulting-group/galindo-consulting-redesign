import { en } from "./en";

export const es: typeof en = {
  languageName: "Español",
  nav: {
    home: "Inicio",
    about: "Nosotros",
    projects: "Proyectos",
    services: "Servicios",
    contact: "Contacto",
  },
  introduction: {
    eyebrow: "01 - Estrategia, ingeniería, entrega",
    title: "Galindo Consulting Group Inc.",
    subtitle: "Liderazgo de software para equipos que necesitan avanzar sin perder control.",
    description:
      "Desde 2007, Galindo ayuda a empresas a planificar, construir y estabilizar productos digitales con dirección técnica senior, rutinas transparentes de entrega e ingeniería preparada para producción.",
    primaryCta: "Iniciar proyecto",
    secondaryCta: "Ver capacidades",
    metrics: [
      { value: "18+", label: "años guiando entregas de software" },
      { value: "50k+", label: "horas de producción revisadas" },
      { value: "100%", label: "enfocado en ejecución confiable" },
    ],
    thesisTitle: "Una forma más clara de entregar software serio",
    thesis:
      "Conectamos objetivos de negocio con arquitectura, implementación, pruebas y entrega medible. El resultado es software que puede explicarse con claridad, mantenerse con confianza y evolucionar sin suposiciones.",
    proofPoints: ["Gobernanza técnica", "Estrategia de producto", "Ingeniería web y móvil moderna"],
  },
  about: {
    eyebrow: "Quiénes somos",
    title: "Un equipo liderado por especialistas en producto, ingeniería y ejecución.",
    description:
      "Galindo combina desarrollo práctico con gobernanza objetiva. Ayudamos a fundadores, operadores y líderes tecnológicos a convertir requisitos complejos en sistemas seguros, escalables y listos para usuarios.",
    teamIntro: "Liderazgo y equipo de entrega",
    members: [
      {
        name: "Sergio Pereyra",
        role: "Engineering Manager & CTO",
        description:
          "Lidera gobernanza de portafolio, estándares técnicos, revisiones de arquitectura y alineación de entrega en iniciativas de clientes.",
      },
      {
        name: "Clariana Abreu",
        role: "Product Manager & Lead Product Engineer",
        description:
          "Conecta estrategia de producto con implementación, dando forma a arquitectura SaaS, modelos de datos seguros y flujos con IA.",
      },
      {
        name: "Ruan Victor",
        role: "Desarrollador Senior",
        description:
          "Construye sistemas front-end modernos, interfaces reactivas y experiencias de alto rendimiento para múltiples plataformas.",
      },
      {
        name: "Rodrigo Schidmit",
        role: "Desarrollador Junior",
        description:
          "Apoya la entrega responsive de funcionalidades, componentes reutilizables y validación continua de calidad.",
      },
      {
        name: "Hiran Henriques",
        role: "Desarrollador Junior",
        description:
          "Trabaja en consumo de APIs, lógica de interacción, marcado semántico y detalles limpios de implementación.",
      },
    ],
  },
  projects: {
    eyebrow: "03 - Trabajos seleccionados",
    title: "Productos pensados para usuarios reales, equipos reales y restricciones reales.",
    description:
      "Una muestra de plataformas SaaS, migraciones móviles y productos educativos entregados con tecnologías modernas web, móviles y cloud.",
    items: [
      {
        title: "Plataforma SaaS de Reservas con IA",
        description:
          "Producto seguro de reservas y pagos con flujos multi-tenant, mensajería automatizada y operaciones asistidas por IA.",
      },
      {
        title: "Beepr: Migración Nativa & Geo-Commerce",
        description:
          "Experiencia de comercio en React Native con geolocalización, Supabase Edge Functions y entrega móvil lista para producción.",
      },
      {
        title: "Plataforma Educativa Happy-Kids",
        description:
          "Producto educativo con UX responsive, contenido de psicología positiva y arquitectura de servicios en Node.js.",
      },
    ],
  },
  services: {
    eyebrow: "Qué hacemos",
    title: "Capacidades centrales",
    intro:
      "Desde la exploración de producto hasta el soporte en producción, Galindo aporta estructura al trabajo que hace confiable el software.",
    ctaTitle: "¿Listo para construir algo confiable?",
    ctaLabel: "Hablar con Galindo",
    items: [
      {
        title: "Producto & UI/UX Design",
        description:
          "Flujos de usuario, sistemas de interfaz, prototipos y experiencias accesibles que hacen más comprensibles los productos complejos.",
      },
      {
        title: "Gobernanza de Proyectos",
        description:
          "Planificación de sprints, claridad de backlog, rituales de entrega, visibilidad para stakeholders y controles prácticos para mantener el ritmo.",
      },
      {
        title: "Desarrollo de Software a Medida",
        description:
          "Implementación con React, TypeScript, APIs, bases de datos y cloud para MVPs, sistemas internos y productos empresariales.",
      },
      {
        title: "Integración de APIs & Sistemas",
        description:
          "Integraciones REST, GraphQL, SaaS y legacy con autenticación, manejo de errores, límites de uso y observabilidad.",
      },
      {
        title: "Datos, IA & Automatización",
        description:
          "Dashboards, seguimiento de eventos, flujos asistidos por IA, pipelines RAG y automatizaciones que convierten operaciones en sistemas medibles.",
      },
      {
        title: "SEO, Analytics & Crecimiento",
        description:
          "SEO técnico, instrumentación analítica, medición de campañas y reportes que hacen visible el rendimiento.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contrátanos",
    description:
      "Cuéntanos qué estás construyendo, qué está bloqueado o qué necesita escalar. Responderemos con un próximo paso práctico.",
    helpTitle: "¿Cómo podemos ayudar?",
    helpText:
      "Apoyamos desarrollo a medida, integración de sistemas, estrategia de producto y operaciones continuas de entrega. Elige un canal y empieza la conversación.",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    noteTitle: "¿Prefieres un primer mensaje rápido?",
    noteText:
      "Envía un resumen corto del desafío. Lo convertiremos en un plan de acción claro y un camino de propuesta.",
    form: {
      name: "Nombre completo",
      namePlaceholder: "Tu nombre",
      email: "E-mail",
      emailPlaceholder: "tu@ejemplo.com",
      company: "Empresa / Proyecto",
      companyPlaceholder: "Nombre de la empresa o proyecto",
      message: "Mensaje",
      messagePlaceholder: "Explica brevemente tu necesidad.",
      submit: "Solicitar propuesta",
    },
  },
};
