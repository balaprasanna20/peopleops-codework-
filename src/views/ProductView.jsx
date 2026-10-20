import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  Clock, 
  Building2, 
  AlertTriangle, 
  Cable, 
  RefreshCw, 
  Zap, 
  Bot, 
  ShieldCheck, 
  Lock 
} from 'lucide-react';

export default function ProductView({ onBookDemo }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  /* ── 12 Simple Features with Micro-Action Animation Configs & Live Statuses ── */
  const ALL_12_FEATURES = [
    { 
      id: '01', 
      title: 'All-in-One Dashboard', 
      category: 'Overview', 
      desc: 'See team attendance, performance scores, and active project progress in one single screen.',
      icon: LayoutDashboard,
      status: 'Live Cockpit',
      iconAnim: { scale: [1, 1.18, 1], y: [0, -3, 0] },
      animDuration: 0.4
    },
    { 
      id: '02', 
      title: 'Fair & Clear KPI Scoring', 
      category: 'Performance', 
      desc: 'Calculate scores using clear, approved rules. 100% transparent math with zero guesswork.',
      icon: TrendingUp,
      status: '100% Transparent',
      iconAnim: { scale: [1, 1.22, 1], x: [0, 2, 0], y: [0, -2, 0] },
      animDuration: 0.4
    },
    { 
      id: '03', 
      title: 'Employee Profiles', 
      category: 'People', 
      desc: 'View individual work hours, office turnstile check-ins, and performance bands in one click.',
      icon: Users,
      status: 'Directory Live',
      iconAnim: { scale: [1, 1.2, 1] },
      animDuration: 0.35
    },
    { 
      id: '04', 
      title: 'Turnstile & Gate Sync', 
      category: 'Attendance', 
      desc: 'Automatically connects office gate turnstiles with Microsoft Teams to verify true attendance.',
      icon: Clock,
      status: 'Hardware Matched',
      iconAnim: { rotate: [0, 90, 180, 360] },
      animDuration: 0.75
    },
    { 
      id: '05', 
      title: 'Onsite vs Remote View', 
      category: 'Presence', 
      desc: 'Know instantly who is working from the office, working remotely, or on approved leave.',
      icon: Building2,
      status: 'Real-time Radar',
      iconAnim: { scale: [1, 1.18, 1], y: [0, -3, 0] },
      animDuration: 0.4
    },
    { 
      id: '06', 
      title: 'Attention & Alert List', 
      category: 'Alerts', 
      desc: 'Spotlights team members who are overworked, falling behind schedule, or need manager support.',
      icon: AlertTriangle,
      status: 'Triage Active',
      iconAnim: { rotate: [-10, 10, -5, 5, 0], scale: [1, 1.2, 1] },
      animDuration: 0.5
    },
    { 
      id: '07', 
      title: 'Daily Work App Sync', 
      category: 'Integrations', 
      desc: 'Pulls daily work activity automatically from GitHub, Microsoft Teams, Jira, and Planner.',
      icon: Cable,
      status: 'Streaming 24/7',
      iconAnim: { x: [-3, 3, -2, 2, 0], scale: [1, 1.15, 1] },
      animDuration: 0.45
    },
    { 
      id: '08', 
      title: 'Live Connection Monitor', 
      category: 'System Health', 
      desc: 'Monitors all app integrations with automatic retry safeguards so data is never lost.',
      icon: RefreshCw,
      status: '99.9% Fresh',
      iconAnim: { rotate: 360 },
      animDuration: 0.7
    },
    { 
      id: '09', 
      title: 'Instant 1-Click Refresh', 
      category: 'Data Control', 
      desc: 'Refresh all dashboard numbers on demand anytime you want to see the latest live updates.',
      icon: Zap,
      status: 'On-Demand Sync',
      iconAnim: { scale: [1, 1.3, 1] },
      animDuration: 0.35
    },
    { 
      id: '10', 
      title: 'Ask Tara AI Assistant', 
      category: 'AI Assistant', 
      desc: 'Ask questions in plain English like "Who has too many meetings?" and get verified facts.',
      icon: Bot,
      status: 'Tara AI Ready',
      iconAnim: { scale: [1, 1.25, 1], y: [0, -3, 0] },
      animDuration: 0.4
    },
    { 
      id: '11', 
      title: 'Zero Guesswork Rule', 
      category: 'Accuracy', 
      desc: 'Never guesses missing metrics. If data is incomplete, PeopleOps warns you clearly.',
      icon: ShieldCheck,
      status: 'Audit Guard',
      iconAnim: { scale: [1, 1.22, 1] },
      animDuration: 0.35
    },
    { 
      id: '12', 
      title: 'Privacy & Role Security', 
      category: 'Security', 
      desc: 'Strict permissions ensure managers only view their own teams, keeping data confidential.',
      icon: Lock,
      status: 'RBAC Locked',
      iconAnim: { rotate: [-12, 12, -6, 6, 0], scale: [1, 1.15, 1] },
      animDuration: 0.45
    }
  ];

  return (
    <div className="py-20 space-y-12 bg-[#FAF7EE] text-[#26372B] font-sans border-b border-[#EBD0AF]/70">
      
      {/* ── SECTION HEADER ── */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <h2 className="text-3xl sm:text-5xl font-black text-[#113309] tracking-tight leading-tight uppercase">
          CORE FEATURES.
        </h2>

        <p className="text-sm sm:text-base text-[#3E5044] max-w-2xl mx-auto leading-relaxed">
          12 powerful tools.
        </p>
      </motion.section>

      {/* ── 12 CARDS GRID WITH MICRO-ACTION ANIMATIONS & LIVE STATUS GLOW ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ALL_12_FEATURES.map((f, idx) => {
            const Icon = f.icon;
            const isHovered = hoveredCard === f.id;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.015 }}
                onMouseEnter={() => setHoveredCard(f.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-3xl bg-white flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'border-2 border-[#2A7C13] shadow-xl shadow-emerald-950/10'
                    : 'border border-[#EBD0AF] shadow-card hover:border-[#2A7C13]/70'
                }`}
              >
                <div className="space-y-4">
                  {/* Top: Module Number + Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-[#2A7C13]">
                      Module {f.id}
                    </span>
                    <span className="text-[10px] font-bold text-[#5C7063] bg-[#FAF7EE] border border-[#EBD0AF]/70 px-2.5 py-0.5 rounded-full">
                      {f.category}
                    </span>
                  </div>

                  {/* Icon with Micro-Action Animation + Title */}
                  <div className="space-y-2.5">
                    <motion.div
                      animate={isHovered ? f.iconAnim : { rotate: 0, scale: 1, x: 0, y: 0 }}
                      transition={{ duration: f.animDuration, ease: 'easeInOut' }}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isHovered
                          ? 'bg-[#2A7C13] text-white shadow-md shadow-emerald-900/20'
                          : 'bg-[#EAF5E7] text-[#2A7C13] shadow-xs'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    
                    <h3 className="text-base font-extrabold text-[#113309] leading-snug">
                      {f.title}
                    </h3>
                  </div>

                  {/* 1-Sentence Plain-English Description */}
                  <p className="text-xs sm:text-[13px] text-[#3E5044] leading-relaxed font-normal">
                    {f.desc}
                  </p>
                </div>

                {/* ── BOTTOM LIVE STATUS GLOW FOOTER ── */}
                <div className="pt-3.5 mt-4 border-t border-[#FAF7EE] flex items-center justify-between text-[11px] font-bold">
                  <AnimatePresence mode="wait">
                    {isHovered ? (
                      <motion.div
                        key="active-status"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.18 }}
                        className="flex items-center gap-1.5 text-[#2A7C13]"
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A7C13] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2A7C13]" />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider">{f.status}</span>
                      </motion.div>
                    ) : (
                      <span className="text-[#8C9E93] text-[10px] font-mono tracking-wider transition-colors">
                        Capability {f.id}
                      </span>
                    )}
                  </AnimatePresence>

                  <motion.span
                    animate={{ x: isHovered ? 3 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`text-xs font-bold transition-colors ${
                      isHovered ? 'text-[#2A7C13]' : 'text-[#8C9E93]'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#071F11] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Experience all 12 capabilities live in 20 minutes
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              Zero complicated installations. Integrates with Microsoft Teams & GitHub seamlessly.
            </p>
          </div>
          <button
            onClick={onBookDemo}
            className="shrink-0 px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 hover:scale-105"
          >
            <span>Book a Platform Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
