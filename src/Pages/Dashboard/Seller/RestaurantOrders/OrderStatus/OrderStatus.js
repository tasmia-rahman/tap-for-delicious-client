import React from 'react';
import { toast } from 'react-hot-toast';

const OrderStatus = ({ order, refetch }) => {
    const { _id, orderStatus } = order;

    // const handleOrderStatus = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const orderStatus = form.orderStatus.value;

    //     fetch(`https://tap-for-delicious-server.vercel.app/seller_orders/${_id}`, {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ orderStatus })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success('Order status changed successfully');
    //             refetch();
    //         })
    //         .catch(err => console.error(err))
    // }

    const handleOrderStatus = (orderStatus) => {
        fetch(`https://tap-for-delicious-server.vercel.app/order_status/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderStatus })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order status changed successfully');
                refetch();
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex items-center'>
            {/* <form onSubmit={handleOrderStatus}>
                <div>
                    <select name="orderStatus" defaultValue={orderStatus}>
                        <option value="Order Placed">Order Placed</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Out for delivery">Out for delivery</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className='ml-2 mt-2'>
                    <button className='btn btn-warning btn-sm' type='submit'>Submit</button>
                </div>
            </form> */}
            <p className='mr-2'>Select:</p>
            <select className='border border-amber-400' name="orderStatus" defaultValue={orderStatus} onChange={(e) => handleOrderStatus(e.target.value)}>
                <option value="Order Placed">Order Placed</option>
                <option value="Preparing">Preparing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
};

export default OrderStatus;