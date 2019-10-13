'use strict';

var button = document.querySelector('.main-nav__button');
var popup = document.querySelector('.modal-form');

var toggleClassPopup = function () {

  popup.classList.toggle('modal-form--show');
};

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-form--close');
  toggleClassPopup();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-form--show')) {
      popup.classList.remove('modal-form--show');
    }
  }
});
