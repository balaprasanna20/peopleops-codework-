import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Lock,
  ArrowRight,
  Sparkles,
  User,
  Mail,
  Building2,
  Users,
  ShieldCheck,
  ChevronDown,
  Star,
  Zap,
  Check
} from 'lucide-react';

const TEAM_SIZES = ['10 - 50', '50 - 200', '200 - 500', '500+'];

const TOOLS = [
  'Microsoft Teams',
  'GitHub',
  'Jira / Linear',
  'Turnstiles / GreytHR'
];

export default function DemoFormSection({ id = "demo-form" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '50 - 200',
    selectedTools: ['Microsoft Teams', 'GitHub'],
    message: ''
  });

  const [showMore, setShowMore] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToolToggle = (tool) => {
    setFormData(prev => ({
      ...prev,
      selectedTools: prev.selectedTools.includes(tool)
        ? prev.selectedTools.filter(t => t !== tool)
        : [...prev.selectedTools, tool]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id={id} className="py-24 relative bg-[#FAF7EE] border-t border-[#EBD0AF] overflow-hidden">
      
      {/* ══ EXACT PEOPLEOPS LOGO CONTINUOUS RUNNING BACKGROUND ANIMATION ══ */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden flex whitespace-nowrap"
      >
        <motion.div 
          className="flex gap-12 sm:gap-20 items-center shrink-0 min-w-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 25, 
            ease: 'linear', 
            repeat: Infinity 
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 sm:gap-20 shrink-0">
              <img
                src="/assets/peopleops-logo.png"
                alt="PeopleOps Logo"
                className="h-28 sm:h-44 md:h-52 lg:h-64 w-auto object-contain select-none pointer-events-none opacity-30 filter contrast-125 brightness-90"
              />
              <span className="text-3xl sm:text-5xl text-[#2A7C13]/40 font-black select-none">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-[#113309] tracking-tight uppercase">
            SEE PEOPLEOPS IN ACTION WITH YOUR TEAM'S STACK
          </h2>
          <p className="text-sm sm:text-base text-[#3E5044] leading-relaxed">
            No aggressive sales pitches. A personalized 1-on-1 walkthrough showing how your actual tools connect into real-time operational clarity.
          </p>
        </div>

        {/* ══ CENTERED FOCUSED HIGH-CONVERTING CARD (Foreground Z-10) ══ */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-[#EBD0AF] shadow-[0_25px_60px_rgba(42,124,19,0.1)] relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="lead-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="border-b border-[#EBD0AF]/60 pb-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-[#113309]">
                        Reserve Your 1-on-1 Walkthrough
                      </h3>
                      <p className="text-xs text-[#52665B]">
                        Takes less than 45 seconds to submit
                      </p>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EAF5E7] text-[#2A7C13] border border-[#CEEBDC]">
                      Instant Booking
                    </span>
                  </div>

                  {/* Field 1: Work Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#113309] flex items-center justify-between">
                      <span>Work Email Address *</span>
                      {formData.email.includes('@') && formData.email.includes('.') && (
                        <span className="text-[10px] text-[#2A7C13] font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Valid email
                        </span>
                      )}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#889B90] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        required
                        type="email"
                        placeholder="e.g. eleanor.vance@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl pl-10 pr-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] font-medium focus:outline-none focus:border-[#2A7C13] focus:ring-2 focus:ring-[#2A7C13]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Fields 2 & 3: Full Name + Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#113309]">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#889B90] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Eleanor Vance"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl pl-10 pr-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] font-medium focus:outline-none focus:border-[#2A7C13] focus:ring-2 focus:ring-[#2A7C13]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#113309]">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-[#889B90] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Apex Software Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl pl-10 pr-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] font-medium focus:outline-none focus:border-[#2A7C13] focus:ring-2 focus:ring-[#2A7C13]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quick-Pill Team Size Selector (1-Tap Selection) */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-bold text-[#113309] block">
                      Team Size (Employees)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {TEAM_SIZES.map((size) => {
                        const isSelected = formData.teamSize === size;
                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setFormData({ ...formData, teamSize: size })}
                            className={`py-2 px-1 text-center rounded-xl text-xs font-extrabold transition-all border ${
                              isSelected
                                ? 'bg-[#113309] text-white border-[#113309] shadow-sm scale-[1.02]'
                                : 'bg-[#FAF9F5] text-[#3E5044] border-[#E7DFD0] hover:border-[#2A7C13]/50 hover:bg-white'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Expandable Optional Details (Collapsed by default) */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowMore(!showMore)}
                      className="text-xs font-bold text-[#2A7C13] hover:text-[#113309] flex items-center gap-1.5 transition-colors py-1 outline-none"
                    >
                      <span>{showMore ? '− Hide additional options' : '+ Add workplace tools or notes (Optional)'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showMore ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {showMore && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3 pt-3 overflow-hidden"
                        >
                          {/* Workplace Tools Pills */}
                          <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#52665B] block">
                              Tools you use:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {TOOLS.map((tool) => {
                                const isChecked = formData.selectedTools.includes(tool);
                                return (
                                  <button
                                    key={tool}
                                    type="button"
                                    onClick={() => handleToolToggle(tool)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                                      isChecked
                                        ? 'bg-[#EAF5E7] text-[#113309] border-[#2A7C13]'
                                        : 'bg-[#FAF9F5] text-[#62756A] border-[#E7DFD0]'
                                    }`}
                                  >
                                    {isChecked && <Check className="w-3 h-3 text-[#2A7C13]" />}
                                    <span>{tool}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Optional note */}
                          <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#52665B] block">
                              Any specific questions or blockers?
                            </span>
                            <input
                              type="text"
                              placeholder="e.g. Integrating on-prem turnstiles with hybrid Teams schedules"
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-3.5 py-2 text-xs text-[#081D15] placeholder-[#889B90] focus:outline-none focus:border-[#2A7C13]"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* High-Impact CTA Button */}
                  <div className="pt-2 space-y-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-black text-base shadow-[0_10px_25px_rgba(245,158,11,0.35)] border border-amber-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Securing Your Slot...</span>
                        </div>
                      ) : (
                        <>
                          <span>Confirm My 20-Min Product Tour</span>
                          <ArrowRight className="w-5 h-5 text-black stroke-[2.5]" />
                        </>
                      )}
                    </motion.button>

                  </div>
                </motion.form>
              ) : (
                /* ══ WOW CONFIRMATION STATE ══ */
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#EAF5E7] text-[#2A7C13] border-2 border-[#2A7C13] flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase font-black tracking-wider text-[#2A7C13] bg-[#FFF8CF] px-3 py-1 rounded-full border border-[#FBE6C2]">
                      Slot Reserved Successfully 🎉
                    </span>
                    <h3 className="text-2xl font-black text-[#113309] pt-2">
                      You're Booked, {formData.fullName.split(' ')[0]}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#43564C] max-w-md mx-auto leading-relaxed">
                      We’ve sent calendar invite options and direct join link to <strong className="text-[#113309]">{formData.email}</strong>.
                    </p>
                  </div>

                  {/* Booking Details Card */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E7DFD0] max-w-sm mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between text-[#52665B]">
                      <span>Company:</span>
                      <strong className="text-[#113309]">{formData.company}</strong>
                    </div>
                    <div className="flex justify-between text-[#52665B]">
                      <span>Team Scope:</span>
                      <strong className="text-[#113309]">{formData.teamSize} Employees</strong>
                    </div>
                    <div className="flex justify-between text-[#52665B]">
                      <span>Session Length:</span>
                      <strong className="text-[#2A7C13]">20 Mins (Live Cockpit Tour)</strong>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=PeopleOps+Intelligence+Demo+Walkthrough&details=20-minute+personalized+telemetry+walkthrough+for+${encodeURIComponent(formData.company)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#113309] text-white font-extrabold text-xs shadow-md hover:bg-[#1a4a10] transition-colors"
                    >
                      📅 Add to Google Calendar
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-[#F4EFE6] hover:bg-[#E7DFD0] text-xs font-bold text-[#113309] transition-colors"
                    >
                      Book for Another Team
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
