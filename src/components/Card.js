import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

export function Card({ card, onCardClick, onCardDelete, onCardLike }) {

    const handleCardClick = () => {
        onCardClick(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `element__like ${isLiked && 'element__like_active'}`
    );


    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Далее в разметке используем переменную для условного рендеринга

    return (
        <div className="element">
            <img onClick={handleCardClick} src={card.link} alt={card.name} className="element__photo" />

            {isOwn && <button className='element__trash' onClick={handleDeleteClick} />}
            <div className="element__block" >
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like_block">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <span className="element__like_counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}
