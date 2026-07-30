/**
 * <edu-badge>
 * La tarjeta azul de estado educativo, dentro de <about-section>.
 * Datos vía la propiedad `data`.
 */
const ICON_CAP = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
    <path d="M22 10v6"></path>
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
  </svg>`;

class EduBadge extends HTMLElement {
  set data(item) {
    this._data = item;
    this.render();
  }

  render() {
    const { status, title, subtitle, tags } = this._data;
    const tagsHtml = tags.map((t) => `<span>${t}</span>`).join("\n");

    this.innerHTML = `
      <div class="edu-card">
        <span class="edu-card__status">
          ${ICON_CAP}
          ${status}
        </span>
        <h3>${title}</h3>
        <p class="edu-card__sub">${subtitle}</p>
        <div class="edu-card__tags">${tagsHtml}</div>
      </div>
    `;
  }
}

customElements.define("edu-badge", EduBadge);