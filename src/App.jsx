import React, { useState } from 'react';
import { INITIAL_DATA } from './data/portalData';
import PortalSelection from './components/PortalSelection';
import RoleLogin from './components/RoleLogin';
import DepartmentDashboard from './components/DepartmentDashboard';
import ManagementDashboard from './components/ManagementDashboard';
import ErrorBoundary from './components/ErrorBoundary';
import LogoIntro from './components/LogoIntro';
import './App.css';

export function App() {
  // Navigation states: 'intro' (4.6s high-detail 3D video) | 'select' (the 3 clean boxes) | 'login' (credentials) | 'dashboard' (daily tasks & data)
  const [currentView, setCurrentView] = useState('intro');
  const [selectedRole, setSelectedRole] = useState(null); // 'management' | 'library' | 'placement'
  const [currentUser, setCurrentUser] = useState(null);
  const [portalData, setPortalData] = useState(INITIAL_DATA);

  // Handle selecting one of the 3 boxes
  const handleSelectRole = (roleId) => {
    setSelectedRole(roleId);
    setCurrentView('login');
  };

  // Handle back to the 3 boxes
  const handleBackToSelect = () => {
    setSelectedRole(null);
    setCurrentView('select');
  };

  // Handle successful login
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedRole(null);
    setCurrentView('select');
  };

  // Update tasks for a specific department
  const handleUpdateTasks = (deptKey, newTasks) => {
    setPortalData((prev) => ({
      ...prev,
      [deptKey]: {
        ...prev[deptKey],
        tasks: newTasks
      }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased relative">
      {/* Blended Institutional Watermark with smooth radial feathering & enhanced visibility */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <img
          src="/avn-watermark.png"
          alt="AVNIET Watermark"
          className="w-[500px] sm:w-[620px] md:w-[740px] max-w-[85vw] object-contain select-none pointer-events-none mix-blend-multiply opacity-[0.15] filter blur-[0.3px]"
          style={{
            maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 85%)',
            WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 85%)'
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* View 0: 4 to 5 Second High-Clarity 3D Logo Intro */}
        {currentView === 'intro' && (
          <LogoIntro onComplete={() => setCurrentView('select')} />
        )}

        {/* View 1: The 3 Simple Boxes (Home screen) */}
        {currentView === 'select' && (
          <PortalSelection
            onSelectRole={handleSelectRole}
            onWatchIntro={() => setCurrentView('intro')}
          />
        )}

        {/* View 2: Role Credentials Login Form */}
        {currentView === 'login' && (
          <RoleLogin
            roleId={selectedRole}
            onBack={handleBackToSelect}
            onLoginSuccess={handleLoginSuccess}
          />
        )}

        {/* View 3: Respective Dashboard protected by Enterprise Error Boundary */}
        {currentView === 'dashboard' && currentUser && (
          <ErrorBoundary onReset={handleLogout}>
            {currentUser.role === 'management' ? (
              <ManagementDashboard
                currentUser={currentUser}
                portalData={portalData}
                onUpdateTasks={handleUpdateTasks}
                onLogout={handleLogout}
              />
            ) : (
              <DepartmentDashboard
                roleId={currentUser.role}
                currentUser={currentUser}
                portalData={portalData}
                onUpdateTasks={handleUpdateTasks}
                onLogout={handleLogout}
              />
            )}
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}

export default App;
