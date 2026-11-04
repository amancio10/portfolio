export const CONTACT_EMAIL = 'amanciosantos10@gmail.com';
export const GITHUB_USER = 'amancio10';
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const LINKEDIN_URL = 'https://linkedin.com/in/amancio-santos';

export type SectionId = 'hero' | 'stack' | 'projects' | 'diferencial' | 'contact';

export const SECTION_IDS: readonly SectionId[] = [
  'hero',
  'stack',
  'projects',
  'diferencial',
  'contact',
];

export interface TechTile {
  name: string;
  detail: string;
  icon: string;
  tileClass: string;
  iconClass: string;
}

const TILE_ACCENTS = {
  red: {
    tileClass: 'hover:border-red-400/70 hover:shadow-[0_0_18px_rgba(248,113,113,0.3)]',
    iconClass: 'border-red-400/50 text-red-400',
  },
  blue: {
    tileClass: 'hover:border-blue-400 hover:shadow-[0_0_18px_rgba(0,162,255,0.3)]',
    iconClass: 'border-blue-400/60 text-blue-400',
  },
  sky: {
    tileClass: 'hover:border-sky-400 hover:shadow-[0_0_18px_rgba(56,189,248,0.3)]',
    iconClass: 'border-sky-400/60 text-sky-400',
  },
  amber: {
    tileClass: 'hover:border-amber-400/70 hover:shadow-[0_0_18px_rgba(251,191,36,0.3)]',
    iconClass: 'border-amber-400/50 text-amber-400',
  },
  light: {
    tileClass: 'hover:border-blue-300 hover:shadow-[0_0_18px_rgba(147,197,253,0.3)]',
    iconClass: 'border-blue-300/60 text-blue-300',
  },
};

export const TECH_TILES: readonly TechTile[] = [
  { name: 'Delphi', detail: 'VCL / FMX / Pascal', icon: 'shield', ...TILE_ACCENTS.red },
  { name: 'Java', detail: 'Enterprise Core', icon: 'coffee', ...TILE_ACCENTS.blue },
  {
    name: 'Spring Boot',
    detail: 'Microservices & REST',
    icon: 'power_settings_new',
    ...TILE_ACCENTS.sky,
  },
  { name: 'Angular', detail: 'Frontend SPA', icon: 'change_history', ...TILE_ACCENTS.red },
  { name: 'PL/SQL', detail: 'Oracle Procedures', icon: 'database', ...TILE_ACCENTS.blue },
  {
    name: 'FireBird',
    detail: '.FDB Engine',
    icon: 'local_fire_department',
    ...TILE_ACCENTS.amber,
  },
  { name: 'PostgreSQL', detail: 'Relational DB', icon: 'storage', ...TILE_ACCENTS.blue },
  {
    name: 'MongoDB',
    detail: 'NoSQL Documents',
    icon: 'energy_savings_leaf',
    ...TILE_ACCENTS.blue,
  },
  { name: 'Docker', detail: 'Containers & CI/CD', icon: 'deployed_code', ...TILE_ACCENTS.sky },
  { name: 'Git / SVN', detail: 'GitHub & Versioning', icon: 'fork_right', ...TILE_ACCENTS.light },
];

export interface Pillar {
  code: string;
  title: string;
  subtitle: string;
  icon: string;
  tags: readonly [string, string, string];
  cardClass: string;
  iconClass: string;
  codeClass: string;
  subtitleClass: string;
  firstTagClass: string;
}

export const PILLARS: readonly Pillar[] = [
  {
    code: '// PILLAR_01',
    title: 'Clean Code',
    subtitle: 'Best Practices',
    icon: 'laptop_chromebook',
    tags: ['SOLID Principles', 'Refactoring', 'Design Patterns'],
    cardClass:
      'border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(0,119,255,0.25)]',
    iconClass:
      'bg-blue-500/10 border-blue-400/60 text-blue-400 shadow-[0_0_15px_rgba(0,119,255,0.3)]',
    codeClass: 'text-blue-400',
    subtitleClass: 'text-sky-400',
    firstTagClass: 'text-blue-300 border border-blue-500/20',
  },
  {
    code: '// PILLAR_02',
    title: 'Problem Solving',
    subtitle: '& Innovation',
    icon: 'lightbulb',
    tags: ['AI Integration', 'High Concurrency', 'Query Optimization'],
    cardClass:
      'border-sky-500/40 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]',
    iconClass:
      'bg-sky-500/10 border-sky-400/60 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]',
    codeClass: 'text-sky-400',
    subtitleClass: 'text-blue-400',
    firstTagClass: 'text-sky-300 border border-sky-500/20',
  },
  {
    code: '// PILLAR_03',
    title: 'Teamwork',
    subtitle: '& Collaboration',
    icon: 'groups',
    tags: ['Git / SVN', 'Domain Alignment', 'Scalable Delivery'],
    cardClass:
      'border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]',
    iconClass:
      'bg-indigo-500/10 border-indigo-400/60 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]',
    codeClass: 'text-indigo-400',
    subtitleClass: 'text-blue-300',
    firstTagClass: 'text-indigo-300 border border-indigo-500/20',
  },
];

export type ProjectSlug =
  | 'IA-GEMINI-DELPHI'
  | 'calculo-financiamento'
  | 'Redis-Delphi-FDB'
  | 'DMVC-API-SSL'
  | 'TCC-IMPACTA-2025'
  | 'Base64Picture';

export interface Project {
  slug: ProjectSlug;
  icon: string;
  iconClass: string;
  cardClass: string;
  repoClass: string;
  dotClass: string;
  titleClass: string;
  linkClass: string;
  tagClasses: readonly [string, string];
}

const TAG_BLUE = 'text-blue-400 border border-blue-500/20';
const TAG_LIGHT = 'text-blue-300 border border-blue-500/20';
const TAG_SKY = 'text-sky-400 border border-sky-500/20';
const TAG_RED = 'text-red-400 border border-red-500/20';
const TAG_INDIGO = 'text-indigo-400 border border-indigo-500/20';

export const PROJECTS: readonly Project[] = [
  {
    slug: 'IA-GEMINI-DELPHI',
    icon: 'smart_toy',
    iconClass: 'border-blue-400/60 text-blue-400',
    cardClass: 'hover:border-blue-400 hover:shadow-[0_0_24px_rgba(0,119,255,0.25)]',
    repoClass: 'text-blue-400',
    dotClass: 'bg-blue-400 shadow-[0_0_8px_#38bdf8]',
    titleClass: 'group-hover:text-blue-300',
    linkClass: 'hover:bg-[#0077ff]',
    tagClasses: [TAG_BLUE, TAG_SKY],
  },
  {
    slug: 'calculo-financiamento',
    icon: 'calculate',
    iconClass: 'border-sky-400/60 text-sky-400',
    cardClass: 'hover:border-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]',
    repoClass: 'text-sky-400',
    dotClass: 'bg-sky-400 shadow-[0_0_8px_#38bdf8]',
    titleClass: 'group-hover:text-sky-300',
    linkClass: 'hover:bg-sky-500',
    tagClasses: [TAG_SKY, TAG_BLUE],
  },
  {
    slug: 'Redis-Delphi-FDB',
    icon: 'bolt',
    iconClass: 'border-blue-400/60 text-blue-400',
    cardClass: 'hover:border-blue-400 hover:shadow-[0_0_24px_rgba(0,119,255,0.25)]',
    repoClass: 'text-blue-400',
    dotClass: 'bg-blue-400 shadow-[0_0_8px_#00a2ff]',
    titleClass: 'group-hover:text-blue-300',
    linkClass: 'hover:bg-[#0077ff]',
    tagClasses: [TAG_RED, TAG_SKY],
  },
  {
    slug: 'DMVC-API-SSL',
    icon: 'lock',
    iconClass: 'border-indigo-400/60 text-indigo-400',
    cardClass: 'hover:border-indigo-400 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]',
    repoClass: 'text-indigo-400',
    dotClass: 'bg-indigo-400 shadow-[0_0_8px_#818cf8]',
    titleClass: 'group-hover:text-indigo-300',
    linkClass: 'hover:bg-indigo-600',
    tagClasses: [TAG_INDIGO, TAG_BLUE],
  },
  {
    slug: 'TCC-IMPACTA-2025',
    icon: 'school',
    iconClass: 'border-blue-300/60 text-blue-300',
    cardClass: 'hover:border-blue-400 hover:shadow-[0_0_24px_rgba(0,162,255,0.25)]',
    repoClass: 'text-blue-300',
    dotClass: 'bg-blue-300 shadow-[0_0_8px_#93c5fd]',
    titleClass: 'group-hover:text-blue-300',
    linkClass: 'hover:bg-blue-600',
    tagClasses: [TAG_LIGHT, TAG_SKY],
  },
  {
    slug: 'Base64Picture',
    icon: 'image',
    iconClass: 'border-sky-400/60 text-sky-400',
    cardClass: 'hover:border-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]',
    repoClass: 'text-sky-400',
    dotClass: 'bg-sky-400 shadow-[0_0_8px_#38bdf8]',
    titleClass: 'group-hover:text-sky-300',
    linkClass: 'hover:bg-sky-500',
    tagClasses: [TAG_SKY, TAG_BLUE],
  },
];

export interface DifferentialStyle {
  icon: string;
  cardClass: string;
  iconClass: string;
  titleClass: string;
}

export const DIFFERENTIAL_STYLES: readonly DifferentialStyle[] = [
  {
    icon: 'point_of_sale',
    cardClass: 'hover:border-blue-400/60',
    iconClass: 'bg-blue-500/20 text-blue-400 shadow-[0_0_10px_rgba(0,119,255,0.3)]',
    titleClass: 'text-blue-300',
  },
  {
    icon: 'inventory',
    cardClass: 'hover:border-sky-400/60',
    iconClass: 'bg-sky-500/20 text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.3)]',
    titleClass: 'text-sky-400',
  },
  {
    icon: 'receipt_long',
    cardClass: 'hover:border-indigo-400/60',
    iconClass: 'bg-indigo-500/20 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.3)]',
    titleClass: 'text-indigo-300',
  },
];
