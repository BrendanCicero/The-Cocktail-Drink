const axios = require("axios").default;

class DataSource {
  // Pencarian pada Web API berdasarkan keyword yang diberikan
  static searchDrink(keyword) {
    return axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
      )
      .then((response) => {
        return response.data;
      })
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
