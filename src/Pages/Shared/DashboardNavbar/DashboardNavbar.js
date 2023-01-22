import React from 'react';
import logo from '../../../Assets/tap-logo.png';

const DashboardNavbar = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl" href='/'>
                        <img src={logo} className='w-8 mr-2' alt='logo' />
                        Tap For Delicious
                    </a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='Pic' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between" href='/'>
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;