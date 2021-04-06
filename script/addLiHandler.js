(function () {
  const navHeaderMenu = document.getElementById('docs-sidebar');

  window.onload = function () {
    'use strict';

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function () {
        navHeaderMenu.classList.toggle('toggleMenu');
      });
    });
  };
})();
