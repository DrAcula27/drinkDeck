// enable strict mode in JavaScript:
// helps catch common coding mistakes and prevents the use of certain error-prone features
'use strict';

function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) result += mod;
  return result;
}

function setUpCarousel(carousel) {
  let intervalId = 0;
  let currentSlide = 0;

  function handleNextSlide() {
    currentSlide = modulo(currentSlide + 1, numberOfSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    // change current slide in the DOM
    carousel.style.setProperty('--current-slide', slideNumber);

    // handle screen reader accessibility
    const previousSlideNumber = modulo(
      slideNumber - 1,
      numberOfSlides
    );
    const nextSlideNumber = modulo(slideNumber + 1, numberOfSlides);
    const previousSlide =
      slidesContainer.children[previousSlideNumber];
    const currentSlideElement = slidesContainer.children[slideNumber];
    const nextSlide = slidesContainer.children[nextSlideNumber];

    previousSlide.setAttribute('aria-hidden', true);
    nextSlide.setAttribute('aria-hidden', true);
    currentSlideElement.setAttribute('aria-hidden', false);
  }

  function startCarousel() {
    intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  const slidesContainer = carousel.querySelector(
    '[data-carousel-slides-container]'
  );

  let numberOfSlides = slidesContainer.childElementCount;

  slidesContainer.addEventListener('DOMNodeInserted', () => {
    numberOfSlides = slidesContainer.childElementCount;
  });

  // automatically start the carousel if more than one slide
  if (numberOfSlides > 1) {
    startCarousel();
  }
}

// document.addEventListener('DOMContentLoaded', function () {
//   const carousels = document.querySelectorAll('[data-carousel]');
//   carousels.forEach(setUpCarousel);
// });
