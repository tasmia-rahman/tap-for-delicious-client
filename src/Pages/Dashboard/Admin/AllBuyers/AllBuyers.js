import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import Loading from './../../../Shared/Loading/Loading';

const AllBuyers = () => {

    const { data: buyers = [], refetch, isFetching } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://tap-for-delicious-server.vercel.app/buyers');
            const data = await res.json();
            return data;
        }
    });

    const handleUserDelete = (id) => {
        fetch(`https://tap-for-delicious-server.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Deleted successfully');
                }
            })
    }

    if (isFetching) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold my-3">All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Join Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.displayName}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.joinDate.substring(0, 24)}</td>
                                <td><button onClick={() => handleUserDelete(buyer._id)} className='btn btn-sm bg-rose-600 text-white border-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;