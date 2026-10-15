import React from 'react';
import { motion } from 'framer-motion';
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
  Zap
} from 'lucide-react';
import {
  GitHubLogo,
  GitLabLogo,
  BitbucketLogo,
  JiraLogo,
  LinearLogo,
  TrelloLogo,
  AsanaLogo,
  OpenAILogo,
  CopilotLogo,
  TaraAILogo,
  SlackLogo,
  PagerDutyLogo,
  TurnstileLogo,
  GreyHRLogo,
  TeamsLogo,
  ZoomLogo,
  GoogleMeetLogo,
  GoogleCalendarLogo,
} from '../components/BrandLogos';

export default function SolutionsView({ onBookDemo }) {
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

  // Target Roles (Who it is useful for)
  const targetRoles = [
    {
      role: 'Leadership & HR',
      scope: 'Company-wide view, attention items and KPI bands.',
      icon: Building2,
      color: 'bg-emerald-100/70 text-[#2A7C13] border-emerald-200'
    },
    {
      role: 'Team Managers',
      scope: 'Team KPIs, attendance, presence and project progress.',
      icon: Users,
      color: 'bg-blue-100/70 text-blue-800 border-blue-200'
    },
    {
      role: 'Project & Delivery Managers',
      scope: 'Project health, hours, members, GitHub and Planner activity.',
      icon: Briefcase,
      color: 'bg-amber-100/70 text-amber-800 border-amber-200'
    },
    {
      role: 'IT & Admin Teams',
      scope: 'Integration status, sync health and error monitoring.',
      icon: Server,
      color: 'bg-teal-100/70 text-teal-800 border-teal-200'
    },
    {
      role: 'Compliance & Security Teams',
      scope: 'Access control and tamper-proof audit records.',
      icon: Lock,
      color: 'bg-purple-100/70 text-purple-800 border-purple-200'
    },
  ];

  // Suggested Industries
  const industries = [
    'IT and Software Services',
    'Technology Consulting Firms',
    'Distributed & Hybrid Engineering Teams',
    'Enterprise Professional Services'
  ];

  // Integration sources for Hatica-style diagram
  const inputSources = [
    { apps: ['GitHub', 'GitLab'], pill: '2 PRs raised · 18 commits', icon: GitPullRequest, badge: 'bg-emerald-100 text-emerald-900 border-emerald-200' },
    { apps: ['Jira', 'Planner'], pill: '4 sprint issues closed', icon: CheckSquare, badge: 'bg-blue-100 text-blue-900 border-blue-200' },
    { apps: ['Tara AI', 'Copilot'], pill: '62% AI-assisted workflows', icon: Sparkles, badge: 'bg-amber-100 text-amber-900 border-amber-200' },
    { apps: ['Turnstiles', 'GreyHR'], pill: '94.4% biometric match rate', icon: Fingerprint, badge: 'bg-teal-100 text-teal-900 border-teal-200' },
    { apps: ['MS Teams', 'Calendar'], pill: '3.5 hours in meetings', icon: MessageSquare, badge: 'bg-purple-100 text-purple-900 border-purple-200' },
  ];

  const outputInsights = [
    { label: 'Delivery Velocity', icon: Activity, color: 'text-[#2A7C13]', bg: 'bg-[#EAF5E7]' },
    { label: 'Biometric Presence & Attendance', icon: Fingerprint, color: 'text-[#00C9A7]', bg: 'bg-[#E0F7F3]' },
    { label: 'Rule-Based KPI Scoring', icon: Layers, color: 'text-[#2A7C13]', bg: 'bg-[#EAF5E7]' },
    { label: 'Focus vs Meeting Balance', icon: Clock, color: 'text-[#D97706]', bg: 'bg-[#FEF3C7]' },
    { label: 'People Well-being & Burnout Guard', icon: HeartHandshake, color: 'text-[#7C3AED]', bg: 'bg-[#F3E8FF]' },
    { label: 'Efforts & Project Health', icon: ShieldCheck, color: 'text-[#113309]', bg: 'bg-[#FFF8CF]' },
  ];

  return (
    <div className="py-20 space-y-20 bg-[#FAF7EE] text-[#26372B] font-sans border-b border-[#EBD0AF]/70">
      
      {/* ── 1. SECTION HEADER ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8CF] border border-[#FBE6C2] text-[#2A7C13] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#2A7C13]" />
          <span>Operational Solutions</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#113309] tracking-tight leading-tight">
          The problems we solve. Built for modern teams.
        </h2>

        <p className="text-sm sm:text-base text-[#3E5044] max-w-2xl mx-auto leading-relaxed">
          PeopleOps joins fragmented data from your daily business tools to help leadership make fair, confident decisions.
        </p>
      </section>

      {/* ── 2. HATICA-STYLE INTEGRATION FLOW DIAGRAM WITH PEOPLEOPS "P" LOGO ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-[#EBD0AF] shadow-card p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#113309] tracking-tight">
              How PeopleOps works to drive productivity and success for your engineering team
            </h3>
            <p className="text-xs sm:text-sm text-[#5C7063]">
              Comprehensive work visibility so you can base your decisions on the whole picture
            </p>
          </div>

          {/* ══ DESKTOP HATICA FLOW DIAGRAM ══ */}
          <div className="hidden lg:block relative w-full h-[460px] select-none">
            
            {/* SVG Cable & Contour Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1100 460" fill="none">
              <defs>
                <linearGradient id="cableGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="70%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#2A7C13" />
                </linearGradient>
                <linearGradient id="cableGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E879F9" />
                  <stop offset="60%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#2A7C13" />
                </linearGradient>
                <linearGradient id="cableGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="70%" stopColor="#7E22CE" />
                  <stop offset="100%" stopColor="#2A7C13" />
                </linearGradient>
                <linearGradient id="cableGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F472B6" />
                  <stop offset="60%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#2A7C13" />
                </linearGradient>
                <linearGradient id="cableGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="60%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#2A7C13" />
                </linearGradient>
              </defs>

              {/* 5 Converging Bezier Cables flowing into the P Logo (center at X:520, Y:230) */}
              {/* Cable 1 (from Y: 50) */}
              <path
                d="M 370 52 C 455 52, 475 230, 485 230"
                stroke="url(#cableGrad1)"
                strokeWidth="4"
                strokeDasharray="6 4"
                strokeLinecap="round"
                className="opacity-90"
              />
              {/* Cable 2 (from Y: 140) */}
              <path
                d="M 365 142 C 435 142, 470 230, 485 230"
                stroke="url(#cableGrad2)"
                strokeWidth="4.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                className="opacity-95"
              />
              {/* Cable 3 (from Y: 230) Straight into center */}
              <path
                d="M 380 230 L 485 230"
                stroke="url(#cableGrad3)"
                strokeWidth="5"
                strokeDasharray="6 4"
                strokeLinecap="round"
              />
              {/* Cable 4 (from Y: 320) */}
              <path
                d="M 360 320 C 435 320, 470 230, 485 230"
                stroke="url(#cableGrad4)"
                strokeWidth="4.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                className="opacity-95"
              />
              {/* Cable 5 (from Y: 410) */}
              <path
                d="M 370 410 C 455 410, 475 230, 485 230"
                stroke="url(#cableGrad5)"
                strokeWidth="4"
                strokeDasharray="6 4"
                strokeLinecap="round"
                className="opacity-90"
              />

              {/* Bold Dashed Output Arrow Emerging from Right of P Logo (from 555 to 640) */}
              <line
                x1="555"
                y1="230"
                x2="635"
                y2="230"
                stroke="#8B5CF6"
                strokeWidth="7"
                strokeDasharray="8 5"
                strokeLinecap="round"
              />
              <polygon
                points="635,221 652,230 635,239"
                fill="#8B5CF6"
              />

              {/* Faint Dotted Oval Contour Line encompassing the right-hand insight cloud */}
              <path
                d="M 645 110 C 645 40, 1070 40, 1070 230 C 1070 420, 645 420, 645 350"
                stroke="#E9D5FF"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                fill="none"
                opacity="0.75"
              />
            </svg>

            {/* Left 5 Floating Source Cards with Official Brand Logos */}
            <div className="absolute left-0 top-0 bottom-0 w-[390px] flex flex-col justify-between z-20 py-1">
              
              {/* Card 1: GitHub / GitLab / Bitbucket */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2.5 p-2 px-3 rounded-xl bg-white border border-[#EBD0AF]/90 shadow-sm hover:shadow-md transition-all">
                  <div title="GitHub" className="hover:scale-115 transition-transform cursor-pointer">
                    <GitHubLogo className="w-5 h-5 text-slate-900" />
                  </div>
                  <div title="GitLab" className="hover:scale-115 transition-transform cursor-pointer">
                    <GitLabLogo className="w-5 h-5" />
                  </div>
                  <div title="Bitbucket" className="hover:scale-115 transition-transform cursor-pointer">
                    <BitbucketLogo className="w-5 h-5" />
                  </div>
                </div>
                <div className="w-5 border-t-2 border-dashed border-[#C084FC]" />
                <span className="px-3 py-1 rounded-full bg-white border border-[#E9D5FF] text-[#7C3AED] text-[11px] font-bold shadow-soft whitespace-nowrap">
                  2 PRs raised
                </span>
              </div>

              {/* Card 2: Jira / Linear / Trello / Asana */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2.5 p-2 px-3 rounded-xl bg-white border border-[#EBD0AF]/90 shadow-sm hover:shadow-md transition-all">
                  <div title="Jira" className="hover:scale-115 transition-transform cursor-pointer">
                    <JiraLogo className="w-5 h-5" />
                  </div>
                  <div title="Linear" className="hover:scale-115 transition-transform cursor-pointer">
                    <LinearLogo className="w-5 h-5" />
                  </div>
                  <div title="Trello" className="hover:scale-115 transition-transform cursor-pointer">
                    <TrelloLogo className="w-5 h-5" />
                  </div>
                  <div title="Asana" className="hover:scale-115 transition-transform cursor-pointer">
                    <AsanaLogo className="w-5 h-5" />
                  </div>
                </div>
                <div className="w-5 border-t-2 border-dashed border-[#E879F9]" />
                <span className="px-3 py-1 rounded-full bg-white border border-[#E9D5FF] text-[#7C3AED] text-[11px] font-bold shadow-soft whitespace-nowrap">
                  4 issues closed
                </span>
              </div>

              {/* Card 3: OpenAI / GitHub Copilot / Tara AI */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2.5 p-2 px-3 rounded-xl bg-white border border-[#EBD0AF]/90 shadow-sm hover:shadow-md transition-all">
                  <div title="OpenAI" className="hover:scale-115 transition-transform cursor-pointer">
                    <OpenAILogo className="w-5 h-5" />
                  </div>
                  <div title="GitHub Copilot" className="hover:scale-115 transition-transform cursor-pointer">
                    <CopilotLogo className="w-5 h-5" />
                  </div>
                  <div title="Tara AI" className="hover:scale-115 transition-transform cursor-pointer">
                    <TaraAILogo className="w-5 h-5" />
                  </div>
                </div>
                <div className="w-5 border-t-2 border-dashed border-[#A855F7]" />
                <span className="px-3 py-1 rounded-full bg-white border border-[#E9D5FF] text-[#7C3AED] text-[11px] font-bold shadow-soft whitespace-nowrap">
                  62% AI-assisted commits
                </span>
              </div>

              {/* Card 4: Slack / PagerDuty / Turnstile / GreyHR */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2.5 p-2 px-3 rounded-xl bg-white border border-[#EBD0AF]/90 shadow-sm hover:shadow-md transition-all">
                  <div title="Slack" className="hover:scale-115 transition-transform cursor-pointer">
                    <SlackLogo className="w-5 h-5" />
                  </div>
                  <div title="PagerDuty" className="hover:scale-115 transition-transform cursor-pointer">
                    <PagerDutyLogo className="w-5 h-5" />
                  </div>
                  <div title="Optical Turnstiles" className="hover:scale-115 transition-transform cursor-pointer">
                    <TurnstileLogo className="w-5 h-5" />
                  </div>
                  <div title="GreyHR" className="hover:scale-115 transition-transform cursor-pointer">
                    <GreyHRLogo className="w-5 h-5" />
                  </div>
                </div>
                <div className="w-5 border-t-2 border-dashed border-[#F472B6]" />
                <span className="px-3 py-1 rounded-full bg-white border border-[#E9D5FF] text-[#7C3AED] text-[11px] font-bold shadow-soft whitespace-nowrap">
                  5 incident alerts
                </span>
              </div>

              {/* Card 5: Teams / Zoom / Meet / Calendar */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2.5 p-2 px-3 rounded-xl bg-white border border-[#EBD0AF]/90 shadow-sm hover:shadow-md transition-all">
                  <div title="Microsoft Teams" className="hover:scale-115 transition-transform cursor-pointer">
                    <TeamsLogo className="w-5 h-5" />
                  </div>
                  <div title="Zoom" className="hover:scale-115 transition-transform cursor-pointer">
                    <ZoomLogo className="w-5 h-5" />
                  </div>
                  <div title="Google Meet" className="hover:scale-115 transition-transform cursor-pointer">
                    <GoogleMeetLogo className="w-5 h-5" />
                  </div>
                  <div title="Google Calendar" className="hover:scale-115 transition-transform cursor-pointer">
                    <GoogleCalendarLogo className="w-5 h-5" />
                  </div>
                </div>
                <div className="w-5 border-t-2 border-dashed border-[#C084FC]" />
                <span className="px-3 py-1 rounded-full bg-white border border-[#E9D5FF] text-[#7C3AED] text-[11px] font-bold shadow-soft whitespace-nowrap">
                  3.5 hours in meetings
                </span>
              </div>

            </div>

            {/* Center: The PeopleOps "P" Logo Conduit Hub */}
            <div className="absolute left-[520px] top-[230px] -translate-x-1/2 -translate-y-1/2 z-30">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-20 h-20 rounded-full bg-white border-2 border-[#2A7C13] shadow-[0_12px_40px_rgba(42,124,19,0.3)] flex flex-col items-center justify-center p-2 relative group cursor-pointer"
              >
                <img
                  src="/assets/peopleops-icon.png"
                  alt="PeopleOps P Logo"
                  className="w-10 h-10 object-contain drop-shadow-sm"
                />
                <span className="text-[8px] font-black tracking-wider text-[#113309] uppercase font-mono mt-0.5">
                  PeopleOps
                </span>
                {/* Gentle Pulsing Ring */}
                <div className="absolute -inset-1 rounded-full border border-[#2A7C13]/40 animate-ping pointer-events-none" />
              </motion.div>
            </div>

            {/* Right Side: Floating Staggered Insight Cloud (Matching Hatica layout) */}
            <div className="absolute right-0 top-0 bottom-0 w-[450px] z-20">
              
              {/* 1. Delivery Velocity (Top-Left) */}
              <div className="absolute left-6 top-8">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#E9D5FF] shadow-soft hover:shadow-card hover:scale-105 transition-all cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-[#FAF5FF] text-[#9333EA] flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#113309]">Delivery Velocity</span>
                </div>
              </div>

              {/* 2. Process Health (Mid-Left) */}
              <div className="absolute left-0 top-[110px]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#E9D5FF] shadow-soft hover:shadow-card hover:scale-105 transition-all cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-[#FAF5FF] text-[#A855F7] flex items-center justify-center">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#113309]">Process Health</span>
                </div>
              </div>

              {/* 3. AI Adoption (Center-Top) */}
              <div className="absolute left-[180px] top-[140px]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#FCE7F3] shadow-soft hover:shadow-card hover:scale-105 transition-all cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-[#FDF2F8] text-[#DB2777] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#113309]">AI Adoption</span>
                </div>
              </div>

              {/* 4. AI Insights (Mid-Center) */}
              <div className="absolute left-8 top-[205px]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#E9D5FF] shadow-soft hover:shadow-card hover:scale-105 transition-all cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-[#FAF5FF] text-[#7C3AED] flex items-center justify-center">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#113309]">AI Insights</span>
                </div>
              </div>

              {/* 5. People Well-being (Center-Bottom) */}
              <div className="absolute left-[130px] top-[275px]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#E9D5FF] shadow-soft hover:shadow-card hover:scale-105 transition-all cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-[#FAF5FF] text-[#9333EA] flex items-center justify-center">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#113309]">People Well-being</span>
                </div>
              </div>

              {/* 6. Efforts & Business Alignment (Bottom) */}
              <div className="absolute left-10 top-[350px]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#E9D5FF] shadow-soft hover:shadow-card hover:scale-105 transition-all cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-[#FAF5FF] text-[#7E22CE] flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#113309]">Efforts and Business alignment</span>
                </div>
              </div>

            </div>

          </div>

          {/* ══ MOBILE / TABLET ADAPTIVE FLOW ══ */}
          <div className="block lg:hidden space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider block text-center">
                Connected Work Inputs
              </span>
              <div className="space-y-2">
                {[
                  { app: 'GitHub, GitLab, Bitbucket', pill: '2 PRs raised' },
                  { app: 'Jira, Linear, Trello, Asana', pill: '4 issues closed' },
                  { app: 'AI, OpenAI, Tara, Copilot', pill: '62% AI commits' },
                  { app: 'Slack, PagerDuty, Turnstiles', pill: '5 incident alerts' },
                  { app: 'Teams, Zoom, Meet, Calendar', pill: '3.5h in meetings' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF7EE] border border-[#EBD0AF] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#113309]">{item.app}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#E9D5FF] text-[#7C3AED] font-bold">
                      {item.pill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Central P Logo Badge on Mobile */}
            <div className="flex flex-col items-center justify-center py-4">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2A7C13] shadow-md flex items-center justify-center p-2">
                <img src="/assets/peopleops-icon.png" alt="PeopleOps P" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xs font-extrabold text-[#2A7C13] mt-2">PeopleOps Telemetry Engine</span>
            </div>

            {/* Output Insights on Mobile */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#2A7C13] uppercase tracking-wider block text-center">
                Automatic Operational Insights
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Delivery Velocity',
                  'Process Health',
                  'AI Adoption',
                  'AI Insights',
                  'People Well-being',
                  'Efforts & Alignment'
                ].map((name) => (
                  <div key={name} className="p-2.5 rounded-xl bg-white border border-[#E9D5FF] shadow-xs text-xs font-bold text-[#113309] text-center">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ BOTTOM 3-STEP LEGEND (MATCHING REFERENCE IMAGE) ══ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-6 border-t border-[#FAF7EE] text-center">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-[#113309]">
                Integrate with the work apps you use
              </h5>
              <p className="text-[11px] text-[#5C7063] max-w-xs leading-relaxed">
                Seamless server-to-server cloud APIs and optical turnstile controllers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF5E7] text-[#2A7C13] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-[#113309]">
                Contextualize and Analyze
              </h5>
              <p className="text-[11px] text-[#5C7063] max-w-xs leading-relaxed">
                Automated cross-platform identity matching and approved KPI definitions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF8CF] text-[#D97706] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-[#113309]">
                Get Automatic Insights
              </h5>
              <p className="text-[11px] text-[#5C7063] max-w-xs leading-relaxed">
                Clear leadership cockpits designed strictly for human decision support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. PROBLEMS IT SOLVES (STRUCTURED TABLE & CARDS) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#2A7C13] bg-[#FFF8CF] border border-[#FBE6C2] px-3 py-1 rounded-full inline-block">
            Problem vs Solution
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#113309]">
            The exact operational problems PeopleOps solves
          </h3>
        </div>

        <div className="rounded-3xl bg-white border border-[#EBD0AF] shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAF7EE] border-b border-[#EBD0AF] text-[#113309]">
                  <th className="py-4 px-6 font-bold w-1/2">The Problem You Face</th>
                  <th className="py-4 px-6 font-black text-[#2A7C13] bg-[#EAF5E7]/50 w-1/2 border-l border-[#D2EBCB]/40">
                    How PeopleOps Helps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBD0AF]/50">
                {problemSolutions.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7EE]/40 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#113309]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                        <span>{row.problem}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-6 text-[#2A7C13] font-bold bg-[#EAF5E7]/20 border-l border-[#D2EBCB]/30">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2A7C13] shrink-0" />
                        <span>{row.solution}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. WHO IT IS USEFUL FOR (TARGET STAKEHOLDERS) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#2A7C13] bg-[#FFF8CF] border border-[#FBE6C2] px-3 py-1 rounded-full inline-block">
            Target Audience
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#113309]">
            Who it is useful for
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {targetRoles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#EBD0AF] shadow-soft space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5E7] text-[#2A7C13] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#113309]">
                    {item.role}
                  </h4>
                </div>
                <p className="text-xs text-[#3E5044] leading-relaxed pt-2 border-t border-[#FAF7EE]">
                  {item.scope}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. SUGGESTED INDUSTRIES ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#071F11] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-wider">Suggested Industries</span>
            <h4 className="text-xl font-black text-white">Ideal for Modern Distributed Teams</h4>
            <p className="text-xs text-emerald-200/70">
              Tailored for 50–500 employee organizations managing hybrid workforces.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {industries.map((ind) => (
              <span key={ind} className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-black text-[#113309]">
          Solve workforce blindspots for your leadership team today.
        </h3>
        <button
          onClick={onBookDemo}
          className="px-8 py-3.5 bg-[#2A7C13] hover:bg-[#20630D] text-white font-bold text-sm rounded-xl shadow-forest transition-all inline-flex items-center gap-2"
        >
          <span>Book a Solution Walkthrough</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
