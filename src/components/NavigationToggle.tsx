import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationToggleProps {
  items: NavigationItem[];
}

export function NavigationToggle({ items }: NavigationToggleProps) {
  const location = useLocation();

  return (
    <nav
      className="flex items-center gap-1 p-1 rounded-full relative"
      style={{
        background: 'rgba(242, 242, 242, 0.05)', // Even more transparent background
        backdropFilter: 'blur(10px)', // Apply blur effect
        border: '1px solid rgba(242, 242, 242, 0.1)', // Subtle border
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)', // Optional: subtle shadow for depth
      }}
    >
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link key={item.href} to={item.href} className="relative">
            {/* Wrap the active tab with AnimatePresence and add a key based on the path */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key={location.pathname} // <--- IMPORTANT: Add key here
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'rgba(242, 242, 242, 0.15)',
                    border: '1px solid rgba(242, 242, 242, 0.2)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </AnimatePresence>
            <div
              className={`relative px-4 py-2 rounded-full text-sm font-medium ${isActive ? 'text-[#f2f2f2]' : 'text-[#f2f2f2]/60'}`}
              style={{
                fontFamily: '"Neue Montreal", sans-serif',
              }}
            >
              {item.label}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}