import React from "react";
function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="element">
      <div className="element__foto-zone">
        <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
        <button type="button" className="element__delete" aria-label="Удалить"></button>
      </div>
      <div className="element__caption-zone">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__likes">

          <button type="button" className="element__like" aria-label="Нравится"></button>
          <p className="element__count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}
export default Card;