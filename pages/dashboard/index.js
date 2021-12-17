import {Layout} from "../../components/Dashboard/Layout";
import {CourseCard} from "../../components/Dashboard/CourseCard";

export default function Dashboard() {

    const courses = [
        {
            name: "Node js часть 1",
            description: "Познаем озы Node.js",
            text: "В данном курсе мы установим и опробуем Node.js",
            tags: ["JS", "NODE.JS", "WEB"],
            author: {
                name: "Andrey Pushpurs",
                avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128",
                position: "JS Senior"
            }
        },
        {
            name: "Node js часть 1",
            description: "Познаем озы Node.js",
            text: "В данном курсе мы установим и опробуем Node.js",
            tags: ["JS", "NODE.JS", "WEB"],
            author: {
                name: "Andrey Pushpurs",
                avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128",
                position: "JS Senior"
            }
        },
        {
            name: "Node js часть 1",
            description: "Познаем озы Node.js",
            text: "В данном курсе мы установим и опробуем Node.js",
            tags: ["JS", "NODE.JS", "WEB"],
            author: {
                name: "Andrey Pushpurs",
                avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128",
                position: "JS Senior"
            }
        },
        {
            name: "Node js часть 1",
            description: "Познаем озы Node.js",
            text: "В данном курсе мы установим и опробуем Node.js",
            tags: ["JS", "NODE.JS", "WEB"],
            author: {
                name: "Andrey Pushpurs",
                avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128",
                position: "JS Senior"
            }
        },
        {
            name: "Node js часть 1",
            description: "Познаем озы Node.js",
            text: "В данном курсе мы установим и опробуем Node.js",
            tags: ["JS", "NODE.JS", "WEB"],
            author: {
                name: "Andrey Pushpurs",
                avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128",
                position: "JS Senior"
            }
        },
        {
            name: "Node js часть 1",
            description: "Познаем озы Node.js",
            text: "В данном курсе мы установим и опробуем Node.js",
            tags: ["JS", "NODE.JS", "WEB"],
            author: {
                name: "Andrey Pushpurs",
                avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128",
                position: "JS Senior"
            }
        },
    ]

    return <Layout>
        <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
            <h1 className="text-2xl font-semibold">Список доступных курсов</h1>
        </div>
        <div className="flex justify-center">
            <div className="p-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((c, i) => <CourseCard key={i} course={c}/>)}
            </div>
        </div>
    </Layout>
}