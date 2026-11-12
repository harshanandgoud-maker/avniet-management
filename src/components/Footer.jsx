import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  ArrowUp, 
  Heart,
  Globe,
  Award
} from 'lucide-react';

export const Footer = ({ onOpenLogin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#070D18] text-white border-t border-slate-800/80 overflow-hidden">
      
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-blue-900/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Institutional Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-amber-500 p-[1.5px] shadow-lg shadow-blue-900/30">
                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="text-xl font-black tracking-tight text-white font-sans flex items-center gap-1.5">
                  <span>AVNIET</span>
                  <span className="text-amber-400">Management</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Internal Management Gateway
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AVN Institute of Engineering and Technology is dedicated to fostering global standards of technological education, innovation, and professional leadership.
            </p>

            <div className="space-y-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>NAAC Accredited • JNTUH Affiliated</span>
              </div>
              <div className="block text-xs text-slate-500">
                Approved by AICTE, New Delhi &amp; Govt. of Telangana
              </div>
            </div>
          </div>

          {/* Col 2: Official Address & Direct Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Campus Headquarters &amp; Address
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">
                  AVN Institute of Engineering &amp; Technology
                </p>
                <p className="text-slate-400 mt-0.5">
                  Koheda Road, MP Patelguda Post, Thorrur,
                </p>
                <p className="text-slate-400">
                  Hayathnagar Mandal, Hyderabad,
                </p>
                <p className="text-amber-400/90 font-medium">
                  Telangana 501511
                </p>
                <a
                  href="https://maps.google.com/?q=AVN+Institute+of+Engineering+and+Technology+Thorrur+Hayathnagar+Telangana+501511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-2 font-medium"
                >
                  <span>Open Campus in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>Registrar Desk: +91 8414 201 100 / 92461 74900</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Admissions: admissions@avniet.ac.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Placement Cell: placements@avniet.ac.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Administrative Hours: Mon - Sat: 9:00 AM - 4:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: System Modules & Governance (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            
            {/* Quick Modules */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                System Modules
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#pillars" className="hover:text-amber-400 transition-colors">
                    Library Administration
                  </a>
                </li>
                <li>
                  <a href="#pillars" className="hover:text-amber-400 transition-colors">
                    Placement Cell Hub
                  </a>
                </li>
                <li>
                  <a href="#pillars" className="hover:text-amber-400 transition-colors">
                    Executive Governance
                  </a>
                </li>
                <li>
                  <a href="#departments" className="hover:text-amber-400 transition-colors">
                    Department Courseware
                  </a>
                </li>
                <li>
                  <button onClick={onOpenLogin} className="hover:text-amber-400 transition-colors text-left">
                    Faculty Biometric Sync
                  </button>
                </li>
                <li>
                  <button onClick={onOpenLogin} className="hover:text-amber-400 transition-colors text-left">
                    Student Fee Desk
                  </button>
                </li>
              </ul>
            </div>

            {/* Governance & Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Institutional
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#updates" className="hover:text-amber-400 transition-colors">
                    Campus Circulars
                  </a>
                </li>
                <li>
                  <a href="#campus-life" className="hover:text-amber-400 transition-colors">
                    Campus Life &amp; Transit
                  </a>
                </li>
                <li>
                  <a href="#legal" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors">
                    AICTE Mandatory Disclosure
                  </a>
                </li>
                <li>
                  <a href="#legal" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors">
                    Anti-Ragging Squad
                  </a>
                </li>
                <li>
                  <a href="#legal" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors">
                    RTI Statutory Notice
                  </a>
                </li>
                <li>
                  <a href="#legal" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors">
                    Internal Grievance Cell
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Standard Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-center md:text-left">
            <span>
              &copy; {new Date().getFullYear()} AVN Institute of Engineering &amp; Technology (AVNIET). All Rights Reserved.
            </span>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#security" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors">
                Cyber Security Norms
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              System Cluster: HYD-01 (Online)
            </span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
