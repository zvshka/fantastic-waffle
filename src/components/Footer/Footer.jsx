import {wrapper, background} from "./Footer.module.css"

function Footer() {
    return (
        <footer className={background}>
            <div className={wrapper}>
                <h2 style={{margin: 0, padding: 0}}>
                    Fantastic Waffle
                </h2>
                <div>
                    Copyright 2021
                </div>
            </div>
        </footer>
    )
}
export default Footer