import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import food1 from '../../../Assets/food1.jpg'
import food2 from '../../../Assets/food2.jpg'


const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={food1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={food2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={food1} alt="" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;