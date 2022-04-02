import React from "react";
function PopupWithForm({ name, isOpen, onClose, title, buttonText, children, onSubmit }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? 'modal_active' : ''}`}>
      <div className={`modal__container modal__container_type_${name}`}>
        <button type="button" className="modal__close-icon modal__close-icon_place_regform" aria-label="Закрыть" onClick={onClose}></button>
        <h2 className="modal__title">{title}</h2>
        <form className={`modal__form modal__form_place_${name}`} name={name} onSubmit={onSubmit}>
          {children}
          <button type="submit"
            className="modal__button modal__button_place_profile modal__button_loader">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm;