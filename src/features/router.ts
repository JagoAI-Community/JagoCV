export function initRouter() {
  const viewLanding = document.getElementById("view-landing");
  const viewLogin = document.getElementById("view-login");
  const viewRegister = document.getElementById("view-register");
  const appWrapper = document.getElementById("app-wrapper");
  const btnLaunchApp = document.getElementById("btn-launch-app");
  const btnCtaLaunch = document.getElementById("btn-cta-launch");
  const btnNavLogin = document.getElementById("btn-nav-login");
  const btnNavRegister = document.getElementById("btn-nav-register");
  const btnLoginGoogle = document.getElementById("btn-login-google");
  const btnRegisterGoogle = document.getElementById("btn-register-google");
  const btnRegisterSubmit = document.getElementById("btn-register-submit");
  const linkToRegister = document.getElementById("link-to-register");
  const linkToLogin = document.getElementById("link-to-login");
  const btnLoginSubmit = document.getElementById("btn-login-submit");

  const viewDashboard = document.getElementById("view-dashboard");
  const viewProfile = document.getElementById("view-profile");
  const viewEditProfile = document.getElementById("view-edit-profile");
  const viewSettings = document.getElementById("view-settings");
  const viewHelp = document.getElementById("view-help");
  
  const viewCreateCv = document.getElementById("view-create-cv");
  const viewDesignResume = document.getElementById("view-design-resume");
  const viewBuildPortfolio = document.getElementById("view-build-portfolio");
  const viewCvResult = document.getElementById("view-cv-result");
  const viewResumeResult = document.getElementById("view-resume-result");
  const viewPortfolioResult = document.getElementById("view-portfolio-result");
  const viewPricing = document.getElementById("view-pricing");
  
  const btnNavProfile = document.getElementById("btn-nav-profile");
  const btnBackFromProfile = document.getElementById("btn-back-from-profile");
  const btnEditProfile = document.getElementById("btn-edit-profile");
  const btnBackFromEditProfile = document.getElementById("btn-back-from-edit-profile");
  const btnCancelEditProfile = document.getElementById("btn-cancel-edit-profile");
  const btnSaveProfile = document.getElementById("btn-save-profile");
  const btnSettings = document.getElementById("btn-settings");
  const btnHelp = document.getElementById("btn-help");
  const btnBackFromSettings = document.getElementById("btn-back-from-settings");
  const btnBackFromHelp = document.getElementById("btn-back-from-help");
  const btnUpgradePlan = document.getElementById("btn-upgrade-plan");
  const btnBackFromPricing = document.getElementById("btn-back-from-pricing");
  const btnLogout = document.getElementById("btn-logout");

  const btnCreateCv = document.getElementById("btn-create-cv");
  const btnDesignResume = document.getElementById("btn-design-resume");
  const btnBuildPortfolio = document.getElementById("btn-build-portfolio");
  const btnGenerateCv = document.getElementById("btn-generate-cv");
  const btnGenerateResume = document.getElementById("btn-generate-resume");
  const btnGeneratePortfolio = document.getElementById("btn-generate-portfolio");

  const btnBackDashboard = document.getElementById("btn-back-dashboard");
  const btnBackDashboardResume = document.getElementById("btn-back-dashboard-resume");
  const btnBackDashboardPortfolio = document.getElementById("btn-back-dashboard-portfolio");
  const btnBackToEditCv = document.getElementById("btn-back-to-edit-cv");
  const btnBackToEditResume = document.getElementById("btn-back-to-edit-resume");
  const btnBackToEditPortfolio = document.getElementById("btn-back-to-edit-portfolio");

  // Input Mode Toggles (ATS CV)
  const tabCvManual = document.getElementById("tab-cv-manual");
  const tabCvAi = document.getElementById("tab-cv-ai");
  const containerCvManual = document.getElementById("container-cv-manual");
  const containerCvAi = document.getElementById("container-cv-ai");

  // Input Mode Toggles (Resume)
  const tabResumeManual = document.getElementById("tab-resume-manual");
  const tabResumeAi = document.getElementById("tab-resume-ai");
  const containerResumeManual = document.getElementById("container-resume-manual");
  const containerResumeAi = document.getElementById("container-resume-ai");

  // Input Mode Toggles (Portfolio)
  const tabPortfolioManual = document.getElementById("tab-portfolio-manual");
  const tabPortfolioAi = document.getElementById("tab-portfolio-ai");
  const containerPortfolioManual = document.getElementById("container-portfolio-manual");
  const containerPortfolioAi = document.getElementById("container-portfolio-ai");

  // --- Portfolio Responsive View Toggles Logic ---
  const btnViewMobile = document.getElementById("btn-view-mobile");
  const btnViewDesktop = document.getElementById("btn-view-desktop");
  const portfolioDocumentContainer = document.getElementById("portfolio-document-container");

  function hideAllViews() {
    [viewDashboard, viewCreateCv, viewDesignResume, viewBuildPortfolio, viewCvResult, viewResumeResult, viewPortfolioResult, viewProfile, viewEditProfile, viewSettings, viewHelp, viewPricing].forEach(view => {
      if (view) {
        view.classList.add("hidden");
        view.classList.remove("block");
      }
    });
  }

  function showView(view: HTMLElement | null) {
    if (view) {
      view.classList.remove("hidden");
      view.classList.add("block");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function launchDashboardApp() {
       if (viewLanding) {
          viewLanding.classList.add("hidden");
          viewLanding.classList.remove("block", "flex-col");
       }
       if (viewLogin) {
          viewLogin.classList.add("hidden");
          viewLogin.classList.remove("flex");
       }
       if (appWrapper) {
          appWrapper.classList.remove("hidden");
          appWrapper.classList.add("flex"); // Since it uses flex-col
       }
       showView(viewDashboard);
  }

  function launchLoginApp() {
     if (viewLanding) {
        viewLanding.classList.add("hidden");
        viewLanding.classList.remove("block", "flex-col");
     }
     if (viewLogin) {
        viewLogin.classList.remove("hidden");
        viewLogin.classList.add("flex");
     }
     if (viewRegister) {
        viewRegister.classList.add("hidden");
        viewRegister.classList.remove("flex");
     }
     if (appWrapper) {
        appWrapper.classList.add("hidden");
        appWrapper.classList.remove("flex");
     }
     window.scrollTo(0, 0);
  }

  function launchRegisterApp() {
     if (viewLanding) {
        viewLanding.classList.add("hidden");
        viewLanding.classList.remove("block", "flex-col");
     }
     if (viewLogin) {
        viewLogin.classList.add("hidden");
        viewLogin.classList.remove("flex");
     }
     if (viewRegister) {
        viewRegister.classList.remove("hidden");
        viewRegister.classList.add("flex");
     }
     if (appWrapper) {
        appWrapper.classList.add("hidden");
        appWrapper.classList.remove("flex");
     }
     window.scrollTo(0, 0);
  }

  if (btnNavRegister) btnNavRegister.addEventListener("click", launchRegisterApp);
  if (linkToRegister) linkToRegister.addEventListener("click", (e) => { e.preventDefault(); launchRegisterApp(); });
  if (linkToLogin) linkToLogin.addEventListener("click", (e) => { e.preventDefault(); launchLoginApp(); });
  if (btnRegisterSubmit) btnRegisterSubmit.addEventListener("click", launchDashboardApp);
  if (btnNavLogin) btnNavLogin.addEventListener("click", launchLoginApp);
  
  const landingLoginBtns = document.querySelectorAll('.btn-landing-login');
  landingLoginBtns.forEach(btn => btn.addEventListener("click", launchLoginApp));

  if (btnLaunchApp) btnLaunchApp.addEventListener("click", launchLoginApp);
  if (btnCtaLaunch) btnCtaLaunch.addEventListener("click", launchLoginApp);
  if (btnLoginGoogle) btnLoginGoogle.addEventListener("click", launchDashboardApp);
  if (btnLoginSubmit) btnLoginSubmit.addEventListener("click", launchDashboardApp);
  
  if (btnNavProfile) {
     btnNavProfile.addEventListener("click", () => {
        hideAllViews();
        showView(viewProfile);
     });
  }
  
  if (btnUpgradePlan) {
    btnUpgradePlan.addEventListener("click", () => {
       hideAllViews();
       showView(viewPricing);
    });
  }

  if (btnBackFromPricing) {
    btnBackFromPricing.addEventListener("click", () => {
       hideAllViews();
       showView(viewProfile);
    });
  }

  if (btnBackFromProfile) {
     btnBackFromProfile.addEventListener("click", () => {
        hideAllViews();
        showView(viewDashboard);
     });
  }

  if (btnEditProfile) {
    btnEditProfile.addEventListener("click", () => {
      hideAllViews();
      showView(viewEditProfile);
    });
  }

  const goBackToProfile = () => {
    hideAllViews();
    showView(viewProfile);
  };

  if (btnBackFromEditProfile) btnBackFromEditProfile.addEventListener("click", goBackToProfile);
  if (btnCancelEditProfile) btnCancelEditProfile.addEventListener("click", goBackToProfile);
  if (btnSaveProfile) {
    btnSaveProfile.addEventListener("click", () => {
      // Typically save logic here, then go back
      goBackToProfile();
    });
  }

  if (btnSettings) {
    btnSettings.addEventListener("click", () => {
      hideAllViews();
      showView(viewSettings);
    });
  }

  if (btnHelp) {
    btnHelp.addEventListener("click", () => {
      hideAllViews();
      showView(viewHelp);
    });
  }

  if (btnBackFromSettings) btnBackFromSettings.addEventListener("click", goBackToProfile);
  if (btnBackFromHelp) btnBackFromHelp.addEventListener("click", goBackToProfile);

  if (btnLogout) {
     btnLogout.addEventListener("click", () => {
        if (appWrapper) {
           appWrapper.classList.add("hidden");
           appWrapper.classList.remove("flex");
        }
        if (viewLanding) {
           viewLanding.classList.add("block", "flex-col");
           viewLanding.classList.remove("hidden", "flex");
        }
        hideAllViews();
        showView(viewDashboard);
     });
  }

  if (btnCreateCv) {
    btnCreateCv.addEventListener("click", () => {
      hideAllViews();
      showView(viewCreateCv);
    });
  }

  if (btnDesignResume) {
    btnDesignResume.addEventListener("click", () => {
      hideAllViews();
      showView(viewDesignResume);
    });
  }

  if (btnBuildPortfolio) {
    btnBuildPortfolio.addEventListener("click", () => {
      hideAllViews();
      showView(viewBuildPortfolio);
    });
  }

  if (btnGenerateCv) {
    btnGenerateCv.addEventListener("click", () => {
      const originalText = btnGenerateCv.innerHTML;
      btnGenerateCv.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Membuat...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewCvResult);
        btnGenerateCv.innerHTML = originalText;
      }, 1000);
    });
  }

  const btnGenerateCvAi = document.getElementById("btn-generate-cv-ai");
  if (btnGenerateCvAi) {
    btnGenerateCvAi.addEventListener("click", () => {
      const originalText = btnGenerateCvAi.innerHTML;
      btnGenerateCvAi.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Membuat...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewCvResult);
        btnGenerateCvAi.innerHTML = originalText;
      }, 1000);
    });
  }

  if (btnGenerateResume) {
    btnGenerateResume.addEventListener("click", () => {
      const originalText = btnGenerateResume.innerHTML;
      btnGenerateResume.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Menyusun Desain...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewResumeResult);
        btnGenerateResume.innerHTML = originalText;
      }, 1200);
    });
  }

  const btnGenerateResumeAi = document.getElementById("btn-generate-resume-ai");
  if (btnGenerateResumeAi) {
    btnGenerateResumeAi.addEventListener("click", () => {
      const originalText = btnGenerateResumeAi.innerHTML;
      btnGenerateResumeAi.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Menyusun AI Desain...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewResumeResult);
        btnGenerateResumeAi.innerHTML = originalText;
      }, 1200);
    });
  }

  if (btnGeneratePortfolio) {
    btnGeneratePortfolio.addEventListener("click", () => {
      const originalText = btnGeneratePortfolio.innerHTML;
      btnGeneratePortfolio.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Mempublikasikan...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewPortfolioResult);
        btnGeneratePortfolio.innerHTML = originalText;
      }, 1500);
    });
  }

  const btnGeneratePortfolioAi = document.getElementById("btn-generate-portfolio-ai");
  if (btnGeneratePortfolioAi) {
    btnGeneratePortfolioAi.addEventListener("click", () => {
      const originalText = btnGeneratePortfolioAi.innerHTML;
      btnGeneratePortfolioAi.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Membuat dengan AI...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewPortfolioResult);
        btnGeneratePortfolioAi.innerHTML = originalText;
      }, 1500);
    });
  }

  if (btnBackDashboard) {
    btnBackDashboard.addEventListener("click", (e) => {
      e.preventDefault();
      hideAllViews();
      showView(viewDashboard);
    });
  }

  if (btnBackDashboardResume) btnBackDashboardResume.addEventListener("click", () => { hideAllViews(); showView(viewDashboard); });
  if (btnBackDashboardPortfolio) btnBackDashboardPortfolio.addEventListener("click", () => { hideAllViews(); showView(viewDashboard); });
  if (btnBackToEditCv) btnBackToEditCv.addEventListener("click", () => { hideAllViews(); showView(viewCreateCv); });
  if (btnBackToEditResume) btnBackToEditResume.addEventListener("click", () => { hideAllViews(); showView(viewDesignResume); });
  if (btnBackToEditPortfolio) btnBackToEditPortfolio.addEventListener("click", () => { hideAllViews(); showView(viewBuildPortfolio); });

  // Input Mode Toggles Logic (CV)
  const cvWizardProgress = document.getElementById("cv-wizard-progress");
  if (tabCvManual && tabCvAi && containerCvManual && containerCvAi) {
    tabCvManual.addEventListener("click", () => {
      containerCvManual.classList.remove("hidden");
      containerCvManual.classList.add("block");
      containerCvAi.classList.add("hidden");
      containerCvAi.classList.remove("block");
      tabCvManual.className = "flex-1 py-2.5 rounded-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white text-sm font-semibold transition-all";
      tabCvAi.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      if (cvWizardProgress) cvWizardProgress.classList.remove("hidden");
    });
    tabCvAi.addEventListener("click", () => {
      containerCvAi.classList.remove("hidden");
      containerCvAi.classList.add("block");
      containerCvManual.classList.add("hidden");
      containerCvManual.classList.remove("block");
      tabCvAi.className = "flex-1 py-2.5 rounded-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      tabCvManual.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all";
      if (cvWizardProgress) cvWizardProgress.classList.add("hidden");
    });
  }

  // Input Mode Toggles Logic (Resume)
  const resumeWizardProgress = document.getElementById("resume-wizard-progress");
  if (tabResumeManual && tabResumeAi && containerResumeManual && containerResumeAi) {
    tabResumeManual.addEventListener("click", () => {
      containerResumeManual.classList.remove("hidden");
      containerResumeManual.classList.add("block");
      containerResumeAi.classList.add("hidden");
      containerResumeAi.classList.remove("block");
      tabResumeManual.className = "flex-1 py-2.5 rounded-xl bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)] text-white text-sm font-semibold transition-all";
      tabResumeAi.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      if (resumeWizardProgress) resumeWizardProgress.classList.remove("hidden");
    });
    tabResumeAi.addEventListener("click", () => {
      containerResumeAi.classList.remove("hidden");
      containerResumeAi.classList.add("block");
      containerResumeManual.classList.add("hidden");
      containerResumeManual.classList.remove("block");
      tabResumeAi.className = "flex-1 py-2.5 rounded-xl bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      tabResumeManual.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all";
      if (resumeWizardProgress) resumeWizardProgress.classList.add("hidden");
    });
  }

  // Input Mode Toggles Logic (Portfolio)
  const portfolioWizardProgress = document.getElementById("portfolio-wizard-progress");
  if (tabPortfolioManual && tabPortfolioAi && containerPortfolioManual && containerPortfolioAi) {
    tabPortfolioManual.addEventListener("click", () => {
      containerPortfolioManual.classList.remove("hidden");
      containerPortfolioManual.classList.add("block");
      containerPortfolioAi.classList.add("hidden");
      containerPortfolioAi.classList.remove("block");
      tabPortfolioManual.className = "flex-1 py-2.5 rounded-xl bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)] text-white text-sm font-semibold transition-all";
      tabPortfolioAi.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      if (portfolioWizardProgress) portfolioWizardProgress.classList.remove("hidden");
    });
    tabPortfolioAi.addEventListener("click", () => {
      containerPortfolioAi.classList.remove("hidden");
      containerPortfolioAi.classList.add("block");
      containerPortfolioManual.classList.add("hidden");
      containerPortfolioManual.classList.remove("block");
      tabPortfolioAi.className = "flex-1 py-2.5 rounded-xl bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      tabPortfolioManual.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all";
      if (portfolioWizardProgress) portfolioWizardProgress.classList.add("hidden");
    });
  }

  if (btnViewMobile && btnViewDesktop && portfolioDocumentContainer) {
    const bentoGrid = document.getElementById("portfolio-bento-grid");
    
    // Switch to Mobile
    btnViewMobile.addEventListener("click", () => {
      // Button states
      btnViewMobile.className = "p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow transition-colors";
      btnViewDesktop.className = "p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors";

      // Container styles (enable mobile constraints)
      portfolioDocumentContainer.className = "max-w-[400px] mx-auto min-h-[80vh] relative shadow-2xl rounded-[3rem] border-[8px] border-slate-800 overflow-hidden transition-all duration-500 ease-in-out";
      
      // Grid updates
      if (bentoGrid) {
         bentoGrid.className = "grid grid-cols-2 gap-4 pt-4 transition-all duration-500";
      }
    });

    // Switch to Desktop
    btnViewDesktop.addEventListener("click", () => {
      // Button states
      btnViewDesktop.className = "p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow transition-colors";
      btnViewMobile.className = "p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors";

      // Container styles (enable wide constraints)
      portfolioDocumentContainer.className = "max-w-5xl w-full mx-auto min-h-[70vh] relative shadow-2xl rounded-2xl border border-slate-700 overflow-hidden transition-all duration-500 ease-in-out";

      // Grid updates (show more columns on desktop)
      if (bentoGrid) {
         bentoGrid.className = "grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 transition-all duration-500";
      }
    });
  }

  // --- Event Delegation for dynamically rendered AI Generation Buttons ---
  document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const aiBtnMatch = target.closest("#btn-generate-cv-ai, #btn-generate-resume-ai, #btn-generate-portfolio-ai");
    if (aiBtnMatch) {
      if (aiBtnMatch.id === "btn-generate-cv-ai") {
        const originalText = aiBtnMatch.innerHTML;
        aiBtnMatch.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Membuat...`;
        setTimeout(() => {
          hideAllViews();
          showView(viewCvResult);
          aiBtnMatch.innerHTML = originalText;
        }, 1000);
      } else if (aiBtnMatch.id === "btn-generate-resume-ai") {
        const originalText = aiBtnMatch.innerHTML;
        aiBtnMatch.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Menyusun AI Desain...`;
        setTimeout(() => {
          hideAllViews();
          showView(viewResumeResult);
          aiBtnMatch.innerHTML = originalText;
        }, 1200);
      } else if (aiBtnMatch.id === "btn-generate-portfolio-ai") {
        const originalText = aiBtnMatch.innerHTML;
        aiBtnMatch.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Membuat dengan AI...`;
        setTimeout(() => {
          hideAllViews();
          showView(viewPortfolioResult);
          aiBtnMatch.innerHTML = originalText;
        }, 1500);
      }
    }
  });

}
