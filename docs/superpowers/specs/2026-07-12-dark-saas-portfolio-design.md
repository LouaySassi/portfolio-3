# Dark SaaS Portfolio Redesign

## Goal

Rebuild Louay Sassi's single-page portfolio as a confident, dark SaaS/AI experience. The site should demonstrate strong product and technical ability through hierarchy, media, and concise evidence rather than explaining a career transition.

## Positioning

- Lead with Louay Sassi as a software engineer and product builder.
- Do not describe Louay as "moving toward," "transitioning," or "aspiring."
- Do not present the MutualHack prize as Louay's defining or biggest achievement.
- Frame King Solar Agency only as past founder experience from 2024–2025.
- Keep visible copy concise: no section introduction longer than two short sentences.

## Visual Direction

Use a restrained version of the approved "Cinematic Type Collision" direction:

- Dark canvas: near-black backgrounds with high-contrast white and muted gray text.
- Helvetica-first font stack throughout.
- Near-full-width shell using small responsive side gutters instead of a narrow centered column.
- Flat surfaces, minimal borders, no glassmorphism, decorative gradients, oversized pills, or card clutter.
- Large typography and photography create the experience.
- No horizontal separator rules between sections. Separation comes from whitespace, scale, background tone, and composition.
- Use one restrained cool blue accent for interactive states only.

## Page Structure

### 1. Identity Hero

- Near-full-viewport composition.
- Large `LOUAY SASSI` title is the only H1.
- Use `public/1dc51c20-d842-4120-9013-32b8d793ab00.png` as the hero image.
- Place the image beside and slightly behind the name without obscuring Louay's face.
- Supporting line: `Software Engineer · Product Development`.
- Keep calls to action minimal: selected work and CV/contact.
- Do not show award badges or "1st prize winner" in the hero.

### 2. Concise Bio

Present one strong lead sentence and one short supporting paragraph inspired by Louay's LinkedIn and CV:

- Builds digital products with precision, creativity, and ownership.
- Works on enterprise trading software at Linedata.
- Has founded and scaled a web agency and led DocKnock through product planning, technical delivery, pitching, and incubation.

Avoid generic motivational prose and career-transition language.

### 3. DocKnock Feature

- Title the chapter `DocKnock`, not `1st Prize`.
- Show `MutualHack 3.0 by MAE · 1st Prize · 2026` as small supporting metadata.
- Lead with a large, click-to-play interview embed using the supplied LinkedIn post.
- Do not promise autoplay. Social embeds cannot reliably autoplay or be muted by the parent page.
- Retain a strong poster and explicit play/open action.
- Place no more than two short text blocks beside the video:
  - What DocKnock does.
  - Louay's role: product planning, technical delivery, final pitch, and current MAZAM incubation.
- Place the hackathon group photo as a large full-width image below the video row.
- External proof links remain secondary text links.

### 4. Selected Projects

- Use a visual, compact project grid or horizontal composition.
- Each project shows title, context, and one outcome sentence.
- Hide Problem / Ownership / Outcome detail behind expansion or a lightweight interaction.
- Include DocKnock, DocAI, Tracky, and Binomi.
- King Solar may appear only as past founder experience, not as an active venture or current credibility badge.

### 5. Experience and Education

- Use a compact chronological layout.
- Experience includes Linedata, King Solar Agency (past), BestWay IT, and SWD Agency.
- Each entry has role, organization, dates, and one evidence-led line.
- Education follows as a compact companion section.
- Remove the separate capabilities keyword grid; demonstrated capabilities should emerge from project and experience evidence.

### 6. Contact

- Minimal close with LinkedIn, GitHub, email, and the current CV.
- No long founder invitation or transition statement.

## Navigation and Motion

- Sticky minimal navigation with no more than five items: About, DocKnock, Work, Experience, Contact.
- Native anchor links and active-section state.
- Motion is restrained: short opacity/translate reveals and a subtle hero image settle.
- No scroll-jacking, heavy parallax, or continuous decorative animation.
- Respect `prefers-reduced-motion`.

## Responsive Behavior

- Desktop uses approximately 96% viewport width with 24–48px gutters.
- Tablet stacks the DocKnock video above its copy.
- Mobile keeps the name large but readable, places the hero photo below or behind the title without face obstruction, and stacks all media before supporting copy.
- The interview frame remains large at every breakpoint.

## Accessibility and SEO

- Exactly one H1 with sequential H2/H3 hierarchy.
- All images have explicit dimensions and descriptive alternative text.
- Keyboard-visible focus styles.
- Lazy-load non-LCP media.
- Preserve canonical URL, Person schema, social metadata, robots, image sitemap entries, legacy route redirects, CV URL, and external verification links.

## Verification

- Check 375px, 768px, 1024px, and 1440px layouts.
- Verify keyboard navigation, anchor offsets, active navigation, reduced motion, media fallback, and responsive image crops.
- Run lint and production build.
- Confirm one H1, heading order, metadata, legacy redirects, sitemap, robots, CV, and production assets.
