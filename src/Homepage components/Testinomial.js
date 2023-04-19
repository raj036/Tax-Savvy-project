import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Homepage.css";
import "./Testinomial.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Testinomial() {
    return (
        <div className="wrapper-slide">

            {/* first swiper starts from here */}

            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper__slide" >
                    <div className="slide-one-testinomial">
                        Slide one
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>

            {/* first swiper ends here */}


        </div>

    );
}

export default Testinomial;
