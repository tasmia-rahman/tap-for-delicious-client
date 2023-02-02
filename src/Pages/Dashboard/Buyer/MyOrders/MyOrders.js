import { useContext } from 'react';
import { AuthContext } from './../../../../Context/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import useUser from './../../../../Hooks/useUser';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const { buyer } = useUser(user?.email);
    console.log(buyer);

    const { data: myOrders = [] } = useQuery({
        queryKey: ['myOrders', buyer?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders/${buyer?.email}`);
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
                            <th>Items</th>
                            <th>Order Date</th>
                            <th>Address</th>
                            <th>Payment Type</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, i) => <tr key={order._id}>
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
                                <td>House #{order.house}, Road #{order.road}, {order.area}, {order.postalCode} </td>
                                <td className='capitalize'>{order.paymentType}</td>
                                <td>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;