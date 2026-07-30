import "./components/index.js";

// Los imports estáticos de arriba se ejecutan (y por lo tanto los
// customElements.define(...) ya corrieron) antes de que el motor llegue a
// esta línea, así que en este punto <site-header>, <curriculum-section>,
// etc. ya tienen su contenido interno renderizado.

const navbar = document.querySelector(".header__nav__content__list");
const btnMenu = document.querySelector(".btn-menu");

const tabSection = document.querySelector(".tabs");
const tabList = document.querySelectorAll(".tabs__list__tab");
const tabContent = document.querySelectorAll(".tabs__content");

btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("header__nav__content__list--showed");
});

if (tabSection) {
  tabSection.addEventListener("click", ({ target }) => {
    const tab = target.closest(".tabs__list__tab");
    if (!tab) return;

    if (target.classList.contains("tabs__list__tab--active")) {
      target.classList.remove("tabs__list__tab--active");
      document
        .querySelector(`.tabs__content--${target.dataset.tab}`)
        .classList.remove("tabs__content--active");
    } else {
      tabList.forEach((el) => {
        el.classList.remove("tabs__list__tab--active");
      });

      target.classList.add("tabs__list__tab--active");

      tabContent.forEach((el) => {
        el.classList.remove("tabs__content--active");
      });
      document
        .querySelector(`.tabs__content--${target.dataset.tab}`)
        .classList.add("tabs__content--active");
    }
  }
  );
}

const observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting))
);

document.querySelectorAll("section").forEach((s) => observer.observe(s));
