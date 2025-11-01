import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  const location = useLocation();
  const shouldHideHeader = location.pathname.startsWith('/project/');

  // Effect to scroll to top on route change
  useEffect(() => {
    // Only scroll to top if not returning from a project detail page with a specific scroll target
    // We keep your existing logic for scrolling to a project, but ensure other navigation goes to top.
    if (!location.state?.fromProjectDetail) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll for a better user experience
      });
    }
  }, [location.pathname, location.state]); // Depend on pathname for general navigation, and state for specific overrides

  return (
    <div className="w-full min-h-screen bg-[#101010] text-[#f2f2f2] flex flex-col items-center relative ">
      {/* Spotlight gradient at top */}
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none blur-[40px]" style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(242, 242, 242, 0.15) 0%, rgba(242, 242, 242, 0.05) 30%, transparent 60%)'
      }} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1
      }} />

      {/* Header - Conditionally rendered */}
      {!shouldHideHeader && <Header />}

      {/* Page content */}
      <div className="relative z-[1] flex flex-col items-center gap-20 pb-[200px] flex-1 w-full">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

