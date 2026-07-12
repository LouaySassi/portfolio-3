import { EDUCATION, JOURNEY } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function JourneySection() {
  return (
    <SectionShell
      id="journey"
      eyebrow="Career journey"
      title="From developer to product builder"
      description="A compact timeline across enterprise work, founder experience, and education."
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <div className="xl:col-span-7 flex flex-col">
          {JOURNEY.map((item, index) => (
            <article
              key={`${item.org}-${item.period}`}
              className="relative pl-8 pb-10 last:pb-0 border-l border-line"
            >
              <span
                className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-canvas"
                aria-hidden
              />
              <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">{item.period}</p>
              <div className="mt-2 flex items-start gap-3">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt=""
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-md object-contain border border-line bg-surface p-1"
                    aria-hidden
                  />
                ) : null}
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.role} · {item.org}
                  </h3>
                  <p className="mt-1 text-sm md:text-base leading-relaxed text-ink-soft">
                    {item.detail}
                  </p>
                </div>
              </div>
              {index < JOURNEY.length - 1 ? null : null}
            </article>
          ))}
        </div>

        <div className="xl:col-span-5">
          <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-ink-muted mb-5">
            Education
          </h3>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((entry) => (
              <article
                key={entry.degree}
                className="rounded-xl border border-line bg-surface p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">{entry.period}</p>
                <h4 className="mt-2 font-display text-lg font-semibold text-ink">{entry.degree}</h4>
                <p className="mt-1 text-sm text-ink-soft">{entry.school}</p>
                <p className="mt-2 text-xs text-accent">{entry.status}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
