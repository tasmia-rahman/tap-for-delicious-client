import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div data-theme="cupcake">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;