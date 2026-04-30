import { hideAllViews, showView, getEl } from '../utils/dom';

/**
 * Handles the Preview Gallery View
 */
export function initGallery(): void {
  const viewPreviewGallery = getEl("view-preview-gallery");
  const viewDashboard = getEl("view-dashboard");
  const btnBackPreviewGallery = getEl("btn-back-preview-gallery");
  
  const contentGalleryCv = getEl("gallery-content-cv");
  const contentGalleryResume = getEl("gallery-content-resume");
  const contentGalleryPortfolio = getEl("gallery-content-portfolio");

  const tabGalleryCv = getEl("tab-gallery-cv");
  const tabGalleryResume = getEl("tab-gallery-resume");
  const tabGalleryPortfolio = getEl("tab-gallery-portfolio");

  function showGalleryTab(tabName: string) {
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

  // Bind Dashboard Launchers
  const bindDashPreview = (id: string, tab: string) => {
    const btn = getEl(id);
    if (btn) {
      btn.addEventListener("click", () => {
        hideAllViews();
        showView(viewPreviewGallery);
        showGalleryTab(tab);
      });
    }
  };

  bindDashPreview("btn-preview-dash-cv", "cv");
  bindDashPreview("btn-preview-dash-resume", "resume");
  bindDashPreview("btn-preview-dash-portfolio", "portfolio");

  if (btnBackPreviewGallery) {
     btnBackPreviewGallery.addEventListener("click", () => {
        hideAllViews();
        showView(viewDashboard);
     });
  }

  if(tabGalleryCv) tabGalleryCv.addEventListener("click", () => showGalleryTab("cv"));
  if(tabGalleryResume) tabGalleryResume.addEventListener("click", () => showGalleryTab("resume"));
  if(tabGalleryPortfolio) tabGalleryPortfolio.addEventListener("click", () => showGalleryTab("portfolio"));
}
