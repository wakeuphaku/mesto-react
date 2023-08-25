import React from "react";
import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { ImagePopup } from "./ImagePopup.js";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null)

  }
  return (
    <body className="page">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form-block">
          <input
            id="name-input"
            minlength="2"
            maxlength="30"
            required
            placeholder="Введите имя"
            name="name"
            type="text"
            className="popup__input popup__input_text-name" />
          <span className="popup__input-error name-input-error"></span>
        </div>
        <div className="popup__form-block">
          <input
            id="hobby-input"
            minlength="2"
            maxlength="200"
            required
            placeholder="Введите хобби"
            name="hobby"
            type="text"
            className="popup__input popup__input_text-hobby"
          />
          <span className="popup__input-error hobby-input-error"></span>
        </div>

      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >

        <div className="popup__form-block">
          <input
            id="place-input"
            minlength="2"
            maxlength="30"
            required
            placeholder="Название"
            name="place"
            type="text"
            className="popup__input popup__input_text-place"
          />
          <span className="popup__input-error place-input-error"></span>
        </div>
        <div className="popup__form-block">
          <input
            id="link-input"
            required
            placeholder="Ссылка на картинку"
            name="link"
            type="url"
            className="popup__input popup__input_text-link"
          />
          <span className="popup__input-error link-input-error"></span>
        </div>

      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}>

      </ImagePopup>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
      ></PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form-block">
          <input
            className="popup__input popup__input_text-avatar"
            type="url"
            name="link"
            id="avatar-input"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error avatar-input-error"></span>
        </div>
      </PopupWithForm>

      <Footer />
    </body >
  );
}

export default App;
