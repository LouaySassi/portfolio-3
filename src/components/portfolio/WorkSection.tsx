import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function WorkSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionShell
      id="work"
      eyebrow="Work"
      title="Selected products"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {PROJECTS.map((project) => {
          const isExpanded = expandedId === project.id;
          const detailsId = `work-${project.id}-details`;

          return (
            <article
              key={project.id}
              id={`work-${project.id}`}
              className="scroll-mt-32 overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <img
                src={project.image}
                alt={`${project.title} project visual`}
                width={900}
                height={560}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover sm:h-64"
              />

              <div className="flex flex-col gap-5 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-md object-cover bg-white"
                      aria-hidden
                    />
                  ) : null}
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{project.context}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">Outcome</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{project.outcome}</p>
                </div>

                {isExpanded ? (
                  <div id={detailsId} className="grid gap-4 rounded-xl bg-elevated p-4 text-sm sm:grid-cols-2">
                    <div>
                      <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                        Problem
                      </p>
                      <p className="leading-relaxed text-ink-soft">{project.problem}</p>
                    </div>
                    <div>
                      <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                        Ownership
                      </p>
                      <p className="leading-relaxed text-ink-soft">{project.ownership}</p>
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="btn-secondary px-4 py-2"
                  >
                    {isExpanded ? 'Hide details' : 'Details'}
                  </button>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                    >
                      Open
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
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
