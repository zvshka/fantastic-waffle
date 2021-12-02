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

export default function Home() {
    return (
        <Layout>
            <section id="home">
                <div className="flex items-center justify-center flex-col background h-screen">
                </div>
                <div className="bg-text">
                    <h2 className="text-4xl font-bold text-white">Fantastic Waffle</h2>
                    <p className="mt-2 text-2xl text-white">Молодой и амбициозный проект <br/> обучающий программированию</p>
                    <NavLink href="#advantages" button className="mt-4">
                        Узнать больше
                    </NavLink>
                </div>
            </section>
            <section id="advantages" className="pt-40 mb-8">
                <div className="max-w-6xl px-4 mx-auto">
                    <h2 className="text-center text-4xl font-bold">Наши преимущества</h2>
                    <div className="flex justify-between mt-32">
                        <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                    </div>
                </div>
            </section>
            {/*<div className="spacer wave-top"/>*/}
            <section id="about" className="pt-40 mb-48">
                {/*<div className="spacer wave-bottom"/>*/}
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
                {/*<div className="spacer wave-top"/>*/}
                <div className="max-w-6xl mx-auto p-4 flex items-center justify-between md:flex-row flex-col">
                    <p className="text-white font-bold text-center mb-3">Подпишись на нашу рассылку <br/> и будь в
                        курсе последних новостей!</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <input type="text"/>
                        <input type="text"/>
                        {/*<button className="px-4 py-2 bg-secondary text-white rounded-2xl font-bold text-md">*/}
                        {/*    Подписаться*/}
                        {/*</button>*/}
                        <Button>Подпписаться</Button>
                    </div>
                </div>
                {/*<div className="spacer wave-bottom"/>*/}
            </section>
            <section id="team" className="pt-32">
                <div className="max-w-6xl px-4 mx-auto">
                    <h2 className="text-center text-4xl font-bold">Наша команда</h2>
                    <div className="flex items-center justify-between pt-20">
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                    </div>
                    <div className="flex items-center justify-between pt-20">
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                    </div>
                </div>
            </section>
            <section id="catalog" className="py-32 min-h-screen">
                <div className="max-w-6xl px-4 mx-auto">
                    <h2 className="text-center text-4xl font-bold">Доступные языки и фреймворки</h2>
                    <div>
                        <h3 className="text-3xl my-12">Доступные языки</h3>
                        <div className="flex gap-16">
                            <LanguageCard text={"C#"} image={csImage}/>
                            <LanguageCard text={"HTML"} image={htmlImage}/>
                            <LanguageCard text={"CSS"} image={cssImage}/>
                            <LanguageCard text={"JS"} image={jsImage}/>
                        </div>
                        <h3 className="text-3xl my-12">Доступные фреймворки</h3>
                        <div className="flex gap-16">
                            <LanguageCard text={"React JS"} image={reactImage}/>
                            <LanguageCard text={"Next JS"} image={nextImage}/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
