import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const PortalSelection = ({ onSelectRole, onWatchIntro }) => {
  const cards = [
    {
      id: 'management',
      name: 'Management',
      customLogo: '/management-logo.png',
      accentBorder: 'hover:border-blue-500 hover:ring-4 hover:ring-blue-500/10'
    },
    {
      id: 'library',
      name: 'Library Section',
      customLogo: '/library-logo.png',
      accentBorder: 'hover:border-cyan-500 hover:ring-4 hover:ring-cyan-500/10'
    },
    {
      id: 'placement',
      name: 'Placement Cell',
      customLogo: '/placement-logo.png',
      accentBorder: 'hover:border-emerald-500 hover:ring-4 hover:ring-emerald-500/10'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-transparent text-slate-800 flex flex-col justify-between font-sans relative selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent pointer-events-none" />

      {/* Official Website Header Banner */}
      <header className="relative z-20 w-full bg-white border-b border-slate-200 shadow-xs py-3 sm:py-5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <img
            src="./avn-header.png"
            alt="AVN Institute of Engineering & Technology - Accredited by NBA and NAAC"
            className="h-14 sm:h-20 md:h-24 w-auto max-w-full object-contain rounded-xl shadow-xs"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12 flex-1 flex flex-col justify-center">
        {/* Section Title with Prominent Typography */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Internal Operations & Management
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mt-3 font-medium">
            Select your department below to enter credentials and access your dashboard.
          </p>
          {onWatchIntro && (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={onWatchIntro}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-blue-700 border border-slate-200 text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer hover:shadow-md hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Watch 3D Emblem Intro</span>
              </button>
            </div>
          )}
        </div>

        {/* The 3 Clean Boxes - Without Divisions & With Custom Management Logo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch my-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectRole(card.id)}
                className={`group cursor-pointer rounded-3xl bg-white border border-slate-200/90 hover:shadow-2xl ${card.accentBorder} p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-sm transition-all relative overflow-hidden min-h-[260px] sm:min-h-[290px]`}
              >
                <div className="my-auto flex flex-col items-center">
                  {card.customLogo ? (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                      <img
                        src={card.customLogo}
                        alt={card.name}
                        className="w-full h-full object-contain drop-shadow-xs"
                      />
                    </div>
                  ) : (
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-xs ${card.iconBg}`}>
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                  )}

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                    {card.name}
                  </h2>
                </div>

                {/* Subtitle / CTA indicator */}
                <div className="mt-6 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-sm font-bold text-slate-500 group-hover:text-blue-700 transition-colors">
                  <span>Click to Access</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-8 py-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 gap-3">
        <div className="flex items-center gap-2.5">
          <img src="./avn-logo.png" alt="AVN Logo" className="w-7 h-7 object-contain" />
          <span className="font-bold text-slate-800">AVN Institute of Engineering & Technology</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">Autonomous Campus Network</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Internal Institutional Use Only</span>
        </div>
      </footer>
    </div>
  );
};

export default PortalSelection;
