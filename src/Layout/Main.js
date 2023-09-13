import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {

    //-------------- Theme ------------//
    const { toggleTheme } = useContext(ThemeContext)

    var theme = "bumblebee"

    if (toggleTheme) {
        const retrievedObject = localStorage.getItem('theme');
        const themeObj = JSON.parse(retrievedObject);
        if (themeObj) {
            theme = themeObj?.theme
        }
        else {
            theme = "bumblebee"
        }

    }
    else {
        const retrievedObject = localStorage.getItem('theme');
        const themeObj = JSON.parse(retrievedObject);
        theme = themeObj?.theme
    }

    //-------------- Theme End------------//


    return (
        <div data-theme={theme} className='scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-amber-300 scrollbar-track-gray-100'>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;