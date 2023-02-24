import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BlogElement = ({ blog, isFetching, refetch }) => {

    const { user } = useContext(AuthContext)

    const likeArr = blog.like;
    const like = { uid: user?.uid };
    const found = likeArr.find(element => element.uid === like.uid);
    let react;
    const foundUid = found?.uid;
    const [comment, setComment] = useState(true);

    if (foundUid === user?.uid) {
        react = <button onClick={() => handleDislike(blog._id)}>
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                    <AiFillHeart className='text-3xl text-red-600' />
                    <div className='font-semibold'>{blog.like.length}</div>
                </div>
                <div>{ }</div>
            </div>
        </button>
    }
    else {
        react = <button onClick={() => handleLike(blog._id)}>
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                    <AiOutlineHeart className='text-3xl text-red-600' />
                    <div className='font-semibold'>{blog.like.length}</div>
                </div>
                <div>{ }</div>
            </div>
        </button>
    }


    const handleLike = (id) => {
        fetch(`http://localhost:5000/blog?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(like)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Post liked");
                refetch()
            })

    }

    const handleDislike = (id) => {
        const like = { uid: user.uid };

        fetch(`http://localhost:5000/blog_dlt?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(like)
        })
            .then(res => res.json())
            .then(data => {
                toast.error("Post disliked");
                refetch()
            })

    }

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.comment.value;
        const commenter = user?.displayName;
        const commenterPhoto = user?.photoURL;
        const id = form._id.value;

        const comment = {
            text,
            commenter,
            commenterPhoto,
            id
        }

        // fetch(`https://know-me-server.vercel.app/comment`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(comment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         toast.success("Comment posted successfully")
        //     })

        console.log(comment)

    }
    return (
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
            <div className='flex flex-col md:flex-row items-center gap-10 mb-5'>
                <img src={blog.img} alt="" className='max-h-[400px] max-w-[400px]' />
                <div className='max-w-4xl text-justify'>
                    {blog.details}
                </div>
            </div>
            {user && <>
                <hr />
                <div className='flex justify-evenly'>

                    {react}

                    <button><FaRegComment className='text-2xl' /></button>

                </div>
                {
                    comment ?
                        <div className='mx-4'>
                            <form onSubmit={handleOnSubmit} >
                                <input type="text" name='_id' className='hidden' defaultValue={blog._id} />
                                <textarea className='rounded-lg p-2 block' name="comment" id="" cols="40" rows="2" placeholder="Add a comment"></textarea>
                                <button type='submit' className=' mx-2 my-3 btn-primary btn btn-xs  bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300'>comment</button>
                            </form>
                        </div>
                        : ''
                }
            </>}
        </div>
    );
};

export default BlogElement;