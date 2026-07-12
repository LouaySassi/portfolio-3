import { PHILOSOPHY } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function PhilosophySection() {
  return (
    <SectionShell
      id="philosophy"
      eyebrow="Operating philosophy"
      title={PHILOSOPHY.title}
      description="What I am building toward — entrepreneurship, product strategy, and shipped systems."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-7 flex flex-col gap-5 text-base md:text-lg leading-relaxed text-ink-soft">
          {PHILOSOPHY.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {PHILOSOPHY.principles.map((principle) => (
            <article
              key={principle.label}
              className="rounded-xl border border-line bg-surface p-5 md:p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{principle.label}</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-ink-soft">
                {principle.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
