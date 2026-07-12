import { ExternalLink } from 'lucide-react';
import { SITE } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let's build something worth shipping"
      description="Open to product roles, venture collaborations, and ambitious technical projects."
    >
      <div className="rounded-2xl border border-line bg-surface p-6 md:p-10 flex flex-col gap-8 max-w-3xl">
        <p className="text-base md:text-lg leading-relaxed text-ink-soft">
          I&apos;m based in Tunisia, working at Linedata and building toward entrepreneurship and
          product leadership. Reach out if you want to talk product, SaaS, or AI systems.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
            LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
          <a href={`mailto:${SITE.email}`} className="btn-secondary">
            Email
          </a>
          <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Download CV
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
