import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-28 py-20 md:py-28 ${className}`}>
      <motion.div
        className="flex flex-col gap-10 md:gap-14"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <header className="max-w-3xl flex flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-ink-muted">{eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">
            {title}
          </h2>
          {description ? (
            <p className="text-base md:text-lg leading-relaxed text-ink-soft">{description}</p>
          ) : null}
        </header>
        {children}
      </motion.div>
    </section>
  );
}
