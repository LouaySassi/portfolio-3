import React, { useState, useRef } from 'react';
import { Calendar } from 'lucide-react';
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}
export interface ExperienceTimelineProps {
  title?: string;
  experiences: ExperienceItem[];
  'data-id'?: string;
}
export function ExperienceTimeline({
  title = 'Experience',
  experiences,
  'data-id': dataId
}: ExperienceTimelineProps) {
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
        {/* Center gradient line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2" style={{
        background: 'linear-gradient(to bottom, rgba(242, 242, 242, 0.1), rgba(242, 242, 242, 0.3), rgba(242, 242, 242, 0.1))'
      }} />

        {experiences.map((experience, index) => {
        const isLeft = index % 2 === 0;
        return <ExperienceCard key={index} experience={experience} isLeft={isLeft} />;
      })}
      </div>
    </div>;
}
interface ExperienceCardProps {
  experience: ExperienceItem;
  isLeft: boolean;
}
function ExperienceCard({
  experience,
  isLeft
}: ExperienceCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // Calculate rotation based on mouse position relative to card center
    // Max rotation: 15 degrees
    const rotateYValue = (mouseX - centerX) / (rect.width / 2) * 15;
    const rotateXValue = -((mouseY - centerY) / (rect.height / 2)) * 15;
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
  return <div className={`relative mb-16 ${isLeft ? 'w-1/2 pr-8 text-right' : 'w-1/2 ml-auto pl-8'}`} style={{
    perspective: '1000px'
  }}>
      {/* Timeline dot */}
      <div className={`absolute top-6 z-10 w-3 h-3 rounded-full bg-[#f2f2f2]/80 ${isLeft ? 'right-[-6px]' : 'left-[-6px]'}`} style={{
      boxShadow: '0 0 20px 2px rgba(242, 242, 242, 0.4), 0 0 40px 4px rgba(242, 242, 242, 0.2)'
    }} />

      {/* Company logo */}
      {experience.logo && <div className={`absolute top-3 z-10 w-16 h-16 rounded-lg bg-[#f2f2f2]/5 border border-[#f2f2f2]/10 flex items-center justify-center overflow-hidden ${isLeft ? 'right-[-88px]' : 'left-[-88px]'}`} style={{
      boxShadow: '0 0 20px 0 rgba(242, 242, 242, 0.1)'
    }}>
          <img src={experience.logo} alt={`${experience.company} logo`} className="w-full h-full object-cover" />
        </div>}

      {/* Card wrapper with 3D glass effect */}
      <div ref={cardRef} className="relative cursor-pointer" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
      transformStyle: 'preserve-3d',
      transform: isHovered ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)` : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
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

          <div className={`flex items-center justify-between mb-2 ${isLeft ? 'flex-row-reverse' : ''}`}>
            <h3 className="text-2xl font-medium text-[#f2f2f2]" style={{
            fontFamily: '"Neue Montreal", sans-serif',
            textShadow: isHovered ? 'rgba(255, 255, 255, 0.4) 0px 0px 20px' : 'rgba(255, 255, 255, 0.2) 0px -2px 10px'
          }}>
              {experience.company}
            </h3>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#f2f2f2]/60" />
              <span className="text-sm font-medium text-[#f2f2f2]/60 whitespace-nowrap" style={{
              fontFamily: '"Neue Montreal", sans-serif'
            }}>
                {experience.period}
              </span>
            </div>
          </div>
          <p className="text-base text-[#f2f2f2]/80 mb-3" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            {experience.role}
          </p>
          <p className="text-[#f2f2f2]/60 leading-relaxed text-sm" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            {experience.description}
          </p>
        </div>
      </div>
    </div>;
}