class BarMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = /*html*/ `
        <style>
            * {
                margin: 0;
                padding: 0;
            }

            h1 {
                background: #A77979;
                padding: 15px;
                text-align: center;
            }
        </style>

        <h1>Bar Menu</h1>
    `;
  }
}
customElements.define("bar-menu", BarMenu);
