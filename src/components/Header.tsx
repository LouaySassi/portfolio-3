import { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-shell items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#about" className="min-w-0 text-sm font-semibold tracking-tight text-ink">
          {SITE.name}
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
          >
            LinkedIn
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
          >
            CV
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 text-ink"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" className="lg:hidden bg-canvas px-5 py-4 sm:px-8" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2.5 text-sm text-ink-soft hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
