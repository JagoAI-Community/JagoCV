import { hideAllViews, showView, getEl } from '../utils/dom';

/**
 * Handles creation wizards (CV, Resume, Portfolio) and generation mock
 */
export function initWizards(): void {
  // --- Generation Logic (Mock) ---
  const bindGenerate = (btnId: string, resultViewId: string, loadingText: string, timeoutMs: number) => {
    const btn = getEl(btnId);
    const viewResult = getEl(resultViewId);
    if (btn && viewResult) {
      btn.addEventListener("click", () => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> ${loadingText}...`;
        setTimeout(() => {
          hideAllViews();
          showView(viewResult);
          btn.innerHTML = originalText;
        }, timeoutMs);
      });
    }
  };

  bindGenerate("btn-generate-cv", "view-cv-result", "Membuat", 1000);
  bindGenerate("btn-generate-resume", "view-resume-result", "Menyusun Desain", 1200);
  bindGenerate("btn-generate-portfolio", "view-portfolio-result", "Mempublikasikan", 1500);

  // --- Input Mode Toggles (Manual vs AI) ---
  const setupToggle = (manualId: string, aiId: string, manualContainerId: string, aiContainerId: string, activeColorClass: string, shadowColorClass: string) => {
    const tabManual = getEl(manualId);
    const tabAi = getEl(aiId);
    const containerManual = getEl(manualContainerId);
    const containerAi = getEl(aiContainerId);

    if (tabManual && tabAi && containerManual && containerAi) {
      tabManual.addEventListener("click", () => {
        containerManual.classList.remove("hidden");
        containerManual.classList.add("block");
        containerAi.classList.add("hidden");
        containerAi.classList.remove("block");
        tabManual.className = `flex-1 py-2.5 rounded-xl ${activeColorClass} ${shadowColorClass} text-white text-sm font-semibold transition-all`;
        tabAi.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group";
      });
      tabAi.addEventListener("click", () => {
        containerAi.classList.remove("hidden");
        containerAi.classList.add("block");
        containerManual.classList.add("hidden");
        containerManual.classList.remove("block");
        tabAi.className = `flex-1 py-2.5 rounded-xl ${activeColorClass} ${shadowColorClass} text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group`;
        tabManual.className = "flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all";
      });
    }
  };

  setupToggle("tab-cv-manual", "tab-cv-ai", "container-cv-manual", "container-cv-ai", "bg-blue-600", "shadow-[0_0_15px_rgba(37,99,235,0.4)]");
  setupToggle("tab-resume-manual", "tab-resume-ai", "container-resume-manual", "container-resume-ai", "bg-indigo-600", "shadow-[0_0_15px_rgba(79,70,229,0.4)]");
  setupToggle("tab-portfolio-manual", "tab-portfolio-ai", "container-portfolio-manual", "container-portfolio-ai", "bg-cyan-600", "shadow-[0_0_15px_rgba(8,145,178,0.4)]");

  // --- Template Options Interactive Selection ---
  const setupOptions = (selector: string, activeBg: string, activeBorder: string, checkBg: string) => {
    const options = document.querySelectorAll(selector);
    options.forEach(opt => {
       opt.addEventListener('click', () => {
           // Reset all
           options.forEach(o => {
              o.className = "relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-slate-50 dark:bg-[#0B1221]/50 cursor-pointer transition-all";
              const check = o.querySelector('.w-5.h-5.rounded-full.border-2');
              if (check) {
                check.innerHTML = "";
                check.className = "w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center shrink-0 text-white";
              }
           });
           // Activate clicked
           opt.className = `relative flex items-center justify-between p-4 border rounded-2xl ${activeBorder} ${activeBg} cursor-pointer overflow-hidden transition-all filter hover:brightness-110`;
           const check = opt.querySelector('.w-5.h-5.rounded-full.border-2');
           if (check) {
              check.className = `w-5 h-5 rounded-full border-2 ${checkBg} flex items-center justify-center shrink-0 text-white`;
              if (activeBg.includes('cyan')) {
                 check.innerHTML = '<div class="w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>';
              } else {
                 check.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
              }
           }
       });
    });
  };

  setupOptions('#cv-step-5 label', 'bg-blue-50 dark:bg-[#1E5EFF]/10', 'border-blue-500', 'border-blue-500 bg-blue-500');
  setupOptions('#resume-step-5 label', 'bg-slate-100 dark:bg-[#0B1221]/50', 'border-indigo-500', 'border-indigo-500 bg-indigo-500');
  setupOptions('#portfolio-step-7 label', 'bg-cyan-50 dark:bg-cyan-900/20', 'border-cyan-500', 'border-cyan-500'); // cyan uses internal div instead of SVG

  // --- Portfolio Responsive View Toggles Logic ---
  const btnViewMobile = getEl("btn-view-mobile");
  const btnViewDesktop = getEl("btn-view-desktop");
  const portfolioDocumentContainer = getEl("portfolio-document-container");

  if (btnViewMobile && btnViewDesktop && portfolioDocumentContainer) {
    const bentoGrid = document.getElementById("portfolio-bento-grid");
    
    btnViewMobile.addEventListener("click", () => {
      btnViewMobile.className = "p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow transition-colors";
      btnViewDesktop.className = "p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors";
      portfolioDocumentContainer.className = "max-w-[400px] mx-auto min-h-[80vh] relative shadow-2xl rounded-[3rem] border-[8px] border-slate-800 overflow-hidden transition-all duration-500 ease-in-out";
      if (bentoGrid) bentoGrid.className = "grid grid-cols-2 gap-4 pt-4 transition-all duration-500";
    });

    btnViewDesktop.addEventListener("click", () => {
      btnViewDesktop.className = "p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow transition-colors";
      btnViewMobile.className = "p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors";
      portfolioDocumentContainer.className = "max-w-5xl w-full mx-auto min-h-[70vh] relative shadow-2xl rounded-2xl border border-slate-700 overflow-hidden transition-all duration-500 ease-in-out";
      if (bentoGrid) bentoGrid.className = "grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 transition-all duration-500";
    });
  }

  // --- Step Progression Logic (Exposed to window for inline onclick handlers) ---
  (window as any).goToCvStep = function(stepIndex: number) {
    document.querySelectorAll('.cv-step').forEach(el => {
      el.classList.add('hidden');
      el.classList.remove('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    });
    
    const targetStep = document.getElementById('cv-step-' + stepIndex);
    if (targetStep) {
      targetStep.classList.remove('hidden');
      targetStep.classList.add('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    }

    const totalSteps = 5;
    const progressPercent = ((stepIndex - 1) / (totalSteps - 1)) * 100;
    const progressBar = document.getElementById('cv-progress-bar');
    if (progressBar) progressBar.style.width = progressPercent + '%';

    for (let i = 1; i <= totalSteps; i++) {
       const indicator = document.getElementById('indicator-step-' + i);
       if (!indicator) continue;
       const circle = indicator.querySelector('div');
       const text = indicator.querySelector('span');
       if(!circle || !text) continue;

       if (i < stepIndex) {
          circle.className = 'w-10 h-10 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all duration-500 scale-100';
          circle.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
          text.className = 'text-[11px] font-bold text-[#1E5EFF] dark:text-blue-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
       } else if (i === stepIndex) {
          circle.className = 'w-10 h-10 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-500 scale-110';
          circle.innerHTML = i.toString();
          text.className = 'text-[11px] font-bold text-[#1E5EFF] dark:text-blue-400 mt-1 transition-colors uppercase tracking-wider block';
       } else {
          circle.className = 'w-10 h-10 rounded-full bg-slate-100 dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500 scale-100';
          circle.innerHTML = i.toString();
          text.className = 'text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
       }
    }
    
    const viewEl = document.getElementById('view-create-cv');
    if (viewEl) window.scrollTo({ top: viewEl.offsetTop - 60, behavior: 'smooth' });
  };

  (window as any).goToResumeStep = function(stepIndex: number) {
    document.querySelectorAll('.resume-step').forEach(el => {
      el.classList.add('hidden');
      el.classList.remove('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    });
    
    const targetStep = document.getElementById('resume-step-' + stepIndex);
    if (targetStep) {
      targetStep.classList.remove('hidden');
      targetStep.classList.add('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    }

    const totalSteps = 5;
    const progressPercent = ((stepIndex - 1) / (totalSteps - 1)) * 100;
    const progressBar = document.getElementById('resume-progress-bar');
    if (progressBar) progressBar.style.width = progressPercent + '%';

    for (let i = 1; i <= totalSteps; i++) {
       const indicator = document.getElementById('resume-indicator-step-' + i);
       if (!indicator) continue;
       const circle = indicator.querySelector('div');
       const text = indicator.querySelector('span');
       if(!circle || !text) continue;

       if (i < stepIndex) {
          circle.className = 'w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all duration-500 scale-100';
          circle.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
          text.className = 'text-[11px] font-bold text-indigo-500 dark:text-indigo-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
       } else if (i === stepIndex) {
          circle.className = 'w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-500 scale-110';
          circle.innerHTML = i.toString();
          text.className = 'text-[11px] font-bold text-indigo-500 dark:text-indigo-400 mt-1 transition-colors uppercase tracking-wider block';
       } else {
          circle.className = 'w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500 scale-100';
          circle.innerHTML = i.toString();
          text.className = 'text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
       }
    }
    
    const viewEl = document.getElementById('view-design-resume');
    if (viewEl) window.scrollTo({ top: viewEl.offsetTop - 60, behavior: 'smooth' });
  };

  (window as any).goToPortfolioStep = function(stepIndex: number) {
    document.querySelectorAll('.portfolio-step').forEach(el => {
      el.classList.add('hidden');
      el.classList.remove('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    });
    
    const targetStep = document.getElementById('portfolio-step-' + stepIndex);
    if (targetStep) {
      targetStep.classList.remove('hidden');
      targetStep.classList.add('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    }

    const totalSteps = 7;
    const progressPercent = ((stepIndex - 1) / (totalSteps - 1)) * 100;
    const progressBar = document.getElementById('portfolio-progress-bar');
    if (progressBar) progressBar.style.width = progressPercent + '%';

    for (let i = 1; i <= totalSteps; i++) {
       const indicator = document.getElementById('portfolio-indicator-step-' + i);
       if (!indicator) continue;
       const circle = indicator.querySelector('div');
       const text = indicator.querySelector('span');
       if(!circle || !text) continue;

       if (i < stepIndex) {
          circle.className = 'w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-500 scale-100';
          circle.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
          text.className = 'text-[11px] font-bold text-cyan-500 dark:text-cyan-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
       } else if (i === stepIndex) {
          circle.className = 'w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-500 scale-110';
          circle.innerHTML = i.toString();
          text.className = 'text-[11px] font-bold text-cyan-500 dark:text-cyan-400 mt-1 transition-colors uppercase tracking-wider block';
       } else {
          circle.className = 'w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500 scale-100';
          circle.innerHTML = i.toString();
          text.className = 'text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
       }
    }
    
    const portViewEl = document.getElementById('view-build-portfolio');
    if (portViewEl) window.scrollTo({ top: portViewEl.offsetTop - 60, behavior: 'smooth' });
  };
}
