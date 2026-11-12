import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Lock, 
  GraduationCap, 
  UserCheck, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  KeyRound,
  Info,
  CheckCircle2
} from 'lucide-react';

export const LoginModal = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [demoNotice, setDemoNotice] = useState(false);

  if (!isOpen) return null;

  const roles = [
    {
      id: 'student',
      label: 'Student',
      icon: GraduationCap,
      placeholder: 'Roll No. (e.g. 21911A0501)',
      desc: 'Attendance, Marks, OPAC Library, Placement'
    },
    {
      id: 'faculty',
      label: 'Faculty',
      icon: UserCheck,
      placeholder: 'Faculty ID (e.g. AVN-FAC-042)',
      desc: 'Attendance Entry, Syllabus, Mentoring'
    },
    {
      id: 'placement',
      label: 'Placement',
      icon: Briefcase,
      placeholder: 'Officer ID (e.g. TPO-AVN-01)',
      desc: 'Recruitment Drives, Company Relations'
    },
    {
      id: 'admin',
      label: 'Executive',
      icon: ShieldCheck,
      placeholder: 'Administrator Email',
      desc: 'Institutional BI, Audits, Approvals'
    }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    if (roleId === 'student') setUserId('21911A0501');
    if (roleId === 'faculty') setUserId('AVN-FAC-042');
    if (roleId === 'placement') setUserId('TPO-AVN-01');
    if (roleId === 'admin') setUserId('director@avniet.ac.in');
    setPassword('••••••••••••');
  };

  /**
   * Dispatches login verification in the "Role-Based Access Control (RBAC)" modal pipeline.
   * Executes asynchronous credential dispatch and manages feedback alerts.
   * 
   * @param {React.FormEvent} e - Form submission event
   * @returns {Promise<void>}
   */
  const handleMockLogin = async (e) => {
    e.preventDefault();
    setDemoNotice(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setDemoNotice(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-white z-10 overflow-hidden"
        >
          {/* Top Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#0F172A] rounded-[6px] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Unified Authentication
              </span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">
              Sign In to AVNIET Management
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select your institutional role to access designated modules.
            </p>
          </div>

          {/* Role Switcher Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {roles.map((r) => {
              const RoleIcon = r.icon;
              const isSelected = selectedRole === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => handleRoleSelect(r.id)}
                  className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-blue-600/20 border-amber-400 text-white shadow-md'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <RoleIcon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span className="text-xs font-bold">{r.label}</span>
                </button>
              );
            })}
          </div>

          {/* Login Form UI */}
          <form onSubmit={handleMockLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {roles.find(r => r.id === selectedRole)?.label} Credential ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder={roles.find(r => r.id === selectedRole)?.placeholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Password / PIN
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[11px] text-amber-400 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure password"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Demo Autofill Pill */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
              <span>Need test credentials?</span>
              <button
                type="button"
                onClick={() => handleRoleSelect(selectedRole)}
                className="text-amber-400 hover:text-amber-300 font-semibold underline"
              >
                Autofill Sample {roles.find(r => r.id === selectedRole)?.label} ID
              </button>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Authenticate &amp; Enter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Interactive Demo feedback alert */}
          {demoNotice && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-start gap-2 text-xs text-amber-300"
            >
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
              <div>
                <span className="font-bold">UI Landing Stage:</span> Authentication endpoint simulation active. Full backend authentication logic will be wired up during backend integration.
              </div>
            </motion.div>
          )}

          {/* Footer Security Badging */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit SSL Protected
            </span>
            <span>JNTUH Institutional ID</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
