const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('#overlay');
const closeImage = document.querySelector('.closeImg');

humburger.addEventListener('click', () => {
humburger.classList.toggle('visible');
navMenu.classList.toggle('visible');
});

closeImage.addEventListener('click', () => {
navMenu.classList.remove('visible');
});

document.querySelectorAll('.overlay_link').forEach((l) => l.addEventListener('click', () => {
  navMenu.classList.remove('visible');
  }));