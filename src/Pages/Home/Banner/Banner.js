import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import food3 from '../../../Assets/homepage-banner-img/9.png'
import food4 from '../../../Assets/homepage-banner-img/2.png'
import food5 from '../../../Assets/homepage-banner-img/3.png'
import food6 from '../../../Assets/homepage-banner-img/4.png'
import food7 from '../../../Assets/homepage-banner-img/5.png'
import food8 from '../../../Assets/homepage-banner-img/6.png'
import food1 from '../../../Assets/homepage-banner-img/8.png'
import food2 from '../../../Assets/homepage-banner-img/7.png'
import food9 from '../../../Assets/homepage-banner-img/1.png'


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
                <SwiperSlide><img src={food1} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food2} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food3} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food4} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food5} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food6} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food7} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food8} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
                <SwiperSlide><img src={food9} alt="banner" className='mx-auto lg:h-[900px] w-full' /></SwiperSlide>
            </Swiper>
        </>

    );
};

export default Banner;