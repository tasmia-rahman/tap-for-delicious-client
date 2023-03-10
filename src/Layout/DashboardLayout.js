import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardNavbar from '../Pages/Shared/DashboardNavbar/DashboardNavbar';
import { useContext } from 'react';
import { AuthContext } from './../Context/AuthProvider/AuthProvider';
import useUser from './../Hooks/useUser';
import { RiMenuUnfoldLine } from 'react-icons/ri'

const DashboardLayout = () => {

    let theme = ""

    const retrievedObject = localStorage.getItem('theme');
    const themeObj = JSON.parse(retrievedObject);
    if (themeObj) {
        theme = themeObj.theme;
    }
    else {
        theme = "bumblebee";
    }

    const { user } = useContext(AuthContext);
    const { isAdmin, isSeller, isBuyer } = useUser(user?.email, user?.uid);


    return (
        <div data-theme={theme}>
            <DashboardNavbar></DashboardNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div data-theme={theme} className="drawer-content pt-7 px-8 h-full ">
                    <label htmlFor="dashboard-drawer" className="absolute top-30 z-20 right-7 drawer-button lg:hidden"><RiMenuUnfoldLine className='text-3xl font-bold text-yellow-400' /> </label>
                    <div data-theme={theme} className='mt-16'>
                        <Outlet></Outlet>
                    </div>

                </div>
                <div className="drawer-side drawer-container">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul data-theme={theme} className="menu p-4 w-64 text-base-content border-r">
                        {
                            isAdmin && <>
                                <li>
                                    <NavLink to='/dashboard/allrestaurant' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>All Restaurants</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allBuyers' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>All Buyers</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allOrders' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>All Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allReports' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>All Reported Restaurants</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/advertiseRequests' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>Advertisement Requests</NavLink>
                                </li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li>
                                    <NavLink to='/dashboard/restaurant' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>My restaurant</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/restaurantOrders' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>My restaurant orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addBlog' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>Add Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/sellerAdvertisement' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>Advertisement</NavLink>
                                </li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li>
                                    <NavLink to='/dashboard/myOrders' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>My Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/myProfile' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addBlog' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>Add Blog</NavLink>
                                </li>

                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;