/**
 * DOM Utility helpers — hide/show views in the SPA
 */

const ALL_VIEW_IDS = [
  'view-dashboard',
  'view-create-cv',
  'view-design-resume',
  'view-build-portfolio',
  'view-cv-result',
  'view-resume-result',
  'view-portfolio-result',
  'view-profile',
  'view-pricing',
  'view-preview-gallery',
];

export function hideAllViews(): void {
  ALL_VIEW_IDS.forEach(id => {
    const view = document.getElementById(id);
    if (view) {
      view.classList.add('hidden');
      view.classList.remove('block');
    }
  });
}

export function showView(view: HTMLElement | null): void {
  if (view) {
    view.classList.remove('hidden');
    view.classList.add('block');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function getEl(id: string): HTMLElement | null {
  return document.getElementById(id);
}
