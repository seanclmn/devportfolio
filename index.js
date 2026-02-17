(function () {
  var STORAGE_KEY = 'devportfolio-theme';
  var root = document.documentElement;

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStored(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  }

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function init() {
    var saved = getStored();
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    }
  }

  function toggle() {
    var current = root.getAttribute('data-theme');
    var next = (current === 'dark') ? 'light' : 'dark';
    applyTheme(next);
    setStored(next);
  }

  init();
  document.querySelector('.theme-toggle').addEventListener('click', toggle);
})();
