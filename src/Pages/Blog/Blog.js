import React, { useEffect, useState } from 'react';

const Blog = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json()
                .then(data => setBlogs(data)))
    }, []);


    return (
        <>
            {blogs.map(blog =>
                <div key={blog._id}
                    className="card my-10 mx-16 px-10 py-8">
                    <div className='flex justify-start items-center gap-5'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={blog.authorImg} alt="author" />
                            </div>
                        </div>
                        <h1 className='text-xl font-semibold'>{blog.author}</h1>
                    </div>

                    <div className='text-3xl font-bold my-8'>
                        {blog.title}
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-10'>
                        <img src={blog.img} alt="" className='max-h-[400px]' />
                        <div className='max-w-4xl'>
                            {blog.details}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;