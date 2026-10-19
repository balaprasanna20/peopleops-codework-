import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  HeartHandshake, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  GitPullRequest,
  CheckSquare,
  Fingerprint,
  MessageSquare,
  Activity,
  Layers,
  Cpu,
  Lock,
  Server,
  Users,
  Clock,
  Zap,
  Crown,
  XCircle,
  AlertOctagon,
  Sliders,
  ShieldAlert
} from 'lucide-react';

export default function SolutionsView({ onBookDemo }) {
  // Interactive Cockpit Radar Hotspots State
  const [activeHotspot, setActiveHotspot] = useState(1);

  const HOTSPOTS = [
    {
      id: 1,
      name: 'Turnstiles & Teams Presence Sync',
      tag: 'Hardware-to-Cloud Fusion',
      shortLabel: '1. Hardware Turnstiles',
      callout: 'How ghost check-ins are eliminated without spyware',
      x: '68%',
      y: '45%',
      icon: Clock,
      problem: 'Turnstiles isolated on local on-prem servers. Zero link to Teams or Slack, creating 34% ghost attendance and heated disputes.',
      solution: 'Automated correlation of physical turnstile punches with Microsoft Teams presence and active work hours without invasive spyware.',
      metric: '94.4% Automated Match Rate · Zero Keystroke Tracking',
      accentColor: '#00C9A7'
    },
    {
      id: 2,
      name: 'Proactive Burnout & Fatigue Guard',
      tag: 'Workforce Wellness',
      shortLabel: '2. Burnout Guard',
      callout: 'How Tara AI catches silent burnout days before resignation',
      x: '32%',
      y: '67%',
      icon: Activity,
      problem: 'Managers blind to quiet employee exhaustion. 70-hour crunch weeks go unseen until top engineers hand in sudden resignation letters.',
      solution: 'Continuous telemetry monitors sprint meeting overload, irregular hours, and idle fatigue to flag burnout risk days before resignations.',
      metric: '7-Day Early Attrition Warning · Proactive Triage',
      accentColor: '#F59E0B'
    },
    {
      id: 3,
      name: '100% Explainable KPI Math',
      tag: 'Objective Fairness',
      shortLabel: '3. Explainable Math',
      callout: 'How disputes are killed with 100% transparent math formulas',
      x: '31%',
      y: '43%',
      icon: ShieldCheck,
      problem: 'Subjective appraisals and promotion disputes. "Who speaks loudest in meetings wins" with zero transparent audit trail.',
      solution: 'Standardized mathematical weights, peer percentiles, and click-to-verify evidence trails for every single KPI score on the dashboard.',
      metric: 'Dispute-Free 360° Appraisals · 100% Mathematical Proof',
      accentColor: '#4ADE80'
    },
    {
      id: 4,
      name: 'Tara AI Instant Intelligence',
      tag: 'AI Decision Copilot',
      shortLabel: '4. Ask Tara',
      callout: 'How leadership gets sub-second answers without waiting for spreadsheets',
      x: '93%',
      y: '91%',
      icon: Sparkles,
      problem: 'Hours wasted digging through scattered tools, HRMS exports, and sprint trackers to answer simple executive questions.',
      solution: 'Ask Tara in plain English: "Who is overloaded this sprint?" Instant natural language triage and explainable decision support.',
      metric: 'Sub-Second Answers · Strict Human-in-the-Loop',
      accentColor: '#C084FC'
    }
  ];

  // Problems Solved Table Data
  const problemSolutions = [
    {
      problem: 'Workforce data is spread across many tools',
      solution: 'One centralized dashboard',
      tag: 'Centralization'
    },
    {
      problem: 'Managers can’t tell who needs attention',
      solution: 'The Attention Required list',
      tag: 'Triage'
    },
    {
      problem: 'KPIs are read differently by different people',
      solution: 'Approved definitions, weights and bands',
      tag: 'Fairness'
    },
    {
      problem: 'Hard to know who is in office, remote or absent',
      solution: 'Attendance, work mode and location views',
      tag: 'Presence'
    },
    {
      problem: 'No clear view of project progress and effort',
      solution: 'Project tasks, hours, members and completion',
      tag: 'Delivery'
    },
    {
      problem: 'Not sure if the data is current',
      solution: 'Sync status and freshness on every source',
      tag: 'Integrity'
    },
    {
      problem: 'Worry about misusing sensitive employee data',
      solution: 'Role-based access, audit trail and privacy controls',
      tag: 'Security'
    },
    {
      problem: 'Over-relying on automated scores',
      solution: 'Insights are for human review, not automatic decisions',
      tag: 'Human Review'
    },
  ];

  // Target Roles (Who it is useful for) — 6 Balanced Clean Gold Cards
  const targetRoles = [
    {
      role: 'C-Suite Executives',
      tag: 'CEO · COO · CTO · Founders',
      scope: 'Strategic workforce telemetry, overall company productivity, ROI analytics, and executive attention items.',
      icon: Crown,
    },
    {
      role: 'HR & People Ops Leaders',
      tag: 'Head of HR · People Ops',
      scope: 'Attendance ratios, workforce well-being, approved KPI bands, and attrition risk monitoring.',
      icon: HeartHandshake,
    },
    {
      role: 'Team Managers & Eng Leads',
      tag: 'Engineering Leads · Pods',
      scope: 'Team-level KPIs, daily presence, burn-out guards, and sprint throughput.',
      icon: Users,
    },
    {
      role: 'Project & Delivery Managers',
      tag: 'Scrum Masters · Delivery Heads',
      scope: 'Project health, billable hours, milestone delivery, and GitHub/Planner tracking.',
      icon: Briefcase,
    },
    {
      role: 'IT & Systems Administrators',
      tag: 'IT Heads · Systems Admins',
      scope: 'API integration health, biometrics sync uptime, identity matching, and error alerts.',
      icon: Server,
    },
    {
      role: 'Compliance & Security Officers',
      tag: 'CISO · Compliance Officers',
      scope: 'Role-based access control (RBAC), immutable audit trails, and privacy protection.',
      icon: Lock,
    },
  ];

  // Suggested Industries
  const industries = [
    'IT and Software Services',
    'Technology Consulting Firms',
    'Distributed & Hybrid Engineering Teams',
    'Enterprise Professional Services'
  ];

  return (
    <div className="relative py-24 space-y-24 bg-[#052411] text-white font-sans border-b border-emerald-950/80 overflow-hidden">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#0E351D]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ── 1. INTERACTIVE COCKPIT WITH LIVE RADAR HOTSPOTS ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(0,201,167,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C9A7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C9A7]"></span>
            </span>
            <span>Interactive Live Cockpit · Real-Time Radar Hotspots</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            The problems we solve. Built for modern teams.
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/85 max-w-2xl mx-auto leading-relaxed">
            Click any pulsing radar hotspot on the live PeopleOps cockpit below to explore how physical turnstiles, burnout signals, and transparent KPI math work in real-time.
          </p>

          {/* Quick Selector Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {HOTSPOTS.map((hotspot) => {
              const Icon = hotspot.icon;
              const isActive = activeHotspot === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveHotspot(hotspot.id)}
                  className={`group flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-emerald-950/90 border-[#00C9A7] text-white shadow-[0_0_20px_rgba(0,201,167,0.35)] scale-105'
                      : 'bg-white/5 border-white/10 text-emerald-100/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span 
                    className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                    style={{ backgroundColor: hotspot.accentColor }}
                  />
                  <Icon className="w-3.5 h-3.5" style={{ color: isActive ? hotspot.accentColor : 'currentColor' }} />
                  <span>{hotspot.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── COCKPIT TABLET SHOWCASE WITH RADAR PINS ── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Ambient Studio Lighting Behind Tablet */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-[#00C9A7]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

          {/* Sleek Tablet Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3.5 bg-gradient-to-b from-white/20 via-white/5 to-black/60 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-md">
            
            {/* Tablet Header / Status Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-black/40 border border-white/10 text-[11px] text-emerald-200/70 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-semibold text-white/90 hidden sm:inline">PeopleOps Intelligence Cockpit v2.4</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-pulse" />
                <span className="text-[10px] tracking-wide uppercase font-semibold">Live Operational Telemetry</span>
              </div>
            </div>

            {/* Dashboard Container with Pins */}
            <div className="relative rounded-xl overflow-hidden bg-[#0A1A0F] border border-white/10 shadow-2xl">
              
              {/* Actual Dashboard Screenshot */}
              <img
                src="/assets/overview-dashboard-new.png"
                alt="PeopleOps Live Intelligence Dashboard Cockpit"
                className="w-full h-auto block select-none"
              />

              {/* 4 Glowing Pulsing Radar Pins */}
              {HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot === hotspot.id;
                const Icon = hotspot.icon;
                return (
                  <div
                    key={hotspot.id}
                    className="absolute z-20"
                    style={{ left: hotspot.x, top: hotspot.y, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Interactive Button */}
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(hotspot.id)}
                      className="group relative flex items-center justify-center cursor-pointer focus:outline-none"
                      aria-label={`Inspect ${hotspot.name}`}
                    >
                      {/* Radar concentric pulsing waves */}
                      <span
                        className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-ping pointer-events-none opacity-40"
                        style={{ backgroundColor: hotspot.accentColor }}
                      />
                      <span
                        className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full pointer-events-none opacity-30 animate-pulse"
                        style={{ backgroundColor: hotspot.accentColor }}
                      />

                      {/* Radar Pin Circle */}
                      <span
                        className={`relative w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 border-2 shadow-2xl ${
                          isActive
                            ? 'scale-125 ring-4 ring-white/30 text-black'
                            : 'scale-100 hover:scale-115 text-white bg-black/80'
                        }`}
                        style={{
                          backgroundColor: isActive ? hotspot.accentColor : 'rgba(10, 26, 15, 0.85)',
                          borderColor: hotspot.accentColor,
                          boxShadow: isActive ? `0 0 25px ${hotspot.accentColor}` : '0 4px 15px rgba(0,0,0,0.5)'
                        }}
                      >
                        <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-black' : 'text-white'}`} />
                      </span>

                      {/* Floating Mini Tag on Dashboard for Quick Recognition */}
                      <div
                        className={`absolute left-1/2 -bottom-7 sm:-bottom-8 -translate-x-1/2 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold tracking-tight border backdrop-blur-md transition-all duration-200 hidden sm:flex items-center gap-1 shadow-lg ${
                          isActive
                            ? 'bg-black/90 text-white border-white/30 opacity-100 translate-y-0 scale-100'
                            : 'bg-black/75 text-emerald-100/80 border-white/10 opacity-80 group-hover:opacity-100'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: hotspot.accentColor }} />
                        <span>{hotspot.shortLabel}</span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── DYNAMIC ACTIVE HOTSPOT CALLOUT CARD (SYNCED TO PIN) ── */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {(() => {
              const current = HOTSPOTS.find(h => h.id === activeHotspot) || HOTSPOTS[0];
              const Icon = current.icon;
              return (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl p-5 sm:p-7 bg-[#0A2613]/90 border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md space-y-5"
                >
                  {/* Top Bar with Callout Quote */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span 
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-black"
                          style={{ backgroundColor: current.accentColor }}
                        >
                          Pin 0{current.id} · {current.tag}
                        </span>
                        <span className="text-xs text-emerald-200/60 font-mono hidden sm:inline">
                          Hotspot: {current.shortLabel}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
                        <Icon className="w-5 h-5 shrink-0" style={{ color: current.accentColor }} />
                        <span>{current.callout}</span>
                      </h3>
                    </div>

                    {/* Quick Next / Switch button */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveHotspot(prev => (prev % HOTSPOTS.length) + 1)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-emerald-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>Next Hotspot</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* 2-Column Comparison: Without PeopleOps vs Live On Dashboard */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* The Pain Point Eliminated */}
                    <div className="rounded-xl p-4 bg-rose-950/30 border border-rose-500/20 space-y-2">
                      <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>The Pain Point Eliminated</span>
                      </div>
                      <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed">
                        {current.problem}
                      </p>
                    </div>

                    {/* How PeopleOps Solves It */}
                    <div className="rounded-xl p-4 bg-emerald-950/40 border border-[#00C9A7]/30 space-y-2">
                      <div className="flex items-center gap-2 text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-[#00C9A7] shrink-0" />
                        <span>How PeopleOps Solves It Live</span>
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                        {current.solution}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Metric & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs border-t border-white/10">
                    <div className="flex items-center gap-2 text-emerald-200 font-medium">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong>Verified Result:</strong> {current.metric}</span>
                    </div>

                    <button
                      type="button"
                      onClick={onBookDemo}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#00C9A7] hover:bg-[#00B594] text-black font-bold text-xs transition-all shadow-md cursor-pointer"
                    >
                      <span>See This Live On Your Data</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* ── 4. WHO IT IS USEFUL FOR (6 BEIGE CARDS WITH FRAMER MOTION) ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider font-extrabold text-[#2A7C13] bg-[#FAF7EE] border border-[#EBD0AF] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2A7C13]" />
            <span>Target Stakeholders · 6 Core Roles</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Who it is useful for
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200/80">
            Engineered with bespoke views tailored for every level of organizational leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetRoles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)' 
                }}
                whileTap={{ scale: 0.98 }}
                className="p-6 rounded-2xl bg-[#FAF7EE] border border-[#EBD0AF] shadow-xl cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    {/* Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-[#EAF5E7] border border-[#CFE8CA] text-[#2A7C13] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Tag Pill */}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FBE6C2] text-[#2A7C13] border border-[#EBD0AF] font-mono">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black tracking-tight text-[#113309]">
                      {item.role}
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-[#3E5044] font-medium leading-relaxed pt-3.5 mt-4 border-t border-[#EBD0AF]/70">
                  {item.scope}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 5. SUGGESTED INDUSTRIES ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B2C19] border border-emerald-700/60 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-wider">Suggested Industries</span>
            <h4 className="text-xl font-black text-white">Ideal for Modern Distributed Teams</h4>
            <p className="text-xs text-emerald-200/70">
              Tailored for 50–500 employee organizations managing hybrid workforces.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {industries.map((ind) => (
              <span key={ind} className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white hover:bg-white/15 transition-colors">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ── */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-black text-white">
          Solve workforce blindspots for your leadership team today.
        </h3>
        <button
          onClick={onBookDemo}
          className="px-8 py-3.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-slate-950 font-extrabold text-sm rounded-xl shadow-[0_8px_30px_rgba(245,158,11,0.35)] transition-all inline-flex items-center gap-2 hover:scale-105"
        >
          <span>Book a Solution Walkthrough</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
