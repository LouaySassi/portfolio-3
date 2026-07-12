import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { LEGACY_HASH_MAP } from '../data/portfolio';

/**
 * Scrolls legacy /about and /project/:id routes to the matching homepage anchor.
 */
export function LegacyHashRedirect() {
  const location = useLocation();
  const { projectId } = useParams();

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, '') || '/';
    const mappedTarget = LEGACY_HASH_MAP[path];
    const projectTarget = projectId ? `work-${projectId}` : null;
    const targetId = mappedTarget ?? projectTarget;

    if (!targetId) return;

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timer = window.setTimeout(scrollToTarget, 80);
    return () => window.clearTimeout(timer);
  }, [location.pathname, projectId]);

  return null;
}
