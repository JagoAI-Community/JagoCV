export function initTheme() {
  const htmlEl = document.documentElement;
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
    if (!savedTheme) localStorage.setItem('theme', 'light');
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
  
  if (themeToggleLanding) {
    themeToggleLanding.removeEventListener('click', toggleTheme);
    themeToggleLanding.addEventListener('click', toggleTheme);
  }
  if (themeToggleApp) {
    themeToggleApp.removeEventListener('click', toggleTheme);
    themeToggleApp.addEventListener('click', toggleTheme);
  }
}
