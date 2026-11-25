import type { Lang } from '@/i18n/ui';

type Localized = Record<Lang, string>;

export const profile = {
  name: 'Matheus Felizardo',
  email: 'matheus.felizardo2@gmail.com',
  social: {
    github: 'https://github.com/MatheusFelizardo',
    linkedin: 'https://www.linkedin.com/in/matheus-felizardo',
  },
  resume: {
    en: '/documents/matheus-resume-en.pdf',
    pt: '/documents/matheus-curriculum-ptBr.pdf',
  } satisfies Record<Lang, string>,
};

export interface Job {
  role: string;
  company: string;
  location: Localized;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, undefined = present
  description: Localized;
  stack: string[];
}

export const experience: Job[] = [
  {
    role: 'Web Developer',
    company: 'Envivent',
    location: { en: 'California · Remote', pt: 'Califórnia · Remoto' },
    start: '2022-04',
    description: {
      en: 'Building websites and web applications for the pharmaceutical and healthcare sector on a remote, US-based team, implementing agency-provided designs.',
      pt: 'Desenvolvo sites e aplicações web para o setor farmacêutico e de saúde em um time remoto baseado nos EUA, implementando layouts fornecidos por agência.',
    },
    stack: ['React', 'Vue/Nuxt', 'Drupal', 'WordPress', 'Twig', 'Sass', 'Tailwind', 'Docker'],
  },
  {
    role: 'Software Developer',
    company: 'Intelie',
    location: { en: 'Rio de Janeiro', pt: 'Rio de Janeiro' },
    start: '2021-06',
    end: '2022-03',
    description: {
      en: 'Developed a real-time data analytics product in a Scrum team, integrating the front end with REST APIs.',
      pt: 'Evolução de software de análise de dados em tempo real em equipe Scrum, integrando o front-end a APIs REST.',
    },
    stack: ['React', 'TypeScript', 'Highcharts', 'styled-components', 'REST'],
  },
  {
    role: 'Front-end Developer',
    company: 'Inforce',
    location: { en: 'Rio de Janeiro', pt: 'Rio de Janeiro' },
    start: '2020-10',
    end: '2021-06',
    description: {
      en: 'Built websites for real estate agencies integrated with a Laravel back end — property search with filters, galleries and a blog.',
      pt: 'Desenvolvimento de sites para imobiliárias integrados ao back-end em Laravel — busca de imóveis com filtros, galerias e blog.',
    },
    stack: ['JavaScript', 'Sass', 'Twig', 'Laravel'],
  },
];

export const education = [
  {
    degree: { en: 'MSc in Software Engineering', pt: 'Mestrado em Engenharia de Software' },
    school: 'University of Porto',
    years: '2023 — 2025',
    note: {
      en: 'Thesis: CAPE-KIDS, with a paper accepted at IEEE SEGAH 2025.',
      pt: 'Dissertação: CAPE-KIDS, com artigo aceito no IEEE SEGAH 2025.',
    },
  },
  {
    degree: { en: 'BSc in IT Management', pt: 'Graduação em Gestão de TI' },
    school: 'Estácio de Sá',
    years: '2014 — 2017',
    note: undefined,
  },
] satisfies { degree: Localized; school: string; years: string; note?: Localized }[];

export const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Vue / Nuxt',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Redis',
  'Tailwind',
  'Sass',
  'PHP / Laravel',
  'Drupal',
  'Docker',
  'Figma',
];
