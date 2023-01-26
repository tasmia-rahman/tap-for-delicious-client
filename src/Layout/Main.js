import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {

    //-------------- Theme ------------//
    const { toggleTheme } = useContext(ThemeContext)

    var theme = "cupcake"

    if (toggleTheme) {
        const retrievedObject = localStorage.getItem('theme');
        const themeObj = JSON.parse(retrievedObject);
        if (themeObj) {
            theme = themeObj?.theme
        }
        else {
            theme = "cupcake"
        }

    }
    else {
        const retrievedObject = localStorage.getItem('theme');
        const themeObj = JSON.parse(retrievedObject);
        theme = themeObj?.theme
    }

    //-------------- Theme End------------//


    return (
        <div data-theme={theme}>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;