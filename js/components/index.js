// Registra todos los Web Components de la página. Se importa una sola vez
// desde js/main.js antes de que se ejecute la lógica de interacción, para
// garantizar que los <tag-name> ya declarados en index.html se "actualicen"
// (upgrade) con su contenido antes de que el resto del código los consulte.
import "./site-header.js";
import "./about-section.js";
import "./experience-section.js";
import "./curriculum-section.js";
import "./works-section.js";
import "./contact-section.js";
