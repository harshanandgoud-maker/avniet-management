import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  Calendar, 
  FileText, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const CampusUpdates = () => {
  const [filter, setFilter] = useState('all');

  const updates = [
    {
      id: 1,
      title: 'TCS Digital & Cognizant On-Campus Placement Drive AY 2026-27',
      category: 'placements',
      categoryLabel: 'Placements',
      date: 'Nov 18, 2026',
      badge: 'Urgent',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      description: 'Eligible final year B.Tech students (CSE, AIML, DS, ECE) must register before 5:00 PM on the campus network.',
      linkText: 'Download Eligibility Matrix'
    },
    {
      id: 2,
      title: 'JNTUH B.Tech IV Year I Semester Regular & Supply Exam Schedule Released',
      category: 'examinations',
      categoryLabel: 'Examinations',
      date: 'Nov 15, 2026',
      badge: 'Official',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      description: 'Hall tickets are available for download via Student Desk credentials starting Monday.',
      linkText: 'Download Time Table PDF'
    },
    {
      id: 3,
      title: 'AVN-TECHNOVATION 2026: National Level Technical Symposium & Hackathon',
      category: 'events',
      categoryLabel: 'Events',
      date: 'Dec 04-05, 2026',
      badge: 'Event',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      description: 'Registration opens for 24-hour hackathon, robotics arena, and paper presentations. Cash prizes up to ₹2,50,000.',
      linkText: 'Register Project Team'
    },
    {
      id: 4,
      title: 'Central Library Extended 24/7 Digital Repository Access & IEEE Subscriptions',
      category: 'academic',
      categoryLabel: 'Academic',
      date: 'Nov 10, 2026',
      badge: 'Library',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: 'All enrolled faculty and students have been provisioned direct remote proxy access to IEEE Xplore and SpringerLink.',
      linkText: 'Access Library Proxy'
    }
  ];

  const filteredUpdates = filter === 'all' 
    ? updates 
    : updates.filter(u => u.category === filter);

  return (
    <section id="updates" className="relative py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Bell className="w-3.5 h-3.5 text-blue-600" />
              <span>Campus Circulars &amp; Notices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              Latest Campus Updates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Stay synchronized with institutional circulars, exam notifications, and recruitment schedules.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Notices' },
              { id: 'placements', label: 'Placements' },
              { id: 'examinations', label: 'Exams' },
              { id: 'events', label: 'Events' },
              { id: 'academic', label: 'Academic' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === f.id
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUpdates.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-blue-800 cursor-pointer">
                  <FileText className="w-4 h-4" />
                  {item.linkText}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
