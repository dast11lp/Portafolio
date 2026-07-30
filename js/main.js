import "./components/index.js";

// Los imports estáticos de arriba se ejecutan (y por lo tanto los
// customElements.define(...) ya corrieron) antes de que el motor llegue a
// esta línea, así que en este punto <site-header>, <curriculum-section>,
// etc. ya tienen su contenido interno renderizado.

const navbar = document.querySelector(".header__nav__content__list");
const btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("header__nav__content__list--showed");
});

navbar.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navbar.classList.remove("header__nav__content__list--showed");
  }
});

const observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting))
);

document.querySelectorAll("section").forEach((s) => observer.observe(s));
