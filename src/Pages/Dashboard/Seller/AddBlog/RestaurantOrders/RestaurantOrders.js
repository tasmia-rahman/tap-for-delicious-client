import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../../../../../Context/AuthProvider/AuthProvider';
import useUser from './../../../../../Hooks/useUser';
import { useQuery } from 'react-query';
import { useState } from 'react';

const RestaurantOrders = () => {
    const { user } = useContext(AuthContext);
    const { seller } = useUser(user?.email);

    const [orderStatus, setOrderStatus] = useState('order_placed');

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', seller?.restaurantName],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller_orders/${seller?.restaurantName}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h3 className="text-3xl font-semibold my-3">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Ordered Items</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Address</th>
                            <th>Note</th>
                            <th>Payment Type</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
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
                                <td>{order.date.substring(0, 24)}</td>
                                <td>{order.buyerName}</td>
                                <td>{order.buyerEmail}</td>
                                <td>House #{order.house}, Road #{order.road}, {order.area}, {order.postalCode} </td>
                                <td>{order.note}</td>
                                <td>{order.paymentType}</td>
                                <td>
                                    <select onchange={(event) => setOrderStatus(event.target.value)}>
                                        <option value="order_placed">Order Placed</option>
                                        <option value="preparing">Preparing</option>
                                        <option value="out_for_delivery">Out for delivery</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RestaurantOrders;