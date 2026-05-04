import './index.css';

import { initTheme } from './features/theme';
import { initDashboard } from './features/dashboard';
import { initRouter } from './features/router';
import { initChat } from './features/chat';
import { initPopovers } from './features/popovers';
import { initWizards } from './features/wizards';

export function initApp() {
  initTheme();
  initDashboard();
  initRouter();
  initChat();
  initPopovers();
  initWizards();
}
