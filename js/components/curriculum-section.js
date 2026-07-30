import "./education-cert.js";
import "./skill-group.js";
import { SKILL_GROUPS } from "./skills-data.js";

const CERTIFICATES = [
  {
    img: "img/aws_academy_cloud_foundations.png",
    imgAlt: "",
    captionPrefix: null,
    captionParts: ["Cloud Foundations", "AWS academy"],
    pdfHref:
      "pdfs/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240620-7-vugra5.pdf",
    faceImg: "img/aws.academy.png",
    faceAlt: "",
  },
  {
    img: "img/certificado_javascript.png",
    imgAlt: "",
    captionPrefix: "Certificado",
    captionParts: ["Java Script", "Udemy"],
    pdfHref: "pdfs/javascript.pdf",
    faceImg: "img/icons8-javascript.svg",
    faceAlt: "",
  },
  {
    img: "img/certificado-scssudemy.jpg",
    imgAlt: "certificado udemy",
    captionPrefix: "Certificado",
    captionParts: ["CSS", "Udemy"],
    pdfHref: "pdfs/css.pdf",
    faceImg: "img/icons8-css3.svg",
    faceAlt: "",
  },
  {
    img: "img/certificado-react-udemy.jpg",
    imgAlt: "",
    captionPrefix: "Certificado",
    captionParts: ["React", "Udemy"],
    pdfHref: "pdfs/react.pdf",
    faceImg: "img/icons8-react-native.svg",
    faceAlt: "",
  },
];

class CurriculumSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="curriculum">
        <div class="education">
          <h2 class="heading-secundary heading-secundary--margin" id="knowledge">
            Certificaciones de Cursos
          </h2>
          <div class="education__content"></div>
        </div>
<!--
        <div class="curriculum__employment-history">
          <h3 class="heading-secundary">Experiencia Laboral</h3>
          <div class="tabs">
            <ul class="tabs__list">
              <li class="tabs__list__tab tabs__list__tab--1 tabs__list__tab--active" data-tab="1">
                Orbeca Ingeniería
              </li>
              <li class="tabs__list__tab tabs__list__tab--2" data-tab="2">Av villas</li>
            </ul>

            <div class="tabs__content tabs__content--1 tabs__content--active" data-content="1">
              <div class="tabs__content__description">
                <p><strong>Nombre de la empresa:</strong> <span>Orbeca Ingeniería</span></p>
                <p><strong>Cargo ocupado:</strong> <span>Auxiliar de soporte técnico</span></p>
                <p>
                  <strong>Fecha inicio y terminación:</strong>
                  <span>Inicio 06/06/2022 - Fin 06/ 08/ 2022</span>
                </p>
                <p><strong>Teléfonos:</strong> <span>(601) 300 00 50</span></p>
              </div>
            </div>
            <div class="tabs__content tabs__content--2" data-content="2">
              <div class="tabs__content__description">
                <p><strong>Nombre de la empresa:</strong> <span>AV Villas</span></p>
                <p><strong>Cargo ocupado:</strong> <span>Practicante</span></p>
                <p>
                  <strong>Fecha inicio y terminación:</strong>
                  <span>Inicio 10/01/2023 - Fin 09/ 06/ 2023</span>
                </p>
                <p><strong>Teléfonos:</strong> <span>2419600</span></p>
              </div>
            </div>
          </div>
        </div>
        -->

        <div class="references"></div>

        <div>
          <h2>Stack tecnológico</h2>
          <h2>Habilidades</h2>
          <section class="skills-grid"></section>
        </div>
      </section>
    `;

    const certList = this.querySelector(".education__content");
    for (const cert of CERTIFICATES) {
      const el = document.createElement("education-cert");
      el.data = cert;
      certList.append(el);
    }

    const skillsGrid = this.querySelector(".skills-grid");
    for (const group of SKILL_GROUPS) {
      const el = document.createElement("skill-group");
      el.data = group;
      skillsGrid.append(el);
    }
  }
}

customElements.define("curriculum-section", CurriculumSection);
