class DrinkItem extends HTMLElement {
  constructor() {
    super();
  }

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
    <div class="col">
      <div class="card body">
        <img src="${this._drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Drink Name : ${this._drink.strDrink}</h5>
          <p class="card-text">How to make : ${this._drink.strInstructions}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item bg-warning bg-opacity-25">Ingredient 1 : ${this._drink.strIngredient1}</li>
        <li class="list-group-item bg-warning bg-opacity-10">Ingredient 2 : ${this._drink.strIngredient2}</li>
      </ul>
      </div>
    </div>
    `;
  }
}
customElements.define("drink-item", DrinkItem);
