const mainNav = document.querySelector('.main-nav');

if (mainNav) {
  const menuToggle = mainNav.querySelector('button');
  const menuLinks = mainNav.querySelectorAll('a');
  const body = document.querySelector('body');

  mainNav.classList.remove('main-nav--nojs');

  const openMenu = () => {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    body.style.overflow = 'auto';
  };

  menuToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}

// Local Storage

const orderForm = document.querySelector('.order__form');

if (orderForm) {
  const inputName = orderForm.querySelector('input[type="text"]');
  const inputTel = orderForm.querySelector('input[type="tel"]');

  let isStorageSupport = true;
  let storageName = '';
  let storageTel = '';

  try {
    storageName = localStorage.getItem('name');
    storageTel = localStorage.getItem('tel');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageName || storageTel) {
    inputName.value = storageName;
    inputTel.value = storageTel;
  }

  orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isStorageSupport) {
      localStorage.setItem('name', inputName.value);
      localStorage.setItem('tel', inputTel.value);
    }
  });

  // Маска для телефона

  const onKeypress = (evt) => {
    if (evt.keyCode < 48 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  };

  const onFocus = () => {
    if (inputTel.value.length === 0) {
      inputTel.value = '+7';
      inputTel.selectionStart = inputTel.value.length;
    }
  };

  const onClick = () => {
    if (inputTel.selectionStart < 2) {
      inputTel.selectionStart = inputTel.value.length;
    }
  };

  const onBlur = () => {
    if (inputTel.value === '+7') {
      inputTel.value = '';
    }
  };

  const onKeydown = (evt) => {
    if (evt.key === 'Backspace' && inputTel.value.length <= 2) {
      evt.preventDefault();
    }
  };

  inputTel.addEventListener('keypress', onKeypress);
  inputTel.addEventListener('focus', onFocus);
  inputTel.addEventListener('click', onClick);
  inputTel.addEventListener('blur', onBlur);
  inputTel.addEventListener('keydown', onKeydown);
}
