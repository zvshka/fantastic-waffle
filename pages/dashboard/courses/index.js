import {CourseCard} from "../../../components/Dashboard/CourseCard";
import {Layout} from "../../../components/Dashboard/Layout";
import {useEffect, useState} from "react";

export default function Courses() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const newCourses = []
        for (let i = 1; i < 10; i++) {
            newCourses.push({
                title: "Node js часть 1",
                subtitle: "Познаем озы Node.js",
                description: "В данном курсе мы установим и опробуем Node.js",
                tags: ["JS", "NODE.JS", "WEB"],
                author: {
                    firstName: "Andrey",
                    lastName: "Pushpurs",
                    avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128",
                    position: "JS Senior"
                }
            })
        }
        setCourses(newCourses)
    }, [])

    return <Layout title="Мои курсы">
        <div className="flex justify-center">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((c, i) => <CourseCard key={i} course={c} progress={true}/>)}
            </div>
        </div>
    </Layout>
}