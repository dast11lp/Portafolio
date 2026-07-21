import "./timeline-entry.js";

// Contenido basado en la hoja de vida (06/2026).
const JOBS = [
  {
    align: "left",
    dateLabel: "Jun 2022 – Ago 2022",
    company: "Orbeca Ingeniería",
    role: "Auxiliar de soporte técnico",
    highlights: [
      "Resolví en sitio una falla crítica de conectividad de impresoras que afectaba a ~40 usuarios, restableciendo el servicio bajo presión y en tiempo real.",
      "Instalé y configuré ~16 equipos con Windows empresarial y conexión a red corporativa en 4 sedes cliente.",
      "Brindé soporte técnico presencial Nivel 1 a usuarios finales, atendiendo incidencias de hardware y software en múltiples sedes.",
    ],
    tags: ["Soporte TI", "Hardware", "Redes", "Troubleshooting"],
    phone: "(601) 300 00 50",
  },
  {
    align: "right",
    dateLabel: "Ene 2023 – Jun 2023",
    company: "AV Villas",
    role: "Analista de desarrollo (practicante)",
    highlights: [
      "Implementé mejoras en 4 módulos frontend según requerimientos del negocio, integrando ~5 APIs REST por módulo con bases internas y entidades financieras externas.",
      "Desarrollé un módulo de captura segura (pinpad) con lógica de autenticación en cliente, cumpliendo estándares de seguridad del sector financiero.",
      "Participé 6 meses en ceremonias Scrum completas (daily, sprint planning, review y retrospectiva), documentando el 100% de los cambios en IBM ClearQuest y ClearCase.",
    ],
    tags: ["React", "APIs REST", "Scrum", "Seguridad financiera"],
    phone: "2419600",
  },
  {
    align: "left",
    dateLabel: "May 2025 – Ene 2026",
    company: "Black Hat Archetype",
    role: "Analista de Operaciones de Seguridad (SOC)",
    highlights: [
      "Desarrollé scripts en Python para la instalación remota de software vía línea de comandos, optimizando tiempos de despliegue en múltiples equipos.",
      "Implementé procesos automatizados con Selenium para la transferencia masiva de Indicadores de Compromiso (IOC) entre plataformas de seguridad, gestionando más de 10.000 registros de distintos proveedores (Firewall, IPS, entre otros).",
      "Reduje tareas manuales y errores operativos mejorando la eficiencia de integración entre herramientas de seguridad.",
    ],
    tags: ["Python", "Selenium", "SOC", "Automatización", "Ciberseguridad"],
    phone: null,
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
