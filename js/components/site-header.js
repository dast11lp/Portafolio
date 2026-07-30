/**
 * <site-header>
 * Encabezado de la página: barra de navegación + hero de presentación.
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header" id="header">
        <nav class="header__nav">
          <div class="header__nav__content">
            <a href="#" style="text-decoration: none; color: inherit;">
              <h1 style="display: flex; flex-direction: column; margin: 0">Daniel López</h1>
            </a>
            <ul class="header__nav__content__list">
              <li class="link"><a href="#sobre-mi">Perfil</a></li>
              <li class="link"><a href="#experiencia">Experiencia</a></li>
              <li class="link"><a href="#knowledge">Certificaciones</a></li>
              <li class="link"><a href="#habilidades">Habilidades</a></li>
              <li class="link"><a href="#works">Mis Trabajos</a></li>
            </ul>
            <a href="#contact" class="btn">Contacto</a>
            <div class="btn-menu">
              <div class="btn-menu__line btn-menu__line--1"></div>
              <div class="btn-menu__line btn-menu__line--2"></div>
              <div class="btn-menu__line btn-menu__line--3"></div>
            </div>
          </div>
        </nav>

        <div class="header__hero">
          <div class="header__hero__content">
            <span class="header__hero__badge">
              <span class="header__hero__badge__dot"></span>
              Disponible para nuevas oportunidades
            </span>

            <h1 class="header__hero__title">Daniel López</h1>

            <p class="header__hero__role">
              Desarrollador <strong>Full Stack</strong> · Java, React &amp;
              Ciberseguridad
            </p>

            <p class="header__hero__text">
              Ingeniero de Sistemas egresado de la Corporación Universitaria
              Minuto de Dios, actualmente en el bootcamp Full-Stack/Java de
              Generation Colombia. Construyo interfaces con React y APIs
              robustas con Spring Boot, con experiencia adicional en
              monitoreo de seguridad y automatización. Busco mi primera
              oportunidad formal como desarrollador Full Stack.
            </p>

            <div class="header__hero__actions">
              <a href="#works" class="btn btn--hero btn--hero-solid"
                >Ver mis proyectos</a
              >
              <a href="#contact" class="btn btn--hero btn--hero-outline"
                >Contáctame</a
              >
            </div>

            <div class="header__hero__socials">
              <a
                href="https://github.com/dast11lp"
                target="_blank"
                rel="noopener"
                class="header__hero__socials__item"
              >
                <span class="header__hero__socials__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </span>
                GitHub
              </a>
              <!-- TODO(Daniel): pega aquí tu URL real de LinkedIn, ej. https://www.linkedin.com/in/tu-usuario -->
              <a
                href="#"
                target="_blank"
                rel="noopener"
                class="header__hero__socials__item"
              >
                <span class="header__hero__socials__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                LinkedIn
              </a>
              <a href="#contact" class="header__hero__socials__item">
                <span class="header__hero__socials__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </span>
                Contacto
              </a>
            </div>

            <blockquote class="header__hero__quote">
              "No importa lo que suceda, ¡siempre mantén el ánimo!"
            </blockquote>
          </div>

          <div class="header__hero__illustration">
            <img
              class="header__hero__illustration__img"
              src="img/development.png"
              alt="Ilustración de un desarrollador trabajando"
            />

            <img
              class="floating-chip floating-chip--1"
              src="img/html.png"
              alt=""
            />
            <img
              class="floating-chip floating-chip--2"
              src="img/css.png"
              alt=""
            />
            <img
              class="floating-chip floating-chip--3"
              src="img/js.png"
              alt=""
            />
            <img
              class="floating-chip floating-chip--4"
              src="img/java.png"
              alt=""
            />
            <img
              class="floating-chip floating-chip--5"
              src="img/spring.png"
              alt=""
            />
            <img
              class="floating-chip floating-chip--6"
              src="img/docker.png"
              alt=""
            />
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
