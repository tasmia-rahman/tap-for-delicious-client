import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import DashboardNavbar from '../Pages/Shared/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {

    // const { toggleTheme } = useContext(ThemeContext)

    let theme = ""

    // if (toggleTheme) {
    //     theme = "bumblebee";
    // }
    // else {
    //     theme = "halloween";
    // }

    // console.log(theme);

    const retrievedObject = localStorage.getItem('theme');
    const themeObj = JSON.parse(retrievedObject);
    if (themeObj) {
        theme = themeObj.theme;
    }
    else {
        theme = "bumblebee";
    }



    return (
        <div data-theme={theme}>
            <DashboardNavbar></DashboardNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pt-7 px-8">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side drawer-container">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul data-theme={theme} className="menu p-4 w-80 text-base-content border-r">
                        <li>
                            <NavLink to='/dashboard/addBlog' className={({ isActive }) =>
                                isActive ? "text-lg text-red-600 hover:text-amber-500  font-bold" : "text-lg font-medium text-amber-300 hover:text-amber-500 border-0"
                            }>Add Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;