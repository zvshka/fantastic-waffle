import {Layout} from "../../components/Dashboard/Layout";
import {useEffect, useState} from "react";

const TableRow = ({name, language, hard, available}) => {
    return <tr className="bg-gray-200">
        <td className="p-3">
            <div className="flex align-items-center">
                <div className="ml-3">
                    <div className="">{name}</div>
                </div>
            </div>
        </td>
        <td className="p-3 text-center">
            {language.toUpperCase()}
        </td>
        <td className="p-3 font-bold text-center">
            {hard.toUpperCase()}
        </td>
        <td className="p-3">
            <span className="bg-green-400 text-gray-50 rounded-md px-2">{available}</span>
        </td>
    </tr>
}

export default function Dashboard() {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses([
            {
                name: "Node js часть 1",
                language: "js",
                hard: "easy",
                available: "available"
            },
            {
                name: "Node js часть 2",
                language: "js",
                hard: "easy",
                available: "available"
            },
            {
                name: "Node js часть 3",
                language: "js",
                hard: "easy",
                available: "available"
            },
            {
                name: "Node js часть 4",
                language: "js",
                hard: "easy",
                available: "available"
            }
        ])
    }, [])

    return <Layout>
        <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
            <h1 className="text-2xl font-semibold">Список доступных курсов</h1>
        </div>
        <div className="p-4">
            <table className="w-full border-separate space-y-6 text-sm">
                <thead className="bg-primary text-white">
                <tr>
                    <th className="p-3">Название курса</th>
                    <th className="p-3 text-left">Язык</th>
                    <th className="p-3 text-left">Сложность</th>
                    <th className="p-3 text-left">Доступность</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((c, i) => <TableRow key={i} name={c.name} available={c.available} hard={c.hard} language={c.language}/> )}
                </tbody>
            </table>
        </div>
    </Layout>
}