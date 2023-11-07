
const AddBooks = () => {

    const handleAddBook = event => {
        event.preventDefault();

        const form = event.target;


        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const ratting = form.ratting.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;


        const newBook = {name, quantity, author, ratting, category, description, photo}
        console.log(newBook)



        // send data to the server

        fetch('http://localhost:5000/book',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


    }
    return (
        <div className="bg-[#F4F3F0] p-24 mt-8">
            <h2 className="text-4xl text-center font-bold mb-5">Add a Book</h2>
            <form onSubmit={handleAddBook}>
                {/* name and quantity  */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Book name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="book name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="input quantity" className="w-full input input-bordered" id="" />
                        </label>
                    </div>
                </div>

                {/* Supplier and Taste */}
                <div className="md:flex mt-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="author" placeholder="Supplier" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ratting" placeholder="ratting" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>

                {/* Category  and Details*/}
                <div className="md:flex mt-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Details" className="w-full input input-bordered" id="" />
                        </label>
                    </div>
                </div>

                {/* photo url */}
                <div className="mt-8 mb-8">
                    <div className="form-control md:w-full">

                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block btn-success btn-outline" value="add book" />
            </form>
        </div>
    );
};

export default AddBooks;