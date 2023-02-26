import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import AddBlog from "../../Pages/Dashboard/Seller/AddBlog/AddBlog";
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
import RestaurantDetails from "../../Pages/RestaurantDetails/RestaurantDetails";
import AllRestaurant from "../../Pages/Dashboard/AllRestaurant/AllRestaurant";
import RestaurantOrders from '../../Pages/Dashboard/Seller/RestaurantOrders/RestaurantOrders/RestaurantOrders';
import AllBuyers from './../../Pages/Dashboard/Admin/AllBuyers/AllBuyers';
import AllOrders from './../../Pages/Dashboard/Admin/AllOrders/AllOrders';
import DashboardRestaurant from "../../Pages/Dashboard/UploadFood/DashboardRestaurant";
import UploadItems from "../../Pages/Dashboard/UploadFood/UploadItems";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ReportedRestaurants from './../../Pages/Dashboard/Admin/ReportedRestaurants/ReportedRestaurants';
import Documentation from "../../Pages/Documentation/Documentation";
import AdvertiseRequests from './../../Pages/Dashboard/Admin/AdvertiseRequests/AdvertiseRequests';
import MyProfile from "../../Pages/Dashboard/MyProfile/MyProfile";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import Privacy from "../../Pages/Privacy/Privacy";
import FAQ from "../../Pages/FAQ/FAQ";
import UpdateProfile from "../../Pages/Dashboard/MyProfile/UpdateProfile";
import Advertisement from "../../Pages/Dashboard/Seller/Advertisement/Advertisement";
import TeamMembers from "../../Pages/Home/TeamMembers/TeamMembers";

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
                path: '/topfood',
                element: <AvailableRestaurant />
            },
            {
                path: '/search/:id',
                element: <TeamMembers />,
                loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: '/details/:email',
                element: <RestaurantDetails></RestaurantDetails>,
                loader: ({ params }) => fetch(`https://tap-for-delicious-server.vercel.app/restaurants/${params.email}`)
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
                loader: ({ params }) => fetch(`https://tap-for-delicious-server.vercel.app/restaurants/${params.email}`)
            },
            {
                path: '/documentation',
                element: <Documentation></Documentation>
            },
            {
                path: '/terms-and-conditions',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },
            {
                path: '/FAQ',
                element: <FAQ></FAQ>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/restaurant',
                element: <DashboardRestaurant />
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
                path: '/dashboard/allReports',
                element: <ReportedRestaurants></ReportedRestaurants>
            },
            {
                path: '/dashboard/advertiseRequests',
                element: <AdvertiseRequests></AdvertiseRequests>
            },
            {
                path: '/dashboard/restaurantOrders',
                element: <RestaurantOrders></RestaurantOrders>
            },
            {
                path: '/dashboard/addBlog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/dashboard/sellerAdvertisement',
                element: <Advertisement></Advertisement>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/uploadItems',
                element: <UploadItems />
            },
            {
                path: '/dashboard/myProfile',
                element: <MyProfile />
            },
            {
                path: '/dashboard/update_profile',
                element: <UpdateProfile />
            }

        ]
    }
])