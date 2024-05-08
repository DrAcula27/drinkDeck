document
  .querySelector('[data-drink-search]')
  .addEventListener('submit', getDrink);

function getDrink(event) {
  event.preventDefault();

  const drinkInput = document.querySelector('input');
  const drink = drinkInput.value;

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
    drink
  )}`;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      const carouselContainer = document.querySelector('.slides');
      carouselContainer.innerHTML = '';
      console.log(data.drinks);

      if (data.drinks && data.drinks.length > 0) {
        createSlides(data.drinks, carouselContainer);
        setUpCarousel(carouselContainer);
      } else {
        createErrorSlide(carouselContainer);
        setUpCarousel(carouselContainer);
      }
    })
    .catch((err) => {
      console.error(`Fetch error: ${err.message}`);
    });
}

function createSlides(drinks, container) {
  drinks.forEach((drink, index) => {
    const slide = createSlide(drink, index);
    container.appendChild(slide);
  });
}

function createSlide(drink, index) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.setAttribute('aria-role', 'group');
  slide.setAttribute('aria-roledescription', 'slide');
  slide.setAttribute('aria-hidden', index !== 0);
  slide.setAttribute('aria-labelledby', `${drink.strDrink}`);

  const slideContent = document.createElement('div');
  slideContent.classList.add('slide-content');

  const drinkName = document.createElement('h2');
  drinkName.id = `drinkName${index + 1}`;
  drinkName.innerText = drink.strDrink;

  const drinkImage = document.createElement('img');
  drinkImage.src = drink.strDrinkThumb;
  drinkImage.alt = drink.strDrink;

  const ingredientsContainer = document.createElement('div');
  ingredientsContainer.classList.add('ingredients-container');

  const ingredientsLabel = document.createElement('h3');
  ingredientsLabel.innerText = 'Ingredients';

  const ingredientsList = document.createElement('ul');
  ingredientsContainer.appendChild(ingredientsLabel);
  ingredientsContainer.appendChild(ingredientsList);

  for (let i = 1; i < 15; i++) {
    if (drink[`strMeasure${i}`] && drink[`strIngredient${i}`]) {
      const ingredient = document.createElement('li');
      ingredient.innerText = `${drink[`strMeasure${i}`]} of ${
        drink[`strIngredient${i}`]
      }`;
      ingredientsList.appendChild(ingredient);
    }
  }

  const instructions = document.createElement('div');
  instructions.classList.add('instructions');
  instructions.innerHTML = `
    <h3>Instructions</h3>
    <p>${drink.strInstructions}</p>
  `;

  slideContent.appendChild(drinkName);
  slideContent.appendChild(drinkImage);
  slideContent.appendChild(ingredientsContainer);
  slideContent.appendChild(instructions);
  slide.appendChild(slideContent);

  return slide;
}

function createErrorSlide(container) {
  const errorSlide = document.createElement('div');
  errorSlide.classList.add('slide');
  errorSlide.setAttribute('aria-role', 'group');
  errorSlide.setAttribute('aria-roledescription', 'slide');
  errorSlide.setAttribute('aria-hidden', 'false');

  const errorContent = document.createElement('div');
  errorContent.classList.add('slide-content');

  const errorMessage = document.createElement('p');
  errorMessage.innerText =
    'No drinks found by that name. Make sure you spelled it correctly and try again';

  errorContent.appendChild(errorMessage);
  errorSlide.appendChild(errorContent);
  container.appendChild(errorSlide);
}

function setUpCarousel(carousel) {
  let currentSlideIndex = 0;
  let intervalId = null;

  carousel.querySelectorAll('.slide')[0].classList.add('active');

  const showSlide = (index) => {
    carousel
      .querySelectorAll('.slide')
      .forEach((slide) => slide.classList.remove('active'));

    carousel
      .querySelectorAll('.slide')
      [index].classList.add('active');

    carousel.querySelectorAll('.slide').forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i !== index);
    });
  };

  const showPreviousSlide = () => {
    stopCarousel();
    currentSlideIndex =
      (currentSlideIndex -
        1 +
        carousel.querySelectorAll('.slide').length) %
      carousel.querySelectorAll('.slide').length;
    showSlide(currentSlideIndex);
  };

  const showNextSlide = () => {
    stopCarousel();
    currentSlideIndex =
      (currentSlideIndex + 1) %
      carousel.querySelectorAll('.slide').length;
    showSlide(currentSlideIndex);
  };

  const startCarousel = () => {
    intervalId = setInterval(() => {
      showNextSlide();
    }, 5000);
  };

  const stopCarousel = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  if (carousel.querySelectorAll('.slide').length > 1) {
    const controlsContainer = document.querySelector(
      '[data-carousel-controls]'
    );

    const prevButton = document.querySelector(
      '[data-carousel-button-previous]'
    );
    const pauseButton = document.querySelector(
      '[data-carousel-button-pause]'
    );
    const playButton = document.querySelector(
      '[data-carousel-button-play]'
    );
    const nextButton = document.querySelector(
      '[data-carousel-button-next]'
    );

    if (prevButton) {
      prevButton.classList.remove('hidden');
      prevButton.classList.add('shown');
      prevButton.addEventListener('click', showPreviousSlide);
    }

    if (pauseButton) {
      pauseButton.classList.remove('hidden');
      pauseButton.classList.add('shown');
      pauseButton.addEventListener('click', stopCarousel);
    }

    if (playButton) {
      playButton.classList.remove('hidden');
      playButton.classList.add('shown');
      playButton.addEventListener('click', startCarousel);
    }

    if (nextButton) {
      nextButton.classList.remove('hidden');
      nextButton.classList.add('shown');
      nextButton.addEventListener('click', showNextSlide);
    }

    startCarousel();
  }
}
