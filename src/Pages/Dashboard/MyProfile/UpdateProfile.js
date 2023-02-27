import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState('');
    const imageHostKey = "3854192c81d6a82970830b8c614a4811";
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/user/${user.uid}`)

            .then(res => res.json())
            .then(data => setUserData(data))
    }
        , [user.uid])

    const uid = user.uid;

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const phone = form.phone.value;
        const road = form.road.value;
        const house = form.house.value;
        const area = form.area.value;
        const postal = form.postal.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        if (image) {
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((imgData) => {
                    if (imgData.success) {

                        console.log(imgData.data.url)
                        const user = {
                            displayName: displayName,
                            phone: phone,
                            road: road,
                            house,
                            area,
                            postal,
                            photoUrl: imgData.data.url,
                            uid: uid
                        }
                        fetch(`http://localhost:5000/user?uid=${uid}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                toast.success("Profile updated successfully")
                                navigate("/dashboard/myProfile")
                            })
                    }
                });
        }

        else {
            const user = {
                displayName: displayName,
                phone: phone,
                road: road,
                house,
                area,
                postal,
                photoUrl: userData.photoUrl,
                uid: uid
            }
            fetch(`http://localhost:5000/user?uid=${uid}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("data", data)
                    toast.success("Profile updated successfully")
                    navigate("/dashboard/myProfile")
                })
        }

    }


    return (
        <div className='pb-10'>
            <form onSubmit={handleOnSubmit} className='max-w-4xl mx-auto'>
                <div>
                    <h1 className='mb-3'>Upload profile picture</h1>
                    <input type="file" name='image' className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" defaultValue={userData?.displayName} className="input input-bordered" />
                </div>
                {userData.email &&
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" disabled defaultValue={userData?.email} className="input input-bordered" />
                    </div>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" name="phone" placeholder="Phone No." defaultValue={userData?.phone} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl mt-10">Address</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Road</span>
                    </label>
                    <input type="text" name="road" placeholder="Road No." defaultValue={userData.road} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">House</span>
                    </label>
                    <input type="text" name="house" placeholder="House No." defaultValue={userData.house} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Area</span>
                    </label>
                    <input type="text" name="area" placeholder="Area" defaultValue={userData.area} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Postal code</span>
                    </label>
                    <input type="text" name="postal" placeholder="Postal Code" defaultValue={userData.postal} className="input input-bordered" />
                </div>
                <div>
                    <button type='submit' className="btn max-w-sm mx-auto flex justify-center mt-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300">Update</button>
                </div>


            </form>
        </div>
    );
};

export default UpdateProfile;