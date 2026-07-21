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
    captionParts: ["CSS & Sass", "Udemy"],
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

        <div class="curriculum__skills">
          <h2 class="heading-secundary heading-secundary--margin">
            Habilidades Técnicas
          </h2>
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
