const menuButton = document.querySelector('.nav__menu-button');
const menu = document.querySelector('.nav__menu');
const menuButtonClose = document.querySelector('.nav__menu-button-close')

menuButton.addEventListener('click', () => {
  menu.classList.add('is-active');
  menuButtonClose.classList.add('is-active');
});

menuButtonClose.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuButtonClose.classList.remove('is-active');
})