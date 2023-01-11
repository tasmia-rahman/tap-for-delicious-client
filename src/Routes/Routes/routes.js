import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        }
        ]

    }
])