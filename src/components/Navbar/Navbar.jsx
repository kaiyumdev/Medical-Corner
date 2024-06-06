import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { logOut, user } = useAuth();

    const handleLogout = async () => {
        await logOut()
    }

    return (
        <div className="navbar bg-white my-3 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/dashboard"}>Dashboard</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li><Link className='bg-customBlue rounded-lg' to={"/appointment"}>Appointment</Link></li>
                        {!user && <li><Link to={"/registration"}>Registration</Link></li>}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to="/">
                    <img className='w-1/2' src="/images/Logo_1.png" alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link className='bg-customBlue rounded-lg' to={"/appointment"}>Appointment</Link></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {user ? (
                    <>
                        <button
                            onClick={handleLogout}
                            className="btn button button:hover hidden lg:block"
                        >
                            Logout
                        </button>
                        <div className="avatar">
                            <div className="w-12 rounded-full border-2 border-black cursor-pointer">
                                <img src={user?.photoURL || "/public/placeholder.jpg"} alt="User Avatar" />
                            </div>
                        </div>
                    </>
                ) : (
                    <ul className="hidden lg:flex hover:btn-ghost p-2 shadow rounded-box ">
                        <li><Link to={"/registration"}>Registration</Link></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar
