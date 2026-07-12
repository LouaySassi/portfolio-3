import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { CREDIBILITY_CHIPS, SITE } from '../../data/portfolio';

export function IdentityHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="identity" className="scroll-mt-28 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <motion.div
          className="lg:col-span-7 flex flex-col gap-8"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-ink-muted">
            Product builder · Tunisia
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-ink leading-[0.95]">
              {SITE.name}
            </h1>
            <p className="text-xl sm:text-2xl text-ink-soft leading-relaxed max-w-2xl">
              {SITE.tagline}
            </p>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-ink-soft max-w-2xl">
            {SITE.positioning}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {CREDIBILITY_CHIPS.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs sm:text-sm text-ink-soft"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#work" className="btn-primary">
              View selected work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              LinkedIn
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        <motion.figure
          className="lg:col-span-5"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src="/louay-sassi-express-fm-interview-mutualhack-2026.jpg"
              alt="Louay Sassi interviewed on Express FM after MutualHack by MAE 2026"
              width={1200}
              height={900}
              fetchPriority="high"
              decoding="async"
              className="w-full aspect-[4/5] object-cover object-[50%_18%]"
            />
            <figcaption className="border-t border-line px-4 py-3 text-xs sm:text-sm text-ink-muted">
              Express FM interview · MutualHack by MAE 2026
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
