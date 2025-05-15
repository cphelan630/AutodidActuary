/**
 * Autodidactuary site JavaScript
 * Handles theme toggle and responsive menu functionality
 */

// DOM elements
const themeToggle = document.getElementById('theme-toggle');
const hamburgerBtn = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Theme toggle functionality
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update the toggle button icon
  themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

// Initialize theme based on localStorage or system preference
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Mobile hamburger menu toggle
hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 640) {
      navLinks.classList.remove('show');
    }
  });
});

// Close mobile menu when resizing to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    navLinks.classList.remove('show');
  }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);
