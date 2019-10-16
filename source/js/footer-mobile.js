'use strict';
(function () {

  var buttonNav = document.querySelector('.footer-nav__button');
  var buttonContacts = document.querySelector('.contacts__button');
  var footerNavList = document.querySelector('.footer-nav__list');
  var footerContacts = document.querySelector('.contacts__content');

  buttonNav.addEventListener('click', function () {
    if (footerNavList.classList.contains('footer-nav__list--closed')) {
      footerNavList.classList.remove('footer-nav__list--closed');
      footerNavList.classList.add('footer-nav__list--opened');
      buttonNav.classList.add('footer-nav__button--opened');
    } else {
      footerNavList.classList.add('footer-nav__list--closed');
      footerNavList.classList.remove('footer-nav__list--opened');
      buttonNav.classList.remove('footer-nav__button--opened');
    }
  });

  buttonContacts.addEventListener('click', function () {
    if (footerContacts.classList.contains('contacts__content--opened')) {
      footerContacts.classList.remove('contacts__content--opened');
      footerContacts.classList.add('contacts__content--closed');
      buttonContacts.classList.remove('contacts__button--opened');
    } else {
      footerContacts.classList.add('contacts__content--opened');
      footerContacts.classList.remove('contacts__content--closed');
      buttonContacts.classList.add('contacts__button--opened');
    }
  });
})();
