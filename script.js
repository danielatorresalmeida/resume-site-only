const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const THEME_KEY = 'resume-theme';
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(mode) {
  // mode is "light" or "dark"
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem(THEME_KEY, mode);
  if (themeToggle) themeToggle.textContent = (mode === 'light') ? '🌙 Dark' : '🌞 Light';
}

// Initialize theme: saved → system pref → default dark
const saved = localStorage.getItem(THEME_KEY);
if (saved === 'light' || saved === 'dark') {
  applyTheme(saved);
} else {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(prefersLight ? 'light' : 'dark');
}

// Toggle
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'light' ? 'dark' : 'light');
});

// Print button
document.getElementById('print-btn')?.addEventListener('click', () => window.print());
