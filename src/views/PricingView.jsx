import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react';
import DemoFormSection from '../components/DemoFormSection';

export default function PricingView({ onBookDemo }) {
  const [billingPeriod, setBillingPeriod] = useState('annual');
  const [openFaq, setOpenFaq] = useState(null);

  const tiers = [
    {
      name: 'Growth Plan',
      tagline: 'For emerging tech firms establishing structured operations.',
      seats: 'Up to 75 Seats',
      priceAnnual: '$12',
      priceMonthly: '$15',
      features: [
        'Biometric hardware turnstile connector',
        'Microsoft Teams presence & call status',
        'Standard documented KPI bands',
        'Employee directory & status register',
        'Email & ticketing support',
      ],
      popular: false,
    },
    {
      name: 'Scale Plan',
      tagline: 'For mid-size IT, engineering & consulting teams.',
      seats: '75 to 300 Seats',
      priceAnnual: '$18',
      priceMonthly: '$22',
      features: [
        'All Growth capabilities included',
        'GitHub SDLC, commit & PR speed metrics',
        'Cross-platform automated identity matching',
        'Custom KPI weighting rules & benchmarks',
        'Dedicated onboarding engineer',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Plan',
      tagline: 'For multi-location enterprises with custom compliance.',
      seats: '300+ Seats (Unlimited)',
      priceAnnual: 'Custom',
      priceMonthly: 'Custom',
      features: [
        'All Scale capabilities included',
        'Multi-entity optical turnstile mesh',
        'Bespoke HRMS & custom ERP connectors',
        'Conversational AI "Ask Tara" assistant',
        '99.9% uptime SLA with priority hotline',
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      q: 'Do you install intrusive agents on employee laptops?',
      a: 'Zero. PeopleOps never installs desktop scrapers or keystroke loggers. Data is collected exclusively via server-to-server cloud APIs and optical turnstile event logs.'
    },
    {
      q: 'How fast is tenant deployment?',
      a: 'Cloud connectors (Teams & GitHub) configure in 30 minutes. Turnstile biometric controllers typically sync within 3 to 5 business days.'
    },
    {
      q: 'Can we customize the KPI weighting formula?',
      a: 'Yes. Department heads set approved weightings (e.g. 40% deliverables, 30% PR turnaround, 30% attendance) matching company policy.'
    }
  ];

  const scrollToDemoForm = () => {
    const el = document.getElementById('demo-reservation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-12 sm:py-14 space-y-10 sm:space-y-12 bg-[#FAF7EE] text-[#26372B] font-sans">
      
      {/* ── 1. HEADER ── */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <h1 className="text-3xl sm:text-5xl font-black text-[#113309] tracking-tight leading-tight uppercase">
          PREDICTABLE INVESTMENT TAILORED TO YOUR TEAM SIZE.
        </h1>

        <p className="text-sm sm:text-base text-[#3E5044] max-w-2xl mx-auto leading-relaxed">
          Simple per-seat plans.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center pt-2">
          <div className="bg-[#FBE6C2]/50 p-1 rounded-xl border border-[#EBD0AF] flex items-center">
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                billingPeriod === 'annual'
                  ? 'bg-[#2A7C13] text-white shadow-sm'
                  : 'text-[#3E5044] hover:text-[#113309]'
              }`}
            >
              Annual Billing <span className="text-[#FFF8CF] ml-1">(Save 20%)</span>
            </button>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                billingPeriod === 'monthly'
                  ? 'bg-[#2A7C13] text-white shadow-sm'
                  : 'text-[#3E5044] hover:text-[#113309]'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── 3. THREE PRICING TIERS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer ${
                tier.popular
                  ? 'bg-gradient-to-b from-[#FAF7EE] to-white border-2 border-[#2A7C13] shadow-xl shadow-emerald-950/10 ring-2 ring-[#2A7C13]/15'
                  : 'bg-white border border-[#EBD0AF] shadow-sm hover:border-[#2A7C13]/70 hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2A7C13] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-extrabold text-[#113309]">{tier.name}</h3>
                  <p className="text-xs text-[#5C7063] mt-0.5 leading-relaxed">{tier.tagline}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#FFF8CF] text-[#2A7C13] text-[11px] font-bold border border-[#FBE6C2]">
                    {tier.seats}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#FAF7EE]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#113309]">
                      {billingPeriod === 'annual' ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    {tier.priceAnnual !== 'Custom' && (
                      <span className="text-xs text-[#5C7063] font-medium">/ user / mo</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-[#3E5044]">
                      <Check className="w-3.5 h-3.5 text-[#2A7C13] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={scrollToDemoForm}
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    tier.popular
                      ? 'bg-[#2A7C13] hover:bg-[#20630D] text-white shadow-forest'
                      : 'bg-[#FAF7EE] hover:bg-[#FBE6C2] text-[#113309] border border-[#EBD0AF]'
                  }`}
                >
                  <span>Select {tier.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. DIRECT DEMO RESERVATION FORM ── */}
      <DemoFormSection id="demo-reservation" />

      {/* ── 5. COMPACT FAQ ACCORDION ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h3 className="text-xl font-extrabold text-[#113309] text-center">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={faq.q} className="rounded-xl bg-white border border-[#EBD0AF] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#113309]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#2A7C13] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-[#3E5044] leading-relaxed border-t border-[#FAF7EE] pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
