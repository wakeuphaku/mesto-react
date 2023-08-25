

export function Card({ card, onCardClick }) {

    const handleCardClick = () => {
        onCardClick(card);
    }
    return (
        <div className="element">
            <img onClick={handleCardClick} src={card.link} alt={card.name} className="element__photo" />
            <button type="button" className="element__trash"></button>
            <div className="element__block" >
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like_block">
                    <button type="button" className="element__like"></button>
                    <span className="element__like_counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}
