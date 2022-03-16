import React from "react";
import avatar from '../images/image.jpg';
import api from '../utils/Api.js'


function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

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

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  //<Card cardData={card} onCardClick={props.onCardClick} key={card._id}/>
  const initialCards = cards.map((card) => {
    return (
      <div className="element">
        <div className="element__foto-zone">
          <img className="element__image" src={card.link} alt={card.name} />
          <button type="button" className="element__delete" aria-label="Удалить"></button>
        </div>
        <div className="element__caption-zone">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__likes">

            <button type="button" className="element__like" aria-label="Нравится"></button>
            <p className="element__count">{card.likes.length}</p>
          </div>
        </div>
      </div>
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