import "./edu-badge.js";
import "./trait-item.js";

// Basado en la hoja de vida (06/2026). Cada elemento es una tarjeta azul.
const EDUCATION_LIST = [
  {
    status: "En curso — Generation Colombia",
    title: "Desarrollador(a) Junior Full-Stack/Java",
    subtitle: "Generation Colombia · Mayo 2026 – Actualmente",
    tags: ["Java", "Spring Boot", "Full Stack"],
  },
  {
    status: "Finalizado — 2025",
    title: "Ingeniería de Sistemas",
    subtitle: "Corporación Universitaria Minuto de Dios · Ene 2019 – Abr 2025",
    tags: ["Bases de datos", "Redes", "Ingeniería de software"],
  },
];

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
                Soy <strong>Daniel Steven López Pérez</strong>, Ingeniero de
                Sistemas egresado de la
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
                <strong>paciente y perseverante</strong>. Apliqué mis
                conocimientos en entornos reales — primero en Orbeca
                Ingeniería brindando soporte técnico, luego como practicante
                en AV Villas en un entorno bancario corporativo, y más
                recientemente como analista de operaciones de seguridad en
                Black Hat Archetype, automatizando procesos con Python y
                Selenium. Esas experiencias me enseñaron tanto sobre
                tecnología como sobre comunicación y trabajo en equipo.
              </p>
              <p>
                Hoy estoy en el bootcamp Full-Stack/Java de Generation
                Colombia, afinando mis fundamentos y buscando mi primera
                oportunidad formal como desarrollador. Tengo hambre de
                aprender, de contribuir y de crecer junto a un equipo.
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
