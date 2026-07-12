import { ExternalLink } from 'lucide-react';
import { RECOGNITION } from '../../data/portfolio';
import { LinkedInEmbed } from '../LinkedInEmbed';
import { SectionShell } from './SectionShell';

export function RecognitionSection() {
  return (
    <SectionShell
      id="recognition"
      eyebrow="Recognition"
      title={RECOGNITION.title}
      description={RECOGNITION.summary}
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14">
        <div className="xl:col-span-5 flex flex-col gap-6">
          <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src={RECOGNITION.teamPhoto}
              alt="Team Arsenal first prize at MutualHack by MAE 2026 — Louay Sassi, Iyed Grassi, Leith Saddouri"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover"
            />
            <figcaption className="border-t border-line px-4 py-3 text-sm text-ink-muted">
              Team Arsenal · 1st prize · 10,000 TND
            </figcaption>
          </figure>

          <div className="rounded-xl border border-line bg-surface p-5 md:p-6">
            <h3 className="font-display text-lg font-semibold text-ink">Louay&apos;s role</h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed text-ink-soft">
              {RECOGNITION.role}
            </p>
          </div>
        </div>

        <div className="xl:col-span-7 flex flex-col gap-8">
          <div className="rounded-xl border border-line bg-surface p-5 md:p-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
              {RECOGNITION.subtitle}
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-ink-soft">
              DocKnock is a healthcare SaaS platform for secure communication between medical
              professionals and patients — built by ESPRIT students and validated on a national
              stage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={RECOGNITION.links.esb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
              >
                ESB coverage
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={RECOGNITION.links.louayPost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
              >
                Louay&apos;s LinkedIn post
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <LinkedInEmbed
            postUrn={RECOGNITION.linkedInEmbed.postUrn}
            title={RECOGNITION.linkedInEmbed.title}
            description={RECOGNITION.linkedInEmbed.description}
            posterSrc={RECOGNITION.interviewPhoto}
            posterAlt="Express FM interview with Team Arsenal after MutualHack by MAE 2026"
            linkedInUrl={RECOGNITION.links.expressFm}
          />
        </div>
      </div>
    </SectionShell>
  );
}
