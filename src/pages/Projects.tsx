import { useEffect } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { GlassmorphicHero } from '../components/GlassmorphicHero';
export function Projects() {
  const location = useLocation();
  // Scroll to specific project when coming back from project detail
  useEffect(() => {
    if (location.state?.fromProjectDetail && location.state?.projectId) {
      setTimeout(() => {
        const projectElement = document.getElementById(`project-${location.state.projectId}`);
        if (projectElement) {
          const elementPosition = projectElement.getBoundingClientRect().top + window.scrollY;
          const offset = 100;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);
  const projects = [{
    id: 'docai',
    title: 'DocAI',
    company: 'BestWay IT Tunisia, 2025',
    description: 'Intelligent patient management platform with AI-powered triage and secure document storage.',
    image: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile.png',
    srcset: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile-p-500.png 500w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile-p-800.png 800w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile-p-1080.png 1080w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile-p-1600.png 1600w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile.png 1728w',
    gradientOverlay: 'radial-gradient(circle at 50% 0px, rgba(127, 207, 255, 0.2), rgba(0, 0, 0, 0) 80%), radial-gradient(circle at 50% 0px, rgb(0, 51, 85), rgba(0, 0, 0, 0))'
  }, {
    id: 'binomi',
    title: 'Binomi',
    company: 'Personal Project, 2024',
    description: 'Swipe-based roommate matching platform for university students with lifestyle filtering.',
    image: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb1ff3e9aa457d70f041_thn-banner-mobile.png',
    srcset: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb1ff3e9aa457d70f041_thn-banner-mobile-p-500.png 500w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb1ff3e9aa457d70f041_thn-banner-mobile-p-800.png 800w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb1ff3e9aa457d70f041_thn-banner-mobile-p-1080.png 1080w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb1ff3e9aa457d70f041_thn-banner-mobile-p-1600.png 1600w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb1ff3e9aa457d70f041_thn-banner-mobile.png 1728w',
    gradientOverlay: 'radial-gradient(circle at 50% 0px, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0))'
  }, {
    id: 'king-solar',
    title: 'King Solar Agency',
    company: 'Founder, 2024-2025',
    description: 'Web design & development agency serving the U.S. solar market with high-converting lead-gen websites.',
    image: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/6484164c1fe228802d311e8e_spotlight-tb.png',
    srcset: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/6484164c1fe228802d311e8e_spotlight-tb-p-500.png 500w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/6484164c1fe228802d311e8e_spotlight-tb-p-800.png 800w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/6484164c1fe228802d311e8e_spotlight-tb-p-1080.png 1080w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/6484164c1fe228802d311e8e_spotlight-tb-p-1600.png 1600w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/6484164c1fe228802d311e8e_spotlight-tb.png 1728w',
    gradientOverlay: 'radial-gradient(circle at 50% 0px, rgba(8, 144, 251, 0.25), rgba(0, 0, 0, 0) 60%), repeating-radial-gradient(circle at 50% 0px, rgba(158, 5, 214, 0.4), rgba(0, 0, 0, 0))'
  }, {
    id: 'client-platforms',
    title: 'Client Platforms',
    company: 'BestWay IT Tunisia, 2023-2024',
    description: 'E-commerce and travel booking systems with optimized performance and scalability.',
    image: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/648415f4acafd703035dd314_rbc-tb.png',
    srcset: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/648415f4acafd703035dd314_rbc-tb-p-500.png 500w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/648415f4acafd703035dd314_rbc-tb-p-800.png 800w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/648415f4acafd703035dd314_rbc-tb-p-1080.png 1080w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/648415f4acafd703035dd314_rbc-tb-p-1600.png 1600w, https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/648415f4acafd703035dd314_rbc-tb.png 1728w',
    gradientOverlay: 'radial-gradient(circle at 50% 0px, rgba(0, 106, 195, 0.7), rgba(0, 0, 0, 0))'
  }];
  return <div className="w-full max-w-[1150px] px-4 sm:px-6 md:px-8 flex flex-col gap-12 relative pt-20">
      {/* Hero Section */}
      <GlassmorphicHero
      title="I build"
      highlightedWord="intelligent"
      subtitle="Full-Stack Developer and AI integration Specialist."
      secondaryText=".Net Developer at LineData"
      logoUrl={"/linedata.png"} 
    />

      {/* Projects Grid */}
      <div className="flex flex-col gap-8 sm:gap-12 relative" style={{
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
      transformStyle: 'preserve-3d'
    }}>
        {projects.map((project, index) => <Link key={project.id} to={`/project/${project.id}`} id={`project-${project.id}`} className="group relative self-stretch">
            <motion.div layoutId={`project-container-${project.id}`} className="p-2 rounded-3xl shadow-[0_40px_80px_0_rgba(0,0,0,0.5)] bg-[#f2f2f2]/[0.04]" style={{
          outlineColor: 'rgba(242, 242, 242, 0.05)',
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineOffset: '-1px'
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.03,
          layout: {
            type: 'spring',
            stiffness: 400,
            damping: 40
          }
        }} whileHover={{
          scale: 1.003
        }}>
              {/* Top gradient border - outer */}
              <motion.div className="absolute top-0 left-0 right-0 h-px z-[1] -mb-px" style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)'
          }} initial={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} />
              <motion.div layoutId={`project-content-${project.id}`} className="flex flex-col gap-16 relative overflow-hidden h-[696px] pt-9 px-10 rounded-2xl border border-[#3d3d3d] bg-gradient-to-br from-[#252525] to-[#101010]">
                {/* Top gradient border - inner */}
                <motion.div className="absolute top-0 left-0 right-0 h-px z-[1] -mb-px" style={{
              backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)'
            }} initial={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} />
                {/* Content */}
                <motion.div className="relative z-[1] flex flex-col gap-2" initial={{
              opacity: 1
            }} exit={{
              opacity: 0
            }}>
                  <div className="flex items-center justify-between self-stretch">
                    <div className="flex text-2xl font-medium leading-6" style={{
                  fontFamily: '"Neue Montreal", sans-serif',
                  letterSpacing: 'normal',
                  textShadow: 'rgba(255, 255, 255, 0.2) 0px -2px 10px'
                }}>
                      {project.title}
                    </div>
                    <ArrowUpRight className="h-8 w-8" style={{
                  transform: 'matrix(1, 0, 0, 1, 0, 0)',
                  transformStyle: 'preserve-3d'
                }} />
                  </div>
                  <div className="self-stretch pr-8 text-base font-normal leading-5 text-[#f2f2f2]/50 tracking-[0.2px]" style={{
                fontFamily: '"Neue Montreal", sans-serif'
              }}>
                    <span className="font-medium text-[#f2f2f2]/80">
                      {project.company}
                    </span>{' '}
                    — {project.description}
                  </div>
                </motion.div>
                {/* Image */}
                <motion.img layoutId={`project-image-${project.id}`} src={project.image} srcSet={project.srcset} sizes="100vw" loading="lazy" alt={project.title} className="relative z-[1] self-center max-w-[90%] block shadow-[0_40px_50px_10px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out group-hover:scale-[1.01]" style={{
              transform: index === 0 ? 'matrix(1, 0, 0, 1, 0, 0)' : undefined,
              transformStyle: index === 0 ? 'preserve-3d' : undefined
            }} />
                {/* Background gradient overlay with hover effect - RESTORED */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none" style={{
              backgroundImage: project.gradientOverlay
            }} />
              </motion.div>
            </motion.div>
          </Link>)}

        {/* Coming Soon - Locked Project Card */}
        <motion.div className="relative self-stretch cursor-not-allowed" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3,
        delay: projects.length * 0.03
      }}>
          <div className="p-2 rounded-3xl shadow-[0_40px_80px_0_rgba(0,0,0,0.5)] bg-[#f2f2f2]/[0.04] opacity-70" style={{
          outlineColor: 'rgba(242, 242, 242, 0.05)',
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineOffset: '-1px',
          filter: 'saturate(0.3)'
        }}>
            {/* Top gradient border - outer */}
            <div className="absolute top-0 left-0 right-0 h-px z-[1] -mb-px" style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.5) 35%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.5) 65%, rgba(0, 0, 0, 0) 95%)'
          }} />
            <div className="flex flex-col gap-16 relative overflow-hidden h-[696px] pt-9 px-10 rounded-2xl border border-[#3d3d3d]/70 bg-gradient-to-br from-[#252525]/70 to-[#101010]/70">
              {/* Top gradient border - inner */}
              <div className="absolute top-0 left-0 right-0 h-px z-[1] -mb-px" style={{
              backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 20%, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0) 80%)'
            }} />

              {/* Content */}
              <div className="relative z-[1] flex flex-col gap-2">
                <div className="flex items-center justify-between self-stretch">
                  <div className="flex text-2xl font-medium leading-6 text-[#f2f2f2]/50" style={{
                  fontFamily: '"Neue Montreal", sans-serif',
                  letterSpacing: 'normal'
                }}>
                    New Project
                  </div>
                  <Lock className="h-8 w-8 text-[#f2f2f2]/40" />
                </div>
                <div className="self-stretch pr-8 text-base font-normal leading-5 text-[#f2f2f2]/40 tracking-[0.2px]" style={{
                fontFamily: '"Neue Montreal", sans-serif'
              }}>
                  <span className="font-medium text-[#f2f2f2]/50">TBA</span> —
                  Exciting new project coming soon...
                </div>
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-md bg-[#101010]/40">
                <motion.div className="flex flex-col items-center gap-4" animate={{
                y: [0, -10, 0]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
                  <Lock className="w-20 h-20 text-[#f2f2f2]/70" strokeWidth={1.5} />
                  <div className="text-5xl font-medium text-[#f2f2f2]" style={{
                  fontFamily: '"Neue Montreal", sans-serif',
                  textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 30px, rgba(255, 255, 255, 0.2) 0px 0px 60px'
                }}>
                    Coming Soon
                  </div>
                </motion.div>
              </div>

              {/* Placeholder Image */}
              <div className="relative z-[1] self-center max-w-[90%] w-full h-64 bg-[#f2f2f2]/10 rounded-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
}