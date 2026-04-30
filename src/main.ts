import './index.css';
import { initTheme } from './modules/theme';
import { initRouter } from './modules/router';
import { initDashboard } from './modules/dashboard';
import { initGallery } from './modules/gallery';
import { initWizards } from './modules/wizards';
import { initAiChat } from './modules/ai-chat';
import { initAiPopover } from './modules/ai-popover';
import { initModal } from './modules/modal';
import { mockDashboardData } from './data/mock';

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modular components
  initTheme();
  initRouter();
  initDashboard(mockDashboardData);
  initGallery();
  initWizards();
  initAiChat();
  initAiPopover();
  initModal();
});
