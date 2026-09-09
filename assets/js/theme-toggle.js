document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.theme__toggle');
  if (!toggle) return;
  var icon = toggle.querySelector('i');

  function applyIcon(isDark) {
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  applyIcon(document.documentElement.getAttribute('data-theme') === 'dark');

  toggle.addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    try { localStorage.setItem('theme', isDark ? 'light' : 'dark'); } catch (e) {}
    applyIcon(!isDark);
  });
});
