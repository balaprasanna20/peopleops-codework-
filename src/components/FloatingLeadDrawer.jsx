import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Minus, Calendar, ShieldCheck, Clock, ChevronRight } from 'lucide-react';

export default function FloatingLeadDrawer({ onBookDemo }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Trigger when user scrolls past 30% of the page or after 25 seconds
  useEffect(() => {
    const dismissed = sessionStorage.getItem('lead_drawer_dismissed');
    if (dismissed === 'true') {
      setIsMinimized(true);
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const scrolledPercent = (window.scrollY / scrollTotal) * 100;
        if (scrolledPercent >= 28) {
          setIsVisible(true);
        }
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 25000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsMinimized(true);
    sessionStorage.setItem('lead_drawer_dismissed', 'true');
  };

  const handleReopen = () => {
    setIsMinimized(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);

    setTimeout(() => {
      if (onBookDemo) {
        onBookDemo();
      }
    }, 2200);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-auto font-sans">
      <AnimatePresence mode="wait">
        
        {/* ── 1. MINIMIZED SIDE TAB (Docked to the Right Edge) ── */}
        {isMinimized ? (
          <motion.button
            key="minimized-tab"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleReopen}
            className="flex items-center gap-2 py-3 px-3.5 rounded-l-2xl bg-white text-[#113309] border-l-2 border-t-2 border-b-2 border-[#EBD0AF] shadow-[-6px_10px_25px_rgba(17,51,9,0.12)] group cursor-pointer transition-all hover:border-[#2A7C13] hover:shadow-[-8px_14px_30px_rgba(17,51,9,0.18)]"
            title="Book a 20-Min Walkthrough"
          >
            <Calendar className="w-4 h-4 text-[#2A7C13] shrink-0" />
            <span className="text-xs font-bold text-[#113309] group-hover:text-[#2A7C13] transition-colors [writing-mode:vertical-rl] rotate-180 py-1 tracking-wider uppercase text-[10px]">
              20-Min Demo
            </span>
          </motion.button>
        ) : (

          /* ── 2. EXPANDED SIDE SLIDE-IN CARD (Sliding in directly from the Right Edge) ── */
          <motion.div
            key="expanded-side-drawer"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className="mr-3 sm:mr-5 w-[92vw] sm:w-[360px] rounded-2xl bg-white border-2 border-[#EBD0AF] text-[#113309] shadow-[-10px_20px_50px_rgba(17,51,9,0.16)] p-5 overflow-hidden"
          >
            {/* Top Bar: Clean Tag + Controls */}
            <div className="flex items-center justify-between pb-3 border-b border-[#FAF7EE]">
              <span className="text-[11px] font-bold text-[#2A7C13] bg-[#EAF5E7] px-2.5 py-0.5 rounded-md">
                Fast 20-Min Walkthrough
              </span>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Minimize to side"
                  className="p-1 rounded-md text-[#8C9E93] hover:text-[#113309] hover:bg-[#FAF7EE] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="p-1 rounded-md text-[#8C9E93] hover:text-[#113309] hover:bg-[#FAF7EE] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            {!submitted ? (
              <div className="pt-3.5 space-y-3.5">
                <div className="space-y-1">
                  <h4 className="text-base font-black text-[#113309] leading-snug tracking-tight">
                    Tired of tracking attendance manually?
                  </h4>
                  <p className="text-xs text-[#3E5044] leading-relaxed">
                    See how PeopleOps syncs physical turnstiles with Microsoft Teams in 20 minutes — zero keystroke tracking.
                  </p>
                </div>

                {/* Single-field Form */}
                <form onSubmit={handleSubmit} className="space-y-2.5 pt-0.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter work email (e.g. name@company.com)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF] text-[#113309] placeholder-[#8C9E93] text-xs focus:outline-none focus:border-[#2A7C13] focus:bg-white focus:ring-2 focus:ring-[#2A7C13]/15 transition-all"
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Get a Free 20-Min Walkthrough</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </form>

                {/* Trust Footer */}
                <div className="flex items-center justify-between text-[11px] text-[#5C7063] pt-1 border-t border-[#FAF7EE]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2A7C13]" />
                    Zero Spyware
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#2A7C13]" />
                    No Sales Pressure
                  </span>
                </div>
              </div>
            ) : (
              /* Success Confirmation */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-5 text-center space-y-2.5"
              >
                <div className="w-11 h-11 rounded-full bg-[#EAF5E7] text-[#2A7C13] border border-[#2A7C13]/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-black text-[#113309]">Walkthrough Slot Reserved!</h5>
                  <p className="text-xs text-[#3E5044] leading-relaxed max-w-[260px] mx-auto">
                    Reserved for <span className="text-[#113309] font-bold">{email}</span>. Opening interactive calendar...
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
