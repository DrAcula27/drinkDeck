document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
  let drink = document.querySelector('input').value;
  drink = drink.split(' ').join('%20');

  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // select carousel container
      const carouselContainer = document.querySelector('.slides');

      // clear previous slides
      carouselContainer.innerHTML = '';

      // show carousel buttons
      const carouselButtons =
        document.querySelectorAll('.carouselButton');
      carouselButtons.forEach((button) => {
        button.style.display = 'block';
      });

      // if drinks are found
      if (data.drinks && data.drinks.length > 0) {
        // create a slide for each drink
        data.drinks.forEach((drink, index) => {
          const slide = document.createElement('div');
          slide.classList.add('slide');
          slide.setAttribute('aria-role', 'group');
          slide.setAttribute('aria-roledescription', 'slide');
          slide.setAttribute('aria-hidden', index !== 0);
          slide.setAttribute(
            'aria-labelledby',
            `heading${index + 1}`
          );

          // create elements, add attributes, add content
          // const content = document.createElement('div');
          // content.classList.add('content');

          const textContainer = document.createElement('div');
          textContainer.classList.add('text-container');

          const heading = document.createElement('h2');
          heading.id = `heading${index + 1}`;
          heading.innerText = drink.strDrink;

          const image = document.createElement('img');
          image.src = drink.strDrinkThumb;
          image.alt = drink.strDrink;

          const paragraph = document.createElement('p');
          paragraph.innerText = drink.strInstructions;

          // append content to DOM in correct order
          textContainer.appendChild(heading);
          textContainer.appendChild(image);
          textContainer.appendChild(paragraph);
          // content.appendChild(textContainer);
          slide.appendChild(textContainer);
          carouselContainer.appendChild(slide);
        });

        if (data.drinks.length === 1) {
          // hide carousel buttons
          carouselButtons.forEach((button) => {
            button.style.display = 'none';
          });
        }

        // if no drinks are found
      } else {
        // create and display an error slide
        const errorSlide = document.createElement('div');
        errorSlide.classList.add('slide');
        errorSlide.setAttribute('aria-role', 'group');
        errorSlide.setAttribute('aria-roledescription', 'slide');
        errorSlide.setAttribute('aria-hidden', 'false');

        const errorContent = document.createElement('div');
        errorContent.classList.add('text-container');

        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'No drinks found';

        errorContent.appendChild(errorMessage);
        errorSlide.appendChild(errorContent);
        carouselContainer.appendChild(errorSlide);
      }

      // call set up carousel function that is in carousel.js
      setUpCarousel(document.querySelector('[data-carousel]'));
    })
    // in case of errors, log to console
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
