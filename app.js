//Get left button
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.getElementsByTagName('IMG');


function moveLeft() {
  img[1].style.left = '240px';
  img[0].style.top = '-50px';
}

function moveRight() {
  img[1].style.left = '440px';
  img[0].style.top = '-30px';
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);
