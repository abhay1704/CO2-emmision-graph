class NavBarView {
  #parentContainer = document.getElementById("nav");
  #category = document.getElementById("categories");
  #emmisionType = document.getElementById("emmision-type");
  #selectedCategory = document.getElementById("selected-category");
  #timeScrollBtn = document.getElementById("time-btn");
  #timeScroll = document.getElementById("time-scroll");
  #dataSrc = document.querySelector(".data-src");
  // #dataSrcBtn = this.#dataSrc.querySelector(".logo");
  #links = this.#parentContainer.querySelectorAll(".nav-list-item");

  constructor() {
    window.addEventListener("load", () => {
      this.addTimeScrollerHandler();
      this.#addDataSrcToggler();
      this.#navlinks();
    });
  }

  #navlinks() {
    Array.from(this.#links).forEach((x, i, links) =>
      x.addEventListener("mouseover", (e) => {
        links.forEach((element) => {
          element.style.opacity = 0.5;
        });
        links[i].style.opacity = 1;
      })
    );

    Array.from(this.#links).forEach((x, i, links) =>
      x.addEventListener("mouseout", (e) => {
        links.forEach((element) => {
          element.style.opacity = 1;
        });
      })
    );
  }

  #addDataSrcToggler() {
    this.#dataSrc.addEventListener("click", () => {
      this.#dataSrc.classList.toggle("data-src--hide");
    });
  }

  navVisible() {
    this.#parentContainer.classList.remove("hidden");
  }

  addCategoryHandler(handler) {
    // Using Event delegation
    this.#category.addEventListener("click", (e) => {
      const target = e.target.closest(".dropdown-content a");
      if (!target) return;

      // show selected category in navbar
      this.#category
        .querySelector(".dropdown-content--selected")
        .classList.remove("dropdown-content--selected");
      target.classList.add("dropdown-content--selected");
      this.#selectedCategory.innerHTML = target.innerHTML;

      // handle category change in map
      const selectedCategory = target.dataset.category;
      console.log(selectedCategory);

      const container = document.getElementById("graph");
      const height = getComputedStyle(container).height;
      const width = getComputedStyle(container).width;
      handler(container, height, width, selectedCategory);
    });
  }

  addTimeScrollerHandler() {
    this.#timeScrollBtn.addEventListener("click", () => {
      this.#timeScroll.classList.toggle("time-scroll--hide");
      this.#timeScrollBtn.classList.toggle("time-btn--active");
      this.#dataSrc.classList.toggle("hidden");
    });
  }
}

export default new NavBarView();
