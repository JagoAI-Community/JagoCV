import './index.css';

// Types and Interfaces
export // Extend DocType
type DocType = "ATS CV" | "Visual Resume" | "Web Portfolio" | "Cover Letter";

export type DocStatus = "Selesai" | "Draf" | "Diterbitkan";

export interface RecentDocument {
  id: string;
  title: string;
  type: DocType;
  status: DocStatus;
  date: string;
}

export interface UserDashboardData {
  name: string;
  role: string;
  profileImageUrl: string;
  portfolioViews: number;
  recentDocs: RecentDocument[];
}

// Mock Data
const mockDashboardData: UserDashboardData = {
  name: "Budi Santoso",
  role: "CS Student & Web Dev",
  profileImageUrl: "https://picsum.photos/seed/budi/400/400",
  portfolioViews: 1248,
  recentDocs: [
    { id: "DOC-8012", title: "Software Engineer - TechCorp", type: "ATS CV", status: "Selesai", date: "2 jam yang lalu" },
    { id: "DOC-8004", title: "Creative Frontend Portfolio", type: "Visual Resume", status: "Draf", date: "1 hari yang lalu" },
    { id: "DOC-7992", title: "budi.link Bio Page", type: "Web Portfolio", status: "Diterbitkan", date: "15 Apr 2026" },
  ]
};

// DOM Logic
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Logic
  const htmlEl = document.documentElement;
  
  // Prefer dark mode by default if not previously set, otherwise respect localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    htmlEl.classList.remove('dark');
  } else {
    htmlEl.classList.add('dark');
  }

  const toggleTheme = () => {
    if (htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const themeToggleLanding = document.getElementById('theme-toggle');
  const themeToggleApp = document.getElementById('theme-toggle-app');
  
  if (themeToggleLanding) themeToggleLanding.addEventListener('click', toggleTheme);
  if (themeToggleApp) themeToggleApp.addEventListener('click', toggleTheme);

  // Populate nav/mock data
  populateDashboard(mockDashboardData);

  // Router logic

  const viewPreviewGallery = document.getElementById("view-preview-gallery");
  const btnBackPreviewGallery = document.getElementById("btn-back-preview-gallery");
  
  const tabGalleryCv = document.getElementById("tab-gallery-cv");
  const tabGalleryResume = document.getElementById("tab-gallery-resume");
  const tabGalleryPortfolio = document.getElementById("tab-gallery-portfolio");
  
  const contentGalleryCv = document.getElementById("gallery-content-cv");
  const contentGalleryResume = document.getElementById("gallery-content-resume");
  const contentGalleryPortfolio = document.getElementById("gallery-content-portfolio");

  const btnPreviewDashCv = document.getElementById("btn-preview-dash-cv");
  const btnPreviewDashResume = document.getElementById("btn-preview-dash-resume");
  const btnPreviewDashPortfolio = document.getElementById("btn-preview-dash-portfolio");
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
  
  const viewCreateCv = document.getElementById("view-create-cv");
  const viewDesignResume = document.getElementById("view-design-resume");
  const viewBuildPortfolio = document.getElementById("view-build-portfolio");
  const viewCvResult = document.getElementById("view-cv-result");
  const viewResumeResult = document.getElementById("view-resume-result");
  const viewPortfolioResult = document.getElementById("view-portfolio-result");
  const viewPricing = document.getElementById("view-pricing");
  
  const btnNavProfile = document.getElementById("btn-nav-profile");
  const btnBackFromProfile = document.getElementById("btn-back-from-profile");
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

  function populateDashboard(data: UserDashboardData) {
    const elName = document.getElementById("nav-user-name");
    const elRole = document.getElementById("nav-user-role");
    const elImg = document.getElementById("nav-profile-img") as HTMLImageElement;
    
    // Also populate the Profile View
    const pfName = document.getElementById("profile-page-name");
    const pfRole = document.getElementById("profile-page-role");
    const pfImg = document.getElementById("profile-page-img") as HTMLImageElement;

    if (elName) elName.textContent = data.name;
    if (elRole) elRole.textContent = data.role;
    if (elImg) elImg.src = data.profileImageUrl;
    
    if (pfName) pfName.textContent = data.name;
    if (pfRole) pfRole.textContent = data.role;
    if (pfImg) pfImg.src = data.profileImageUrl;

    const viewsEl = document.getElementById("lbl-portfolio-views");
    if (viewsEl) viewsEl.textContent = data.portfolioViews.toString();

    const grid = document.getElementById("recent-docs-grid");
    const listBody = document.getElementById("recent-docs-list");
    
    (window as any).showToast = ((msg: string) => {
      const toast = document.createElement("div");
      toast.className = "fixed bottom-5 right-5 z-50 bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-[slideInRight_0.3s_ease_forwards]";
      toast.innerHTML = `<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-sm font-medium">${msg}</span>`;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.classList.replace("animate-[slideInRight_0.3s_ease_forwards]", "animate-[zoomOut_0.3s_ease_forwards]");
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    });

    function renderDocs(filter) {
      if (!grid || !listBody) return;
      grid.innerHTML = `
        <!-- Create Blank Card -->
        <div class="group relative bg-[#F8FAFC]/80 dark:bg-[#0a0f1c]/50 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/10" onclick="window.showToast('Membuat dokumen kosong baru...')">
          <div class="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          </div>
          <span class="text-sm font-bold text-slate-700 dark:text-slate-300">Buat Kosong</span>
        </div>
      `;
      listBody.innerHTML = "";

      const filteredDocs = filter === "Semua" ? data.recentDocs : data.recentDocs.filter(d => {
         if (filter === "CV ATS") return d.type === "ATS CV";
         if (filter === "Resume" || filter === "Visual Resume") return d.type === "Visual Resume";
         if (filter === "Web Portfolio") return d.type === "Web Portfolio";
         if (filter === "Cover Letter") return d.type === "Cover Letter";
         return false;
      });

      filteredDocs.forEach(doc => {
        let typeLabel = "Dokumen";
        if (doc.type === "ATS CV") typeLabel = "ATS CV";
        if (doc.type === "Visual Resume") typeLabel = "Resume";
        if (doc.type === "Web Portfolio") typeLabel = "Web Portfolio";

        const div = document.createElement("div");
        div.className = "group relative bg-white dark:bg-[#0B1221]/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden aspect-[3/4] flex flex-col";
        div.innerHTML = `
          <div class="flex-1 bg-slate-50 dark:bg-[#070B19] p-4 relative overflow-hidden group-hover:bg-slate-100 dark:group-hover:bg-slate-800/30 transition-colors" onclick="window.showToast('Membuka ' + '${doc.title}')">
            <!-- Simulated document UI -->
            <div class="w-full h-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded px-3 py-4 flex flex-col gap-2 opacity-80 pointer-events-none">
               ${doc.type === 'Web Portfolio' ? '<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 mb-2"></div>' : ''}
               <div class="w-1/2 h-2 ${doc.type === 'Web Portfolio' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-300 dark:bg-slate-600'} rounded-full ${doc.type !== 'Web Portfolio' ? 'mx-auto' : ''}"></div>
               ${doc.type !== 'Web Portfolio' ? '<div class="w-1/3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-2"></div>' : ''}
               <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               <div class="w-[90%] h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               <div class="w-[80%] h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               
               ${doc.type !== 'Web Portfolio' ? `
               <div class="mt-4 w-1/3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
               <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-1"></div>
               <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               ` : ''}
            </div>
          </div>
          <!-- Context Menu Button -->
          <button class="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:text-blue-600 backdrop-blur-sm z-10" onclick="event.stopPropagation(); window.showToast('Menampilkan opsi menu...')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          <div class="p-3 bg-white dark:bg-[#0B1221] border-t border-slate-100 dark:border-slate-800/80 shrink-0">
            <h3 class="text-sm font-bold text-slate-800 dark:text-white truncate">${doc.title}</h3>
            <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center justify-between">
              <span>${typeLabel}</span>
              <span>${doc.date}</span>
            </p>
          </div>
        `;
        grid.appendChild(div);

        // Populate table (list view)
        let badgeColor = "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
        if (doc.status === "Selesai") badgeColor = "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
        if (doc.status === "Diterbitkan") badgeColor = "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20";
        if (doc.status === "Draf") badgeColor = "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";

        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer";
        tr.innerHTML = `
          <td class="py-4 px-8" onclick="window.showToast('Membuka ' + '${doc.title}')">
            <p class="font-bold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${doc.title}</p>
            <p class="text-xs text-slate-500 mt-1 font-medium">${doc.id}</p>
          </td>
          <td class="py-4 px-8" onclick="window.showToast('Membuka ' + '${doc.title}')">
            <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">${doc.type}</span>
          </td>
          <td class="py-4 px-8" onclick="window.showToast('Membuka ' + '${doc.title}')">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badgeColor}">
              ${doc.status}
            </span>
          </td>
          <td class="py-4 px-8 text-sm text-slate-600 dark:text-slate-400 font-medium" onclick="window.showToast('Membuka ' + '${doc.title}')">${doc.date}</td>
          <td class="py-4 px-8 text-right">
            <button class="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm" onclick="event.stopPropagation(); window.showToast('Mengedit ' + '${doc.title}')">Edit</button>
          </td>
        `;
        listBody.appendChild(tr);
      });
    }

    if (grid && listBody) {
       renderDocs("Semua");
       
       // Add filter click event handling
       const filterButtons = document.querySelectorAll(".hide-scrollbar button");
       filterButtons.forEach(btn => {
         btn.addEventListener("click", (e) => {
            // Un-active all
            filterButtons.forEach(b => {
               if(b === e.target) {
                  b.className = "px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium whitespace-nowrap transition-colors";
               } else if (b.textContent === (e.target as HTMLElement).textContent) {
                  b.className = "px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium whitespace-nowrap transition-colors";
               } else {
                  if (b.className.includes("bg-slate-900")) {
                     b.className = "px-4 py-1.5 rounded-full bg-white/60 dark:bg-[#0B1221]/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-sm font-medium whitespace-nowrap transition-colors";
                  }
               }
            });
            renderDocs((e.target as HTMLElement).textContent?.trim() || "Semua");
         });
       });

    }

    const btnGrid = document.getElementById("btn-view-grid");
    const btnList = document.getElementById("btn-view-list");
    const gridContainer = document.getElementById("recent-docs-grid");
    const listContainer = document.getElementById("recent-docs-list-container");

    if (btnGrid && btnList && gridContainer && listContainer) {
      btnGrid.addEventListener("click", () => {
        gridContainer.classList.remove("hidden");
        listContainer.classList.add("hidden");
        
        btnGrid.className = "p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm transition-colors";
        btnList.className = "p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors";
      });

      btnList.addEventListener("click", () => {
        listContainer.classList.remove("hidden");
        gridContainer.classList.add("hidden");
        
        btnList.className = "p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm transition-colors";
        btnGrid.className = "p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors";
      });
    }
  }

  function hideAllViews() {
    [viewDashboard, viewCreateCv, viewDesignResume, viewBuildPortfolio, viewCvResult, viewResumeResult, viewPortfolioResult, viewProfile, viewPricing, viewPreviewGallery].forEach(view => {
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


  if (btnNavRegister) {
      btnNavRegister.addEventListener("click", launchRegisterApp);
  }

  if (linkToRegister) {
      linkToRegister.addEventListener("click", (e) => {
          e.preventDefault();
          launchRegisterApp();
      });
  }

  if (linkToLogin) {
      linkToLogin.addEventListener("click", (e) => {
          e.preventDefault();
          launchLoginApp();
      });
  }

  if (btnRegisterSubmit) {
      btnRegisterSubmit.addEventListener("click", launchDashboardApp);
  }
  
  if (btnNavLogin) {
      btnNavLogin.addEventListener("click", launchLoginApp);
  }
  
  const landingLoginBtns = document.querySelectorAll('.btn-landing-login');
  landingLoginBtns.forEach(btn => {
      btn.addEventListener("click", launchLoginApp);
  });


  if (btnLaunchApp) {
    btnLaunchApp.addEventListener("click", launchLoginApp);
  }

  if (btnCtaLaunch) {
    btnCtaLaunch.addEventListener("click", launchLoginApp);
  }
  
  if (btnLoginGoogle) {
    btnLoginGoogle.addEventListener("click", launchDashboardApp);
  }

  if (btnLoginSubmit) {
    btnLoginSubmit.addEventListener("click", launchDashboardApp);
  }
  
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

  if (btnLogout) {
     btnLogout.addEventListener("click", () => {
        // Hide app wrapper, show landing page
        if (appWrapper) {
           appWrapper.classList.add("hidden");
           appWrapper.classList.remove("flex");
        }
        if (viewLanding) {
           viewLanding.classList.add("block", "flex-col");
           viewLanding.classList.remove("hidden", "flex");
        }
        // Also reset internal view to dashboard for next login
        hideAllViews();
        showView(viewDashboard);
     });
  }


  function showGalleryTab(tabName) {
     if(!contentGalleryCv || !contentGalleryResume || !contentGalleryPortfolio) return;
     
     contentGalleryCv.classList.add("hidden");
     contentGalleryCv.classList.remove("block");
     contentGalleryResume.classList.add("hidden");
     contentGalleryResume.classList.remove("block");
     contentGalleryPortfolio.classList.add("hidden");
     contentGalleryPortfolio.classList.remove("block");

     if(tabGalleryCv) tabGalleryCv.className = "px-6 py-3 rounded-full text-sm font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";
     if(tabGalleryResume) tabGalleryResume.className = "px-6 py-3 rounded-full text-sm font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";
     if(tabGalleryPortfolio) tabGalleryPortfolio.className = "px-6 py-3 rounded-full text-sm font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";

     if(tabName === "cv") {
        contentGalleryCv.classList.remove("hidden");
        contentGalleryCv.classList.add("block");
        if(tabGalleryCv) tabGalleryCv.className = "px-6 py-3 rounded-full text-sm font-bold transition-all bg-[#1E5EFF] text-white shadow-lg shadow-blue-500/30";
     } else if(tabName === "resume") {
        contentGalleryResume.classList.remove("hidden");
        contentGalleryResume.classList.add("block");
        if(tabGalleryResume) tabGalleryResume.className = "px-6 py-3 rounded-full text-sm font-bold transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-500/30";
     } else if(tabName === "portfolio") {
        contentGalleryPortfolio.classList.remove("hidden");
        contentGalleryPortfolio.classList.add("block");
        if(tabGalleryPortfolio) tabGalleryPortfolio.className = "px-6 py-3 rounded-full text-sm font-bold transition-all bg-cyan-600 text-white shadow-lg shadow-cyan-500/30";
     }
  }

  if (btnPreviewDashCv) {
     btnPreviewDashCv.addEventListener("click", () => {
        hideAllViews();
        if(viewPreviewGallery) showView(viewPreviewGallery);
        showGalleryTab("cv");
     });
  }

  if (btnPreviewDashResume) {
     btnPreviewDashResume.addEventListener("click", () => {
        hideAllViews();
        if(viewPreviewGallery) showView(viewPreviewGallery);
        showGalleryTab("resume");
     });
  }

  if (btnPreviewDashPortfolio) {
     btnPreviewDashPortfolio.addEventListener("click", () => {
        hideAllViews();
        if(viewPreviewGallery) showView(viewPreviewGallery);
        showGalleryTab("portfolio");
     });
  }

  if (btnBackPreviewGallery) {
     btnBackPreviewGallery.addEventListener("click", () => {
        hideAllViews();
        showView(viewDashboard);
     });
  }

  if(tabGalleryCv) tabGalleryCv.addEventListener("click", () => showGalleryTab("cv"));
  if(tabGalleryResume) tabGalleryResume.addEventListener("click", () => showGalleryTab("resume"));
  if(tabGalleryPortfolio) tabGalleryPortfolio.addEventListener("click", () => showGalleryTab("portfolio"));

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
      // Setup a small timeout to "mock" AI generation time
      const originalText = btnGenerateCv.innerHTML;
      btnGenerateCv.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Membuat...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewCvResult);
        // Reset button state
        btnGenerateCv.innerHTML = originalText;
      }, 1000);
    });
  }

  if (btnGenerateResume) {
    btnGenerateResume.addEventListener("click", () => {
      // Setup a small timeout to "mock" AI generation time
      const originalText = btnGenerateResume.innerHTML;
      btnGenerateResume.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Menyusun Desain...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewResumeResult);
        // Reset button state
        btnGenerateResume.innerHTML = originalText;
      }, 1200);
    });
  }

  if (btnGeneratePortfolio) {
    btnGeneratePortfolio.addEventListener("click", () => {
      // Setup a small timeout to "mock" AI generation time
      const originalText = btnGeneratePortfolio.innerHTML;
      btnGeneratePortfolio.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Mempublikasikan...`;
      setTimeout(() => {
        hideAllViews();
        showView(viewPortfolioResult);
        // Reset button state
        btnGeneratePortfolio.innerHTML = originalText;
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

  if (btnBackDashboardResume) {
    btnBackDashboardResume.addEventListener("click", () => {
      hideAllViews();
      showView(viewDashboard);
    });
  }

  if (btnBackDashboardPortfolio) {
    btnBackDashboardPortfolio.addEventListener("click", () => {
      hideAllViews();
      showView(viewDashboard);
    });
  }

  if (btnBackToEditCv) {
    btnBackToEditCv.addEventListener("click", () => {
      hideAllViews();
      showView(viewCreateCv);
    });
  }
  
  if (btnBackToEditResume) {
    btnBackToEditResume.addEventListener("click", () => {
      hideAllViews();
      showView(viewDesignResume);
    });
  }

  if (btnBackToEditPortfolio) {
    btnBackToEditPortfolio.addEventListener("click", () => {
      hideAllViews();
      showView(viewBuildPortfolio);
    });
  }

  // --- AI CV Polish UI Logic ---
  const aiEditPopover = document.getElementById("ai-edit-popover");
  const btnCancelAi = document.getElementById("btn-cancel-ai");
  const cvDocumentContainer = document.getElementById("cv-document-container");
  const resumeDocumentContainer = document.getElementById("resume-document-container");
  const portfolioDocumentContainer = document.getElementById("portfolio-document-container");
  
  if (aiEditPopover && btnCancelAi) {
    let activeSection: HTMLElement | null = null;
    let activeContainer: HTMLElement | null = null;

    const setupAiButtons = (container: HTMLElement | null) => {
        if (!container) return;
        const aiButtons = container.querySelectorAll(".btn-ask-ai");
        aiButtons.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            
            // Find the parent section that this button belongs to
            const section = (e.target as HTMLElement).closest("section, header, div.custom-resume-section") as HTMLElement;
            if (!section) return;

            // Position the Popover relative to the document container
            const containerRect = container.getBoundingClientRect();
            const sectionRect = section.getBoundingClientRect();

            // Calculate position (centered over the section horizontally, just below the button vertically)
            let top = sectionRect.top - containerRect.top + 30; // 30px offset from top of section
            let left = (sectionRect.width / 2) - 160; // 160 is half of popover width (w-80 = 320px)

            // Adjust horizontal position if it's on the left sidebar
            if (section.classList.contains("md:w-1/3")) {
              left = sectionRect.left - containerRect.left + 20; 
            }

            // Adjust horizontal position if it's in the mobile viewport
            if (container === portfolioDocumentContainer) {
              left = (containerRect.width / 2) - 160;
            }

            aiEditPopover.style.top = `${top}px`;
            aiEditPopover.style.left = `${left}px`;
            
            // Move popover into the correct container
            if (activeContainer !== container) {
                container.appendChild(aiEditPopover);
                activeContainer = container;
            }

            // Remove active state from previous
            if (activeSection) {
                activeSection.classList.remove("ring-2", "ring-indigo-400", "bg-indigo-50/10", "bg-white/10", "ring-cyan-500", "bg-cyan-900/40");
            }
            
            // Add active state to current
            activeSection = section;
            
            // If it's a dark background (sidebar), use slightly different highlight
            if (section.classList.contains("bg-indigo-900")) {
               activeSection.classList.add("ring-2", "ring-indigo-400", "bg-white/10");
            } else if (container === portfolioDocumentContainer) {
               activeSection.classList.add("ring-2", "ring-cyan-500", "bg-cyan-900/40");
            } else {
               activeSection.classList.add("ring-2", "ring-indigo-400", "bg-indigo-50/10");
            }
            
            // Show popover
            aiEditPopover.classList.remove("hidden");
            
            // Focus the input
            const input = document.getElementById("ai-edit-prompt") as HTMLTextAreaElement;
            if (input) input.focus();
          });
        });
    };

    setupAiButtons(cvDocumentContainer);
    setupAiButtons(resumeDocumentContainer);
    setupAiButtons(portfolioDocumentContainer);

    btnCancelAi.addEventListener("click", () => {
      aiEditPopover.classList.add("hidden");
      if (activeSection) {
          activeSection.classList.remove("ring-2", "ring-indigo-400", "bg-indigo-50/10", "bg-white/10", "ring-cyan-500", "bg-cyan-900/40");
          activeSection = null;
      }
    });

  }

  // --- Portfolio Responsive View Toggles Logic ---
  const btnViewMobile = document.getElementById("btn-view-mobile");
  const btnViewDesktop = document.getElementById("btn-view-desktop");

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

  
  // Make template options interactive
  const cvOptions = document.querySelectorAll('#cv-step-5 label');
  cvOptions.forEach(opt => {
     opt.addEventListener('click', () => {
         cvOptions.forEach(o => {
            o.className = "relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-slate-50 dark:bg-[#0B1221]/50 cursor-pointer transition-all";
            const check = o.querySelector('.w-5.h-5.rounded-full.border-2');
            if (check) check.innerHTML = "";
            if (check) check.className = "w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center shrink-0 text-white";
         });
         opt.className = "relative flex items-center justify-between p-4 border rounded-2xl border-blue-500 bg-blue-50 dark:bg-[#1E5EFF]/10 cursor-pointer overflow-hidden transition-all filter hover:brightness-110";
         const check = opt.querySelector('.w-5.h-5.rounded-full.border-2');
         if (check) {
            check.className = "w-5 h-5 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center shrink-0 text-white";
            check.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
         }
     });
  });

  const resumeOptions = document.querySelectorAll('#resume-step-5 label');
  resumeOptions.forEach(opt => {
     opt.addEventListener('click', () => {
         resumeOptions.forEach(o => {
            o.className = "relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-slate-50 dark:bg-[#0B1221]/50 cursor-pointer transition-all";
            const check = o.querySelector('.w-5.h-5.rounded-full.border-2');
            if (check) check.innerHTML = "";
            if (check) check.className = "w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center shrink-0 text-white";
         });
         opt.className = "relative flex items-center justify-between p-4 border rounded-2xl border-indigo-500 bg-slate-100 dark:bg-[#0B1221]/50 cursor-pointer overflow-hidden transition-all";
         const check = opt.querySelector('.w-5.h-5.rounded-full.border-2');
         if (check) {
            check.className = "w-5 h-5 rounded-full border-2 border-indigo-500 bg-indigo-500 flex items-center justify-center shrink-0 text-white";
            check.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
         }
     });
  });

  const portfolioOptions = document.querySelectorAll('#portfolio-step-7 label');
  portfolioOptions.forEach(opt => {
     opt.addEventListener('click', () => {
         portfolioOptions.forEach(o => {
            o.className = "relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-slate-100 dark:bg-[#0B1221]/50 cursor-pointer transition-all";
            const check = o.querySelector('.w-5.h-5.rounded-full.border-2');
            if (check) check.innerHTML = "";
            if (check) check.className = "w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0 flex items-center justify-center text-white";
         });
         opt.className = "relative flex items-center justify-between p-4 border rounded-2xl border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 cursor-pointer overflow-hidden transition-all";
         const check = opt.querySelector('.w-5.h-5.rounded-full.border-2');
         if (check) {
            check.className = "w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center shrink-0 text-white";
            check.innerHTML = '<div class="w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>';
         }
     });
  });

  // Input Mode Toggles Logic (CV)
  if (tabCvManual && tabCvAi && containerCvManual && containerCvAi) {
    tabCvManual.addEventListener("click", () => {
      containerCvManual.classList.remove("hidden");
      containerCvManual.classList.add("block");
      containerCvAi.classList.add("hidden");
      containerCvAi.classList.remove("block");
      tabCvManual.className = "flex-1 py-2.5 rounded-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white text-sm font-semibold transition-all";
      tabCvAi.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
    });
    tabCvAi.addEventListener("click", () => {
      containerCvAi.classList.remove("hidden");
      containerCvAi.classList.add("block");
      containerCvManual.classList.add("hidden");
      containerCvManual.classList.remove("block");
      tabCvAi.className = "flex-1 py-2.5 rounded-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      tabCvManual.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all";
    });
  }

  // Input Mode Toggles Logic (Resume)
  if (tabResumeManual && tabResumeAi && containerResumeManual && containerResumeAi) {
    tabResumeManual.addEventListener("click", () => {
      containerResumeManual.classList.remove("hidden");
      containerResumeManual.classList.add("block");
      containerResumeAi.classList.add("hidden");
      containerResumeAi.classList.remove("block");
      tabResumeManual.className = "flex-1 py-2.5 rounded-xl bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)] text-white text-sm font-semibold transition-all";
      tabResumeAi.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
    });
    tabResumeAi.addEventListener("click", () => {
      containerResumeAi.classList.remove("hidden");
      containerResumeAi.classList.add("block");
      containerResumeManual.classList.add("hidden");
      containerResumeManual.classList.remove("block");
      tabResumeAi.className = "flex-1 py-2.5 rounded-xl bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      tabResumeManual.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all";
    });
  }

  // Input Mode Toggles Logic (Portfolio)
  if (tabPortfolioManual && tabPortfolioAi && containerPortfolioManual && containerPortfolioAi) {
    tabPortfolioManual.addEventListener("click", () => {
      containerPortfolioManual.classList.remove("hidden");
      containerPortfolioManual.classList.add("block");
      containerPortfolioAi.classList.add("hidden");
      containerPortfolioAi.classList.remove("block");
      tabPortfolioManual.className = "flex-1 py-2.5 rounded-xl bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)] text-white text-sm font-semibold transition-all";
      tabPortfolioAi.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
    });
    tabPortfolioAi.addEventListener("click", () => {
      containerPortfolioAi.classList.remove("hidden");
      containerPortfolioAi.classList.add("block");
      containerPortfolioManual.classList.add("hidden");
      containerPortfolioManual.classList.remove("block");
      tabPortfolioAi.className = "flex-1 py-2.5 rounded-xl bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      tabPortfolioManual.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all";
    });
  }

  // --- Document-Level AI Chat Logic ---
  const globalChatWidgets = document.querySelectorAll('.js-global-chat');
  globalChatWidgets.forEach(widget => {
    const input = widget.querySelector('.js-chat-input') as HTMLInputElement;
    const sendBtn = widget.querySelector('.js-chat-send') as HTMLButtonElement;
    const messagesContainer = widget.querySelector('.js-chat-messages') as HTMLDivElement;
    const quickActions = widget.querySelectorAll('.js-chat-messages button');

    if (!input || !sendBtn || !messagesContainer) return;

    // Helper to add user message
    const addUserMessage = (text: string) => {
      // Create user message container
      const msgDiv = document.createElement('div');
      msgDiv.className = 'flex items-start gap-4 justify-end mt-4 animate-[fadeIn_0.3s_ease_forwards]';
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600/30 p-4 rounded-2xl rounded-tr-none text-sm text-slate-800 dark:text-slate-200 shadow-sm leading-relaxed max-w-2xl';
      contentDiv.textContent = text;

      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center shrink-0 text-slate-900 dark:text-white font-bold text-xs';
      avatarDiv.textContent = 'YOU';

      msgDiv.appendChild(contentDiv);
      msgDiv.appendChild(avatarDiv);
      messagesContainer.appendChild(msgDiv);
    };

    // Helper to add AI response
    const addAiResponse = () => {
      // Mock typing indicator / loading
      const loadingDiv = document.createElement('div');
      loadingDiv.className = 'flex items-start gap-4 mt-4 animate-[fadeIn_0.3s_ease_forwards]';
      
      const themeColorClass = widget.innerHTML.includes('Portfolio') ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]';
      const bubbleClass = widget.innerHTML.includes('Portfolio') ? 'bg-cyan-950/50 border-cyan-500/20' : 'bg-indigo-950/50 border-indigo-500/20';
      
      loadingDiv.innerHTML = `
         <div class="w-8 h-8 rounded-full ${themeColorClass} flex items-center justify-center shrink-0">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
         </div>
         <div class="${bubbleClass} border p-4 rounded-2xl rounded-tl-none text-sm text-slate-800 dark:text-slate-200 shadow-sm leading-relaxed flex items-center gap-2">
           <div class="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce"></div>
           <div class="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce" style="animation-delay: 0.1s"></div>
           <div class="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce" style="animation-delay: 0.2s"></div>
         </div>
      `;
      messagesContainer.appendChild(loadingDiv);

      // Simulate network request processing
      setTimeout(() => {
        loadingDiv.remove();
        
        const responseDiv = document.createElement('div');
        responseDiv.className = 'flex items-start gap-4 mt-4 animate-[fadeIn_0.3s_ease_forwards]';
        responseDiv.innerHTML = `
           <div class="w-8 h-8 rounded-full ${themeColorClass} flex items-center justify-center shrink-0">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
           </div>
           <div class="${bubbleClass} border p-4 rounded-2xl rounded-tl-none text-sm text-emerald-400 font-semibold shadow-sm leading-relaxed max-w-2xl flex items-center gap-2">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             Process Complete! I've updated the entire document for you.
           </div>
        `;
        messagesContainer.appendChild(responseDiv);
      }, 1500);
    };

    const handleSend = () => {
      const text = input.value.trim();
      if (!text) return;
      
      addUserMessage(text);
      input.value = '';
      addAiResponse();
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });

    quickActions.forEach(btn => {
      btn.addEventListener('click', () => {
        addUserMessage(btn.textContent || '');
        addAiResponse();
      });
    });

    // --- Capture / Annotate Mode Logic ---
    const captureBtn = widget.querySelector('.js-capture-btn') as HTMLButtonElement;
    const attachmentsDiv = widget.querySelector('.js-chat-attachments') as HTMLDivElement;
    
    if (captureBtn && attachmentsDiv) {
      let isAnnotating = false;
      let boxSize = 150; // Initial size
      let mouseX = 0;
      let mouseY = 0;
      
      const isPortfolio = widget.innerHTML.includes('Portfolio');
      const themeColor = isPortfolio ? 'cyan' : 'indigo';
      
      let annotateHighlighter = document.getElementById('annotate-highlighter');
      if (!annotateHighlighter) {
         annotateHighlighter = document.createElement('div');
         annotateHighlighter.id = 'annotate-highlighter';
         document.body.appendChild(annotateHighlighter);
      }
      
      const docContainer = widget.parentElement?.querySelector('[id$="-document-container"]') as HTMLElement;

      const stopAnnotating = () => {
         isAnnotating = false;
         captureBtn.classList.remove(`bg-${themeColor}-600`, 'text-white', 'ring-2', `ring-${themeColor}-500`);
         captureBtn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
         document.body.classList.remove('cursor-none');
         
         if (annotateHighlighter) {
             annotateHighlighter.classList.add('hidden');
         }
         
         document.removeEventListener('mousemove', handleMouseMove, true);
         document.removeEventListener('wheel', handleWheel, { capture: true });
         document.removeEventListener('click', handleCaptureClick, true);

         if(docContainer) {
            docContainer.classList.remove('pointer-events-none');
            docContainer.style.userSelect = '';
         }
      };

      const updateBoxPosition = () => {
         if (!annotateHighlighter || !isAnnotating) return;
         
         annotateHighlighter.style.width = `${boxSize}px`;
         annotateHighlighter.style.height = `${boxSize}px`;
         annotateHighlighter.style.left = `${mouseX - boxSize / 2}px`;
         annotateHighlighter.style.top = `${mouseY - boxSize / 2}px`;
      };

      const handleMouseMove = (e: MouseEvent) => {
         if (!isAnnotating) return;
         mouseX = e.clientX;
         mouseY = e.clientY;
         updateBoxPosition();
      };

      const handleWheel = (e: WheelEvent) => {
         if (!isAnnotating) return;
         e.preventDefault(); // Prevent page scrolling
         
         // Scroll up (negative delta) means zoom in / larger box
         // Scroll down (positive delta) means zoom out / smaller box
         const delta = e.deltaY > 0 ? -15 : 15;
         
         boxSize = Math.max(40, Math.min(600, boxSize + delta));
         updateBoxPosition();
      };

      const handleCaptureClick = (e: MouseEvent) => {
         if (!isAnnotating) return;
         // Prevent capture if clicking on the chat UI explicitly
         if (widget.contains(e.target as Node)) {
            return;
         }
         
         e.preventDefault();
         e.stopPropagation();

         // Create attachment pill
         const attachment = document.createElement('div');
         attachment.className = `inline-flex items-center gap-1.5 px-3 py-1 bg-${themeColor}-900/50 border border-${themeColor}-500/30 text-${themeColor}-300 text-xs font-medium rounded-lg animate-[fadeIn_0.2s_ease_forwards]`;
         attachment.innerHTML = `
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10V5a2 2 0 012-2h5m4 0h5a2 2 0 012 2v5m0 4v5a2 2 0 01-2 2h-5m-4 0H5a2 2 0 01-2-2v-5M8 8h8v8H8z"></path></svg>
            Area Terpilih [${boxSize}x${boxSize}]
            <button type="button" class="hover:text-white ml-2 shrink-0 hover:bg-${themeColor}-800 rounded-full p-0.5 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
         `;
         
         attachment.querySelector('button')?.addEventListener('click', (ev) => {
            ev.preventDefault();
            attachment.remove();
            if (attachmentsDiv.children.length === 0) {
                attachmentsDiv.classList.add('hidden');
            }
         });

         attachmentsDiv.classList.remove('hidden');
         attachmentsDiv.appendChild(attachment);
         
         input.focus();
         input.placeholder = "Apa yang harus saya ubah di area ini?";
         stopAnnotating();
      };

      captureBtn.addEventListener('click', () => {
         isAnnotating = !isAnnotating;
         if (isAnnotating) {
            captureBtn.classList.add(`bg-${themeColor}-600`, 'text-white', 'ring-2', `ring-${themeColor}-500`);
            captureBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
            document.body.classList.add('cursor-none'); // Hide the standard cursor
            
            // Set initial style for highlighter box
            if (annotateHighlighter) {
               annotateHighlighter.className = `fixed border-[3px] border-${themeColor}-500 bg-${themeColor}-500/10 z-[100] transition-none pointer-events-none shadow-[0_0_15px_rgba(var(--tw-colors-${themeColor}-500),0.4)] backdrop-blur-[2px] rounded-lg`;
               // Center on window roughly before first mouse move
               mouseX = window.innerWidth / 2;
               mouseY = window.innerHeight / 2;
               updateBoxPosition();
               annotateHighlighter.classList.remove('hidden');
            }

            document.addEventListener('mousemove', handleMouseMove, true);
            document.addEventListener('wheel', handleWheel, { capture: true, passive: false });
            document.addEventListener('click', handleCaptureClick, true);
            
            if(docContainer) {
               docContainer.style.userSelect = 'none';
               docContainer.classList.add('pointer-events-none');
            }
         } else {
            stopAnnotating();
         }
      });
    }
  });

  // --- Layout Selection Preview Modal Logic ---
  const layoutLabels = document.querySelectorAll('label.cursor-pointer');
  layoutLabels.forEach(label => {
    // Only target those inside layout sections
    if (label.closest('#view-create-cv') || label.closest('#view-design-resume')) {
      // Check if it's actually a layout card by seeing if it has our typical layout preview mini-box
      if (label.querySelector('.h-14')) { 
        const previewBtn = document.createElement('button');
        previewBtn.type = 'button';
        previewBtn.className = 'absolute top-3 right-8 p-1.5 rounded-lg bg-slate-900/10 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-white hover:shadow dark:hover:bg-slate-700 transition-all opacity-0 group-hover:opacity-100 js-preview-layout-btn ring-1 ring-slate-900/5 dark:ring-white/10';
        previewBtn.innerHTML = '<svg class="w-4 h-4 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>';
        
        // ensure parent has group
        label.classList.add('group');
        label.appendChild(previewBtn);

        previewBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation(); // prevent label selection
          
          const modal = document.getElementById('layout-preview-modal');
          if (modal) {
            // we could populate the large preview dynamically here
            modal.classList.remove('hidden');
            // short delay for opacity transition
            setTimeout(() => {
              modal.classList.remove('opacity-0');
              const contentBox = document.getElementById('layout-preview-modal-content');
              if (contentBox) {
                 contentBox.classList.remove('scale-95');
                 contentBox.classList.add('scale-100');
              }
            }, 10);
          }
        });
      }
    }
  });

  const btnCloseModal = document.getElementById('close-preview-modal');
  const btnSelectModal = document.getElementById('select-preview-modal');
  const viewModal = document.getElementById('layout-preview-modal');
  
  const closeModal = () => {
    if(!viewModal) return;
    viewModal.classList.add('opacity-0');
    const contentBox = document.getElementById('layout-preview-modal-content');
    if (contentBox) {
       contentBox.classList.add('scale-95');
       contentBox.classList.remove('scale-100');
    }
    setTimeout(() => {
       viewModal.classList.add('hidden');
    }, 300);
  }

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnSelectModal) btnSelectModal.addEventListener('click', closeModal);

});

