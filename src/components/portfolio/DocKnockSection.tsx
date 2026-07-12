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
              href={DOCKNOCK.links.managers}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong"
            >
              Managers.tn
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
