import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import food3 from '../../../Assets/homepage-banner-img/7.jpg'
import food4 from '../../../Assets/homepage-banner-img/2.jpg'
import food5 from '../../../Assets/homepage-banner-img/3.jpg'
import food6 from '../../../Assets/homepage-banner-img/4.jpg'
import food7 from '../../../Assets/homepage-banner-img/5.jpg'
import food8 from '../../../Assets/homepage-banner-img/6.jpg'
import food1 from '../../../Assets/homepage-banner-img/1.jpg'


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={food1} alt="banner" className='mx-auto' /></SwiperSlide>
                <SwiperSlide><img src={food3} alt="banner" className='mx-auto' /></SwiperSlide>
                <SwiperSlide><img src={food4} alt="banner" className='mx-auto' /></SwiperSlide>
                <SwiperSlide><img src={food5} alt="banner" className='mx-auto' /></SwiperSlide>
                <SwiperSlide><img src={food6} alt="banner" className='mx-auto' /></SwiperSlide>
                <SwiperSlide><img src={food7} alt="banner" className='mx-auto' /></SwiperSlide>
                <SwiperSlide><img src={food8} alt="banner" className='mx-auto' /></SwiperSlide>
            </Swiper>
        </>

    );
};

export default Banner;