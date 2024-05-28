<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://dracula27.github.io/drinkDeck/">
    <img src="./img/android-chrome-192x192.png" alt="Logo" width="80" />
  </a>

  <h3 align="center">Drink Deck</h3>

  <p align="center">
    Search for a drink and flip through a carousel of options!
    <br />
    <a href="https://dracula27.github.io/drinkDeck/">View Demo</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Drink Deck Screen Shot](./img/screenshot.PNG)](https://dracula27.github.io/drinkDeck/)

Ever wanted to know that recipe for a certain drink?

With this app, you can search for a drink by name (or partial name) and view all the options via a carousel of options.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![HTML5](https://camo.githubusercontent.com/47e36c9392fe351ab98a0324ca2cb710782731d5a56f71ffe7c68130a1ddc34f/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d48544d4c3526636f6c6f723d323335353566267374796c653d706c6173746963266c6f676f3d68746d6c35)](https://html.spec.whatwg.org/)
- [![CSS3](https://camo.githubusercontent.com/de7f9b7e6e26494153157774db679bba3320e333f8279e98986893d490293732/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d4353533326636f6c6f723d323835663635267374796c653d706c6173746963266c6f676f3d63737333)](https://www.w3.org/Style/CSS/#specs)
- [![JavaScript](https://camo.githubusercontent.com/201c697f87bb2a25af48ccc954f0a3c27409421b3e887b7b8e486222e6c1c6b8/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d4a41564153435249505426636f6c6f723d336337663564267374796c653d706c6173746963266c6f676f3d6a617661736372697074)](https://tc39.es/ecma262/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

Type the name, or partial name, of a drink for which you need the recipe and either type the `Enter` key or click the `Show Drink Options` button to display the drink options.
- If only one drink is found, the carousel controls will not display.
- If multiple recipes are found for that drink, the carousel controls will be displayed, and you can pause, restart, or use the arrow keys to skip ahead or go back within the carousel.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- OPTIMIZATIONS -->

## Optimizations

This project can be improved by:

- [ ] Refactoring the code to account for errors fetching data,
- [ ] Displaying the carousel items that are before and after the current drink to more clearly show the user that multiple drinks were returned,
- [ ] Improving the playing of the carousel to better handle when users search for drinks more than once.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LESSONS LEARNED -->

## Lessons Learned

- **API Integration.** When getting the data from TheCocktailDB, I learned how to use `fetch` to get `JSON` data from an external source.
- **Data Manipulation.** Once I had the data from TheCocktailDB's API, I learned how to transform that data into a format I needed for the project.
- **Advanced Interactivity.** Building a carousel was much more intense than I originally thought it would be!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Danielle Andrews - [@DrAcula_codes](https://twitter.com/DrAcula_codes 'Twitter/X') - [daniellerandrews](https://www.linkedin.com/in/daniellerandrews 'LinkedIn') - danielle.andrews.dev@icloud.com

Project Link: [https://github.com/DrAcula27/drinkDeck](https://github.com/DrAcula27/drinkDeck)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

A special thanks to these resources used in the project!

- [TheCocktailDB](https://www.thecocktaildb.com/)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
