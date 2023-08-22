export function ImagePopup() {
    return (
        <div className="popup popup-image">
            <div className="popup-image__block">
                <img src="../src/images/mgu.jpg" className="popup-image__photo" />
                <p className="popup-image__text"></p>
                <button type="button" className="popup__close-button"></button>
            </div>
        </div>
    )
}