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

/* ── Simple, clean step connector arrow between workflow cards ── */
function SimpleConnectorArrow({ index, activeStep }) {
  const isPast = index < activeStep;
  const isCurrent = index === activeStep;

  return (
    <div className="hidden lg:flex items-center justify-center absolute -right-[20px] top-1/2 -translate-y-1/2 z-30 pointer-events-none">
      <div 
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
          isCurrent || isPast
            ? 'bg-[#2A7C13] text-white shadow-md shadow-emerald-950/20 scale-110 ring-2 ring-white'
            : 'bg-white border border-[#EBD0AF] text-[#889B90]'
        }`}
      >
        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
      </div>
    </div>
  );
}

function VerticalSimpleArrow({ index, activeStep }) {
  const isPast = index < activeStep;
  const isCurrent = index === activeStep;
  return (
    <div className="flex justify-center my-2 lg:hidden">
      <div 
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
          isCurrent || isPast
            ? 'bg-[#2A7C13] text-white'
            : 'bg-white border border-[#EBD0AF] text-[#889B90]'
        }`}
      >
        <ArrowRight className="w-3.5 h-3.5 rotate-90" strokeWidth={2.5} />
      </div>
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
      <section className="relative pt-5 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14 overflow-hidden bg-[#052411] text-white border-b border-emerald-950/80">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-[#0E351D]/60 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1536px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Staggered Headline, Sub-headline & Spring Buttons */}
            <motion.div
              className="lg:col-span-5 xl:col-span-5 space-y-6 text-left z-20 -mt-4 sm:-mt-6 lg:-mt-10 pl-2 sm:pl-6 lg:pl-10 xl:pl-14"
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

              {/* Exact Buttons with Framer spring hover & tap - ENLARGED */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  onClick={onBookDemo}
                  className="px-8 sm:px-9 py-4 sm:py-4.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-slate-950 font-black text-base sm:text-[17px] rounded-2xl transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  onClick={() => onNavigate && onNavigate('features')}
                  className="px-7 sm:px-8 py-4 sm:py-4.5 bg-white/10 hover:bg-white/20 text-white font-extrabold text-base rounded-2xl border border-white/25 transition-all flex items-center gap-2 cursor-pointer"
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

              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── 3. HOW IT WORKS (4 STEPS) ── */}
      <section className="py-12 sm:py-14 bg-[#FBE6C2]/30 border-y border-[#EBD0AF]/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
                        ? 'border-2 border-[#2A7C13] shadow-xl shadow-emerald-950/10'
                        : 'border border-[#EBD0AF] shadow-soft hover:border-[#2A7C13]/60 hover:shadow-md'
                    }`}
                  >
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

                    {/* Simple connector arrow to next step (on desktop) */}
                    {idx < workflowSteps.length - 1 && (
                      <SimpleConnectorArrow index={idx} activeStep={activeWorkflowStep} />
                    )}
                  </motion.div>

                  {/* Vertical arrow between cards on small screens */}
                  {idx < workflowSteps.length - 1 && (
                    <VerticalSimpleArrow index={idx} activeStep={activeWorkflowStep} />
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
