import { ProjectSlug, SectionId } from './site';

export type Language = 'pt-BR' | 'en' | 'es';

export const LANGUAGES: readonly { code: Language; name: string; flag: string }[] = [
  { code: 'pt-BR', name: 'Português (Brasil)', flag: 'images/flags/br.svg' },
  { code: 'en', name: 'English', flag: 'images/flags/us.svg' },
  { code: 'es', name: 'Español', flag: 'images/flags/es.svg' },
];

export interface ProjectCopy {
  description: string;
  tags: readonly [string, string, string];
  footer: string;
}

export interface Translation {
  nav: {
    label: string;
    sections: Record<SectionId, string>;
    languageLabel: string;
    connect: string;
  };
  hero: {
    bannerAlt: string;
    available: string;
    onlineTitle: string;
    tagline: string;
    taglineAccent: string;
    bioBefore: string;
    bioStrong: string;
    bioAfter: string;
    stackButton: string;
    contactButton: string;
    impactaCaption: string;
  };
  stack: {
    title: string;
    intro: string;
    panelTitle: string;
    panelIntro: string;
    pillars: readonly [string, string, string];
  };
  projects: {
    title: string;
    allRepos: string;
    viewCode: string;
    items: Record<ProjectSlug, ProjectCopy>;
  };
  differential: {
    badge: string;
    title: string;
    titleAccent: string;
    bioBefore: string;
    bioStrong: string;
    bioAfter: string;
    cards: readonly [
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
    ];
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      required: string;
      invalidEmail: string;
      sent: string;
      defaultSubject: string;
    };
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

const PT_BR: Translation = {
  nav: {
    label: 'Navegação principal',
    sections: {
      hero: 'Sobre',
      stack: 'Stack',
      projects: 'Projetos',
      diferencial: 'Diferencial',
      contact: 'Contato',
    },
    languageLabel: 'Idioma',
    connect: 'Connect',
  },
  hero: {
    bannerAlt: 'Banner Amâncio A. S. Moura - Software Engineer',
    available: '🔵 Disponível para novos projetos & contratos',
    onlineTitle: 'Online & Disponível',
    tagline: 'Building robust solutions with',
    taglineAccent: 'modern technologies',
    bioBefore:
      'Engenheiro de Software focado em arquiteturas resilientes, microsserviços e sistemas corporativos de alto desempenho. Graduando em ',
    bioStrong: 'Análise e Desenvolvimento de Sistemas (Faculdade Impacta)',
    bioAfter:
      ' combinando solidez em engenharia de dados, regras fiscais e ecossistemas Full Stack.',
    stackButton: 'Stack & Pilares',
    contactButton: 'Contato',
    impactaCaption: 'ADS Graduação',
  },
  stack: {
    title: 'Tecnologias & Pilares de Engenharia',
    intro:
      'Representação fiel das competências tecnológicas e pilares de entrega presentes no ecossistema de engenharia.',
    panelTitle: 'Stack Principal (Banner Reference)',
    panelIntro: 'As 10 tecnologias nucleares dominadas no desenvolvimento de softwares escaláveis.',
    pillars: [
      'Arquitetura limpa, princípios SOLID, refatoração contínua e documentação rigorosa para garantir sustentabilidade e clareza em códigos legados e modernos.',
      'Resolução de gargalos complexos de performance (Redis caching, otimização de queries Firebird/PostgreSQL) e integração inovadora de IA Google Gemini.',
      'Comunicação proativa, alinhamento técnico com áreas contábeis e de produto, controle de versão via Git/SVN e foco obsessivo em entregas funcionais de valor.',
    ],
  },
  projects: {
    title: 'Projetos em Destaque',
    allRepos: 'Ver todos os 18+ repositórios',
    viewCode: 'Acessar Código',
    items: {
      'IA-GEMINI-DELPHI': {
        description:
          'Integração nativa com a API Google Gemini no Delphi VCL/FMX via HTTP Client com tratamento assíncrono de payloads JSON e automação de comandos em linguagem natural.',
        tags: ['[AI] Gemini API', '[PAS] Delphi', 'REST / JSON'],
        footer: 'branch: main',
      },
      'calculo-financiamento': {
        description:
          'Calculadora financeira em Lazarus / Object Pascal aplicando regras estritas de amortização (Tabela Price e SAC), juros compostos e correção monetária respaldada em contabilidade.',
        tags: ['[PAS] Lazarus', 'Matemática Financeira', 'Tabela Price / SAC'],
        footer: 'Lazarus / FPC',
      },
      'Redis-Delphi-FDB': {
        description:
          'Camada de aceleração ultra rápida integrando Redis como cache de alta leitura para bases Firebird (.fdb), reduzindo em até 85% o overhead de consultas pesadas em ERPs.',
        tags: ['Redis Memory', 'Firebird (.fdb)', 'High Concurrency'],
        footer: 'High-Performance',
      },
      'DMVC-API-SSL': {
        description:
          'Estrutura de API RESTful em Delphi MVCFramework equipada com criptografia SSL/TLS, autenticação segura via tokens e endpoints padronizados para integração de parceiros comerciais.',
        tags: ['Delphi MVC', 'SSL / TLS', 'REST API'],
        footer: 'Security-First',
      },
      'TCC-IMPACTA-2025': {
        description:
          'Projeto de graduação na Faculdade Impacta em ADS: sistema distribuído com arquitetura moderna, modelagem de dados relacional e soluções orientadas a negócios reais.',
        tags: ['Faculdade Impacta', 'ADS 2025', 'Sistemas Distribuídos'],
        footer: 'Academic / ADS',
      },
      Base64Picture: {
        description:
          'Biblioteca modular para encoding e decoding ultrarrápido de imagens binárias em strings Base64 para persistência de fotos e logotipos fiscais em bancos Firebird e payloads REST.',
        tags: ['[PAS] Utilitário', 'Base64 Stream', 'Zero Overhead'],
        footer: 'Graphic / Stream',
      },
    },
  },
  differential: {
    badge: 'Vantagem Competitiva Rara',
    title: 'Engenharia de Software com ',
    titleAccent: 'Rigor Contábil',
    bioBefore:
      'Muitos sistemas falham não por falta de código, mas por incompreensão das regras de negócio financeiras e tributárias. Ao associar a graduação em ',
    bioStrong: 'Análise e Desenvolvimento de Sistemas (Faculdade Impacta)',
    bioAfter:
      ' com sólidos conhecimentos contábeis, entrego softwares corporativos sem erros de conciliação ou distorção fiscal.',
    cards: [
      {
        title: 'PDV & Faturamento',
        text: 'Fechamentos de caixa sem furos, cálculo exato de tributos (ICMS, PIS, COFINS) e integridade de cupons fiscais.',
      },
      {
        title: 'Estoque para Obras',
        text: 'Rastreamento de insumos e matérias-primas na construção civil com custo médio ponderado e PEPS.',
      },
      {
        title: 'Financiamento & SAC',
        text: 'Simulações de crédito e empréstimos utilizando fórmulas exatas de amortização bancária sem arredondamentos espúrios.',
      },
    ],
  },
  contact: {
    title: 'Vamos Conversar',
    intro:
      'Precisa modernizar um sistema legado em Delphi, integrar APIs REST com Firebird/Redis ou desenvolver uma nova ferramenta corporativa com rigor contábil?',
    emailLabel: 'E-mail Corporativo',
    linkedinLabel: 'LinkedIn Perfil',
    githubLabel: 'GitHub Repositórios',
    form: {
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      email: 'E-mail',
      emailPlaceholder: 'voce@empresa.com',
      subject: 'Assunto',
      subjectPlaceholder: 'Sobre o que vamos falar?',
      message: 'Mensagem',
      messagePlaceholder: 'Conte um pouco sobre o projeto...',
      submit: 'Enviar mensagem',
      required: 'Campo obrigatório.',
      invalidEmail: 'Informe um e-mail válido.',
      sent: 'Abrimos seu aplicativo de e-mail com a mensagem pronta. Se nada aconteceu, escreva diretamente para',
      defaultSubject: 'Contato pelo portfólio',
    },
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    builtWith: 'Feito com Angular & Tailwind CSS',
  },
};

const EN: Translation = {
  nav: {
    label: 'Main navigation',
    sections: {
      hero: 'About',
      stack: 'Stack',
      projects: 'Projects',
      diferencial: 'Edge',
      contact: 'Contact',
    },
    languageLabel: 'Language',
    connect: 'Connect',
  },
  hero: {
    bannerAlt: 'Amâncio A. S. Moura banner - Software Engineer',
    available: '🔵 Available for new projects & contracts',
    onlineTitle: 'Online & Available',
    tagline: 'Building robust solutions with',
    taglineAccent: 'modern technologies',
    bioBefore:
      'Software Engineer focused on resilient architectures, microservices and high-performance enterprise systems. Studying ',
    bioStrong: 'Systems Analysis and Development (Faculdade Impacta)',
    bioAfter:
      ', combining a solid grounding in data engineering, tax rules and Full Stack ecosystems.',
    stackButton: 'Stack & Pillars',
    contactButton: 'Contact',
    impactaCaption: 'Systems Analysis Degree',
  },
  stack: {
    title: 'Technologies & Engineering Pillars',
    intro:
      'A faithful view of the technical skills and delivery pillars behind my engineering work.',
    panelTitle: 'Core Stack (Banner Reference)',
    panelIntro: 'The 10 core technologies I rely on to build scalable software.',
    pillars: [
      'Clean architecture, SOLID principles, continuous refactoring and rigorous documentation to keep legacy and modern code sustainable and clear.',
      'Solving complex performance bottlenecks (Redis caching, Firebird/PostgreSQL query optimization) and bringing in Google Gemini AI in innovative ways.',
      'Proactive communication, technical alignment with accounting and product teams, version control with Git/SVN and an obsessive focus on functional, valuable delivery.',
    ],
  },
  projects: {
    title: 'Featured Projects',
    allRepos: 'See all 18+ repositories',
    viewCode: 'View Code',
    items: {
      'IA-GEMINI-DELPHI': {
        description:
          'Native Google Gemini API integration in Delphi VCL/FMX via HTTP Client, with asynchronous JSON payload handling and natural-language command automation.',
        tags: ['[AI] Gemini API', '[PAS] Delphi', 'REST / JSON'],
        footer: 'branch: main',
      },
      'calculo-financiamento': {
        description:
          'Financial calculator in Lazarus / Object Pascal applying strict amortization rules (Price Table and SAC), compound interest and accounting-backed monetary correction.',
        tags: ['[PAS] Lazarus', 'Financial Math', 'Price Table / SAC'],
        footer: 'Lazarus / FPC',
      },
      'Redis-Delphi-FDB': {
        description:
          'Ultra-fast acceleration layer using Redis as a high-read cache for Firebird (.fdb) databases, cutting the overhead of heavy ERP queries by up to 85%.',
        tags: ['Redis Memory', 'Firebird (.fdb)', 'High Concurrency'],
        footer: 'High-Performance',
      },
      'DMVC-API-SSL': {
        description:
          'RESTful API structure in Delphi MVCFramework with SSL/TLS encryption, secure token authentication and standardized endpoints for business partner integrations.',
        tags: ['Delphi MVC', 'SSL / TLS', 'REST API'],
        footer: 'Security-First',
      },
      'TCC-IMPACTA-2025': {
        description:
          'Capstone project at Faculdade Impacta: a distributed system with modern architecture, relational data modeling and solutions driven by real business needs.',
        tags: ['Faculdade Impacta', 'ADS 2025', 'Distributed Systems'],
        footer: 'Academic / ADS',
      },
      Base64Picture: {
        description:
          'Modular library for ultra-fast encoding and decoding of binary images as Base64 strings, used to persist photos and fiscal logos in Firebird databases and REST payloads.',
        tags: ['[PAS] Utility', 'Base64 Stream', 'Zero Overhead'],
        footer: 'Graphic / Stream',
      },
    },
  },
  differential: {
    badge: 'Rare Competitive Edge',
    title: 'Software Engineering with ',
    titleAccent: 'Accounting Rigor',
    bioBefore:
      'Many systems fail not for lack of code, but because financial and tax business rules were misunderstood. By pairing a degree in ',
    bioStrong: 'Systems Analysis and Development (Faculdade Impacta)',
    bioAfter:
      ' with solid accounting knowledge, I deliver enterprise software free of reconciliation errors and tax distortions.',
    cards: [
      {
        title: 'POS & Billing',
        text: 'Cash closings without gaps, exact tax calculation (ICMS, PIS, COFINS) and fiscal receipt integrity.',
      },
      {
        title: 'Construction Inventory',
        text: 'Tracking of supplies and raw materials in civil construction using weighted average cost and FIFO.',
      },
      {
        title: 'Financing & SAC',
        text: 'Credit and loan simulations using exact bank amortization formulas with no spurious rounding.',
      },
    ],
  },
  contact: {
    title: "Let's Talk",
    intro:
      'Need to modernize a legacy Delphi system, integrate REST APIs with Firebird/Redis or build a new enterprise tool with accounting rigor?',
    emailLabel: 'Business E-mail',
    linkedinLabel: 'LinkedIn Profile',
    githubLabel: 'GitHub Repositories',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'E-mail',
      emailPlaceholder: 'you@company.com',
      subject: 'Subject',
      subjectPlaceholder: 'What shall we talk about?',
      message: 'Message',
      messagePlaceholder: 'Tell me a bit about the project...',
      submit: 'Send message',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid e-mail address.',
      sent: 'Your e-mail app was opened with the message ready to send. If nothing happened, write directly to',
      defaultSubject: 'Portfolio contact',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Angular & Tailwind CSS',
  },
};

const ES: Translation = {
  nav: {
    label: 'Navegación principal',
    sections: {
      hero: 'Sobre mí',
      stack: 'Stack',
      projects: 'Proyectos',
      diferencial: 'Diferencial',
      contact: 'Contacto',
    },
    languageLabel: 'Idioma',
    connect: 'Conectar',
  },
  hero: {
    bannerAlt: 'Banner de Amâncio A. S. Moura - Software Engineer',
    available: '🔵 Disponible para nuevos proyectos y contratos',
    onlineTitle: 'En línea y disponible',
    tagline: 'Building robust solutions with',
    taglineAccent: 'modern technologies',
    bioBefore:
      'Ingeniero de Software enfocado en arquitecturas resilientes, microservicios y sistemas corporativos de alto rendimiento. Estudiante de ',
    bioStrong: 'Análisis y Desarrollo de Sistemas (Faculdade Impacta)',
    bioAfter:
      ', combinando solidez en ingeniería de datos, reglas fiscales y ecosistemas Full Stack.',
    stackButton: 'Stack y Pilares',
    contactButton: 'Contacto',
    impactaCaption: 'Grado en ADS',
  },
  stack: {
    title: 'Tecnologías y Pilares de Ingeniería',
    intro:
      'Una representación fiel de las competencias técnicas y los pilares de entrega de mi trabajo de ingeniería.',
    panelTitle: 'Stack Principal (Banner Reference)',
    panelIntro: 'Las 10 tecnologías centrales que domino para desarrollar software escalable.',
    pillars: [
      'Arquitectura limpia, principios SOLID, refactorización continua y documentación rigurosa para garantizar sostenibilidad y claridad en código legado y moderno.',
      'Resolución de cuellos de botella complejos de rendimiento (caché con Redis, optimización de consultas Firebird/PostgreSQL) e integración innovadora de la IA Google Gemini.',
      'Comunicación proactiva, alineación técnica con las áreas contables y de producto, control de versiones con Git/SVN y un enfoque obsesivo en entregas funcionales de valor.',
    ],
  },
  projects: {
    title: 'Proyectos Destacados',
    allRepos: 'Ver los más de 18 repositorios',
    viewCode: 'Ver Código',
    items: {
      'IA-GEMINI-DELPHI': {
        description:
          'Integración nativa con la API de Google Gemini en Delphi VCL/FMX mediante HTTP Client, con tratamiento asíncrono de payloads JSON y automatización de comandos en lenguaje natural.',
        tags: ['[AI] Gemini API', '[PAS] Delphi', 'REST / JSON'],
        footer: 'branch: main',
      },
      'calculo-financiamento': {
        description:
          'Calculadora financiera en Lazarus / Object Pascal que aplica reglas estrictas de amortización (Tabla Price y SAC), interés compuesto y corrección monetaria respaldada en la contabilidad.',
        tags: ['[PAS] Lazarus', 'Matemática Financiera', 'Tabla Price / SAC'],
        footer: 'Lazarus / FPC',
      },
      'Redis-Delphi-FDB': {
        description:
          'Capa de aceleración ultrarrápida que integra Redis como caché de alta lectura para bases Firebird (.fdb), reduciendo hasta un 85% el overhead de consultas pesadas en ERPs.',
        tags: ['Redis Memory', 'Firebird (.fdb)', 'High Concurrency'],
        footer: 'High-Performance',
      },
      'DMVC-API-SSL': {
        description:
          'Estructura de API RESTful en Delphi MVCFramework con cifrado SSL/TLS, autenticación segura mediante tokens y endpoints estandarizados para la integración de socios comerciales.',
        tags: ['Delphi MVC', 'SSL / TLS', 'REST API'],
        footer: 'Security-First',
      },
      'TCC-IMPACTA-2025': {
        description:
          'Proyecto de graduación en la Faculdade Impacta: sistema distribuido con arquitectura moderna, modelado de datos relacional y soluciones orientadas a negocios reales.',
        tags: ['Faculdade Impacta', 'ADS 2025', 'Sistemas Distribuidos'],
        footer: 'Academic / ADS',
      },
      Base64Picture: {
        description:
          'Biblioteca modular para codificar y decodificar de forma ultrarrápida imágenes binarias en cadenas Base64, para persistir fotos y logotipos fiscales en bases Firebird y payloads REST.',
        tags: ['[PAS] Utilidad', 'Base64 Stream', 'Zero Overhead'],
        footer: 'Graphic / Stream',
      },
    },
  },
  differential: {
    badge: 'Ventaja Competitiva Poco Común',
    title: 'Ingeniería de Software con ',
    titleAccent: 'Rigor Contable',
    bioBefore:
      'Muchos sistemas fallan no por falta de código, sino por no comprender las reglas de negocio financieras y tributarias. Al unir la carrera de ',
    bioStrong: 'Análisis y Desarrollo de Sistemas (Faculdade Impacta)',
    bioAfter:
      ' con sólidos conocimientos contables, entrego software corporativo sin errores de conciliación ni distorsión fiscal.',
    cards: [
      {
        title: 'TPV y Facturación',
        text: 'Cierres de caja sin descuadres, cálculo exacto de tributos (ICMS, PIS, COFINS) e integridad de los comprobantes fiscales.',
      },
      {
        title: 'Inventario para Obras',
        text: 'Seguimiento de insumos y materias primas en la construcción civil con costo promedio ponderado y PEPS.',
      },
      {
        title: 'Financiación y SAC',
        text: 'Simulaciones de crédito y préstamos con fórmulas exactas de amortización bancaria sin redondeos espurios.',
      },
    ],
  },
  contact: {
    title: 'Hablemos',
    intro:
      '¿Necesitas modernizar un sistema legado en Delphi, integrar APIs REST con Firebird/Redis o desarrollar una nueva herramienta corporativa con rigor contable?',
    emailLabel: 'Correo Corporativo',
    linkedinLabel: 'Perfil de LinkedIn',
    githubLabel: 'Repositorios en GitHub',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo',
      emailPlaceholder: 'tu@empresa.com',
      subject: 'Asunto',
      subjectPlaceholder: '¿De qué vamos a hablar?',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame un poco sobre el proyecto...',
      submit: 'Enviar mensaje',
      required: 'Campo obligatorio.',
      invalidEmail: 'Introduce un correo válido.',
      sent: 'Abrimos tu aplicación de correo con el mensaje listo. Si no ocurrió nada, escribe directamente a',
      defaultSubject: 'Contacto desde el portafolio',
    },
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Hecho con Angular y Tailwind CSS',
  },
};

export const TRANSLATIONS: Record<Language, Translation> = { 'pt-BR': PT_BR, en: EN, es: ES };
