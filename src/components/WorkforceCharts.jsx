import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  GitPullRequest, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Zap,
  ArrowUpRight
} from 'lucide-react';

/* ─── 1. Biometric vs Hybrid Attendance Chart ─── */
export function BiometricAttendanceChart() {
  const [selectedDay, setSelectedDay] = useState(2); // Wednesday by default

  const daysData = [
    { day: 'Mon', turnstile: 142, teams: 148, matched: 139, rate: 93.9 },
    { day: 'Tue', turnstile: 168, teams: 172, matched: 165, rate: 95.9 },
    { day: 'Wed', turnstile: 184, teams: 186, matched: 181, rate: 97.3 },
    { day: 'Thu', turnstile: 175, teams: 179, matched: 171, rate: 95.5 },
    { day: 'Fri', turnstile: 122, teams: 134, matched: 119, rate: 88.8 },
  ];

  const current = daysData[selectedDay];
  const maxVal = 200;

  return (
    <div className="p-6 rounded-2xl bg-white border border-[#EBD0AF] shadow-card space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#FAF7EE]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A7C13] animate-pulse" />
            <h4 className="text-sm font-extrabold text-[#113309]">Physical Turnstile vs Teams Presence</h4>
          </div>
          <p className="text-xs text-[#5C7063] mt-0.5">Biometric gate sync verified against M365 status</p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#FFF8CF] px-3 py-1 rounded-full border border-[#FBE6C2]">
          <span className="text-xs font-black text-[#2A7C13]">{current.rate}%</span>
          <span className="text-[10px] text-[#5C7063] font-semibold">Match Rate</span>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="space-y-4 pt-1">
        <div className="grid grid-cols-5 gap-3 items-end h-40 pt-4 px-2 bg-[#FAF7EE]/60 rounded-xl border border-[#EBD0AF]/50">
          {daysData.map((d, idx) => {
            const isSelected = selectedDay === idx;
            const heightPct = (d.matched / maxVal) * 100;
            return (
              <button
                key={d.day}
                onClick={() => setSelectedDay(idx)}
                className="group flex flex-col items-center justify-end h-full gap-2 focus:outline-none"
              >
                <div className="w-full flex items-end justify-center gap-1.5 h-full">
                  {/* Turnstile bar */}
                  <motion.div
                    className={`w-3 sm:w-4 rounded-t-md transition-colors ${
                      isSelected ? 'bg-[#113309]' : 'bg-[#113309]/30 group-hover:bg-[#113309]/50'
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.turnstile / maxVal) * 100}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                  />
                  {/* Matched bar */}
                  <motion.div
                    className={`w-3 sm:w-4 rounded-t-md transition-colors ${
                      isSelected ? 'bg-[#2A7C13]' : 'bg-[#2A7C13]/40 group-hover:bg-[#2A7C13]/60'
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08 + 0.05 }}
                  />
                </div>
                <span className={`text-[11px] font-bold pb-1 ${isSelected ? 'text-[#2A7C13]' : 'text-[#5C7063]'}`}>
                  {d.day}
                </span>
              </button>
            );
          })}
        </div>

        {/* Legend & Details */}
        <div className="grid grid-cols-3 gap-3 pt-2 text-center">
          <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF]/60">
            <div className="text-[10px] text-[#5C7063] uppercase font-bold">Turnstiles</div>
            <div className="text-base font-black text-[#113309]">{current.turnstile}</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF]/60">
            <div className="text-[10px] text-[#5C7063] uppercase font-bold">Teams Active</div>
            <div className="text-base font-black text-[#113309]">{current.teams}</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#EAF5E7] border border-[#D2EBCB]">
            <div className="text-[10px] text-[#2A7C13] uppercase font-bold">Verified Match</div>
            <div className="text-base font-black text-[#2A7C13]">{current.matched}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 2. GitHub Engineering Velocity Chart ─── */
export function GitHubVelocityChart() {
  const weeks = [
    { label: 'W1', prTime: '12.4h', merged: 38, reviews: '94%' },
    { label: 'W2', prTime: '9.8h',  merged: 44, reviews: '96%' },
    { label: 'W3', prTime: '7.2h',  merged: 51, reviews: '98%' },
    { label: 'W4', prTime: '5.4h',  merged: 63, reviews: '99%' },
    { label: 'W5', prTime: '3.8h',  merged: 72, reviews: '99.4%' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-white border border-[#EBD0AF] shadow-card space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-[#FAF7EE]">
        <div className="flex items-center gap-2">
          <GitPullRequest className="w-4 h-4 text-[#2A7C13]" />
          <h4 className="text-sm font-extrabold text-[#113309]">Pull Request Turnaround Speed</h4>
        </div>
        <span className="text-[11px] font-bold text-[#2A7C13] bg-[#EAF5E7] px-2.5 py-0.5 rounded-full border border-[#D2EBCB]">
          -69% PR Cycle Time
        </span>
      </div>

      <div className="space-y-3">
        {weeks.map((w, idx) => (
          <div key={w.label} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#113309]">{w.label} Pipeline</span>
              <div className="flex items-center gap-3">
                <span className="text-[#5C7063] font-medium">{w.merged} PRs Merged</span>
                <span className="font-extrabold font-mono text-[#2A7C13]">{w.prTime}</span>
              </div>
            </div>
            <div className="h-2.5 rounded-full bg-[#FAF7EE] overflow-hidden border border-[#EBD0AF]/50 flex">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2A7C13] to-[#00C9A7] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(idx + 1) * 20}%` }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-[#FFF8CF]/60 border border-[#FBE6C2] flex items-center justify-between text-xs">
        <span className="text-[#5C7063]">Active Sprint Review Compliance</span>
        <span className="font-black text-[#113309]">99.4% SLA Adherence</span>
      </div>
    </div>
  );
}

/* ─── 3. Focus vs Meeting Overload Balance Chart ─── */
export function FocusWorkloadChart() {
  const slices = [
    { label: 'Deep Focus Time', percent: 64, color: '#2A7C13', desc: 'Uninterrupted creative/dev work' },
    { label: 'Team Collaboration', percent: 22, color: '#00C9A7', desc: 'Scrums, syncs, reviews' },
    { label: 'Admin & Standups', percent: 14, color: '#F59E0B', desc: 'Planning and status tracking' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-white border border-[#EBD0AF] shadow-card space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-[#FAF7EE]">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#2A7C13]" />
          <h4 className="text-sm font-extrabold text-[#113309]">Workload & Meeting Load Distribution</h4>
        </div>
        <span className="text-[11px] font-bold text-[#113309] bg-[#FFF8CF] px-2.5 py-0.5 rounded-full border border-[#FBE6C2]">
          Health Score: 92/100
        </span>
      </div>

      {/* Progress segmented bar */}
      <div className="space-y-2">
        <div className="h-4 rounded-xl overflow-hidden flex bg-slate-100 p-0.5 gap-1 border border-[#EBD0AF]/50">
          {slices.map((s, i) => (
            <motion.div
              key={s.label}
              className="h-full rounded-lg"
              style={{ backgroundColor: s.color }}
              initial={{ width: 0 }}
              animate={{ width: `${s.percent}%` }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>

      {/* Breakdown list */}
      <div className="space-y-2.5 pt-1">
        {slices.map((s) => (
          <div key={s.label} className="p-2.5 rounded-xl bg-[#FAF7EE]/70 border border-[#EBD0AF]/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
              <div>
                <div className="text-xs font-bold text-[#113309]">{s.label}</div>
                <div className="text-[10px] text-[#5C7063]">{s.desc}</div>
              </div>
            </div>
            <div className="text-sm font-black font-mono text-[#113309]">{s.percent}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 4. KPI Performance Band Distribution ─── */
export function KPIPerformanceBandsChart() {
  const bands = [
    { name: 'Top Tier (Exceeding)', count: '28%', color: '#2A7C13', bg: '#EAF5E7', border: '#D2EBCB' },
    { name: 'Consistent (On Track)', count: '52%', color: '#00C9A7', bg: '#E0F7F3', border: '#A7F0E3' },
    { name: 'Growth Needed', count: '16%', color: '#F59E0B', bg: '#FEF3C7', border: '#FDE68A' },
    { name: 'Review Recommended', count: '4%', color: '#DC2626', bg: '#FEE2E2', border: '#FECACA' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-white border border-[#EBD0AF] shadow-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#FAF7EE]">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#2A7C13]" />
          <h4 className="text-sm font-extrabold text-[#113309]">Organizational KPI Distribution</h4>
        </div>
        <span className="text-[11px] font-bold text-[#2A7C13] bg-[#EAF5E7] px-2.5 py-0.5 rounded-full border border-[#D2EBCB]">
          100% Rule-Transparent
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {bands.map((b, idx) => (
          <motion.div
            key={b.name}
            className="p-3.5 rounded-xl border flex flex-col justify-between"
            style={{ backgroundColor: b.bg, borderColor: b.border }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <span className="text-[11px] font-bold text-[#113309] leading-tight">{b.name}</span>
            <div className="text-2xl font-black mt-2" style={{ color: b.color }}>
              {b.count}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-[11px] text-[#5C7063] text-center pt-1 italic">
        Calculated strictly from approved deliverable points & attendance benchmarks. Zero black-box ranking.
      </p>
    </div>
  );
}

/* ─── 5. Interactive ROI & Team Size Calculator ─── */
export function InteractiveROICalculator({ onBookDemo }) {
  const [headcount, setHeadcount] = useState(150);

  // Calculations based on 8 hrs/wk reporting -> reduced to 20m
  const weeklyHoursSaved = Math.round((headcount / 50) * 7.6);
  const monthlyHoursSaved = weeklyHoursSaved * 4;
  const monthlyCostSavings = monthlyHoursSaved * 65; // $65 avg blended manager cost/hr
  const annualSavings = monthlyCostSavings * 12;

  // Determine best tier
  const recommendedTier = headcount <= 75 ? 'Growth' : headcount <= 300 ? 'Scale' : 'Enterprise';

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#113309] to-[#052411] text-white shadow-2xl border border-emerald-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2A7C13]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#00C9A7] bg-emerald-950/80 border border-emerald-700/60 px-3 py-1 rounded-full">
              Interactive Value Simulator
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Calculate Your Organization's Operational ROI
            </h3>
          </div>
          <div className="text-right sm:text-right">
            <span className="text-xs text-emerald-200/70">Recommended Tier:</span>
            <div className="text-lg font-black text-[#F59E0B]">{recommendedTier} Plan</div>
          </div>
        </div>

        {/* Headcount Slider */}
        <div className="space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-emerald-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00C9A7]" />
              <span>Team Size / Headcount:</span>
            </label>
            <div className="text-2xl font-black text-[#00C9A7] font-mono">
              {headcount} <span className="text-xs font-normal text-emerald-200">employees</span>
            </div>
          </div>

          <input
            type="range"
            min={25}
            max={1000}
            step={25}
            value={headcount}
            onChange={(e) => setHeadcount(Number(e.target.value))}
            className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
          />

          <div className="flex justify-between text-[11px] text-emerald-300/50 font-mono">
            <span>25 Seats</span>
            <span>250 Seats</span>
            <span>500 Seats</span>
            <span>1,000 Seats</span>
          </div>
        </div>

        {/* Dynamic ROI Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/10 border border-white/15 text-center space-y-1">
            <div className="text-xs text-emerald-200/70 font-semibold uppercase">Management Time Saved</div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">
              {monthlyHoursSaved} <span className="text-sm font-normal text-emerald-200">hrs/mo</span>
            </div>
            <p className="text-[11px] text-emerald-300/60">Weekly reports cut from 8 hrs to 20 mins</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 border border-white/15 text-center space-y-1">
            <div className="text-xs text-emerald-200/70 font-semibold uppercase">Annual Cost Recovered</div>
            <div className="text-3xl sm:text-4xl font-black text-[#F59E0B] font-mono">
              ${annualSavings.toLocaleString()}
            </div>
            <p className="text-[11px] text-emerald-300/60">Estimated leadership bandwidth recovered</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 border border-white/15 text-center space-y-1">
            <div className="text-xs text-emerald-200/70 font-semibold uppercase">Attendance Reconciliation</div>
            <div className="text-3xl sm:text-4xl font-black text-[#00C9A7] font-mono">
              94.4%
            </div>
            <p className="text-[11px] text-emerald-300/60">Biometric turnstile match rate</p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-emerald-200/80">
            ✓ Customized sandbox setup based on your exact Teams, GitHub, and HRMS infrastructure.
          </div>
          <button
            onClick={onBookDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#E08D07] text-slate-950 font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
          >
            <span>Book Walkthrough For {headcount} Seats</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
