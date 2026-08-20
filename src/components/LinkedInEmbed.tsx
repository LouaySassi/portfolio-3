import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Play, VolumeX } from 'lucide-react';

interface LinkedInEmbedProps {
  /** LinkedIn ugcPost or share URN numeric id */
  postUrn: string;
  /** Poster image shown before / behind embed */
  posterSrc: string;
  posterAlt: string;
  posterWidth?: number;
  posterHeight?: number;
  title: string;
  description: string;
  linkedInUrl: string;
  /** Load the live embed when scrolled into view (default: click-to-play) */
  autoLoadOnView?: boolean;
  /** Larger poster area for featured sections with more adjacent copy */
  posterSize?: 'default' | 'large';
}

/**
 * LinkedIn does not allow parent pages to mute-autoplay their video embeds.
 * Default UX: poster + play button; embed loads only on click.
 */
export function LinkedInEmbed({
  postUrn,
  posterSrc,
  posterAlt,
  posterWidth = 1672,
  posterHeight = 941,
  title,
  description,
  linkedInUrl,
  autoLoadOnView = false,
  posterSize = 'default',
}: LinkedInEmbedProps) {
  const isLargePoster = posterSize === 'large';
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (autoLoadOnView) setShowEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoLoadOnView]);

  const embedSrc = `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${postUrn}?collapsed=1`;

  return (
    <div
      ref={containerRef}
      className={`flex h-full flex-col gap-4 ${isLargePoster ? 'xl:min-h-0 xl:flex-1' : ''}`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${
          isLargePoster
            ? 'aspect-[16/10] min-h-[320px] sm:min-h-[420px] xl:aspect-auto xl:min-h-[640px] xl:flex-1'
            : 'aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px]'
        }`}
      >
        <img
          src={posterSrc}
          alt={posterAlt}
          width={posterWidth}
          height={posterHeight}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showEmbed ? 'opacity-30' : 'opacity-100'
          }`}
        />

        {showEmbed && inView ? (
          <iframe
            title={title}
            src={embedSrc}
            className="absolute inset-0 w-full h-full border-0 bg-surface"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowEmbed(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer group"
            aria-label={`Play or open: ${title}`}
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-ink text-canvas shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Play className="w-7 h-7 ml-0.5" fill="currentColor" />
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-ink bg-canvas/90 border border-line px-3 py-1.5 rounded-full">
              <VolumeX className="w-3.5 h-3.5" />
              Watch Express FM interview
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm text-ink-soft leading-relaxed">{description}</p>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong transition-colors w-fit"
        >
          Open on LinkedIn
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
