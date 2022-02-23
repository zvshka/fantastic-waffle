import {Layout} from "../../components/Dashboard/Layout";
import {CourseCard} from "../../components/Dashboard/CourseCard";
import {useEffect, useState} from "react";
import {FadeInBox} from "../../components/Dashboard/FadeInBox";
import {StaggerWrap} from "../../components/Dashboard/StaggerWrap";

export default function Dashboard() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const newCourses = []
        for (let i = 1; i < 12; i++) {
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

    console.log(courses)
    return <Layout title={"Список доступных курсов"}>
        <div className="flex justify-center">
            {courses.length > 0 && <StaggerWrap className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((c, i) => (
                    <FadeInBox key={i}>
                        <CourseCard course={c}/>
                    </FadeInBox>
                ))}
            </StaggerWrap>}
        </div>
    </Layout>
}