import CostsForm from "./CostsForm";
import EarnsForm from "./EarnsForm";
import Footer from "./Footer";
import Header from "./Header";

function HomePage() {
    return ( 

        <div className="homepage">
            <Header/>
            <EarnsForm/>
            <CostsForm/>
            <Footer/>
        </div>
     );
}

export default HomePage;