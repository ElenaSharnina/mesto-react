
import React from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
    <div className="page">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpened}
        onClose={closeAllPopups}
      >
        <label className="modal__label">
          <input type="text" className="modal__field modal__field_type_name" value="" name="username"
            placeholder="Ваше имя" required id="username" minlength="2" maxlength="40" />
          <span className="modal__error username-error"></span>
        </label>
        <label className="modal__label">
          <input type="text" className="modal__field modal__field_type_occupation" value="" name="userjob"
            placeholder="Расскажите о себе" required id="userjob" minlength="2" maxlength="40" />
          <span className="modal__error userjob-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="add-photo"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>

        <label className="modal__label">
          <input type="text" className="modal__field modal__field_type_card-name" value="" name="cardname"
            placeholder="Название" required id="cardname" minlength="2" maxlength="30" />
          <span className="modal__error cardname-error"></span>
        </label>
        <label className="modal__label">
          <input type="url" className="modal__field modal__field_type_card-link" value="" name="cardlink"
            placeholder="Ссылка на картинку" required id="cardlink" />
          <span className="modal__error cardlink-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup />
      <PopupWithForm name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="modal__label">
          <input type="url" className="modal__field modal__field_type_url-avatar" value="" name="avatar"
            placeholder="Ссылка на аватар" required id="avatar" />
          <span className="modal__error avatar-error"></span>
        </label>
      </PopupWithForm>
      <div className="modal modal_type_delete">
        <div className="modal__container modal__container_type_delete">
          <button type="button" className="modal__close-icon modal__close-icon_place_delete" aria-label="Закрыть"></button>
          <h2 className="modal__title">Вы уверены?</h2>
          <form className="modal__form modal__form_place_delete" name="delete" novalidate>

            <button type="submit" className="modal__button modal__button_place_delete">Да</button>
          </form>
        </div>
      </div>
    </div>);
}

export default App;
