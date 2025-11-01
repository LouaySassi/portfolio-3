import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface GlassmorphicHeroProps {
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  secondaryText?: string;
  logoUrl?: string; // <--- NEW PROP: URL for the company logo
  'data-id'?: string;
}

export const GlassmorphicHero: React.FC<GlassmorphicHeroProps> = ({
  title = 'I build',
  highlightedWord = 'intelligent',
  subtitle = 'Full-Stack Developer and AI integration Specialist.',
  secondaryText = '.Net Developer at LineData',
  logoUrl, // <--- Destructure new prop
  'data-id': dataId
}) => {
  return (
    <motion.div
      className="w-full rounded-3xl relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* This div contains all the content that should be masked/faded */}
      <div
        className="p-2 bg-[#101010] rounded-3xl shadow-[0_0_8px_0_rgba(0,0,0,0.4)_inset,0_0_60px_0_rgba(0,0,0,0.2),0_30px_120px_0_rgba(0,0,0,0.8)]"
        style={{
          backdropFilter: 'none',
          outlineOffset: '-1px',
          backgroundImage: 'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), rgba(0, 0, 0, 0))',
          outlineColor: 'rgba(242, 242, 242, 0.15)',
          outlineStyle: 'solid',
          outlineWidth: '1px',
          // Crucial Change: Adjust maskImage to only fade the lower 10%
          maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', // Start fade at 90%
          WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' // Start fade at 90%
        }}
      >
        {/* Top gradient line */}
        <div
          className="h-0.5 -mb-0.5"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 90%)',
          }}
        />
        {/* Main inner content container */}
        <div className="overflow-hidden rounded-2xl backdrop-blur-[20px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)_inset,0_0_12px_0_rgba(0,0,0,0.4)] relative border border-[#f2f2f2]/30">
          {/* Browser header */}
          <div
            className="flex justify-between items-center h-10 px-5 pr-3 rounded-t-2xl backdrop-blur-[40px] shadow-[0_10px_20px_4px_rgba(0,0,0,0.2)] z-[5]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(242, 242, 242, 0.1), rgba(242, 242, 242, 0.5) 50%, rgba(242, 242, 242, 0.1))',
            }}
          >
            {/* Traffic light buttons */}
            <div className="flex gap-2.5">
              <div className="w-3 h-3 rounded-full bg-[#f46b5d] border border-[#101010]/25 shadow-[0_0_20px_2px_rgb(244,107,93)]" />
              <div className="w-3 h-3 rounded-full bg-[#f9bd4e] border border-[#101010]/25 shadow-[0_0_20px_2px_rgb(249,189,78)]" />
              <div className="w-3 h-3 rounded-full bg-[#57c353] border border-[#101010]/25 shadow-[0_0_20px_2px_rgb(87,195,83)]" />
            </div>
            {/* Plus icon */}
            <img
              src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/64647bd0f92c6bb858b22871_icon-plus.svg"
              loading="lazy"
              alt=""
              className="w-6 opacity-20"
            />
          </div>
          {/* Content area (main heading, subtitle, and noise overlay) */}
          <div className="relative flex flex-col px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#101010]/70 z-[5]">
            <div className="relative z-10 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
              {/* Main heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium leading-[0.9] tracking-[-0.02em]"
                style={{
                  textShadow: 'rgba(0, 87, 255, 0.15) 0px 5px 10px, rgba(255, 90, 0, 0.1) 0px -5px 10px, rgba(255, 255, 255, 0.3) 0px -5px 25px',
                  fontFamily: '"Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {title}{' '}
                <span
                  className="italic pr-3 bg-gradient-to-b from-[#f2f2f2] from-50% to-transparent to-90% bg-clip-text text-transparent"
                  style={{
                    textShadow: 'rgba(0, 87, 255, 0.1) 0px 5px 15px, rgba(255, 90, 0, 0.08) 0px -5px 15px, rgba(255, 255, 255, 0.2) 0px 0px 30px',
                    fontFamily: 'Gloock, Georgia, serif',
                  }}
                >
                  {highlightedWord}
                </span>{' '}
                systems & solutions.
              </motion.h1>
              {/* Subtitle section - now includes logo */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div /> {/* This empty div maintains the column layout */}
                <div
                  className="text-lg sm:text-xl md:text-2xl font-medium flex flex-col leading-[1.4]"
                  style={{
                    fontFamily: '"Neue Montreal", -apple-system, BlinkMacMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {subtitle}
                  <br />
                  <span className="text-[#f2f2f2]/50 font-normal flex items-center gap-3"> {/* Added flex and gap */}
                    {secondaryText}
                    {logoUrl && ( // Conditionally render logo if prop is provided
                      <img
                        src={logoUrl}
                        alt="Company Logo"
                        className="h-12 w-12 object-contain" // Adjust size as needed
                        style={{ filter: 'grayscale(100%) brightness(150%)' }} // Example: grayscale for subtle look
                      />
                    )}
                  </span>
                </div>
              </motion.div>
            </div>
            {/* Noise overlay */}
            <div
              className="absolute inset-0 z-0 mix-blend-overlay opacity-25 bg-[length:200px]"
              style={{
                backgroundImage: 'url("https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png")',
              }}
            />
          </div>
          {/* Bottom fade gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none z-[6]"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(16, 16, 16, 0.4) 90%, rgba(16, 16, 16, 0.8) 99%, #101010 100%)',
            }}
          />
        </div>
      </div>{' '}
      {/* End of the wrapper div that gets masked */}
      {/* Bouncing down arrow - still outside the masked content */}
      <motion.div
        className="absolute -bottom-0 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-8 h-8 text-[#f2f2f2]/60" strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
};