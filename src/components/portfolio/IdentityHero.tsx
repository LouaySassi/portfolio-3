import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BIO, SITE } from '../../data/portfolio';

export function IdentityHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-28 relative min-h-[78vh] py-10 md:py-16 overflow-hidden">
      <motion.div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="lg:col-span-7 relative z-10 flex flex-col gap-6">
          <h1 className="text-[clamp(3.5rem,11vw,8.5rem)] font-bold leading-[0.82] tracking-[-0.06em] text-ink uppercase">
            Louay
            <br />
            Sassi
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-ink-muted">
            {SITE.role}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#work" className="btn-primary">
              Selected work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
          <div className="max-w-xl flex flex-col gap-4 pt-8">
            <p className="text-xl md:text-2xl font-medium leading-snug text-ink">{BIO.lead}</p>
            <p className="text-base leading-relaxed text-ink-soft">{BIO.body}</p>
          </div>
        </div>

        <figure className="lg:col-span-5 relative z-0">
          <img
            src={SITE.heroImage}
            alt="Louay Sassi speaking during an Express FM interview"
            width={1672}
            height={941}
            fetchPriority="high"
            decoding="async"
            className="w-full aspect-[4/5] object-cover object-[50%_18%] opacity-90"
          />
        </figure>
      </motion.div>
    </section>
  );
}
