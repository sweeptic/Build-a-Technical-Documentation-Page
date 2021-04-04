(function () {
  const liItems = document.getElementsByClassName('nav-item');
  const navHeaderMenu = document.getElementById('docs-sidebar');

  window.onload = function () {
    'use strict';

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        // e.preventDefault();

        // document.querySelector(this.getAttribute('href')).scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'center',
        // });

        navHeaderMenu.classList.toggle('toggleMenu');
      });
    });
  };
})();
