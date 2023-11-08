import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const BookDetails = () => {


    const bookDetails = useLoaderData();
    console.log(bookDetails)


    const handleBorrowed = () => {
        Swal.fire({
            title: "Good job!",
            text: "Your Borrowed book added",
            icon: "success"
        });
    }

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
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-success btn-outline mt-4" onClick={() => document.getElementById('my_modal_3').showModal()}>Borrowed now</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="flex">
                                <div className="flex-1">
                                    <p className="font-bold mb-3">Borrowed Date</p>
                                    <input type="date" name="" id="" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold mb-3">Return Date</p>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <button onClick={handleBorrowed} className="btn btn-accent btn-outline ">Borrowed</button>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;