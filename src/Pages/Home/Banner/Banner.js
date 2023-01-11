import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import food3 from '../../../Assets/Breakfast2.jpg'
import food4 from '../../../Assets/Dinner.jpg'
import food5 from '../../../Assets/Festive.jpg'
import food6 from '../../../Assets/Festive2.jpg'
import food7 from '../../../Assets/Birthday.jpg'
import food8 from '../../../Assets/Breakfast.jpg'
import food1 from '../../../Assets/Just one tap.png'


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
                    <SwiperSlide><img src={food1} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={food3} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={food4} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={food5} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={food6} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={food7} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={food8} alt="banner" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;