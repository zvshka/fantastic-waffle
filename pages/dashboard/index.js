import {Layout} from "../../components/Dashboard/Layout";
import {useEffect, useState} from "react";
import {Card} from "../../components/Dashboard/Card";

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
        <div className="p-4 grid md:gap-y-4 md:grid-cols-2">
            {courses.map((c, i) => <Card key={i}/>)}
        </div>
    </Layout>
}