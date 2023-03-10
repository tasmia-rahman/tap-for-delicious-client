import logo from '../../../Assets/tap-logo.png';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { logoutInitiate } from '../../../Redux/Authentication/action';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { emptyCart } from './../../../Redux/Actions/cartAction';
import { useNavigate } from 'react-router-dom';

const DashboardNavbar = () => {

    const { user, logout } = useContext(AuthContext);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate());
        }
    }

    const handleLogOut = () => {
        logout()
            .then(() => {
                dispatch(emptyCart());
                navigate('/login');
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
    }

    return (
        <div className="border-b z-40 border-gray-200 shadow-md navbar sticky top-0   backdrop-filter backdrop-blur-lg bg-opacity-50">
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
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={handleLogOut} className='btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300'>Sign Out</button>
                        :
                        <Link to='/login'> <p className="btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300">Login</p>
                        </Link>
                }
                {/* <Link to='/login'> <p className="btn mr-10 border-2 border-amber-400 bg-transparent text-amber-500 rounded-2xl
            hover:bg-amber-400 hover:text-white hover:border-white text animate-bounce">Login</p>
            </Link> */}
            </div>
        </div >
    );
};

export default DashboardNavbar;