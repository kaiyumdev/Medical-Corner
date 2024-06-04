import React from 'react'
// import Logo from "../../../pubLinkc/images/Logo_1.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-white my-3 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinknecap="round" strokeLinknejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li> <Link to={"/"}>Home</Link></li>
                        <li> <Link to={"/dashboard"}>Dashboard</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link> </li>
                        <li><Link className='bg-customBlue rounded-lg' to={"/appointment"}>Appointment</Link></li>
                        <li><Link to={"/registration"}>Registration</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img className='w-1/2' src="/images/Logo_1.png"></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to={"/"}>Home</Link></li>
                    <li> <Link to={"/dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link> </li>
                    <li><Link className='bg-customBlue rounded-lg' to={"/appointment"}>Appointment</Link></li>
                    <li><Link to={"/registration"}>Registration</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navbar