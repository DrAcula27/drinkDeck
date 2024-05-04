function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) result += mod;
  return result;
}

function setUpCarousel(carousel) {
  function handleNextSlide() {
    currentSlide = modulo(currentSlide + 1, numberOfSlides);
    changeSlide(currentSlide);
  }

  function handlePreviousSlide() {
    currentSlide = modulo(currentSlide - 1, numberOfSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    // change current slide in the DOM
    carousel.style.setProperty('--current-slide', slideNumber);

    // handle screen reader accessibility
    const previousSlideNumber = modulo(slideNumber - 1, numberOfSlides);
    const nextSlideNumber = modulo(slideNumber + 1, numberOfSlides);
    const previousSlide = slidesContainer.children[previousSlideNumber];
    const currentSlideElement = slidesContainer.children[slideNumber];
    const nextSlide = slidesContainer.children[nextSlideNumber];

    previousSlide.setAttribute('aria-hidden', true);
    nextSlide.setAttribute('aria-hidden', true);
    currentSlideElement.setAttribute('aria-hidden', false);
  }

  // get elements
  const buttonPrevious = carousel.querySelector(
    '[data-carousel-button-previous]'
  );
  const buttonNext = carousel.querySelector(
    '[data-carousel-button-next]'
  );
  const slidesContainer = carousel.querySelector(
    '[data-carousel-slides-container]'
  );

  const numberOfSlides = slidesContainer.childElementCount;
  let currentSlide = 0;

  // set up events
  buttonPrevious.addEventListener('click', handlePreviousSlide);
  buttonNext.addEventListener('click', handleNextSlide);
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);
