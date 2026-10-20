import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

/* ── WorkLogix Navigation Links ── */
const NAV_LINKS = [
  { label: 'Features',  id: 'features'  },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Pricing',   id: 'pricing'   },
  { label: 'Contact',   id: 'pricing'   },
];

export default function Navbar({ activeSection, onNavigate, onBookDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  const handleHeroLogoClick = () => {
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate('overview');
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] font-sans ${
        scrolled ? 'shadow-[0_4px_20px_rgba(15,23,42,0.06)]' : ''
      }`}
      style={{ height: '76px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* ── LEFT: LOGO (WorkLogix style height ~38px) ── */}
        <div
          onClick={handleHeroLogoClick}
          className="flex items-center cursor-pointer select-none"
        >
          <img
            src="/assets/peopleops-logo.png"
            alt="PeopleOps"
            className="h-[38px] w-auto object-contain"
          />
        </div>

        {/* ── CENTER: WORKLOGIX NAV LINKS ── */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id && link.label !== 'Contact';
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className={`text-[15px] font-semibold transition-colors duration-150 relative py-1 cursor-pointer ${
                  isActive 
                    ? 'text-[#0f172a] font-bold' 
                    : 'text-[#475569] hover:text-[#0f172a]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="worklogix-active-dot"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00C9A7] rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* ── RIGHT: WORKLOGIX TWO PILL BUTTONS (Book a demo + Start free) ── */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* Pill Outline Button */}
          <button
            onClick={onBookDemo}
            className="px-5 py-2.5 rounded-full text-sm font-bold text-[#0f172a] border border-[#cbd5e1] hover:border-[#0f172a] bg-white hover:bg-slate-50 transition-all shadow-xs cursor-pointer active:scale-97"
          >
            Book a demo
          </button>

          {/* Pill Solid Accent Button */}
          <button
            onClick={onBookDemo}
            className="px-6 py-2.5 rounded-full text-sm font-extrabold text-slate-950 bg-[#F59E0B] hover:bg-[#FBBF24] shadow-[0_4px_14px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer active:scale-97"
          >
            Start free
          </button>
        </div>

        {/* ── MOBILE HAMBURGER BUTTON ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── MOBILE SLIDE-DOWN DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-b border-[#e2e8f0] px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 mt-3 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileOpen(false); onBookDemo(); }}
                className="w-full py-3 rounded-full text-sm font-bold text-slate-900 border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Book a demo
              </button>
              <button
                onClick={() => { setMobileOpen(false); onBookDemo(); }}
                className="w-full py-3 rounded-full text-sm font-extrabold text-slate-950 bg-[#F59E0B] hover:bg-[#FBBF24] shadow-md transition-colors"
              >
                Start free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
