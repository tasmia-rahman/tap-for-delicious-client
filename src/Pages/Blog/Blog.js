import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BlogElement from './BlogElement';

const Blog = () => {


    const [comment, setComment] = useState(false)
    const { data: blogs, isFetching, refetch } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            try {
                const res = await fetch('https://tap-for-delicious-server.vercel.app/blogs')
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

            {blogs?.map(blog =>
                <BlogElement key={blog._id}
                    blog={blog}
                    isFetching={isFetching}
                    refetch={refetch}
                    comment={comment}
                    setComment={setComment}>
                </BlogElement>
            )}
        </>
    );
};

export default Blog;