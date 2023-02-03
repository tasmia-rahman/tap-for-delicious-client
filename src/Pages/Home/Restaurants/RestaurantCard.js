import React from 'react';
import { HiClock, HiLocationMarker, HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';


const RestaurantCard = ({ res }) => {
    return (
        <div>
            <div className="card w-full lg:max-w-96 h-[500px] mx-auto bg-base-100 shadow-xl">

                <figure><img style={{ height: "300px" }} src={res.img} alt="restaurants" className='hover:scale-110 duration-700' /></figure>
                <div className="card-body">

                    <div className="card-actions justify-between ">
                        <div>
                            <h2 className="card-title text-2xl font-bold">{res.title}</h2>
                        </div>
                        <div className="rating pb-6 mt-1">
                            <HiStar className='text-yellow-400'></HiStar>
                            <HiStar className='text-yellow-400'></HiStar>
                            <HiStar className='text-yellow-400'></HiStar>
                            <HiStar className='text-yellow-400'></HiStar>
                            <HiStar></HiStar>
                        </div>
                    </div>

                    <button className="btn btn-outline btn-warning">{res.type}</button>
                    <div className='mt-1'>
                        <div className='card-actions justify-end'>
                            <HiClock className='mt-1 text-green-600'></HiClock>
                            <p className='text-red-600'>{res.time}</p>

                        </div>



                        <div className='card-actions justify-end'>
                            <HiLocationMarker className='mt-1 text-red-800'></HiLocationMarker>
                            <p>{res.location} </p>
                        </div>
                    </div>

                    <div className="card-actions justify-end ">
                        <Link to={`/resDetails/${res?.email}`}>  <button className='btn max-w-sm mx-auto flex justify-center border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 '>more Details </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;