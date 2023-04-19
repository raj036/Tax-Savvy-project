import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// images import

import RightIcon from "./images/righticon.jpg"
import WrongIcon from "./images/wrongicon.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Homepage.css";
import "./IndividualITR.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import TaxsaverPlan from "./TaxsaverPlan";


function IndividualITR() {
    return (
        <div className="wrapper-slider mobile-view">
            <div className="">

                <h3 className="heading-name">Individual ITR Filling</h3>

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
                        <div className="slide-one">
                            <div className="wrap-of-card-two">

                                <div className="wrap-card-two">
                                    <h2 className="plan-one">PLAN 1</h2>
                                    <h3 className="salary-rnt">
                                        Salary/House <br />
                                        Rent Income
                                    </h3>

                                    <h4 className="amt">₹ 999</h4>
                                    <h5 className="amt-cut"><s>₹ 1499</s></h5>

                                    <div className="img-txt-comb-plan">
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Salary Below 50 lacs</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>House property</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p className="withdraw-para">Withdrawal from PF & bank
                                                deposits</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Donations</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={WrongIcon} alt="" />
                                            <p>Dividends > 10lacs</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={WrongIcon} alt="" />
                                            <p> Director in company</p>
                                        </div>
                                    </div>


                                    <div className="buyn buynwcd">
                                        <Link href="#" className="buy-nw-it">Buy Now</Link>
                                    </div>

                                </div>

                                {/* wrap card two starts from here */}

                                <div className="wrap-card-three">
                                    <h2 className="plan-one">PLAN 2</h2>
                                    <h3 className="salary-rnt">
                                        Salary/House
                                        Rent Income <br />(Premium)
                                    </h3>
                                    <h4 className="amt">₹ 1,499</h4>
                                    <h5 className="amt-cut"><s>₹ 4,599</s></h5>

                                    <div className="img-txt-comb-plan">
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Salary Above 50 lacs, or
                                                Multiple Form 16</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>House property</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p className="withdraw-para">Withdrawal from PF & bank
                                                deposits</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Donations</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Dividends > 10lacs</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p> Director in company</p>
                                        </div>
                                    </div>



                                    <div className="buyn buynwcd">
                                        <Link href="#" className="buy-nw-it">Buy Now</Link>
                                    </div>

                                </div>

                                {/* wrap card three starts from here */}

                                <div className="wrap-card-four">
                                    <h2 className="plan-one">PLAN 3</h2>
                                    <h3 className="salary-rnt">
                                        Capital Gains Income
                                    </h3>
                                    <h4 className="amt">₹ 3,499</h4>
                                    <h5 className="amt-cut"><s>₹ 7,999</s></h5>

                                    <div className="img-txt-comb-plan">
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Capital gains from stocks,
                                                mutual funds & property</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Gains from lottery and awards</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p className="withdraw-para">Everything covered in Salary
                                                Premium Plan1&2</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Donations</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Dividends > 10lacs</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={WrongIcon} alt="" />
                                            <p> Income earned outside India</p>
                                        </div>
                                    </div>



                                    <div className="buyn buynwcd">
                                        <Link href="#" className="buy-nw-it">Buy Now</Link>
                                    </div>

                                </div>

                                {/* wrap card four starts from here */}

                                <div className="wrap-card-five">
                                    <h2 className="plan-one">PLAN 4</h2>
                                    <h3 className="salary-rnt">
                                        Foreign Income
                                    </h3>
                                    <h4 className="amt">₹ 6,999</h4>
                                    <h5 className="amt-cut"><s>₹ 8,499</s></h5>


                                    <div className="img-txt-comb-plan">
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Income earned outside India</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Income earned in India for
                                                NRE,NRO a/c</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p className="withdraw-para">Sale of ESOPs/RSU</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>DTAA guidance</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Covers everything in capital
                                                gains income plan</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p> Includes filing returns for foreign
                                                investments in India, SOPs,
                                                shares, etc</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p> Declaration of foreign assets
                                                for Indian residents</p>
                                        </div>
                                    </div>


                                    <div className="buyn buynwcd">
                                        <Link href="#" className="buy-nw-it">Buy Now</Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>



                    {/* slider 1 ends here */}

                    {/* slider 2 starts from here */}

                    <SwiperSlide className="slide-two-two">
                        <div className="slide-two">
                            <div className="wrap-card-two-slide-two-it">
                                <h2 className="plan-one">PLAN 2</h2>
                                <h3 className="salary-rnt">
                                    Salary/House
                                    Rent Income <br />(Premium)
                                </h3>
                                <h4 className="amt">₹ 1,499</h4>
                                <h5 className="amt-cut"><s>₹ 4,599</s></h5>

                                <div className="img-txt-comb-plan">
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Salary Above 50 lacs, or
                                            Multiple Form 16</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>House property</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p className="withdraw-para">Withdrawal from PF & bank
                                            deposits</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Donations</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Dividends > 10lacs</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p> Director in company</p>
                                    </div>
                                </div>



                                <div className="buyn buynwcd">
                                    <Link href="https://taxiteazy.com/" className="buy-nw-it">Buy Now</Link>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slider 2 ends here */}

                    {/* slider 3 starts from here */}

                    <SwiperSlide className="slide-three-three">

                        <div className="slide-three">
                            <div className="wrap-card-two-slide-three-it">
                                <h2 className="plan-one">PLAN 3</h2>
                                <h3 className="salary-rnt">
                                    Capital Gains income
                                </h3>
                                <h4 className="amt">₹ 999</h4>
                                <h5 className="amt-cut"><s>₹ 1499</s></h5>

                                <div className="img-txt-comb-plan">
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Capital gains from stocks,
                                            mutual funds & property</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Gains from lottery and awards</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p className="withdraw-para">Everything covered in Salary
                                            Premium Plan1&2</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Donations</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Dividends > 10lacs</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={WrongIcon} alt="" />
                                        <p>Income earned outside India</p>
                                    </div>
                                </div>



                                <div className="buyn buynwcd">
                                    <Link href="#" className="buy-nw-it">Buy Now</Link>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                    {/* slider 3 ends here */}

                    <SwiperSlide className="slide-four-f">


                        <div className="slide-four">
                            <div className="wrap-card-two-slide-four-it">
                                <h2 className="plan-one">PLAN 4</h2>
                                <h3 className="salary-rnt">
                                    Foreign Income
                                </h3>
                                <h4 className="amt">₹ 999</h4>
                                <h5 className="amt-cut"><s>₹ 1499</s></h5>

                                <div className="img-txt-comb-plan">
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Income earned outside India</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Income earned in India for
                                            NRE,NRO a/c</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p className="withdraw-para">Sale of ESOPs/RSU</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>DTAA guidance</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Covers everything in capital
                                            gains income plan</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Includes filing returns for foreign
                                            investments in India, SOPs,
                                            shares, etc</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Declaration of foreign assets
                                            for Indian residents</p>
                                    </div>
                                </div>



                                <div className="buyn buynwcd">
                                    <Link href="#" className="buy-nw-it">Buy Now</Link>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    {/* <SwiperSlide>Slide 5</SwiperSlide> */}

                </Swiper>

                {/* first swiper ends here */}



                <TaxsaverPlan />

            </div>
        </div>

    );
}

export default IndividualITR;