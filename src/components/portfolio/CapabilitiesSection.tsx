import { CAPABILITIES } from '../../data/portfolio';
import { SectionShell } from './SectionShell';

export function CapabilitiesSection() {
  return (
    <SectionShell
      id="capabilities"
      eyebrow="Capabilities"
      title="What I bring to the table"
      description="Grounded in shipped work — product thinking, leadership, and technical execution."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {CAPABILITIES.map((group) => (
          <article
            key={group.title}
            className="rounded-xl border border-line bg-surface p-5 md:p-6"
          >
            <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm md:text-base text-ink-soft flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
