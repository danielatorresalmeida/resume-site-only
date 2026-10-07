(() => {
  const LANGUAGE_KEY = "resume-language";
  const LANG_PT = "pt-PT";

  const section = document.getElementById("supplemental-info");
  if (!section) return;

  const langToggle = document.getElementById("lang-toggle");

  const leftTitleNode = section.querySelector("[data-supp-left-title]");
  const leftItemNodes = section.querySelectorAll("[data-supp-left-item]");
  const rightTitleNode = section.querySelector("[data-supp-right-title]");
  const rightItemNodes = section.querySelectorAll("[data-supp-right-item]");

  const translations = {
  "en": {
    "leftTitle": "Additional Information",
    "leftItems": [
      "<strong>Phone:</strong> +351 962046821.",
      "<strong>Education:</strong> 12th Grade, Secretarial &amp; Administrative Work (Secondary Education, Level 3).",
      "<strong>Languages:</strong> Portuguese - Native; English - Very good spoken and written command.",
      "<strong>Driver’s licence:</strong> Light vehicles."
    ],
    "rightTitle": "FPCT & Professional Interests",
    "rightItems": [
      "<strong>FPCT:</strong> Seeking a 400-hour curricular FPCT in Software Development from 1 March to 20 May 2027.",
      "<strong>Career goal:</strong> Progression into a Junior Software Developer position, if possible.",
      "<strong>Professional interests:</strong> Software Development, Full-Stack Development, Front-End Development, Back-End / APIs, Automation and Applied AI."
    ]
  },
  "pt": {
    "leftTitle": "Informação Adicional",
    "leftItems": [
      "<strong>Telefone:</strong> +351 962046821.",
      "<strong>Formação:</strong> 12.º Ano, Secretariado e Trabalho Administrativo (Ensino Secundário, Nível 3).",
      "<strong>Idiomas:</strong> Português - Língua materna; Inglês - Muito bom domínio oral e escrito.",
      "<strong>Carta de condução:</strong> Ligeiros."
    ],
    "rightTitle": "FPCT e Interesses Profissionais",
    "rightItems": [
      "<strong>FPCT:</strong> Procuro uma FPCT curricular de 400 horas em Desenvolvimento de Software, de 1 de março a 20 de maio de 2027.",
      "<strong>Objetivo profissional:</strong> Progressão para uma função de Junior Software Developer, se possível.",
      "<strong>Interesses profissionais:</strong> Desenvolvimento de Software, Desenvolvimento Full-Stack, Desenvolvimento Front-End, Back-End / APIs, Automação e IA Aplicada."
    ]
  }
};

  function getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) === LANG_PT ? "pt" : "en";
  }

  function renderSupplementalInfo() {
    const lang = getLanguage();
    const t = translations[lang];

    if (leftTitleNode) leftTitleNode.textContent = t.leftTitle;
    if (rightTitleNode) rightTitleNode.textContent = t.rightTitle;

    leftItemNodes.forEach((node, index) => {
      node.innerHTML = t.leftItems[index] || "";
    });

    rightItemNodes.forEach((node, index) => {
      node.innerHTML = t.rightItems[index] || "";
    });
  }

  renderSupplementalInfo();
  langToggle?.addEventListener("click", () => {
    setTimeout(renderSupplementalInfo, 0);
  });
})();
