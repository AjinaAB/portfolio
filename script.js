
// ===============================
// Theme toggle + current year
// ===============================

const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const year = document.getElementById('year');

function setDark(val) {
  if (val) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  localStorage.setItem('darkMode', val ? '1' : '0');

  if (themeToggle) {
    themeToggle.textContent = val ? '☀️' : '🌙';
  }
}

// Toggle click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(!isDark);
  });
}

// Init theme (localStorage → system preference)
const saved = localStorage.getItem('darkMode');
if (saved !== null) {
  setDark(saved === '1');
} else {
  setDark(
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

// Current year
if (year) {
  year.textContent = new Date().getFullYear();
}

// ===============================
// Resume modal functions
// ===============================

function openResume() {
  document.getElementById("resumeModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeResume() {
  document.getElementById("resumeModal").classList.remove("active");
  document.body.style.overflow = "";
}
