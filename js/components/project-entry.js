/**
 * <project-entry>
 * Una tarjeta de proyecto personal. Se usa dentro de <works-section>, que
 * le pasa los datos mediante la propiedad `data`.
 */

const ICON_GITHUB = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>`;

const ICON_EXTERNAL = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 3h6v6"></path>
    <path d="M10 14 21 3"></path>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  </svg>`;

const ICON_EXTERNAL_SM = ICON_EXTERNAL.replace(/width="13" height="13"/, 'width="11" height="11"');

const ICONS = { github: ICON_GITHUB, external: ICON_EXTERNAL };

class ProjectEntry extends HTMLElement {
  set data(item) {
    this._data = item;
    this.render();
  }

  render() {
    const { subtitle, title, links, blocks, tags, media } = this._data;

    const linksHtml = links
      .map(
        (l) => `
        <a href="${l.href}" target="_blank" rel="noopener noreferrer">
          ${ICONS[l.icon]}
          ${l.label}
        </a>`
      )
      .join("");

    const blocksHtml = blocks
      .map(
        (b) => `
        <div>
          <h4 class="project-card__label">${b.label}</h4>
          <p class="project-card__text">${b.text}</p>
        </div>`
      )
      .join("");

    const tagsHtml = tags.map((t) => `<span class="project-card__tag">${t}</span>`).join("\n");

    const mediaBoxClass = media.variant ? `media-box media-${media.variant}` : "media-box";

    const demoHtml = media.demo
      ? `
        <div class="demo">
          <p class="ghost-title">${title}</p>
          <a class="demo-link" href="${media.demo.href}" target="_blank" rel="noopener noreferrer">
            ${ICON_EXTERNAL_SM}
            ${media.demo.label}
          </a>
        </div>`
      : "";

    this.innerHTML = `
      <article class="project-card">
        <div class="project-glow hover"></div>
        <div class="project-inner">
          <div class="project-header">
            <div>
              <p class="project-subtitle">${subtitle}</p>
              <h3 class="project-title">${title}</h3>
            </div>
            <div class="project-links">${linksHtml}</div>
          </div>

          <div class="project-body">
            <div class="project-text">
              ${blocksHtml}
              <div class="project-card__tags">${tagsHtml}</div>
            </div>

            <div class="project-media">
              <div class="${mediaBoxClass}">
                <img src="${media.src}" alt="${media.alt}" />
                ${demoHtml}
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define("project-entry", ProjectEntry);
