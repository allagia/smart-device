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
// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

// buttons = [].slice.call(buttons);
// buttons.forEach(function (button) {
//   button.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     popup.classList.add('modal--show');
//   });
// });

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-form--show')) {
      popup.classList.remove('modal-form--show');
    }
  }
});


// var arrivalDate = popup.querySelector("[name=arrival-date]");
// var form = document.querySelector(".filter");
// var departureDate = popup.querySelector("[name=departure-date]");
// var adults = popup.querySelector("[name=adults]");
// var children = popup.querySelector("[name=children]");
// var isStorageSupport = true;
// var storageAdults = "";
// var storageChildren = "";

// try {
//   storageAdults = localStorage.getItem("adults");
//   storageChildren = localStorage.getItem("children");
// } catch (err) {
//   isStorageSupport = false;
// }

// toggleClassPopup();

// button.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.remove("filter-error");
//   toggleClassPopup();
//   arrivalDate.focus();
//   if (storageAdults) {
//     adults.value = storageAdults;
//   }
//   if (storageChildren) {
//     children.value = storageChildren;
//   }
// });

// form.addEventListener("submit", function (evt) {
//   if (!arrivalDate.value || !departureDate.value || !adults.value || !children.value) {
//     evt.preventDefault();
//     console.log("Нужно ввести дату заезда, дату выезда, количество взрослых и детей");
//     popup.classList.remove("filter-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("filter-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("adults", adults.value);
//       localStorage.setItem("children", children.value);
//     }
//   }
// });
