document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
  let drink = document.querySelector('input').value;

  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks[0]);
      document.querySelector('h2').innerText =
        data.drinks[0].strDrink;
      document.querySelector('img').src =
        data.drinks[0].strDrinkThumb;
      document.querySelector('p').innerText =
        data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
