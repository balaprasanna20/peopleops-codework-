import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Database,
  Check,
  Building2,
  Cable,
  GitMerge,
  Cpu,
  LayoutDashboard
} from 'lucide-react';

/* ── Hand-drawn curly loop connector arrows matching user sketch ── */
function CurlyConnectorArrow({ index, activeStep }) {
  const paths = [
    {
      // High loop swooping into card 2
      curve: "M 4 28 C 16 12, 28 6, 38 12 C 44 16, 42 28, 34 26 C 26 24, 28 10, 46 12 C 58 13, 68 20, 76 28",
      head: "M 66 27 L 77 29 L 75 19",
    },
    {
      // Underloop dipping then rising into card 3
      curve: "M 4 16 C 16 30, 26 34, 36 28 C 42 24, 42 12, 34 14 C 26 16, 30 30, 46 27 C 58 24, 68 18, 76 13",
      head: "M 66 12 L 77 12 L 74 22",
    },
    {
      // Expressive loop swooping into card 4
      curve: "M 4 26 C 14 10, 26 5, 36 10 C 43 14, 42 26, 33 25 C 26 23, 27 10, 44 11 C 56 12, 66 18, 76 26",
      head: "M 66 25 L 77 27 L 74 17",
    },
  ];

  const current = paths[index % paths.length];
  const isPast = index < activeStep;
  const isCurrent = index === activeStep;

  return (
    <div className="hidden lg:block absolute -right-9 top-1/3 -translate-y-1/2 w-20 h-12 z-30 pointer-events-none">
      <svg
        viewBox="0 0 84 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Base line: Green if reached/active, soft warm beige if upcoming */}
        <path
          d={current.curve}
          stroke={isPast || isCurrent ? "#2A7C13" : "#D8C6B0"}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={isPast || isCurrent ? "none" : "3 3"}
          className="transition-colors duration-500"
        />

        {/* Arrow head */}
        <path
          d={current.head}
          stroke={isPast || isCurrent ? "#2A7C13" : "#D8C6B0"}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-500"
        />

        {/* Active glowing data pulse beam when this arrow is currently transmitting */}
        {isCurrent && (
          <>
            <motion.path
              d={current.curve}
              stroke="#2A7C13"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="18 30"
              animate={{ strokeDashoffset: [-48, 48] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              filter="drop-shadow(0 0 4px rgba(42,124,19,0.7))"
            />
            <motion.path
              d={current.head}
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </svg>
    </div>
  );
}

function VerticalCurlyArrow({ index, activeStep }) {
  const isPast = index < activeStep;
  const isCurrent = index === activeStep;
  return (
    <div className="flex justify-center my-1 lg:hidden">
      <svg viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-12">
        <path
          d="M 20 4 C 10 16, 8 26, 14 32 C 18 36, 27 33, 25 26 C 23 20, 12 24, 14 39 C 16 45, 19 49, 21 51"
          stroke={isPast || isCurrent ? "#2A7C13" : "#D8C6B0"}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-500"
        />
        <path
          d="M 14 45 L 21 52 L 27 45"
          stroke={isPast || isCurrent ? "#2A7C13" : "#D8C6B0"}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-500"
        />
      </svg>
    </div>
  );
}

export default function HomeView({ onBookDemo, onNavigate }) {
  // Dynamic Hand-Held Tablet Screens (Warped 4K Screens inside Bezel with Hands on Top)
  const tabletScreens = [
    { 
      id: 'overview', 
      title: 'Overview Dashboard', 
      tag: 'Executive Cockpit',
      desc: 'Real-time roadmap, attendance ratio, productivity & workforce health',
      image: '/assets/hero-tablet-overview.png',
      rawImage: '/assets/overview-dashboard-new.png'
    },
    { 
      id: 'kpi', 
      title: 'KPI & Velocity', 
      tag: 'Engineering & Delivery',
      desc: 'Team-wise rankings, target completions & sprint delivery metrics',
      image: '/assets/hero-tablet-kpi.png',
      rawImage: '/assets/kpi-dashboard-new.png'
    },
    { 
      id: 'employees', 
      title: 'Employee Directory', 
      tag: 'People Intelligence',
      desc: '360° individual profile cards, cross-system activity & sync status',
      image: '/assets/hero-tablet-attendance.png',
      rawImage: '/assets/employees-dashboard-new.png'
    }
  ];

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex((prev) => (prev + 1) % tabletScreens.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [tabletScreens.length]);

  // Step-by-Step Auto Story Sequence
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [isWorkflowHovered, setIsWorkflowHovered] = useState(false);

  useEffect(() => {
    if (isWorkflowHovered) return;
    const interval = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, [isWorkflowHovered]);



  const workflowSteps = [
    { 
      step: '01', 
      title: 'Connect', 
      tag: 'Data Ingestion',
      desc: 'PeopleOps pulls data from Worklogix, GreyHR, Biometrics, Microsoft Teams, GitHub, Planner, Calendar and SharePoint.',
      icon: Cable
    },
    { 
      step: '02', 
      title: 'Match & Validate', 
      tag: 'Identity Mesh',
      desc: 'It matches each employee across systems and flags data that is missing or not enough.',
      icon: GitMerge
    },
    { 
      step: '03', 
      title: 'Calculate', 
      tag: 'KPI Engine',
      desc: 'It applies your approved KPI definitions, weights and thresholds.',
      icon: Cpu
    },
    { 
      step: '04', 
      title: 'Review', 
      tag: 'Executive Cockpit',
      desc: 'Managers see dashboards and can drill down from an overview to the detail.',
      icon: LayoutDashboard
    },
  ];

  return (
    <div className="space-y-0 bg-[#FAF7EE] text-[#26372B] font-sans selection:bg-[#2A7C13] selection:text-[#FFF8CF]">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-[#052411] text-white border-b border-emerald-950/80">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-[#0E351D]/60 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1536px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Staggered Headline, Sub-headline & Spring Buttons */}
            <motion.div
              className="lg:col-span-5 xl:col-span-5 space-y-6 text-left z-20"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Animated Hero Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[50px] font-black text-white tracking-tight leading-[1.08] uppercase"
              >
                ONE DASHBOARD.<br />
                YOUR ENTIRE <span className="text-[#00C9A7]">WORKFORCE.</span>
              </motion.h1>

              {/* Animated Sub-headline */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-xl"
              >
                Connect attendance, daily work tools, and KPIs in one screen.<br className="hidden sm:inline" />
                Spot what needs attention and decide with total confidence.
              </motion.p>

              {/* Exact Buttons with Framer spring hover & tap */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  onClick={onBookDemo}
                  className="px-7 py-3.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-slate-950 font-extrabold text-sm rounded-xl transition-colors shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  onClick={() => onNavigate && onNavigate('features')}
                  className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Features</span>
                </motion.button>
              </motion.div>
            </motion.div>


            {/* Right Column: 4K Hand-Held Tablet with Floating Levitation & Glowing Pulse */}
            <motion.div
              className="lg:col-span-7 xl:col-span-7 flex justify-center items-center relative z-10"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-[980px] xl:max-w-[1100px] 2xl:max-w-[1220px] scale-100 sm:scale-105 lg:scale-110 origin-center flex flex-col items-center"
              >
                {/* Ambient Breathing Glow */}
                <motion.div 
                  animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.32, 0.18] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" 
                />

                {/* ══ 4K HAND-HELD TABLET SLIDESHOW CONTAINER (SEAMLESS EDGE VIGNETTE FADE) ══ */}
                <div 
                  className="relative w-full aspect-[1276/753] select-none"
                  style={{
                    maskImage: 'radial-gradient(ellipse 90% 84% at 50% 50%, black 55%, transparent 94%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 84% at 50% 50%, black 55%, transparent 94%)'
                  }}
                >
                  {/* Crossfading Hand-held Mockups */}
                  {tabletScreens.map((screen, idx) => (
                    <img
                      key={screen.id}
                      src={screen.image}
                      alt={screen.title}
                      className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-1000 ease-in-out ${
                        currentScreenIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                </div>

                {/* Subtle Slideshow Progress Dots */}
                <div className="flex items-center gap-2 mt-2 z-20">
                  {tabletScreens.map((screen, idx) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentScreenIndex(idx)}
                      aria-label={`Go to ${screen.title}`}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        currentScreenIndex === idx 
                          ? 'w-7 bg-[#00C9A7]' 
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── 3. HOW IT WORKS (4 STEPS) ── */}
      <section className="py-20 bg-[#FBE6C2]/30 border-y border-[#EBD0AF]/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-[#113309] tracking-tight uppercase">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative overflow-visible">
            {workflowSteps.map((ws, idx) => {
              const Icon = ws.icon;
              const isActive = activeWorkflowStep === idx;
              return (
                <React.Fragment key={ws.step}>
                  <motion.div
                    animate={{
                      y: isActive ? -10 : 0,
                      scale: isActive ? 1.025 : 1,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => {
                      setIsWorkflowHovered(true);
                      setActiveWorkflowStep(idx);
                    }}
                    onMouseLeave={() => setIsWorkflowHovered(false)}
                    onClick={() => setActiveWorkflowStep(idx)}
                    className={`group relative p-7 rounded-3xl bg-white flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'border-2 border-[#2A7C13] shadow-2xl shadow-emerald-950/15 ring-4 ring-[#2A7C13]/10'
                        : 'border border-[#EBD0AF] shadow-soft hover:border-[#2A7C13]/60 hover:shadow-lg'
                    }`}
                  >
                    {/* Top active gradient line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2A7C13] via-[#76C457] to-[#F59E0B] transition-opacity duration-300 rounded-t-3xl ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    />

                    {/* Card Header: Step number + Tag pill */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-3xl font-black font-mono tracking-tight transition-all duration-300 inline-block ${
                            isActive
                              ? 'text-[#2A7C13] scale-110'
                              : 'text-[#5C7063] group-hover:text-[#2A7C13]'
                          }`}
                        >
                          {ws.step}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300 shadow-sm ${
                            isActive
                              ? 'bg-[#2A7C13] text-white border-[#2A7C13] shadow-emerald-900/20'
                              : 'bg-[#FFF8CF] border-[#FBE6C2] text-[#2A7C13]'
                          }`}
                        >
                          {ws.tag}
                        </span>
                      </div>

                      {/* Icon badge with live active pulse */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                          isActive
                            ? 'bg-[#2A7C13] text-white scale-110 rotate-3 ring-4 ring-[#EAF5E7]'
                            : 'bg-[#EAF5E7] border border-[#CFE8CA] text-[#2A7C13] group-hover:scale-105'
                        }`}
                      >
                        <Icon className="w-6 h-6 transition-colors" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3
                          className={`text-lg font-black tracking-tight transition-colors duration-300 ${
                            isActive ? 'text-[#113309]' : 'text-[#26372B] group-hover:text-[#113309]'
                          }`}
                        >
                          {ws.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#3E5044] leading-relaxed font-normal">
                          {ws.desc}
                        </p>
                      </div>
                    </div>

                    {/* Subtle active stage progress indicator */}
                    <div className="mt-5 pt-3 border-t border-[#FAF7EE] flex items-center justify-between text-[11px] font-bold">
                      {isActive ? (
                        <span className="flex items-center gap-1.5 text-[#2A7C13]">
                          <span className="w-2 h-2 rounded-full bg-[#2A7C13] animate-ping" />
                          <span>Active Stage</span>
                        </span>
                      ) : (
                        <span className="text-[#889B90] group-hover:text-[#2A7C13] transition-colors">
                          Stage {ws.step}
                        </span>
                      )}
                      <span className="text-[10px] text-[#889B90] font-mono">0{idx + 1}/04</span>
                    </div>

                    {/* Curly connector arrow to next step (on desktop) */}
                    {idx < workflowSteps.length - 1 && (
                      <CurlyConnectorArrow index={idx} activeStep={activeWorkflowStep} />
                    )}
                  </motion.div>

                  {/* Vertical arrow between cards on small screens */}
                  {idx < workflowSteps.length - 1 && (
                    <VerticalCurlyArrow index={idx} activeStep={activeWorkflowStep} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>




    </div>
  );
}
