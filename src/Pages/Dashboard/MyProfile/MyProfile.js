import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaRegUser } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'
import { AiTwotonePhone } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const MyProfile = () => {

    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/user/${user.uid}`)

            .then(res => res.json())
            .then(data => setUserData(data))
    }
        , [user?.uid])

    console.log(userData)


    return (
        <body className="bg-base-100 antialiased">
            <div className="container mx-auto my-20">
                <div>

                    <div className="bg-base-100 relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                        <div className="flex justify-center">
                            {userData.photoUrl ?
                                <img src={userData.photoUrl} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" /> :
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskE_K0tR332USgjzlAjZNS53Y84Nl9O1wMg&usqp=CAU" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                            }
                        </div>

                        <div className="mt-16">
                            <h1 className="font-bold text-center text-3xl">{userData.displayName}</h1>
                            <p className="text-center text-sm font-medium mt-2">{userData.email}</p>

                            <div className="w-full">
                                <h3 className="font-semibold text-left my-2 px-6">Personal details</h3>
                                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                    <a href="/" className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                        <FaRegUser className='inline mr-3 text-lg text-yellow-300 font-bold' />
                                        <span className="text-sm block">User name : </span>
                                        <span className="ml-2 text-base block">{userData.displayName}</span>
                                    </a>

                                    <a href="/" className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                        <FiMail className='inline mr-3 text-lg text-orange-500 font-bold' />
                                        <span className="text-sm block">User email : </span>
                                        <span className="ml-2 text-base block">{userData.email}</span>
                                    </a>

                                    {
                                        userData.road ?
                                            <a href="/" className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                                <ImLocation2 className='inline mr-3 text-lg text-green-500 font-bold' />
                                                <span className="text-sm block">Address : </span>
                                                <span className="ml-2 text-sm block">Road: {userData.road}, House: {userData.house}, Area: {userData.area}, Postal Code: {userData.postal}</span>
                                            </a> :
                                            <a href="/" className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                                <ImLocation2 className='inline mr-3 text-lg text-green-500 font-bold' />
                                                <span className="text-sm block">Address : </span>
                                                <span className="ml-2 text-base block text-red-500">No address set yet</span>
                                            </a>
                                    }
                                    {
                                        userData.phone ?
                                            <a href="/" className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                                <AiTwotonePhone className='inline mr-3 text-lg text-purple-500 font-bold' />
                                                <span className="text-sm block">Contact no. : </span>
                                                <span className="ml-2 text-base block">{userData.phone}</span>
                                            </a> :
                                            <a href="/" className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                                <AiTwotonePhone className='inline mr-3 text-lg text-purple-500 font-bold' />
                                                <span className="text-sm block">Contact no. : </span>
                                                <span className="ml-2 text-base block text-red-500">No contact no. set yet</span>
                                            </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/dashboard/update_profile">
                        <p className="btn flex justify-center mx-auto my-10 w-72 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300">Update profile</p>
                    </Link>
                </div>
            </div>
        </body>
    );
};

export default MyProfile;