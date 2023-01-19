import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json()
                .then(data => setBlogs(data)))
    }, [])
    return (
        <div className='my-44 mx-10'>
            <div className='text-center'>
                <h6 className='font-bold pb-5'>Latest Blog</h6>
                <h3 className='font-semibold text-4xl pb-4'>Latest <span className='text-red-600'>Blogs</span> & Articles</h3>
            </div>
            <div className='grid justify-center px-5 gap-10 grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>

        </div>

    );
};

export default Blog;