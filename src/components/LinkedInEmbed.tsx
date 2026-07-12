import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Play, VolumeX } from 'lucide-react';

interface LinkedInEmbedProps {
  /** LinkedIn ugcPost or share URN numeric id */
  postUrn: string;
  /** Poster image shown before / behind embed */
  posterSrc: string;
  posterAlt: string;
  title: string;
  description: string;
  linkedInUrl: string;
  /** Prefer loading the live embed when scrolled into view */
  autoLoadOnView?: boolean;
}

/**
 * LinkedIn does not allow parent pages to mute-autoplay their video embeds.
 * Best available UX: load the official embed when visible, keep a strong poster,
 * and surface a clear watch CTA that opens the original post.
 */
export function LinkedInEmbed({
  postUrn,
  posterSrc,
  posterAlt,
  title,
  description,
  linkedInUrl,
  autoLoadOnView = true,
}: LinkedInEmbedProps) {
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
    <div ref={containerRef} className="flex flex-col gap-4 h-full">
      <div className="relative overflow-hidden rounded-2xl border border-[#3d3d3d] bg-[#151515] aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
        <img
          src={posterSrc}
          alt={posterAlt}
          width={1200}
          height={900}
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
            className="absolute inset-0 w-full h-full border-0 bg-[#101010]"
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
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f2f2f2] text-[#101010] shadow-[0_0_40px_rgba(242,242,242,0.35)] group-hover:scale-105 transition-transform duration-200">
              <Play className="w-7 h-7 ml-0.5" fill="currentColor" />
            </span>
            <span
              className="inline-flex items-center gap-2 text-sm text-[#f2f2f2]/85 bg-[#101010]/55 backdrop-blur-md border border-[#f2f2f2]/15 px-3 py-1.5 rounded-full"
              style={{ fontFamily: '"Neue Montreal", sans-serif' }}
            >
              <VolumeX className="w-3.5 h-3.5" />
              Watch Express FM interview
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-medium text-[#f2f2f2]"
          style={{ fontFamily: '"Neue Montreal", sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-[#f2f2f2]/60 leading-relaxed"
          style={{ fontFamily: '"Neue Montreal", sans-serif' }}
        >
          {description}
        </p>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[#f2f2f2]/80 hover:text-white transition-colors w-fit cursor-pointer"
          style={{ fontFamily: '"Neue Montreal", sans-serif' }}
        >
          Open on LinkedIn
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
