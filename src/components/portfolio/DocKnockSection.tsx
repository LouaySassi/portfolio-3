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
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-10">
        <div className="flex min-w-0 lg:col-span-7 lg:min-h-0 xl:col-span-8">
          <LinkedInEmbed
            postUrn={DOCKNOCK.linkedInEmbed.postUrn}
            title={DOCKNOCK.linkedInEmbed.title}
            description={DOCKNOCK.linkedInEmbed.description}
            posterSrc={DOCKNOCK.interviewPoster}
            posterAlt="Louay Sassi interviewed on Express FM about DocKnock"
            posterWidth={1672}
            posterHeight={941}
            linkedInUrl={DOCKNOCK.links.expressFm}
            autoLoadOnView={false}
            posterSize="large"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-5 lg:col-span-5 lg:justify-start xl:col-span-4">
          <img
            src={DOCKNOCK.logoWhite}
            alt="DocKnock logo"
            width={96}
            height={96}
            className="h-20 w-20 rounded-2xl object-contain"
          />
          <div className="space-y-3">
            <p className="text-base md:text-lg leading-relaxed text-ink">{DOCKNOCK.summary}</p>
            <p className="text-sm md:text-base leading-relaxed text-ink-soft">{DOCKNOCK.summaryDetail}</p>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-ink-soft">{DOCKNOCK.role}</p>
          <div className="rounded-xl border border-line bg-elevated p-4 sm:p-5">
            <dl className="grid gap-5">
              {(
                [
                  { label: 'Problem', value: DOCKNOCK.problem },
                  { label: 'Solution', value: DOCKNOCK.solution },
                  { label: 'Professionals', value: DOCKNOCK.professionals },
                  { label: 'Context', value: DOCKNOCK.context },
                ] as const
              ).map(({ label, value }) => (
                <div
                  key={label}
                  className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                >
                  <dt className="mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ink">
                    {label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-wrap gap-4 pt-1">
            <a
              href={DOCKNOCK.links.esb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong"
            >
              ESB: MutualHack first prize
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={DOCKNOCK.links.managers}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong"
            >
              Managers.tn: MutualHack coverage
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={DOCKNOCK.links.expressFm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong"
            >
              Express FM interview
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <figure className="mt-10 md:mt-14">
        <img
          src={DOCKNOCK.teamPhoto}
          alt="Team Arsenal accepting first prize for DocKnock at MutualHack by MAE"
          width={1280}
          height={853}
          loading="lazy"
          decoding="async"
          className="w-full aspect-[21/9] object-cover object-center"
        />
        <figcaption className="mt-3 text-xs text-ink-muted">{DOCKNOCK.teamCaption}</figcaption>
      </figure>
    </SectionShell>
  );
}
