import { Header } from "./Header"

export function Login() {
    return (
        <>
            <Header
                enter={"Регистрация"}
            />
            <section className="login" >
                <h2 className="login__title">Вход</h2>
                <form

                    className="login__form">
                    <div className="login__form-block">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="login__input login__input-email"

                            required
                            autoComplete='off'
                        />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Пароль "
                            className="login__input login__input-password"

                            required
                            autoComplete='off'
                        />
                        <button className="login__button" type="submit">
                            Зарегистрироваться
                        </button>

                    </div>
                </form>
            </section >
        </>
    )
}
