import { Header } from "./Header"

export function Register() {
    return (
        <>
            <Header
                enter={"Войти"}
            />
            <section className="register" >
                <h2 className="register__title">Регистрация</h2>
                <form className="register__form">

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="register__input register__input-email"

                        required
                        autoComplete='off'
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Пароль "
                        className="register__input register__input-password"

                        required
                        autoComplete='off'
                    />
                    <button className="register__button" type="submit">
                        Зарегистрироваться
                    </button>

                </form>
                <div className="register__question">
                    <p>Уже зарегистрированы? Войти</p>
                </div>


            </section >
        </>
    )
}
