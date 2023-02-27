import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import Loading from './../../../Shared/Loading/Loading';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AdvertiseRequests = () => {
    const { data: advertises = [], refetch, isFetching } = useQuery({
        queryKey: ['advertises'],
        queryFn: async () => {
            const res = await fetch('https://tap-for-delicious-server.vercel.app/advertises');
            const data = await res.json();
            return data;
        }
    });

    const handleApproveAdvertise = (id) => {
        fetch(`https://tap-for-delicious-server.vercel.app/advertises/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertisement request approved');
                    refetch();
                }
            })
            .catch(err => console.error(err))
    }

    const handleDeleteAdvertise = (id) => {
        fetch(`https://tap-for-delicious-server.vercel.app/advertises/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted successfully');
                    refetch();
                }
            })
    }

    if (isFetching) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold my-3">Advertisement Requests</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Restaurant Name</th>
                            <th>Date</th>
                            <th>Advertisement Image</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            advertises?.map((advertise, i) => <tr key={advertise._id}>
                                <th>{i + 1}</th>
                                <td>{advertise.sellerName}</td>
                                <td>{advertise.sellerEmail}</td>
                                <td>{advertise.restaurantName}</td>
                                <td>{advertise.date.substring(0, 24)}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <PhotoProvider>
                                                <PhotoView src={advertise.advertiseImg}>
                                                    <img src={advertise.advertiseImg} alt='' />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {
                                        advertise?.isAdvertised === true ?
                                            <button className='btn btn-sm bg-sky-600 text-white border-none' disabled>Approved</button>
                                            :
                                            <button onClick={() => handleApproveAdvertise(advertise._id)} className='btn btn-sm bg-teal-600 text-white border-none'>Approve</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDeleteAdvertise(advertise._id)} className='btn btn-sm bg-rose-600 text-white border-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdvertiseRequests;