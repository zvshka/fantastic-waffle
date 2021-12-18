import {Layout} from "../../../components/Dashboard/Layout";
import {Badge} from "../../../components/Dashboard/Badge";
import {useState} from "react";
import {CourseCard} from "../../../components/Dashboard/CourseCard";
import {ChallengeCard} from "../../../components/Dashboard/ChallengeCard";

export default function CreateChallenges({initialData}) {

    const [tag, setTag] = useState("")
    const [tags, setTags] = useState([])

    const handleChange = (e) => {
        setTag(e.target.value)
    }

    const addTag = (e) => {
        e.preventDefault()
        const newTags = Array.from(tags)
        newTags.push(tag)
        setTags(newTags)
    }

    const removeTag = (e) => {

    }

    return (
        <Layout title={"Создать задачу"}>
            <div className="m-auto bg-white rounded-lg shadow">
                <div className="flex flex-1 py-5 pl-5 overflow-hidden">
                    <h1 className="inline text-2xl font-semibold leading-none">Данные задачи</h1>
                </div>
                <div className="px-5">
                    <input placeholder="Заголовок"
                           className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                               transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200
                               focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none
                               focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                    <input
                        placeholder="Описание"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500
                             ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500
                             focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2
                             ring-offset-current ring-offset-2 ring-gray-400"/>
                    <div className="flex">
                        <div className="flex-grow w-4/5 pr-2">
                            <input placeholder="Тэг"
                                   onChange={handleChange}
                                   className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                                               transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200
                                               focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none
                                               focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                        <button type="button"
                                onClick={addTag}
                                className="flex flex-grow items-center px-4 py-2.5 mt-2 font-medium tracking-wide text-white capitalize
                                    bg-secondary rounded-md focus:outline-none transition duration-300
                                    transform active:scale-95 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                 width="24px" fill="#FFFFFF">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                    opacity=".3"/>
                                <path
                                    d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/>
                            </svg>
                            <span className="pl-2 mx-1">Добавить</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-1 py-5 pl-5 overflow-hidden">
                    <h2 className="inline text-xl font-semibold leading-none">Добавленые тэги</h2>
                </div>
                <div className="flex px-3 flex-wrap">
                    {tags.length > 0 ? tags.map((t, i) => <Badge text={t} key={i}/>) : <p className="px-3">Пусто</p>}
                </div>
                <div className="flex flex-1 py-5 pl-5 overflow-hidden">
                    <h2 className="inline text-xl font-semibold leading-none">Дополнительное</h2>
                </div>
                <div className="px-5">
                    <textarea
                        placeholder="Условия задачи"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500
                             ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500
                             focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2
                             ring-offset-current ring-offset-2 ring-gray-400"/>
                </div>
                <div className="flex flex-row-reverse p-3">
                    <div className="flex-initial pl-3">
                        <button type="button"
                                className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize
                                    bg-secondary rounded-md focus:outline-none transition duration-300
                                    transform active:scale-95 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                 width="24px" fill="#FFFFFF">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                    opacity=".3"/>
                                <path
                                    d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/>
                            </svg>
                            <span className="pl-2 mx-1">Сохранить</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex bg-white shadow cursor-pointer rounded-xl">
                <ChallengeCard />
            </div>
        </Layout>
    )
}