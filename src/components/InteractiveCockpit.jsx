import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, 
  Activity, 
  Users, 
  Calendar, 
  Search, 
  Sparkles, 
  Check, 
  ChevronRight, 
  X, 
  RotateCw,
  AlertTriangle,
  MoreVertical,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function InteractiveCockpit({ activeHotspot, onSelectHotspot }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'kpi' | 'employees' | 'attendance'
  const [showInterns, setShowInterns] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [taraOpen, setTaraOpen] = useState(false);
  const [selectedTaraQ, setSelectedTaraQ] = useState(0);
  const [modalTab, setModalTab] = useState('summary');

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

  return (
    <div className="w-full bg-[#EEF2F6] text-[#0B132B] rounded-2xl overflow-hidden font-sans border border-[#CBD5E1] shadow-2xl flex flex-col select-none text-left relative">
      
      {/* ── COCKPIT TOP APPLICATION FRAME ── */}
      <div className="flex flex-col md:flex-row min-h-[580px] sm:min-h-[640px]">
        
        {/* ══════════════════════════════════════════
            1. EXACT DEEP NAVY SIDEBAR (#0B132B)
           ══════════════════════════════════════════ */}
        <div className="w-full md:w-56 bg-[#0B1728] text-white p-3.5 sm:p-4 flex flex-row md:flex-col justify-between shrink-0 border-r border-[#1E293B]">
          <div className="space-y-6 w-full">
            
            {/* Real PeopleOps Logo with Person in P */}
            <div className="hidden md:flex items-center gap-2.5 px-2 pt-1">
              <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setActiveTab('overview')}>
                <div className="w-7 h-7 rounded-lg bg-[#008080] flex items-center justify-center font-black text-white text-base shadow-sm">
                  <span className="relative font-bold text-lg">P</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold tracking-tight text-[#00A896]">people</span>
                  <span className="text-xl font-bold tracking-tight text-white">Ops</span>
                </div>
              </div>
            </div>

            {/* Exact 4 Navigation Tabs */}
            <nav className="flex flex-row md:flex-col gap-1.5 w-full justify-between md:justify-start">
              {[
                { id: 'overview', label: 'Overview', icon: LayoutGrid },
                { id: 'kpi', label: 'KPI', icon: Activity },
                { id: 'employees', label: 'Employees', icon: Users },
                { id: 'attendance', label: 'Attendance', icon: Calendar },
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (tab.id === 'employees') {
                        // Keep modal control accessible
                      }
                    }}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#005E54] text-white shadow-md shadow-black/20 font-bold' 
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Real Demo User Card at Bottom of Sidebar */}
          <div className="hidden md:flex items-center justify-between p-2.5 rounded-xl bg-[#0F2238] border border-[#1E3A5F] text-xs mt-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#00A896] text-[#0B1728] font-black text-xs flex items-center justify-center font-mono shadow-xs">
                DU
              </div>
              <div className="text-left">
                <span className="font-bold text-white block text-xs leading-tight">Demo User</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#7C3AED] text-white">Admin</span>
                  <span className="text-[9px] text-slate-400">Company-wide</span>
                </div>
              </div>
            </div>
            <MoreVertical className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-white" />
          </div>
        </div>


        {/* ══════════════════════════════════════════
            2. MAIN DASHBOARD CONTENT AREA
           ══════════════════════════════════════════ */}
        <div className="flex-1 p-4 sm:p-6 bg-[#F4F6F9] flex flex-col justify-between overflow-y-auto max-h-[640px]">
          
          <div className="space-y-4">

            {/* ── SCREEN 1: OVERVIEW SCREEN ── */}
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Header Greeting & Controls */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0B132B] flex items-center gap-2">
                      <span>Good morning</span>
                      <span className="text-amber-500">👋</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      "Many hands make light work." — English proverb
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
                    {/* Search Input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Search a person, team or project..."
                        className="pl-8 pr-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs w-48 sm:w-56 focus:outline-none focus:border-[#00A896]"
                      />
                    </div>

                    {/* Show Interns Toggle */}
                    <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white rounded-lg border border-slate-200">
                      <span className="text-[11px] font-bold text-slate-600">Show interns</span>
                      <button 
                        type="button"
                        onClick={() => setShowInterns(!showInterns)}
                        className={`w-7 h-4 rounded-full transition-colors p-0.5 flex items-center ${showInterns ? 'bg-[#008080] justify-end' : 'bg-slate-300 justify-start'}`}
                      >
                        <span className="w-3 h-3 rounded-full bg-white shadow-xs" />
                      </button>
                    </div>

                    {/* Month Picker */}
                    <span className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <span>October, 2026</span>
                      <Calendar className="w-3 h-3 text-slate-400" />
                    </span>

                    {/* Load Month Button */}
                    <button type="button" className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer">
                      Load month →
                    </button>

                    <button type="button" className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-black cursor-pointer">
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Top Section: Live Meeting Banner + 2 Right Status Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
                  
                  {/* Left: Live Roadmap Review Banner (Dark Emerald #0E4D34) */}
                  <div className="lg:col-span-8 p-4 rounded-2xl bg-[#0E4D34] text-white flex flex-col justify-between shadow-xs">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300">LIVE NOW</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Product roadmap review <span className="text-emerald-200/80 font-normal text-sm">by Elina Sethi</span>
                      </h4>
                    </div>

                    <div className="space-y-1.5 pt-4">
                      {/* White Progress Bar */}
                      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-[72%] h-full bg-white rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-emerald-100 font-medium">
                        <span>Ends 12:00 pm</span>
                        <span className="cursor-pointer hover:underline">3 min left ›</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: 2 Stacked Status Cards */}
                  <div className="lg:col-span-4 flex flex-col justify-between gap-2.5">
                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <div>
                          <p className="text-xs font-bold text-slate-800">4 people out today</p>
                          <p className="text-[10px] text-slate-400">Veda, Ishaan, Manav, Avani</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Nothing overdue</p>
                          <p className="text-[10px] text-slate-400">0 due in the next 7 days</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>

                    <p className="text-[10px] text-slate-400 text-right pr-1">
                      ✓ Oct 2026 · 144 employees · Refreshed 5 Oct, 10:57 am
                    </p>
                  </div>
                </div>

                {/* 6 Metric Cards Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {/* Card 1: 144 Employees (Dark Teal Card) */}
                  <div className="p-3.5 rounded-2xl bg-[#0D4D3D] text-white shadow-sm flex flex-col justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-white leading-none">144</span>
                    <div className="pt-2">
                      <p className="text-xs font-bold text-white">Employees</p>
                      <p className="text-[10px] text-emerald-200/80">All active</p>
                    </div>
                  </div>

                  {/* Card 2: 69.2 Avg KPI (Orange) */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-[#008080]" onClick={() => setActiveTab('kpi')}>
                    <span className="text-2xl sm:text-3xl font-black text-[#E67E22] leading-none">69.2</span>
                    <div className="pt-2">
                      <p className="text-xs font-bold text-slate-800">Avg KPI</p>
                      <p className="text-[10px] text-slate-400">75%+ confidence</p>
                    </div>
                  </div>

                  {/* Card 3: 84% Completed (Green) */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-[#27AE60] leading-none">84%</span>
                    <div className="pt-2">
                      <p className="text-xs font-bold text-slate-800">Completed</p>
                      <p className="text-[10px] text-slate-400">16/19 work items</p>
                    </div>
                  </div>

                  {/* Card 4: 70 Online now */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-[#008080]" onClick={() => setActiveTab('attendance')}>
                    <span className="text-2xl sm:text-3xl font-black text-[#0B132B] leading-none">70</span>
                    <div className="pt-2">
                      <p className="text-xs font-bold text-slate-800">Online now</p>
                      <p className="text-[10px] text-slate-400">Teams presence</p>
                    </div>
                  </div>

                  {/* Card 5: 308.5 Office hours */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-[#008080]" onClick={() => setActiveTab('attendance')}>
                    <span className="text-2xl sm:text-3xl font-black text-[#0B132B] leading-none">308.5</span>
                    <div className="pt-2">
                      <p className="text-xs font-bold text-slate-800">Office hours</p>
                      <p className="text-[10px] text-slate-400">2.1 avg / employee</p>
                    </div>
                  </div>

                  {/* Card 6: 49 Full fusion */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-[#0B132B] leading-none">49</span>
                    <div className="pt-2">
                      <p className="text-xs font-bold text-slate-800">Full fusion</p>
                      <p className="text-[10px] text-slate-400">All sources matched</p>
                    </div>
                  </div>
                </div>

                {/* Middle Two Columns: Engagement & Output + Team Health */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
                  
                  {/* Left: Engagement & output */}
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
                    <h4 className="text-xs font-extrabold text-[#0B132B] tracking-tight">Engagement & output</h4>

                    {/* Pink Alert Banner with click action */}
                    <div 
                      onClick={() => {
                        setActiveTab('employees');
                        setModalOpen(true);
                      }}
                      className="p-2.5 rounded-xl bg-[#FEE2E2]/60 border border-rose-200 flex items-center justify-between text-xs text-rose-800 font-semibold cursor-pointer hover:bg-rose-100/70 transition-colors"
                    >
                      <span>88% of scored employees are "Present but idle"</span>
                      <span className="text-rose-600 font-bold hover:underline">See who ›</span>
                    </div>

                    {/* Breakdown Items with colored percentage pills */}
                    <div className="space-y-2 text-xs">
                      {[
                        { label: 'High performer', count: '4', pct: '3%', color: 'bg-emerald-100 text-emerald-800' },
                        { label: 'Ghost worker', count: '0', pct: '0%', color: 'bg-slate-100 text-slate-600' },
                        { label: 'Present but idle', count: '76', pct: '53%', color: 'bg-amber-100 text-amber-800' },
                        { label: 'Disengaged', count: '6', pct: '4%', color: 'bg-rose-100 text-rose-800' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0">
                          <span className="font-medium text-slate-700">{item.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-[#0B132B]">{item.count}</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${item.color}`}>{item.pct}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Team health · 86 scored */}
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
                    <h4 className="text-xs font-extrabold text-[#0B132B] tracking-tight">Team health · 86 scored</h4>

                    <div className="space-y-2 text-xs">
                      {[
                        { label: 'Excellent', count: '11', bar: 'bg-[#10B981]', width: '85%' },
                        { label: 'Good', count: '9', bar: 'bg-[#3B82F6]', width: '65%' },
                        { label: 'Average', count: '24', bar: 'bg-[#F59E0B]', width: '45%' },
                        { label: 'Needs improvement', count: '34', bar: 'bg-[#F97316]', width: '30%' },
                        { label: 'Critical', count: '8', bar: 'bg-[#EF4444]', width: '15%' },
                      ].map((health, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-3 py-0.5">
                          <span className="w-32 text-slate-700 font-medium truncate">{health.label}</span>
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${health.bar} rounded-full`} style={{ width: health.width }} />
                          </div>
                          <span className="w-8 text-right font-bold text-slate-800 flex items-center justify-end gap-1">
                            <span>{health.count}</span>
                            <span className="text-slate-400">›</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[10px] text-slate-400 pt-1">
                      52 employees have insufficient data and are excluded: <span className="text-[#008080] font-bold hover:underline cursor-pointer" onClick={() => setActiveTab('employees')}>See who ›</span>
                    </p>
                  </div>
                </div>

                {/* Bottom Row Headers */}
                <div className="grid grid-cols-2 gap-4 text-xs font-extrabold text-[#0B132B] pt-1">
                  <span>Overall KPI by department</span>
                  <span>Attention required</span>
                </div>
              </motion.div>
            )}


            {/* ── SCREEN 2: EXACT KPI DASHBOARD SCREEN ── */}
            {activeTab === 'kpi' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Header Pills Row */}
                <div className="flex items-center justify-between pb-1">
                  <span className="px-3 py-1 rounded-full bg-[#EDE9FE] text-[#6D28D9] text-xs font-bold">
                    Showing all employees (144)
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                      13 teams
                    </span>
                    <span className="px-3 py-1 bg-[#E0F2FE] text-[#0369A1] rounded-lg text-xs font-bold border border-[#BAE6FD]">
                      All teams
                    </span>
                    <button type="button" className="px-3.5 py-1 bg-[#008080] hover:bg-[#006666] text-white rounded-lg text-xs font-bold cursor-pointer transition-colors">
                      Refresh KPI
                    </button>
                  </div>
                </div>

                {/* Top 3 KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-3xl font-black text-[#E67E22] block leading-none">69.2</span>
                    <p className="text-xs font-bold text-slate-800 mt-2">Overall KPI</p>
                    <p className="text-[10px] text-slate-400">86 employees lagging</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-3xl font-black text-[#10B981] block leading-none">90.1</span>
                    <p className="text-xs font-bold text-slate-800 mt-2">Productivity</p>
                    <p className="text-[10px] text-slate-400">Worklogix delivery · 35%</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-3xl font-black text-[#10B981] block leading-none">100</span>
                    <p className="text-xs font-bold text-slate-800 mt-2">Task completion</p>
                    <p className="text-[10px] text-slate-400">Work items · 20%</p>
                  </div>
                </div>

                {/* Team-wise KPI Leaderboard with exact bars from Screenshot 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <h4 className="text-xs font-extrabold text-[#0B132B]">
                    Team-wise KPI <span className="text-slate-400 font-normal">· 13 teams · 86 scored employees</span>
                  </h4>

                  <div className="space-y-2.5 pt-1 text-xs">
                    {[
                      { team: 'Project Management', bar: 'bg-[#10B981]', score: '81', tag: 'Excellent', tagCol: 'bg-emerald-50 text-emerald-700' },
                      { team: 'UI / UX', bar: 'bg-[#3B82F6]', score: '77.7', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'DevOps', bar: 'bg-[#3B82F6]', score: '77.2', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'AI Team', bar: 'bg-[#3B82F6]', score: '76.7', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'Business Development', bar: 'bg-[#3B82F6]', score: '74.6', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'Cyber Security Team', bar: 'bg-[#3B82F6]', score: '74.1', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'Marketing Team', bar: 'bg-[#3B82F6]', score: '73.6', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'HR Team', bar: 'bg-[#3B82F6]', score: '71', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'Software Development', bar: 'bg-[#3B82F6]', score: '70.6', tag: 'Good', tagCol: 'bg-blue-50 text-blue-700' },
                      { team: 'Management', bar: 'bg-[#F59E0B]', score: '67.1', tag: 'Watch', tagCol: 'bg-amber-50 text-amber-700' },
                      { team: 'Finance / Accounts', bar: 'bg-[#F59E0B]', score: '65.4', tag: 'Watch', tagCol: 'bg-amber-50 text-amber-700' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-3 py-1">
                        <span className="w-40 font-medium text-slate-800 truncate">{row.team}</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${row.bar} rounded-full`} style={{ width: `${row.score}%` }} />
                        </div>
                        <span className="w-10 text-right font-black text-slate-900">{row.score}</span>
                        <span className={`w-18 text-center text-[10px] font-bold px-2 py-0.5 rounded-md ${row.tagCol}`}>
                          {row.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}


            {/* ── SCREEN 3: EXACT EMPLOYEES DASHBOARD SCREEN ── */}
            {activeTab === 'employees' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Purple Tag */}
                <div className="flex items-center justify-between pb-1">
                  <span className="px-3 py-1 rounded-full bg-[#EDE9FE] text-[#6D28D9] text-xs font-bold">
                    Showing all employees (144)
                  </span>
                </div>

                {/* Top 4 Cards from Screenshot 3 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-2xl font-black text-[#0B132B]">45</span>
                    <p className="text-xs font-bold text-slate-800 mt-1">Scored & ranked</p>
                    <p className="text-[10px] text-slate-400">Office employees - MTM members</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-2xl font-black text-[#E67E22]">52</span>
                    <p className="text-xs font-bold text-slate-800 mt-1">Awaiting data</p>
                    <p className="text-[10px] text-slate-400">Incomplete profiles</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-2xl font-black text-[#7C3AED]">5</span>
                    <p className="text-xs font-bold text-slate-800 mt-1">Executives</p>
                    <p className="text-[10px] text-slate-400">Leadership team</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-2xl font-black text-[#0B132B]">144</span>
                    <p className="text-xs font-bold text-slate-800 mt-1">Total headcount</p>
                    <p className="text-[10px] text-slate-400">Matching current filters</p>
                  </div>
                </div>

                {/* Leadership Section with Clickable Rows */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between pb-1">
                    <h4 className="text-xs font-extrabold text-[#0B132B]">Leadership · 5 executives</h4>
                    <span className="text-[10px] text-[#008080] font-bold">Click Amara Thakur to inspect real profile modal</span>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs">
                    {[
                      { initials: 'AT', name: 'Amara Thakur', role: 'HR Manager - 4 direct reports', score: '70.6', isHighlight: true },
                      { initials: 'AM', name: 'Aarav Mehta', role: 'Director - 11 direct reports', score: '77.3', isHighlight: false },
                      { initials: 'CG', name: 'Charu Ghosh', role: 'People Manager - 7 direct reports', score: '63.5', isHighlight: false },
                      { initials: 'GW', name: 'Gautam Walia', role: 'Managing Director - 18 direct reports', score: '73.9', isHighlight: false },
                      { initials: 'FR', name: 'Farah Reddy', role: 'Chief Executive Officer - 5 direct reports', score: '68.6', isHighlight: false },
                    ].map((lead, idx) => (
                      <div 
                        key={idx}
                        onClick={() => {
                          if (lead.isHighlight) setModalOpen(true);
                        }}
                        className={`py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                          lead.isHighlight ? 'bg-[#E6F4F1] border border-[#00A896]/30' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${lead.isHighlight ? 'bg-[#008080] text-white' : 'bg-slate-200 text-slate-700'}`}>
                            {lead.initials}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block leading-tight">{lead.name}</span>
                            <span className="text-[10px] text-slate-400">{lead.role}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-black text-slate-900 font-mono text-sm">{lead.score}</span>
                          <span className="text-[10px] text-slate-400">team avg</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ranked KPI Register with Filters */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-extrabold text-[#0B132B]">Ranked KPI register</span>
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-[#005E54] text-white font-bold">All</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-medium">Excellent</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-medium">Good</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-medium">Watch</span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#EDE9FE] text-[#6D28D9] font-bold">◆ MTM members 42 →</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#10B981] text-white font-bold text-xs flex items-center justify-center">
                        VP
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Veda Pandey</span>
                        <span className="text-[10px] text-slate-400">Jr. Project Manager · Project Management</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-emerald-600 font-mono text-sm">91.9</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Excellent</span>
                      <span className="text-[10px] text-slate-400 font-mono">0%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── TAB 4: ATTENDANCE SCREEN ── */}
            {activeTab === 'attendance' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="p-4 rounded-2xl bg-[#082212] text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#008080] flex items-center justify-center text-white">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-emerald-300 uppercase tracking-wide block">
                        Optical Turnstile Gate Sync
                      </span>
                      <p className="text-[11px] text-emerald-100/80">
                        138 of 144 employees verified inside office turnstiles today.
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                    Hardware Status: CONNECTED ●
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-slate-800 block">Physical Turnstiles Match</span>
                    <p className="text-3xl font-black text-[#008080] font-mono">94.4%</p>
                    <p className="text-[10px] text-slate-500">Zero keystroke spyware needed. Real physical presence.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-slate-800 block">Proxy Check-ins Detected</span>
                    <p className="text-3xl font-black text-emerald-600 font-mono">0</p>
                    <p className="text-[10px] text-slate-500">All gate punches matched with Microsoft Teams presence.</p>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* ══════════════════════════════════════════
              EXACT FLOATING "✦ Ask Tara" PILL BUTTON
             ══════════════════════════════════════════ */}
          <div className="flex justify-end pt-3">
            <button
              type="button"
              onClick={() => setTaraOpen(!taraOpen)}
              className="px-5 py-2.5 rounded-full bg-[#005E54] hover:bg-[#004840] text-white font-extrabold text-xs shadow-lg shadow-black/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-[#5EEAD4]" />
              <span>✦ Ask Tara</span>
            </button>
          </div>

        </div>
      </div>


      {/* ═══════════════════════════════════════════════════════════
          SCREEN 3: THE EXACT "AMARA THAKUR" POPUP MODAL DIALOGUE!
         ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {modalOpen && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-xl bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-200 text-left space-y-4 relative max-h-[92%] overflow-y-auto"
            >
              {/* Close Button Top Right */}
              <button 
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-black w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                ✕
              </button>

              {/* Profile Top Row: Avatar, Name, Reports, KPI Pill */}
              <div className="flex items-start justify-between pr-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#008080] text-white font-black text-base flex items-center justify-center shrink-0">
                    AT
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#0B132B]">Amara Thakur</h3>
                    <p className="text-xs text-slate-600 font-medium">HR Manager · HR Team</p>
                    <p className="text-[11px] text-slate-400">Reports to <span className="font-bold text-slate-700">Farah Reddy</span></p>
                  </div>
                </div>

                <div className="px-3.5 py-1 rounded-xl bg-[#EDE9FE] text-[#7C3AED] font-mono text-sm font-black">
                  70.6 <span className="text-[10px] font-sans font-bold">Team KPI</span>
                </div>
              </div>

              {/* Tags Row */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-[#7C3AED] text-white font-bold text-[10px]">
                  Executive
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold text-[10px]">
                  88% confidence
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[10px]">
                  ⚠ efficiency 0.0, Collaboration 30.8
                </span>
              </div>

              {/* Sub-tabs Row (Summary, Attendance, Work, Meetings, SharePoint, Team) */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600 overflow-x-auto">
                {['summary', 'attendance', 'work', 'meetings', 'sharepoint', 'team'].map(tab => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setModalTab(tab)}
                    className={`px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                      modalTab === tab ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-black'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* 4 Stats Metrics Row */}
              <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                <div className="p-2">
                  <span className="text-xl sm:text-2xl font-black text-rose-500 block leading-tight">33%</span>
                  <span className="text-[10px] text-slate-500 font-medium">Attendance</span>
                </div>
                <div className="p-2">
                  <span className="text-xl sm:text-2xl font-black text-slate-800 block leading-tight">10:26 AM</span>
                  <span className="text-[10px] text-slate-500 font-medium">Avg check-in</span>
                </div>
                <div className="p-2">
                  <span className="text-xl sm:text-2xl font-black text-slate-400 block leading-tight">—</span>
                  <span className="text-[10px] text-slate-500 font-medium">Tasks done</span>
                </div>
                <div className="p-2">
                  <span className="text-xl sm:text-2xl font-black text-slate-400 block leading-tight">—</span>
                  <span className="text-[10px] text-slate-500 font-medium">Punctuality</span>
                </div>
              </div>

              {/* Progress Bars Section */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between gap-3">
                  <span className="w-28 text-slate-600 font-medium">Team Avg Kpi</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full" style={{ width: '70.6%' }} />
                  </div>
                  <span className="w-8 font-black text-slate-900 text-right">70.6</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="w-28 text-slate-600 font-medium">Attendance</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="w-8 font-black text-slate-900 text-right">100</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="w-28 text-slate-600 font-medium">Collaboration</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: '28%' }} />
                  </div>
                  <span className="w-8 font-black text-slate-900 text-right">28</span>
                </div>

                {/* Bar Legend */}
                <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1 font-medium">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> Weak (&lt;20)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Low (20–59)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Strong (60+)</span>
                </div>
              </div>

              {/* Period Subtext */}
              <p className="text-[10px] text-slate-400 text-center border-t border-slate-100 pt-2 font-mono">
                Period: 2026-10-01 to 2026-10-31 · Teams status is live · Generated: 5 Oct 2026
              </p>

              {/* Exact Green Badges at Bottom */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] font-bold text-emerald-800">
                {['Worklogix', 'GreytHR', 'Biometrics', 'Teams', 'Calendar', 'SharePoint'].map(src => (
                  <span key={src} className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                    <span>✓</span>
                    <span>{src}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ═══════════════════════════════════════════════════════════
          TARA AI CONVERSATIONAL DRAWER
         ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {taraOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute bottom-16 right-4 sm:right-6 w-80 sm:w-96 bg-[#071F11] text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/40 z-40 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white uppercase">Ask Tara AI Assistant</span>
              </div>
              <button 
                type="button" 
                onClick={() => setTaraOpen(false)}
                className="text-emerald-300 hover:text-white text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] text-emerald-300/80 block uppercase font-bold tracking-wider">
                Select question to test:
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

            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20 text-xs space-y-1">
              <span className="text-emerald-400 font-bold text-[11px] block">Verified Answer:</span>
              <p className="text-emerald-100/90 leading-relaxed font-sans text-xs">
                {TARA_PRESETS[selectedTaraQ].a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
