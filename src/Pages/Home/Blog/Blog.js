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
            <div className='mx-10'>
                <div className='text-center mb-4'>
                    <p className="text-6xl font-bold text-yellow-600">Our Latest Blogs</p>
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