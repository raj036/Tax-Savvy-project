import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import Crypto from "./Crypto";


// images import

import RightIcon from "./images/righticon.jpg"
import WrongIcon from "./images/wrongicon.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// css file
import './EmployedProfessional.css';

// import required modules
import { Pagination, Navigation } from "swiper";

function EmployedProfessional() {
    return (
        <div className="wrapper-slider">

            <div className="container">

                <h3 className="heading-name-employed">For Self Employed And Professionals</h3>

                {/* swiper card starts from here */}

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

                                <div className="wrap-card-two-ep">
                                    <h3 className="salary-rnt-ep">
                                        For Security
                                        Tradersr Plan
                                    </h3>
                                    <h4 className="amt">₹ 4,999</h4>
                                    <h5 className="amt-cut"><s>₹ 7,499</s></h5>

                                    <div className="img-txt-comb-ep">
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Profit/loss from F&O trading
                                                or Intraday trading</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Preparation of Profit & Loss
                                                Statement & Balance sheet</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p className="withdraw-para">Covers salary, other incomes
                                                and capital gains</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={WrongIcon} alt="" />
                                            <p>Audit fee and DSC not included</p>
                                        </div>
                                    </div>



                                    <div className="buyn buynwcd">
                                        <Link href="#" className="buy-nw">Buy Now</Link>
                                    </div>

                                </div>

                                {/* first card ends here */}

                                {/* second card starts from here */}

                                <div className="wrap-card-three-ep">
                                    <h3 className="salary-rnt-ep">
                                        For Professionals
                                        & Freelancers <br />
                                        (Presumptive Income Plan)
                                    </h3>
                                    <h4 className="amt">₹ 3,999</h4>
                                    <h5 className="amt-cut"><s>₹ 7,599</s></h5>

                                    <div className="img-txt-comb-ep">
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Incomes for professionals
                                                and small businesses</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Applicable annual turnover less than 2 cr
                                                for businesses  44AD</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p className="withdraw-para">Gross receipt less than 50 lacs for
                                                professionals  44ADA</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Covers salary, other incomes
                                                and capital gains</p>
                                        </div>
                                    </div>




                                    <div className="buyn buynwcd">
                                        <Link href="#" className="buy-nw">Buy Now</Link>
                                    </div>

                                </div>

                                {/* second card ends here */}

                                {/* third card starts here */}

                                <div className="wrap-card-four-ep">
                                    <h3 className="salary-rnt-ep">
                                        For Business tax returns <br />
                                        (Regular Books Plan)
                                    </h3>
                                    <h4 className="amt">₹ 4,999</h4>
                                    <h5 className="amt-cut"><s>₹ 8,499</s></h5>

                                    <div className="img-txt-comb-ep">
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Business income from business
                                                having upto 250 transactions</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p>Preparation of Profit & Loss
                                                Statement & Balance sheet</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={RightIcon} alt="" />
                                            <p className="withdraw-para">Covers salary, other incomes
                                                and capital gains</p>
                                        </div>
                                        <div className="img-txt-comb">
                                            <img src={WrongIcon} alt="" />
                                            <p>Audit fee and DSC not included</p>
                                        </div>
                                    </div>



                                    <div className="buyn buynwcd">
                                        <Link href="#" className="buy-nw">Buy Now</Link>
                                    </div>

                                </div>

                                {/* third card ends here */}

                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slider 2 starts from here */}

                    <SwiperSlide className="slide-two-ep">
                        <div className="slide-two">
                            <div className="wrap-card-two-slide-two-ep">
                                <h3 className="salary-rnt-ep">
                                    For Professionals
                                    & Freelancers <br />
                                    Presumptive Income Plan
                                </h3>
                                <h4 className="amt">₹ 3,999</h4>
                                <h5 className="amt-cut"><s>₹ 7,599</s></h5>

                                <div className="img-txt-comb-ep">
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Incomes for professionals
                                            and small businesses</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Applicable annual turnover less than 2 cr
                                            for businesses  44AD </p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p className="withdraw-para">Gross receipt less than 50 lacs for
                                            professionals  44ADA </p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Covers salary, other incomes
                                            and capital gains</p>
                                    </div>
                                </div>


                                <div className="buyn buynwcd">
                                    <Link href="#" className="buy-nw">Buy Now</Link>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slider 2 ends here */}


                    {/* slider 3 starts from here */}

                    <SwiperSlide className="slide-three-ep">

                        <div className="slide-three">
                            <div className="wrap-card-two-slide-three-ep">
                                <h3 className="salary-rnt-ep">
                                    For Business tax returns <br />
                                    (Regular Books Plan)
                                </h3>
                                <h4 className="amt">₹ 4,999</h4>
                                <h5 className="amt-cut"><s>₹ 8,499</s></h5>

                                <div className="img-txt-comb-ep">
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Business income from business
                                            having upto 250 transactions</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p>Preparation of Profit & Loss
                                            Statement & Balance sheet</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={RightIcon} alt="" />
                                        <p className="withdraw-para">Covers salary, other incomes
                                            and capital gains</p>
                                    </div>
                                    <div className="img-txt-comb">
                                        <img src={WrongIcon} alt="" />
                                        <p>Audit fee and DSC not included</p>
                                    </div>
                                </div>

                                <div className="buyn buynwcd">
                                    <Link href="#" className="buy-nw">Buy Now</Link>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                    {/* slider 3 ends here */}

                </Swiper>

                <Crypto />

            </div>

        </div>

    );
}




export default EmployedProfessional;