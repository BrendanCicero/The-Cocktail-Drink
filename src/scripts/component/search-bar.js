class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = /*html*/ `
    <style>
      .search-container {
          margin: 20px auto 0px;
          width: 50%;
          box-shadow: 0px 1px 10px 1px grey;
          border-radius: 50px;
          padding: 30px;
          text-align: center;
      }

      .search-container > input {
          width: 75%;
          border-radius: 50px;
          border: 1px solid #704F4F;
          padding: 10px;
      }

      .search-container > input:focus {
          outline: 0;
      }

      .search-container > input::placeholder {
          color: #704F4F;
      }

      .search-container > input:focus::placeholder {
          font-weight: bold;
      }

      .search-container > button {
          margin-left: 15px;
          width: 20%;
          padding: 10px;
          border-radius: 50px;
          border: 1px solid grey;
          background-color: #704F4F;
          color: white;
          cursor: pointer;
      }

      @media screen and (max-width: 900px){
          .search-container > input {
              margin-bottom: 10px;
              width: 100%;
          }
          
          .search-container > button {
              margin-left: 0;
              width: 100%;
          }
      }
    </style>

    <div class="search-container">
      <input type="search" id="searchElement" placeholder="Search Drink Name">
      <button id="searchButtonElement" type="submit">Search</button>
    </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}
customElements.define("search-bar", SearchBar);
