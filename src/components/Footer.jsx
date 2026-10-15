import React from 'react';
import { Layers, ShieldCheck } from 'lucide-react';

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
                className="h-8 w-auto object-contain" 
              />
            </div>

            <p className="text-xs text-[#3E5044] leading-relaxed max-w-sm">
              Workforce intelligence and operational analytics built for growing IT services, software development, and consulting firms (50–500 employees). Developed by Codework.
            </p>

            <div className="pt-2 text-[11px] text-[#5C7063] space-y-1">
              <p>Primary Market: <strong className="text-[#113309]">United Kingdom (UK)</strong></p>
              <p>Secondary Market: <strong className="text-[#113309]">United States (USA)</strong></p>
            </div>
          </div>

          {/* Col 2: Solutions & Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#081D15] uppercase tracking-wider">
              Product & Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-[#0F3325] transition-colors">
                  Overview & Telemetry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-[#0F3325] transition-colors">
                  Product Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-[#0F3325] transition-colors">
                  Attendance & Biometrics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#0F3325] transition-colors">
                  Ecosystem Integrations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-[#0F3325] transition-colors">
                  "Ask Tara" AI Assistant
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#081D15] uppercase tracking-wider">
              Company & Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#0F3325] transition-colors">
                  Role-Based Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#0F3325] transition-colors">
                  Problems We Solve
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#0F3325] transition-colors">
                  Ethical Governance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-[#0F3325] transition-colors">
                  Pricing & ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-[#0F3325] transition-colors">
                  Book a 20-min Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#081D15] uppercase tracking-wider">
              Governance & Policies
            </h4>
            <div className="space-y-2 text-[11px] text-[#43564C]">
              <p className="flex items-center gap-1.5 text-[#176443] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F7E54]" />
                Role-Based Access Control
              </p>
              <p>Audit Logged Administrative Access</p>
              <p>Zero Keystroke / Screen Tracking</p>
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
