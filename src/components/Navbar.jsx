import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

/* ─── Exact Top Bar Links Requested ─── */
const NAV_LINKS = [
  { label: 'Overview',  id: 'overview'  },
  { label: 'Features',  id: 'features'  },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Pricing',   id: 'pricing'   },
];

export default function Navbar({ activeSection, onNavigate, onBookDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [hovered,    setHovered]    = useState(null);

  /* Shrink navbar on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = activeSection === 'overview' || activeSection === 'home';

  const handleNavClick = (id) => {
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,  opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
        isDark
          ? 'bg-[#071F11]/90 border-emerald-950/80 text-white'
          : 'bg-[#FAF7EE]/95 border-[#EBD0AF] text-[#113309]'
      } ${scrolled ? 'h-16 shadow-lg' : 'h-20'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">

        {/* ── LOGO ── */}
        <motion.div
          onClick={() => handleNavClick('overview')}
          className="flex-shrink-0 cursor-pointer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <img
            src="/assets/peopleops-logo.png"
            alt="PeopleOps Logo"
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-12'}`}
          />
        </motion.div>

        {/* ── CENTER NAV (Desktop) ── */}
        <nav className="hidden md:flex items-center gap-1 mx-auto" onMouseLeave={() => setHovered(null)}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => setHovered(link.id)}
                className="relative px-4 py-2.5 rounded-lg text-sm font-semibold tracking-tight transition-colors duration-150 outline-none"
                style={{
                  color: isActive
                    ? (isDark ? '#fff' : '#113309')
                    : (isDark ? 'rgba(209,250,229,0.7)' : '#3E5044'),
                }}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              >
                {/* Hover/Active pill background */}
                <AnimatePresence>
                  {(hovered === link.id || isActive) && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-lg ${
                        isActive
                          ? isDark
                            ? 'bg-white/15 border border-white/20'
                            : 'bg-[#FBE6C2] border border-[#EBD0AF]'
                          : isDark
                            ? 'bg-white/8'
                            : 'bg-[#FBE6C2]/60'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </AnimatePresence>

                {/* Active underline dot */}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-[#00C9A7]' : 'bg-[#2A7C13]'}`}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}

                <span className="relative z-10">{link.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* ── CTA (Desktop) ── */}
        <motion.button
          onClick={onBookDemo}
          className={`hidden md:flex flex-shrink-0 items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-extrabold tracking-tight shadow-lg ${
            isDark
              ? 'bg-[#F59E0B] text-slate-950 shadow-amber-500/20'
              : 'bg-[#2A7C13] text-[#FFFDF9] shadow-[0_4px_20px_rgba(42,124,19,0.25)]'
          }`}
          whileHover={{
            scale: 1.05,
            boxShadow: isDark
              ? '0 8px 30px rgba(245,158,11,0.4)'
              : '0 8px 30px rgba(42,124,19,0.45)',
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <span>Book a Demo</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.button>

        {/* ── HAMBURGER (Mobile) ── */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isDark ? 'text-emerald-200 hover:bg-white/10' : 'text-[#2A7C13] hover:bg-[#FBE6C2]'
          }`}
          whileTap={{ scale: 0.92 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden overflow-hidden border-b px-4 pt-3 pb-6 ${
              isDark ? 'bg-[#071F11] border-emerald-950/80' : 'bg-[#FAF7EE] border-[#EBD0AF]'
            }`}
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? isDark
                        ? 'bg-white/10 text-white border border-white/15'
                        : 'bg-[#FFF8CF] text-[#2A7C13] border border-[#FBE6C2]'
                      : isDark
                        ? 'text-emerald-100/75 hover:text-white hover:bg-white/8'
                        : 'text-[#3E5044] hover:text-[#113309] hover:bg-[#FBE6C2]/40'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isDark ? 'text-emerald-400/50' : 'text-[#84968B]'}`} />
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="pt-4 border-t mt-3 border-[#EBD0AF]/60"
            >
              <button
                onClick={() => { setMobileOpen(false); onBookDemo(); }}
                className="w-full py-3.5 rounded-xl bg-[#F59E0B] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
