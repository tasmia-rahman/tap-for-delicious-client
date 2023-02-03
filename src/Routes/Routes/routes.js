import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import AddBlog from "../../Pages/Dashboard/Seller/AddBlog/AddBlog";
import Users from "../../Pages/Dashboard/Users/Users";
import AllCategory from "../../Pages/Home/AllCategory/AllCategory";
import Home from "../../Pages/Home/Home/Home";
import TopRestaurant from "../../Pages/Home/TopRestaurant/TopRestaurant";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Cart from "../../Pages/Order/Cart/Cart";
import RestaurantRegistration from "../../Pages/RestaurantRegistration/RestaurantRegistration";
import AvailableRestaurant from "../../Pages/Shared/TopFoodDetail/AvailableRestaurant/AvailableRestaurant";
import Signup from "../../Pages/SignUp/Signup";
import DashboardLayout from './../../Layout/DashboardLayout';
import Dashboard from './../../Pages/Dashboard/Dashboard/Dashboard';
import Order from './../../Pages/Order/Order/Order';
import MyOrders from './../../Pages/Dashboard/Buyer/MyOrders/MyOrders';
import UploadFood from "../../Pages/Dashboard/UploadFood/UploadFood";
import RestaurantDetails from "../../Pages/RestaurantDetails/RestaurantDetails";
import AllRestaurant from "../../Pages/Dashboard/AllRestaurant/AllRestaurant";
import RestaurantOrders from '../../Pages/Dashboard/Seller/RestaurantOrders/RestaurantOrders/RestaurantOrders';
import AllBuyers from './../../Pages/Dashboard/Admin/AllBuyers/AllBuyers';
import AllOrders from './../../Pages/Dashboard/Admin/AllOrders/AllOrders';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
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
                path: '/tofood',
                element: <AvailableRestaurant />
            },
            {
                path: '/allcategory/:id',
                element: <AllCategory></AllCategory>,
                loader: ({ params }) => fetch(`https://localhost:5000/services/${params.id}`)
            },
            {
                path: '/details/:email',
                element: <RestaurantDetails></RestaurantDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/restaurants/${params.email}`)
            },
            {
                path: '/restaurantReg',
                element: <RestaurantRegistration></RestaurantRegistration>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/resDetails/:email',
                element: <RestaurantDetails></RestaurantDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/restaurants/${params.email}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addBlog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/dashboard/users',
                element: <Users />
            },
            {
                path: '/dashboard/restaurant',
                element: <UploadFood />
            },
            {
                path: '/dashboard/allrestaurant',
                element: <AllRestaurant></AllRestaurant>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allOrders',
                element: <AllOrders></AllOrders>
            },
            {
                path: '/dashboard/restaurantOrders',
                element: <RestaurantOrders></RestaurantOrders>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders />
            }
        ]
    }
])