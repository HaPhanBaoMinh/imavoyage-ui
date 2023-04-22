import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import { Pagination } from "swiper";

function SwiperDemo() {

    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.realIndex;
        const backgroundImages = [
            'url("https://avatars.githubusercontent.com/u/20301207?v=4")',
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgfuB5_E_V3WYUI4GZOAX8NvPWap58OneKmBU1zDG&s")',
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5lVe90zwIBa1Nj-1iVkMNM9N9G35DOx241MmPQpclY21ZmwwKWk0K6XLDFp963qb6ss&usqp=CAU")',
        ];
        const body = document.getElementById('img')
        console.log(backgroundImages[currentSlide]);
        body.style.backgroundImage = backgroundImages[currentSlide];
    };


    return (
        <div className='w-100 bg-info' style={{ height: '300px' }}>
            <div style={{ height: '200px' }} className='bg-info  py-5' id='img'>

            </div>
            <Swiper
                effect="fade"
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-100 bg-primary h-100"
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide>
                    <img src="slide1.jpg" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="slide2.jpg" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="slide3.jpg" alt="Slide 3" />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default SwiperDemo