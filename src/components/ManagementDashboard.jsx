import React, { useState } from 'react';
import {
  Building2,
  BookOpen,
  Briefcase,
  Download,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  LogOut,
  Search,
  Users,
  GraduationCap,
  Award,
  Calendar,
  Layers
} from 'lucide-react';
import DailyTaskBoard from './DailyTaskBoard';

export const ManagementDashboard = ({ currentUser, portalData, onUpdateTasks, onLogout }) => {
  const [activeTab, setActiveTab] = useState('tasks'); // 'tasks' | 'library' | 'placement' | 'master'
  const [isFetching, setIsFetching] = useState(false);
  const [lastFetchedTime, setLastFetchedTime] = useState('Real-time Live Sync');
  const [searchTerm, setSearchTerm] = useState('');

  const managementTasks = portalData.management?.tasks || [];
  const libraryTasks = portalData.library?.tasks || [];
  const placementTasks = portalData.placement?.tasks || [];

  const libraryRecords = portalData.library?.records || [];
  const placementRecords = portalData.placement?.records || [];

  const handleToggleTask = (taskId) => {
    const updated = managementTasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t));
    onUpdateTasks('management', updated);
  };

  const handleAddTask = (newTask) => {
    onUpdateTasks('management', [newTask, ...managementTasks]);
  };

  const handleDeleteTask = (taskId) => {
    const updated = managementTasks.filter((t) => t.id !== taskId);
    onUpdateTasks('management', updated);
  };

  /**
   * Refactored asynchronous data synchronization in the "College Automation" pipeline.
   * Aggregates live cross-departmental operations data from Library and Placement cells.
   * 
   * @returns {Promise<void>}
   */
  const handleFetchAllData = async () => {
    setIsFetching(true);
    try {
      // Simulate asynchronous synchronization across departmental micro-services
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLastFetchedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } finally {
      setIsFetching(false);
    }
  };

  /**
   * Generates sanitized CSV audit reports in the "College Automation" governance pipeline.
   * Compiles executive tasks, library circulation logs, and placement statistics into tabular records.
   * 
   * @returns {Promise<void>}
   */
  const handleExportCSV = async () => {
    // Modular asynchronous file builder
    const buildAuditRows = async () => {
      return [
        ['Department', 'Category', 'Record / Task', 'Status / Detail', 'Priority / Package'],
        ...managementTasks.map(t => ['Management', t.category, t.title, t.completed ? 'Completed' : 'Pending', t.priority]),
        ...libraryTasks.map(t => ['Library', t.category, t.title, t.completed ? 'Completed' : 'Pending', t.priority]),
        ...libraryRecords.map(r => ['Library Circulation', 'Circulation', `${r.id} - ${r.title}`, r.status, r.student]),
        ...placementTasks.map(t => ['Placement', t.category, t.title, t.completed ? 'Completed' : 'Pending', t.priority]),
        ...placementRecords.map(p => ['Placement Drive', 'Campus Recruitment', `${p.company} (${p.role})`, p.status, p.package])
      ];
    };

    const rows = await buildAuditRows();
    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.map(i => `"${i}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AVNIET_Master_Data_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pendingManagementTasks = managementTasks.filter(t => !t.completed).length;

  return (
    <div className="min-h-screen bg-transparent text-slate-800 font-sans pb-20 selection:bg-amber-400 selection:text-slate-900">
      
      {/* Top Executive Header */}
      <header className="bg-white text-slate-800 border-b border-slate-200/90 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/avn-logo.png"
              alt="AVN Logo"
              className="w-12 h-12 object-contain rounded-xl shadow-xs flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                  AVNIET Central Management System
                </h1>
                <span className="hidden sm:inline-block text-xs bg-amber-50 text-amber-800 border border-amber-300 px-3 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Highest Executive Access
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Logged in as: <strong className="text-slate-900 font-bold">{currentUser.name}</strong> • Level 1 Super-Admin ({currentUser.id})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleExportCSV}
              title="Download full college CSV report"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-sm font-bold text-white transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export Master CSV</span>
            </button>

            <button
              type="button"
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-slate-700 transition-colors border border-slate-200 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Executive Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">

        {/* Master Fetch & Oversight Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>SUPER-ADMIN EXECUTIVE PRIVILEGE • CROSS-CAMPUS OVERSIGHT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Institutional Master Command & Executive Divisions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl font-medium">
              Real-time governance dashboard structured across key management perspectives: Governance Approvals, Academic Library Resources, Corporate Placements, and Master Data Auditing.
            </p>
          </div>

          {/* Master Fetch Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <button
              type="button"
              onClick={handleFetchAllData}
              disabled={isFetching}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 hover:from-blue-800 hover:to-slate-950 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md shadow-blue-900/20 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-5 h-5 ${isFetching ? 'animate-spin' : ''}`} />
              <span>{isFetching ? 'Synchronizing Live Records...' : 'Fetch All College Data'}</span>
            </button>
            <div className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left self-center">
              Status: <span className="font-mono text-slate-800 font-bold">{lastFetchedTime}</span>
            </div>
          </div>
        </div>

        {/* SESSION 1: Executive KPI Scoreboard (At A Glance) */}
        <div>
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Layers className="w-6 h-6 text-blue-700" />
              <span>Institutional Key Performance Indicators</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              High-level campus metrics across all academic and administrative pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-sm sm:text-base font-bold text-slate-600">College Faculty & Staff</span>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">184</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700">
                <span>100% Verified Academic Profiles</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-sm sm:text-base font-bold text-slate-600">Enrolled Students</span>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">2,450</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700">
                <span>8 Autonomous B.Tech Branches</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-sm sm:text-base font-bold text-slate-600">Library Daily Circulation</span>
                <p className="text-4xl sm:text-5xl font-black text-amber-600 mt-2">138 Books</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600">
                <span>420 Student RFID Footfall Today</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-sm sm:text-base font-bold text-slate-600">Campus Placements</span>
                <p className="text-4xl sm:text-5xl font-black text-emerald-600 mt-2">312 Placed</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700">
                <span>Highest CTC: 24.5 LPA • Avg: 6.8 LPA</span>
              </div>
            </div>
          </div>
        </div>

        {/* SESSION 2: Divided as per Management Perspective (Large Tabs) */}
        <div>
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Management Functional Divisions
            </h3>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Select an executive division below to review designated tasks, operations, and records.
            </p>
          </div>

          {/* Large Executive Tab Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('tasks')}
              className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                activeTab === 'tasks'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Building2 className={`w-6 h-6 ${activeTab === 'tasks' ? 'text-amber-400' : 'text-blue-700'}`} />
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  activeTab === 'tasks' ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-800'
                }`}>
                  {pendingManagementTasks} Pending
                </span>
              </div>
              <p className="text-base sm:text-lg font-black leading-tight">
                1. Executive Governance
              </p>
              <p className={`text-xs font-medium mt-1 ${activeTab === 'tasks' ? 'text-slate-300' : 'text-slate-500'}`}>
                Principal approvals & institutional directives
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('library')}
              className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                activeTab === 'library'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md ring-2 ring-amber-600/10'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <BookOpen className={`w-6 h-6 ${activeTab === 'library' ? 'text-white' : 'text-amber-600'}`} />
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  activeTab === 'library' ? 'bg-white text-amber-900' : 'bg-amber-50 text-amber-800'
                }`}>
                  {libraryTasks.length} Tasks
                </span>
              </div>
              <p className="text-base sm:text-lg font-black leading-tight">
                2. Academic Library
              </p>
              <p className={`text-xs font-medium mt-1 ${activeTab === 'library' ? 'text-amber-100' : 'text-slate-500'}`}>
                Book circulation, catalogs & overdue logs
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('placement')}
              className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                activeTab === 'placement'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-600/10'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Briefcase className={`w-6 h-6 ${activeTab === 'placement' ? 'text-white' : 'text-emerald-600'}`} />
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  activeTab === 'placement' ? 'bg-white text-emerald-900' : 'bg-emerald-50 text-emerald-800'
                }`}>
                  {placementRecords.length} Drives
                </span>
              </div>
              <p className="text-base sm:text-lg font-black leading-tight">
                3. Campus Placements (TPO)
              </p>
              <p className={`text-xs font-medium mt-1 ${activeTab === 'placement' ? 'text-emerald-100' : 'text-slate-500'}`}>
                Corporate recruitment drives & offers
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('master')}
              className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                activeTab === 'master'
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md ring-2 ring-blue-700/10'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <FileSpreadsheet className={`w-6 h-6 ${activeTab === 'master' ? 'text-white' : 'text-blue-700'}`} />
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  activeTab === 'master' ? 'bg-white text-blue-900' : 'bg-blue-50 text-blue-800'
                }`}>
                  Master Hub
                </span>
              </div>
              <p className="text-base sm:text-lg font-black leading-tight">
                4. Master Audit Data Hub
              </p>
              <p className={`text-xs font-medium mt-1 ${activeTab === 'master' ? 'text-blue-100' : 'text-slate-500'}`}>
                Consolidated cross-department records
              </p>
            </button>
          </div>
        </div>

        {/* DIVISION 1: Executive Governance & Action Directives */}
        {activeTab === 'tasks' && (
          <DailyTaskBoard
            tasks={managementTasks}
            onToggleTask={handleToggleTask}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            roleName="Executive Management (Principal & Secretary)"
          />
        )}

        {/* DIVISION 2: Academic Operations & Library Division */}
        {activeTab === 'library' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    <BookOpen className="w-7 h-7 text-amber-600" />
                    <span>Academic Operations & Central Library Oversight</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
                    Live administrative oversight into Chief Librarian daily task completion and real-time circulation movement.
                  </p>
                </div>
                <span className="text-sm font-bold px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 self-start sm:self-center">
                  Chief Librarian: S. Rama Rao (LIB-101)
                </span>
              </div>

              {/* Librarian Assigned Directives */}
              <div className="mb-8">
                <h4 className="text-base font-black text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span>Chief Librarian Operational Directives</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-bold">Today</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {libraryTasks.map((task) => (
                    <div key={task.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                      <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${task.completed ? 'text-emerald-600' : 'text-slate-300'}`} />
                      <div className="flex-1">
                        <p className={`text-base font-bold leading-snug ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-md">{task.category}</span>
                          <span className="text-xs font-medium text-slate-500">• Due: {task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Book Circulation Records Table */}
              <div>
                <h4 className="text-base font-black text-slate-800 uppercase tracking-wider mb-4">
                  Live Book Circulation & Return Registry
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-black text-xs sm:text-sm">
                      <tr>
                        <th className="py-4 px-5">Accession ID</th>
                        <th className="py-4 px-5">Textbook Title</th>
                        <th className="py-4 px-5">Borrower Student</th>
                        <th className="py-4 px-5">Issue Timestamp</th>
                        <th className="py-4 px-5">Circulation Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm sm:text-base font-medium">
                      {libraryRecords.map((rec, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-5 font-mono font-bold text-slate-900">{rec.id}</td>
                          <td className="py-4 px-5 font-bold text-slate-900">{rec.title}</td>
                          <td className="py-4 px-5 text-slate-700">{rec.student}</td>
                          <td className="py-4 px-5 text-slate-500 font-mono text-xs sm:text-sm">{rec.date}</td>
                          <td className="py-4 px-5">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                              rec.status.includes('Overdue')
                                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                : rec.status === 'Issued'
                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            }`}>
                              {rec.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DIVISION 3: Corporate Relations & Campus Placements (TPO) */}
        {activeTab === 'placement' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    <Briefcase className="w-7 h-7 text-emerald-600" />
                    <span>Corporate Relations & Placement Cell (TPO) Oversight</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
                    Management oversight of company recruitment drives, student offer dispatches, and TPO action directives.
                  </p>
                </div>
                <span className="text-sm font-bold px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-center">
                  Placement Head: Dr. K. V. Sharma (TPO-501)
                </span>
              </div>

              {/* TPO Action Directives */}
              <div className="mb-8">
                <h4 className="text-base font-black text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span>Placement Officer Operational Directives</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-bold">Active</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {placementTasks.map((task) => (
                    <div key={task.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                      <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${task.completed ? 'text-emerald-600' : 'text-slate-300'}`} />
                      <div className="flex-1">
                        <p className={`text-base font-bold leading-snug ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">{task.category}</span>
                          <span className="text-xs font-medium text-slate-500">• Due: {task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Drives Table */}
              <div>
                <h4 className="text-base font-black text-slate-800 uppercase tracking-wider mb-4">
                  Active Company Recruitment Drives & Salary CTC Packages
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-black text-xs sm:text-sm">
                      <tr>
                        <th className="py-4 px-5">Recruiting Enterprise</th>
                        <th className="py-4 px-5">Designation Role</th>
                        <th className="py-4 px-5">Annual CTC Package</th>
                        <th className="py-4 px-5">Eligible Candidates</th>
                        <th className="py-4 px-5">Drive Progress</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm sm:text-base font-medium">
                      {placementRecords.map((rec, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-5 font-bold text-slate-900 text-base">{rec.company}</td>
                          <td className="py-4 px-5 font-semibold text-slate-700">{rec.role}</td>
                          <td className="py-4 px-5 font-black text-emerald-700 text-base">{rec.package}</td>
                          <td className="py-4 px-5 text-slate-700 font-semibold">{rec.eligibleCount} Students</td>
                          <td className="py-4 px-5">
                            <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                              {rec.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DIVISION 4: Master Institution Audit & Data Hub */}
        {activeTab === 'master' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Master Central College Repository
                </h3>
                <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
                  Consolidated institutional registry combining directives and records across all operational divisions.
                </p>
              </div>

              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Filter master records by keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 text-sm sm:text-base font-medium focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-black text-xs sm:text-sm">
                  <tr>
                    <th className="py-4 px-5">Division</th>
                    <th className="py-4 px-5">Directive / Record Description</th>
                    <th className="py-4 px-5">Category</th>
                    <th className="py-4 px-5">Execution Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm sm:text-base font-medium">
                  {/* Management rows */}
                  {managementTasks.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).map((t) => (
                    <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-bold text-blue-800">1. Executive Governance</td>
                      <td className="py-4 px-5 font-bold text-slate-900">{t.title}</td>
                      <td className="py-4 px-5 font-semibold text-slate-600">{t.category}</td>
                      <td className="py-4 px-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                          t.completed ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          {t.completed ? 'Completed' : 'Pending Action'}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {/* Library rows */}
                  {libraryTasks.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).map((t) => (
                    <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-bold text-amber-700">2. Academic Library</td>
                      <td className="py-4 px-5 font-bold text-slate-900">{t.title}</td>
                      <td className="py-4 px-5 font-semibold text-slate-600">{t.category}</td>
                      <td className="py-4 px-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                          t.completed ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          {t.completed ? 'Completed' : 'Pending Action'}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {/* Placement rows */}
                  {placementTasks.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).map((t) => (
                    <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-bold text-emerald-700">3. Corporate Placements</td>
                      <td className="py-4 px-5 font-bold text-slate-900">{t.title}</td>
                      <td className="py-4 px-5 font-semibold text-slate-600">{t.category}</td>
                      <td className="py-4 px-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                          t.completed ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          {t.completed ? 'Completed' : 'Pending Action'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default ManagementDashboard;
