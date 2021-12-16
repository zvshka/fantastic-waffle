import {Layout} from "../../../components/Dashboard/Layout";
import {ChallengeCard} from "../../../components/Dashboard/ChallengeCard";

export default function Challenges() {
    return <Layout>
        <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
            <h1 className="text-2xl font-semibold">Мои задачи</h1>
        </div>
        <div className="p-8 space-y-8">
            <ChallengeCard/>
            <ChallengeCard/>
            <ChallengeCard/>
            <ChallengeCard/>
        </div>
    </Layout>
}