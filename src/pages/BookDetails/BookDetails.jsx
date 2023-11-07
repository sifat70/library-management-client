import { useLoaderData } from "react-router-dom";


const BookDetails = () => {


    const bookDetails = useLoaderData();
    console.log(bookDetails)

    return (
        <div className="hero min-h-screen bg-base-200 mt-8 mb-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="h-96 carousel carousel-vertical rounded-box w-[90%]">
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/vQZTf2w/pexels-ivo-rainha-1290141.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/DKnjkfn/old-books-436498-640.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/LxJ6T9j/historic-library.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/zNmVDPy/people-watch-a-drama-at-the-tianjin-binhai-library-which-displays-a-large-collection-of-books-on-ter.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/SrbDCqx/Juventus-Slavia-Prague-1932.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/bHNSqPx/sport-cricket-run-out-AE5-P59.jpg" />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{bookDetails?.author ? bookDetails?.author : 'Lional Messi'}</h1>
                    <p className="py-6">{bookDetails?.description ? bookDetails?.description : `ibraries that provide specialized information resources on a particular subject, serve a specialized and limited clientele,  and deliver specialized services to that clientele.`}</p>
                    <button className="btn btn-success btn-outline">Borrow now</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;