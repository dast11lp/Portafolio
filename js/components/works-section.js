import "./project-entry.js";

const PROJECTS = [
  {
    subtitle: "Plataforma de compra de boletos de cine",
    title: "CinePop",
    links: [
      { href: "https://github.com/dast11lp/cinePop-React", icon: "github", label: "Frontend" },
      {
        href: "https://github.com/dast11lp/cinema-microservicios-backend-spring-boot",
        icon: "github",
        label: "Backend",
      },
    ],
    blocks: [
      {
        label: "Descripción",
        text: "Simulación completa de compra de boletos en línea: registro e inicio de sesión, catálogo de películas y funciones, selección interactiva de asientos en sala y resumen de compra.",
      },
      {
        label: "Reto principal",
        text: "El mayor reto fue sincronizar el estado de los asientos en tiempo real con Redux Toolkit sin recargar la página, garantizando que ningún asiento pudiera ser seleccionado dos veces.",
      },
      {
        label: "Mis contribuciones",
        text: "Proyecto personal — desarrollé el frontend y el backend completo de forma independiente.",
      },
    ],
    tags: [
      "React",
      "Redux Toolkit",
      "React Hook Form",
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "PostgreSQL",
    ],
    media: {
      src: "img/cinepop.png",
      alt: "Captura de pantalla de CinePop",
      variant: "violet",
      demo: null,
    },
  },
  {
    subtitle: "Gestión de citas veterinarias",
    title: "VetCare",
    links: [
      { href: "https://dast11lp.github.io/vetCareFront/", icon: "external", label: "Ver sitio" },
      { href: "https://github.com/dast11lp/vetCareFront/", icon: "github", label: "Frontend" },
      { href: "https://github.com/dast11lp/vetCareBack/", icon: "github", label: "Backend" },
    ],
    blocks: [
      {
        label: "Descripción",
        text: "Aplicación para registrar mascotas y agendar citas con veterinarios. Desarrollada con TypeScript para un tipado estricto que previene errores en formularios críticos.",
      },
      {
        label: "Reto principal",
        text: "Integrar React Hook Form con validaciones complejas y conectarlas a un backend seguro con Spring Security fue el desafío central; aprendí a manejar errores de la API de forma elegante en el cliente.",
      },
      {
        label: "Mis contribuciones",
        text: "Proyecto personal — arquitecté el sistema de autenticación JWT y el flujo completo de registro de mascotas.",
      },
    ],
    tags: [
      "TypeScript",
      "React",
      "Redux Toolkit",
      "React Hook Form",
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "PostgreSQL",
    ],
    media: {
      // Antes decía "/img/vet.png" (ruta absoluta): se cambió a relativa
      // para que funcione igual en cualquier subcarpeta/hosting.
      src: "img/vet.png",
      // El alt original decía "Captura de pantalla de CinePop" (copiado del
      // otro proyecto); se corrigió para que describa VetCare.
      alt: "Captura de pantalla de VetCare",
      variant: null,
      demo: { href: "https://dast11lp.github.io/vetCareFront/", label: "Ver demo en vivo" },
    },
  },
];

class WorksSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="works" id="works">
        <div class="works__content">
          <h2 class="heading-secundary heading-secundary--margin">Proyectos Personales</h2>
        </div>
      </section>
    `;

    const list = this.querySelector(".works__content");
    for (const project of PROJECTS) {
      const entry = document.createElement("project-entry");
      entry.data = project;
      list.append(entry);
    }
  }
}

customElements.define("works-section", WorksSection);
