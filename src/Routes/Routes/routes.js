import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import TopRestaurant from "../../Pages/Home/TopRestaurant/TopRestaurant";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import RestaurantRegistration from "../../Pages/RestaurantRegistration/RestaurantRegistration";
import AvailableRestaurant from "../../Pages/Shared/TopFoodDetail/AvailableRestaurant/AvailableRestaurant";
import Signup from "../../Pages/Signup/Signup";
import Wishlist from "../../Pages/Wishlist/Wishlist";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
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
            element: <TopRestaurant />

        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '/details',
            element: <AvailableRestaurant />
        },
        {
            path: '/restaurantReg',
            element: <RestaurantRegistration></RestaurantRegistration>
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/wishlist',
            element: <Wishlist />
        }
        ]

    }
])