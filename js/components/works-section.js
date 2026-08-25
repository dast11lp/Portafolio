import "./project-entry.js";

const PROJECTS = [
    {
    subtitle: "Encuentra recursos de estudio y rutas de aprendizaje recomendadas",
    title: "Generation EConnect",
    links: [
      { href: "https://github.com/dast11lp/generation-E-connect", icon: "github", label: "Frontend" },
      {
        href: "https://github.com/miguelalejandrosalcas/Genetarion-E-Connection-Back",
        icon: "github",
        label: "Backend",
      },
    ],
    blocks: [
      {
        label: "Descripción",
        text: "Plataforma para que estudiantes de Generation puedan encontrar recursos de estudio y rutas de aprendizaje recomendadas. Desarrollada con JavaScript, HTML CSS, Java en el frontend,Spring Boot en el backend, Y MySQL para la base de datos. Se implementó autenticación y autorización con Spring Security y JWT.",
      },
      {
        label: "Reto principal",
        text: "El trabajo en equipo fue el mayor desafío, ya que requería una comunicación constante y coordinación para integrar las diferentes partes del proyecto.",
      },
      {
        label: "Mis contribuciones",
        text: "Desarrollé gran parte del código backend, incluyendo la autenticación autorización, logica de negocio, BD, tambien tuve contribuciones dentro del Frontend y la DB",
      },
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Github",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],
    media: {
      src: "img/econnect.png",
      alt: "Captura de pantalla de Generation EConnect",
      variant: "violet",
      demo: "https://main.dbt8kmtvxb7ok.amplifyapp.com/src/pages/Preloader/index.html",
    },
  },
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
        text: "Simulación completa de compra de boletos en línea: registro e inicio de sesión, catálogo de películas y funciones, selección interactiva de asientos en sala e integración con la pasarela de pago de MercadoPago en modo sandbox.",
      },
      {
        label: "Reto principal",
        text: "El mayor reto fue sincronizar el estado de los asientos en tiempo real con Redux Toolkit sin recargar la página, y orquestar el backend de microservicios (autenticación, catálogo y reservas) con Docker y Nginx como API Gateway.",
      },
      {
        label: "Mis contribuciones",
        text: "Proyecto personal — desarrollé el frontend y el backend completo de forma independiente.",
      },
    ],
    tags: [
      "React",
      "Redux Toolkit",
      "SCSS",
      "MercadoPago",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Docker",
      "Nginx",
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
      "SCSS",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
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
