import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  titleAside?: ReactNode;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className = '',
  titleAside,
}: SectionShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-24 ${className}`}>
      <motion.div
        className="flex flex-col gap-10 md:gap-12"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            {eyebrow ? (
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
              {title}
            </h2>
          </div>
          {titleAside}
        </header>
        {children}
      </motion.div>
    </section>
  );
}
