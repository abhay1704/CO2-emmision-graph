class TimeScrollerView {
  #parentContainer = document.getElementById("time-scroll");
  #valueContainer = document.getElementById("show-value");
  #input = this.#parentContainer.querySelector("input");
  #graph = document.getElementById("graph");

  constructor() {
    this.addshowValue();
  }

  addshowValue() {
    this.#parentContainer.addEventListener("input", (e) => {
      const value = +this.#input.value;
      const posX = Math.floor(
        ((value - 1970 - 1) * 90) / (2022 - 1970 + 1) + 5
      );
      this.#valueContainer.style.left = `calc(${posX}%)`;
      this.#valueContainer.innerText = value;
    });
  }

  addHandlerPloter(handler) {
    this.#parentContainer.addEventListener("change", (e) => {
      e.preventDefault();
      const width = getComputedStyle(this.#graph).width;
      const height = getComputedStyle(this.#graph).height;
      const value = +this.#input.value;
      handler(this.#graph, height, width, "Accumulative", value);
    });
  }
}

export default new TimeScrollerView();
