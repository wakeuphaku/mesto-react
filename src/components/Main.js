export function Main() {
    return (
        <main>
            <section className="profile">
                <div onClick={handleEditAvatarClick} className="profile__avatar">
                    <img src="../src/images/Avatar.png" alt="Аватар" className="profile__avatar-image" />
                </div>

                <div className="profile-info">
                    <h1 className="profile-info__name">Жак-Ив Кусто</h1>

                    <button onClick={handleEditProfileClick} type="button" className="profile-info__edit-button"></button>

                    <p className="profile-info__hobby">Исследователь океана</p>
                </div>
                <button onClick={handleAddPlaceClick} type="button" className="profile__add-button"></button>
            </section>
        </main>
    )
}

function handleEditAvatarClick() {
    document.querySelector('.popup-avatar').classList.add('popup_opened')
}
function handleEditProfileClick() {
    document.querySelector('.popup-edit').classList.add('popup_opened')
}
function handleAddPlaceClick() {
    document.querySelector('.popup-add').classList.add('popup_opened')
}