import {wrapper, background, item, button} from "./Navbar.module.css"

function Navbar() {
    return (
        <header className={background}>
            <div className={wrapper}>
                {/*Logo*/}
                <div>
                    <h2 style={{margin: 0, padding: 0}}>
                        Fantastic Waffle
                    </h2>
                </div>
                {/*Navigation*/}
                <div>
                    <a className={item} href="#">Главная</a>
                    <a className={item} href="#">О нас</a>
                    <a className={item} href="#">Языки</a>
                    <a className={item} href="#">Отзывы</a>

                    {/*User buttons*/}

                    <button className={button}>Войти</button>
                    <button className={button}>Регистрация</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar