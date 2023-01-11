import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/tap-logo.png'

const Navbar = () => {
    return (
        <div className="border-b z-30 border-gray-200 shadow-md navbar sticky top-0  bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                        <li><Link to='/'>Login</Link></li>
                        <li><Link to='/'>Order</Link></li>

                    </ul>
                </div>
                <Link to='/' className="h-14 ml-3 w-14"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/'>Order</Link></li>


                </ul>
            </div>
            <div className="navbar-end">
                <p className="btn btn-warning">Get started</p>
            </div>
        </div>
    );
};

export default Navbar;