import { hideAllViews, showView, getEl } from '../utils/dom';

/**
 * Handles all intra-app routing (SPA view switching)
 */
export function initRouter(): void {
  const viewLanding = getEl("view-landing");
  const viewLogin = getEl("view-login");
  const viewRegister = getEl("view-register");
  const appWrapper = getEl("app-wrapper");
  const viewDashboard = getEl("view-dashboard");
  const viewProfile = getEl("view-profile");
  const viewPricing = getEl("view-pricing");
  const viewCreateCv = getEl("view-create-cv");
  const viewDesignResume = getEl("view-design-resume");
  const viewBuildPortfolio = getEl("view-build-portfolio");
  
  // Landing & Auth Launchers
  const launchDashboardApp = () => {
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
      appWrapper.classList.add("flex"); 
    }
    hideAllViews();
    showView(viewDashboard);
  };

  const launchLoginApp = () => {
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
  };

  const launchRegisterApp = () => {
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
  };

  // Auth Button Bindings
  const bindClick = (id: string, handler: (e?: Event) => void, preventDefault = false) => {
    const el = getEl(id);
    if (el) {
      el.addEventListener("click", (e) => {
        if (preventDefault) e.preventDefault();
        handler(e);
      });
    }
  };

  bindClick("btn-nav-register", launchRegisterApp);
  bindClick("link-to-register", launchRegisterApp, true);
  bindClick("link-to-login", launchLoginApp, true);
  bindClick("btn-register-submit", launchDashboardApp);
  bindClick("btn-nav-login", launchLoginApp);
  bindClick("btn-launch-app", launchLoginApp);
  bindClick("btn-cta-launch", launchLoginApp);
  bindClick("btn-login-google", launchDashboardApp);
  bindClick("btn-login-submit", launchDashboardApp);

  document.querySelectorAll('.btn-landing-login').forEach(btn => {
    btn.addEventListener("click", launchLoginApp);
  });

  // App Navigation
  bindClick("btn-nav-profile", () => { hideAllViews(); showView(viewProfile); });
  bindClick("btn-upgrade-plan", () => { hideAllViews(); showView(viewPricing); });
  bindClick("btn-back-from-pricing", () => { hideAllViews(); showView(viewProfile); });
  bindClick("btn-back-from-profile", () => { hideAllViews(); showView(viewDashboard); });

  // Wizard Launchers
  bindClick("btn-create-cv", () => { hideAllViews(); showView(viewCreateCv); });
  bindClick("btn-design-resume", () => { hideAllViews(); showView(viewDesignResume); });
  bindClick("btn-build-portfolio", () => { hideAllViews(); showView(viewBuildPortfolio); });

  // Back to Dashboard
  const backToDash = (e?: Event) => {
    if (e) e.preventDefault();
    hideAllViews();
    showView(viewDashboard);
  };
  
  bindClick("btn-back-dashboard", backToDash, true);
  bindClick("btn-back-dashboard-resume", backToDash);
  bindClick("btn-back-dashboard-portfolio", backToDash);

  // Back to Edit
  bindClick("btn-back-to-edit-cv", () => { hideAllViews(); showView(viewCreateCv); });
  bindClick("btn-back-to-edit-resume", () => { hideAllViews(); showView(viewDesignResume); });
  bindClick("btn-back-to-edit-portfolio", () => { hideAllViews(); showView(viewBuildPortfolio); });

  // Logout
  bindClick("btn-logout", () => {
    if (appWrapper) {
      appWrapper.classList.add("hidden");
      appWrapper.classList.remove("flex");
    }
    if (viewLanding) {
      viewLanding.classList.add("block", "flex-col");
      viewLanding.classList.remove("hidden", "flex");
    }
    hideAllViews();
    showView(viewDashboard); // Reset inner state for next login
  });
}
