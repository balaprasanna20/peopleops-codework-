import React from 'react';
import { Layers, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#FBE6C2]/30 border-t border-[#EBD0AF] text-[#3E5044] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/peopleops-logo.png" 
                alt="PeopleOps Logo" 
                className="h-8 w-auto object-contain cursor-pointer" 
                onClick={() => onNavigate('overview')}
              />
            </div>

            <p className="text-xs text-[#3E5044] leading-relaxed max-w-sm">
              Workforce intelligence and operational analytics built for growing IT services, software development, and consulting firms (50–500 employees). Developed by Codework.
            </p>

            {/* High-Converting Action CTAs (Replacing UK/US text) */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => onNavigate('pricing')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold text-xs shadow-sm transition-all active:scale-95 cursor-pointer border border-amber-600/30"
              >
                <span>Book a 20-Min Demo</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <button
                onClick={() => onNavigate('features')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#FAF9F5] text-[#113309] border border-[#EBD0AF] font-bold text-xs transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <span>Explore Features</span>
              </button>
            </div>
          </div>

          {/* Col 2: Product & Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#081D15] uppercase tracking-wider">
              Product & Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  Overview & Telemetry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  12 Product Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  Hardware & Turnstile Sync
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  "Ask Tara" AI Assistant
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  ROI & Cost Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Operational Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#081D15] uppercase tracking-wider">
              Operational Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  Before vs After Slider
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  6 Target Role Cockpits
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  Supported Industries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-[#113309] hover:font-semibold transition-all text-left">
                  Pricing Plans & Tiers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-[#113309] hover:font-semibold transition-all text-left font-bold text-[#2A7C13]">
                  Book a 20-min Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Security & Ethics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#081D15] uppercase tracking-wider">
              Security & Ethics
            </h4>
            <div className="space-y-2 text-[11px] text-[#43564C]">
              <p className="flex items-center gap-1.5 text-[#176443] font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F7E54]" />
                Zero Spyware Guarantee
              </p>
              <p>100% Explainable KPI Math</p>
              <p>Read-Only Cloud API Access</p>
              <p>Human Decision Support Only</p>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-[#E7DFD0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#62756A]">
          <div>
            © {new Date().getFullYear()} Codework. All rights reserved. PeopleOps™ is a trademark of Codework.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-[#081D15] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#081D15] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#081D15] cursor-pointer">Data Processing Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
