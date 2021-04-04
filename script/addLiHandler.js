(function () {
  const liItems = document.getElementsByClassName('nav-item');
  const navHeaderMenu = document.getElementById('docs-sidebar');

  window.onload = function () {
    'use strict';

    if (liItems.length > 0) {
      [...liItems].map(element => {
        element.addEventListener(
          'click',
          () => {
            navHeaderMenu.classList.toggle('toggleMenu');
          },
          false
        );
      });
    }
  };
})();
