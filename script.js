const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const languageToggle = document.querySelector('[data-language-toggle]');
const translations = {
  es: {
    navProfile: 'Perfil', navExperience: 'Experiencia', navStack: 'Stack', navProjects: 'Proyectos', navContact: 'Hablemos', navAria: 'Navegación principal', brandAria: 'Isam Zahriou Berrak, inicio',
    eyebrow: 'MADRID, ESPAÑA · SOFTWARE ENGINEERING', heroTitle: 'Construyo software.<br><span class="muted-word">Conecto sistemas.</span><br><span class="accent-word">Lidero equipos.</span>',
    heroLead: 'Soy Isam Zahriou Berrak, Tech Lead y Java Backend Engineer. Trabajo en soluciones para el sector financiero, combinando desarrollo, diseño técnico y coordinación de equipos.', heroJourney: 'Conoce mi trayectoria', heroMetaLeadership: 'LIDERAZGO TÉCNICO', heroMetaFinance: 'SERVICIOS FINANCIEROS', visualAria: 'Resumen de experiencia', coreEngineering: 'ENGINEERING', coreBottom: 'THINK · BUILD · IMPROVE', focus: 'ENFOQUE', teamKicker: 'EQUIPO', dxcDate: 'FEB 2021 — ACTUALIDAD', accentureDate: 'NOV 2019 — ABR 2020', minsaitDate: 'SEP 2018 — NOV 2019', nimbeoDate: 'SEP 2017 — JUN 2018', projectTypeKafka: '01 / EVENT-DRIVEN', projectTypeSecurity: '02 / SEGURIDAD', projectTypeConfiguration: '03 / CONFIGURACIÓN', projectTypePerformance: '04 / RENDIMIENTO', backendEngineering: 'Backend<br>Engineering', teamSize: 'Mentoring<br>y guía técnica', teamCaption: 'Coordinación técnica', scrollCue: 'SCROLL PARA EXPLORAR',
    profileLabel: '<span>01</span> PERFIL', profileKicker: 'DE LA IMPLEMENTACIÓN A LAS DECISIONES TÉCNICAS', profileTitle: 'Me interesa entender el sistema completo, <em>no solo la tarea.</em>', profileP1: 'Mi experiencia se ha desarrollado principalmente en el sector bancario, trabajando en proyectos para CaixaBank desde DXC Technology. He participado en iniciativas de medios de pago y digitalización documental, en entornos donde la fiabilidad, la trazabilidad y la mantenibilidad importan.', profileP2: 'En mi día a día combino desarrollo backend con responsabilidades de liderazgo técnico: análisis de requisitos, diseño de soluciones, integración entre servicios, revisión técnica, mentoring y coordinación con distintos interlocutores.',
    principle1Title: 'Claridad técnica', principle1Text: 'Entender el problema antes de elegir la solución.', principle2Title: 'Software mantenible', principle2Text: 'Priorizar calidad, trazabilidad y evolución.', principle3Title: 'Trabajo en equipo', principle3Text: 'Compartir contexto, desbloquear y hacer crecer.',
    experienceLabel: '<span>02</span> EXPERIENCIA', experienceKicker: 'TRAYECTORIA PROFESIONAL', experienceTitle: 'Experiencia en sistemas<br><em>que importan.</em>', current: 'ACTUAL', dxcRole: 'Software Engineer · Technical Lead', dxcSummary: 'Proyectos para CaixaBank en medios de pago y digitalización documental. Desempeño responsabilidades de Technical Lead, facilitando la coordinación técnica, las decisiones de implementación y la colaboración entre perfiles.', dxcBullet1: 'Diseño de soluciones de extremo a extremo: requisitos, contratos, integración entre servicios y persistencia.', dxcBullet2: 'Desarrollo e integración de APIs REST con Java y Spring Boot.', dxcBullet3: 'Planificación, estimaciones, mentoring, revisión técnica y resolución de bloqueos.', dxcBullet4: 'Pruebas unitarias y de integración, despliegues y monitorización de producción.', accentureRole: 'Senior Developer · Migración bancaria', accentureSummary: 'Participación en la migración de Banco Caixa Geral / ABANCA, trabajando con procesos de envío de tablas y ficheros, documentación técnica e inventario de procesos.', minsaitRole: 'COBOL Developer', minsaitSummary: 'Desarrollo y mantenimiento de procesos batch, transacciones y rutinas COBOL para el producto bancario OneSait Banking, utilizado por distintas entidades financieras.', nimbeoRole: 'Web Developer · IT Support Intern', nimbeoSummary: 'Primer entorno profesional: colaboración en desarrollo web y soporte técnico, participando en resolución de incidencias y tareas de desarrollo.', tagWebDevelopment: 'Desarrollo web', tagItSupport: 'Soporte IT',
    technologyLabel: '<span>03</span> TECNOLOGÍA', technologyKicker: 'HERRAMIENTAS Y ÁREAS DE TRABAJO', technologyTitle: 'Un stack construido<br><em>en proyectos reales.</em>', technologyNote: 'Tecnologías y herramientas con las que he trabajado en desarrollo, integración, testing y operación de soluciones.', stackBackendTitle: 'Backend & APIs', stackBackendText: 'Desarrollo de servicios, lógica de negocio e integración.', stackMessagingTitle: 'Mensajería', stackMessagingText: 'Comunicación asíncrona y sistemas de integración.', stackDataTitle: 'Datos', stackDataText: 'Persistencia relacional y consultas SQL.', stackQualityTitle: 'Calidad & entrega', stackQualityText: 'Testing, integración continua y observabilidad.', stackMainframeTitle: 'Mainframe', stackMainframeText: 'Experiencia en sistemas bancarios tradicionales.', stackLeadershipTitle: 'Liderazgo técnico', stackLeadershipText: 'Coordinación y acompañamiento de equipos.',
    projectsLabel: '<span>04</span> PROYECTOS', projectsKicker: 'LABORATORIO PERSONAL', projectsTitle: 'Aprender haciendo.<br><em>Compartir lo aprendido.</em>', projectsNote: 'Proyectos y pruebas técnicas personales. No representan sistemas de producción de mis clientes.', projectKafka: 'Proyecto de experimentación con Apache Kafka y configuración de ELK para trabajar con mensajería y observabilidad.', projectJwt: 'Proyecto de pruebas y aprendizaje relacionado con autenticación basada en JWT y Spring Security.', projectProfiles: 'Pruebas con perfiles de configuración en aplicaciones Java y Spring Boot.', projectCache: 'Proyecto personal para explorar el uso de mecanismos de caché en el ecosistema Spring.', allProjects: 'Ver todos mis repositorios en GitHub',
    educationLabel: '<span>05</span> FORMACIÓN', educationKicker: 'FORMACIÓN ACADÉMICA', educationTitle: 'Una base práctica.<br><em>Aprendizaje continuo.</em>', education1: 'Estudios de Ingeniería Informática', education2: 'CFGS Desarrollo de Aplicaciones Multiplataforma', education2Sub: 'Formación profesional de grado superior', education3: 'CFGM Sistemas Microinformáticos y Redes', education3Sub: 'Formación profesional de grado medio', languagesLabel: 'IDIOMAS', languagesNative: 'Español y árabe · Nativo/bilingüe', languagesEnglish: 'Inglés · Actualmente cursando EOI C2.1',
    contactKicker: '¿HABLAMOS?', contactTitle: 'Los buenos sistemas<br>empiezan con <em>una conversación.</em>', contactText: 'Si quieres hablar de ingeniería backend, arquitectura, liderazgo técnico o una oportunidad profesional, estaré encantado de conectar.', contactLinkedin: 'Contactar por LinkedIn', contactStamp: 'BUILD WITH<br>INTENTION', backToTop: 'Volver arriba ↑', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', switchLanguage: 'Switch to English', pageTitle: 'Isam Zahriou Berrak — Tech Lead & Java Backend Engineer', metaDescription: 'Isam Zahriou Berrak — Tech Lead y Java Backend Engineer especializado en servicios financieros, APIs e integración de sistemas.'
  },
  en: {
    navProfile: 'About', navExperience: 'Experience', navStack: 'Tech stack', navProjects: 'Projects', navContact: 'Let’s talk', navAria: 'Main navigation', brandAria: 'Isam Zahriou Berrak, home',
    eyebrow: 'MADRID, SPAIN · SOFTWARE ENGINEERING', heroTitle: 'I build software.<br><span class="muted-word">I connect systems.</span><br><span class="accent-word">I lead teams.</span>',
    heroLead: 'I’m Isam Zahriou Berrak, a Tech Lead and Java Backend Engineer. I work on financial services solutions, combining software development, technical design and team coordination.', heroJourney: 'Explore my experience', heroMetaLeadership: 'TECH LEADERSHIP', heroMetaFinance: 'FINANCIAL SERVICES', visualAria: 'Experience overview', coreEngineering: 'ENGINEERING', coreBottom: 'THINK · BUILD · IMPROVE', focus: 'FOCUS', teamKicker: 'TEAM', dxcDate: 'FEB 2021 — PRESENT', accentureDate: 'NOV 2019 — APR 2020', minsaitDate: 'SEP 2018 — NOV 2019', nimbeoDate: 'SEP 2017 — JUN 2018', projectTypeKafka: '01 / EVENT-DRIVEN', projectTypeSecurity: '02 / SECURITY', projectTypeConfiguration: '03 / CONFIGURATION', projectTypePerformance: '04 / PERFORMANCE', backendEngineering: 'Backend<br>Engineering', teamSize: 'Mentoring<br>& technical guidance', teamCaption: 'Technical coordination', scrollCue: 'SCROLL TO EXPLORE',
    profileLabel: '<span>01</span> ABOUT', profileKicker: 'FROM IMPLEMENTATION TO TECHNICAL DECISIONS', profileTitle: 'I like to understand the whole system, <em>not just the task.</em>', profileP1: 'My experience has mainly been shaped in the banking sector, working on CaixaBank projects through DXC Technology. I have contributed to payment services and document digitisation initiatives in environments where reliability, traceability and maintainability matter.', profileP2: 'My day-to-day work combines backend development with technical leadership responsibilities: requirements analysis, solution design, service integration, technical reviews, mentoring and coordination with different stakeholders.',
    principle1Title: 'Technical clarity', principle1Text: 'Understand the problem before choosing the solution.', principle2Title: 'Maintainable software', principle2Text: 'Prioritise quality, traceability and long-term evolution.', principle3Title: 'Teamwork', principle3Text: 'Share context, remove blockers and help people grow.',
    experienceLabel: '<span>02</span> EXPERIENCE', experienceKicker: 'PROFESSIONAL JOURNEY', experienceTitle: 'Experience with systems<br><em>that matter.</em>', current: 'CURRENT', dxcRole: 'Software Engineer · Technical Lead', dxcSummary: 'CaixaBank projects in payment services and document digitisation. I take on Technical Lead responsibilities, facilitating technical coordination, implementation decisions and collaboration across roles.', dxcBullet1: 'End-to-end solution design: requirements, contracts, service integration and persistence.', dxcBullet2: 'Development and integration of REST APIs using Java and Spring Boot.', dxcBullet3: 'Planning, effort estimation, mentoring, technical reviews and blocker resolution.', dxcBullet4: 'Unit and integration testing, deployments and production monitoring.', accentureRole: 'Senior Developer · Banking migration', accentureSummary: 'Contributed to the Banco Caixa Geral / ABANCA migration, working on table and file transfer processes, technical documentation and process inventories.', minsaitRole: 'COBOL Developer', minsaitSummary: 'Developed and maintained batch processes, transactions and COBOL routines for the OneSait Banking product, used by several financial institutions.', nimbeoRole: 'Web Developer · IT Support Intern', nimbeoSummary: 'My first professional role, contributing to web development and technical support, including incident resolution and development tasks.', tagWebDevelopment: 'Web development', tagItSupport: 'IT support',
    technologyLabel: '<span>03</span> TECHNOLOGY', technologyKicker: 'TOOLS AND AREAS OF EXPERTISE', technologyTitle: 'A tech stack built<br><em>through real projects.</em>', technologyNote: 'Technologies and tools I have used across software development, integration, testing and solution operations.', stackBackendTitle: 'Backend & APIs', stackBackendText: 'Service development, business logic and integration.', stackMessagingTitle: 'Messaging', stackMessagingText: 'Asynchronous communication and integration systems.', stackDataTitle: 'Data', stackDataText: 'Relational persistence and SQL querying.', stackQualityTitle: 'Quality & delivery', stackQualityText: 'Testing, continuous integration and observability.', stackMainframeTitle: 'Mainframe', stackMainframeText: 'Experience with traditional banking systems.', stackLeadershipTitle: 'Technical leadership', stackLeadershipText: 'Team coordination, guidance and support.',
    projectsLabel: '<span>04</span> PROJECTS', projectsKicker: 'PERSONAL LAB', projectsTitle: 'Learn by building.<br><em>Share what I learn.</em>', projectsNote: 'Personal projects and technical experiments. They do not represent production systems belonging to my clients.', projectKafka: 'An experimental project using Apache Kafka and an ELK setup to explore messaging and observability.', projectJwt: 'A learning and testing project focused on JWT-based authentication with Spring Security.', projectProfiles: 'Experiments with configuration profiles in Java and Spring Boot applications.', projectCache: 'A personal project exploring caching mechanisms in the Spring ecosystem.', allProjects: 'Explore all my repositories on GitHub',
    educationLabel: '<span>05</span> EDUCATION', educationKicker: 'ACADEMIC BACKGROUND', educationTitle: 'A practical foundation.<br><em>Continuous learning.</em>', education1: 'Computer Engineering studies', education2: 'Higher Vocational Diploma in Multiplatform Application Development', education2Sub: 'Higher vocational education', education3: 'Vocational Diploma in Microcomputer Systems and Networks', education3Sub: 'Intermediate vocational education', languagesLabel: 'LANGUAGES', languagesNative: 'Spanish and Arabic · Native / bilingual', languagesEnglish: 'English · Currently studying EOI C2.1',
    contactKicker: 'GET IN TOUCH', contactTitle: 'Great systems<br>start with <em>a conversation.</em>', contactText: 'If you would like to discuss backend engineering, architecture, technical leadership or a professional opportunity, I’d be happy to connect.', contactLinkedin: 'Connect on LinkedIn', contactStamp: 'BUILD WITH<br>INTENTION', backToTop: 'Back to top ↑', menuOpen: 'Open menu', menuClose: 'Close menu', switchLanguage: 'Cambiar a español', pageTitle: 'Isam Zahriou Berrak — Tech Lead & Java Backend Engineer', metaDescription: 'Isam Zahriou Berrak — Tech Lead and Java Backend Engineer focused on financial services, APIs and system integration.'
  }
};

function setLanguage(language) {
  const lang = translations[language] ? language : 'es';
  const dictionary = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) element.innerHTML = dictionary[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    const key = element.dataset.i18nAria;
    if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
  });
  document.title = dictionary.pageTitle;
  const description = document.querySelector('#meta-description');
  if (description) description.setAttribute('content', dictionary.metaDescription);
  document.querySelectorAll('[data-lang-option]').forEach(option => {
    const active = option.dataset.langOption === lang;
    option.classList.toggle('active', active);
    option.setAttribute('aria-pressed', String(active));
  });
  if (languageToggle) languageToggle.setAttribute('aria-label', dictionary.switchLanguage);
  if (toggle) toggle.setAttribute('aria-label', nav?.classList.contains('open') ? dictionary.menuClose : dictionary.menuOpen);
  try { localStorage.setItem('portfolio-language', lang); } catch (_) { /* Storage may be unavailable in private browsing. */ }
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    const lang = document.documentElement.lang || 'es';
    toggle.setAttribute('aria-label', open ? translations[lang].menuClose : translations[lang].menuOpen);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    const lang = document.documentElement.lang || 'es';
    toggle.setAttribute('aria-label', translations[lang].menuOpen);
  }));
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    if (nav?.classList.contains('open')) {
      nav.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
    const nextLanguage = document.documentElement.lang === 'es' ? 'en' : 'es';
    setLanguage(nextLanguage);
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
let savedLanguage = 'es';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'es'; } catch (_) { /* Keep Spanish as the default. */ }
setLanguage(savedLanguage);
