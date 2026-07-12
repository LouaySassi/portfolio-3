import { motion } from 'framer-motion';
import { ExternalLink, Mic2, Trophy, Users } from 'lucide-react';
import { LinkedInEmbed } from './LinkedInEmbed';

const TEAM_PHOTO = '/louay-sassi-team-arsenal-mutualhack-mae-2026-first-prize.jpg';
const INTERVIEW_PHOTO = '/louay-sassi-express-fm-interview-mutualhack-2026.jpg';

const EXPRESS_FM_POST =
  'https://www.linkedin.com/posts/efmabrplateauspaezcialabrmutualhack-ugcPost-7464688001516806144-G430/';
const LOUAY_WIN_POST =
  'https://www.linkedin.com/posts/louaysassi_docknock-mutualhack-maeassurances-ugcPost-7464304487688654849-eGTO/';
const ESB_COVERAGE = 'https://www.esb.tn/1er-prix-mutualhack-by-mae-2026/';

export function MutualHackSection() {
  return (
    <motion.section
      id="mutualhack"
      className="flex flex-col gap-8 scroll-mt-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-2 h-2 rounded-full bg-[#f2f2f2]"
          style={{
            boxShadow:
              '0 0 20px 2px rgba(242, 242, 242, 0.4), 0 0 40px 4px rgba(242, 242, 242, 0.2)',
          }}
        />
        <span
          className="text-sm font-medium uppercase tracking-[0.2em] text-[#f2f2f2]/60"
          style={{ fontFamily: '"Neue Montreal", sans-serif' }}
        >
          MutualHack by MAE 2026
        </span>
      </div>

      <div
        className="p-2 rounded-3xl shadow-[0_40px_80px_0_rgba(0,0,0,0.5)] bg-[#f2f2f2]/[0.04]"
        style={{
          outlineColor: 'rgba(242, 242, 242, 0.05)',
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineOffset: '-1px',
        }}
      >
        <div className="relative overflow-hidden rounded-2xl border border-[#3d3d3d] bg-gradient-to-br from-[#252525] to-[#101010] p-6 sm:p-8 lg:p-10 flex flex-col gap-10">
          <div
            className="absolute top-0 left-0 right-0 h-px z-[1]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)',
            }}
          />

          {/* Headline + citable answer block for AI/Google */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f9bd4e]/30 bg-[#f9bd4e]/10 text-[#f9bd4e] text-sm font-medium">
                  <Trophy className="w-4 h-4" />
                  1st Prize · 10,000 TND
                </span>
                <span className="text-sm text-[#f2f2f2]/45">May 22–23, 2026 · Tunis</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-[-0.02em]"
                style={{
                  fontFamily: '"Neue Montreal", sans-serif',
                  textShadow: 'rgba(255, 255, 255, 0.15) 0px -2px 10px',
                }}
              >
                DocKnock — Team Arsenal wins{' '}
                <span
                  className="italic"
                  style={{ fontFamily: 'Gloock, Georgia, serif' }}
                >
                  MutualHack
                </span>
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed text-[#f2f2f2]/75"
                style={{ fontFamily: '"Neue Montreal", sans-serif' }}
              >
                Louay Sassi is a Software Developer at Linedata and a core builder of DocKnock, a
                healthcare SaaS platform for secure communication between medical professionals and
                patients. With Team Arsenal (Iyed Grassi, Louay Sassi, Leith Saddouri — ESPRIT), he
                won 1st prize at MutualHack by MAE 2026 — 10,000 TND — selected from 2,200+ applicants
                and 100 finalists.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    icon: Trophy,
                    label: 'Result',
                    value: '1er Prix · MutualHack 2026',
                  },
                  {
                    icon: Users,
                    label: 'Team Arsenal',
                    value: 'Iyed · Louay · Leith',
                  },
                  {
                    icon: Mic2,
                    label: 'Press',
                    value: 'Express FM interview',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[#f2f2f2]/10 bg-[#f2f2f2]/[0.03] p-4"
                  >
                    <item.icon className="w-4 h-4 text-[#f2f2f2]/50 mb-2" />
                    <p className="text-xs uppercase tracking-wider text-[#f2f2f2]/40 mb-1">
                      {item.label}
                    </p>
                    <p
                      className="text-sm text-[#f2f2f2]/85"
                      style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={LOUAY_WIN_POST}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#f2f2f2]/15 text-sm text-[#f2f2f2]/85 hover:border-[#f2f2f2]/40 hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  My LinkedIn post
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={ESB_COVERAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#f2f2f2]/15 text-sm text-[#f2f2f2]/85 hover:border-[#f2f2f2]/40 hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  ESB coverage
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="relative overflow-hidden rounded-2xl border border-[#f2f2f2]/10">
                <img
                  src={TEAM_PHOTO}
                  alt="Louay Sassi with Team Arsenal accepting the MutualHack by MAE 2026 first prize check of 10,000 DT on stage"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[4/5] sm:aspect-[5/6]"
                />
                <figcaption
                  className="absolute bottom-0 inset-x-0 p-4 text-xs sm:text-sm text-[#f2f2f2]/90 bg-gradient-to-t from-[#101010]/90 to-transparent"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  Team Arsenal on stage — MutualHack by MAE 2026 · 1er Prix 10,000 DT
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Media row: Express FM interview + Louay's post highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2 border-t border-[#f2f2f2]/10">
            <LinkedInEmbed
              postUrn="7464688001516806144"
              posterSrc={INTERVIEW_PHOTO}
              posterAlt="Louay Sassi speaking into an Express FM microphone with the MutualHack 1st prize trophy"
              title="Express FM — Plateau Spécial MutualHack"
              description="Official Express FM interview featuring Team Arsenal after winning MutualHack by MAE 2026."
              linkedInUrl={EXPRESS_FM_POST}
            />

            <div className="flex flex-col gap-4">
              <a
                href={LOUAY_WIN_POST}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-[#3d3d3d] bg-[#151515] min-h-[280px] cursor-pointer"
              >
                <img
                  src={TEAM_PHOTO}
                  alt="Louay Sassi LinkedIn post about DocKnock winning MutualHack by MAE Assurances 2026"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/70 to-transparent" />
                <div className="relative z-10 flex flex-col justify-end h-full min-h-[280px] p-6 gap-3">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#f2f2f2]/50">
                    My announcement
                  </span>
                  <p
                    className="text-xl font-medium text-[#f2f2f2]"
                    style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                  >
                    DocKnock · MutualHack · MAE Assurances
                  </p>
                  <p
                    className="text-sm text-[#f2f2f2]/65 max-w-md"
                    style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                  >
                    My LinkedIn post covering the win, DocKnock, and what Team Arsenal built.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-[#f2f2f2]">
                    Read the post
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>

              <div className="rounded-2xl border border-[#f2f2f2]/10 bg-[#f2f2f2]/[0.03] p-5">
                <p
                  className="text-sm leading-relaxed text-[#f2f2f2]/70"
                  style={{ fontFamily: '"Neue Montreal", sans-serif' }}
                >
                  <strong className="text-[#f2f2f2] font-medium">My role on DocKnock:</strong> full-stack
                  architecture, secure messaging and document workflows, and AI-assisted
                  patient–doctor interaction features that helped Arsenal take 1st place out of
                  2,200+ applicants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
