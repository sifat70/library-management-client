import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    return (
        <div className="hero min-h-screen mt-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="mr-12 w-1/2">
                    <img src="https://i.ibb.co/jyytmWC/4957412-Mobile-login-Cristina-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="input name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success font-bold">Register</button>
                        </div>
                    </form>
                    <p className="text-center pb-5">Al ready have an account ? <Link className="text-lime-600 font-bold" to="/login">Register</Link></p>
                    <div className="mt-2 mb-3 w-[80%] mx-auto">
                        <button className="btn btn-outline btn-ghost w-full"><FaGoogle></FaGoogle>Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;