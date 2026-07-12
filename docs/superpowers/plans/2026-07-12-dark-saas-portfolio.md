# Dark SaaS Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the single-page portfolio as a dark, near-full-width Helvetica SaaS experience with a cinematic identity hero, concise bio, DocKnock feature chapter (prize as metadata), compact projects, experience/education, and minimal contact.

**Architecture:** Keep the existing Vite + React Router single-page shell. Rewrite design tokens and portfolio data first, then replace each `src/components/portfolio/*` section to match the approved hierarchy. Remove Philosophy and Capabilities from the page. Preserve SEO, redirects, CV URL, and LinkedIn click-to-play embed behavior.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion (restrained), Netlify SPA redirects

**Spec:** `docs/superpowers/specs/2026-07-12-dark-saas-portfolio-design.md`

---

## File map

| File | Responsibility |
|------|----------------|
| `tailwind.config.js` | Dark tokens, Helvetica stack, near-full width |
| `src/index.css` | Base dark styles, buttons, reduced motion |
| `index.html` | Meta copy, remove Google Fonts (system Helvetica) |
| `src/data/portfolio.ts` | All copy, nav, projects, DocKnock data |
| `src/components/Header.tsx` | 5-item sticky dark nav |
| `src/components/Footer.tsx` | Minimal dark footer |
| `src/components/portfolio/IdentityHero.tsx` | Big name + interview photo hero |
| `src/components/portfolio/BioSection.tsx` | Concise bio (new; replaces Philosophy) |
| `src/components/portfolio/DocKnockSection.tsx` | Featured product + video + team photo (replaces Recognition) |
| `src/components/portfolio/WorkSection.tsx` | Compact project grid |
| `src/components/portfolio/JourneySection.tsx` | Experience + education |
| `src/components/portfolio/ContactSection.tsx` | Minimal contact |
| `src/components/portfolio/SectionShell.tsx` | Dark section wrapper, no separators |
| `src/pages/PortfolioPage.tsx` | Section composition + shell width |
| `src/components/LinkedInEmbed.tsx` | Dark click-to-play embed (no autoplay promise) |
| `src/App.tsx` | Dark shell |
| Delete from page only: `PhilosophySection.tsx`, `CapabilitiesSection.tsx`, `RecognitionSection.tsx` usage |

---

### Task 1: Dark design tokens and Helvetica base

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Modify: `index.html`
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace Tailwind theme with dark SaaS tokens**

Overwrite `tailwind.config.js` with:

```js
const typography = require('@tailwindcss/typography');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0A0A',
        surface: '#111111',
        elevated: '#1A1A1A',
        ink: '#F5F5F5',
        'ink-soft': '#A3A3A3',
        'ink-muted': '#737373',
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#3B82F6',
          strong: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
        display: ['"Helvetica Neue"', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        shell: '96rem',
      },
    },
  },
  plugins: [typography],
};
```

- [ ] **Step 2: Update base CSS for dark Helvetica shell**

Overwrite `src/index.css` with:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-canvas text-ink antialiased;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  :focus-visible {
    outline: 2px solid theme('colors.accent.DEFAULT');
    outline-offset: 2px;
  }
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 rounded-full border border-line bg-transparent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas;
  }
}

@media (prefers-reduced-motion: reduce) {
  html,
  * {
    scroll-behavior: auto !important;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Remove Google Fonts from `index.html` and keep product-builder meta**

In `index.html`:
1. Delete the `fonts.googleapis.com` / `fonts.gstatic.com` preconnect and stylesheet links.
2. Keep title/description oriented to product builder + Linedata (already updated). Do not put “1st prize winner” in the `<title>`.

- [ ] **Step 4: Simplify App shell**

Ensure `src/App.tsx` is:

```tsx
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-canvas text-ink">
      <Header />
      <div className="relative z-[1] flex w-full flex-1 flex-col items-center pb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 5: Verify tokens compile**

Run: `npm run build`

Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.js src/index.css index.html src/App.tsx
git commit -m "Restyle base shell to dark Helvetica SaaS tokens"
```

---

### Task 2: Rewrite portfolio data model

**Files:**
- Modify: `src/data/portfolio.ts`

- [ ] **Step 1: Replace `src/data/portfolio.ts` with the approved content model**

```ts
export const SITE = {
  name: 'Louay Sassi',
  role: 'Software Engineer · Product Development',
  email: 'louaychekersassi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/louaysassi',
  github: 'https://github.com/LouaySassi',
  resume: '/Louay_Cheker_Sassi_CV english 9-7-2026.pdf',
  domain: 'https://louaysassi.netlify.app',
  heroImage: '/1dc51c20-d842-4120-9013-32b8d793ab00.png',
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
    'Healthcare platform connecting patients with nearby professionals through secure communication and care workflows.',
  role:
    'Led product planning, technical delivery, and the final pitch. Now growing through incubation with MAZAM.',
  teamPhoto: '/louay-sassi-team-arsenal-mutualhack-mae-2026-first-prize.jpg',
  teamCaption: 'Team Arsenal · MutualHack 3.0 by MAE',
  interviewPoster: '/1dc51c20-d842-4120-9013-32b8d793ab00.png',
  links: {
    esb: 'https://www.esb.tn/1er-prix-mutualhack-by-mae-2026/',
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
  logo?: string;
  link?: string;
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'docknock',
    title: 'DocKnock',
    context: 'Product · 2026',
    outcome: 'Shipped and pitched a healthcare product now in MAZAM incubation.',
    problem: 'Patients and nearby healthcare professionals lack a direct, secure digital path.',
    ownership: 'Led product planning, architecture, delivery, and pitch.',
    image: '/louay-sassi-team-arsenal-mutualhack-mae-2026-first-prize.jpg',
    logo: '/docai-logo.svg',
    link: DOCKNOCK.links.louayPost,
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
```

Hard rules baked into this data:
- No “moving toward / transitioning / aspiring”
- Prize is `meta`, not title
- King Solar is past venture in experience only, not a featured project chip
- Hero image points at `/1dc51c20-d842-4120-9013-32b8d793ab00.png`

- [ ] **Step 2: Confirm hero asset exists**

Run: `Test-Path "public/1dc51c20-d842-4120-9013-32b8d793ab00.png"`

Expected: `True`

- [ ] **Step 3: Commit**

```bash
git add src/data/portfolio.ts
git commit -m "Rewrite portfolio content for dark SaaS narrative"
```

---

### Task 3: Section shell, header, and footer

**Files:**
- Modify: `src/components/portfolio/SectionShell.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update SectionShell — no separators, dark spacing**

```tsx
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleAside?: ReactNode;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className = '',
  titleAside,
}: SectionShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-24 ${className}`}>
      <motion.div
        className="flex flex-col gap-10 md:gap-12"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            {eyebrow ? (
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
              {title}
            </h2>
          </div>
          {titleAside}
        </header>
        {children}
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite Header to 5 dark nav items, near-full width**

```tsx
import { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-shell items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#about" className="min-w-0 text-sm font-semibold tracking-tight text-ink">
          {SITE.name}
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
          >
            LinkedIn
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
          >
            CV
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 text-ink"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" className="lg:hidden bg-canvas px-5 py-4 sm:px-8" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2.5 text-sm text-ink-soft hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
```

- [ ] **Step 3: Rewrite Footer as minimal dark strip**

```tsx
import { ExternalLink } from 'lucide-react';
import { NAV_ITEMS, SITE } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-surface">
      <div className="mx-auto flex w-full max-w-shell flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10 md:flex-row md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{SITE.name}</p>
          <p className="mt-1 text-sm text-ink-muted">{SITE.role}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-ink-muted hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
            LinkedIn <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
            GitHub <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
            CV <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/portfolio/SectionShell.tsx src/components/Header.tsx src/components/Footer.tsx
git commit -m "Update shell navigation for dark near-full-width layout"
```

---

### Task 4: Identity hero + concise bio

**Files:**
- Modify: `src/components/portfolio/IdentityHero.tsx`
- Create: `src/components/portfolio/BioSection.tsx`

- [ ] **Step 1: Rebuild IdentityHero — big name, approved photo, no award badge**

```tsx
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../../data/portfolio';

export function IdentityHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-28 relative min-h-[78vh] py-10 md:py-16 overflow-hidden">
      <motion.div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="lg:col-span-7 relative z-10 flex flex-col gap-6">
          <h1 className="text-[clamp(3.5rem,11vw,8.5rem)] font-bold leading-[0.82] tracking-[-0.06em] text-ink uppercase">
            Louay
            <br />
            Sassi
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-ink-muted">
            {SITE.role}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#work" className="btn-primary">
              Selected work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </div>

        <figure className="lg:col-span-5 relative z-0">
          <img
            src={SITE.heroImage}
            alt="Louay Sassi speaking during an Express FM interview"
            width={1200}
            height={1500}
            fetchPriority="high"
            decoding="async"
            className="w-full aspect-[4/5] object-cover object-[50%_18%] opacity-90"
          />
        </figure>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create BioSection**

```tsx
import { BIO } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function BioSection() {
  return (
    <SectionShell id="bio" title="About" eyebrow="Bio" className="!pt-4 md:!pt-8">
      <div className="max-w-3xl flex flex-col gap-5">
        <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight text-ink">
          {BIO.lead}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-ink-soft">{BIO.body}</p>
      </div>
    </SectionShell>
  );
}
```

Note: PortfolioPage will merge hero + bio under the About story; nav `About` targets `#about` (hero). Bio keeps `id="bio"` for internal structure only — do **not** add Bio to nav.

Alternative if cleaner: put bio content directly under the hero inside `IdentityHero` and skip a separate section. Prefer separate component for clarity, but **remove BioSection from nav** and do not give it a competing H2 if it feels redundant — if combining, use one About block:

Preferred composition in PortfolioPage:
1. IdentityHero (`#about`) includes short bio text under CTAs instead of BioSection H2
2. OR IdentityHero + BioSection without eyebrow “Bio” — use no H2, just paragraphs under hero

**Implement preferred approach:** fold bio into IdentityHero under the CTAs to avoid an extra titled section and keep the experience tighter:

Update IdentityHero to import `BIO` and render lead + body under CTAs. Skip creating BioSection if folded. Keep Task 4 creating BioSection **only if** PortfolioPage wants visual separation; default to folding into hero.

Final decision for implementers: **fold bio into IdentityHero** (no BioSection file). Delete unused Philosophy section from page.

Updated IdentityHero addition after CTAs:

```tsx
<div className="max-w-xl flex flex-col gap-4 pt-8">
  <p className="text-xl md:text-2xl font-medium leading-snug text-ink">{BIO.lead}</p>
  <p className="text-base leading-relaxed text-ink-soft">{BIO.body}</p>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/portfolio/IdentityHero.tsx
git commit -m "Rebuild identity hero with concise bio and interview photo"
```

---

### Task 5: DocKnock feature chapter

**Files:**
- Create: `src/components/portfolio/DocKnockSection.tsx`
- Modify: `src/components/LinkedInEmbed.tsx` (dark styling only; keep click-to-play)

- [ ] **Step 1: Ensure LinkedInEmbed stays click-to-play (no autoplay promise)**

Keep current lazy-load-on-view OR switch `autoLoadOnView` default to `false` so the poster + play button is primary (user preference: large video, user presses play).

Set default:

```ts
autoLoadOnView = false,
```

Keep dark classes (`border-line`, `bg-surface`, Helvetica-friendly text).

- [ ] **Step 2: Create DocKnockSection**

```tsx
import { ExternalLink } from 'lucide-react';
import { DOCKNOCK } from '../../data/portfolio';
import { LinkedInEmbed } from '../LinkedInEmbed';
import { SectionShell } from './SectionShell';

export function DocKnockSection() {
  return (
    <SectionShell
      id="docknock"
      eyebrow="Featured product"
      title={DOCKNOCK.title}
      titleAside={
        <p className="text-xs sm:text-sm text-ink-muted text-left sm:text-right leading-relaxed">
          {DOCKNOCK.meta}
        </p>
      }
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10">
        <div className="xl:col-span-8">
          <LinkedInEmbed
            postUrn={DOCKNOCK.linkedInEmbed.postUrn}
            title={DOCKNOCK.linkedInEmbed.title}
            description={DOCKNOCK.linkedInEmbed.description}
            posterSrc={DOCKNOCK.interviewPoster}
            posterAlt="Louay Sassi interviewed on Express FM about DocKnock"
            linkedInUrl={DOCKNOCK.links.expressFm}
            autoLoadOnView={false}
          />
        </div>

        <div className="xl:col-span-4 flex flex-col justify-center gap-5">
          <p className="text-base md:text-lg leading-relaxed text-ink">{DOCKNOCK.summary}</p>
          <p className="text-sm md:text-base leading-relaxed text-ink-soft">{DOCKNOCK.role}</p>
          <div className="flex flex-wrap gap-4 pt-1">
            <a
              href={DOCKNOCK.links.esb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong"
            >
              ESB coverage
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={DOCKNOCK.links.expressFm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong"
            >
              Full interview
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <figure className="mt-10 md:mt-14">
        <img
          src={DOCKNOCK.teamPhoto}
          alt="Team Arsenal accepting first prize at MutualHack by MAE"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full aspect-[21/9] object-cover object-center"
        />
        <figcaption className="mt-3 text-xs text-ink-muted">{DOCKNOCK.teamCaption}</figcaption>
      </figure>
    </SectionShell>
  );
}
```

Rules:
- Title is `DocKnock`
- Prize only in `titleAside` metadata
- No horizontal rules
- Video is the largest element

- [ ] **Step 3: Commit**

```bash
git add src/components/portfolio/DocKnockSection.tsx src/components/LinkedInEmbed.tsx
git commit -m "Add DocKnock feature chapter with click-to-play interview"
```

---

### Task 6: Compact work, experience, contact, and page composition

**Files:**
- Modify: `src/components/portfolio/WorkSection.tsx`
- Modify: `src/components/portfolio/JourneySection.tsx` (rename usage to Experience; keep file or rename)
- Modify: `src/components/portfolio/ContactSection.tsx`
- Modify: `src/pages/PortfolioPage.tsx`
- Modify: `src/components/LegacyHashRedirect.tsx` if needed for new IDs

- [ ] **Step 1: Rewrite WorkSection as compact expandable grid**

```tsx
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function WorkSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionShell id="work" eyebrow="Selected work" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {PROJECTS.map((project) => {
          const open = expandedId === project.id;
          return (
            <article
              key={project.id}
              id={`work-${project.id}`}
              className="scroll-mt-32 group overflow-hidden bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                  <span className="text-xs text-ink-muted shrink-0">{project.context}</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">{project.outcome}</p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setExpandedId(open ? null : project.id)}
                    className="text-sm text-ink-muted hover:text-ink"
                  >
                    {open ? 'Less' : 'Details'}
                  </button>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-strong"
                    >
                      Open
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
                {open ? (
                  <div className="pt-2 text-sm leading-relaxed text-ink-soft flex flex-col gap-2">
                    <p>
                      <span className="text-ink-muted">Problem — </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="text-ink-muted">Ownership — </span>
                      {project.ownership}
                    </p>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
```

- [ ] **Step 2: Rewrite JourneySection as `#experience`**

```tsx
import { EDUCATION, EXPERIENCE } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function JourneySection() {
  return (
    <SectionShell id="experience" eyebrow="Career" title="Experience">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <div className="xl:col-span-7 flex flex-col gap-8">
          {EXPERIENCE.map((item) => (
            <article key={`${item.org}-${item.period}`} className="flex gap-4">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain bg-elevated p-1 shrink-0"
                  aria-hidden
                />
              ) : null}
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">
                  {item.role} · {item.org}
                </h3>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="xl:col-span-5 flex flex-col gap-4">
          <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">Education</h3>
          {EDUCATION.map((entry) => (
            <article key={entry.degree} className="bg-surface p-5">
              <p className="text-xs text-ink-muted">{entry.period}</p>
              <h4 className="mt-2 text-base font-semibold text-ink">{entry.degree}</h4>
              <p className="mt-1 text-sm text-ink-soft">{entry.school}</p>
              <p className="mt-2 text-xs text-ink-muted">{entry.status}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
```

- [ ] **Step 3: Minimal ContactSection**

```tsx
import { ExternalLink } from 'lucide-react';
import { SITE } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function ContactSection() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Let’s talk">
      <div className="flex flex-wrap gap-3">
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
          LinkedIn <ExternalLink className="w-4 h-4" />
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          GitHub <ExternalLink className="w-4 h-4" />
        </a>
        <a href={`mailto:${SITE.email}`} className="btn-secondary">
          Email
        </a>
        <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          CV <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </SectionShell>
  );
}
```

- [ ] **Step 4: Recompose PortfolioPage**

```tsx
import { ContactSection } from '../components/portfolio/ContactSection';
import { DocKnockSection } from '../components/portfolio/DocKnockSection';
import { IdentityHero } from '../components/portfolio/IdentityHero';
import { JourneySection } from '../components/portfolio/JourneySection';
import { WorkSection } from '../components/portfolio/WorkSection';
import { LegacyHashRedirect } from '../components/LegacyHashRedirect';

export function PortfolioPage() {
  return (
    <main className="w-full max-w-shell px-5 sm:px-8 lg:px-10">
      <LegacyHashRedirect />
      <IdentityHero />
      <DocKnockSection />
      <WorkSection />
      <JourneySection />
      <ContactSection />
    </main>
  );
}
```

Do **not** render PhilosophySection or CapabilitiesSection.

- [ ] **Step 5: Build**

Run: `npm run build`

Expected: success. Fix any import/type errors from removed exports (`PHILOSOPHY`, `CAPABILITIES`, `RECOGNITION`, `JOURNEY`, `CREDIBILITY_CHIPS`).

- [ ] **Step 6: Commit**

```bash
git add src/components/portfolio src/pages/PortfolioPage.tsx src/components/LegacyHashRedirect.tsx
git commit -m "Compose dark SaaS portfolio sections and remove text-heavy chapters"
```

---

### Task 7: SEO / llms cleanup and verification

**Files:**
- Modify: `public/llms.txt` if still transition/award-first
- Modify: `index.html` Person schema description if award-first
- Verify: `netlify.toml`, `public/sitemap.xml`, CV path

- [ ] **Step 1: Soften award-first language in schema/llms without removing proof**

Person description example:

`Software engineer and product builder at Linedata. Founder of King Solar Agency (2024–2025). Built DocKnock, MutualHack 3.0 by MAE first-prize product, now incubated with MAZAM.`

Keep award as one fact among others — not the opening identity of the title tag.

- [ ] **Step 2: Manual checklist**

1. One H1: `Louay Sassi`
2. DocKnock H2 title is `DocKnock`, prize only in metadata
3. No “moving toward / transitioning / aspiring” anywhere in `src/`
4. Hero image is `/1dc51c20-d842-4120-9013-32b8d793ab00.png`
5. No horizontal section separators
6. Width ≈ full shell with small gutters
7. Interview is large + click-to-play
8. CV opens current PDF
9. `/about` and `/project/*` still resolve

- [ ] **Step 3: Build + lint**

```bash
npm run build
npm run lint
```

Expected: build pass. Lint may still warn on unused legacy components — ignore unless newly introduced errors in touched files.

- [ ] **Step 4: Commit SEO tweaks if any**

```bash
git add index.html public/llms.txt
git commit -m "Align SEO copy with product-builder identity"
```

- [ ] **Step 5: Push for Netlify deploy**

```bash
git push origin main
```

Verify production: homepage, hero image, DocKnock section, CV, sitemap, robots.

---

## Spec coverage checklist

| Spec requirement | Task |
|------------------|------|
| Dark Helvetica near-full-width | Task 1, 3, 6 |
| No transition language | Task 2 |
| Prize not in title / not defining identity | Task 2, 5 |
| Hero photo `1dc51c20...png` | Task 2, 4 |
| No separators | Task 3, 6 |
| Concise bio | Task 4 |
| DocKnock + big click-to-play + team photo | Task 5 |
| Compact projects + experience/education | Task 6 |
| Remove capabilities keyword grid | Task 6 |
| King Solar past-only | Task 2 |
| SEO / redirects / CV preserved | Task 7 |
| Responsive / build / deploy | Task 7 |

## Placeholder / consistency scan

- No TBD steps.
- Data exports (`SITE`, `BIO`, `DOCKNOCK`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `NAV_ITEMS`) are consistent across tasks.
- Section IDs match nav: `about`, `docknock`, `work`, `experience`, `contact`.
- LinkedIn embed remains click-to-play (`autoLoadOnView={false}`).
