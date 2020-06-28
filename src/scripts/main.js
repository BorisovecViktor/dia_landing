'use strict';

const btn = document.getElementById('show');
const nav = document.getElementById('nav');
const sticky = document.querySelector('.header');
const link = document.querySelector('.nav__list');
const scrollButton = document.querySelector('.scroll-button');
const formFeedback = document.querySelector('.message__form');

btn.addEventListener('click', function() {
  nav.classList.toggle('active');
  btn.classList.toggle('open');
});

link.addEventListener('click', function() {
  nav.classList.remove('active');
  btn.classList.remove('open');
});

formFeedback.addEventListener('submit', (e) => {
  e.preventDefault();
  formFeedback.reset();
  swal({
    title: "Good job!",
    text: "Your message has been sent!",
    icon: "success",
    button: "Close",
  });
});

window.onscroll = function() {
  if (window.pageYOffset > 5000) {
    scrollButton.classList.add('show');
    sticky.classList.add('hidden');
  } else {
    scrollButton.classList.remove('show');
    sticky.classList.remove('hidden');
  }

  if (window.matchMedia('(max-width: 1023px)').matches) {
    sticky.classList.remove('hidden');

    if (window.pageYOffset > 2000) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  }
};

scrollButton.addEventListener('click', function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
