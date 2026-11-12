import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronDown,
  Building,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Navbar = ({ onOpenLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Departments', href: '#departments' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveLink(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800/90 shadow-xl shadow-slate-950/20'
          : 'bg-[#0F172A]/75 backdrop-blur-sm border-b border-slate-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Bold Typographic Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home', 'Home')}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Emblem Crest */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-amber-500 p-[1.5px] shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
                  AVNIET
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-amber-400 font-sans">
                  Management
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60 uppercase tracking-wider ml-1">
                  v4.8
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-slate-400 hidden sm:block">
                AVN Institute of Engineering &amp; Technology
              </span>
            </div>
          </a>

          {/* Center: Clean, Widely Spaced Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className="relative text-[14.5px] font-medium tracking-normal text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
                >
                  <span>{link.name}</span>
                  
                  {/* Subtle Underline Hover Animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-full opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.8)]' 
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Highly Prominent "Management Login" Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenLogin}
              type="button"
              className="relative inline-flex items-center justify-center gap-2.5 px-6 py-2.5 text-sm font-bold text-slate-950 bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0F172A]"
            >
              <span>Management Login</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenLogin}
              type="button"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#F59E0B] rounded-md shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
            >
              <span>Login</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-slate-800 bg-[#0F172A]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeLink === link.name
                      ? 'bg-blue-600/20 text-amber-400 border-l-2 border-amber-400'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-950 bg-[#F59E0B] hover:bg-amber-400 rounded-lg shadow-md shadow-amber-500/25"
              >
                <span>Access Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
