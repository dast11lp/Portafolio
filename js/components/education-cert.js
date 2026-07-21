/**
 * <education-cert>
 * Tarjeta "flip" de una certificación. Se usa dentro de <curriculum-section>,
 * que le pasa los datos mediante la propiedad `data`.
 */
class EducationCert extends HTMLElement {
  set data(item) {
    this._data = item;
    this.render();
  }

  render() {
    const { img, imgAlt, captionPrefix, captionParts, pdfHref, faceImg, faceAlt } = this._data;
    const captionSpans = captionParts.map((p) => `<span>${p}</span>`).join(" ");
    const prefix = captionPrefix ? `${captionPrefix} ` : "";

    this.innerHTML = `
      <div class="cert-card">
        <figure class="cert-card__content">
          <img src="${img}" alt="${imgAlt}" class="cert-card__content__img" />
          <figcaption>${prefix}${captionSpans}</figcaption>
          <a href="${pdfHref}" target="_blank" class="btn btn--card">Ver</a>
        </figure>
        <div class="cert-card__face--top">
          <img src="${faceImg}" alt="${faceAlt}" />
        </div>
        <div class="cert-card__face--bottom">
          <img src="${faceImg}" alt="${faceAlt}" />
        </div>
      </div>
    `;
  }
}

customElements.define("education-cert", EducationCert);
