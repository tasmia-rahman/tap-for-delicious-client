import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import AllCategory from "../../Pages/Home/AllCategory/AllCategory";
import Home from "../../Pages/Home/Home/Home";
import TopRestaurant from "../../Pages/Home/TopRestaurant/TopRestaurant";
import Login from "../../Pages/Login/Login";
import AvailableRestaurant from "../../Pages/Shared/TopFoodDetail/AvailableRestaurant/AvailableRestaurant";
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
        },
        {
            path: '/toprestaurant',
            element: <TopRestaurant></TopRestaurant>
            
        },
        {
            path: '/allcategory/:id',
            element:<AllCategory></AllCategory>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/details',

            element: <AvailableRestaurant></AvailableRestaurant>
        }
        ]

    }
])