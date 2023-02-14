import "./drink-item.js";

class DrinkList extends HTMLElement {
  constructor() {
    super();
  }

  set drinks(drinks) {
    this._drinks = drinks;
    this.render();
  }

  renderError(message) {
    this.innerHTML = /*html*/ `
        <style>
          .placeholder {
            font-weight: bold;
            color: white;
            background-color: black;
          }

          .center {
            text-align: center;
            margin-top: 20px;
          }
        </style>

        <div class="center">
          <h2 class="placeholder">${message}</h2>
        </div>
      `;
  }

  render() {
    this.innerHTML = "";

    const divElement = document.createElement("div");

    divElement.classList.add(
      "row",
      "row-cols-3",
      "g-3",
      "m-3",
      "row-cols-md-3"
    );

    this.appendChild(divElement);

    this._drinks.forEach((drink) => {
      const drinkItemElement = document.createElement("drink-item");
      drinkItemElement.drink = drink;
      divElement.appendChild(drinkItemElement);
    });
  }
}
customElements.define("drink-list", DrinkList);
