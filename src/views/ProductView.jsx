import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  TrendingUp, 
  Users, 
  Clock, 
  Users2, 
  FolderKanban, 
  Activity, 
  RefreshCw, 
  Search, 
  Bot, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Lock,
  EyeOff,
  Check,
  Zap,
  Server,
  FileCheck,
  GitBranch,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { 
  GitHubVelocityChart, 
  FocusWorkloadChart,
  BiometricAttendanceChart 
} from '../components/WorkforceCharts';

export default function ProductView({ onBookDemo }) {
  const [activeCategory, setActiveCategory] = useState('performance');

  /* ── Interactive Category 1: Team KPI Switcher ── */
  const [selectedTeam, setSelectedTeam] = useState('all');
  const teamKpiData = {
    all: {
      title: 'Company-Wide KPI Distribution',
      top: '28%', consistent: '52%', growth: '16%', review: '4%',
      avgScore: '86.4', onTrack: '80%'
    },
    engineering: {
      title: 'Engineering & SDLC Teams',
      top: '35%', consistent: '48%', growth: '14%', review: '3%',
      avgScore: '89.2', onTrack: '83%'
    },
    product: {
      title: 'Product & UX Pods',
      top: '31%', consistent: '54%', growth: '12%', review: '3%',
      avgScore: '87.5', onTrack: '85%'
    },
    delivery: {
      title: 'Client Delivery & Consulting',
      top: '24%', consistent: '58%', growth: '15%', review: '3%',
      avgScore: '84.8', onTrack: '82%'
    }
  };

  /* ── Interactive Category 3: Live Sync Simulation ── */
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatusTime, setSyncStatusTime] = useState('Just now');

  const handleManualSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatusTime('Just now');
    }, 1200);
  };

  /* ── Interactive Category 4: Ask Tara Interactive Prompts ── */
  const taraPrompts = [
    {
      q: 'Which projects are at risk of missing sprint completion this week?',
      a: 'Pod 2 (API Gateway) has 4 pending code reviews with deadline in 2 days. 2 team members currently active on GitHub. Management review recommended.',
      scope: 'Strictly bounded to Delivery & GitHub scopes'
    },
    {
      q: "What is today's verified biometric attendance across HQ?",
      a: 'HQ Main Gate recorded 184 turnstile check-ins (97.3% verified against Teams presence). 14 employees marked remote, 3 on approved PTO.',
      scope: 'Sourced from Biometrics & GreyHR'
    },
    {
      q: 'Show employee KPI distribution for Engineering department.',
      a: 'Engineering department: 35% Top Tier (Exceeding), 48% Consistent (On Track), 14% Growth Needed, 3% Review Recommended based on approved weights.',
      scope: 'Role-controlled KPI benchmark scope'
    }
  ];
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);

  /* ── 4 Core Smart Categories Mapping All 12 Features ── */
  const CATEGORIES = [
    {
      id: 'performance',
      label: 'Performance & KPIs',
      icon: TrendingUp,
      count: '3 Modules',
      headline: 'Objective performance measurement without subjective guessing.',
      summary: 'Centralize workforce indicators, measure outputs with approved KPI weighting rules, and monitor project milestones.',
      modules: [
        { id: '01', title: 'Overview Dashboard', desc: 'Centralized workforce summary, Today’s Briefing, and Attention Required flags.' },
        { id: '02', title: 'KPI & Performance Monitoring', desc: 'Outputs classified into approved performance bands with full rule transparency.' },
        { id: '06', title: 'Project & Sprint Monitoring', desc: 'Tasks, completion, hours, members and sprint progress indicators.' }
      ]
    },
    {
      id: 'workforce',
      label: 'Workforce & Attendance',
      icon: Users,
      count: '3 Modules',
      headline: 'Hardware-verified turnstiles and transparent team presence.',
      summary: 'Cross-reference physical turnstile arrivals with Microsoft Teams remote presence to eliminate isolated time-tracking spreadsheets.',
      modules: [
        { id: '04', title: 'Attendance Monitoring', desc: 'Attendance status, work modes (onsite/remote) and optical turnstile check-ins.' },
        { id: '03', title: 'Employee Directory View', desc: 'Employee register with performance bands, turnstile timestamps and status.' },
        { id: '05', title: 'Team Monitoring', desc: 'Departmental presence, meeting loads, and cross-team operational visibility.' }
      ]
    },
    {
      id: 'telemetry',
      label: 'Telemetry & Integrations',
      icon: RefreshCw,
      count: '3 Modules',
      headline: 'Non-destructive integration pipeline across your existing stack.',
      summary: 'Connect Worklogix, GreyHR, Biometrics, Teams, and GitHub. Sync status is shown transparently with zero data corruption.',
      modules: [
        { id: '07', title: 'Work Activity Monitoring', desc: 'Activity from Teams, GitHub, Planner, Calendar and SharePoint.' },
        { id: '08', title: 'Integration Health Monitoring', desc: 'Real-time sync freshness indicators with failure isolation safeguards.' },
        { id: '09', title: 'Search, Refresh & Drill-Down', desc: 'Instant search across teams with manual on-demand data refresh.' }
      ]
    },
    {
      id: 'governance',
      label: 'Ask Tara AI & Security',
      icon: Bot,
      count: '3 Modules',
      headline: 'Conversational assistant, RBAC safeguards & zero guessing.',
      summary: 'Ask natural-language workforce questions within approved role bounds, with explicit warnings whenever data is missing.',
      modules: [
        { id: '10', title: 'Ask Tara Assistant', desc: 'Natural language workforce queries strictly bound by organizational permissions.' },
        { id: '11', title: 'Insufficient Data Handling', desc: 'Explicit data gap warnings—never presents guessed or hallucinated scores.' },
        { id: '12', title: 'Security, Access & Audit Records', desc: 'Least-privilege RBAC controls and immutable audit trails for leadership review.' }
      ]
    }
  ];

  const currentCat = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="py-20 space-y-12 bg-[#FAF7EE] text-[#26372B] font-sans border-b border-[#EBD0AF]/70">
      
      {/* ── 1. HEADER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8CF] border border-[#FBE6C2] text-[#2A7C13] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#2A7C13]" />
          <span>Product Capabilities</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#113309] tracking-tight leading-tight">
          Features built for complete operational clarity.
        </h2>

        <p className="text-sm sm:text-base text-[#3E5044] max-w-2xl mx-auto leading-relaxed">
          12 modular capabilities organized into four unified intelligence layers. Clear, verified indicators without speculative scoring or manual spreadsheet consolidation.
        </p>

        {/* ── 4 SMART SEGMENTED TABS ── */}
        <div className="pt-6 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#EBD0AF] shadow-soft max-w-full">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#113309] text-white shadow-md'
                      : 'text-[#3E5044] hover:text-[#113309] hover:bg-[#FAF7EE]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00C9A7]' : 'text-[#5C7063]'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#FAF7EE] text-[#5C7063] border border-[#EBD0AF]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. DYNAMIC BENTO COCKPIT PER CATEGORY ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            
            {/* Category Overview Strip */}
            <div className="p-6 rounded-2xl bg-[#FBE6C2]/30 border border-[#EBD0AF] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2A7C13] uppercase tracking-wider">
                  Category Focus · {currentCat.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#113309]">
                  {currentCat.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#3E5044] max-w-3xl">
                  {currentCat.summary}
                </p>
              </div>
              <button
                onClick={onBookDemo}
                className="shrink-0 px-5 py-2.5 bg-[#2A7C13] hover:bg-[#20630D] text-white font-bold text-xs rounded-xl shadow-forest flex items-center gap-2 transition-all"
              >
                <span>Book {currentCat.label.split(' ')[0]} Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* ══ BENTO GRID VARIATIONS ══ */}

            {/* ── BENTO 1: PERFORMANCE & KPIS ── */}
            {activeCategory === 'performance' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Hero Bento Card: Interactive KPI Band Switcher (Span 7) */}
                <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-[#EBD0AF] shadow-card space-y-5 flex flex-col justify-between">
                  <div>
                    {/* Header with Team Switcher */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#FAF7EE]">
                      <div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-[#2A7C13]" />
                          <h4 className="text-sm font-extrabold text-[#113309]">
                            {teamKpiData[selectedTeam].title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#5C7063]">Classified into approved performance bands</p>
                      </div>
                      <span className="text-xs font-bold text-[#2A7C13] bg-[#EAF5E7] px-2.5 py-0.5 rounded-full border border-[#D2EBCB]">
                        100% Rule-Transparent
                      </span>
                    </div>

                    {/* Team Filter Pills */}
                    <div className="pt-3 pb-2 flex flex-wrap gap-1.5">
                      {[
                        { id: 'all', label: 'All Teams' },
                        { id: 'engineering', label: 'Engineering' },
                        { id: 'product', label: 'Product & UX' },
                        { id: 'delivery', label: 'Client Delivery' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTeam(t.id)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                            selectedTeam === t.id
                              ? 'bg-[#2A7C13] text-white shadow-sm'
                              : 'bg-[#FAF7EE] text-[#5C7063] hover:text-[#113309] border border-[#EBD0AF]/60'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    {/* Dynamic Bands Display */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                      <div className="p-3.5 rounded-xl bg-[#EAF5E7] border border-[#D2EBCB]">
                        <span className="text-[11px] font-bold text-[#113309]">Top Tier</span>
                        <div className="text-2xl font-black text-[#2A7C13] mt-1">{teamKpiData[selectedTeam].top}</div>
                        <span className="text-[10px] text-[#5C7063]">Exceeding</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#E0F7F3] border border-[#A7F0E3]">
                        <span className="text-[11px] font-bold text-[#113309]">Consistent</span>
                        <div className="text-2xl font-black text-[#00C9A7] mt-1">{teamKpiData[selectedTeam].consistent}</div>
                        <span className="text-[10px] text-[#5C7063]">On Track</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A]">
                        <span className="text-[11px] font-bold text-[#113309]">Growth</span>
                        <div className="text-2xl font-black text-[#F59E0B] mt-1">{teamKpiData[selectedTeam].growth}</div>
                        <span className="text-[10px] text-[#5C7063]">Attention</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FEE2E2] border border-[#FECACA]">
                        <span className="text-[11px] font-bold text-[#113309]">Review</span>
                        <div className="text-2xl font-black text-[#DC2626] mt-1">{teamKpiData[selectedTeam].review}</div>
                        <span className="text-[10px] text-[#5C7063]">Recommended</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#FAF7EE] flex items-center justify-between text-xs text-[#5C7063]">
                    <span>Score Average: <strong className="text-[#113309]">{teamKpiData[selectedTeam].avgScore} pts</strong></span>
                    <span>Team On-Track Rate: <strong className="text-[#2A7C13]">{teamKpiData[selectedTeam].onTrack}</strong></span>
                  </div>
                </div>

                {/* Side Bento Card: Today's Briefing & Attention Flagging (Span 5) */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-[#EBD0AF] shadow-card space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#FAF7EE]">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#2A7C13]" />
                        <h4 className="text-sm font-extrabold text-[#113309]">Today's Briefing</h4>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#2A7C13] animate-ping" />
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF]/60 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#113309]">Meetings & Presence</div>
                          <div className="text-[11px] text-[#5C7063]">Calendar & turnstile sync</div>
                        </div>
                        <span className="text-xs font-black text-[#113309]">14 Remote · 3 Leave</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FEF3C7]/70 border border-[#FDE68A] flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#92400E]">Attention Required</div>
                          <div className="text-[11px] text-[#92400E]/80">Deliverable pace threshold</div>
                        </div>
                        <span className="text-xs font-black px-2 py-0.5 rounded-full bg-[#F59E0B] text-slate-950 font-mono">
                          2 Flagged
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#EAF5E7] border border-[#D2EBCB] flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#2A7C13]">Sprint Milestones</div>
                          <div className="text-[11px] text-[#5C7063]">Delivery cycle compliance</div>
                        </div>
                        <span className="text-xs font-black text-[#2A7C13] font-mono">94.8% SLA</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#5C7063] leading-relaxed border-t border-[#FAF7EE] pt-2">
                    Flags surface items requiring management review—never automated discipline.
                  </p>
                </div>

                {/* Modules Summary Bar (Span 12) */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentCat.modules.map((m) => (
                    <div key={m.id} className="p-4 rounded-2xl bg-white border border-[#EBD0AF] shadow-soft space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#2A7C13] font-mono">Feature {m.id}</span>
                        <h5 className="text-sm font-bold text-[#113309]">{m.title}</h5>
                      </div>
                      <p className="text-xs text-[#3E5044] leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* ── BENTO 2: WORKFORCE & ATTENDANCE ── */}
            {activeCategory === 'workforce' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Hero Bento Card: Biometric Optical Turnstile Simulator (Span 7) */}
                <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-[#EBD0AF] shadow-card space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#FAF7EE]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#2A7C13]" />
                        <h4 className="text-sm font-extrabold text-[#113309]">Physical Turnstile vs Remote Presence</h4>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFF8CF] text-[#2A7C13] border border-[#FBE6C2]">
                        Sync: 94.4% Match
                      </span>
                    </div>

                    {/* Turnstile Visual Bezel */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#EBD0AF] shadow-md group">
                      <img
                        src="/assets/biometric-turnstile.jpg"
                        alt="Biometric Optical Turnstile"
                        className="w-full h-52 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#00C9A7] animate-ping" />
                          <span className="font-bold">Turnstile Controller: GATE-04 (HQ Main)</span>
                        </div>
                        <span className="bg-[#2A7C13] px-2.5 py-0.5 rounded font-mono font-bold">Live Stream</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF]/60">
                        <div className="text-[10px] text-[#5C7063] font-bold">Turnstiles Today</div>
                        <div className="text-base font-black text-[#113309]">184 In</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF]/60">
                        <div className="text-[10px] text-[#5C7063] font-bold">Teams Active</div>
                        <div className="text-base font-black text-[#113309]">186 Online</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#EAF5E7] border border-[#D2EBCB]">
                        <div className="text-[10px] text-[#2A7C13] font-bold">Reconciled</div>
                        <div className="text-base font-black text-[#2A7C13]">181 Matched</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side Bento Card: Live Employee Register Drill-down (Span 5) */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-[#EBD0AF] shadow-card space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#FAF7EE]">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#2A7C13]" />
                        <h4 className="text-sm font-extrabold text-[#113309]">Employee Drill-Down Card</h4>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#5C7063]">Directory Record</span>
                    </div>

                    {/* Employee Profile Preview */}
                    <div className="p-4 rounded-2xl bg-[#FAF7EE] border border-[#EBD0AF] space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#2A7C13] text-[#FFF8CF] font-black flex items-center justify-center text-sm shadow-sm">
                          EV
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#113309]">Eleanor Vance</h5>
                          <p className="text-xs text-[#5C7063]">Senior Engineer · Pod 2 (API Gateway)</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                        <div className="p-2 bg-white rounded-xl border border-[#EBD0AF]/60">
                          <span className="text-[10px] text-[#5C7063] block">Arrival Event</span>
                          <strong className="text-[#113309]">09:12 AM (Turnstile)</strong>
                        </div>
                        <div className="p-2 bg-white rounded-xl border border-[#EBD0AF]/60">
                          <span className="text-[10px] text-[#5C7063] block">Performance Band</span>
                          <strong className="text-[#2A7C13]">Consistent Band</strong>
                        </div>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-[#EBD0AF]/60 flex items-center justify-between text-xs">
                        <span className="text-[#5C7063]">Current Sprints: 14 Active Tasks</span>
                        <span className="text-[#2A7C13] font-bold">0 Flags</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EAF5E7] border border-[#D2EBCB] text-xs text-[#2A7C13] font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Role-controlled visibility for fair leadership review.</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#5C7063] border-t border-[#FAF7EE] pt-2">
                    Zero invasive desktop keystroke tracking or camera monitoring.
                  </p>
                </div>

                {/* Modules Summary Bar (Span 12) */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentCat.modules.map((m) => (
                    <div key={m.id} className="p-4 rounded-2xl bg-white border border-[#EBD0AF] shadow-soft space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#2A7C13] font-mono">Feature {m.id}</span>
                        <h5 className="text-sm font-bold text-[#113309]">{m.title}</h5>
                      </div>
                      <p className="text-xs text-[#3E5044] leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* ── BENTO 3: TELEMETRY & INTEGRATIONS ── */}
            {activeCategory === 'telemetry' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Hero Bento Card: GitHub & SDLC Velocity (Span 7) */}
                <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-[#EBD0AF] shadow-card space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#FAF7EE]">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#2A7C13]" />
                        <h4 className="text-sm font-extrabold text-[#113309]">GitHub PR Turnaround Speed</h4>
                      </div>
                      <span className="text-xs font-bold text-[#2A7C13] bg-[#EAF5E7] px-2.5 py-0.5 rounded-full border border-[#D2EBCB]">
                        -69% PR Cycle Time
                      </span>
                    </div>

                    <div className="space-y-3 pt-3">
                      {[
                        { label: 'Week 1 Baseline', prs: 38, speed: '12.4 hrs', pct: '35%' },
                        { label: 'Week 2 Pipeline', prs: 44, speed: '9.8 hrs', pct: '50%' },
                        { label: 'Week 3 Sprint', prs: 51, speed: '7.2 hrs', pct: '65%' },
                        { label: 'Week 4 Current', prs: 72, speed: '3.8 hrs', pct: '92%' }
                      ].map((w) => (
                        <div key={w.label} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#113309]">{w.label}</span>
                            <div className="flex items-center gap-2 font-mono">
                              <span className="text-[#5C7063]">{w.prs} PRs</span>
                              <strong className="text-[#2A7C13]">{w.speed}</strong>
                            </div>
                          </div>
                          <div className="h-2 rounded-full bg-[#FAF7EE] overflow-hidden border border-[#EBD0AF]/50">
                            <div className="h-full bg-gradient-to-r from-[#2A7C13] to-[#00C9A7] rounded-full" style={{ width: w.pct }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FFF8CF]/60 border border-[#FBE6C2] flex items-center justify-between text-xs">
                    <span className="text-[#5C7063]">Cross-Platform Identity Matching</span>
                    <strong className="text-[#113309]">100% Automated</strong>
                  </div>
                </div>

                {/* Side Bento Card: Live Connector Health with Manual Refresh Button (Span 5) */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-[#EBD0AF] shadow-card space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#FAF7EE]">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-[#2A7C13]" />
                        <h4 className="text-sm font-extrabold text-[#113309]">Connected Data Sources</h4>
                      </div>
                      <span className="text-[11px] font-mono text-[#5C7063]">{syncStatusTime}</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {[
                        { name: 'Microsoft Teams', type: 'Presence & Calls', status: 'Healthy', time: '2m ago' },
                        { name: 'GitHub Enterprise', type: 'SDLC & Commits', status: 'Healthy', time: '4m ago' },
                        { name: 'Biometric Turnstiles', type: 'GATE-04 Optical Gate', status: 'Healthy', time: '1m ago' },
                        { name: 'Worklogix / GreyHR', type: 'Employee Register', status: 'Healthy', time: '12m ago' },
                        { name: 'SharePoint & Planner', type: 'Tasks & Calendars', status: 'Healthy', time: '15m ago' }
                      ].map((conn) => (
                        <div key={conn.name} className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF]/60 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#2A7C13]" />
                            <div>
                              <strong className="text-[#113309] block">{conn.name}</strong>
                              <span className="text-[10px] text-[#5C7063]">{conn.type}</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#2A7C13] bg-[#EAF5E7] px-2 py-0.5 rounded-full border border-[#D2EBCB]">
                            {conn.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Refresh Button */}
                    <div className="pt-2">
                      <button
                        onClick={handleManualSync}
                        disabled={isSyncing}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7EE] hover:bg-[#FBE6C2] text-[#113309] border border-[#EBD0AF] font-bold text-xs flex items-center justify-center gap-2 transition-all"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 text-[#2A7C13] ${isSyncing ? 'animate-spin' : ''}`} />
                        <span>{isSyncing ? 'Reconciling Live Connectors...' : 'Trigger Manual Sync Check'}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#5C7063] border-t border-[#FAF7EE] pt-2">
                    Non-destructive sync guarantee: connector errors never corrupt existing records.
                  </p>
                </div>

                {/* Modules Summary Bar (Span 12) */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentCat.modules.map((m) => (
                    <div key={m.id} className="p-4 rounded-2xl bg-white border border-[#EBD0AF] shadow-soft space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#2A7C13] font-mono">Feature {m.id}</span>
                        <h5 className="text-sm font-bold text-[#113309]">{m.title}</h5>
                      </div>
                      <p className="text-xs text-[#3E5044] leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* ── BENTO 4: ASK TARA AI & SECURITY ── */}
            {activeCategory === 'governance' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Hero Bento Card: Interactive Ask Tara AI Playground (Span 7) */}
                <div className="lg:col-span-7 p-6 rounded-3xl bg-[#071F11] text-white shadow-card space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-emerald-950">
                      <div className="flex items-center gap-2">
                        <Bot className="w-5 h-5 text-[#00C9A7]" />
                        <h4 className="text-sm font-extrabold text-white">Ask Tara · Natural Language Assistant</h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-900/60 text-emerald-200 border border-emerald-700">
                        RBAC Bound
                      </span>
                    </div>

                    {/* Interactive Prompt Pills */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] text-emerald-300/80 font-semibold block">
                        Select a sample leadership query:
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {taraPrompts.map((p, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedPromptIdx(idx)}
                            className={`text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                              selectedPromptIdx === idx
                                ? 'bg-emerald-900/80 text-white border border-[#00C9A7] font-semibold'
                                : 'bg-white/5 text-emerald-100 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            <span>“{p.q}”</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#00C9A7] shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Tara Response Bubble */}
                    <motion.div
                      key={selectedPromptIdx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-xs text-white space-y-2"
                    >
                      <div className="flex items-center gap-2 text-[#00C9A7] font-bold">
                        <Bot className="w-4 h-4" />
                        <span>Tara Response · {taraPrompts[selectedPromptIdx].scope}</span>
                      </div>
                      <p className="leading-relaxed text-emerald-100 text-xs">
                        {taraPrompts[selectedPromptIdx].a}
                      </p>
                    </motion.div>
                  </div>

                  <p className="text-[11px] text-emerald-300/70 border-t border-emerald-950 pt-2">
                    Answers are strictly bound by organizational permissions. No unapproved spreadsheet leaks.
                  </p>
                </div>

                {/* Side Bento Card: Security, RBAC & Insufficient Data Handling (Span 5) */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-[#EBD0AF] shadow-card space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#FAF7EE]">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#2A7C13]" />
                        <h4 className="text-sm font-extrabold text-[#113309]">Audit & Scope Governance</h4>
                      </div>
                      <span className="text-[10px] font-mono text-[#2A7C13] font-bold bg-[#EAF5E7] px-2 py-0.5 rounded-full">
                        ISO/SOC Aligned
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF]/60 space-y-1">
                        <span className="text-xs font-bold text-[#113309] block">Role-Based Access Control (RBAC)</span>
                        <p className="text-[11px] text-[#5C7063]">
                          Least-privilege rules ensure managers only view approved teams and aggregate scores.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FEF3C7]/60 border border-[#FDE68A] space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#92400E]">
                          <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>Insufficient Data Handling</span>
                        </div>
                        <p className="text-[11px] text-[#92400E]/90">
                          If data is missing or incomplete, PeopleOps says so explicitly. Never presents guessed or hallucinated numbers.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#EAF5E7] border border-[#D2EBCB] space-y-1">
                        <span className="text-xs font-bold text-[#2A7C13] block">Immutable Audit Trails</span>
                        <p className="text-[11px] text-[#2A7C13]/80">
                          All sensitive queries, admin modifications, and permission shifts are logged tamper-proof.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#5C7063] border-t border-[#FAF7EE] pt-2">
                    Decision-support only: A human always makes final employment decisions.
                  </p>
                </div>

                {/* Modules Summary Bar (Span 12) */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentCat.modules.map((m) => (
                    <div key={m.id} className="p-4 rounded-2xl bg-white border border-[#EBD0AF] shadow-soft space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#2A7C13] font-mono">Feature {m.id}</span>
                        <h5 className="text-sm font-bold text-[#113309]">{m.title}</h5>
                      </div>
                      <p className="text-xs text-[#3E5044] leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </section>

    </div>
  );
}
