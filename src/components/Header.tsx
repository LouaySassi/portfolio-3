import { ExternalLink } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationToggle, type NavigationItem } from './NavigationToggle';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavigationItem[] = [
    { label: 'Projects', href: '/#projects' },
    { label: 'Win', href: '/#mutualhack' },
    { label: 'About', href: '/about' },
  ];

  const handleNav = (item: NavigationItem) => {
    if (item.href === '/about') {
      navigate('/about');
      return;
    }

    const hash = item.href.includes('#') ? item.href.split('#')[1] : '';
    if (location.pathname !== '/') {
      navigate('/');
      if (hash) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
      return;
    }

    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto pt-6 pb-6 z-50">
      <div className="relative flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col gap-1 min-w-0 text-left cursor-pointer"
        >
          <div
            className="text-base sm:text-lg font-medium leading-tight truncate text-[#f2f2f2]"
            style={{ fontFamily: '"Neue Montreal", sans-serif' }}
          >
            Louay Sassi
          </div>
          <div
            className="text-xs sm:text-sm font-normal truncate text-[#f2f2f2]/60"
            style={{ fontFamily: '"Neue Montreal", sans-serif' }}
          >
            Software Developer @Linedata · MutualHack Winner
          </div>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <NavigationToggle items={navItems} onItemClick={handleNav} />
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href="https://linkedin.com/in/louaysassi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs sm:text-sm font-medium whitespace-nowrap text-[#f2f2f2]/80 hover:text-white transition-colors cursor-pointer"
            style={{ fontFamily: '"Neue Montreal", sans-serif' }}
          >
            LinkedIn
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="/Louay CV PFE english (latest).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs sm:text-sm font-medium whitespace-nowrap text-[#f2f2f2]/80 hover:text-white transition-colors cursor-pointer"
            style={{ fontFamily: '"Neue Montreal", sans-serif' }}
          >
            Resume
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
