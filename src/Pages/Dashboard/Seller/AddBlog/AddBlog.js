import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {

    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddBlog = (event) => {
        event.preventDefault()

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
                        author: 'Safa Tazmin',
                        authorImg: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000'
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
                                navigate('/dashboard/myBlogs');
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