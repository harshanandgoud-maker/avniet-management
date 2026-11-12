import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  BrainCircuit, 
  Database, 
  Radio, 
  Wrench, 
  Compass, 
  FlaskConical, 
  ChevronRight, 
  Users, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const DepartmentsSection = ({ onOpenLogin }) => {
  const departments = [
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      code: 'CSE',
      icon: Cpu,
      tag: 'NBA Accredited',
      overview: 'Premier engineering program with cutting-edge computing labs, cloud clusters, and dedicated AI research suites.',
      intake: '240 Seats',
      labs: '12 Advanced Labs',
      faculty: '48 Professors & Researchers',
      highlights: ['NVIDIA High Performance GPU Lab', 'Full-Stack Software Engineering Studio', 'ACM & CSI Student Chapters']
    },
    {
      id: 'aiml',
      name: 'CSE (AI & Machine Learning)',
      code: 'AI & ML',
      icon: BrainCircuit,
      tag: 'Next-Gen Specialization',
      overview: 'Deep exploration of neural networks, computer vision, natural language processing, and autonomous robotic systems.',
      intake: '180 Seats',
      labs: '6 Deep Learning Labs',
      faculty: '32 Specialized Faculty',
      highlights: ['Edge AI & Robotics Testbed', 'TensorFlow & PyTorch Research Clusters', 'Generative AI Innovation Projects']
    },
    {
      id: 'ds',
      name: 'CSE (Data Science)',
      code: 'Data Science',
      icon: Database,
      tag: 'High Industry Demand',
      overview: 'Advanced training in big data analytics, predictive modeling, statistical learning, and distributed databases.',
      intake: '120 Seats',
      labs: '5 Big Data Labs',
      faculty: '26 Domain Specialists',
      highlights: ['Apache Spark Big Data Infrastructure', 'Predictive Business Analytics Hub', 'Financial Tech Modeling Suite']
    },
    {
      id: 'ece',
      name: 'Electronics & Communication',
      code: 'ECE',
      icon: Radio,
      tag: 'Core Engineering',
      overview: 'Microelectronic circuits, VLSI design, wireless signal processing, telecommunications, and IoT smart hardware.',
      intake: '120 Seats',
      labs: '8 Specialized Labs',
      faculty: '30 Senior Professors',
      highlights: ['Cadence & Synopsys VLSI Design Tools', 'Microwave & Embedded IoT Testbeds', 'Robotics and Drone Automation Hub']
    },
    {
      id: 'mech',
      name: 'Mechanical Engineering',
      code: 'MECH',
      icon: Wrench,
      tag: 'Industry 4.0 Focus',
      overview: 'Thermal engineering, computer-aided design, additive 3D manufacturing, and mechatronic automation.',
      intake: '60 Seats',
      labs: '9 Heavy Equipment Labs',
      faculty: '20 Industry Veterans',
      highlights: ['CNC Machining & Rapid Prototyping', 'ANSYS Simulation & SolidWorks Suite', 'Formula Student Motorsports Team']
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      code: 'CIVIL',
      icon: Compass,
      tag: 'Sustainable Tech',
      overview: 'Structural mechanics, smart environmental infrastructure, surveying technologies, and BIM architectural modeling.',
      intake: '60 Seats',
      labs: '7 Geotechnical Labs',
      faculty: '18 Senior Faculty',
      highlights: ['Total Station & GPS Geodesy Lab', 'Strength of Materials Testing Facility', 'Green Concrete Research Unit']
    }
  ];

  const [selectedDept, setSelectedDept] = useState(departments[0]);

  return (
    <section id="departments" className="relative py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Academic Engineering Programs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
              Departments of Excellence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              Explore AVNIET’s engineering divisions, each mapped to integrated courseware, attendance tracking, and lab allocation logs.
            </p>
          </div>

          <button
            onClick={onOpenLogin}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] hover:text-blue-800 transition-colors"
          >
            <span>Access Departmental Systems</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Layout: Left Tabs / Right Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Department List */}
          <div className="lg:col-span-5 space-y-2.5">
            {departments.map((dept) => {
              const Icon = dept.icon;
              const isSelected = selectedDept.id === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-lg shadow-slate-900/10'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:text-blue-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{dept.name}</div>
                      <div className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                        {dept.code} • {dept.intake}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-400 group-hover:translate-x-1'}`} />
                </button>
              );
            })}
          </div>

          {/* Department Detail Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDept.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-7 sm:p-9 shadow-xl shadow-slate-200/40"
              >
                {/* Detail Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/80">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
                      {selectedDept.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-2 font-sans">
                      {selectedDept.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 uppercase font-semibold">Annual Intake</div>
                    <div className="text-xl font-extrabold text-[#1D4ED8]">{selectedDept.intake}</div>
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                  {selectedDept.overview}
                </p>

                {/* Metric Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
                    <div className="text-xs text-slate-500 font-medium">Laboratory Units</div>
                    <div className="text-lg font-bold text-slate-900 mt-1">{selectedDept.labs}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
                    <div className="text-xs text-slate-500 font-medium">Faculty Members</div>
                    <div className="text-lg font-bold text-slate-900 mt-1">{selectedDept.faculty}</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
                    <div className="text-xs text-slate-500 font-medium">Curriculum Standard</div>
                    <div className="text-lg font-bold text-emerald-600 mt-1">JNTUH R22 CBCS</div>
                  </div>
                </div>

                {/* Key Research & Lab Facilities */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Key Infrastructure &amp; Research Centers
                  </h4>
                  <ul className="space-y-2">
                    {selectedDept.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Module Link */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Faculty timetable, syllabus downloads &amp; assignment submissions available.
                  </div>
                  <button
                    onClick={onOpenLogin}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow"
                  >
                    <span>Launch {selectedDept.code} Console</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
