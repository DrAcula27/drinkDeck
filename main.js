const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach(setUpCarousel);

function setUpCarousel(carousel) {
  const buttonPrevious = carousel.querySelector(
    '[data-carousel-button-previous]'
  );
  const buttonNext = carousel.querySelector(
    '[data-carousel-button-next]'
  );
  const slidesContainer = carousel.querySelector(
    '[data-carousel-slides-container]'
  );

  let currentSlide = 0;
  const numberOfSlides = slidesContainer.childElementCount;

  function handleNextSlide() {
    currentSlide = modulo(currentSlide + 1, numberOfSlides);
    carousel.style.setProperty('--current-slide', currentSlide);
  }

  function handlePreviousSlide() {
    currentSlide = modulo(currentSlide - 1, numberOfSlides);
    carousel.style.setProperty('--current-slide', currentSlide);
  }

  function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) result += mod;
    return result;
  }

  buttonNext.addEventListener('click', handleNextSlide);
  buttonPrevious.addEventListener('click', handlePreviousSlide);
}
