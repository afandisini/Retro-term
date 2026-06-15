(function () {
  try {
    var root = document.documentElement;
    var savedTheme = localStorage.getItem('term-theme');
    var systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    var theme = savedTheme || root.getAttribute('data-term-theme') || systemTheme || 'dark';

    root.setAttribute('data-term-theme', theme);

    var syncBody = function () {
      if (document.body) {
        document.body.setAttribute('data-term-theme', theme);
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', syncBody, { once: true });
    } else {
      syncBody();
    }
  } catch (error) {
    // Ignore storage or DOM errors and let the page continue.
  }
})();
