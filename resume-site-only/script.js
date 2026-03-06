const THEME_KEY = "resume-theme";
const LANGUAGE_KEY = "resume-language";
const LANG_EN = "en";
const LANG_PT = "pt-PT";

const themeToggle = document.getElementById("theme-toggle");
const themeToggleSrOnly = themeToggle?.querySelector(".sr-only");
const langToggle = document.getElementById("lang-toggle");
const printButton = document.getElementById("print-btn");
const printLabel = printButton?.querySelector(".pill-label");
const homeLink = document.querySelector(".actions > a.pill-btn.ghost");
const homeLinkSrOnly = homeLink?.querySelector(".sr-only");

const metaLine = document.querySelector(".identity .meta");
const sections = document.querySelectorAll("main.resume > section");
const introSection = sections[0];
const expSkillsSection = sections[1];
const projectsCoursesSection = sections[2];
const educationStrengthsSection = sections[3];

const expCol = expSkillsSection?.querySelectorAll(".col")[0];
const skillsCol = expSkillsSection?.querySelectorAll(".col")[1];
const projectsCol = projectsCoursesSection?.querySelectorAll(".col")[0];
const coursesCol = projectsCoursesSection?.querySelectorAll(".col")[1];
const educationCol = educationStrengthsSection?.querySelectorAll(".col")[0];
const strengthsCol = educationStrengthsSection?.querySelectorAll(".col")[1];
const footerParagraph = document.querySelector("footer.footer p");

const translations = {
  [LANG_EN]: {
    langButton: "PT-PT",
    langButtonAria: "Switch language to European Portuguese",
    backHomeAria: "Back to portfolio home",
    backHomeLabel: "Back to portfolio home",
    themeToggleLabel: "Toggle theme",
    themeSwitchToLight: "Switch to light theme",
    themeSwitchToDark: "Switch to dark theme",
    printAria: "Download CV",
    printLabel: "CV",
    metaLine:
      "Cascais, Portugal · <a href=\"mailto:danielarosadolealtorresalmeida@gmail.com\">danielarosadolealtorresalmeida@gmail.com</a> · <a href=\"https://github.com/danielatorresalmeida\" target=\"_blank\" rel=\"noopener\">github.com/danielatorresalmeida</a>",
    objectiveTitle: "Objective",
    objectiveBody:
      "Career-changer with a background in arts and music education, now pursuing a career in software development and quality assurance. Experienced in UI/UX design, front-end development, and QA testing with Python, JavaScript, and modern web technologies. Skilled at adapting quickly to new challenges, collaborating in agile teams, and applying creativity to problem-solving. Passionate about building user-centered digital solutions and contributing to innovative, quality-driven projects.",
    experienceTitle: "Experience",
    experienceItems: [
      {
        title: "Software Development Intern - Flo Labs R&D",
        when: "Sep 2025 - Present",
        bullets: [
          "Designed and implemented 10+ UI/UX features, improving engagement by 50% using HTML, CSS, JavaScript, PHP, and TypeScript.",
          "Supported back-end development with Python (FastAPI).",
          "Assisted in QA testing and documentation to ensure product quality.",
          "Reduced bug turnaround time by approximately 20% through structured QA testing.",
        ],
      },
      {
        title: "LLM Trainer (Portuguese & English) - Remote",
        when: "Aug 2024 - Present",
        bullets: [
          "Reviewed and corrected AI-generated prompts and responses.",
          "Ensured linguistic accuracy and cultural relevance in both languages.",
        ],
      },
      {
        title: "Music Educator (Voice, Piano, Violin, Viola) - Various Institutions",
        when: "2018 - 2025",
        bullets: [
          "Delivered lessons across multiple instruments; strengthened communication, adaptability, and teamwork for agile software teams.",
        ],
      },
      {
        title: "Hospitality - Cook & Baker Roles",
        when: "2016 - 2018",
        where: "Cantinho do Avillez - Gleba Moagem e Padaria - Lagoas Park Hotel",
        bullets: [
          "Food preparation, pastry, and bread-making; developed precision and time management.",
        ],
      },
    ],
        skillsTitle: "Technical Skills",
    skillGroups: [
      {
        title: "Frontend Development",
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js"],
      },
      {
        title: "Design & Layout",
        items: ["UI/UX Design", "Responsive Design", "Wireframing", "Accessibility (WCAG)", "Component Systems"],
      },
      {
        title: "Tools & Workflows",
        items: ["Git / GitHub", "GitHub Actions", "QA Testing", "Postman", "Python Automation", "Supabase"],
      },
    ],
    keySkillsTitle: "Key Skills",
    keySkills: [
      "JavaScript",
      "React",
      "Next.js",
      "UI/UX Design",
      "Responsive Design",
      "QA Testing",
      "API Testing",
      "GitHub Actions",
      "Python",
      "Supabase",
    ],
    projectsTitle: "Projects",
    projectItems: [
      {
        title: "Automated QA Test Suite (Python / Pytest)",
        bullet: "Validated API endpoints, reducing manual testing time by approximately 30%.",
      },
      {
        title: "Responsive Portfolio Website",
        bullet: "Built with HTML, CSS, and JavaScript; deployed on GitHub Pages with CI/CD via Actions.",
      },
    ],
    coursesTitle: "Courses & Certifications",
    courses: [
      "Python Software Language - Programming Hub (Aug 2025 - Present)",
      "Fundamentals of Quality Assurance Engineer - Udemy (Jul 2025)",
      "Foundations of Software Testing and Validation - University of Leeds (Jul 2025)",
    ],
    educationTitle: "Education",
    educationItems: [
      {
        title: "Diploma in Viola d'Arco (8th Grade) - Final 16/20",
        when: "2006 - 2018",
        text: "Intensive training in viola, voice, choir, and chamber/orchestral performance.",
      },
      {
        title: "Kitchen Management & Production (Level V) - Final 16/20",
        when: "Escola de Hotelaria e Turismo de Setubal · 2015 - 2016",
      },
      {
        title: "Science & Technology Track (Biology & Geology) - Final 15/20",
        when: "Escola Secundaria de Vergilio Ferreira · 2013 - 2015",
      },
    ],
    strengthsTitle: "Key Strengths",
    strengths: [
      "<strong>Communication</strong> - strengthened through teaching and mentoring.",
      "<strong>Adaptability</strong> - rapid learning across disciplines and technologies.",
      "<strong>Problem-Solving</strong> - from instructional design to debugging and QA.",
    ],
    footerMeta: "Daniela Torres Almeida - Built with HTML/CSS/JS - Hosted on GitHub Pages",
  },
  [LANG_PT]: {
    langButton: "EN",
    langButtonAria: "Switch language to English",
    backHomeAria: "Voltar ao portefólio",
    backHomeLabel: "Voltar ao portefólio",
    themeToggleLabel: "Alternar tema",
    themeSwitchToLight: "Mudar para tema claro",
    themeSwitchToDark: "Mudar para tema escuro",
    printAria: "Descarregar CV",
    printLabel: "CV",
    metaLine:
      "Cascais, Portugal · <a href=\"mailto:danielarosadolealtorresalmeida@gmail.com\">danielarosadolealtorresalmeida@gmail.com</a> · <a href=\"https://github.com/danielatorresalmeida\" target=\"_blank\" rel=\"noopener\">github.com/danielatorresalmeida</a>",
    objectiveTitle: "Objetivo Profissional",
    objectiveBody:
      "Profissional em transição, com percurso em artes e educação musical, atualmente focada em desenvolvimento de software e garantia de qualidade. Experiência em design de UI/UX, desenvolvimento front-end e testes de QA com Python, JavaScript e tecnologias web modernas. Elevada capacidade de adaptação a novos desafios, colaboração em equipas ágeis e aplicação de criatividade à resolução de problemas. Compromisso com soluções digitais centradas no utilizador e com a entrega de projetos inovadores e orientados para a qualidade.",
    experienceTitle: "Experiência",
    experienceItems: [
      {
        title: "Estagiária de Desenvolvimento de Software - Flo Labs R&D",
        when: "Set 2025 - Presente",
        bullets: [
          "Conceção e implementação de mais de 10 funcionalidades de UI/UX, com melhoria de 50% no envolvimento, através de HTML, CSS, JavaScript, PHP e TypeScript.",
          "Apoio ao desenvolvimento de back-end com Python (FastAPI).",
          "Colaboração em testes de QA e documentação para assegurar a qualidade do produto.",
          "Redução do tempo de resposta a erros em cerca de 20% através de testes de QA estruturados.",
        ],
      },
      {
        title: "LLM Trainer (Português e Inglês) - Remoto",
        when: "Ago 2024 - Presente",
        bullets: [
          "Revisão e correção de prompts e respostas gerados por IA.",
          "Garantia de rigor linguístico e adequação cultural em ambos os idiomas.",
        ],
      },
      {
        title: "Docente de Música (Canto, Piano, Violino e Viola) - Várias Instituições",
        when: "2018 - 2025",
        bullets: [
          "Lecionação em múltiplos instrumentos, reforçando comunicação, adaptabilidade e trabalho em equipa aplicáveis a contextos ágeis de software.",
        ],
      },
      {
        title: "Hotelaria - Funções de Cozinha e Padaria",
        when: "2016 - 2018",
        where: "Cantinho do Avillez - Gleba Moagem e Padaria - Lagoas Park Hotel",
        bullets: [
          "Preparação alimentar, pastelaria e panificação, com desenvolvimento de precisão e gestão de tempo.",
        ],
      },
    ],
        skillsTitle: "Compet�ncias T�cnicas",
    skillGroups: [
      {
        title: "Desenvolvimento Front-End",
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js"],
      },
      {
        title: "Design e Layout",
        items: ["Design UI/UX", "Design Responsivo", "Wireframing", "Acessibilidade (WCAG)", "Sistemas de Componentes"],
      },
      {
        title: "Ferramentas e Fluxos",
        items: ["Git / GitHub", "GitHub Actions", "Testes de QA", "Postman", "Automa��o com Python", "Supabase"],
      },
    ],
    keySkillsTitle: "Compet�ncias-chave",
    keySkills: [
      "JavaScript",
      "React",
      "Next.js",
      "Design UI/UX",
      "Design Responsivo",
      "Testes de QA",
      "Testes de API",
      "GitHub Actions",
      "Python",
      "Supabase",
    ],
    projectsTitle: "Projetos",
    projectItems: [
      {
        title: "Suite Automatizada de Testes de QA (Python / Pytest)",
        bullet: "Validação de endpoints de API, com redução de aproximadamente 30% no tempo de testes manuais.",
      },
      {
        title: "Website de Portefólio Responsivo",
        bullet: "Desenvolvido com HTML, CSS e JavaScript; publicado em GitHub Pages com CI/CD via Actions.",
      },
    ],
    coursesTitle: "Cursos e Certificações",
    courses: [
      "Python Software Language - Programming Hub (Ago 2025 - Presente)",
      "Fundamentals of Quality Assurance Engineer - Udemy (Jul 2025)",
      "Foundations of Software Testing and Validation - University of Leeds (Jul 2025)",
    ],
    educationTitle: "Formação",
    educationItems: [
      {
        title: "Diploma em Viola d'Arco (8.º Grau) - Classificação Final 16/20",
        when: "2006 - 2018",
        text: "Formação intensiva em viola d'arco, voz, coro e performance de câmara/orquestra.",
      },
      {
        title: "Gestão e Produção de Cozinha (Nível V) - Classificação Final 16/20",
        when: "Escola de Hotelaria e Turismo de Setúbal · 2015 - 2016",
      },
      {
        title: "Curso de Ciências e Tecnologias (Biologia e Geologia) - Classificação Final 15/20",
        when: "Escola Secundária de Vergílio Ferreira · 2013 - 2015",
      },
    ],
    strengthsTitle: "Pontos Fortes",
    strengths: [
      "<strong>Comunicação</strong> - desenvolvida através do ensino e da mentoria.",
      "<strong>Adaptabilidade</strong> - aprendizagem rápida em diferentes áreas e tecnologias.",
      "<strong>Resolução de Problemas</strong> - da conceção pedagógica à depuração e ao QA.",
    ],
    footerMeta: "Daniela Torres Almeida - Desenvolvido com HTML/CSS/JS - Publicado no GitHub Pages",
  },
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
  themeToggle.setAttribute("data-theme-state", mode);
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(THEME_KEY, mode);
  updateToggleState(mode);
}

function renderResumeText() {
  const introTitle = introSection?.querySelector("h2");
  const introBody = introSection?.querySelector("p");
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
  setHTML(metaLine, t("metaLine"));

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

