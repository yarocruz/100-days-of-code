const navToggle = document.getElementById('nav-toggle');
const responsiveNav = document.querySelector('.responsive-nav');
let wdw = window.innerWidth;

navToggle.addEventListener('click', function(){
  if (responsiveNav.style.display == 'none'){
    responsiveNav.style.display = 'block';
  } else {
    responsiveNav.style.display = 'none';
  }

});
