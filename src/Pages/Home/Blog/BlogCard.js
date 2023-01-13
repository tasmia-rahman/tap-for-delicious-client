import React from 'react';


const BlogCard = ({ blog }) => {
    const { id, img, title, description } = blog;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div>
                <img src={img} alt="service-img" className='hover:scale-110' />
            </div>
            {/* <PhotoProvider>
                <PhotoView src={img}>
                
                </PhotoView>
            </PhotoProvider>            */}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-lg'>{description.slice(0, 100)}</p>

            </div>
        </div>
    );
};

export default BlogCard;