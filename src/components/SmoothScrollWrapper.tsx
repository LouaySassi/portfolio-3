import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Don't forget the CSS

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

export function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotive = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotive.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08, // Adjust for more/less "drag" effect (0.01 is more, 1 is less)
        direction: 'vertical',
        // Add more options as needed
      });

      // Optional: Update scroll on content changes (if using dynamic content)
      // window.addEventListener('resize', () => locomotive.current?.update());
      // For framer-motion, you might need to call update when layout changes
      // locomotive.current?.update();

      return () => {
        locomotive.current?.destroy();
      };
    }
  }, []); // Run once on mount

  // You might need to expose the Locomotive Scroll instance contextually
  // if you want to trigger scrolls or updates from child components.
  // For now, this is a simple wrapper.

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}