import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}
interface ScrollSpySidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}
export function ScrollSpySidebar({
  sections,
  activeSection,
  onSectionChange
}: ScrollSpySidebarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight) * 100;
      setScrollProgress(progress);

      // Find active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));
      let currentSection = sections[0].id; // Default to the first section

      for (const {
        id,
        element
      } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section active if its top is within a certain range from the viewport top
          // and its bottom is below that range. Adjusted the threshold for better feel.
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = id;
            break;
          }
        }
      }
      onSectionChange(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active section and progress

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, onSectionChange]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust this offset if your fixed header/navbar covers content
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  return <div className="flex flex-col gap-6"> {/* Removed width and flex-shrink classes */}
      {/* Progress indicator */}
      <div className="relative h-1 bg-[#f2f2f2]/10 rounded-full overflow-hidden">
        <motion.div className="absolute top-0 left-0 h-full bg-[#f2f2f2]/40 rounded-full" style={{
        width: `${scrollProgress}%`
      }} transition={{
        duration: 0.1
      }} />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`text-left px-4 py-2 rounded-lg transition-all ${activeSection === section.id ? 'bg-[#f2f2f2]/10 text-[#f2f2f2]' : 'text-[#f2f2f2]/40 hover:text-[#f2f2f2]/60 hover:bg-[#f2f2f2]/5'}`} style={{
        fontFamily: '"Neue Montreal", sans-serif'
      }}>
            <span className="text-sm font-medium">{section.title}</span>
          </button>)}
      </nav>
    </div>;
}