document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
  let drink = document.querySelector('input').value;
  drink = drink.split(' ').join('%20');

  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.drinks && data.drinks.length > 0) {
        const firstDrink = data.drinks[0];
        document.querySelector('h2').innerText = firstDrink.strDrink;
        document.querySelector('img').src = firstDrink.strDrinkThumb;
        document.querySelector('p').innerText =
          firstDrink.strInstructions;
      } else {
        document.querySelector('h2').innerText = 'No drinks found';
        document.querySelector('img').src = '';
        document.querySelector('p').innerText = '';
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
