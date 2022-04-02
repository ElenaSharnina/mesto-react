import React from "react";
import api from '../utils/Api.js';
import Card from "./Card";
import { CurrentUserContext } from '../context/CurrentUserContext';


function Main(props) {
  const user = React.useContext(CurrentUserContext);

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
      <Card card={card} onCardClick={props.onCardClick} key={card._id} />
    )
  })
  return (
    <div className="main">
      <section className="profile">
        <div className="profile__section">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={user.avatar} className="profile__foto" alt="Фото профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__editing">
              <h1 className="profile__name">{user.name}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
            </div>
            <p className="profile__occupation">{user.about}</p>
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