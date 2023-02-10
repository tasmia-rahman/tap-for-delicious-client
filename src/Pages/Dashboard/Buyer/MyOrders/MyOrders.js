import { useContext } from 'react';
import { AuthContext } from './../../../../Context/AuthProvider/AuthProvider';
import useUser from './../../../../Hooks/useUser';
import { useQuery } from 'react-query';
import Loading from './../../../Shared/Loading/Loading';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    let url;
    if ((user.email === null) && user.uid) {
        url = `https://tap-for-delicious-server.vercel.app/orders_with_uid/${user?.uid}`;
    }
    else {
        url = `https://tap-for-delicious-server.vercel.app/orders_with_email/${user?.email}`;
    }

    const { data: myOrders = [], isFetching } = useQuery({
        queryKey: ['myOrders', user?.uid, user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    if (isFetching) {
        return <Loading></Loading>
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
                            <th>Restaurant</th>
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
                                <td>{order.restaurantName}</td>
                                <td>{order.date.substring(0, 24)}</td>
                                <td>House #{order.house}, Road #{order.road}, {order.area}, {order.postalCode} </td>
                                <td className='capitalize'>{order.paymentType}</td>
                                <td>{order.orderStatus}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;