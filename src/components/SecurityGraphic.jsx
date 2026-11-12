import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, KeyRound, Lock, Activity, Network } from 'lucide-react';

export const SecurityGraphic = () => {
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-radial from-blue-600/20 via-indigo-900/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-amber-500/10 blur-2xl top-10 right-10 pointer-events-none" />
      <div className="absolute w-56 h-56 rounded-full bg-cyan-500/10 blur-2xl bottom-10 left-10 pointer-events-none" />

      {/* SVG Decorative Grid & Orbitals */}
      <svg
        className="absolute inset-0 w-full h-full text-slate-700/40"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        {/* Outer concentric rings */}
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="opacity-30" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" className="opacity-40" />
        <circle cx="200" cy="200" r="100" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="6 6" />

        {/* Crosshair telemetry lines */}
        <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-25" />
        <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-25" />

        {/* Diagonal node lines */}
        <line x1="70" y1="70" x2="140" y2="140" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 4" className="opacity-40" />
        <line x1="330" y1="70" x2="260" y2="140" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 4" className="opacity-40" />
        <line x1="70" y1="330" x2="140" y2="260" stroke="#818CF8" strokeWidth="1" strokeDasharray="2 4" className="opacity-40" />
        <line x1="330" y1="330" x2="260" y2="260" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 4" className="opacity-40" />
      </svg>

      {/* Rotating Ring 1 - Clockwise */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-blue-400/25 pointer-events-none"
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" />
      </motion.div>

      {/* Rotating Ring 2 - Counter-Clockwise */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[210px] h-[210px] rounded-full border border-blue-500/30 pointer-events-none"
      >
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_14px_#3b82f6] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_#f59e0b]" />
      </motion.div>

      {/* Central Security Core Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-44 h-44 rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-950/95 border border-blue-500/30 backdrop-blur-xl p-4 flex flex-col items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(29,78,216,0.25)] group"
      >
        {/* Core glow ring */}
        <div className="relative mb-3">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md animate-pulse" />
          <div className="relative w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 flex items-center justify-center shadow-lg">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[11px] font-bold tracking-widest text-slate-200 uppercase flex items-center justify-center gap-1">
            <Lock className="w-3 h-3 text-cyan-400 inline" />
            AVNIET VAULT
          </p>
          <p className="text-[10px] text-blue-300 font-mono tracking-tight mt-0.5">
            AES-256 • ZERO-TRUST
          </p>
        </div>

        {/* Status Pulse Bar */}
        <div className="mt-2.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-[9px] font-semibold text-emerald-300 tracking-wider uppercase">GATEWAY ACTIVE</span>
        </div>
      </motion.div>

      {/* Floating Badges */}
      {/* Badge 1: Top Right - Access Controller */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 right-4 z-20 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg flex items-center gap-2"
      >
        <div className="p-1 rounded bg-blue-900/50 text-blue-400">
          <Database className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-slate-400 font-medium leading-none">Data Sync</p>
          <p className="text-[11px] text-slate-200 font-semibold leading-tight font-mono">100% Encrypted</p>
        </div>
      </motion.div>

      {/* Badge 2: Bottom Left - Session Guard */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 left-4 z-20 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 backdrop-blur-md shadow-lg flex items-center gap-2"
      >
        <div className="p-1 rounded bg-amber-500/20 text-amber-400">
          <KeyRound className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-slate-400 font-medium leading-none">RBAC Protocol</p>
          <p className="text-[11px] text-amber-400 font-semibold leading-tight font-mono">Role Partitioned</p>
        </div>
      </motion.div>

      {/* Badge 3: Top Left - Telemetry Chip */}
      <motion.div
        animate={{ x: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute top-12 left-0 z-20 px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/30 backdrop-blur-sm items-center gap-1.5"
      >
        <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
        <span className="text-[9px] font-mono text-cyan-300">99.98% UPTIME</span>
      </motion.div>

      {/* Badge 4: Bottom Right - Network Integrity */}
      <motion.div
        animate={{ x: [3, -3, 3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="hidden sm:flex absolute bottom-12 right-2 z-20 px-2.5 py-1 rounded-md bg-slate-950/80 border border-emerald-500/30 backdrop-blur-sm items-center gap-1.5"
      >
        <Network className="w-3 h-3 text-emerald-400" />
        <span className="text-[9px] font-mono text-emerald-300">CAMPUS LAN SECURE</span>
      </motion.div>
    </div>
  );
};

export default SecurityGraphic;
