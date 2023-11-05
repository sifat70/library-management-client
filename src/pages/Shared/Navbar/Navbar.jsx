import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink className={({ isActive }) =>
              isActive ? 'btn btn-success btn-sm text-white' : 'btn btn-ghost btn-sm'
            } to="/">Home</NavLink></li>
        <li><NavLink to="/addBook">Add Book</NavLink></li>
        <li><NavLink to="/allBooks">All Books</NavLink></li>
        <li><NavLink to="/borrowedBooks">Borrowed Books</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className="w-36 h-24" src="https://i.ibb.co/3yK4Zkx/Pngtree-cloud-library-logo-free-logo-5006925.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex mt-9">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end mt-9">
                <NavLink to="/login"><button className="btn btn-outline btn-success">Login</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;