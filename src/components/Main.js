import React from "react";
import { api } from "../utils/Api.js";



export function Main({ onEditAvatar, onEditProfile, onAddPlace }) {


    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        api.userInfo()
            .then(item => {
                setUserName(item.name);
                setUserDescription(item.about);
                setUserAvatar(item.avatar);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <main>
            <section className="profile">
                <div onClick={onEditAvatar} className="profile__avatar">
                    <div style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар" className="profile__avatar-image"></div>
                </div>

                <div className="profile-info">
                    <h1 className="profile-info__name">{userName}</h1>

                    <button onClick={onEditProfile} type="button" className="profile-info__edit-button"></button>

                    <p className="profile-info__hobby">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
            </section>
        </main>
    )
}
