import {Layout} from "../../../components/Dashboard/Layout";
import {ChallengeCard} from "../../../components/Dashboard/ChallengeCard";
import {StaggerWrap} from "../../../components/Dashboard/StaggerWrap";
import {FadeInBox} from "../../../components/Dashboard/FadeInBox";

export default function Challenges() {
    return <Layout title={"Мои задачи"}>
        <StaggerWrap className="space-y-8">
            <FadeInBox>
                <ChallengeCard/>
            </FadeInBox>
            <FadeInBox>
                <ChallengeCard/>
            </FadeInBox>
            <FadeInBox>
                <ChallengeCard/>
            </FadeInBox>
            <FadeInBox>
                <ChallengeCard/>
            </FadeInBox>
            <FadeInBox>
                <ChallengeCard/>
            </FadeInBox>

        </StaggerWrap>
    </Layout>
}