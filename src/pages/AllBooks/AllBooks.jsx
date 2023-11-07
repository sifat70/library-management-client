import { useLoaderData } from "react-router-dom";
import BookCart from "../BookCart/BookCart";


const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 mb-8">
                {
                    books.map(book => <BookCart
                        key={book?._id}
                        book={book}
                    ></BookCart>)
                }
            </div>
        </div>
    );
};

export default AllBooks;