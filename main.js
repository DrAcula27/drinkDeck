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
    changeSlide(currentSlide);
  }

  function handlePreviousSlide() {
    currentSlide = modulo(currentSlide - 1, numberOfSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    // change current slide visually
    carousel.style.setProperty('--current-slide', slideNumber);

    // handle screen reader accessibility
    // here we're getting the elements for the previous slide, current slide and next slide
    const previousSlideNumber = modulo(slideNumber - 1, numberOfSlides);
    const nextSlideNumber = modulo(slideNumber + 1, numberOfSlides);
    const previousSlide =
      slidesContainer.children[previousSlideNumber];
    const currentSlideElement = slidesContainer.children[slideNumber];
    const nextSlide = slidesContainer.children[nextSlideNumber];

    // here, we're hiding the previous and next slides and showing the current slide
    previousSlide.setAttribute('aria-hidden', true);
    nextSlide.setAttribute('aria-hidden', true);
    currentSlideElement.setAttribute('aria-hidden', false);
  }

  function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) result += mod;
    return result;
  }

  buttonNext.addEventListener('click', handleNextSlide);
  buttonPrevious.addEventListener('click', handlePreviousSlide);
}
