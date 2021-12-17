import {Layout} from "../../../components/Dashboard/Layout";
import {ChallengeCard} from "../../../components/Dashboard/ChallengeCard";

export default function Challenges() {
    return <Layout title={"Мои задачи"}>
        <div className="space-y-8">
            <ChallengeCard/>
            <ChallengeCard/>
            <ChallengeCard/>
            <ChallengeCard/>
        </div>
    </Layout>
}