import React from 'react';
import { BsShop } from 'react-icons/bs';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const AllRestaurant = () => {
    const { data: restaurants, isFetching, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                const res = await fetch('https://tap-for-delicious-server.vercel.app/restaurants',)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })

    const handleResDelete = (email) => {
        fetch(`https://tap-for-delicious-server.vercel.app/restaurant/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Deleted successfully');

                    // Delete all food items of this restaurant
                    fetch(`https://tap-for-delicious-server.vercel.app/foods/${email}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {

                        })
                }
            })
    }

    if (isFetching) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold my-5 mx-4'>All Restaurant</h1>
            <div className="overflow-x-auto my-8 mx-4">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='hover'>
                            <th></th>
                            <th></th>
                            <th>Restaurant Name</th>
                            <th>Email</th>
                            <th>Time & Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            restaurants &&
                            restaurants?.map((restaurant, i) => <tr key={restaurant._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>
                                    {restaurant?.img ?
                                        <div className="avatar flex justify-center">
                                            <div className="w-16 rounded-full">
                                                <img src={restaurant?.img} alt="" />
                                            </div>
                                        </div> :
                                        <div className='flex justify-center'>
                                            <h1 className='text-4xl my-3'><BsShop></BsShop></h1>
                                        </div>}
                                </td>
                                <td>
                                    {restaurant.title}
                                </td>
                                <td>
                                    {restaurant.email}
                                </td>
                                <td>
                                    {restaurant.time} <br />
                                    {restaurant.location}
                                </td>
                                <td><button onClick={() => handleResDelete(restaurant.email)} className='btn btn-sm bg-rose-600 text-white border-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllRestaurant;