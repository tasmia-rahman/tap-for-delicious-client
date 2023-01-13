import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div data-theme="cupcake">
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;