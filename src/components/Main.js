import React from "react";
import api from '../utils/Api.js';
import Card from "./Card";


function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfoApi()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const initialCards = cards.map((card) => {
    return (
      <Card card={card} onCardClick={props.onCardClick} />
    )
  })
  return (
    <div className="main">
      <section className="profile">
        <div className="profile__section">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={userAvatar} className="profile__foto" alt="Фото профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__editing">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__occupation">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">

        {initialCards}

      </section>

    </div>
  )
}
export default Main;