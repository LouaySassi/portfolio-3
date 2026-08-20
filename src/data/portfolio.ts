export const SITE = {
  name: 'Louay Sassi',
  role: 'Software Engineer · Product Development',
  email: 'louaychekersassi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/louaysassi',
  github: 'https://github.com/LouaySassi',
  resume: '/Louay_Cheker_Sassi_CV english 9-7-2026.pdf',
  domain: 'https://louaysassi.netlify.app',
  heroImage: '/louay-sassi-express-fm-interview-docknock-mutualhack.png',
} as const;

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'docknock', label: 'DocKnock' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

export const BIO = {
  lead: 'I build digital products with precision, creativity, and ownership.',
  body:
    'At Linedata I work on enterprise trading software. Beyond that I have founded and scaled a web agency, and led DocKnock through product planning, technical delivery, pitching, and incubation with MAZAM.',
} as const;

export const DOCKNOCK = {
  title: 'DocKnock',
  meta: 'MutualHack 3.0 by MAE · 1st Prize · 2026',
  summary:
    'DocKnock is a home healthcare platform connecting patients and families with nearby healthcare professionals who provide care directly at home.',
  summaryDetail:
    'DocKnock makes home healthcare easier to access by allowing patients and families to request and book nurses, doctors, physiotherapists, and other healthcare professionals for care at home.',
  role:
    'Led product planning, technical delivery, and the final pitch. Now growing through incubation with MAZAM.',
  problem:
    'Access to medical care at home can still depend on personal contacts, phone numbers, and family members coordinating care.',
  solution:
    "DocKnock provides a digital way for patients and families to request healthcare professionals who come directly to the patient's home.",
  professionals: 'Nurses · Physiotherapists · Doctors · Other healthcare professionals',
  context:
    'Team Arsenal · MutualHack 3.0 by MAE 2026 · 1st Prize (10,000 TND) among 2,200+ applications and 100 finalists forming 24 teams · MAZAM incubation',
  logoWhite: '/docknock-white.png',
  logoBlue: '/docknock-blue.png',
  teamPhoto: '/louay-sassi-team-arsenal-mutualhack-mae-2026-first-prize.jpg',
  teamCaption: 'Team Arsenal · MutualHack 3.0 by MAE',
  interviewPoster: '/louay-sassi-express-fm-interview-docknock-mutualhack.png',
  links: {
    esb: 'https://www.esb.tn/1er-prix-mutualhack-by-mae-2026/',
    managers:
      'https://managers.tn/2026/06/08/mae-mutual-hack-linnovation-au-service-de-lhumain/',
    expressFm:
      'https://www.linkedin.com/posts/efmabrplateauspaezcialabrmutualhack-ugcPost-7464688001516806144-G430/',
    facebook: 'https://www.facebook.com/share/v/1BWVGNszzm/',
    louayPost:
      'https://www.linkedin.com/posts/louaysassi_docknock-mutualhack-maeassurances-ugcPost-7464304487688654849-eGTO/',
  },
  linkedInEmbed: {
    postUrn: '7464688001516806144',
    title: 'Express FM interview',
    description: 'Watch the Express FM Plateau Spécial interview.',
  },
} as const;

export interface PortfolioProject {
  id: string;
  title: string;
  context: string;
  outcome: string;
  problem: string;
  ownership: string;
  image: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  logo?: string;
  link?: string;
  featuredAnchor?: string;
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'docknock',
    title: 'DocKnock',
    context: 'Home Healthcare Platform · 2026',
    outcome: 'MutualHack 2026 · 1st Prize · MAZAM Incubation',
    problem: 'Home care still depends on personal contacts and family members coordinating by phone.',
    ownership: 'Led product planning, technical delivery, and the final pitch.',
    image: '/louay-sassi-team-arsenal-mutualhack-mae-2026-first-prize.jpg',
    imageAlt: 'Team Arsenal accepting first prize for DocKnock at MutualHack by MAE',
    imageWidth: 1280,
    imageHeight: 853,
    logo: DOCKNOCK.logoBlue,
    link: DOCKNOCK.links.louayPost,
    featuredAnchor: 'docknock',
  },
  {
    id: 'docai',
    title: 'DocAI',
    context: 'BestWay IT · 2025',
    outcome: 'Reduced manual clinical workloads by 30% with AI triage and FileNet.',
    problem: 'Clinics lacked a unified digital experience for appointments and records.',
    ownership: 'Built the full-stack platform with AI triage and IBM FileNet.',
    image: '/docai.png',
    logo: '/docai-logo.svg',
    link: 'https://docaitn.netlify.app',
  },
  {
    id: 'tracky',
    title: 'Tracky',
    context: 'Personal · 2025',
    outcome: 'Shipped a local-first finance tracker that keeps data on-device.',
    problem: 'Personal finance tools often force cloud accounts and weak privacy.',
    ownership: 'Designed and built the desktop product end to end.',
    image: '/tracky.png',
    logo: '/tracky-logo.png',
    link: 'https://trackytn.netlify.app',
  },
  {
    id: 'binomi',
    title: 'Binomi',
    context: 'Personal · 2024',
    outcome: 'Shipped a roommate-matching product with a clear swipe-to-match loop.',
    problem: 'Students struggle to find compatible roommates through fragmented channels.',
    ownership: 'Designed and built matching, profiles, and messaging.',
    image: '/binomi.png',
    logo: '/binomi logo.png',
    link: 'https://binomi.netlify.app',
  },
];

export const EXPERIENCE = [
  {
    period: 'Nov 2025 – Present',
    role: 'Software Engineer',
    org: 'Linedata',
    detail: 'Building portfolio management features for enterprise trading clients.',
    logo: '/linedata.png',
  },
  {
    period: 'Aug 2024 – Jun 2025',
    role: 'Founder & Full-Stack Developer',
    org: 'King Solar Agency',
    detail: 'Past venture — founded and scaled lead-gen sites for the U.S. solar market.',
    logo: '/king-solar-agency.png',
  },
  {
    period: 'Feb 2025 – Jun 2025',
    role: 'Final Year Project Intern',
    org: 'BestWay IT',
    detail: 'Built DocAI — AI patient management with IBM FileNet.',
    logo: '/bestway-it.png',
  },
  {
    period: 'Sep 2023 – May 2024',
    role: 'Web Developer',
    org: 'SWD Agency',
    detail: 'Delivered 6+ client platforms and production fixes.',
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

export const LEGACY_HASH_MAP: Record<string, string> = {
  '/about': 'about',
  '/project/docai': 'work-docai',
  '/project/binomi': 'work-binomi',
  '/project/tracky': 'work-tracky',
  '/project/king-solar': 'experience',
  '/project/docknock': 'docknock',
};
