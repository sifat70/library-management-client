import Achievement from "../Achivement/Achivement";
import Banner from "../Banner/Banner";
import Gallery from "../Gellary/Gallery";
import Reviews from "../Reviews/Reviews";
import Sponsored from "../Sponsored/Sponsored";


const Home = () => {
    return (
        <div>
            <div className="mt-8 w-[90%] mx-auto rounded-full">
                <Banner></Banner>
                <Gallery></Gallery>
                <Achievement></Achievement>
                <Sponsored></Sponsored>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;