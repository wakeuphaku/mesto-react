export function PopupWithForm(props) {
    return (
        <div className={`popup popup-${props.name}`} >
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup-${props.name}__form`} name="editProfile" novalidate>
                    {props.children}
                    <button type="submit" className={`popup__button popup-${props.name}__button`}>Сохранить</button>
                </form>
                <button type="button" className="popup__close-button"></button>
            </div>
        </div >
    )
}