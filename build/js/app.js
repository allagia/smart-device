'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var button = document.querySelector('.main-nav__button');
  var popup = document.querySelector('.popup');
  var closePopup = popup.querySelector('.popup__close');
  var form = popup.querySelector('form');
  var name = form.querySelector('#id-name');

  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup__show');
    name.focus();
  });

  closePopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup__show');
  });

  closePopup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
      popup.classList.remove('popup__show');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      if (popup.classList.contains('popup__show')) {
        popup.classList.remove('popup__show');
      }
    }
  });

})();
