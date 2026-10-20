import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import SolutionsView from './views/SolutionsView';
import PricingView from './views/PricingView';
import FloatingLeadDrawer from './components/FloatingLeadDrawer';

/* ══════════════════════════════════════════════════
   PEOPLEOPS INTELLIGENCE — 4 CORE MODULES
   1. Overview   ➔ Product introduction, problem & 4K telemetry
   2. Features   ➔ 12 Product capability blocks & enterprise promises
   3. Solutions  ➔ Problems solved, who it's for, Hatica flow & industries
   4. Pricing    ➔ Plans, cost details, ROI calculator & demo
   ══════════════════════════════════════════════════ */
export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  /* ── Smooth Scroll Handler ── */
  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookDemo = () => scrollTo('pricing');

  /* ── Track active section as user scrolls ── */
  useEffect(() => {
    const SECTIONS = ['overview', 'features', 'solutions', 'pricing'];
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.15,
          rootMargin: '-10% 0px -40% 0px'
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#113309] font-sans selection:bg-[#2A7C13] selection:text-[#FFF8CF]">

      {/* ── Fixed Navbar with 4 Specified Links ── */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollTo}
        onBookDemo={handleBookDemo}
      />

      {/* ══ THE 4 CORE SECTIONS IN EXACT NAVBAR ORDER ══ */}
      <main>

        {/* 1. OVERVIEW — Product Introduction (Hero, 4K Tablet Mockup, Metrics) */}
        <section id="overview" className="scroll-mt-20">
          <HomeView onBookDemo={handleBookDemo} onNavigate={scrollTo} />
        </section>

        {/* 2. FEATURES — Product capabilities (12 Feature Blocks with Interactive Previews) */}
        <section id="features" className="scroll-mt-20">
          <ProductView onBookDemo={handleBookDemo} />
        </section>

        {/* 3. SOLUTIONS — Operational Solutions & Roles (Hatica Flow + Roles + Industry Matrix) */}
        <section id="solutions" className="scroll-mt-20">
          <SolutionsView onBookDemo={handleBookDemo} />
        </section>

        {/* 4. PRICING — Product plans and cost details (ROI Calculator + 3 Tiers + Demo Form) */}
        <section id="pricing" className="scroll-mt-20">
          <PricingView onBookDemo={handleBookDemo} />
        </section>

      </main>

      {/* ── Footer ── */}
      <Footer onNavigate={scrollTo} />

      {/* ── Creative Vision Floating Lead Drawer ── */}
      <FloatingLeadDrawer onBookDemo={handleBookDemo} />
    </div>
  );
}
