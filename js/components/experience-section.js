import "./timeline-entry.js";

const JOBS = [
  {
    align: "left",
    dateLabel: "Jun 2022 – Ago 2022",
    company: "Orbeca Ingeniería",
    role: "Auxiliar de soporte técnico",
    description: `Brindé soporte técnico de TI a usuarios internos:
        diagnóstico y resolución de incidencias de hardware y
        software, mantenimiento de equipos y asistencia
        presencial.`,
    tags: ["Soporte TI", "Hardware", "Troubleshooting"],
    phone: "(601) 300 00 50",
  },
  {
    align: "right",
    dateLabel: "Ene 2023 – Jun 2023",
    company: "AV Villas",
    role: "Practicante",
    description: `Prácticas profesionales en entorno bancario, apoyando
        procesos internos y adquiriendo experiencia en ambientes
        corporativos de alta demanda y atención al detalle.`,
    tags: ["Banca", "Procesos internos", "Trabajo en equipo"],
    phone: "2419600",
  },
];

class ExperienceSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="exp" id="experiencia">
        <div class="exp__inner">
          <p class="exp__eyebrow">Trayectoria profesional</p>
          <h2 class="exp__title">Experiencia</h2>

          <div class="timeline">
            <div class="timeline__line"></div>
            <div class="timeline__list"></div>
          </div>
        </div>
      </section>
    `;

    const list = this.querySelector(".timeline__list");
    for (const job of JOBS) {
      const entry = document.createElement("timeline-entry");
      entry.data = job;
      list.append(entry);
    }
  }
}

customElements.define("experience-section", ExperienceSection);
