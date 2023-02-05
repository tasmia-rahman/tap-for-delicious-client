import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../Assets/tap-logo.png'
import { FaCartArrowDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../Redux/Authentication/action';
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    // ------- Theme --------- //
    const { toggleTheme, setToggleTheme } = useContext(ThemeContext)


    let theme = "bumblebee";
    let dark = false;;

    if (toggleTheme) {
        dark = true
        const retrievedObject = localStorage.getItem('theme');
        const themeObj = JSON.parse(retrievedObject);
        theme = themeObj?.theme;
        if (theme === "bumblebee") {
            dark = false
        }
        if (theme === "halloween") {
            dark = true
        }
        else {
            dark = false;
        }

    }
    else {
        const retrievedObject = localStorage.getItem('theme');
        const themeObj = JSON.parse(retrievedObject);
        theme = themeObj?.theme
        if (theme === "halloween") {
            dark = true
        }
        else {
            dark = false
        }
    }


    const handleTheme = () => {
        setToggleTheme(!toggleTheme)

        if (toggleTheme) {
            const webTheme = { theme: "halloween" }
            localStorage.setItem('theme', JSON.stringify(webTheme));
        }
        else {
            const webTheme = { theme: "bumblebee" }
            localStorage.setItem('theme', JSON.stringify(webTheme));
        }
    }

    // ------- Theme End --------- //

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartReducer.cartItems);

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate());
        }
    }

    const handleLogOut = () => {
        logout()
            .then()
            .catch();
    }
    return (
        <div data-theme={`${theme}`} className="border-b z-40 border-gray-200 shadow-md navbar sticky top-0   backdrop-filter backdrop-blur-lg bg-opacity-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* Mobile navbar */}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user ? <li><Link to='/dashboard'>Dashboard</Link></li> : ""
                        }
                        <li className='text-lg font-medium text-amber-500 hover:text-amber-300'><Link to='/wishlist'><FaCartArrowDown className='border-0 hover:border-2 py-1 px-2 rounded-xl hover:border-amber-400 text-5xl text-amber-400
                    hover:text-white hover:bg-amber-400' /></Link></li>

                    </ul>
                    {/* Mobile navbar ends */}
                </div>

                <Link to='/' className="h-14 md:ml-10 w-14"><img src={logo} alt="" /></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-5 px-1">


                    <NavLink to='/home' className={({ isActive }) =>
                        isActive ? "text-lg text-amber-300 border-t border-b hover:text-amber-500  font-bold border-orange-300" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                    }>Home</NavLink>

                    <li>
                        <NavLink to='/about' className={({ isActive }) =>
                            isActive ? "text-lg text-amber-300 hover:text-amber-500 border-t border-b font-bold border-orange-300" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                        }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "text-lg text-amber-300 hover:text-amber-500 border-t border-b  font-bold border-orange-300" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                        }>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) =>
                            isActive ? "text-lg text-amber-300 hover:text-amber-500 border-t border-b  font-bold border-orange-300" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                        }>Blog</NavLink>
                    </li>
                    {
                        user ? <li>
                            <NavLink to='/dashboard' className={({ isActive }) =>
                                isActive ? "text-lg text-amber-300 hover:text-amber-500 border-t border-b  font-bold border-orange-300" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                            }>Dashboard</NavLink>
                        </li> : ""
                    }


                    <li className='text-lg font-medium text-amber-500 hover:text-amber-300'>
                        <Link to='/cart' className='flex items-center'>
                            <FaCartArrowDown className='border-0 hover:border-2 py-1 px-2 rounded-xl hover:border-amber-400 text-5xl text-amber-400 hover:text-white hover:bg-amber-400' />
                            {cartItems.length}
                        </Link>
                    </li>

                    <li className='cursor-pointer'>
                        {dark ? <svg onClick={handleTheme} className="swap-on fill-current w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg> :
                            <svg onClick={handleTheme} className="swap-off fill-current w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        }
                    </li>


                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <button onClick={handleLogOut} className='btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 '>Sign Out</button>
                        :
                        <Link to='/login'> <p className="btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 animate-bounce">Login</p>
                        </Link>
                }

            </div>
        </div >
    );
};

export default Navbar;