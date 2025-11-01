import React from 'react';
import { NavigationToggle, type NavigationItem } from './NavigationToggle';
import { ExternalLink } from 'lucide-react';
export function Header() {
  const navItems: NavigationItem[] = [{
    label: 'Projects',
    href: '/'
  }, {
    label: 'About Me',
    href: '/about'
  }];
  return <header className="sticky top-0 w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto pt-6 pb-6 z-50">
      <div className="relative flex items-center justify-between gap-4">
        {/* Left - Name and Title */}
        <div className="flex flex-col gap-1 min-w-0">
          <div className="text-base sm:text-lg font-medium leading-tight truncate text-[#f2f2f2]" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            Louay Cheker Sassi
          </div>
          <div className="text-xs sm:text-sm font-normal truncate text-[#f2f2f2]/60" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            Full-Stack Developer | AI Solutions
          </div>
        </div>

        {/* Center - Navigation (absolutely positioned) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavigationToggle items={navItems} />
        </div>

        {/* Right - Links */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a href="https://linkedin.com/in/louaysassi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs sm:text-sm font-medium whitespace-nowrap text-[#f2f2f2]/80 hover:text-white transition-colors" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            LinkedIn
            <ExternalLink className="w-3 h-3" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs sm:text-sm font-medium whitespace-nowrap text-[#f2f2f2]/80 hover:text-white transition-colors" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            Resume
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>;
}