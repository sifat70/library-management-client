


const BookCart = ({ book }) => {
    // eslint-disable-next-line react/prop-types
    const { author, ratting, category,  photo } = book;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="w-full h-52" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {category}
                </h2>
                <p className="font-bold">Author Name : <span className="text-gray-500">{author}</span></p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <button className="btn btn-block btn-outline btn-success">Details</button>
            </div>
        </div>
    );
};

export default BookCart;