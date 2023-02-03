import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { HiLocationMarker } from 'react-icons/hi'

const UploadFood = () => {

    const { user } = useContext(AuthContext)

    const email = "burger@hunter.com";
    const [restaurant, setRestaurant] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/restaurant/${email}`)
            .then(res => res.json())
            .then(data => setRestaurant(data))
    }, [email])

    const { data: foods, isFetching } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/restaurants/${email}`)
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

    console.log("foods", foods)

    const { title, description, location, time, type, img } = restaurant

    console.log("res", restaurant);
    return (
        <div className='mb-30'>
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
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        foods.map((food, i) =>
                            <div key={i} className="card bg-base-100 shadow-xl mb-10">


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

export default UploadFood;