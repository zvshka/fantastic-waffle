import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({children}) {
    return (
        <div className="container mx-auto">
            <Navbar/>
                <main>
                    {children}
                </main>
            <Footer/>
        </div>
    )
}

export default Layout