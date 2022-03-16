import React from "react";
import logo from '../logo.svg';
function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="Логотип Mesto" />
    </div>
  )
}
export default Header;

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