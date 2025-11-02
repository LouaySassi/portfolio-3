import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollSpySidebar } from '../components/ScrollSpySidebar';
import { projects } from '../projects';
import { ProjectData, ProjectSection, FeatureItem } from '../projects/types';

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  const project: ProjectData | null = projectId ? (projects as Record<string, ProjectData>)[projectId] : null;

  useEffect(() => {
    if (!project) {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  }, [project, navigate]);

  const handleBackClick = () => {
    navigate('/', {
      state: { fromProjectDetail: true, projectId }
    });
  };

  const handleImageClick = (url: string | undefined) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (!project) {
    return null;
  }

  return (
    <motion.div
      className="w-full min-h-screen bg-[#101010] text-[#f2f2f2] flex justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {/* Fixed sidebar container including the back button */}
      <motion.div
        className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 pt-6 pl-4 z-20"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {/* Back button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-[#f2f2f2]/60 hover:text-[#f2f2f2] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium" style={{ fontFamily: '"Neue Montreal", sans-serif' }}>
            Back to Projects
          </span>
        </button>
        {/* ScrollSpySidebar - FIXED */}
        <ScrollSpySidebar
          sections={project.sections.map(section => ({
            ...section,
            content: Array.isArray(section.content)
              ? section.content.map(item => <div key={item.title}>{item.title}</div>)
              : section.content
          }))}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </motion.div>

      {/* Main content area */}
      <div className="w-full max-w-[1150px] flex flex-col items-center lg:pl-72 pb-20 px-4 sm:px-6 md:px-8 pt-6">
        {/* Project header - fades in */}
        <motion.div
          className="flex flex-col gap-4 w-full mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          <div className="flex flex-col gap-2">
            {/* --- CHANGE: Container for logo and title --- */}
            <div className="flex items-center gap-4">
              {project.logo && (
                <img 
                  src={project.logo} 
                  alt={`${project.title} logo`} 
                  className="h-16 w-auto" // Logo styling
                />
              )}
              <h1
                className="text-5xl sm:text-6xl font-medium" // Increased title size
                style={{
                  fontFamily: '"Neue Montreal", sans-serif',
                  textShadow: 'rgba(255, 255, 255, 0.2) 0px -2px 10px'
                }}
              >
                {project.title}
              </h1>
            </div>
            {/* --- END CHANGE --- */}
            <p
              className="text-lg sm:text-xl text-[#f2f2f2]/60"
              style={{ fontFamily: '"Neue Montreal", sans-serif' }}
            >
              {project.company} • {project.year}
            </p>
          </div>

          {/* Project Website Link - Visible at the start */}
          {project.website && (
            <motion.a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-base sm:text-lg font-medium"
              style={{ fontFamily: '"Neue Montreal", sans-serif' }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {project.title.includes('Agency') ? 'Visit Agency LinkedIn' : 'Visit Project Website'} <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}

          <p
            className="text-base sm:text-lg text-[#f2f2f2]/70 leading-relaxed max-w-2xl mt-4"
            style={{ fontFamily: '"Neue Montreal", sans-serif' }}
          >
            {project.description}
          </p>
        </motion.div>

        {/* Project image - shared layout, now clickable */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-[#3d3d3d] shadow-[0_40px_80px_0_rgba(0,0,0,0.5)] w-full mb-12 cursor-pointer"
          onClick={() => handleImageClick(project.website)}
        >
          <motion.img
            layoutId={`project-image-${projectId}`}
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          />
        </motion.div>

        {/* Sections - fade in */}
        {project.sections.map((section: ProjectSection, index: number) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="flex flex-col gap-6 scroll-mt-24 w-full mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 + index * 0.02 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-medium pt-4 pb-2 border-b border-[#f2f2f2]/10"
              style={{ fontFamily: '"Neue Montreal", sans-serif' }}
            >
              {section.title}
            </h2>

            {/* Conditional rendering for different content structures */}
            {Array.isArray(section.content) ? (
              // If content is an array of FeatureItem
              <div className="flex flex-col gap-10">
                {section.content.map((featureItem: FeatureItem, featureIndex: number) => (
                  <div key={featureIndex} className="flex flex-col gap-4">
                    <h4
                      className="text-xl font-medium"
                      style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                    >
                      {featureItem.title}
                    </h4>
                    <p
                      className="text-base text-[#f2f2f2]/70 leading-relaxed max-w-2xl"
                      style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                    >
                      {featureItem.description}
                    </p>
                    {featureItem.screenshots && featureItem.screenshots.length > 0 && (
                      <div className="mt-4">
                        {featureItem.screenshots.map((screenshotUrl: string, screenshotIndex: number) => (
                          <motion.div
                            key={screenshotIndex}
                            className="relative rounded-lg overflow-hidden border border-[#3d3d3d] shadow-[0_10px_30px_0_rgba(0,0,0,0.3)] w-full cursor-pointer"
                            onClick={() => handleImageClick(project.website)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 + index * 0.02 + screenshotIndex * 0.05 }}
                          >
                            <img
                              src={screenshotUrl}
                              alt={`${featureItem.title} screenshot ${screenshotIndex + 1}`}
                              className="w-full h-auto object-cover"
                            />
                             
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // If content is a ReactNode
              <div
                className="prose prose-invert max-w-none"
                style={{ fontFamily: '"Neue Montreal", sans-serif' }}
              >
                {section.content}
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}