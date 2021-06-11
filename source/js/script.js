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
