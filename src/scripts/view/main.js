import "../component/drink-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";
const axios = require("axios").default;

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const drinkListElement = document.querySelector("drink-list");
  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const getDrink = axios
    .get(`${baseUrl}`)
    .then((response) => {
      return response.data;
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllDrinks(responseJson.drinks);
      }
    });

  // Melakukan pencarian berdasarkan nama cocktail
  const onButtonSearchClicked = () => {
    DataSource.searchDrink(searchElement.value)
      .then(renderAllDrinks)
      .catch(notFoundResult);
  };

  const renderAllDrinks = (drink) => {
    drinkListElement.drinks = drink;
  };

  const notFoundResult = (message) => {
    drinkListElement.renderError(message);
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  document.addEventListener("DOMContentLoaded", getDrink);
};
export default main;
