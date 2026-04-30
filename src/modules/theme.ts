/**
 * Theme toggle functionality (Dark/Light mode)
 */

export function initTheme(): void {
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
}
