import "./edu-badge.js";
import "./trait-item.js";

// Array por si en el futuro agregas más estudios (ej. el bootcamp de
// Generation al terminarlo). Cada elemento es una tarjeta azul.
const EDUCATION_LIST = [
  {
    status: "Finalizado - 2026",
    title: "Desarrollador Junior Full Stack Java",
    subtitle: "Generation",
    tags: ["Java", "Spring Boot", "SQL", "APIs REST"],
  },
  {
    status: "Finalizado - 2025",
    title: "Ingeniería en Sistemas",
    subtitle: "Corporación Universitaria Minuto de Dios",
    tags: ["Bases de datos", "Redes", "Ingeniería de software"],
  },
];

// Rasgos personales, independientes de cuántas educaciones tengas.
const TRAITS = [
  { icon: "heart", label: "Apasionado por el código" },
  { icon: "team", label: "Trabajo en equipo" },
  { icon: "learning", label: "Aprendizaje continuo" },
  { icon: "cap", label: "Inteligencia emocional" },
];

class AboutSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="about" id="sobre-mi">
        <div class="about__inner">
          <p class="about__eyebrow">Mi historia</p>
          <h2 class="about__title">Sobre mí</h2>

          <div class="about__grid">
            <div class="about__text">
              <p>
                Soy <strong>Daniel Steven López Pérez</strong>, estudiante de
                Sistemas en la
                <strong>Corporación Universitaria Minuto de Dios</strong>, con
                una pasión genuina por construir software que resuelva
                problemas reales.
              </p>
              <p>
                Mi camino empezó con HTML y CSS — aprender a que una página
                tuviera vida en el navegador me enganchó de inmediato. Luego
                llegó JavaScript, después React y Redux para el frontend, y
                más tarde Java con Spring Boot para el backend. Cada
                tecnología nueva fue un reto que reforzó mi convicción:
                <em>quiero ser desarrollador Full Stack.</em>
              </p>
              <p>
                Me considero una persona
                <strong>paciente y perseverante</strong>. Tuve la oportunidad
                de aplicar mis conocimientos en entornos reales — primero en
                Orbeca Ingeniería brindando soporte técnico, y luego como
                practicante en AV Villas en un entorno bancario corporativo.
                Esas experiencias me enseñaron tanto sobre tecnología como
                sobre comunicación y trabajo en equipo.
              </p>
              <p>
                Hoy busco mi primera oportunidad formal como desarrollador.
                Tengo hambre de aprender, de contribuir y de crecer junto a un
                equipo.
              </p>
            </div>

            <div class="about__side">
              <div class="edu-list"></div>
              <div class="traits"></div>
            </div>
          </div>
        </div>
      </section>
    `;

    const eduList = this.querySelector(".edu-list");
    for (const education of EDUCATION_LIST) {
      const el = document.createElement("edu-badge");
      el.data = education;
      eduList.append(el);
    }

    const traitsBox = this.querySelector(".traits");
    for (const trait of TRAITS) {
      const el = document.createElement("trait-item");
      el.data = trait;
      traitsBox.append(el);
    }
  }
}

customElements.define("about-section", AboutSection);