import React, { useEffect } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import AppLayout from './components/layout/AppLayout';

import EditProfileView from './components/views/EditProfileView';
import SettingsView from './components/views/SettingsView';
import HelpView from './components/views/HelpView';

import { useAuth } from './controllers/useAuth';

function RootRoute() {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return null; // Or a loading spinner
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <LandingView />;
}

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRoute />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/pricing" element={<PricingView />} />
        
        {/* Authenticated Routes wrapped in AppLayout */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/profile/edit" element={<EditProfileView />} />
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/help" element={<HelpView />} />
          <Route path="/cv/build" element={<CreateCvView />} />
          <Route path="/cv/result/:idOrSlug" element={<CvResultView />} />
          <Route path="/resume/design" element={<DesignResumeView />} />
          <Route path="/resume/result/:idOrSlug" element={<ResumeResultView />} />
          <Route path="/portfolio/build" element={<BuildPortfolioView />} />
          <Route path="/portfolio/result/:idOrSlug" element={<PortfolioResultView />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
