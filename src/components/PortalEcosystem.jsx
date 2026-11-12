import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  FileText, 
  Users2, 
  Building2,
  Database,
  BarChart3,
  Calendar,
  Lock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const PortalEcosystem = ({ onOpenLogin }) => {
  const [activeModule, setActiveModule] = useState(null);

  const pillars = [
    {
      id: 'library',
      title: 'Library Administration',
      subtitle: 'Knowledge Asset Management',
      description: 'Real-time tracking of inventory, borrowing metrics, and required assets.',
      icon: BookOpen,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      badge: 'RFID Integrated',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      gradientBorder: 'hover:from-blue-600 hover:via-indigo-500 hover:to-amber-500',
      features: [
        'Automated RFID check-in & check-out logs',
        'Real-time physical inventory & digital e-book synchronization',
        'Automated return reminders & fine management engine',
        'IEEE, Elsevier, & Springer journals digital repository'
      ],
      stats: [
        { label: 'Cataloged Titles', value: '50,000+' },
        { label: 'Daily Circulations', value: '1,450+' },
        { label: 'E-Journal Access', value: '10,000+' }
      ],
      previewSnippet: {
        title: 'Central Library OPAC Status',
        metric1: 'Current Books Checked Out: 4,120',
        metric2: 'Digital Resources Active: 12,890 sessions'
      }
    },
    {
      id: 'placement',
      title: 'Placement Cell',
      subtitle: 'Corporate Recruitment & Career Hub',
      description: 'Monitor student placements, upcoming recruitment drives, and corporate partnerships.',
      icon: Briefcase,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      badge: 'Industry Connect',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      gradientBorder: 'hover:from-amber-500 hover:via-orange-500 hover:to-blue-600',
      features: [
        'End-to-end recruitment drive workflow scheduling',
        'Automated candidate eligibility filtering by CGPA & skills',
        'Corporate partner platform for slot booking and tests',
        'Instant digital offer letter tracking & acceptance analytics'
      ],
      stats: [
        { label: 'Peak Package', value: '₹18.5 LPA' },
        { label: 'Corporate Partners', value: '120+' },
        { label: 'Offers Released (AY 25-26)', value: '680+' }
      ],
      previewSnippet: {
        title: 'Active Recruitment Drives',
        metric1: 'Upcoming On-Campus Drives: 8 Companies',
        metric2: 'Shortlisted Engineering Candidates: 412'
      }
    },
    {
      id: 'management',
      title: 'Executive Management',
      subtitle: 'Institutional Governance & Business Intelligence',
      description: 'High-privilege oversight of institutional data, student enrollment, and financial metrics.',
      icon: ShieldCheck,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      badge: 'Executive Clearance',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      gradientBorder: 'hover:from-indigo-600 hover:via-blue-600 hover:to-amber-500',
      features: [
        'Single-pane real-time institutional KPI & BI dashboards',
        'Student enrollment lifecycle, demographics & branch analytics',
        'Tuition fee reconciliation & financial audits tracking',
        'NAAC, NBA, and AICTE compliance reports generation'
      ],
      stats: [
        { label: 'Active Students', value: '5,000+' },
        { label: 'Faculty & Staff', value: '350+' },
        { label: 'Compliance Index', value: '100%' }
      ],
      previewSnippet: {
        title: 'Institutional Overview',
        metric1: 'Campus Attendance Rate: 91.2%',
        metric2: 'Financial Audit Readiness: Verified'
      }
    }
  ];

  return (
    <section id="pillars" className="relative py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden">
      
      {/* Background Decorative Mesh & Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Core Institutional Pillars</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mb-5 font-sans">
            Integrated Campus Management
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Our enterprise digital infrastructure orchestrates academic excellence through three unified, mission-critical modules.
          </p>
        </div>

        {/* The 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-8 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Subtle Hover Border Gradient Wrapper */}
                <div 
                  className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-blue-600 group-hover:via-indigo-500 group-hover:to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Card Top / Header */}
                <div className="relative z-10">
                  
                  {/* Top Meta: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${pillar.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                      <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Pillar Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#1D4ED8] transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    {pillar.subtitle}
                  </div>

                  {/* Core Copy */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {pillar.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Bottom: Stats + Action Button */}
                <div className="relative z-10 pt-5 border-t border-slate-100 mt-auto">
                  
                  {/* Key Metrics row */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50/80 rounded-xl p-3 border border-slate-100 mb-5">
                    {pillar.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="text-sm sm:text-base font-extrabold text-[#0F172A]">{stat.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium truncate">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Button */}
                  <button
                    onClick={() => onOpenLogin()}
                    type="button"
                    className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-[#F59E0B] hover:text-slate-950 rounded-xl transition-all duration-200 group/btn"
                  >
                    <span>Launch {pillar.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover/btn:text-slate-950 group-hover/btn:translate-x-1 transition-all duration-200" />
                  </button>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Integration Summary Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Single Unified Institutional Database
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                All records, student credentials, and transactional metrics sync across Library, Placement, and Governance nodes with sub-second latency.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenLogin}
            className="flex-shrink-0 px-5 py-2.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
          >
            Review Security Protocols →
          </button>
        </div>

      </div>
    </section>
  );
};
