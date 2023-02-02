import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardNavbar from '../Pages/Shared/DashboardNavbar/DashboardNavbar';
import { useContext } from 'react';
import { AuthContext } from './../Context/AuthProvider/AuthProvider';
import useUser from './../Hooks/useUser';

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
    const { isAdmin, isSeller, isBuyer } = useUser(user?.email);


    return (
        <div data-theme={theme}>
            <DashboardNavbar></DashboardNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pt-7 px-8 h-full">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side drawer-container">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul data-theme={theme} className="menu p-4 w-64 text-base-content border-r">
                        {
                            isAdmin && <>
                                <li>
                                    <NavLink to='/dashboard/allrestaurant' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>All Restaurant</NavLink>
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
                                    }>My orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>My Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addBlog' className={({ isActive }) =>
                                        isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                                    }>Add Blog</NavLink>
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
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;