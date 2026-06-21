import { en } from "./en";

export const pt: typeof en = {
  languageName: "Português",
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    services: "Serviços",
    contact: "Contato",
  },
  introduction: {
    eyebrow: "01 - Estratégia, engenharia, entrega",
    title: "Galindo Consulting Group Inc.",
    subtitle: "Liderança em software para equipes que precisam avançar sem perder controle.",
    description:
      "Desde 2007, a Galindo ajuda empresas a planejar, construir e estabilizar produtos digitais com direção técnica sênior, rotinas transparentes de entrega e engenharia pronta para produção.",
    primaryCta: "Iniciar projeto",
    secondaryCta: "Ver competências",
    metrics: [
      { value: "18+", label: "anos guiando entrega de software" },
      { value: "50k+", label: "horas de produção revisadas" },
      { value: "100%", label: "foco em execução confiável" },
    ],
    thesisTitle: "Uma forma mais clara de entregar software sério",
    thesis:
      "Conectamos objetivos de negócio com arquitetura, implementação, testes e entrega mensurável. O resultado é um software que pode ser explicado com clareza, mantido com confiança e evoluído sem suposições.",
    proofPoints: ["Governança técnica", "Estratégia de produto", "Engenharia web e mobile moderna"],
  },
  about: {
    eyebrow: "Quem somos",
    title: "Uma equipe liderada por especialistas em produto, engenharia e execução.",
    description:
      "A Galindo combina desenvolvimento prático com governança objetiva. Ajudamos fundadores, operadores e líderes de tecnologia a transformar requisitos complexos em sistemas seguros, escaláveis e prontos para usuários.",
    teamIntro: "Liderança e equipe de entrega",
    members: [
      {
        name: "Sergio Pereyra",
        role: "Gerente de Engenharia & CTO",
        description:
          "Lidera governança de portfólio, padrões técnicos, revisões de arquitetura e alinhamento de entrega nas iniciativas dos clientes.",
      },
      {
        name: "Clariana Abreu",
        role: "Product Manager & Lead Product Engineer",
        description:
          "Conecta estratégia de produto com implementação, estruturando arquitetura SaaS, modelos de dados seguros e fluxos com IA.",
      },
      {
        name: "Ruan Victor",
        role: "Desenvolvedor Sênior",
        description:
          "Constrói sistemas front-end modernos, interfaces reativas e experiências performáticas para múltiplas plataformas.",
      },
      {
        name: "Rodrigo Schidmit",
        role: "Solutions Engineer",
        description:
          "Apoia entrega responsiva de funcionalidades, componentes reutilizáveis e validação contínua de qualidade.",
      },
      {
        name: "Hiran Henriques",
        role: "Solutions Engineer",
        description:
          "Atua em consumo de APIs, lógica de interação, marcação semântica e detalhes limpos de implementação.",
      },
    ],
  },
  projects: {
    eyebrow: "03 - Trabalhos selecionados",
    title: "Produtos pensados para usuários reais, equipes reais e restrições reais.",
    description:
      "Um recorte de plataformas SaaS, migrações mobile e produtos educacionais entregues com tecnologias modernas de web, mobile e cloud.",
    items: [
      {
        title: "Plataforma SaaS de Agendamentos com IA",
        description:
          "Produto seguro de agendamento e pagamentos com fluxos multi-tenant, mensagens automatizadas e operações apoiadas por IA.",
      },
      {
        title: "Beepr: Migração Nativa & Geo-Commerce",
        description:
          "Experiência de comércio em React Native com geolocalização, Supabase Edge Functions e entrega mobile pronta para produção.",
      },
      {
        title: "Plataforma Educacional Happy-Kids",
        description:
          "Produto educacional com UX responsiva, conteúdo de psicologia positiva e arquitetura de serviços em Node.js.",
      },
    ],
  },
  services: {
    eyebrow: "O que fazemos",
    title: "Competências centrais",
    intro:
      "Da descoberta de produto ao suporte em produção, a Galindo traz estrutura para o trabalho que torna software confiável.",
    ctaTitle: "Pronto para construir algo confiável?",
    ctaLabel: "Fale com a Galindo",
    items: [
      {
        title: "Produto & UI/UX Design",
        description:
          "Fluxos de usuário, sistemas de interface, protótipos e experiências acessíveis que tornam produtos complexos mais fáceis de entender.",
      },
      {
        title: "Governança de Projetos",
        description:
          "Planejamento de sprints, clareza de backlog, rituais de entrega, visibilidade para stakeholders e controles práticos para manter o ritmo.",
      },
      {
        title: "Desenvolvimento de Software Sob Medida",
        description:
          "Implementação com React, TypeScript, APIs, bancos de dados e cloud para MVPs, sistemas internos e produtos corporativos.",
      },
      {
        title: "Integração de APIs & Sistemas",
        description:
          "Integrações REST, GraphQL, SaaS e legadas com autenticação, tratamento de erros, limites de uso e observabilidade.",
      },
      {
        title: "Dados, IA & Automação",
        description:
          "Dashboards, rastreamento de eventos, fluxos com IA, pipelines RAG e automações que transformam operações em sistemas mensuráveis.",
      },
      {
        title: "SEO, Analytics & Crescimento",
        description:
          "SEO técnico, instrumentação analítica, mensuração de campanhas e relatórios que tornam a performance visível.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Contrate-nos",
    description:
      "Conte o que você está construindo, o que travou ou o que precisa escalar. Responderemos com um próximo passo prático.",
    helpTitle: "Como podemos ajudar?",
    helpText:
      "Apoiamos desenvolvimento sob medida, integração de sistemas, estratégia de produto e operações contínuas de entrega. Escolha um canal e comece a conversa.",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    noteTitle: "Prefere uma primeira mensagem rápida?",
    noteText:
      "Envie um resumo curto do desafio. Vamos transformar isso em um plano de ação claro e um caminho de proposta.",
    form: {
      name: "Nome completo",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "voce@exemplo.com",
      company: "Empresa / Projeto",
      companyPlaceholder: "Nome da empresa ou projeto",
      message: "Mensagem",
      messagePlaceholder: "Explique brevemente sua necessidade.",
      submit: "Solicitar proposta",
    },
  },
};
