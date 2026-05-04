export function initWizards() {
  (window as any).goToResumeStep = function (stepIndex: number) {
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

       if (circle && text) {
           if (i < stepIndex) {
              circle.className = 'w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all duration-500 scale-100';
              circle.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
              text.className = 'text-[11px] font-bold text-indigo-500 dark:text-indigo-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
           } else if (i === stepIndex) {
              circle.className = 'w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-500 scale-110';
              circle.innerHTML = String(i);
              text.className = 'text-[11px] font-bold text-indigo-500 dark:text-indigo-400 mt-1 transition-colors uppercase tracking-wider block';
           } else {
              circle.className = 'w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500 scale-100';
              circle.innerHTML = String(i);
              text.className = 'text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
           }
       }
    }
    
    const viewDesignResume = document.getElementById('view-design-resume');
    if(viewDesignResume) {
        window.scrollTo({ top: viewDesignResume.offsetTop - 60, behavior: 'smooth' });
    }
  };

  (window as any).goToPortfolioStep = function (stepIndex: number) {
    document.querySelectorAll('.portfolio-step').forEach(el => {
      el.classList.add('hidden');
      el.classList.remove('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    });
    
    const targetStep = document.getElementById('portfolio-step-' + stepIndex);
    if (targetStep) {
      targetStep.classList.remove('hidden');
      targetStep.classList.add('block', 'animate-[slideInRight_0.4s_ease_forwards]');
    }

    const totalSteps = 6;
    const progressPercent = ((stepIndex - 1) / (totalSteps - 1)) * 100;
    const progressBar = document.getElementById('portfolio-progress-bar');
    if (progressBar) progressBar.style.width = progressPercent + '%';

    for (let i = 1; i <= totalSteps; i++) {
       const indicator = document.getElementById('portfolio-indicator-step-' + i);
       if (!indicator) continue;
       const circle = indicator.querySelector('div');
       const text = indicator.querySelector('span');

       if (circle && text) {
           if (i < stepIndex) {
              circle.className = 'w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-500 scale-100';
              circle.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
              text.className = 'text-[11px] font-bold text-cyan-500 dark:text-cyan-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
           } else if (i === stepIndex) {
              circle.className = 'w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-500 scale-110';
              circle.innerHTML = String(i);
              text.className = 'text-[11px] font-bold text-cyan-500 dark:text-cyan-400 mt-1 transition-colors uppercase tracking-wider block';
           } else {
              circle.className = 'w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500 scale-100';
              circle.innerHTML = String(i);
              text.className = 'text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
           }
       }
    }
    
    const viewBuildPortfolio = document.getElementById('view-build-portfolio');
    if(viewBuildPortfolio) {
        window.scrollTo({ top: viewBuildPortfolio.offsetTop - 60, behavior: 'smooth' });
    }
  };

  (window as any).goToCvStep = function (stepIndex: number) {
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

       if (circle && text) {
           if (i < stepIndex) {
              circle.className = 'w-10 h-10 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all duration-500 scale-100';
              circle.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
              text.className = 'text-[11px] font-bold text-[#1E5EFF] dark:text-blue-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
           } else if (i === stepIndex) {
              circle.className = 'w-10 h-10 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-500 scale-110';
              circle.innerHTML = String(i);
              text.className = 'text-[11px] font-bold text-[#1E5EFF] dark:text-blue-400 mt-1 transition-colors uppercase tracking-wider block';
           } else {
              circle.className = 'w-10 h-10 rounded-full bg-slate-100 dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500 scale-100';
              circle.innerHTML = String(i);
              text.className = 'text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block';
           }
       }
    }
    
    const viewCv = document.getElementById('view-cv'); // NOTE: Assuming this ID exists based on the original code
    if(viewCv) {
        window.scrollTo({ top: viewCv.offsetTop - 60, behavior: 'smooth' });
    }
  };
}
