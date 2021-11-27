import {Layout} from "../components/Home/Layout";
import {useState} from "react";

const EmailSign = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clipRule="evenodd"/>
    </svg>
}

const PasswordSign = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"/>
    </svg>
}

const UserSign = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
    </svg>
}

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const handleChange = (e) => {
        e.preventDefault()
        setIsLogin(!isLogin)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.v)
    }
    return (
        <Layout>
            <div className="h-screen flex items-center justify-center pt-16">
                <div
                    className="flex flex-col bg-primary shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
                    <div className="font-medium self-center text-xl sm:text-3xl text-white">
                        Добро пожаловать!
                    </div>
                    <div className="mt-4 self-center text-xl sm:text-sm text-white">
                        {isLogin ? "Введите свои данные для доступа к сайту" : "Введите данные для регистрации"}
                    </div>
                    <div className="mt-10">
                        <form onSubmit={handleSubmit}>
                            {isLogin ? "" : <div className="flex flex-col mb-5">
                                <label htmlFor="email" className="mb-1 text-xs tracking-wide text-white">Имя
                                    пользователя:</label>
                                <div className="relative">
                                    <div
                                        className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <UserSign/>
                                    </div>
                                    <input id="username" type="username" name="username"
                                           className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                                           placeholder="Введите ваше имя пользователя"/>
                                </div>
                            </div>}
                            <div className="flex flex-col mb-5">
                                <label htmlFor="email" className="mb-1 text-xs tracking-wide text-white">Почта:</label>
                                <div className="relative">
                                    <div
                                        className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <EmailSign/>
                                    </div>
                                    <input id="email" type="email" name="email"
                                           className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                                           placeholder="Введите ваш Email"/>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label htmlFor="password"
                                       className="mb-1 text-xs sm:text-sm tracking-wide text-white">Пароль:</label>
                                <div className="relative">
                                    <div
                                        className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                        <PasswordSign/>
                                    </div>
                                    <input id="password" type="password" name="password"
                                           className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                           placeholder="Введите ваш пароль"
                                    />
                                </div>
                            </div>
                            <div className="flex w-full">
                                <button
                                    type="submit"
                                    className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-secondary hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
                                >
                                    <span className="mr-2 uppercase">{isLogin ? "Войти" : "Регистрация"}</span>
                                    <span>
                                          <svg
                                              className="h-6 w-6"
                                              fill="none"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                          >
                                            <path
                                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center items-center mt-6">
                            <a
                                href="#"
                                target="_blank"
                                className="inline-flex items-center text-white font-medium text-xs text-center"
                            >
                                <span className="ml-2">{isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}
                                    <a onClick={handleChange}
                                       className="text-xs ml-2 text-blue-500 font-semibold">{isLogin ? "Регистрация" : "Войти"}</a>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}