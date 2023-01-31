import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
const Users = () => {

    const { data: users, isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                const res = await fetch('https://tap-for-delicious-server.vercel.app/users',)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })


    if (isFetching) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold my-5 mx-4'>Users</h1>
            <div className="overflow-x-auto my-8 mx-4">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='hover'>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users &&
                            users?.map((user, i) => <tr key={user._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>
                                    {user?.photoURL ?
                                        <div className="avatar flex justify-center">
                                            <div className="w-16 rounded-full">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </div> :
                                        <div className='flex justify-center'>
                                            <h1 className='text-4xl my-3'><FaRegUser></FaRegUser></h1>
                                        </div>}
                                </td>
                                <td>
                                    {user.displayName}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;