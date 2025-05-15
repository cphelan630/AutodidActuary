/**
 * Autodidactuary site JavaScript
 * Handles theme toggle and responsive menu functionality for Flusk template
 */

// DOM elements
const themeToggle = document.getElementById('theme-toggle');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const themeIcon = document.querySelector('.theme-toggle i');

// Theme toggle functionality
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update the toggle button icon
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
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
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

// Mobile menu toggle
if (navbarToggler) {
  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });
}

// Handle active navigation links
function setActiveNavLink() {
  const currentPage = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentPage.endsWith(linkHref) || 
        (currentPage.endsWith('/') && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize theme and active navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setActiveNavLink();
});

// Close mobile menu when resizing to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    navLinks.classList.remove('show');
  }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});
