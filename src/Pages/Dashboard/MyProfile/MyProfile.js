import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaRegUser } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'


const MyProfile = () => {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState('');

    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }
        , [user.email])

    console.log("data", userData)
    console.log("user", user)

    return (
        <body class="bg-base-100 antialiased">
            <div class="container mx-auto my-20">
                <div>

                    <div class="bg-base-100 relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                        <div class="flex justify-center">
                            {userData.photoUrl ?
                                <img src={userData.photoUrl} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" /> :
                                <img src={user?.photoURL} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                            }
                        </div>

                        <div class="mt-16">
                            <h1 class="font-bold text-center text-3xl">{userData.displayName}</h1>
                            <p class="text-center text-sm font-medium mt-2">{userData.email}</p>

                            <div class="w-full">
                                <h3 class="font-semibold text-left my-2 px-6">Personal details</h3>
                                <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                    <a href="/" class="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                        <FaRegUser className='inline mr-3 text-lg text-yellow-300 font-bold' />
                                        <span class="text-sm block">User name : </span>
                                        <span class="ml-2 text-base block">{userData.displayName}</span>
                                    </a>

                                    <a href="/" class="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                        <FiMail className='inline mr-3 text-lg text-orange-500 font-bold' />
                                        <span class="text-sm block">User email : </span>
                                        <span class="ml-2 text-base block">{userData.email}</span>
                                    </a>

                                    {
                                        userData.address ?
                                            <a href="/" class="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                                <ImLocation2 className='inline mr-3 text-lg text-green-500 font-bold' />
                                                <span class="text-sm block">Address : </span>
                                                <span class="ml-2 text-base block">{userData?.address}</span>
                                            </a> :
                                            <a href="/" class="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                                <ImLocation2 className='inline mr-3 text-lg text-green-500 font-bold' />
                                                <span class="text-sm block">Address : </span>
                                                <span class="ml-2 text-base block text-red-500">No address set yet</span>
                                            </a>
                                    }



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </body>
    );
};

export default MyProfile;