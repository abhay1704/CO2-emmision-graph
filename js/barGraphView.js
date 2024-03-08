import * as image_error from "../Image/image_error.png";

class BargraphView {
  #parentContainer = document.querySelector("#hover-info");
  #bargraph = document.querySelector("#bargraph");
  #countryName = this.#parentContainer.querySelector(".country-name");
  #closeGraph = this.#parentContainer.querySelector(".close-graph");

  constructor() {
    this.#closeGraph.addEventListener("click", () => {
      this.#parentContainer.classList.add("hidden");
    });
  }

  rendorSpinner() {
    this.#parentContainer.classList.remove("hidden");
    this.#bargraph.innerHTML = "";
    this.#bargraph.insertAdjacentHTML(
      "beforeend",
      ` <div id="spinner"> </div>`
    );
  }

  rendorError(msg) {
    this.#bargraph.innerHTML = "";
    const markup = `
    <div class="err">
      <img src="${image_error}" alt="image" srcset="">
      <div class="err-msg">
        ${msg}
      </div>
    </div>
    `;
    this.#bargraph.insertAdjacentHTML("beforeend", markup);
  }

  rendorGraph(countryData, plot, plotArgs) {
    this.#parentContainer.classList.remove("hidden");
    this.#countryName.innerHTML = countryData.name;
    this.#bargraph.innerHTML = "";
    plot.newPlot(this.#bargraph, ...plotArgs);
  }
}

export default new BargraphView();
