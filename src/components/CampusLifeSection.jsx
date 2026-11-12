import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trees, 
  Lightbulb, 
  Trophy, 
  Bus, 
  Utensils, 
  Tv, 
  Sparkles, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

export const CampusLifeSection = ({ onOpenLogin }) => {
  const highlights = [
    {
      title: '32-Acre Tech Campus',
      category: 'Environment',
      description: 'Lush green landscape equipped with campus-wide high-speed fiber-optic Wi-Fi and solar energy infrastructure.',
      icon: Trees,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Innovation & Incubation Hub',
      category: 'Entrepreneurship',
      description: 'Dedicated incubation cell funding student ventures, patent filings, and national hackathon delegations.',
      icon: Lightbulb,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Sports & Wellness Arena',
      category: 'Recreation',
      description: 'Full-size cricket ground, synthetic basketball & badminton courts, modern gym, and athletic coaching.',
      icon: Trophy,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: '45+ Bus Transit Fleet',
      category: 'Connectivity',
      description: 'Comprehensive GPS-tracked transport covering all major routes across Hyderabad and Secunderabad.',
      icon: Bus,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Food Court & Cafeteria',
      category: 'Hospitality',
      description: 'Hygienic, multi-cuisine dining serving fresh vegetarian and non-vegetarian meals with certified safety.',
      icon: Utensils,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50'
    },
    {
      title: '1,200-Seat Smart Auditoriums',
      category: 'Events',
      description: 'Acoustically engineered auditoriums for international conferences, cultural galas, and tech fests.',
      icon: Tv,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="campus-life" className="relative py-24 sm:py-32 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Holistic Campus Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mb-5 font-sans">
            Vibrant Campus Life at AVNIET
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Beyond academic rigor, AVNIET fosters innovation, athletic excellence, and cultural vibrancy within a world-class suburban campus.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
