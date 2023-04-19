import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";



import Calculator from './Calculator';
import './Homepage.css';
import IndividualITR from './IndividualITR';
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>

            <Calculator />
            <div className='wraper-plan'>

                {/* form page starts from here */}

                {/* from here plan page starts  */}

                <div className="wrap-card">

                    <div className="first-card-plan-one">
                        <h2 className="plan">Plan A (Price)</h2>
                        <div className="buyn">
                            <Link href="#" className="buy-nw">Buy Now</Link>
                        </div>
                        <div>
                            <Link href="#" className="know-me">Know More</Link>
                        </div>
                    </div>

                    <div className="first-card-plan-two">
                        <h2 className="plan">Plan B (Price)</h2>
                        <div className="buyn">
                            <Link href="#" className="buy-nw">Buy Now</Link>
                        </div>
                        <div>
                            <Link href="#" className="know-me">Know More</Link>
                        </div>
                    </div>

                    <div className="first-card-plan-three">
                        <h2 className="plan">Plan C (Price)</h2>
                        <div className="buyn">
                            <Link href="#" className="buy-nw">Buy Now</Link>
                        </div>
                        <div>
                            <Link href="#" className="know-me">Know More</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="wrapper-slide-plan">
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper__slide" >
                        <div className="slide-one-plan">
                            <div className="first-card-plan-one-slider">
                                <h2 className="plan">Plan B (Price)</h2>
                                <div className="buyn">
                                    <Link href="#" className="buy-nw">Buy Now</Link>
                                </div>
                                <div>
                                    <Link href="#" className="know-me">Know More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper__slide" >
                        <div className="slide-two-plan">
                            <div className="first-card-plan-two-slider">
                                <h2 className="plan">Plan B (Price)</h2>
                                <div className="buyn">
                                    <Link href="#" className="buy-nw">Buy Now</Link>
                                </div>
                                <div>
                                    <Link href="#" className="know-me">Know More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper__slide">
                        <div className="slide-three-plan">
                            <div className="first-card-plan-three-slider">
                                <h2 className="plan">Plan C (Price)</h2>
                                <div className="buyn">
                                    <Link href="#" className="buy-nw">Buy Now</Link>
                                </div>
                                <div>
                                    <Link href="#" className="know-me">Know More</Link>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>


                </Swiper>
            </div>

            <IndividualITR />
        </div>

    );
}

export default Homepage;