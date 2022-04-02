import React from "react";
import api from '../utils/Api.js';
import Card from "./Card";
import { CurrentUserContext } from '../context/CurrentUserContext';


function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

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
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.like(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleCardDelete(card) {

    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter(c => c._id !== card._id))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const initialCards = cards.map((card) => {
    return (
      <Card card={card} onCardClick={props.onCardClick} key={card._id} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
    )
  });

  return (
    <div className="main">
      <section className="profile">
        <div className="profile__section">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={currentUser.avatar} className="profile__foto" alt="Фото профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__editing">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
            </div>
            <p className="profile__occupation">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить фотографию" onClick={props.onAddPlace} />
      </section>
      <section className="elements">

        {initialCards}

      </section>

    </div>
  )
}
export default Main;