import { ExternalLink } from 'lucide-react';
import { NAV_ITEMS, SITE } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-editorial px-4 py-12 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">Navigate</h2>
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-ink-soft hover:text-ink transition-colors w-fit"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">Connect</h2>
            <div className="flex flex-col gap-2">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors w-fit"
              >
                LinkedIn
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors w-fit"
              >
                GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors w-fit"
              >
                Download CV
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <p className="font-display text-lg font-semibold text-ink">{SITE.name}</p>
            <p className="text-sm text-ink-soft max-w-xs">
              Entrepreneurial product builder · Software Developer @ Linedata
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} Louay Sassi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
