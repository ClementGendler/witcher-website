let images = document.getElementsByClassName("characters");
let navElements = document.getElementsByClassName("navbar");
let day = new Date().getDay();

function navFocus1() {
  navElements[1].style.opacity = '0';
  navElements[2].style.opacity = '0';
  navElements[3].style.opacity = '0';
}

function navFocus2() {
  navElements[0].style.opacity = '0';
  navElements[2].style.opacity = '0';
  navElements[3].style.opacity = '0';
}

function navFocus3() {
  navElements[0].style.opacity = '0';
  navElements[1].style.opacity = '0';
  navElements[3].style.opacity = '0';
}

function navFocus4() {
  navElements[0].style.opacity = '0';
  navElements[1].style.opacity = '0';
  navElements[2].style.opacity = '0';
}

function resetOpacity() {
  navElements[0].style.opacity = '1';
  navElements[1].style.opacity = '1';
  navElements[2].style.opacity = '1';
  navElements[3].style.opacity = '1';
}

images[0].addEventListener('mouseover', navFocus1);
images[1].addEventListener('mouseover', navFocus2);
images[2].addEventListener('mouseover', navFocus3);
images[3].addEventListener('mouseover', navFocus4);

images[0].addEventListener('mouseout', resetOpacity);
images[1].addEventListener('mouseout', resetOpacity);
images[2].addEventListener('mouseout', resetOpacity);
images[3].addEventListener('mouseout', resetOpacity);

if (day = 0) { 
  const fontAdj = document.querySelector('body');
  fontAdj.style.color = 'red';
}

if (day = 1) {
  const fontAdj = document.querySelector('body');
  fontAdj.style.color = 'blue';
}

if (day = 2) {
  const fontAdj = document.querySelector('body');
  fontAdj.style.color = 'green';
}

if (day = 3) {
  const fontAdj = document.querySelector('body');
  fontAdj.style.color = 'pink';
}

if (day = 4) {
  const fontAdj = document.querySelector('body');
  fontAdj.style.color = 'orange';
}

if (day = 5) {
  const fontAdj = document.querySelector('body');
  fontAdj.style.color = 'purple';
}

if (day = 6) {
  const fontAdj = document.querySelector('body');
  fontAdj.style.color = 'black';
}