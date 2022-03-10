import warranty from "../public/warranty.png"
import jsImage from "../public/js.png"
import csImage from "../public/cs.png"
import cssImage from "../public/css.png"
import htmlImage from "../public/html.png"
import reactImage from "../public/react.png"
import nextImage from "../public/nextjs.png"
import AdvantagesCard from "../components/Home/AdvantagesCard";
import Button from "../components/Home/Button";
import {TeamCard} from "../components/Home/TeamCard";
import {LanguageCard} from "../components/Home/LanguageCard";
import {Layout} from "../components/Home/Layout";
import NavLink from "../components/Home/NavLink";
import {StaggerWrap} from "../components/Dashboard/StaggerWrap";
import {FadeInBox} from "../components/Dashboard/FadeInBox";

export default function Home() {
    return (
        <Layout>
            <section id="home">
                <div className="flex items-center justify-center flex-col background min-h-screen">
                </div>
                <div className="bg-text">
                    <h2 className="text-4xl font-bold text-white close-and-heavy-text-shadow">Fantastic Waffle</h2>
                    <p className="mt-2 text-2xl text-white">Молодой и амбициозный проект <br/> обучающий программированию</p>
                    <NavLink href="#advantages" button className="mt-4">
                        Узнать больше
                    </NavLink>
                </div>
            </section>
            <section id="advantages" className="pt-40 mb-8">
                <div className="max-w-6xl px-4 mx-auto">
                    <h2 className="text-center text-4xl font-bold">Наши преимущества</h2>
                    <StaggerWrap
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        animate={""}
                        className="flex justify-between mt-32">
                        <FadeInBox>
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        </FadeInBox>
                        <FadeInBox>
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        </FadeInBox>
                        <FadeInBox>
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        </FadeInBox>
                        <FadeInBox>
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        </FadeInBox>
                    </StaggerWrap>
                </div>
            </section>
            <section id="about" className="pt-40 mb-48">
                <div className="max-w-6xl px-4 mx-auto">
                    <h2 className="text-center text-4xl font-bold">О нашей комапании</h2>
                    <br/>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <br/>
                    <p className="text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit, sed quia non numquam eius modi
                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                        vel eum iure reprehenderit qui
                        in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                        fugiat quo voluptas nulla pariatur?
                    </p>
                </div>
            </section>
            <section className="bg-primary w-full">
                <div className="max-w-6xl mx-auto p-4 flex items-center justify-between md:flex-row flex-col">
                    <p className="text-white font-bold text-center mb-3">Подпишись на нашу рассылку <br/> и будь в
                        курсе последних новостей!</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <input type="text"/>
                        <input type="text"/>
                        <Button>Подпписаться</Button>
                    </div>
                </div>
            </section>
            <section id="team" className="pt-28">
                <div className="max-w-6xl px-4 mx-auto space-y-4">
                    <h2 className="text-center text-4xl font-bold">Наша команда</h2>
                    <StaggerWrap
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        animate={""}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <FadeInBox>
                            <TeamCard/>
                        </FadeInBox>
                        <FadeInBox>
                            <TeamCard/>
                        </FadeInBox>
                        <FadeInBox>
                            <TeamCard/>
                        </FadeInBox>
                        <FadeInBox>
                            <TeamCard/>
                        </FadeInBox>
                        <FadeInBox>
                            <TeamCard/>
                        </FadeInBox>
                        <FadeInBox>
                            <TeamCard/>
                        </FadeInBox>
                    </StaggerWrap>
                </div>
            </section>
            <section id="catalog" className="py-32 min-h-screen">
                <div className="max-w-6xl px-4 mx-auto">
                    <h2 className="text-center text-4xl font-bold">Доступные языки и фреймворки</h2>
                    <div>
                        <h3 className="text-3xl my-12">Доступные языки</h3>
                        <StaggerWrap
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            animate={""}
                            className="flex gap-16">
                            <FadeInBox>
                                <LanguageCard text={"C#"} image={csImage}/>
                            </FadeInBox>
                            <FadeInBox>
                                <LanguageCard text={"HTML"} image={htmlImage}/>
                            </FadeInBox>
                            <FadeInBox>
                                <LanguageCard text={"CSS"} image={cssImage}/>
                            </FadeInBox>
                            <FadeInBox>
                                <LanguageCard text={"JS"} image={jsImage}/>
                            </FadeInBox>
                        </StaggerWrap>
                        <h3 className="text-3xl my-12">Доступные фреймворки</h3>
                        <StaggerWrap
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            animate={""}
                            className="flex gap-16">
                            <FadeInBox>
                                <LanguageCard text={"React JS"} image={reactImage}/>
                            </FadeInBox>
                            <FadeInBox>
                                <LanguageCard text={"Next JS"} image={nextImage}/>
                            </FadeInBox>
                        </StaggerWrap>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
