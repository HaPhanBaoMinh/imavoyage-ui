import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import { Pagination } from "swiper";
import swiper01 from "/public/image/swiper_image_01.jpg"
import swiper02 from "/public/image/swiper_image_02.jpg"
import swiper03 from "/public/image/swiper_image_03.jpg"
import swiper04 from "/public/image/swiper_image_04.jpg"
import swiper05 from "/public/image/swiper_image_05.jpg"
import swiper06 from "/public/image/swiper_image_06.jpg"

function SwiperDemo() {

    useEffect(() => {
        const body = document.getElementById('swiper-background')
        body.style.backgroundImage = `url(${swiper01.src})`
    }, [])


    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.realIndex;
        const backgroundImages = [
            `url(${swiper01.src})`,
            `url(${swiper02.src})`,
            `url(${swiper03.src})`,
            `url(${swiper04.src})`,
            `url(${swiper05.src})`,
            `url(${swiper06.src})`,
        ];
        const body = document.getElementById('swiper-background')
        body.style.backgroundImage = backgroundImages[currentSlide];
    };


    return (
        <div className='w-100 position-relative d-flex justify-content-center' style={{ height: '380px' }}>
            {/* Find box */}
            <div className='w-75 h-25 position-absolute z-2 bottom-15'>
                <div className='w-100 bg-white py-3 rounded text-center'>
                    Find Box
                </div>
            </div>

            {/* Swiper */}
            <Swiper
                effect="fade"
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-100 bg-primary h-100"
                id='swiper-background'
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide className='d-flex align-items-center justify-content-center'>
                    <div className="text-white w-75 h-50 pt-3">
                        <p className='text-center fs-1 fw-500 m-0 text-uppercase'>Voyageurs en famille</p>
                        <p className='spectral fst-italic text-center h4 fw-light'>
                            Rythme, services, adresses : nos idées dédiées
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-flex align-items-center justify-content-center'>
                    <div className="text-white w-75 h-50 pt-3">
                        <p className='text-center fs-1 fw-500 m-0 text-uppercase'>Voyageurs en famille</p>
                        <p className='spectral fst-italic text-center h4 fw-light'>
                            Rythme, services, adresses : nos idées dédiées
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}

export default SwiperDemo