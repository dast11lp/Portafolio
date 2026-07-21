/**
 * <skill-group>
 * Una tarjeta de categoría de habilidades (Frontend / Backend / Data & Cloud).
 * Se usa dentro de <curriculum-section>, que le pasa los datos mediante la
 * propiedad `data`.
 */
class SkillGroup extends HTMLElement {
  set data(group) {
    this._data = group;
    this.render();
  }

  render() {
    const { title, items } = this._data;
    const itemsHtml = items
      .map(
        (i) => `
        <div class="skill-item">
          ${i.svg}
          <span>${i.label}</span>
        </div>`
      )
      .join("");

    this.innerHTML = `
      <div class="skill-card">
        <h3>${title}</h3>
        <div class="skill-items">${itemsHtml}</div>
      </div>
    `;
  }
}

customElements.define("skill-group", SkillGroup);
