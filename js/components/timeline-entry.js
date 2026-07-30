/**
 * <timeline-entry>
 * Una tarjeta de la línea de tiempo de experiencia laboral.
 * Se usa dentro de <experience-section>, que le pasa los datos de cada
 * puesto mediante la propiedad `data` (no atributos, porque incluye
 * arreglos como `tags`).
 *
 * Ejemplo de uso:
 *   const item = document.createElement('timeline-entry');
 *   item.data = { align: 'left', dateLabel: '...', company: '...', ... };
 *   list.append(item);
 */

const ICON_CALENDAR = `
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 2v4"></path>
    <path d="M16 2v4"></path>
    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>`;

const ICON_BRIEFCASE = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
  </svg>`;

const ICON_PHONE = `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
  </svg>`;

class TimelineEntry extends HTMLElement {
  set data(item) {
    this._data = item;
    this.render();
  }

  render() {
    const { align, dateLabel, company, role, description, tags, phone } = this._data;
    const tagList = tags.map((t) => `<span class="timeline-card__tag">${t}</span>`).join("\n");

    this.innerHTML = `
      <div class="item align-${align}">
        <div class="item__dot"><span></span></div>

        <div class="card-side">
          <div class="timeline-card">
            <div class="date-pill date-pill--mobile">
              ${ICON_CALENDAR}
              ${dateLabel}
            </div>

            <div class="timeline-card__header">
              <div class="icon-badge">${ICON_BRIEFCASE}</div>
              <div>
                <h3>${company}</h3>
                <p class="timeline-card__role">${role}</p>
              </div>
            </div>

            <p class="timeline-card__desc">${description}</p>

            <div class="timeline-card__tags">
              ${tagList}
            </div>

            <div class="timeline-card__contact">
              ${ICON_PHONE}
              ${phone}
            </div>
          </div>
        </div>

        <div class="date-side">
          <div class="date-pill">
            ${ICON_CALENDAR}
            ${dateLabel}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("timeline-entry", TimelineEntry);
