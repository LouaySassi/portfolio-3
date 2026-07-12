import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function WorkSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionShell
      id="work"
      eyebrow="Selected work"
      title="Impact stories"
      description="Problem → ownership → outcome. Curated ventures and products, not a screenshot gallery."
    >
      <div className="flex flex-col gap-8 md:gap-10">
        {PROJECTS.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <article
              key={project.id}
              id={`work-${project.id}`}
              className="scroll-mt-32 rounded-2xl border border-line bg-surface overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-[320px]">
                  <img
                    src={project.image}
                    alt={`${project.title} project visual`}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-md object-contain"
                        aria-hidden
                      />
                    ) : null}
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink">{project.title}</h3>
                      <p className="text-sm text-ink-muted">{project.context}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-1.5">Problem</p>
                      <p className="leading-relaxed text-ink-soft">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-1.5">Ownership</p>
                      <p className="leading-relaxed text-ink-soft">{project.ownership}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-1.5">Outcome</p>
                      <p className="leading-relaxed text-ink-soft">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
                      >
                        View proof
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      {isExpanded ? 'Hide details' : 'More context'}
                    </button>
                  </div>

                  {isExpanded ? (
                    <p className="text-sm leading-relaxed text-ink-soft border-t border-line pt-4">
                      {project.ownership} {project.outcome}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
