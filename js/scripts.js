var navMain = document.querySelector('.page-header__container');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__container--nojs');
navToggle.addEventListener('click', function() {
  navMain.classList.toggle('page-header__container--opened');
});
