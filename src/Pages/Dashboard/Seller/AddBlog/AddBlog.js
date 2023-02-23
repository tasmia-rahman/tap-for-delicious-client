import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../../../Context/AuthProvider/AuthProvider';
import useUser from './../../../../Hooks/useUser';

const AddBlog = () => {
    const { user } = useContext(AuthContext);
    const { seller } = useUser(user?.email);
    const [userData, setUserData] = useState({});
    const imageHostKey = "3854192c81d6a82970830b8c614a4811";

    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/user/${user?.uid}`)

            .then(res => res.json())
            .then(data => setUserData(data))
    }
        , [user.uid])



    const navigate = useNavigate();
    // const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddBlog = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const details = form.details.value;
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const blog = {
                        img: imgData.data.url,
                        title,
                        details,
                        author: userData.displayName,
                        authorImg: userData.photoUrl
                    }

                    // save blog information to the database
                    fetch('https://tap-for-delicious-server.vercel.app/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('Blog added successfully.');
                                navigate('/blog');
                            }
                        })
                }
            })
    }

    return (
        <div className='ml-2'>
            <h3 className="text-3xl font-semibold mx-6">Add Blog</h3>
            <div className=' bg-base-200 mx-6 my-3 py-2 rounded-lg'>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full mx-4 my-4">
                            <img src={userData.photoUrl} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>{userData.displayName}</h1>
                    </div>
                </div>
                <form onSubmit={handleAddBlog}>
                    <div className="form-control w-full max-w-xs mt-4">
                        <label className="label mx-4" htmlFor='title'>
                            Add Blog Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Type Blog Title"
                            className="input input-bordered input-warning mx-4 mb-2 max-w-xs"
                            required
                        />
                    </div>
                    <div className='flex flex-col md:flex-col'>
                        <div className=''>
                            <div className='mx-4'>
                                <textarea name="details" className='textarea textarea-bordered textarea-lg w-full max-w-lg' id="" cols="" rows="3" placeholder="What's on your mind?"></textarea>
                            </div>
                        </div>
                        <div className='mx-4'>
                            <h1>Add photos</h1>
                            <input type="file" name="image" className="file-input file-input-bordered file-input-primary  max-w-xs" />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='btn max-w-sm mx-auto ml-4 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 my-2'>POST</button>
                    </div>
                </form>

            </div >

            {/* <form onSubmit={handleAddBlog}>
                <div className="form-control w-full max-w-xs mt-4">
                    <label className="label" htmlFor='title'>
                        Add Blog Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Type Blog Title"
                        className="input input-bordered input-warning w-full max-w-xs"
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs mt-2">
                    <label className="label" htmlFor='details'>
                        Add Blog Details
                    </label>
                    <textarea
                        name="details"
                        placeholder="Type Blog Details"
                        className="input input-bordered input-warning w-full max-w-xs h-28"
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs mt-2">
                    <label className="label" htmlFor='image'>
                        Choose Blog Image
                    </label>
                    <input type="file"
                        name="image"
                        className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                        required />
                </div>

                <button className="btn btn-warning w-full max-w-xs block mt-6" type="submit">Submit</button>
            </form> */}
        </div>
    );
};

export default AddBlog;