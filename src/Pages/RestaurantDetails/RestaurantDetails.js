import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiLocationMarker } from "react-icons/hi";
import { toast } from "react-hot-toast";
import AllCategoryDetails from "../Home/AllCategory/AllCategoryDetails";
import AddToCartModal from '../Home/AllCategory/AddToCartModal/AddToCartModal';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useUser from './../../Hooks/useUser';
import ReportModal from './ReportModal/ReportModal';
import { useQuery } from 'react-query';

const RestaurantDetails = () => {

    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (user?.uid) {
            fetch(`https://tap-for-delicious-server.vercel.app/user/${user?.uid}`)

                .then(res => res.json())
                .then(data => setUserData(data))
        }

    }
        , [user?.uid])


    const { isBuyer, isSeller, isAdmin, buyer } = useUser(user?.email, user?.uid);

    const foods = useLoaderData();

    const resEmail = foods[0]?.resEmail;

    const [foodItem, setFoodItem] = useState({});
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleCartModal = item => {
        if (isBuyer) {
            setFoodItem(item);
        }
        else {
            if (isAdmin || isSeller) {
                toast.error('You can not add item to cart!');
            }
            else {
                toast.error('You must log in first!');
            }
        }
    }

    const handleIncreaseQuantity = () => {
        setItemQuantity(itemQuantity + 1);
    }

    const handleDecreaseQuantity = () => {
        if (itemQuantity === 1) {
            return;
        }
        setItemQuantity(itemQuantity - 1);
    }

    const [restaurant, setRestaurant] = useState({})
    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/restaurant/${resEmail}`)
            .then(res => res.json())

            .then(data => setRestaurant(data))
    }, [resEmail])
    console.log(restaurant?.title);

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertises', restaurant?.title],
        queryFn: async () => {
            const res = await fetch(`https://tap-for-delicious-server.vercel.app/advertises/${restaurant?.title}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(!advertises[0]?.restaurantName);

    const handlePlaceReview = event => {

        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        // const title = `${form.restaurant.value}`;
        // const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            // service: _id,
            restaurantName: restaurant.title,
            customer: name,
            // email,
            photoUrl: userData?.photoUrl,
            message,
        }


        fetch('https://tap-for-delicious-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review successfully');
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }


    // map......................
    const restaurantmap = restaurant.maplink;

    const mapDhaka = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.1325209085!2d90.14865174142844!3d23.78071488474704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1679241248671!5m2!1sen!2sbd";

    const mirpurMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328095156281!2d90.36650911429808!3d23.806929392532837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1679241695298!5m2!1sen!2sbd";

    const rampuraMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.488155808407!2d90.41241356941451!3d23.760853942274473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8783ab9882f%3A0x50f429f46d937f3c!2sRampura%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679243466024!5m2!1sen!2sbd";

    const uttoraMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.92013258742!2d90.360778338187!3d23.876671852776663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679243512292!5m2!1sen!2sbd";
    const bananiMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.678639279695!2d90.39695081942557!3d23.794774936885158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679243549372!5m2!1sen!2sbd";

    const mohakhaliMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.462702542538!2d90.38780909855407!3d23.778894815876406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1679243591312!5m2!1sen!2sbd";

    const map = (restaurantmap) => {

        if (restaurantmap === "mirpurMap") {
            const map = mirpurMap;
            return map;
        }
        else if (restaurantmap === "rampuraMap") {
            const map = rampuraMap;
            return map;
        }
        else if (restaurantmap === "uttoraMap") {
            const map = uttoraMap;
            return map;
        }
        else if (restaurantmap === "bananiMap") {
            const map = bananiMap;
            return map;
        }
        else if (restaurantmap === "mohakhaliMap") {
            const map = mohakhaliMap;
            return map;
        }
        else {
            const map = mapDhaka;
            return map;
        }
    };

    // map..................

    return (
        <div>
            <div className='card-bordered'>
                <div
                    className="bg-fixed md:bg-auto bg-cover bg-center  py-64"
                    style={{ backgroundImage: `url(${restaurant.img})` }}
                >
                </div>
                <div className='flex lg:ml-24'>
                    {/* logo for restaurant */}
                    <div className="ml-4 hidden lg:flex">
                        <img src={restaurant.img} className="rounded-t-full" style={{ height: "120px", width: "110px", marginTop: "-20px", border: "2px solid #fff", borderBottom: "0" }} alt='' />
                    </div>
                    <div className=''>
                        <h1 className="text-3xl font-bold mx-5 mt-3">{restaurant.title}</h1>
                        <div className='flex justify-start ml-3'>
                            <HiLocationMarker className='mt-1 text-2xl text-red-800'></HiLocationMarker>
                            <p className='text-2xl text-slate-500 mb-3'>{restaurant.location} </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-16'>
                <div className='lg:w-80 lg:ml-12 mx-3'>
                    <div className=' rounded-lg card-bordered p-4'>
                        <h1 className='text-2xl font-bold'>All Details</h1>
                        <div className='flex gap-1 mb-3'>
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "50px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                        </div>
                        <div className='flex gap-2'>
                            <img className='h-[30px]' src='https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/menu-cc.png' alt='' />
                            <p className='text-xl'>Total foods : {foods?.length}</p>
                        </div>
                    </div>
                    <div className='card-bordered mt-2 rounded-lg'>
                        <iframe src={map(restaurantmap)} style={{ width: "100%", height: "320px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    {
                        advertises[0]?.restaurantName === restaurant?.title && advertises[0]?.isAdvertised === true &&
                        <div className='mt-2 rounded-lg card-bordered py-3'>
                            <h1 className="text-2xl font-bold mb-1 lg:ml-3 ml-8">Advertisement</h1>
                            <div className='flex justify-center mt-2 mb-4'>
                                <img src={advertises[0]?.advertiseImg} alt="" className='shadow-lg' />
                            </div>
                        </div>
                    }
                </div>

                <div class="lg:ml-[-40px] lg:w-[515px] mx-3 mt-5 lg:mt-0"  >
                    <div className=' rounded-t-lg card-bordered px-8 pt-4'>
                        <h1 className='text-2xl font-bold'>Available items</h1>
                        <div className='flex gap-1 mb-3 mt-1'>
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "50px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                        </div>
                    </div>
                    <div>

                        {foods?.map((item, i) => (
                            <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
                        ))}
                    </div>
                    {
                        isBuyer && <AddToCartModal foodItem={foodItem} itemQuantity={itemQuantity} handleIncreaseQuantity={handleIncreaseQuantity}> handleDecreaseQuantity={handleDecreaseQuantity}</AddToCartModal>
                    }
                </div>
                <div className='lg:w-80 lg:ml-16 mx-3 lg:mt-0 mt-5'>
                    {/* <h2>Right side</h2> */}
                    {/* review */}
                    <div className='rounded-lg card-bordered px-8 pt-4'>
                        <h1 className='text-2xl font-bold'>Review</h1>
                        <div className='flex gap-1 mb-3 mt-1'>
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "50px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                        </div>
                    </div>
                    {user ?
                        <form onSubmit={handlePlaceReview} className="mt-5">

                            <div className="mt-5">

                                <div className="mx-auto ">

                                    <div className="card  card-bordered">
                                        <div className="card-body">
                                            <div className="form-control">
                                                <input name='name' type="text" placeholder=" Name" className="input input-bordered" />
                                            </div>

                                            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                                            <div className="form-control mt-6">
                                                <button className="btn max-w-sm mx-auto flex justify-center  border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300">Add your review </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> :
                        <h1 className='mt-2 ml-1'>
                            You need to <span className='text-yellow-400 font-semibold'><Link to='/login'>Login</Link></span> to post review
                        </h1>}
                    {user ?
                        <div className='mt-10  lg:ml-14 ml-16 mb-10 flex items-center'>
                            <label htmlFor="report-modal" className='py-2 px-6 border-2 bg-red-600 border-red-600 text-white rounded-2xl hover:bg-base-100 hover:text-red-500 hover:border-red-400 text shadow-sm shadow-red-400 hover:shadow-lg hover:shadow-red-400 duration-300'
                            >
                                Report This Restaurant
                            </label>
                        </div> : ""}
                </div>
            </div>
            {
                isBuyer && <ReportModal buyer={buyer} restaurant={restaurant}></ReportModal>
            }
        </div>

    );
};

export default RestaurantDetails;