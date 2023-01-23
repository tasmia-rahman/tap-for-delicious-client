import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavbar from '../Pages/Shared/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div data-theme="cupcake">
            <DashboardNavbar></DashboardNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pt-7 px-8">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side drawer-container">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link className='underline' to="/dashboard/addBlog">Add Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;