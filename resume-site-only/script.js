const THEME_KEY = "resume-theme";
const LANGUAGE_KEY = "resume-language";
const LANG_EN = "en";
const LANG_PT = "pt-PT";

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeToggleSrOnly = themeToggle?.querySelector(".sr-only");
const langToggle = document.getElementById("lang-toggle");
const printButton = document.getElementById("print-btn");
const printLabel = printButton?.querySelector(".pill-label");
const homeLink = document.querySelector(".actions > a.pill-btn.ghost");
const homeLinkSrOnly = homeLink?.querySelector(".sr-only");
const THEME_ICONS = {
  light: "assets/light.png",
  dark: "assets/dark.png",
};

const metaLine = document.querySelector(".identity .meta");
const introSection = document.getElementById("intro-section");
const expCol = document.getElementById("experience-col");
const skillsCol = document.getElementById("skills-col");
const projectsCol = document.getElementById("projects-col");
const coursesCol = document.getElementById("courses-col");
const educationCol = document.getElementById("education-col");
const strengthsCol = document.getElementById("strengths-col");
const footerParagraph = document.querySelector("footer.footer p");

const WHATSAPP_ICON = '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .17 5.34.17 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.9 11.9 0 0 0 5.77 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.44Zm-8.45 18.33h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.84 9.84 0 0 1 1.52-12.3 9.84 9.84 0 0 1 16.8 6.96c0 5.43-4.42 9.86-9.86 9.86Zm5.41-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"></path></svg>';
const LINKEDIN_ICON = '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0ZM7.12 20.45H3.56V9h3.56v11.45ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm15.11 13.02H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29Z"></path></svg>';
function contactLine(pt) {
  return `${pt ? "Cascais / Área de Lisboa, Portugal" : "Cascais / Lisbon area, Portugal"} &middot; <a class="meta-link" href="mailto:daniela@torresalmeida.com">daniela@torresalmeida.com</a> &middot; <a class="meta-link meta-whatsapp" href="https://wa.me/351962046821" target="_blank" rel="noopener noreferrer" aria-label="${pt ? "Abrir conversa no WhatsApp" : "Open WhatsApp chat"}">${WHATSAPP_ICON}<span>WhatsApp</span></a> &middot; <a class="meta-link" href="https://www.linkedin.com/in/daniela-torres-almeida-945884205/" target="_blank" rel="noopener">${LINKEDIN_ICON}<span>LinkedIn</span></a> &middot; <a class="meta-link" href="https://github.com/danielatorresalmeida" target="_blank" rel="noopener">GitHub</a> &middot; <a class="meta-link" href="https://danielatorresalmeida.github.io/Portfolio-website/" target="_blank" rel="noopener">${pt ? "Portefólio" : "Portfolio"}</a>`;
}
const translations = {
  "en": {
    "langButton": "PT-PT",
    "langButtonAria": "Switch language to European Portuguese",
    "backHomeAria": "Back to portfolio home",
    "backHomeLabel": "Home",
    "themeToggleLabel": "Toggle theme",
    "themeSwitchToLight": "Switch to light theme",
    "themeSwitchToDark": "Switch to dark theme",
    "printAria": "Download CV in English",
    "printLabel": "CV",
    "location": "Cascais / Lisbon area, Portugal",
    "professionalTitle": "Software Developer in Training | Full-Stack · Software Engineering · Automation",
    "objectiveTitle": "Professional Summary",
    "objectiveBody": "Career changer into software development, with practical full-stack work using Java 21 / Spring Boot, React / TypeScript, PostgreSQL, REST APIs, Git/GitHub and CI. Previous Software Development Intern at FloLabs Innovations Group, working on APIs, integrations, workflow automation and software testing, with exposure to Python/FastAPI. Currently attending the CESAE Digital Software Developer programme and learning C#, following a completed 350-hour IEFP Java course. Seeking a curricular FPCT, with the aim of progressing into a Junior Software Developer position.",
    "experienceTitle": "Experience",
    "skillsTitle": "Technical Skills",
    "keySkillsTitle": "Key Skills",
    "projectsTitle": "Projects",
    "coursesTitle": "Software Development Training",
    "educationTitle": "Earlier Education",
    "strengthsTitle": "Areas of Practice",
    "footerMeta": "Daniela Torres Almeida - Built with HTML/CSS/JS - Hosted on GitHub Pages",
    "experienceItems": [
      {
        "title": "Software Development Intern - FloLabs Innovations Group",
        "when": "Aug 2025 - Sep 2026",
        "where": "Remote",
        "bullets": [
          "Front-end implementation using HTML, CSS, JavaScript and TypeScript.",
          "Worked on APIs, integrations and workflow automation, including Notion to Discord automation using AWS Lambda.",
          "Exposure to Python/FastAPI; testing, debugging and technical documentation."
        ]
      },
      {
        "title": "LLM Trainer - Portuguese & English",
        "when": "Aug 2024 - Sep 2026",
        "where": "Remote",
        "bullets": [
          "Evaluated and reviewed AI-generated prompts and responses for accuracy, relevance, consistency, and linguistic and cultural adequacy."
        ]
      },
      {
        "title": "Music Educator",
        "when": "2018 - 2025",
        "bullets": [
          "Taught voice, piano, violin and viola at various institutions."
        ]
      },
      {
        "title": "Hospitality - Cook & Baker Roles",
        "when": "2016 - 2018",
        "where": "Cantinho do Avillez · Gleba Moagem e Padaria · Lagoas Park Hotel",
        "bullets": [
          "Food preparation, pastry and bread-making."
        ]
      }
    ],
    "skillGroups": [
      {
        "title": "Programming",
        "items": [
          "Java",
          "C# (currently learning)",
          "JavaScript",
          "TypeScript",
          "C",
          "SQL"
        ]
      },
      {
        "title": "Front-End",
        "items": [
          "React",
          "HTML",
          "CSS",
          "Responsive Web Design",
          "Accessibility"
        ]
      },
      {
        "title": "Back-End & APIs",
        "items": [
          "Spring Boot",
          "REST APIs",
          "JPA",
          "Python/FastAPI exposure",
          "Firebase"
        ]
      },
      {
        "title": "Databases",
        "items": [
          "PostgreSQL",
          "SQL",
          "Firebase / Firestore"
        ]
      },
      {
        "title": "Engineering & Quality",
        "items": [
          "Git / GitHub",
          "GitHub Actions / CI",
          "Selenium",
          "Automated Testing",
          "API Testing",
          "Postman",
          "Debugging"
        ]
      },
      {
        "title": "Automation & Additional",
        "items": [
          "AWS Lambda",
          "API integrations",
          "Workflow automation",
          "Figma",
          "UI/UX"
        ]
      }
    ],
    "keySkills": [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Git / GitHub",
      "CI"
    ],
    "projectItems": [
      {
        "title": "DevFlow Hub",
        "stack": "Java 21 · Spring Boot · React · TypeScript · PostgreSQL",
        "url": "https://github.com/danielatorresalmeida/DevFlow_Hub",
        "image": null,
        "bullet": "Full-stack project-management application with a REST API, PostgreSQL persistence, JWT authentication, role-based access, document authorisation, automated back-end/front-end tests and CI."
      },
      {
        "title": "Portfolio Website",
        "stack": "HTML · CSS · JavaScript · Selenium",
        "url": "https://github.com/danielatorresalmeida/Portfolio-website",
        "image": "responsive-portfolio.png",
        "bullet": "Responsive bilingual portfolio with accessibility features, keyboard navigation, automated Selenium/visual checks and GitHub Pages deployment."
      },
      {
        "title": "To-Do List App",
        "stack": "React · TypeScript · Firebase",
        "url": null,
        "image": "todo-list-app.png",
        "bullet": "Application with authentication, synchronisation, Google Calendar integration and logic tests."
      },
      {
        "title": "Basic Music App",
        "stack": "Python · FastAPI · Spotify API",
        "url": null,
        "image": null,
        "bullet": "Back-end application using Spotify OAuth and API integration."
      }
    ],
    "courses": [
      "Software Developer - CESAE Digital · PRO_MOV by Reskilling4Employment | 22 Sep 2026 - 20 May 2027. In progress; current learning includes C#. 1050 hours: 50h transversal skills, 600h technical training and 400h curricular internship / FPCT. FPCT: 1 Mar 2027 - 20 May 2027.",
      "Programming Languages - JAVA - IEFP / Centro de Emprego e Formação Profissional de Faro | 350 hours; completed Jul 2026. Java, Java Web Development, algorithms, C/C++ fundamentals, SQL, database access, Software Engineering, development methodologies and programming projects.",
      "Website Design - IEFP | 25 hours; completed Mar 2026.",
      "Fundamentals of Quality Assurance Engineer - Udemy | Jul 2025.",
      "Foundations of Software Testing and Validation - University of Leeds | Jul 2025.",
      "Python Software Language - Programming Hub | Started Aug 2025; completion not confirmed."
    ],
    "educationItems": [
      {
        "title": "Diploma in Viola d'Arco (8th Grade) - Final 16/20",
        "when": "2006 - 2018",
        "text": "Training in viola, voice, choir and chamber/orchestral performance."
      },
      {
        "title": "Kitchen Management & Production (Level V) - Final 16/20",
        "when": "Escola de Hotelaria e Turismo de Setúbal · 2015 - 2016"
      },
      {
        "title": "Science & Technology Track (Biology & Geology) - Final 15/20",
        "when": "Escola Secundária de Vergílio Ferreira · 2013 - 2015"
      }
    ],
    "strengths": [
      "Full-stack development with Java / Spring Boot and React / TypeScript.",
      "REST APIs, relational databases and integrations.",
      "Software testing, debugging and technical documentation.",
      "Workflow automation and continuous integration."
    ]
  },
  "pt-PT": {
    "langButton": "EN",
    "langButtonAria": "Mudar idioma para inglês",
    "backHomeAria": "Voltar ao portefólio",
    "backHomeLabel": "Início",
    "themeToggleLabel": "Alternar tema",
    "themeSwitchToLight": "Mudar para tema claro",
    "themeSwitchToDark": "Mudar para tema escuro",
    "printAria": "Descarregar CV em português",
    "printLabel": "CV",
    "location": "Cascais / Área de Lisboa, Portugal",
    "professionalTitle": "Software Developer em Formação | Full-Stack · Engenharia de Software · Automação",
    "objectiveTitle": "Perfil Profissional",
    "objectiveBody": "Em transição de carreira para desenvolvimento de software, com trabalho prático full-stack em Java 21 / Spring Boot, React / TypeScript, PostgreSQL, APIs REST, Git/GitHub e CI. Estágio anterior em desenvolvimento de software na FloLabs Innovations Group, com trabalho em APIs, integrações, automação de processos e testes de software, e contacto com Python/FastAPI. Atualmente a frequentar o programa Software Developer do CESAE Digital e a aprender C#, após concluir o curso de Java de 350 horas do IEFP. Procuro uma FPCT curricular, com o objetivo de progredir para uma função de Junior Software Developer.",
    "experienceTitle": "Experiência",
    "skillsTitle": "Competências Técnicas",
    "keySkillsTitle": "Competências-chave",
    "projectsTitle": "Projetos",
    "coursesTitle": "Formação em Desenvolvimento de Software",
    "educationTitle": "Formação Anterior",
    "strengthsTitle": "Áreas de Prática",
    "footerMeta": "Daniela Torres Almeida - Desenvolvido com HTML/CSS/JS - Publicado no GitHub Pages",
    "experienceItems": [
      {
        "title": "Estagiária de Desenvolvimento de Software - FloLabs Innovations Group",
        "when": "Ago 2025 - Set 2026",
        "where": "Remoto",
        "bullets": [
          "Implementação de front-end com HTML, CSS, JavaScript e TypeScript.",
          "Trabalho com APIs, integrações e automação de processos, incluindo automação de Notion para Discord com AWS Lambda.",
          "Contacto com Python/FastAPI; testes, depuração e documentação técnica."
        ]
      },
      {
        "title": "LLM Trainer - Português e Inglês",
        "when": "Ago 2024 - Set 2026",
        "where": "Remoto",
        "bullets": [
          "Avaliação e revisão de prompts e respostas gerados por IA quanto ao rigor, relevância, consistência e adequação linguística e cultural."
        ]
      },
      {
        "title": "Docente de Música",
        "when": "2018 - 2025",
        "bullets": [
          "Ensino de canto, piano, violino e viola em várias instituições."
        ]
      },
      {
        "title": "Hotelaria - Funções de Cozinha e Padaria",
        "when": "2016 - 2018",
        "where": "Cantinho do Avillez · Gleba Moagem e Padaria · Lagoas Park Hotel",
        "bullets": [
          "Preparação alimentar, pastelaria e panificação."
        ]
      }
    ],
    "skillGroups": [
      {
        "title": "Programação",
        "items": [
          "Java",
          "C# (em aprendizagem)",
          "JavaScript",
          "TypeScript",
          "C",
          "SQL"
        ]
      },
      {
        "title": "Front-End",
        "items": [
          "React",
          "HTML",
          "CSS",
          "Design Web Responsivo",
          "Acessibilidade"
        ]
      },
      {
        "title": "Back-End e APIs",
        "items": [
          "Spring Boot",
          "APIs REST",
          "JPA",
          "Contacto com Python/FastAPI",
          "Firebase"
        ]
      },
      {
        "title": "Bases de Dados",
        "items": [
          "PostgreSQL",
          "SQL",
          "Firebase / Firestore"
        ]
      },
      {
        "title": "Engenharia e Qualidade",
        "items": [
          "Git / GitHub",
          "GitHub Actions / CI",
          "Selenium",
          "Testes Automatizados",
          "Testes de API",
          "Postman",
          "Depuração"
        ]
      },
      {
        "title": "Automação e Outras Competências",
        "items": [
          "AWS Lambda",
          "Integrações de APIs",
          "Automação de processos",
          "Figma",
          "UI/UX"
        ]
      }
    ],
    "keySkills": [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Git / GitHub",
      "CI"
    ],
    "projectItems": [
      {
        "title": "DevFlow Hub",
        "stack": "Java 21 · Spring Boot · React · TypeScript · PostgreSQL",
        "url": "https://github.com/danielatorresalmeida/DevFlow_Hub",
        "image": null,
        "bullet": "Aplicação full-stack de gestão de projetos com API REST, persistência em PostgreSQL, autenticação JWT, controlo de acesso por função, autorização de acesso a documentos, testes automatizados de back-end/front-end e CI."
      },
      {
        "title": "Portfolio Website",
        "stack": "HTML · CSS · JavaScript · Selenium",
        "url": "https://github.com/danielatorresalmeida/Portfolio-website",
        "image": "responsive-portfolio.png",
        "bullet": "Portefólio bilingue e responsivo com funcionalidades de acessibilidade, navegação por teclado, verificações automatizadas com Selenium e verificações visuais, e publicação no GitHub Pages."
      },
      {
        "title": "To-Do List App",
        "stack": "React · TypeScript · Firebase",
        "url": null,
        "image": "todo-list-app.png",
        "bullet": "Aplicação com autenticação, sincronização, integração com Google Calendar e testes de lógica."
      },
      {
        "title": "Basic Music App",
        "stack": "Python · FastAPI · Spotify API",
        "url": null,
        "image": null,
        "bullet": "Aplicação back-end com OAuth do Spotify e integração de API."
      }
    ],
    "courses": [
      "Software Developer - CESAE Digital · PRO_MOV by Reskilling4Employment | 22 Set 2026 - 20 Mai 2027. Em curso; aprendizagem atual de C#. 1050 horas: 50h de competências transversais, 600h de formação técnica e 400h de estágio curricular / FPCT. FPCT: 1 Mar 2027 - 20 Mai 2027.",
      "Linguagens de Programação - JAVA - IEFP / Centro de Emprego e Formação Profissional de Faro | 350 horas; concluído em Jul 2026. Java, desenvolvimento Web em Java, algoritmos, fundamentos de C/C++, SQL, acesso a bases de dados, Engenharia de Software, metodologias de desenvolvimento e projetos de programação.",
      "Conceção de Web Sites - IEFP | 25 horas; concluído em Mar 2026.",
      "Fundamentals of Quality Assurance Engineer - Udemy | Jul 2025.",
      "Foundations of Software Testing and Validation - University of Leeds | Jul 2025.",
      "Python Software Language - Programming Hub | Iniciado em Ago 2025; conclusão não confirmada."
    ],
    "educationItems": [
      {
        "title": "Diploma em Viola d'Arco (8.º Grau) - Classificação Final 16/20",
        "when": "2006 - 2018",
        "text": "Formação em viola d'arco, canto, coro e música de câmara/orquestra."
      },
      {
        "title": "Gestão e Produção de Cozinha (Nível V) - Classificação Final 16/20",
        "when": "Escola de Hotelaria e Turismo de Setúbal · 2015 - 2016"
      },
      {
        "title": "Curso de Ciências e Tecnologias (Biologia e Geologia) - Classificação Final 15/20",
        "when": "Escola Secundária de Vergílio Ferreira · 2013 - 2015"
      }
    ],
    "strengths": [
      "Desenvolvimento full-stack com Java / Spring Boot e React / TypeScript.",
      "APIs REST, bases de dados relacionais e integrações.",
      "Testes de software, depuração e documentação técnica.",
      "Automação de processos e integração contínua."
    ]
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY);
if (currentLanguage !== LANG_EN && currentLanguage !== LANG_PT) {
  currentLanguage = LANG_EN;
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations[LANG_EN][key] || "";
}

function setText(node, value) {
  if (node) node.textContent = value;
}

function setHTML(node, value) {
  if (node) node.innerHTML = value;
}

function updateToggleState(mode) {
  if (!themeToggle) return;
  const ariaLabel = mode === "light" ? t("themeSwitchToDark") : t("themeSwitchToLight");
  themeToggle.setAttribute("aria-label", ariaLabel);
  themeToggle.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
  themeToggle.classList.toggle("is-dark", mode === "dark");
  themeToggle.classList.toggle("is-light", mode === "light");
  if (themeIcon) {
    themeIcon.src = mode === "dark" ? THEME_ICONS.dark : THEME_ICONS.light;
  }
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(THEME_KEY, mode);
  updateToggleState(mode);
}

function renderResumeText() {
  const introTitle = introSection?.querySelector("h2");
  const introBody = introSection?.querySelector("#summary");
  setText(introTitle, t("objectiveTitle"));
  setText(introBody, t("objectiveBody"));

  const experienceTitle = expCol?.querySelector("h2");
  setText(experienceTitle, t("experienceTitle"));
  const experienceItems = expCol?.querySelectorAll(".item") || [];
  const translatedExperience = t("experienceItems");

  experienceItems.forEach((item, index) => {
    const translated = translatedExperience[index];
    if (!translated) return;
    setText(item.querySelector("h3"), translated.title);
    setText(item.querySelector(".when"), translated.when);
    if (translated.where !== undefined) setText(item.querySelector(".where"), translated.where);
    const bullets = item.querySelectorAll("li");
    bullets.forEach((bullet, bulletIndex) => {
      setText(bullet, translated.bullets[bulletIndex] || "");
    });
  });

  const skillsTitle = skillsCol?.querySelector("h2");
  setText(skillsTitle, t("skillsTitle"));
  const skillCards = skillsCol?.querySelectorAll(".skill-group-card") || [];
  const translatedSkills = t("skillGroups");
  skillCards.forEach((card, index) => {
    const group = translatedSkills[index];
    if (!group) return;
    setText(card.querySelector("h4"), group.title);
    const list = card.querySelector(".skill-points");
    if (!list) return;
    list.innerHTML = "";
    const items = Array.isArray(group.items) ? group.items : [];
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  });

  const keySkillsHeading = skillsCol?.querySelector(".skill-key-card h4");
  setText(keySkillsHeading, t("keySkillsTitle"));
  const keySkillsWrap = skillsCol?.querySelector("#key-skills-tags");
  if (keySkillsWrap) {
    keySkillsWrap.innerHTML = "";
    const keySkills = t("keySkills");
    keySkills.forEach((item) => {
      const chip = document.createElement("span");
      chip.textContent = item;
      keySkillsWrap.appendChild(chip);
    });
  }

  const projectsTitle = projectsCol?.querySelector("h2");
  setText(projectsTitle, t("projectsTitle"));
  const projectItems = projectsCol?.querySelectorAll(".item") || [];
  const translatedProjects = t("projectItems");
  projectItems.forEach((item, index) => {
    const translated = translatedProjects[index];
    if (!translated) return;
    setText(item.querySelector("h3"), translated.title);
    setText(item.querySelector("li"), translated.bullet);
    setText(item.querySelector(".project-source"), currentLanguage === LANG_PT ? "Repositório no GitHub" : "GitHub repository");
    const shot = item.querySelector("img");
    if (shot) shot.alt = `${translated.title} - ${currentLanguage === LANG_PT ? "captura de ecrã" : "screenshot"}`;
  });

  const coursesTitle = coursesCol?.querySelector("h2");
  setText(coursesTitle, t("coursesTitle"));
  const courseItems = coursesCol?.querySelectorAll("li") || [];
  const translatedCourses = t("courses");
  courseItems.forEach((item, index) => {
    setText(item, translatedCourses[index] || "");
  });

  const educationTitle = educationCol?.querySelector("h2");
  setText(educationTitle, t("educationTitle"));
  const educationItems = educationCol?.querySelectorAll(".item") || [];
  const translatedEducation = t("educationItems");
  educationItems.forEach((item, index) => {
    const translated = translatedEducation[index];
    if (!translated) return;
    setText(item.querySelector("h3"), translated.title);
    setText(item.querySelector(".when"), translated.when);
    if (translated.text !== undefined) setText(item.querySelector("p"), translated.text);
  });

  const strengthsTitle = strengthsCol?.querySelector("h2");
  setText(strengthsTitle, t("strengthsTitle"));
  const strengthItems = strengthsCol?.querySelectorAll("li") || [];
  const translatedStrengths = t("strengths");
  strengthItems.forEach((item, index) => {
    setHTML(item, translatedStrengths[index] || "");
  });

  setHTML(
    footerParagraph,
    `&copy; <span id="year"></span> ${t("footerMeta")}`
  );
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function applyLanguage(language) {
  currentLanguage = language === LANG_PT ? LANG_PT : LANG_EN;
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;

  setText(langToggle?.querySelector(".pill-label"), t("langButton"));
  if (langToggle) langToggle.setAttribute("aria-label", t("langButtonAria"));

  if (homeLink) homeLink.setAttribute("aria-label", t("backHomeAria"));
  setText(homeLinkSrOnly, t("backHomeLabel"));
  setText(themeToggleSrOnly, t("themeToggleLabel"));

  if (printButton) printButton.setAttribute("aria-label", t("printAria"));
  setText(printLabel, t("printLabel"));
  setHTML(metaLine, contactLine(currentLanguage === LANG_PT));
  setText(homeLink?.querySelector(".pill-label"), t("backHomeLabel"));
  setText(document.getElementById("professional-title"), t("professionalTitle"));
  document.querySelector('meta[name="description"]')?.setAttribute("content", `Daniela Torres Almeida - ${t("professionalTitle")}`);
  const cvLink = document.getElementById("cv-link");
  if (cvLink) {
    cvLink.href = currentLanguage === LANG_PT ? "assets/Daniela-Torres-Almeida-Resume-pt-PT.pdf" : "assets/Daniela-Torres-Almeida-Resume.pdf";
    cvLink.setAttribute("aria-label", t("printAria"));
  }
  document.querySelector(".name-linkedin")?.setAttribute("aria-label", currentLanguage === LANG_PT ? "Abrir perfil no LinkedIn" : "Open LinkedIn profile");

  renderResumeText();
  updateToggleState(document.documentElement.getAttribute("data-theme") || "dark");
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "light" || savedTheme === "dark") {
  applyTheme(savedTheme);
} else {
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "light" : "dark");
}

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(currentTheme === "light" ? "dark" : "light");
});

langToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === LANG_PT ? LANG_EN : LANG_PT);
});

printButton?.addEventListener("click", () => window.print());

applyLanguage(currentLanguage);




// The contact bar wraps differently by viewport and language.
const topbar = document.querySelector(".topbar");
if (topbar && typeof ResizeObserver !== "undefined") {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty("--topbar-height", `${topbar.getBoundingClientRect().height}px`);
  }).observe(topbar);
}
