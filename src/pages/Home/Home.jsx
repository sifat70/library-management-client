import { useLoaderData } from "react-router-dom";
import Achievement from "../Achivement/Achivement";
import Banner from "../Banner/Banner";
import Gallery from "../Gellary/Gallery";
import Reviews from "../Reviews/Reviews";
import Sponsored from "../Sponsored/Sponsored";
import BookCart from "../BookCart/BookCart";


const Home = () => {

    const books = useLoaderData();
    return (
        <div>
            <div className="mt-8 w-[90%] mx-auto rounded-full dark:text-white">
                <Banner></Banner>
                <Gallery></Gallery>
                <div className="mt-5 ">
                    <h1 className='mx-auto text-center pb-2 uppercase font-bold text-3xl border-b-2 w-[17rem] border-[#2f85b8]' >Category</h1>
                    <div className="grid gap-5 grid-cols-1 mt-8 lg:grid-cols-3 md:grid-cols-2 dark:text-black">
                        {
                            books.map(book => <BookCart
                                key={book?._id}
                                book={book}
                            ></BookCart>)
                        }
                    </div>
                </div>
                <Achievement></Achievement>
                <Sponsored></Sponsored>
                <div className="dark:text-black ">
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default Home;