import React from "react";
function ImagePopup() {
  return (
    <div className="modal modal_type_card">
      <figure className="modal-card__container">
        <button type="button" className="modal__close-icon modal__close-icon_place_modal-card"
          aria-label="Закрыть"></button>
        <img className="modal-card__image" src="#" alt="#" />
        <figcaption className="modal-card__label"></figcaption>
      </figure>
    </div>
  )
}
export default ImagePopup;