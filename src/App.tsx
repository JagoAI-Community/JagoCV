import React, { useEffect } from 'react';
import './index.css';
import LandingView from './components/views/LandingView';
import LoginView from './components/views/LoginView';
import RegisterView from './components/views/RegisterView';
import ProfileView from './components/views/ProfileView';
import PricingView from './components/views/PricingView';
import DashboardView from './components/views/DashboardView';
import CreateCvView from './components/views/CreateCvView';
import DesignResumeView from './components/views/DesignResumeView';
import BuildPortfolioView from './components/views/BuildPortfolioView';
import CvResultView from './components/views/CvResultView';
import ResumeResultView from './components/views/ResumeResultView';
import PortfolioResultView from './components/views/PortfolioResultView';

import EditProfileView from './components/views/EditProfileView';
import SettingsView from './components/views/SettingsView';
import HelpView from './components/views/HelpView';

export default function App() {
  useEffect(() => {
    // Import main logic dynamically so it runs after render
    import('./main').then((m) => {
      m.initApp();
    });
  }, []);

  return (
    <>
      
    
    {/* Landing Page View */}
      <LandingView />

                    {/* Login Page (Hidden initially) */}
      <LoginView />


    {/* Register Page (Hidden initially) */}
      <RegisterView />

{/* App Wrapper (Hidden initially) */}
    <div id="app-wrapper" className="hidden flex-col w-full flex-1">
      
      {/* Top Navigation */}
    <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#070B19]/80 backdrop-blur-md sticky top-0 z-50 animate-[slideDown_0.3s_ease_forwards]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            J
          </div>
          <span className="font-semibold text-slate-900 dark:text-slate-100 tracking-wide text-xl">jago<span className="text-blue-400">CV</span></span>
        </div>
        <div className="flex items-center gap-4">
          <button id="theme-toggle-app" className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Theme">
            <svg id="theme-icon-dark-app" className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            <svg id="theme-icon-light-app" className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </button>

          <button id="btn-nav-profile" className="flex items-center gap-4 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 p-1.5 pr-2 rounded-full transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700/50 cursor-pointer">
            <div className="hidden md:block text-right">
              <div id="nav-user-name" className="text-sm font-semibold text-slate-800 dark:text-slate-200"></div>
              <div id="nav-user-role" className="text-xs text-blue-400"></div>
            </div>
            <img id="nav-profile-img" src={undefined} alt="Profile" className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 object-cover" />
          </button>
        </div>
      </div>
    </nav>

    {/* Ambient Background for App */}
    <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

    {/* Main Dashboard Application Hub */}
    <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 relative z-10">
      
      {/* VIEW: PROFILE */}
      <ProfileView />

      {/* VIEW: EDIT PROFILE */}
      <EditProfileView />

      {/* VIEW: SETTINGS & HELP */}
      <SettingsView />
      <HelpView />
      
      {/* VIEW: PRICING */}
      <PricingView />

      {/* VIEW: DASHBOARD */}
      <DashboardView />

      {/* VIEW: CREATE CV */}
      <CreateCvView />

      {/* VIEW: DESIGN RESUME (Visual Resume) */}
      <DesignResumeView />
      {/* VIEW: WEB PORTFOLIO (Linktree/Bento) */}
      <BuildPortfolioView />

      {/* VIEW: CV RESULT (Mock generated CV) */}
      <CvResultView />

      {/* VIEW: RESUME RESULT (Mock generated Visual Resume) */}
      <ResumeResultView />

      {/* VIEW: PORTFOLIO RESULT (Mock generated Web UI / Linktree) */}
      <PortfolioResultView />

    </main>
    </div>

    

    
  
{/* CV Wizard Logic */}


    </>
  );
}
