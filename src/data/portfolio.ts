export const SITE = {
  name: 'Louay Sassi',
  role: 'Software Developer @ Linedata',
  tagline: 'Product builder turning ideas into shipped SaaS & AI systems.',
  positioning:
    'I build and lead software products — from enterprise systems at Linedata to ventures like King Solar Agency and DocKnock. I care about product thinking, project ownership, and getting things into users’ hands.',
  email: 'louaychekersassi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/louaysassi',
  github: 'https://github.com/LouaySassi',
  resume: '/Louay_Cheker_Sassi_CV english 9-7-2026.pdf',
  domain: 'https://louaysassi.netlify.app',
} as const;

export const NAV_ITEMS = [
  { id: 'identity', label: 'About' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'contact', label: 'Contact' },
] as const;

export const CREDIBILITY_CHIPS = [
  'Software Developer @ Linedata',
  'Founder, King Solar Agency',
  'MutualHack 2026 — 1st Prize',
] as const;

export const PHILOSOPHY = {
  title: 'How I work',
  paragraphs: [
    'I am moving toward entrepreneurship and product leadership — not just writing code, but framing problems, aligning stakeholders, and shipping systems people actually use.',
    'At Linedata I deliver enterprise-grade financial software. Outside work I have founded ventures, led hackathon teams, and built SaaS products end to end — from discovery and architecture through launch.',
    'What matters to me: clarity of purpose, fast iteration, and ownership. I want to build products that earn trust, not just demos.',
  ],
  principles: [
    { label: 'Product framing', detail: 'Define the problem, user, and success metric before building.' },
    { label: 'Technical delivery', detail: 'Full-stack execution across .NET, React, Spring Boot, and AI integrations.' },
    { label: 'Project leadership', detail: 'Coordinate teams, scope work, and keep momentum toward launch.' },
  ],
} as const;

export const RECOGNITION = {
  title: 'MutualHack by MAE 2026',
  subtitle: '1st Prize — Team Arsenal · DocKnock',
  summary:
    'Louay Sassi and Team Arsenal (Iyed Grassi, Louay Sassi, Leith Saddouri — ESPRIT) won 1st prize at MutualHack by MAE 2026 with DocKnock, a healthcare SaaS platform for secure communication between medical professionals and patients. Selected from 2,200+ applicants and 100 finalists. Prize: 10,000 TND.',
  role: 'Core full-stack developer — architecture, secure messaging and document workflows, and AI-assisted patient–doctor interactions.',
  teamPhoto: '/louay-sassi-team-arsenal-mutualhack-mae-2026-first-prize.jpg',
  interviewPhoto: '/louay-sassi-express-fm-interview-mutualhack-2026.jpg',
  links: {
    esb: 'https://www.esb.tn/1er-prix-mutualhack-by-mae-2026/',
    expressFm:
      'https://www.linkedin.com/posts/efmabrplateauspaezcialabrmutualhack-ugcPost-7464688001516806144-G430/',
    louayPost:
      'https://www.linkedin.com/posts/louaysassi_docknock-mutualhack-maeassurances-ugcPost-7464304487688654849-eGTO/',
  },
  linkedInEmbed: {
    postUrn: '7464688001516806144',
    title: 'Express FM — Plateau Spécial MutualHack',
    description:
      'Official Express FM interview featuring Team Arsenal after winning MutualHack by MAE 2026.',
  },
} as const;

export interface PortfolioProject {
  id: string;
  title: string;
  context: string;
  problem: string;
  ownership: string;
  outcome: string;
  image: string;
  logo?: string;
  tags: string[];
  link?: string;
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'king-solar',
    title: 'King Solar Agency',
    context: 'Founder · 2024–2025',
    problem:
      'U.S. solar companies needed high-converting lead-generation websites but lacked fast, reliable digital partners.',
    ownership:
      'Founded the agency, managed client delivery, and built full-stack marketing sites with SEO and conversion optimization.',
    outcome:
      'Scaled a client base with 100% satisfaction, 60% faster page loads, and measurable lead-gen improvements.',
    image: '/king solar.png',
    logo: '/king-solar-agency.png',
    tags: ['Entrepreneurship', 'Lead gen', 'Full-stack'],
  },
  {
    id: 'docknock',
    title: 'DocKnock',
    context: 'MutualHack Winner · 2026',
    problem:
      'Healthcare communication between doctors, clinics, and patients is fragmented and insecure.',
    ownership:
      'Co-built the platform architecture, secure messaging layer, document workflows, and AI-assisted care coordination.',
    outcome:
      '1st prize at MutualHack by MAE 2026 (10,000 TND) out of 2,200+ applicants.',
    image: '/louay-sassi-team-arsenal-mutualhack-mae-2026-first-prize.jpg',
    logo: '/docai-logo.svg',
    tags: ['SaaS', 'Healthcare', 'AI'],
    link: RECOGNITION.links.louayPost,
  },
  {
    id: 'binomi',
    title: 'Binomi',
    context: 'Personal project · 2024',
    problem:
      'University students struggle to find compatible roommates through fragmented, low-trust channels.',
    ownership:
      'Designed and built a swipe-based matching platform with lifestyle filters, profiles, and in-app messaging.',
    outcome:
      'Shipped a student-focused product featured across university communities with a clear product loop.',
    image: '/binomi.png',
    logo: '/binomi logo.png',
    tags: ['Consumer', 'Matching', 'Mobile-first'],
    link: 'https://binomi.netlify.app',
  },
  {
    id: 'tracky',
    title: 'Tracky',
    context: 'Personal project · 2025',
    problem: 'Personal finance tools often require cloud accounts and compromise privacy.',
    ownership: 'Designed and built a local-first finance tracker that runs entirely on-device.',
    outcome: 'Shipped a privacy-first desktop experience with analytics and budgeting workflows.',
    image: '/tracky.png',
    logo: '/tracky-logo.png',
    tags: ['Local-first', 'Product design', 'Desktop'],
    link: 'https://trackytn.netlify.app',
  },
];

export const JOURNEY = [
  {
    period: 'Nov 2025 – Present',
    role: 'C# .NET Developer',
    org: 'Linedata',
    detail: 'Enterprise financial software in a regulated environment.',
    logo: '/linedata.png',
  },
  {
    period: 'Aug 2024 – Jun 2025',
    role: 'Founder & Full-Stack Developer',
    org: 'King Solar Agency',
    detail: 'Built and scaled a U.S. solar lead-gen agency from zero.',
    logo: '/king-solar-agency.png',
  },
  {
    period: 'Feb 2025 – Jun 2025',
    role: 'Final Year Project Intern',
    org: 'BestWay IT',
    detail: 'DocAI — AI-powered healthcare platform with IBM FileNet.',
    logo: '/bestway-it.png',
  },
  {
    period: 'Sep 2023 – May 2024',
    role: 'Web Developer',
    org: 'SWD Agency',
    detail: 'Delivered 6+ client platforms and backend customizations.',
    logo: '/swd-agency.png',
  },
] as const;

export const EDUCATION = [
  {
    period: '2025–2029',
    degree: 'Engineering Degree in Computer Science',
    school: "ESPRIT – École d'ingénieurs",
    status: 'In progress',
  },
  {
    period: '2022–2025',
    degree: "Bachelor's in Computer Science",
    school: 'Faculty of Sciences of Tunis',
    status: 'Graduated with honors',
  },
] as const;

export const CAPABILITIES = [
  {
    title: 'Product thinking',
    items: ['Problem framing', 'User journeys', 'MVP scoping', 'Outcome metrics'],
  },
  {
    title: 'Project leadership',
    items: ['Team coordination', 'Stakeholder alignment', 'Delivery planning', 'Agile execution'],
  },
  {
    title: 'Technical delivery',
    items: ['C# / .NET', 'React & TypeScript', 'Spring Boot', 'PostgreSQL', 'AI integrations'],
  },
  {
    title: 'Entrepreneurship',
    items: ['Venture building', 'Client delivery', 'Go-to-market sites', 'Startup experiments'],
  },
] as const;

export const LEGACY_HASH_MAP: Record<string, string> = {
  '/about': 'philosophy',
  '/project/docai': 'work-docknock',
  '/project/binomi': 'work-binomi',
  '/project/tracky': 'work-tracky',
  '/project/king-solar': 'work-king-solar',
};
