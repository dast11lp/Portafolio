/**
 * <trait-item>
 * Una tarjeta pequeña de rasgo/soft-skill, dentro de <about-section>.
 * Datos vía la propiedad `data`: { icon: 'heart'|'team'|'learning'|'cap', label }
 */
const ICONS = {
  heart: `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
    </svg>`,
  team: `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <circle cx="9" cy="7" r="4"></circle>
    </svg>`,
  learning: `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
      <path d="M9 18h6"></path>
      <path d="M10 22h4"></path>
    </svg>`,
  cap: `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
      <path d="M22 10v6"></path>
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
    </svg>`,
};

class TraitItem extends HTMLElement {
  set data(item) {
    this._data = item;
    this.render();
  }

  render() {
    const { icon, label } = this._data;
    this.innerHTML = `
      <div class="trait">
        ${ICONS[icon]}
        <span>${label}</span>
      </div>
    `;
  }
}

customElements.define("trait-item", TraitItem);
