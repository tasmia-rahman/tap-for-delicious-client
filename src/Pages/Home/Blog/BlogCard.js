import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const { id, img, price, title, description } = blog;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5 ml-20">
            <div>
            <img src={img} alt="service-img" />
            </div>
            {/* <PhotoProvider>
                <PhotoView src={img}>
                
                </PhotoView>
            </PhotoProvider>            */}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-lg'>{description.slice(0,100)}</p>
                
            </div>
        </div>
    );
};

export default BlogCard;