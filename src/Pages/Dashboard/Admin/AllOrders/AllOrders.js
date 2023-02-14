import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../../../Shared/Loading/Loading';

const AllOrders = () => {

    const { data: allOrders = [], isFetching } = useQuery({
        queryKey: ['allOrders'],
        queryFn: async () => {
            const res = await fetch(`https://tap-for-delicious-server.vercel.app/all_orders`);
            const data = await res.json();
            return data;
        }
    });

    if (isFetching) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold my-3">All Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Ordered Items</th>
                            <th>Restaurant</th>
                            <th>Payment Amount</th>
                            <th>Order Date</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.buyerEmail}</td>
                                <td>
                                    {
                                        order.cartItems.map(item => <div key={item._id} className='flex items-center py-4'>
                                            <div className="avatar mr-3">
                                                <div className="w-16 rounded">
                                                    <img src={item.image} alt='' />
                                                </div>
                                            </div>
                                            <div>{item.name} - {item.quantity}</div>
                                        </div>)
                                    }
                                </td>
                                <td>{order.restaurantName}</td>
                                <td>{order.payable}</td>
                                <td>{order.date.substring(0, 24)}</td>
                                <td>{order.orderStatus}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;