import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi'

const DashboardRestaurant = () => {

    const { user } = useContext(AuthContext)

    const email = user.email;
    const [restaurant, setRestaurant] = useState({})
    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/restaurant/${email}`)
            .then(res => res.json())
            .then(data => setRestaurant(data))
    }, [email])

    const { data: foods, isFetching } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            try {
                const res = await fetch(`https://tap-for-delicious-server.vercel.app/restaurants/${email}`)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })


    if (isFetching) {
        return <Loading></Loading>
    }

    const { title, description, location, img } = restaurant

    return (
        <div className='mb-30'>

            <Link to='/dashboard/uploadItems'>
                <p className="hidden md:inline-flex absolute z-90 top-30 right-8  items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group bg-yellow-300">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-red-600 duration-300 -translate-x-full bg-amber-400 group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="font-bold absolute flex items-center justify-center w-full h-full text-red-500 transition-all text-lg duration-300 transform group-hover:translate-x-full ease">Upload items</span>
                    <span class="relative invisible">Button Text</span>
                </p>
                <p className="md:hidden absolute z-90 top-30 right-8 inline-flex items-center justify-center overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group bg-yellow-300">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-red-600 duration-300 -translate-x-full bg-amber-400 group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="font-bold absolute flex items-center justify-center w-full h-full text-red-500 transition-all text-lg duration-300 transform group-hover:translate-x-full ease"><FiUpload /></span>
                    <span class="relative invisible">Button Text</span>
                </p>
            </Link>
            <div className='flex items-center justify-start gap-10'>
                <div className="avatar">
                    <div className="w-20 md:w-32 rounded">
                        <img src={img} alt="restaurant" />
                    </div>
                </div>
                <div>
                    <h1 className='text-center mx-auto py-3  font-extrabold text-transparent text-3xl md:text-6xl bg-clip-text bg-gradient-to-r from-red-700 via-orange-400 to-red-500'>{title}</h1>
                    <p className='text-xl flex items-center gap-1 mt-2'>
                        <HiLocationMarker className='text-red-500 animate-bounce' />   {location}
                    </p>
                </div>
            </div>

            <div>
                <h1 className='text-2xl mt-2'>{description}</h1>
            </div>


            <div className='mt-20'>
                <h1 className='text-xl my-10 text-red-600 font-medium'>All Available Foods</h1>
                <div className='grid -z-40 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        foods.map((food, i) =>
                            <div key={i} className="card -z-10 bg-base-100 shadow-xl mb-10">


                                <figure className="px-10 pt-10">
                                    <img src={food.image} alt="Foods" className="rounded-xl max-h-[240px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{food.name}</h2>
                                    <p className='lg:text-sm md:text-base '>{food.details}</p>

                                    <h1 className='font-semibold text-lg'>Price: <span className='text-green-600 font-bold'>{food.price}</span> ৳ </h1>
                                </div>
                                <div >


                                    {
                                        food.sugar ? <>
                                            <div className='flex gap-3 my-3 justify-center items-center'>
                                                <h1>Add-ons: </h1>
                                                <div className='flex flex-col items-start text-center'>
                                                    {food?.sugar?.map((item, index) =>
                                                        <div key={index}>
                                                            <ul>
                                                                <li>{item}</li>
                                                            </ul>
                                                        </div>)}
                                                </div>
                                            </div>

                                        </> : ""
                                    }
                                    {
                                        food.spice ? <>
                                            <div className='flex gap-3 my-3 justify-center items-center'>
                                                <h1>Add-ons: </h1>
                                                <div className='flex flex-col items-start text-center'>
                                                    {food?.spice?.map((item, index) =>
                                                        <div key={index}>
                                                            <ul>
                                                                <li>{item}</li>
                                                            </ul>
                                                        </div>)}
                                                </div>
                                            </div>

                                        </> : ""
                                    }
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default DashboardRestaurant;