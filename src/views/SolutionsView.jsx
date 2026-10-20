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
} from 'lucide-react';
import InteractiveCockpit from '../components/InteractiveCockpit';

const DASHBOARD_SCREENS = [
  {
    id: 'overview',
    label: 'Overview Cockpit',
    image: '/assets/overview-dashboard-new.png',
    alt: 'PeopleOps Real Live Overview Dashboard',
    hotspotId: 1
  },
  {
    id: 'kpi',
    label: 'Team-wise KPI',
    image: '/assets/kpi-dashboard-new.png',
    alt: 'PeopleOps Real Live KPI Dashboard',
    hotspotId: 3
  },
  {
    id: 'employees',
    label: 'Employee Audit Profile',
    image: '/assets/employees-dashboard-new.png',
    alt: 'PeopleOps Real Live Employee Audit Profile Modal',
    hotspotId: 2
  }
];

const TARA_PRESETS = [
  {
    q: "Why is Amara Thakur's attendance 33%?",
    a: "Amara Thakur has 10:26 AM avg check-in with 4 direct reports on hybrid roster. Verified via physical turnstiles & GreytHR punch logs."
  },
  {
    q: "Which team leads KPI delivery this month?",
    a: "Project Management is ranked #1 with 81.0 (Excellent). Software Development is at 70.6 (Good) across 86 scored employees."
  },
  {
    q: "Explain the '88% Present but idle' alert.",
    a: "76 out of 144 employees logged into Microsoft Teams but have zero active GitHub commits, Jira sprints or SharePoint updates in the last 4 hours."
  }
];

export default function SolutionsView({ onBookDemo }) {
  // Interactive Cockpit Radar Hotspots State
  const [activeHotspot, setActiveHotspot] = useState(1);
  const [activeScreen, setActiveScreen] = useState('overview');
  const [taraPopupOpen, setTaraPopupOpen] = useState(false);
  const [selectedTaraQ, setSelectedTaraQ] = useState(0);

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

  // Target Roles (Who it is useful for) — 2 Focused Leadership Cards
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
  ];



  return (
    <div className="relative py-12 sm:py-16 space-y-12 sm:space-y-16 bg-[#052411] text-white font-sans border-b border-emerald-950/80 overflow-hidden">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#0E351D]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ── 1. INTERACTIVE COCKPIT WITH LIVE RADAR HOTSPOTS ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            PRACTICAL SOLUTIONS.
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/85 max-w-2xl mx-auto leading-relaxed">
            Real solutions.
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
                  onClick={() => {
                    setActiveHotspot(hotspot.id);
                    if (hotspot.id === 3) setActiveScreen('kpi');
                    else if (hotspot.id === 4 || hotspot.id === 2) setActiveScreen('employees');
                    else setActiveScreen('overview');
                  }}
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
        </motion.div>

        {/* ── COCKPIT TABLET SHOWCASE (SLIGHT LANDSCAPE · EXACT PRODUCTION DASHBOARD PICTURE) ── */}
        <div className="relative max-w-5xl xl:max-w-6xl mx-auto">
          {/* Ambient Studio Lighting Behind Tablet */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-[#00C9A7]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

          {/* Sleek Landscape Tablet Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3.5 bg-gradient-to-b from-white/20 via-white/5 to-black/60 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-md">
            
            {/* Tablet Header / Status Bar with 3 Screen Switcher Tabs */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-3.5 py-2 mb-2 rounded-xl bg-black/50 border border-white/10 text-xs gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-bold text-white tracking-tight hidden md:inline">
                  PeopleOps Intelligence Cockpit v2.4
                </span>
              </div>

              {/* Exact Screen Picture Switcher Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-white/10 rounded-xl border border-white/10 text-xs">
                {DASHBOARD_SCREENS.map(screen => {
                  const isActive = activeScreen === screen.id;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => {
                        setActiveScreen(screen.id);
                        setActiveHotspot(screen.hotspotId);
                      }}
                      className={`px-3 py-1 rounded-lg font-bold transition-all text-xs cursor-pointer ${
                        isActive
                          ? 'bg-[#00C9A7] text-black shadow-md'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {screen.label}
                    </button>
                  );
                })}
              </div>

              <div className="hidden lg:flex items-center gap-2 text-emerald-300 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
                <span>Exact Production UI</span>
              </div>
            </div>

            {/* Exact Dashboard Picture Container with REAL-TIME TOUCHABLE SIDEBAR ZONES */}
            <div className="relative rounded-xl overflow-hidden bg-[#0A1A0F] border border-white/10 shadow-2xl select-none group">
              {(() => {
                const currentScreen = DASHBOARD_SCREENS.find(s => s.id === activeScreen) || DASHBOARD_SCREENS[0];
                return (
                  <motion.img
                    key={currentScreen.id}
                    src={currentScreen.image}
                    alt={currentScreen.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-auto block select-none pointer-events-none"
                  />
                );
              })()}

              {/* ══ REAL-TIME SIDEBAR TOUCH / CLICK ZONES OVER REAL DASHBOARD PICTURE ══ */}
              
              {/* 1. Overview Tab Hotspot Zone */}
              <button
                type="button"
                onClick={() => {
                  setActiveScreen('overview');
                  setActiveHotspot(1);
                }}
                className={`absolute left-[1%] top-[16.5%] w-[13.5%] h-[6.5%] rounded-xl cursor-pointer transition-all ${
                  activeScreen === 'overview'
                    ? 'ring-2 ring-[#00C9A7]/50 bg-[#00A896]/15'
                    : 'hover:bg-white/10 hover:ring-1 hover:ring-white/30'
                }`}
                title="Touch to switch to Overview"
              >
                <span className="sr-only">Touch to switch to Overview Dashboard</span>
              </button>

              {/* 2. KPI Tab Hotspot Zone */}
              <button
                type="button"
                onClick={() => {
                  setActiveScreen('kpi');
                  setActiveHotspot(3);
                }}
                className={`absolute left-[1%] top-[23.8%] w-[13.5%] h-[6.5%] rounded-xl cursor-pointer transition-all ${
                  activeScreen === 'kpi'
                    ? 'ring-2 ring-[#00C9A7]/50 bg-[#00A896]/15'
                    : 'hover:bg-white/10 hover:ring-1 hover:ring-white/30'
                }`}
                title="Touch to switch to Team-wise KPI"
              >
                <span className="sr-only">Touch to switch to Team-wise KPI Dashboard</span>
              </button>

              {/* 3. Employees Tab Hotspot Zone */}
              <button
                type="button"
                onClick={() => {
                  setActiveScreen('employees');
                  setActiveHotspot(2);
                }}
                className={`absolute left-[1%] top-[31.2%] w-[13.5%] h-[6.5%] rounded-xl cursor-pointer transition-all ${
                  activeScreen === 'employees'
                    ? 'ring-2 ring-[#00C9A7]/50 bg-[#00A896]/15'
                    : 'hover:bg-white/10 hover:ring-1 hover:ring-white/30'
                }`}
                title="Touch to switch to Employees & Amara Thakur modal"
              >
                <span className="sr-only">Touch to switch to Employees Directory</span>
              </button>

              {/* 4. Attendance Tab Hotspot Zone */}
              <button
                type="button"
                onClick={() => {
                  setActiveScreen('overview');
                  setActiveHotspot(1);
                }}
                className="absolute left-[1%] top-[38.5%] w-[13.5%] h-[6.5%] rounded-xl cursor-pointer transition-all hover:bg-white/10 hover:ring-1 hover:ring-white/30"
                title="Touch to view Turnstile Attendance sync metrics"
              >
                <span className="sr-only">Touch to view Attendance metrics</span>
              </button>

              {/* 5. Pink Alert 'See who ›' Click Zone on Overview Picture */}
              {activeScreen === 'overview' && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveScreen('employees');
                    setActiveHotspot(2);
                  }}
                  className="absolute left-[16.5%] top-[58.8%] w-[38%] h-[4.5%] rounded-lg cursor-pointer hover:bg-rose-500/15 transition-all hover:ring-1 hover:ring-rose-400/40"
                  title="Touch to inspect employees marked Present but idle"
                >
                  <span className="sr-only">Inspect Present but idle employees</span>
                </button>
              )}

              {/* 6. Close Modal '✕' Click Zone on Employees Picture */}
              {activeScreen === 'employees' && (
                <button
                  type="button"
                  onClick={() => setActiveScreen('overview')}
                  className="absolute right-[23.5%] top-[23%] w-[3%] h-[4%] rounded-full cursor-pointer hover:bg-black/10 transition-all flex items-center justify-center text-transparent hover:text-black"
                  title="Click to close Amara Thakur profile modal"
                >
                  <span className="sr-only">Close Profile Modal</span>
                </button>
              )}

              {/* 7. Bottom-Right "+ Ask Tara" Click Zone */}
              <button
                type="button"
                onClick={() => setTaraPopupOpen(!taraPopupOpen)}
                className="absolute right-[2.2%] bottom-[4.2%] w-[10.5%] h-[6.5%] rounded-full cursor-pointer hover:ring-2 hover:ring-[#00C9A7] transition-all hover:shadow-[0_0_15px_rgba(0,201,167,0.4)]"
                title="Touch to launch Ask Tara AI Assistant"
              >
                <span className="sr-only">Launch Ask Tara AI</span>
              </button>

              {/* Floating Helper Pill indicating real-time touchable sidebar */}
              <div className="absolute left-[1.5%] bottom-[2%] pointer-events-none hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[10px] text-emerald-200/90 font-mono shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-pulse" />
                <span>Real-time Interactive: Touch sidebar tabs directly on dashboard</span>
              </div>

              {/* ── EXPANDABLE TARA AI TEST DRAWER OVER DASHBOARD ── */}
              <AnimatePresence>
                {taraPopupOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-16 right-4 sm:right-6 w-80 sm:w-96 bg-[#071F11]/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/40 z-40 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-white uppercase">Ask Tara AI Assistant</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setTaraPopupOpen(false)}
                        className="text-emerald-300 hover:text-white text-xs font-bold cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] text-emerald-300/80 block uppercase font-bold tracking-wider">
                        Select a question to test live response:
                      </span>
                      <div className="space-y-1">
                        {TARA_PRESETS.map((item, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedTaraQ(idx)}
                            className={`text-xs p-2 rounded-lg border transition-all text-left w-full cursor-pointer ${
                              selectedTaraQ === idx 
                                ? 'bg-[#008080] text-white border-emerald-400 font-bold' 
                                : 'bg-white/5 text-emerald-100 hover:bg-white/10 border-white/10'
                            }`}
                          >
                            {item.q}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/20 text-xs space-y-1">
                      <span className="text-emerald-400 font-bold text-[11px] block">Verified Answer:</span>
                      <p className="text-emerald-100/90 leading-relaxed font-sans text-xs">
                        {TARA_PRESETS[selectedTaraQ].a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </div>

      </section>

      {/* ── 4. WHO IT IS USEFUL FOR (2 LEADERSHIP CARDS WITH FRAMER MOTION) ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            WHO IT IS USEFUL FOR
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200/80">
            Engineered with bespoke views tailored for executive leadership and People Ops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8">
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

      {/* ── 5. CTA BANNER (LIFTED UP) ── */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-2 sm:pt-4">
        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
          Solve workforce blindspots for your leadership team today.
        </h3>
        <button
          onClick={onBookDemo}
          className="px-8 py-3.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-slate-950 font-extrabold text-sm rounded-xl shadow-[0_8px_30px_rgba(245,158,11,0.35)] transition-all inline-flex items-center gap-2 hover:scale-105 cursor-pointer"
        >
          <span>Book a Solution Walkthrough</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
