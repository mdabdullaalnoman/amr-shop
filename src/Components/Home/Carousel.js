import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {
    Autoplay, Pagination, Navigation, EffectCoverflow
} from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow]);

const Carousel = () => {
    const images = [
        'https://i.imgur.com/DqG0jbR.jpg',
        'https://i.imgur.com/oD1Lhlu.jpg',
        'https://i.imgur.com/8Ip9mOt.jpg',
        'https://i.imgur.com/67hR4pp.jpg',
        'https://i.imgur.com/NJ99UXD.jpg',
    ]
    return (
        <div className="carousel-warp">
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }}
                pagination={{"dynamicBullets": true}}
                slidesPerView={2}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    "delay": 5000,
                }}
            >

                {
                    images.map(src =>
                        <SwiperSlide className="slider-img">
                            <img src={src} alt="" />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Carousel;