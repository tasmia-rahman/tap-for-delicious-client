import React, { useEffect } from 'react';
import { useState } from 'react';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        fetch('https://tap-for-delicious-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <div>
            <h3 className="text-3xl font-semibold my-3">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Address</th>
                            <th>Payment Type</th>
                            <th>Payment Status</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>House #{order.house}, Road #{order.road}, {order.area}, {order.postalCode} </td>
                                <td className='capitalize'>{order.paymentType}</td>
                                <td>
                                    {
                                        order.paymentType === 'COD' ? 'Completed' : 'Pending'
                                    }
                                </td>
                                <td>{order.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;