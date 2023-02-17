import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../../../Context/AuthProvider/AuthProvider';
import useUser from './../../../../Hooks/useUser';

const AddBlog = () => {
    const { user } = useContext(AuthContext);
    const { seller } = useUser(user?.email);

    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

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
                        author: seller?.displayName,
                        authorImg: 'https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0='
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
        <div className='ml-6'>
            <h3 className="text-3xl font-semibold">Add Blog</h3>
            <form onSubmit={handleAddBlog}>
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
            </form>
        </div>
    );
};

export default AddBlog;