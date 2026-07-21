/**
 * <contact-section>
 * Sección de contacto: datos directos + formulario (Formspree).
 */
const ICON_MAIL = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>`;

const ICON_PHONE = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
  </svg>`;

const ICON_PIN = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>`;

class ContactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="contact" id="contact">
          <h2 class="heading-secundary heading-secundary--margin">
            Contactame
          </h2>

          <div class="contact__info">
            <a class="contact__info__item" href="mailto:dast11lp@gmail.com">
              ${ICON_MAIL}
              dast11lp@gmail.com
            </a>
            <a class="contact__info__item" href="tel:+573017956268">
              ${ICON_PHONE}
              +57 301 795 6268
            </a>
            <span class="contact__info__item contact__info__item--static">
              ${ICON_PIN}
              Bogotá, Colombia
            </span>
          </div>

          <form
            action="https://formspree.io/f/xeqyevzy"
            method="POST"
            class="contact__form"
          >
            <div class="contact__form__item">
              <label class="contact__form__item__label" for="email"
                >Tu correo electrónico:</label
              >
              <input
                class="contact__form__item__input"
                type="email"
                id="email"
                name="email"
                placeholder="janedoe@mail.com"
              />
            </div>

            <div class="contact__form__item">
              <label class="contact__form__item__label" for="_subject"
                >Asunto:</label
              >
              <input
                class="contact__form__item__input"
                type="text"
                id="_subject"
                name="_subject"
                placeholder="Contactar"
              />
            </div>

            <div class="contact__form__item">
              <label class="contact__form__item__label" for="message"
                >Tu mensaje:</label
              >
              <textarea
                class="contact__form__item__textarea"
                id="message"
                name="message"
                rows="8"
              ></textarea>
            </div>

            <button class="btn" type="submit">Enviar</button>
          </form>
        </section>
    `;
  }
}

customElements.define("contact-section", ContactSection);
