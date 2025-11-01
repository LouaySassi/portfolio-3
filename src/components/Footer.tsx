import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  return <footer className="w-full border-t border-[#f2f2f2]/10 bg-[#101010] mt-auto relative">
      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Main Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-[#f2f2f2] uppercase tracking-wider" style={{
            fontFamily: '"Neue Montreal", sans-serif'
          }}>
              Main
            </h3>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-[#f2f2f2]/60 hover:text-[#f2f2f2] transition-colors text-sm w-fit" style={{
              fontFamily: '"Neue Montreal", sans-serif'
            }}>
                Projects
              </Link>
              <Link to="/about" className="text-[#f2f2f2]/60 hover:text-[#f2f2f2] transition-colors text-sm w-fit" style={{
              fontFamily: '"Neue Montreal", sans-serif'
            }}>
                About Me
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-[#f2f2f2] uppercase tracking-wider" style={{
            fontFamily: '"Neue Montreal", sans-serif'
          }}>
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a href="https://linkedin.com/in/louaysassi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#f2f2f2]/60 hover:text-[#f2f2f2] transition-colors text-sm w-fit" style={{
              fontFamily: '"Neue Montreal", sans-serif'
            }}>
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#f2f2f2]/60 hover:text-[#f2f2f2] transition-colors text-sm w-fit" style={{
              fontFamily: '"Neue Montreal", sans-serif'
            }}>
                Resume
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Animated Element - Right Side */}
          <div className="flex items-center justify-center md:justify-end">
            <motion.div className="relative" animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}>
              <motion.div className="relative" whileHover={{
              scale: 1.1
            }} transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10
            }}>
                <Sparkles className="w-16 h-16 text-[#f2f2f2]/20" strokeWidth={1.5} />
                {/* Pulsing glow effect */}
                <motion.div className="absolute inset-0 rounded-full blur-xl" animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }} style={{
                background: 'radial-gradient(circle, rgba(242, 242, 242, 0.3) 0%, transparent 70%)'
              }} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#f2f2f2]/10">
          <p className="text-xs text-[#f2f2f2]/40" style={{
          fontFamily: '"Neue Montreal", sans-serif'
        }}>
            Made by Louay Sassi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}