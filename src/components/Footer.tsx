import { ExternalLink } from 'lucide-react';
import { NAV_ITEMS, SITE } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-surface">
      <div className="mx-auto flex w-full max-w-shell flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10 md:flex-row md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{SITE.name}</p>
          <p className="mt-1 text-sm text-ink-muted">{SITE.role}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-ink-muted hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
            LinkedIn <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
            GitHub <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink">
            CV <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
