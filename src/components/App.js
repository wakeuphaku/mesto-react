import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { ImagePopup } from "./ImagePopup.js";
function App() {
  return (
    <body className="page">

      <Header />
      <Main />
      <template className="elements">
        <div className="element">
          <img src="../src/images/mgu.jpg" alt="" className="element__photo" />
          <button type="button" className="element__trash"></button>
          <div className="element__block">
            <h2 className="element__text"></h2>
            <div className="element__like_block">
              <button type="button" className="element__like"></button>
              <span className="element__like_counter"></span>
            </div>
          </div>
        </div>
      </template>
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
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

      <ImagePopup>

      </ImagePopup>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
      ></PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
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
