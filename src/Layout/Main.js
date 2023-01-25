import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {

    const { toggleTheme } = useContext(ThemeContext)

    let theme = "cupcake"

    // if (toggleTheme) {
    //     const retrievedObject = localStorage.getItem('theme');
    //     const themeObj = JSON.parse(retrievedObject);
    //     theme = themeObj.theme
    // }
    // else {
    //     const retrievedObject = localStorage.getItem('theme');
    //     const themeObj = JSON.parse(retrievedObject);
    //     theme = themeObj.theme
    // }




    return (
        <div data-theme={theme}>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;