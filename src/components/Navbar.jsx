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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b bg-[#FAF7EE]/95 border-[#EBD0AF] text-black ${
        scrolled ? 'h-16 shadow-[0_4px_25px_rgba(0,0,0,0.08)]' : 'h-20'
      }`}
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
        <nav className="hidden md:flex items-center gap-1.5 mx-auto" onMouseLeave={() => setHovered(null)}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => setHovered(link.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-bold tracking-tight transition-colors duration-150 outline-none ${
                  isActive ? 'text-black font-extrabold' : 'text-black/75 hover:text-black'
                }`}
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
                          ? 'bg-[#EBD0AF] border border-[#DFC39F] shadow-sm'
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
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}

                <span className="relative z-10 text-black">{link.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* ── CTA (Desktop) ── */}
        <motion.button
          onClick={onBookDemo}
          className="hidden md:flex flex-shrink-0 items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black tracking-tight shadow-md bg-[#F59E0B] text-black shadow-amber-500/20 border border-amber-600/30"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 30px rgba(245,158,11,0.35)',
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <span className="text-black font-black">Book a Demo</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </motion.span>
        </motion.button>

        {/* ── HAMBURGER (Mobile) ── */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg transition-colors text-black hover:bg-[#FBE6C2]"
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
              {mobileOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
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
            className="md:hidden overflow-hidden border-b px-4 pt-3 pb-6 bg-[#FAF7EE] border-[#EBD0AF]"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-bold transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#EBD0AF] text-black border border-[#DFC39F]'
                      : 'text-black/80 hover:text-black hover:bg-[#FBE6C2]/60'
                  }`}
                >
                  <span className="text-black">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-black/60" />
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="pt-4 border-t mt-3 border-[#EBD0AF]"
            >
              <button
                onClick={() => { setMobileOpen(false); onBookDemo(); }}
                className="w-full py-3.5 rounded-xl bg-[#F59E0B] text-black font-black text-sm flex items-center justify-center gap-2 shadow-lg border border-amber-600/30"
              >
                <span className="text-black">Book a Demo</span>
                <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
