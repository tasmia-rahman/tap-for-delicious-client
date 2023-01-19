import React from 'react';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog }) => {
    const { img, title, description } = blog;
    return (
        <div className="card card-compact w-full lg:max-w-96 bg-base-100 shadow-xl">
            <div>
                <img src={img} alt="service-img" className='hover:scale-105 duration-700' />
            </div>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{title}</h2>
                <p className='text-lg'>{description.slice(0, 100)}....
                    <Link to='/blog'>
                        <span className='font-semibold hover:text-yellow-400 cursor-pointer ml-2'>read more</span>
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default BlogCard;