import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Lock,
  ArrowRight
} from 'lucide-react';

export default function DemoFormSection({ id = "demo-form" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    companySize: '100 - 249',
    country: 'United Kingdom',
    systems: {
      teams: true,
      github: true,
      hr: false,
      planner: false,
    },
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company) return;
    setSubmitted(true);
  };

  const handleSystemToggle = (key) => {
    setFormData(prev => ({
      ...prev,
      systems: {
        ...prev.systems,
        [key]: !prev.systems[key]
      }
    }));
  };

  return (
    <section id={id} className="py-24 relative bg-[#FAF7EE] border-t border-[#EBD0AF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8CF] border border-[#FBE6C2] text-[#2A7C13] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#2A7C13]" />
            <span>Interactive Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#113309] tracking-tight">
            See how PeopleOps brings clarity to your workforce operations.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3E5044]">
            Book a personalized 20-minute demonstration with our product specialists. We’ll show you how PeopleOps connects with your existing stack and structures operational data for your leadership team.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EBD0AF] shadow-card relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#081D15]">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] focus:outline-none focus:border-[#1F7E54] focus:ring-1 focus:ring-[#1F7E54] transition-colors"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#081D15]">
                      Business Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. eleanor.vance@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] focus:outline-none focus:border-[#1F7E54] focus:ring-1 focus:ring-[#1F7E54] transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#081D15]">
                      Company / Organization Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Software Solutions Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] focus:outline-none focus:border-[#1F7E54] focus:ring-1 focus:ring-[#1F7E54] transition-colors"
                    />
                  </div>

                  {/* Role / Job Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#081D15]">
                      Job Role / Title *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Chief Technology Officer / Head of HR"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] focus:outline-none focus:border-[#1F7E54] focus:ring-1 focus:ring-[#1F7E54] transition-colors"
                    />
                  </div>

                  {/* Company Size */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#081D15]">
                      Company Size (Employees) *
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-4 py-3 text-sm text-[#081D15] focus:outline-none focus:border-[#1F7E54] focus:ring-1 focus:ring-[#1F7E54] transition-colors"
                    >
                      <option value="50 - 99">50 to 99 employees</option>
                      <option value="100 - 249">100 to 249 employees</option>
                      <option value="250 - 500">250 to 500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>

                  {/* Country / Region */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#081D15]">
                      Primary Market / Region *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-4 py-3 text-sm text-[#081D15] focus:outline-none focus:border-[#1F7E54] focus:ring-1 focus:ring-[#1F7E54] transition-colors"
                    >
                      <option value="United Kingdom">United Kingdom (Primary Market)</option>
                      <option value="United States">United States (Secondary Market)</option>
                      <option value="Other">Other International</option>
                    </select>
                  </div>
                </div>

                {/* Connected Systems Checkboxes */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-[#081D15] block">
                    Which workplace systems do you currently use? (Optional)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#2D3E35]">
                    <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E7DFD0] cursor-pointer hover:border-[#CEEBDC]">
                      <input 
                        type="checkbox" 
                        checked={formData.systems.teams}
                        onChange={() => handleSystemToggle('teams')}
                        className="rounded text-[#0F3325] focus:ring-0 accent-[#0F3325]" 
                      />
                      <span>Microsoft Teams / 365</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E7DFD0] cursor-pointer hover:border-[#CEEBDC]">
                      <input 
                        type="checkbox" 
                        checked={formData.systems.github}
                        onChange={() => handleSystemToggle('github')}
                        className="rounded text-[#0F3325] focus:ring-0 accent-[#0F3325]" 
                      />
                      <span>GitHub Repositories</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E7DFD0] cursor-pointer hover:border-[#CEEBDC]">
                      <input 
                        type="checkbox" 
                        checked={formData.systems.hr}
                        onChange={() => handleSystemToggle('hr')}
                        className="rounded text-[#0F3325] focus:ring-0 accent-[#0F3325]" 
                      />
                      <span>GreytHR / Biometrics</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E7DFD0] cursor-pointer hover:border-[#CEEBDC]">
                      <input 
                        type="checkbox" 
                        checked={formData.systems.planner}
                        onChange={() => handleSystemToggle('planner')}
                        className="rounded text-[#0F3325] focus:ring-0 accent-[#0F3325]" 
                      />
                      <span>Planner / Worklogix</span>
                    </label>
                  </div>
                </div>

                {/* Optional Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#081D15]">
                    Specific Operational Focus or Questions (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your team size, key blockers, or integration environment..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#E7DFD0] rounded-xl px-4 py-3 text-sm text-[#081D15] placeholder-[#889B90] focus:outline-none focus:border-[#1F7E54] focus:ring-1 focus:ring-[#1F7E54] transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button & Trust Reassurance */}
                <div className="pt-2 space-y-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0F3325] hover:bg-[#19583D] text-[#FAF9F5] font-bold text-base shadow-forest hover:shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <span>Schedule My Live Product Walkthrough</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#62756A] gap-2 px-2">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#1F7E54]" />
                      <span>20-minute consultative session. No aggressive sales calls.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-[#1F7E54]" />
                      <span>Zero spam. Data used solely to schedule your walkthrough.</span>
                    </div>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#E8F5EE] text-[#1F7E54] border border-[#CEEBDC] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#081D15]">
                  Demo Walkthrough Requested!
                </h3>
                <p className="text-[#43564C] max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-[#081D15]">{formData.fullName}</strong>. A PeopleOps solutions specialist has received your profile for <strong className="text-[#081D15]">{formData.company}</strong> and will follow up within one business day with calendar options.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#F4EFE6] hover:bg-[#E7DFD0] text-xs font-semibold text-[#0F3325] border border-[#E7DFD0] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
