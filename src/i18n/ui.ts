export const languages = { en: "English", pt: "Português" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const htmlLang: Record<Lang, string> = { en: "en", pt: "pt-BR" };
export const ogLocale: Record<Lang, string> = { en: "en_US", pt: "pt_BR" };

export const ui = {
  en: {
    "meta.title": "Matheus Felizardo — Software Engineer",
    "meta.description":
      "Software engineer with 5+ years building web products with React, TypeScript, Vue/Nuxt and Node.js/NestJS. MSc in Software Engineering from the University of Porto.",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.home": "Home",
    "nav.skip": "Skip to content",
    "theme.toggle": "Toggle color theme",
    "lang.switch": "Ler em português",
    "resume.label": "Resume",
    "resume.download": "Download resume",
    "resume.en": "English (PDF)",
    "resume.pt": "Portuguese (PDF)",
    "hero.greeting": "Hi, I'm Matheus.",
    "hero.title": "Software engineer crafting fast, thoughtful web products.",
    "hero.lead":
      "I have 5+ years of experience in web development, focused on the front end (React, TypeScript, Vue/Nuxt), with back-end work in Node.js/NestJS and PostgreSQL. Since 2022 I have been working remotely with a US-based team building websites and web apps for the pharmaceutical and healthcare sector.",
    "hero.location": "Rio de Janeiro, Brazil",
    "hero.contact": "Get in touch",
    "experience.title": "Experience",
    "experience.kicker": "Where I have worked",
    "experience.present": "Present",
    "education.title": "Education",
    "skills.title": "Toolbox",
    "projects.title": "Projects",
    "projects.kicker": "Selected work",
    "projects.more": "More projects",
    "projects.code": "Code",
    "projects.website": "Website",
    "projects.document": "Download PDF",
    "projects.demo": "Watch demo",
    "projects.wip": "In progress",
    "projects.close": "Close",
    "blog.title": "Blog",
    "blog.kicker": "Writing",
    "blog.latest": "Latest posts",
    "blog.all": "All posts",
    "blog.description":
      "Notes on software engineering, front-end architecture and things I am learning.",
    "blog.empty": "No posts yet — stay tuned.",
    "blog.minRead": "min read",
    "blog.back": "Back to blog",
    "blog.updated": "Updated",
    "blog.rss": "RSS feed",
    "blog.translation": "Leia em português",
    "contact.kicker": "Say hello",
    "contact.title": "Let's talk.",
    "contact.text":
      "Whether you want to chat about a project, swap ideas on front-end architecture or just say hi — my inbox is always open.",
    "contact.email": "Send an email",
    "404.title": "Page not found",
    "404.text": "The page you are looking for does not exist or was moved.",
  },
  pt: {
    "meta.title": "Matheus Felizardo — Engenheiro de Software",
    "meta.description":
      "Engenheiro de software com mais de 5 anos criando produtos web com React, TypeScript, Vue/Nuxt e Node.js/NestJS. Mestre em Engenharia de Software pela Universidade do Porto.",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.blog": "Blog",
    "nav.home": "Início",
    "nav.skip": "Pular para o conteúdo",
    "theme.toggle": "Alternar tema de cores",
    "lang.switch": "Read in English",
    "resume.label": "Currículo",
    "resume.download": "Baixar currículo",
    "resume.en": "Inglês (PDF)",
    "resume.pt": "Português (PDF)",
    "hero.greeting": "Olá, eu sou o Matheus.",
    "hero.title":
      "Engenheiro de software criando produtos web rápidos e bem pensados.",
    "hero.lead":
      "Tenho mais de 5 anos de experiência em desenvolvimento web, com foco em front-end (React, TypeScript, Vue/Nuxt) e experiência em back-end com Node.js/NestJS e PostgreSQL. Desde 2022 trabalho remotamente com uma equipe nos EUA, entregando sites e aplicações para o setor farmacêutico e de saúde.",
    "hero.location": "Rio de Janeiro, Brasil",
    "hero.contact": "Fale comigo",
    "experience.title": "Experiência",
    "experience.kicker": "Onde trabalhei",
    "experience.present": "Presente",
    "education.title": "Formação",
    "skills.title": "Ferramentas",
    "projects.title": "Projetos",
    "projects.kicker": "Trabalhos selecionados",
    "projects.more": "Mais projetos",
    "projects.code": "Código",
    "projects.website": "Site",
    "projects.document": "Baixar PDF",
    "projects.demo": "Ver demo",
    "projects.wip": "Em andamento",
    "projects.close": "Fechar",
    "blog.title": "Blog",
    "blog.kicker": "Escrita",
    "blog.latest": "Posts recentes",
    "blog.all": "Todos os posts",
    "blog.description":
      "Notas sobre engenharia de software, arquitetura front-end e coisas que estou aprendendo.",
    "blog.empty": "Nenhum post ainda — em breve.",
    "blog.minRead": "min de leitura",
    "blog.back": "Voltar para o blog",
    "blog.updated": "Atualizado em",
    "blog.rss": "Feed RSS",
    "blog.translation": "Read in English",
    "contact.kicker": "Diga olá",
    "contact.title": "Vamos conversar.",
    "contact.text":
      "Quer trocar uma ideia sobre um projeto, arquitetura front-end ou só dar um oi? Minha caixa de entrada está sempre aberta.",
    "contact.email": "Enviar e-mail",
    "404.title": "Página não encontrada",
    "404.text": "A página que você procura não existe ou foi movida.",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefix a root-relative path with the locale (default locale has no prefix). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(htmlLang[lang], {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "pt" : "en");
