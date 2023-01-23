import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {

    const { toggleTheme } = useContext(ThemeContext)

    let theme = ""

    if (toggleTheme) {
        theme = "cupcake";
    }
    else {
        theme = "halloween";
    }
    return (
        <div data-theme={`${theme}`}>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;