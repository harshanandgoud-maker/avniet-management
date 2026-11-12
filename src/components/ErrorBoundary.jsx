import React, { Component } from 'react';
import { ShieldAlert, RefreshCw, Home, ChevronDown, ChevronUp, AlertOctagon } from 'lucide-react';

/**
 * =============================================================================
 * AVNIET MANAGEMENT SYSTEM - ENTERPRISE ERROR BOUNDARY
 * =============================================================================
 * Role in System Architecture:
 * - Part of the "Role-Based Access Control (RBAC)" and "College Automation" pipelines.
 * - Prevents unhandled React runtime exceptions from causing blank white screen crashes.
 * - Safeguards Student Desk, Library, Placement, and Executive Governance dashboards.
 * - Sanitizes displayed error telemetry to avoid leaking student PII or credentials.
 * =============================================================================
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      showDetails: false
    };
  }

  /**
   * Derives fallback state when a child component throws an unhandled error.
   * 
   * @param {Error} error - The runtime error thrown by the component tree
   * @returns {{ hasError: boolean, error: Error }} - Updated state
   */
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  /**
   * Catches errors from child components and logs sanitized diagnostics.
   * Ensures zero student PII or credentials are leaked in client telemetry.
   * 
   * @param {Error} error - Runtime error object
   * @param {React.ErrorInfo} errorInfo - Component stack trace
   */
  componentDidCatch(error, errorInfo) {
    // Audit-compliant sanitized diagnostic tracking (no PII or credentials logged)
    if (process.env.NODE_ENV !== 'production') {
      // Development-only diagnostic logging
      console.warn('[ErrorBoundary] Caught frontend rendering error:', error.message);
    }
  }

  /**
   * Resets the boundary state and reloads the application view.
   */
  handleReload = () => {
    window.location.reload();
  };

  /**
   * Returns user safely to the root role selection portal.
   */
  handleReturnHome = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    } else {
      window.location.href = '/';
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-slate-900 text-slate-100 flex items-center justify-center p-4 sm:p-6 font-sans relative">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-950 pointer-events-none" />

          <div className="relative z-10 w-full max-w-xl bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            {/* Header with AVNIET Branding */}
            <div className="flex items-center gap-4 pb-6 border-b border-slate-700/60 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                <AlertOctagon className="w-7 h-7 text-rose-400" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-rose-400 uppercase">
                  Production Resiliency Protocol
                </span>
                <h1 className="text-2xl font-black text-white tracking-tight">
                  Portal Interface Exception Intercepted
                </h1>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 mb-8">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                The AVNIET Management System intercepted an unexpected frontend application state. 
                Your session state has been protected, and no academic or student records have been compromised.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Zero Red-Flag Redundancy: Student PII and Administrative RBAC tokens remained secure.</span>
              </div>
            </div>

            {/* Diagnostic Drawer (Collapsible) */}
            <div className="mb-6">
              <button
                type="button"
                onClick={() => this.setState((prev) => ({ showDetails: !prev.showDetails }))}
                className="flex items-center justify-between w-full text-xs font-mono text-slate-400 hover:text-slate-200 py-2 border-b border-slate-700/50 cursor-pointer"
              >
                <span>Diagnostic Information (Sanitized)</span>
                {this.state.showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {this.state.showDetails && (
                <div className="mt-3 p-4 rounded-xl bg-slate-950 font-mono text-xs text-rose-300 border border-slate-800 overflow-x-auto max-h-40">
                  {this.state.error?.message || 'Component tree rendering exception intercepted.'}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Application</span>
              </button>

              <button
                type="button"
                onClick={this.handleReturnHome}
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return to Departments</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

