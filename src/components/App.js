import React from "react";
import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { ImagePopup } from "./ImagePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import { api } from "../utils/Api.js";


function App() {
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    api
      .getCards()
      .then(cards => {
        setCards(cards);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    api.userInfo()
      .then(item => {
        setCurrentUser(item);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked, card._id).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

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
    <CurrentUserContext.Provider value={currentUser}>
      <body className="page">

        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
