import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Shield, Sparkles, Quote, Lock } from 'lucide-react';
import SecurityGraphic from './SecurityGraphic';

export const BrandVisualSide = () => {
  return (
    <div className="relative w-full lg:w-1/2 min-h-[560px] lg:min-h-screen bg-[#0F172A] text-white flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
      {/* Background patterns and glowing gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,58,138,0.35),rgba(15,23,42,1))] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #0F172A 1px)`,
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px'
        }}
      />
      
      {/* Ambient gradient blobbies */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-indigo-600/15 blur-[90px] pointer-events-none" />

      {/* Top Header: AVNIET Institutional Identity */}
      <motion.div 
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-start gap-4"
      >
        {/* Emblem Crest */}
        <div className="relative flex-shrink-0">
          <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-xl shadow-blue-900/30">
            <div className="w-full h-full bg-[#0F172A] rounded-[14px] flex items-center justify-center p-2.5">
              <div className="relative flex flex-col items-center justify-center text-center">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                <span className="text-[8px] font-black tracking-widest text-white uppercase mt-0.5">AVNIET</span>
              </div>
            </div>
          </div>
          {/* Status Indicator */}
          <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 border-2 border-[#0F172A]"></span>
          </span>
        </div>

        {/* Institution Titles */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300">
              UGC AUTONOMOUS
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 flex items-center gap-1">
              <Award className="w-2.5 h-2.5" /> NAAC A+
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-1.5 leading-snug">
            AVN Institute of Engineering & Technology
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
            Internal Operations & Governance Ecosystem
          </p>
        </div>
      </motion.div>

      {/* Middle Centerpiece: Abstract Security Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 my-8 lg:my-6 flex flex-col items-center justify-center"
      >
        <SecurityGraphic />
      </motion.div>

      {/* Bottom Section: Inspiring Academic Quote & Institutional Trust Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 flex flex-col gap-5"
      >
        {/* Inspiring Academic Quote Card */}
        <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-800/40 border border-slate-800 backdrop-blur-md shadow-xl">
          <div className="absolute -top-3 left-6 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 flex items-center gap-1 text-amber-400 text-[11px] font-semibold tracking-wider uppercase">
            <Quote className="w-3 h-3 fill-amber-400/20" /> Academic Philosophy
          </div>
          <blockquote className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed italic font-normal">
            &ldquo;Empowering inquisitive minds through technological ingenuity, instilling unwavering academic integrity, and sculpting tomorrow's engineering leaders who architect the digital frontier.&rdquo;
          </blockquote>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-[10px]">
                DR
              </div>
              <div>
                <p className="text-white font-semibold text-xs leading-none">Office of Academic Dean & Directorate</p>
                <p className="text-[11px] text-slate-400 mt-0.5">AVNIET Institutional Governance</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-amber-400/90 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Est. 2009</span>
            </div>
          </div>
        </div>

        {/* Security & Accreditation Micro-Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>256-Bit SSL Enforced</span>
            </span>
            <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Zero-Trust Protocol</span>
            </span>
          </div>
          <div className="text-slate-500 font-mono text-[10px]">
            SYSTEM v4.2.9 • INTERNAL GATEWAY
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandVisualSide;
