import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const INTERVIEW_PHOTO = '/louay-sassi-express-fm-interview-mutualhack-2026.jpg';

export function AuthorityHero() {
  return (
    <motion.section
      className="w-full relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-label="Louay Sassi — Software Developer and MutualHack 2026 winner"
    >
      <div
        className="p-2 bg-[#101010] rounded-3xl shadow-[0_0_8px_0_rgba(0,0,0,0.4)_inset,0_0_60px_0_rgba(0,0,0,0.2),0_30px_120px_0_rgba(0,0,0,0.8)]"
        style={{
          backgroundImage:
            'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), rgba(0, 0, 0, 0))',
          outlineColor: 'rgba(242, 242, 242, 0.15)',
          outlineStyle: 'solid',
          outlineWidth: '1px',
        }}
      >
        <div
          className="h-0.5 -mb-0.5"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 90%)',
          }}
        />

        <div className="overflow-hidden rounded-2xl border border-[#f2f2f2]/30 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[600px]">
            {/* Brand / copy column */}
            <div className="relative z-10 flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12 bg-[#101010]/85 order-2 lg:order-1">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-[#f9bd4e]/35 bg-[#f9bd4e]/10 text-[#f9bd4e] text-xs sm:text-sm font-medium">
                  <Trophy className="w-3.5 h-3.5" />
                  1st Prize — MutualHack by MAE 2026
                </div>

                <div className="flex flex-col gap-3">
                  <p
                    className="text-sm uppercase tracking-[0.22em] text-[#f2f2f2]/50"
                    style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                  >
                    Software Developer · Linedata
                  </p>
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[0.92] tracking-[-0.03em] text-[#f2f2f2]"
                    style={{
                      fontFamily: '"Neue Montreal", sans-serif',
                      textShadow:
                        'rgba(0, 87, 255, 0.15) 0px 5px 10px, rgba(255, 90, 0, 0.1) 0px -5px 10px, rgba(255, 255, 255, 0.25) 0px -5px 25px',
                    }}
                  >
                    Louay{' '}
                    <span
                      className="italic bg-gradient-to-b from-[#f2f2f2] from-50% to-transparent to-90% bg-clip-text text-transparent"
                      style={{ fontFamily: 'Gloock, Georgia, serif' }}
                    >
                      Sassi
                    </span>
                  </h1>
                </div>

                <p
                  className="text-lg sm:text-xl text-[#f2f2f2]/70 leading-relaxed max-w-md"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  I build SaaS and AI systems — including DocKnock, the healthcare platform that won
                  MutualHack by MAE 2026 (10,000 TND) with Team Arsenal.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#mutualhack"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f2f2f2] text-[#101010] text-sm font-medium hover:bg-white transition-colors cursor-pointer"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  See the win
                  <ArrowDown className="w-4 h-4" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#f2f2f2]/20 text-[#f2f2f2]/85 text-sm font-medium hover:border-[#f2f2f2]/50 hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  About me
                </Link>
                <a
                  href="https://linkedin.com/in/louaysassi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-[#f2f2f2]/60 text-sm hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  LinkedIn
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Dominant photo — LCP image, no lazy */}
            <div className="relative order-1 lg:order-2 min-h-[360px] lg:min-h-full">
              <img
                src={INTERVIEW_PHOTO}
                alt="Louay Sassi interviewed on Express FM after winning 1st prize at MutualHack by MAE 2026, holding the trophy"
                width={1600}
                height={1200}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(16,16,16,0.55) 0%, transparent 35%), linear-gradient(to right, rgba(16,16,16,0.75) 0%, transparent 30%)',
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <p
                  className="text-xs sm:text-sm text-[#f2f2f2]/85 backdrop-blur-md bg-[#101010]/40 border border-[#f2f2f2]/10 rounded-xl px-3 py-2"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  Express FM interview · MutualHack by MAE 2026 · 1er Prix
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
