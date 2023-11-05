

const Banner = () => {
    return (
            <div className="hero h-[500px] " style={{ backgroundImage: 'url(https://i.ibb.co/JdWH58P/pngtree-an-old-bookcase-in-a-library-image-2642908.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Better Learning Future Starts With Penn</h1>
                        <p className="mb-5">It is a long established fact that reader will be distracted readable content of a page when.</p>
                        <button className="btn btn-success">Explore</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;