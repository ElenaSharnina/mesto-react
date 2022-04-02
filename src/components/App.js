
import React from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    api.getUserInfoApi()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
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
    setIsImagePopupOpen(false);
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name="edit-profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpened}
          onClose={closeAllPopups}
        >
          <label className="modal__label">
            <input type="text" className="modal__field modal__field_type_name" value="" name="username"
              placeholder="Ваше имя" required id="username" style={{ minlength: "2", maxlength: "40" }} readOnly />
            <span className="modal__error username-error"></span>
          </label>
          <label className="modal__label">
            <input type="text" className="modal__field modal__field_type_occupation" value="" name="userjob"
              placeholder="Расскажите о себе" required id="userjob" style={{ minlength: "2", maxlength: "40" }} readOnly />
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
              placeholder="Название" required id="cardname" style={{ minlength: "2", maxlength: "30" }} readOnly />
            <span className="modal__error cardname-error"></span>
          </label>
          <label className="modal__label">
            <input type="url" className="modal__field modal__field_type_card-link" value="" name="cardlink"
              placeholder="Ссылка на картинку" required id="cardlink" readOnly />
            <span className="modal__error cardlink-error"></span>
          </label>
        </PopupWithForm>


        <PopupWithForm name="edit-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="modal__label">
            <input type="url" className="modal__field modal__field_type_url-avatar" value="" name="avatar"
              placeholder="Ссылка на аватар" required id="avatar" readOnly />
            <span className="modal__error avatar-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title="Вы уверены?"
          buttonText="Да"
          onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>);
}

export default App;
