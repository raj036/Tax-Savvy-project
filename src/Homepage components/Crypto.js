import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// images import

import RightIcon from "./images/righticon.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// imported tesinomial file
import Testinomial from "./Testinomial";

// css files of crypto
import './Crypto.css';

function Crypto() {
    return (

        <div className="wrapper-slider">
            <div className="container">

                <h2 className="main-heading-crypto">CRYPTO CAPITAL GAINS</h2>

                {/* first swiper starts from here */}

                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide className="swiper__slide">
                        <div className="slide-one">

                            <div className="Crypto-slider-sec">


                                <div className="wrap-crypto-sec">
                                    <div className="first-crypto-crd">
                                        <h2 className="heading-filling-cryp">Filing for Crypto
                                            Gains Individual</h2>
                                        <h4 className="amt-cryp">₹ 4,499</h4>
                                        <div className="img-crypto-wrap">
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="capital-gain-cryp"> Capital Gains <br />
                                                    (Upto 200 transactions)</p>
                                            </div>
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="cryp-interest"> Crypto Interest Income</p>
                                            </div>
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="cryp-dividend">Crypto Dividend Income</p>
                                            </div>
                                        </div>
                                        <div className="buyn buynwcd">
                                            <Link href="#" className="buy-nw">Buy Now</Link>
                                        </div>
                                    </div>


                                    <div className="second-crypto-crd">
                                        <h2 className="heading-filling-cryp">Filing for Crypto
                                            Gains traders</h2>
                                        <h4 className="amt-cryp">₹ 5,499</h4>
                                        <div className="img-crypto-wrap">
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="capital-gain-cryp"> Capital gains
                                                    (200+ transactions, includes
                                                    intraday, leverage and
                                                    derivative trading)</p>
                                            </div>
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="cryp-interest"> Everything from Plan 1</p>
                                            </div>
                                        </div>
                                        <div className="buyn buynwcd">
                                            <Link href="#" className="buy-nw">Buy Now</Link>
                                        </div>
                                    </div>

                                    <div className="three-crypto-crd">
                                        <h2 className="heading-filling-cryp">Crypto Currency
                                            Taxation Advisory</h2>
                                        <h4 className="amt-cryp">₹ 1,999</h4>
                                        <div className="img-crypto-wrap">
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="capital-gain-cryp"> Advisory for salaried
                                                    individuals, freelancers,
                                                    financial traders</p>
                                            </div>
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="cryp-interest"> 45 minutes call session with
                                                    a ClearTax expert</p>
                                            </div>
                                            <div className="img-crypto">
                                                <img src={RightIcon} alt="" />
                                                <p className="cryp-dividend">Plan excludes filing of IT returns
                                                    from sale or trading of
                                                    Cryptocurrency</p>
                                            </div>
                                        </div>
                                        <div className="buyn buynwcd">
                                            <Link href="#" className="buy-nw">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>

                    {/* first swiper ends here */}

                    {/* second slider starts here */}

                    <SwiperSlide className="slide-two-crp">

                        <div className="slide-two">
                            <div className="second-crypto-crd-slide-two">
                                <h2 className="heading-filling-cryp">Filing for Crypto
                                    Gains traders</h2>
                                <h4 className="amt-cryp">₹ 5,499</h4>
                                <div className="img-crypto-wrap">
                                    <div className="img-crypto">
                                        <img src={RightIcon} alt="" />
                                        <p className="capital-gain-cryp"> Capital gains
                                            (200+ transactions, includes
                                            intraday, leverage and
                                            derivative trading)</p>
                                    </div>
                                    <div className="img-crypto">
                                        <img src={RightIcon} alt="" />
                                        <p className="cryp-interest"> Everything from Plan 1</p>
                                    </div>
                                </div>
                                <div className="buyn buynwcd">
                                    <Link href="#" className="buy-nw">Buy Now</Link>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    {/* second slider ends here */}

                    {/* third slider starts here */}

                    <SwiperSlide className="slide-three-crp">

                        <div className="slide-three">
                            <div className="three-crypto-crd-slide-three">
                                <h2 className="heading-filling-cryp">Crypto Currency
                                    Taxation Advisory</h2>
                                <h4 className="amt-cryp">₹ 1,999</h4>
                                <div className="img-crypto-wrap">
                                    <div className="img-crypto">
                                        <img src={RightIcon} alt="" />
                                        <p className="capital-gain-cryp"> Advisory for salaried
                                            individuals, freelancers,
                                            financial traders</p>
                                    </div>
                                    <div className="img-crypto">
                                        <img src={RightIcon} alt="" />
                                        <p className="cryp-interest"> 45 minutes call session with
                                            a ClearTax expert</p>
                                    </div>
                                    <div className="img-crypto">
                                        <img src={RightIcon} alt="" />
                                        <p className="cryp-dividend">Plan excludes filing of IT returns
                                            from sale or trading of
                                            Cryptocurrency</p>
                                    </div>
                                </div>
                                <div className="buyn buynwcd">
                                    <Link href="#" className="buy-nw">Buy Now</Link>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    {/* third slider ends here */}

                </Swiper>

            <Testinomial />

            </div>
        </div>
    );
}

export default Crypto;

