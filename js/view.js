import * as image_error from "../Image/image_error.png";

class ChoroplethView {
  #parentContainer = document.getElementById("graph");

  addMapRendorer(handler) {
    window.addEventListener("load", () => {
      const width = getComputedStyle(this.#parentContainer).width;
      const height = getComputedStyle(this.#parentContainer).height;
      handler(this.#parentContainer, height, width);
    });
  }

  rendorError(msg) {
    this.#parentContainer.innerHTML = "";
    const markup = `
    <div class="err">
      <img src="${image_error}" alt="image" srcset="">
      <div class="err-msg">
        ${msg}
      </div>
    </div>
    `;
    this.#parentContainer.insertAdjacentHTML("beforeend", markup);
  }

  clear() {
    this.#parentContainer.innerHTML = "";
  }

  rendorSpinner() {
    this.#parentContainer.innerHTML = "";
    this.#parentContainer.insertAdjacentHTML(
      "beforeend",
      ` <div id="spinner"> </div>`
    );
  }

  generateHoverMarkup(netEmmision, name, percapita, year) {
    return (
      `<b>${name}</b> (${year}) <br><br>` +
      `Net CO<sub>2 &nbsp;</sub> :  ${netEmmision} Mt<br>` +
      (percapita
        ? `CO<sub>2</sub> PC  &nbsp;:  ${percapita} tonnes per capita<br>`
        : "") +
      `<extra></extra>`
    );
  }
}

export default new ChoroplethView();
