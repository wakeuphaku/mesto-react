import { Header } from "./Header"
import React from "react";

import { login } from '../utils/Auth.js';
import { Link, useNavigate } from 'react-router-dom';

export function Login(props) {
    const navigate = useNavigate();
    const [formValue, setFormValue] = React.useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        login(formValue.email, formValue.password)
            .then((data) => {
                console.log(data);
                if (data.token) {
                    setFormValue({ email: "", password: "" });
                    props.handleLogin();
                    navigate("/", { replace: true });
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <Header
                enter={"Регистрация"}
            />
            <section className="login" >
                <h2 className="login__title">Вход</h2>
                <form
                    onSubmit={handleSubmit}
                    className="login__form">

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="login__input login__input-email"
                        value={formValue.email}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        className="login__input login__input-password"
                        value={formValue.email}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                    />
                    <button className="login__button" type="submit">
                        Войти
                    </button>


                </form>
            </section >
        </>
    )
}
