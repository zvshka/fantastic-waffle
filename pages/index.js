import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import warranty  from "../public/warranty.png"
import AdvantagesCard from "../components/Home/AdvantagesCard";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main>
                <section id="home" className="h-screen">
                    <div className="flex items-center justify-center h-full flex-col background">
                        <h2 className="text-3xl font-bold text-white">Fantastic Waffle</h2>
                        <p className="mt-2 text-white">Молодой и амбициозный проект <br/> обучающий программированию</p>
                        <button className="px-4 py-2 bg-secondary text-white rounded-2xl font-bold text-md mt-4">
                            Узнать больше
                        </button>
                    </div>
                </section>
                <section id="advantages" className="pt-8 md:pt-20">
                    <div className="max-w-6xl px-4 mx-auto">
                        <h2 className="text-3xl text-center">Наши преимущества</h2>
                        <div className="grid md:grid-rows-1 md:grid-cols-4 grid-rows-4 grid-cols-1 gap-8 mt-8 md:mt-20">
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                            <AdvantagesCard text={"Гарантия качества"} image={warranty}/>
                        </div>
                    </div>
                    <div className="spacer wave-top mt-14"/>
                </section>
                <section id="about">
                    <div className="spacer wave-bottom"/>
                    <div className="h-4/6 max-w-6xl px-4 mx-auto">
                        <h2 className="text-3xl text-center">О нас</h2>
                        <br/>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <br/>
                        <p className="text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                            in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                </section>
                <section className="bg-primary w-full">
                    <div className="spacer wave-top"/>
                    <div className="max-w-6xl mx-auto p-4 flex items-center justify-between md:flex-row flex-col">
                        <p className="text-white font-bold text-center mb-3">Подпишись на нашу рассылку <br/> и будь в курсе последних новостей!</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <input type="text"/>
                            <input type="text"/>
                            <button className="px-4 py-2 bg-secondary text-white rounded-2xl font-bold text-md">
                                Подписаться
                            </button>
                        </div>
                    </div>
                    <div className="spacer wave-bottom"/>
                </section>
                <section id="team" className="h-screen">

                </section>
                <section id="catalog" className="h-screen">

                </section>
            </main>
            <Footer/>
        </>
    )
}
