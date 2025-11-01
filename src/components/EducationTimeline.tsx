import React, { useState, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
export interface EducationEntry {
  title: string;
  institution: string;
  dateRange: string;
  status: {
    text: string;
    type: 'progress' | 'success';
  };
}
export interface EducationTimelineProps {
  title?: string;
  entries: EducationEntry[];
  'data-id'?: string;
}
export function EducationTimeline({
  title = 'Education',
  entries,
  'data-id': dataId
}: EducationTimelineProps) {
  return <div className="w-full max-w-4xl mx-auto">
      {/* Supertitle - Left aligned */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#f2f2f2]" style={{
        boxShadow: '0 0 20px 2px rgba(242, 242, 242, 0.4), 0 0 40px 4px rgba(242, 242, 242, 0.2)'
      }} />
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#f2f2f2]/60" style={{
        fontFamily: '"Neue Montreal", sans-serif'
      }}>
          {title}
        </span>
      </div>

      <div className="relative">
        {/* Vertical gradient line */}
        <div className="absolute left-6 top-0 bottom-0 w-px" style={{
        background: 'linear-gradient(to bottom, rgba(242, 242, 242, 0.1), rgba(242, 242, 242, 0.3), rgba(242, 242, 242, 0.1))'
      }} />

        <div className="space-y-8">
          {entries.map((entry, index) => <EducationCard key={index} entry={entry} />)}
        </div>
      </div>
    </div>;
}
interface EducationCardProps {
  entry: EducationEntry;
}
function EducationCard({
  entry
}: EducationCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // Calculate rotation based on mouse position relative to card center
    // Max rotation: 5 degrees (reduced from 15)
    const rotateYValue = (mouseX - centerX) / (rect.width / 2) * 5;
    const rotateXValue = -((mouseY - centerY) / (rect.height / 2)) * 5;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };
  const isProgress = entry.status.type === 'progress';
  return <div className="relative pl-16" style={{
    perspective: '1000px'
  }}>
      {/* Icon badge */}
      <div className="absolute left-0 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#181818] border-[3px] border-[#101010]" style={{
      boxShadow: '0 0 20px 2px rgba(242, 242, 242, 0.3), 0 0 40px 4px rgba(242, 242, 242, 0.15)'
    }}>
        <GraduationCap className="w-6 h-6 text-[#f2f2f2]/80" />
      </div>

      {/* Card wrapper with 3D glass effect */}
      <div ref={cardRef} className="relative cursor-pointer" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
      transformStyle: 'preserve-3d',
      transform: isHovered ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px) scale(1.01)` : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
      transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out'
    }}>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl transition-opacity duration-300 blur-2xl" style={{
        opacity: isHovered ? 1 : 0,
        background: 'radial-gradient(circle at center, rgba(242, 242, 242, 0.25), transparent 70%)',
        transform: 'translateZ(-10px)'
      }} />

        {/* Glass card */}
        <div className="relative rounded-xl p-6 transition-all duration-300" style={{
        background: isHovered ? 'rgba(242, 242, 242, 0.08)' : 'rgba(242, 242, 242, 0.04)',
        backdropFilter: isHovered ? 'blur(20px)' : 'blur(10px)',
        border: `1px solid ${isHovered ? 'rgba(242, 242, 242, 0.25)' : 'rgba(242, 242, 242, 0.1)'}`,
        boxShadow: isHovered ? '0 30px 60px 0 rgba(0, 0, 0, 0.5), 0 0 40px 0 rgba(242, 242, 242, 0.15), inset 0 1px 0 0 rgba(242, 242, 242, 0.2)' : '0 20px 40px 0 rgba(0, 0, 0, 0.3)'
      }}>
          {/* Top shine effect */}
          <div className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300" style={{
          opacity: isHovered ? 1 : 0,
          background: 'linear-gradient(to right, transparent, rgba(242, 242, 242, 0.6) 50%, transparent)'
        }} />

          <h3 className="text-xl font-medium text-[#f2f2f2] mb-2" style={{
          fontFamily: '"Neue Montreal", sans-serif',
          textShadow: isHovered ? 'rgba(255, 255, 255, 0.4) 0px 0px 20px' : 'rgba(255, 255, 255, 0.2) 0px -2px 10px'
        }}>
            {entry.title}
          </h3>

          <p className="text-base text-[#f2f2f2]/70 mb-3" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            {entry.institution}
          </p>

          <div className="flex items-center gap-2 text-[#f2f2f2]/60 mb-3">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium" style={{
            fontFamily: '"Neue Montreal", sans-serif'
          }}>
              {entry.dateRange}
            </span>
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{
          fontFamily: '"Neue Montreal", sans-serif',
          background: isProgress ? 'rgba(242, 242, 242, 0.1)' : 'rgba(242, 242, 242, 0.08)',
          color: isProgress ? 'rgba(242, 242, 242, 0.9)' : 'rgba(242, 242, 242, 0.7)',
          border: `1px solid ${isProgress ? 'rgba(242, 242, 242, 0.3)' : 'rgba(242, 242, 242, 0.2)'}`,
          boxShadow: isProgress ? '0 0 20px 0 rgba(242, 242, 242, 0.2)' : 'none'
        }}>
            {entry.status.text}
          </span>
        </div>
      </div>
    </div>;
}