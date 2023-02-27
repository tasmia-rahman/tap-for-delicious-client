import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const ReportedRestaurants = () => {

    const { data: reports = [], refetch, isFetching } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://tap-for-delicious-server.vercel.app/reports');
            const data = await res.json();
            return data;
        }
    });

    const handleReportDelete = (id) => {
        fetch(`https://tap-for-delicious-server.vercel.app/reports/${id}`, {
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
            <h3 className="text-3xl font-semibold my-3">All Reported Restaurants</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Reported Restaurant</th>
                            <th>Objection</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports?.map((report, i) => <tr key={report._id}>
                                <th>{i + 1}</th>
                                <td>{report.displayName}</td>
                                <td>{report.email}</td>
                                <td>{report.date.substring(0, 24)}</td>
                                <td>{report.restaurantName}</td>
                                <td>{report.objection}</td>
                                <td><button onClick={() => handleReportDelete(report._id)} className='btn btn-sm bg-rose-600 text-white border-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedRestaurants;