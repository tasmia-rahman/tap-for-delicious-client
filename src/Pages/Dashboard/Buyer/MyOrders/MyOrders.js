import { useContext } from 'react';
import { AuthContext } from './../../../../Context/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import useUser from './../../../../Hooks/useUser';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const [, buyer] = useUser(user?.email);

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
                            <th>Address</th>
                            <th>Payment Type</th>
                            <th>Payment Status</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>House #{order.house}, Road #{order.road}, {order.area}, {order.postalCode} </td>
                                <td className='capitalize'>{order.paymentType}</td>
                                <td>
                                    {
                                        order.paymentType === 'COD' ? 'Completed' : 'Pending'
                                    }
                                </td>
                                <td>{order.date.substring(0, 24)}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;