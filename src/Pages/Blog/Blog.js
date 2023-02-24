import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BlogElement from './BlogElement';

const Blog = () => {



    const { data: blogs, isFetching, refetch } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/blogs')
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
                    refetch={refetch}>
                </BlogElement>
            )}
        </>
    );
};

export default Blog;