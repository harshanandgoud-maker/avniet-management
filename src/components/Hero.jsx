import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Bell, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Activity, 
  Users, 
  BookOpen, 
  Briefcase,
  Lock,
  ChevronRight
} from 'lucide-react';

export const Hero = ({ onOpenLogin, onScrollToUpdates }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-[#0F172A] pt-12 pb-24 sm:pt-16 sm:pb-32 px-4 sm:px-6 lg:px-8">
      
      {/* 1. Subtle Animated Abstract Background (Slow-moving SVG mesh & ambient glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Radial Lights */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full bg-indigo-700/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 -right-48 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
        
        {/* Subtle Engineering Matrix Dots */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 70% 65% at 50% 40%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 50% 40%, black 30%, transparent 80%)'
          }}
        />

        {/* Slow-moving SVG Mesh / Geometric Lattice */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-20 animate-mesh"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="meshGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="meshGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Curving structural mesh vectors */}
          <path 
            d="M-100,200 C300,100 500,450 900,250 C1200,100 1350,350 1600,200" 
            fill="none" 
            stroke="url(#meshGradient1)" 
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path 
            d="M-50,450 C350,300 650,600 1000,400 C1300,250 1450,550 1650,450" 
            fill="none" 
            stroke="url(#meshGradient2)" 
            strokeWidth="1.2"
          />
          <path 
            d="M-100,650 C200,550 500,800 950,600 C1300,450 1450,750 1600,680" 
            fill="none" 
            stroke="url(#meshGradient1)" 
            strokeWidth="1"
            strokeDasharray="6 8"
          />

          {/* Floating node points */}
          <circle cx="300" cy="220" r="3" fill="#60A5FA" opacity="0.6" />
          <circle cx="700" cy="380" r="4" fill="#F59E0B" opacity="0.7" />
          <circle cx="1050" cy="280" r="3.5" fill="#93C5FD" opacity="0.5" />
          <circle cx="520" cy="530" r="3" fill="#38BDF8" opacity="0.6" />
          <circle cx="1200" cy="480" r="4" fill="#FBBF24" opacity="0.5" />
        </svg>
      </div>

      {/* 2. Main Centered Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Institutional Accreditation Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-300 shadow-inner mb-6 sm:mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-amber-400 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
            Official Institutional Gateway
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 hidden sm:inline">NAAC Accredited &amp; JNTUH Affiliated</span>
          <span className="text-slate-300 sm:hidden">AY 2026-27</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-white tracking-tight leading-[1.08] sm:leading-[1.06] mb-6 sm:mb-8 font-sans max-w-4xl"
        >
          Empowering Educational{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300 bg-clip-text text-transparent">
            Excellence
          </span>{' '}
          at AVNIET.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 font-sans"
        >
          The centralized hub for seamless management, placement tracking, and library administration.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onOpenLogin}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-[#F59E0B] hover:bg-[#FBBF24] rounded-xl shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-amber-500/30"
          >
            <span>Access Management</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onScrollToUpdates}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/90 rounded-xl shadow-lg hover:shadow-xl hover:border-slate-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-sm group focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            <Bell className="w-4 h-4 text-blue-400 group-hover:text-amber-400 transition-colors" />
            <span>View Campus Updates</span>
          </button>
        </motion.div>

        {/* Security & Reliability Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-400 font-medium"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Enterprise 256-Bit SSL Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>99.98% High Availability Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>Institutional SSO Active</span>
          </div>
        </motion.div>

      </div>

      {/* 3. Hero Visual Preview Mockup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-16 sm:mt-20 px-2 sm:px-4"
      >
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-700/60 to-slate-900/80 p-1 sm:p-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl border border-slate-700/60">
          
          {/* Mockup Top Window Chrome Bar */}
          <div className="bg-[#0b1120] rounded-t-xl px-4 py-3 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
                https://manage.avniet.ac.in/dashboard/unified-console
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Live Connected
              </span>
            </div>
          </div>

          {/* Mockup Dashboard Content Grid */}
          <div className="bg-[#0F172A] rounded-b-xl p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Pillar 1 preview chip */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Library Sync</span>
                  <BookOpen className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-black text-white">52,410</div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <span className="text-emerald-400 font-semibold">99.4%</span>
                  <span>Assets in Digital Index</span>
                </div>
              </div>

              {/* Pillar 2 preview chip */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Placement Hub</span>
                  <Briefcase className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-black text-white">120+ Recruiter Visits</div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <span className="text-amber-400 font-semibold">14 Drives</span>
                  <span>Active this semester</span>
                </div>
              </div>

              {/* Pillar 3 preview chip */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Executive Governance</span>
                  <Activity className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-2xl font-black text-white">5,000+ Profiles</div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <span className="text-blue-400 font-semibold">100%</span>
                  <span>Automated Compliance</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
};
