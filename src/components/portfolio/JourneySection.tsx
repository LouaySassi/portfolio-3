import { EDUCATION, EXPERIENCE } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function JourneySection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Career"
      title="Experience"
    >
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8">
        <div className="xl:col-span-8">
          <div className="grid gap-4 md:grid-cols-2">
            {EXPERIENCE.map((item) => (
              <article
                key={`${item.org}-${item.period}`}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <div className="flex items-start gap-3">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-md border border-line bg-canvas object-contain p-1"
                      aria-hidden
                    />
                  ) : null}
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">{item.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-ink">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{item.org}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="xl:col-span-4">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
              Education
            </h3>
            <div className="mt-5 flex flex-col gap-5">
              {EDUCATION.map((entry) => (
                <article key={entry.degree}>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">{entry.period}</p>
                  <h4 className="mt-2 text-base font-semibold text-ink">{entry.degree}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{entry.school}</p>
                  <p className="mt-2 text-xs font-medium text-accent">{entry.status}</p>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
