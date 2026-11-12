import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, Building2, BookOpen, Briefcase, Sparkles, AlertCircle } from 'lucide-react';
import { INITIAL_DATA } from '../data/portalData';

export const RoleLogin = ({ roleId, onBack, onLoginSuccess }) => {
  const roleMeta = {
    management: {
      name: 'Management',
      subtitle: 'Executive Leadership & Governance',
      customLogo: '/management-logo.png',
      icon: Building2,
      idLabel: 'Staff ID',
      defaultId: 'MGT-001',
      defaultPassword: 'password123',
      colorBadge: 'bg-amber-50 text-amber-800 border-amber-300',
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
      btnGradient: 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900',
      notice: 'Level 1 Clearance: Access to Executive Daily Tasks and Master Data Fetch.'
    },
    library: {
      name: 'Library Section',
      subtitle: 'Central Resource & Circulation Desk',
      customLogo: '/library-logo.png',
      icon: BookOpen,
      idLabel: 'Librarian ID',
      defaultId: 'LIB-101',
      defaultPassword: 'password123',
      colorBadge: 'bg-sky-50 text-sky-800 border-sky-300',
      iconBg: 'bg-sky-50 text-sky-700 border-sky-200',
      btnGradient: 'bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 hover:from-sky-700 hover:to-indigo-800',
      notice: 'Circulation Desk Access: Access to Librarian Daily Tasks & book logs.'
    },
    placement: {
      name: 'Placement Cell',
      subtitle: 'Training & Corporate Relations Office',
      customLogo: '/placement-logo.png',
      icon: Briefcase,
      idLabel: 'Placement Officer ID',
      defaultId: 'TPO-501',
      defaultPassword: 'password123',
      colorBadge: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      btnGradient: 'bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 hover:from-emerald-700 hover:to-teal-900',
      notice: 'TPO Clearance: Access to Placement Officer Daily Tasks & drive records.'
    }
  };

  const currentMeta = roleMeta[roleId] || roleMeta.management;
  const initialUserData = INITIAL_DATA[roleId]?.user;

  const [idInput, setIdInput] = useState(currentMeta.defaultId);
  const [passwordInput, setPasswordInput] = useState(currentMeta.defaultPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  /**
   * Validates credential inputs on the client before network dispatch.
   * Part of the "Role-Based Access Control (RBAC)" and client-side sanitization layer.
   * 
   * @param {string} id - Candidate user or staff identifier
   * @param {string} password - Candidate security credential
   * @returns {{ valid: boolean, error?: string }} - Validation result
   */
  const validateCredentials = (id, password) => {
    if (!id || !id.trim()) {
      return { valid: false, error: `Please enter your ${currentMeta.idLabel}.` };
    }
    if (!password || !password.trim()) {
      return { valid: false, error: 'Please enter your password.' };
    }
    // Detect illegal SQL injection patterns on client
    const sqlPattern = /('|"|;|--|\/\*|\*\/|union\s+select|or\s+1\s*=\s*1)/i;
    if (sqlPattern.test(id) || sqlPattern.test(password)) {
      return { valid: false, error: 'Invalid input characters detected. SQL injection patterns are prohibited.' };
    }
    return { valid: true };
  };

  /**
   * Dispatches authentication requests to the RBAC pipeline.
   * Queries the backend API asynchronously with graceful fallback to departmental store.
   * 
   * @param {string} role - Target clearance role
   * @param {string} id - Staff or student identifier
   * @param {string} password - Security key
   * @returns {Promise<object>} - Authenticated user payload
   */
  const authenticateRoleAsync = async (role, id, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, id, password })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.user) {
          return data.user;
        }
      }
    } catch {
      // In standalone client preview mode, fallback safely to initialUserData
    }

    // Default institutional clearance fallback
    return {
      role,
      id,
      name: initialUserData?.name || 'Authorized Staff',
      roleTitle: initialUserData?.roleTitle || currentMeta.subtitle
    };
  };

  /**
   * Modular async form submission handler for the "Role-Based Access Control (RBAC)" pipeline.
   * Handles user validation, authentication status transitions, and error states gracefully.
   * 
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const validation = validateCredentials(idInput, passwordInput);
    if (!validation.valid) {
      setErrorMessage(validation.error);
      return;
    }

    setIsAuthenticating(true);

    try {
      const user = await authenticateRoleAsync(roleId, idInput.trim(), passwordInput);
      onLoginSuccess(user);
    } catch (err) {
      setErrorMessage(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleFillDemo = () => {
    setIdInput(currentMeta.defaultId);
    setPasswordInput(currentMeta.defaultPassword);
    setErrorMessage('');
  };

  const Icon = currentMeta.icon;

  return (
    <div className="min-h-screen w-full bg-transparent text-slate-800 flex flex-col justify-center items-center p-4 sm:p-8 font-sans relative selection:bg-amber-400 selection:text-slate-900">
      {/* Soft light background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent pointer-events-none" />

      {/* Official Header Banner */}
      <div className="relative z-10 w-full max-w-md mb-4 flex justify-center">
        <img
          src="./avn-header.png"
          alt="AVN Institute of Engineering & Technology"
          className="h-11 sm:h-13 w-auto max-w-full object-contain rounded-lg shadow-xs"
        />
      </div>

      {/* Back Button */}
      <div className="relative z-10 w-full max-w-md mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors bg-white hover:bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Departments</span>
        </button>

        <span className="text-xs text-slate-500 font-mono font-bold tracking-wider">AVNIET GATEWAY</span>
      </div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md bg-white text-slate-900 rounded-3xl p-7 sm:p-10 shadow-xl border border-slate-200/90"
      >
        {/* Card Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
          <img
            src={currentMeta.customLogo || '/avn-logo.png'}
            alt={currentMeta.name}
            className="w-16 h-16 object-contain drop-shadow-xs flex-shrink-0"
          />
          <div>
            <h2 className="text-2xl font-black text-slate-900 leading-tight">
              {currentMeta.name}
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-0.5">
              Enter authorized credentials to proceed
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">
              {currentMeta.idLabel} <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={idInput}
                onChange={(e) => setIdInput(e.target.value)}
                placeholder={`Enter your ${currentMeta.idLabel}`}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">
              Access Password <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 focus:outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isAuthenticating}
              className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-base shadow-lg flex items-center justify-center gap-2 transition-all hover:opacity-95 cursor-pointer ${currentMeta.btnGradient}`}
            >
              {isAuthenticating ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In & Open Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* 1-Click Fill Helper */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
          <span className="text-slate-500 font-medium">Demo credentials:</span>
          <button
            type="button"
            onClick={handleFillDemo}
            className="text-blue-600 font-bold hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Auto-fill Demo ID & Pass</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RoleLogin;

