import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../../Context/AuthProvider/AuthProvider';
import useUser from '../../../../../Hooks/useUser';
import { useQuery } from 'react-query';
import OrderStatus from '../OrderStatus/OrderStatus';
import { toast } from 'react-hot-toast';

const RestaurantOrders = () => {
    const { user } = useContext(AuthContext);
    const { seller } = useUser(user?.email);

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', seller?.restaurantName],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller_orders/${seller?.restaurantName}`);
            const data = await res.json();
            return data;
        }
    });

    const handleOrderDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast('Deleted successfully');
                }
            })
    }

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
                            <th></th>
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
                                    <OrderStatus order={order} refetch={refetch}></OrderStatus>
                                </td>
                                <td><button onClick={() => handleOrderDelete(order._id)} className='btn btn-sm bg-rose-600 text-white border-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RestaurantOrders;