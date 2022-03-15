import React from "react";
import avatar from '../images/image.jpg';


function Main(props) {


  return (
    <div className="main">
      <section className="profile">
        <div className="profile__section">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={avatar} className="profile__foto" alt="Фото профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__editing">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__occupation">Исследователь океана</p>

          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <template id="element">
          <div className="element">
            <div className="element__foto-zone">
              <img className="element__image" src="#" alt="#" />
              <button type="button" className="element__delete" aria-label="Удалить"></button>
            </div>
            <div className="element__caption-zone">
              <h2 className="element__name"></h2>
              <div className="element__likes">

                <button type="button" className="element__like" aria-label="Нравится"></button>
                <p className="element__count"></p>
              </div>
            </div>
          </div>
        </template>
      </section>

    </div>
  )
}
export default Main;