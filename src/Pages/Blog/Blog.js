import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const Blog = () => {

    const { data: blogs, isFetching } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            try {
                const res = await fetch('https://tap-for-delicious-server.vercel.app/blogs',)
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
                        <img src={blog.img} alt="" className='max-h-[400px] max-w-[400px]' />
                        <div className='max-w-4xl text-justify'>
                            {blog.details}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;