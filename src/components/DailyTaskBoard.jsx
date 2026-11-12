import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, Plus, Trash2, Clock, ListTodo } from 'lucide-react';

export const DailyTaskBoard = ({ tasks, onToggleTask, onAddTask, onDeleteTask, roleName }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('High');
  const [filter, setFilter] = useState('all'); // 'all' | 'pending' | 'completed'

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    onAddTask({
      id: 'task_' + Date.now(),
      title: newTaskTitle.trim(),
      priority: newTaskPriority,
      completed: false,
      category: 'Daily Operations',
      dueDate: 'Today'
    });

    setNewTaskTitle('');
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'pending') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-9">
      {/* Top Header of Task Board */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-700">
              <ListTodo className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Daily Operations Tasks
              </h3>
              <p className="text-sm sm:text-base text-slate-500 font-medium mt-0.5">
                Assigned to {roleName} • Real-time Task Execution Checklist
              </p>
            </div>
          </div>
        </div>

        {/* Progress Metric */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">Completion</span>
            <p className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
              {completedCount} of {tasks.length} Done ({progressPercent}%)
            </p>
          </div>
          <div className="w-24 h-3 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Add New Task Form */}
      <form onSubmit={handleAddSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Type a new daily operational directive here (e.g. Approve lab budget, review dean workload audit)..."
          className="flex-1 px-5 py-3.5 rounded-2xl border border-slate-300 text-base sm:text-lg font-medium focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 focus:outline-none"
        />
        <select
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value)}
          className="px-4 py-3.5 rounded-2xl border border-slate-300 text-sm sm:text-base font-bold bg-white text-slate-700 focus:outline-none cursor-pointer"
        >
          <option value="High">Priority: High</option>
          <option value="Medium">Priority: Medium</option>
          <option value="Normal">Priority: Normal</option>
        </select>
        <button
          type="submit"
          className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-base font-bold flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          <span>Add Directive</span>
        </button>
      </form>

      {/* Filter Tabs */}
      <div className="mt-6 flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          {['all', 'pending', 'completed'].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm sm:text-base font-bold capitalize transition-colors cursor-pointer ${
                filter === f
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {f} ({f === 'all' ? tasks.length : f === 'pending' ? tasks.length - completedCount : completedCount})
            </button>
          ))}
        </div>

        <span className="text-xs sm:text-sm text-slate-500 font-medium hidden sm:inline">
          Click checkbox to toggle completion
        </span>
      </div>

      {/* Tasks List with Big, Clear Typography */}
      <div className="mt-5 space-y-3.5">
        <AnimatePresence>
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-base font-medium">
              No directives found under this filter.
            </div>
          ) : (
            filteredTasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                  task.completed
                    ? 'bg-slate-50/70 border-slate-200/60 opacity-75'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Checkbox & Details */}
                <div className="flex items-start gap-4 flex-1">
                  <button
                    type="button"
                    onClick={() => onToggleTask(task.id)}
                    className="mt-1 text-slate-400 hover:text-emerald-600 transition-colors focus:outline-none cursor-pointer"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </button>

                  <div className="flex-1">
                    <p
                      className={`text-base sm:text-lg font-bold leading-snug ${
                        task.completed
                          ? 'line-through text-slate-400'
                          : 'text-slate-900'
                      }`}
                    >
                      {task.title}
                    </p>

                    <div className="flex flex-wrap items-center gap-2.5 mt-2.5">
                      {/* Priority Tag */}
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          task.priority === 'High'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : task.priority === 'Medium'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {task.priority} Priority
                      </span>

                      {/* Category */}
                      {task.category && (
                        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                          {task.category}
                        </span>
                      )}

                      {/* Due Time */}
                      <span className="text-xs sm:text-sm text-slate-500 flex items-center gap-1 font-medium">
                        <Clock className="w-4 h-4" />
                        <span>Due: {task.dueDate}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delete action */}
                <button
                  type="button"
                  onClick={() => onDeleteTask(task.id)}
                  title="Delete directive"
                  className="text-slate-300 hover:text-rose-500 transition-colors p-2 rounded-lg hover:bg-rose-50 cursor-pointer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DailyTaskBoard;
