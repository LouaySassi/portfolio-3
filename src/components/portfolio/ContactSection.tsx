import { ExternalLink } from 'lucide-react';
import { SITE } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s talk"
    >
      <div className="flex flex-wrap gap-3 rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
          LinkedIn
          <ExternalLink className="h-4 w-4" />
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
        <a href={`mailto:${SITE.email}`} className="btn-secondary">
          Email
        </a>
        <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          CV
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </SectionShell>
  );
}
