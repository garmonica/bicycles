const mainNav = document.querySelector('.main-nav');
const menuToggle = mainNav.querySelector('button');

mainNav.classList.remove('main-nav--nojs');

menuToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

const smoothLinks = mainNav.querySelectorAll('a');

smoothLinks.forEach((link) => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

const inputTel = document.querySelector('input[type="tel"]');

inputTel.addEventListener('input', () => {
  if (inputTel.validity.patternMismatch) {
    inputTel.style.borderColor = '#ff0000';
    inputTel.style.color = '#ff0000';
    inputTel.setCustomValidity('Номер телефона должен начинаться с +7 или 8 и содержать 10 цифр');
  } else {
    inputTel.style.borderColor = '';
    inputTel.style.color = '';
    inputTel.setCustomValidity('');
  }
});
