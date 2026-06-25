import { en } from "./en";

export const pt: typeof en = {
  languageName: "Português",
  nav: { home: "Início", about: "Sobre", projects: "Projetos", services: "Serviços", contact: "Contato" },
  introduction: {
    eyebrow: "01 - Estratégia, engenharia, entrega",
    title: "Galindo Consulting Group Inc.",
    subtitle: "Liderança sênior de software para equipes de SaaS, IA e produto.",
    statsLine: "18+ anos de experiência 4100+ projetos entregues",
    sectorsLine: "SaaS • IA • Saúde • Educação • Enterprise",    description: "",
    primaryCta: "Agendar chamada de descoberta",
    secondaryCta: "Enviar mensagem",
    metrics: [
      { value: "18+", label: "anos entregando software" },
      { value: "2007", label: "desde 2007" },
      { value: "Senior", label: "entrega liderada" },
    ],
    thesisTitle: "Produtos liderados por fundadores, projetados da arquitetura à produção.",
    thesis: "Todo engajamento é liderado por liderança técnica sênior e engenheiros experientes, da arquitetura à entrega. Unimos estratégia de produto, implementação e disciplina operacional em um modelo responsável de entrega.",
    proofPoints: ["SaaS", "IA", "Sistemas Enterprise", "Mobile", "Cloud"],
  },
  about: {
    eyebrow: "Quem somos",
    title: "Liderança sênior e times de entrega para produtos de software sérios.",
    description: "A Galindo combina orientação executiva, estratégia de produto e engenharia prática para ajudar empresas a sair da ideia até sistemas escaláveis em produção.",
    leadershipTitle: "Executive Leadership",
    leadershipIntro: "Operadores seniores e líderes técnicos guiam estratégia, arquitetura, entrega e resultados dos clientes.",
    leaders: [
      { name: "Jorge Galindo", role: "CEO, Galindo Consulting Group", description: "Fornece liderança executiva geral, visão da empresa e direção estratégica global em operações e parcerias." },
      { name: "Carlos Galindo", role: "President & Co-Founder", description: "Impulsiona expansão de negócios, iniciativas estratégicas e relacionamentos de alto nível com clientes globais." },
      { name: "Sergio Pereyra", role: "Project Manager & Delivery Director", description: "Lidera entrega global de software, arquitetura técnica e execução de engenharia em times distribuídos e sistemas de clientes." },
      { name: "Monica Lavayen", role: "Chief Operations & Finance Lead", description: "Supervisiona operações, planejamento financeiro, gestão de recursos e eficiência organizacional em todas as divisões." },
      { name: "Ivan Szabo", role: "General Manager, E-Commerce & Digital Platforms (Bolivia)", description: "Lidera estratégia regional de e-commerce, operações de plataforma e crescimento de comércio digital na Bolívia." },
    ],
    teamIntro: "Time de produto e engenharia",
    members: [
      { name: "Clariana Abreu", role: "Lead Full-Stack Engineer", description: "Conecta estratégia de produto com implementação, estruturando arquitetura SaaS, modelos de dados seguros e fluxos com IA." },
      { name: "Victor Ruan", role: "Desenvolvedor Sênior", description: "Constrói sistemas front-end modernos, interfaces reativas e experiências performáticas para múltiplas plataformas." },
      { name: "Bryan Thomas", role: "Desenvolvedor Sênior", description: "Contribui com desenvolvimento sênior em aplicações escaláveis, implementação front-end e fluxos de integração." },
      { name: "Edwin Guarachi", role: "Desenvolvedor Sênior", description: "Apoia execução sênior de engenharia em produtos escaláveis, integrações e aplicações prontas para produção." },
      { name: "Rodrigo Schidmit", role: "Desenvolvedor Sênior", description: "Apoia entrega responsiva de funcionalidades, componentes reutilizáveis e validação contínua de qualidade." },
      { name: "Hiran Henriques", role: "Desenvolvedor Sênior", description: "Atua em consumo de APIs, lógica de interação, marcação semântica e detalhes limpos de implementação." },
    ],
  },
  projects: {
    eyebrow: "03 - Principais provas",
    title: "Categorias de negócio, resultados mensuráveis e software pronto para produção.",
    description: "Um portfólio focado em SaaS, IA, mobile, gaming e educação, construído ao redor de resultados de negócio.",
    items: [
      { title: "Plataforma de Agendamento com IA & Workforce", label: "SaaS", description: "Plataforma de agendamento e operações para reservas, automação e coordenação de equipes.", outcome: "Construída em torno de fluxos SaaS, lógica de agendamento e experiências escaláveis." },
      { title: "Plataforma Mobile Commerce", label: "Beepr", description: "Produto mobile commerce com geolocalização, fluxos transacionais e experiência pronta para produção.", outcome: "Experiência mobile desenhada para comércio real e escala operacional." },
      { title: "Plataforma de Assinatura Educacional", label: "Happy-Kids", description: "Plataforma educacional orientada por assinatura com UX responsiva, fluxos de aprendizado e engajamento por conteúdo.", outcome: "Experiência educacional construída para usuários recorrentes e entrega escalável de conteúdo." },
    ],
  },
  results: {
    eyebrow: "04 - Resultados",
    title: "Resultados selecionados",
    items: [
      { title: "$250K+ processados nos primeiros 60 dias", description: "Entregamos infraestrutura SaaS pronta para transações desde o lançamento até a escala inicial." },
      { title: "50.000+ usuários mensais", description: "Construímos experiências consumer projetadas para performance, compartilhamento e engajamento recorrente." },
      { title: "Sistemas de produtividade com IA", description: "Entregamos automação inteligente, insights personalizados e arquitetura SaaS moderna." },
      { title: "Múltiplos apps mobile lançados", description: "Lideramos aplicativos móveis dos requisitos de produto até experiências prontas para produção." },
      { title: "Produtos de MVP à produção", description: "Ajudamos empresas a desenhar, lançar e evoluir produtos em SaaS, IA, mobile, fintech, educação e saúde." },
    ],
  },
  industries: { eyebrow: "Foco por indústria", title: "Indústrias que atendemos", items: ["SaaS", "Inteligência Artificial", "Saúde", "Educação", "Marketplaces", "Sistemas Enterprise"] },
  technology: { eyebrow: "Alinhamento técnico", title: "Technology Stack", items: ["React", "Next.js", "React Native", "Node.js", "NestJS", "PostgreSQL", "Supabase", "OpenAI", "Claude", "AWS"] },
  howWeWork: {
    eyebrow: "Modelo de entrega",
    title: "Como trabalhamos",
    items: [
      { title: "Descoberta & Planejamento", description: "Clareamos objetivos, escopo, usuários, restrições e riscos técnicos antes de construir." },
      { title: "Arquitetura & Estratégia", description: "Definimos sistema, dados, integrações, fluxos de IA e roadmap de entrega." },
      { title: "Desenvolvimento de Produto", description: "Construímos com execução sênior, progresso visível e qualidade pronta para produção." },
      { title: "Suporte Contínuo", description: "Evoluímos o produto com monitoramento, otimização, roadmap e governança técnica." },
    ],
  },
  services: {
    eyebrow: "O que fazemos", title: "Competências centrais", intro: "Da descoberta de produto ao suporte em produção, a Galindo traz estrutura para o trabalho que torna software confiável.", ctaTitle: "Pronto para construir algo confiável?", ctaLabel: "Agendar consultoria",
    items: [
      { title: "Produto & UI/UX Design", description: "Fluxos de usuário, sistemas de interface, protótipos e experiências acessíveis." },
      { title: "CTO Fracionado & Governança", description: "Liderança técnica sênior, rituais de entrega, visibilidade e controles práticos." },
      { title: "Desenvolvimento Sob Medida", description: "React, TypeScript, APIs, bancos de dados e cloud para MVPs e produtos enterprise." },
      { title: "Integração de APIs & Sistemas", description: "Integrações REST, GraphQL, SaaS e legadas com autenticação e observabilidade." },
      { title: "Dados, IA & Automação", description: "Dashboards, eventos, fluxos com IA, pipelines RAG e automações mensuráveis." },
      { title: "SEO, Analytics & Crescimento", description: "SEO técnico, analytics, mensuração de campanhas e relatórios de performance." },
    ],
  },
  testimonials: { eyebrow: "Prova de clientes", title: "Depoimentos", description: "Depoimentos reais serão adicionados aqui quando os textos aprovados forem fornecidos.", placeholders: ["Depoimento de cliente pendente", "Depoimento de fundador pendente", "Depoimento de stakeholder pendente"] },
  gallery: { eyebrow: "Visuais de projetos", title: "Gallery", description: "As imagens da galeria serão adicionadas aqui quando as fotos e visuais aprovados forem fornecidos.", placeholders: ["Screenshot de produto", "Momento de entrega", "Visual de projeto", "Release mobile", "Revisão de arquitetura", "Marco de lançamento"] },
  contact: {
    eyebrow: "Contato", title: "Contrate-nos", description: "Agende uma chamada ou envie uma mensagem. Responderemos com um próximo passo prático.", helpTitle: "Como podemos ajudar?", helpText: "Apoiamos desenvolvimento sob medida, integração de sistemas, estratégia de produto e operações contínuas de entrega.", emailLabel: "Email", phoneLabel: "Telefone", calendlyLabel: "Agendar chamada", messageLabel: "Enviar mensagem", noteTitle: "Prefere uma primeira mensagem rápida?", noteText: "Envie um resumo curto do desafio. Vamos transformar isso em um plano claro.", form: { name: "Nome completo", namePlaceholder: "Seu nome", email: "E-mail", emailPlaceholder: "voce@exemplo.com", company: "Empresa / Projeto", companyPlaceholder: "Nome da empresa ou projeto", message: "Mensagem", messagePlaceholder: "Explique brevemente sua necessidade.", submit: "Solicitar proposta" },
  },
  footer: { description: "Gestão real, código real e pessoas reais construindo arquitetura segura para equipes que precisam de entrega confiável.", menuTitle: "Menu", servicesTitle: "Serviços", contactTitle: "Contato", quickLinks: [{ label: "Início", href: "#introduction" }, { label: "Sobre", href: "#about" }, { label: "Projetos", href: "#projects" }, { label: "Resultados", href: "#results" }, { label: "Serviços", href: "#services" }, { label: "Contato", href: "#contact" }], services: ["Software sob medida", "CTO fracionado", "Integração de APIs", "Automação com IA"], linkedin: "LinkedIn", companyInfo: "Galindo Consulting Group, Inc.", cta: "Agendar chamada", rights: "© 2026 Galindo Consulting Group, Inc. Todos os direitos reservados.", builtWith: "Criado com React, TypeScript e Tailwind CSS" },
};






