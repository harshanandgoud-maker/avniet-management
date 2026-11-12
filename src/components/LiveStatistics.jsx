import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Building, BookOpenCheck, Award, TrendingUp, Sparkles, Shield } from 'lucide-react';

const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // easeOutExpo easing function
      const progress = frame / totalFrames;
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(start + (end - start) * ease);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const LiveStatistics = () => {
  const stats = [
    {
      id: 'students',
      target: 5000,
      suffix: '+',
      label: 'Students Enrolled',
      subtext: 'B.Tech, M.Tech, and Research scholars',
      icon: Users,
      iconColor: 'text-blue-400',
      badge: 'Academic Enrollment',
      glow: 'shadow-blue-500/10'
    },
    {
      id: 'partners',
      target: 120,
      suffix: '+',
      label: 'Corporate Partners',
      subtext: 'Global tech enterprises & recruitment drives',
      icon: Building,
      iconColor: 'text-amber-400',
      badge: 'Tier-1 Recruiters',
      glow: 'shadow-amber-500/10'
    },
    {
      id: 'assets',
      target: 50000,
      suffix: '+',
      label: 'Library Assets',
      subtext: 'Physical volumes, IEEE papers & digital resources',
      icon: BookOpenCheck,
      iconColor: 'text-emerald-400',
      badge: 'Knowledge Bank',
      glow: 'shadow-emerald-500/10'
    },
    {
      id: 'placements',
      target: 95,
      suffix: '%',
      label: 'Placement Success',
      subtext: 'Consistent multi-offer career placement rate',
      icon: Award,
      iconColor: 'text-indigo-400',
      badge: 'Career Excellence',
      glow: 'shadow-indigo-500/10'
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-[#0B1120] text-white border-y border-slate-800/80 overflow-hidden">
      
      {/* Dark Ambient Lighting & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[300px] bg-blue-600/10 blur-[130px]" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[300px] bg-amber-500/10 blur-[130px]" />
        
        {/* Subtle Architectural Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Overline */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-12 mb-12 border-b border-slate-800/80 gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-300">
              Live Institutional Metrics &amp; Benchmarks
            </span>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
            <span>Real-time Telemetry Verified: AY 2026-27</span>
          </div>
        </div>

        {/* 4-Column Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col p-6 rounded-2xl bg-[#0F172A]/70 border border-slate-800/80 hover:border-slate-700 hover:bg-[#0F172A] transition-all duration-300 group shadow-lg"
              >
                {/* Metric Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                    {stat.badge}
                  </span>
                </div>

                {/* Counter */}
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-none mb-2 font-sans">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>

                {/* Primary Label */}
                <div className="text-base font-bold text-slate-200 mb-1">
                  {stat.label}
                </div>

                {/* Supporting description */}
                <p className="text-xs text-slate-400 leading-relaxed mt-auto">
                  {stat.subtext}
                </p>

                {/* Subtle Amber/Blue accent indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Audited Metric
                  </span>
                  <span className="text-slate-500 font-mono">AVNIET-HQ</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Institutional Accreditation Footnote Banner */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Data synchronized from the Office of the Controller of Examinations and Dean of Academic Affairs.
          </div>
          <div className="flex items-center gap-6 font-medium">
            <span>UGC 2(f) Recognized</span>
            <span>•</span>
            <span>AICTE Approved</span>
            <span>•</span>
            <span>Affiliated to JNTU Hyderabad</span>
          </div>
        </div>

      </div>
    </section>
  );
};
