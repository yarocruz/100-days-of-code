const navToggle = document.getElementById('nav-toggle');
const mainNav = document.querySelector('.main-nav');


navToggle.addEventListener('click', function(){

  if (mainNav.className === 'main-nav') {
    mainNav.className += ' main-nav--open';

  } else {
    mainNav.className = 'main-nav';
  }

});
