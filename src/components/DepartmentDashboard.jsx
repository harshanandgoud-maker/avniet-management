import React from 'react';
import { LogOut, BookOpen, Briefcase, Calendar } from 'lucide-react';
import DailyTaskBoard from './DailyTaskBoard';

export const DepartmentDashboard = ({ roleId, currentUser, portalData, onUpdateTasks, onLogout }) => {
  const isLibrary = roleId === 'library';
  const data = portalData[roleId] || {};
  const tasks = data.tasks || [];
  const stats = data.stats || {};
  const records = data.records || [];

  /**
   * Toggles completion status of a departmental task in the "College Automation" pipeline.
   * Synchronizes operations checklists for Library circulation desks and Placement officers.
   * 
   * @param {string} taskId - Unique task identifier
   */
  const handleToggleTask = (taskId) => {
    const updated = tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t));
    onUpdateTasks(roleId, updated);
  };

  /**
   * Dispatches new operational tasks into the "College Automation" pipeline.
   * 
   * @param {object} newTask - New task object with priority, category, and due date
   */
  const handleAddTask = (newTask) => {
    onUpdateTasks(roleId, [newTask, ...tasks]);
  };

  /**
   * Prunes completed or retired tasks from the active operations queue.
   * 
   * @param {string} taskId - Target task identifier
   */
  const handleDeleteTask = (taskId) => {
    const updated = tasks.filter((t) => t.id !== taskId);
    onUpdateTasks(roleId, updated);
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-800 font-sans pb-16 selection:bg-amber-400 selection:text-slate-900">
      {/* Top Navbar */}
      <header className="bg-white text-slate-800 border-b border-slate-200/90 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/avn-logo.png"
              alt="AVN Logo"
              className="w-12 h-12 object-contain rounded-xl shadow-xs flex-shrink-0"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-black leading-tight text-slate-900 tracking-tight">
                {isLibrary ? 'AVNIET Central Library Operations' : 'AVNIET Placement Cell (TPO)'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Logged in as: <strong className="text-slate-900 font-bold">{currentUser.name}</strong> ({currentUser.id})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-bold text-slate-600 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-full">
              Departmental Clearance
            </span>
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

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 mb-2">
              <Calendar className="w-4 h-4" />
              <span>DAILY OPERATIONS SHIFT • TODAY'S WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Welcome back, {currentUser.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
              Review and complete your designated daily operations and departmental logs.
            </p>
          </div>

          <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium max-w-sm">
            <span className="font-bold text-slate-900">Clearance Note:</span> Standard role access. Cross-campus administrative audits are managed by Central Management.
          </div>
        </div>

        {/* Quick Stats Grid with Large Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {isLibrary ? (
            <>
              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Books Issued Today</span>
                  <p className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">{stats.booksIssuedToday || 138}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-emerald-700">
                  Active Circulation
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Returns Pending</span>
                  <p className="text-4xl sm:text-5xl font-black text-amber-600 mt-2">{stats.returnsPending || 42}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-amber-700">
                  Due by 5:00 PM
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Digital Journals Active</span>
                  <p className="text-4xl sm:text-5xl font-black text-blue-700 mt-2">{stats.digitalJournalsActive || 1250}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-blue-700">
                  IEEE & Springer Handbooks
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Today's Reader Footfall</span>
                  <p className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">{stats.todayFootfall || 420}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-slate-600">
                  RFID Scanner Logs
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Active Drives This Week</span>
                  <p className="text-4xl sm:text-5xl font-black text-slate-900 mt-2">{stats.activeDrivesThisWeek || 4}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-emerald-700">
                  TCS, Cognizant, ServiceNow
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Total Offers Released</span>
                  <p className="text-4xl sm:text-5xl font-black text-blue-700 mt-2">{stats.totalOffersReleased || 312}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-blue-700">
                  2026 Graduating Batch
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Highest Salary Package</span>
                  <p className="text-4xl sm:text-5xl font-black text-amber-600 mt-2">{stats.highestPackage || '24.5 LPA'}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-amber-700">
                  ServiceNow Associate Dev
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-sm sm:text-base font-bold text-slate-600">Average Annual Package</span>
                  <p className="text-4xl sm:text-5xl font-black text-emerald-600 mt-2">{stats.avgPackage || '6.8 LPA'}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-emerald-700">
                  +18% vs Previous Year
                </div>
              </div>
            </>
          )}
        </div>

        {/* Daily Tasks Section */}
        <DailyTaskBoard
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          roleName={isLibrary ? 'Chief Librarian' : 'Head - Placements'}
        />

        {/* Department Activity Log Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm">
          <h3 className="text-2xl font-black text-slate-900 mb-1">
            {isLibrary ? 'Today’s Book Circulation Logs' : 'Scheduled Recruitment Drives & Eligibility'}
          </h3>
          <p className="text-sm sm:text-base text-slate-500 font-medium mb-6">
            Live internal records maintained for this department.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-black text-xs sm:text-sm">
                {isLibrary ? (
                  <tr>
                    <th className="py-4 px-5">Accession ID</th>
                    <th className="py-4 px-5">Book Title</th>
                    <th className="py-4 px-5">Borrower Student</th>
                    <th className="py-4 px-5">Issue Timestamp</th>
                    <th className="py-4 px-5">Circulation Status</th>
                  </tr>
                ) : (
                  <tr>
                    <th className="py-4 px-5">Company</th>
                    <th className="py-4 px-5">Designation Role</th>
                    <th className="py-4 px-5">Package (CTC)</th>
                    <th className="py-4 px-5">Eligible Candidates</th>
                    <th className="py-4 px-5">Drive Status</th>
                  </tr>
                )}
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm sm:text-base font-medium">
                {records.map((rec, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                    {isLibrary ? (
                      <>
                        <td className="py-4 px-5 font-mono font-bold text-slate-900">{rec.id}</td>
                        <td className="py-4 px-5 font-bold text-slate-900">{rec.title}</td>
                        <td className="py-4 px-5 text-slate-700">{rec.student}</td>
                        <td className="py-4 px-5 text-slate-500 font-mono text-xs sm:text-sm">{rec.date}</td>
                        <td className="py-4 px-5">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                            rec.status.includes('Returned')
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : rec.status.includes('Overdue')
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {rec.status}
                          </span>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-4 px-5 font-bold text-slate-900 text-base">{rec.company}</td>
                        <td className="py-4 px-5 font-semibold text-slate-700">{rec.role}</td>
                        <td className="py-4 px-5 font-black text-emerald-700 text-base">{rec.package}</td>
                        <td className="py-4 px-5 text-slate-700 font-semibold">{rec.eligibleCount} Candidates</td>
                        <td className="py-4 px-5">
                          <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {rec.status}
                          </span>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};

export default DepartmentDashboard;
