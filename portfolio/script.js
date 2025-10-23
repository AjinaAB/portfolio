// small interactions: theme toggle and current year
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const year = document.getElementById('year');

function setDark(val){
  if(val) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem('darkMode', val ? '1' : '0');
  themeToggle.textContent = val ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setDark(!isDark);
});

// init from localStorage or system
const saved = localStorage.getItem('darkMode');
if(saved !== null) setDark(saved === '1');
else setDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

if(year) year.textContent = new Date().getFullYear();
