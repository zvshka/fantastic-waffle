import {Layout} from "../../../components/Dashboard/Layout";
import {Table} from "../../../components/Dashboard/Table";
import {useEffect, useState} from "react";
import {Badge} from "../../../components/Dashboard/Badge";

export default function CoursesTable() {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        const newCourses = []
        for (let i = 1; i < 10; i++) {
            newCourses.push({
                id: i,
                creationTime: new Date().toDateString(),
                title: "Node js часть 1",
                subtitle: "Познаем озы Node.js",
                description: "В данном курсе мы установим и опробуем Node.js",
                tags: ["JS", "NODE.JS", "WEB"].map((t, i) => <Badge text={t} key={i} /> )
            })
        }
        setCourses(newCourses)
    }, [])

    return (
        <Layout title={"Таблица всех курсов"}>
            <Table items={courses}
                   titles={["ID", "Дата создания", "Название", "Доп. Название", "Описание", "Теги"]}
                   baseEditUrl={"/dashboard/courses"}
            />
        </Layout>
    )
}