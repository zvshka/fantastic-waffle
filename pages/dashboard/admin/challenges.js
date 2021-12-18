import {Layout} from "../../../components/Dashboard/Layout";
import {Table} from "../../../components/Dashboard/Table";
import {useEffect, useState} from "react";
import {Badge} from "../../../components/Dashboard/Badge";

export default function ChallengesTable() {

    const [challenges, setChallenges] = useState([])
    useEffect(() => {
        const newChallenges = []
        for (let i = 1; i <= 10; i++) {
            newChallenges.push({
                id: i,
                creationTime: new Date().toDateString(),
                title: "Praesent at arcu augue. Etiam lectus massa, consequat",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. " +
                    "Tempora expedita dicta totam totam gul koparam doloremque. " +
                    "Excepturi iste iusto eos enim reprehenderit nisi, accusamus...",
                tags: ["JS", "WEB", "NODE.JS"].map((t, i) => <Badge key={i} text={t}/>)
            })
        }
        setChallenges(newChallenges)
    }, [])

    return (
        <Layout title={"Таблица всех задач"}>
            <Table items={challenges}
                   titles={["ID", "Дата создания", "Название", "Описание", "Теги"]}
                   baseEditUrl={"/dashboard/challenges"}
            />
        </Layout>
    )
}