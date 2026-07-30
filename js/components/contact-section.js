/**
 * <contact-section>
 * Sección de contacto con formulario (Formspree).
 */
class ContactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="contact" id="contact">
          <h2 class="heading-secundary heading-secundary--margin">
            Contactame
          </h2>
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
