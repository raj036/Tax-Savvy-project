import React from 'react';

import './AboutUs.css';
import { Link } from 'react-router-dom';

// import image
import Aboutim from './imageprofile/aboutusimg.jpg'


const AboutUs = () => {
    return (

        <>
            <div className="tax-filling-wrapper">
                <div className="aboutus-heading">
                    <h1 className="about-us">About Us</h1>
                    <p className="main-header">We're Hear For You</p>
                </div>
            </div>
            <div className="our-story-wrapper">
                <div className="tax-filling-image">
                    <img src={Aboutim} alt="" />
                </div>
                <div className="thought-paragraph">
                    <p className="paragraph">
                        Our mission is to simplify finances, save money and
                        time for millions of Indian businesses and people.
                        We are a technology company that builds trusted,
                        useful and insightful platforms for our clients to
                        run their finances and improve their relationship with money.
                    </p>
                    <div className="button-wrapper">
                        <Link href="#" className="readmore-button">Read More</Link>
                    </div>
                </div>
                <div className="our-stories">
                    <h2 className="our-story">Our Story</h2>
                    <p className="paragraph">The Latin derivative of Tax Savvy means “Tributum Savvy”. The primary objective of
                        taxation in India is to generate revenue for the government to fund its various activities and
                        programs, such as infrastructure development, social welfare, and national defence.</p>
                    <p className="paragraph">We are a company set up by a team of Professional Chartered Accountants (CA), CPAs,
                        Cost and Management Accountants (CMA), Management professionals and Company Secretaries (CS). It is
                        our conviction that LCPL offers and delivers the best professional services, all the time and in
                        every instance. Our emphasis rests firmly in delivering the best business processes, teamwork and
                        cooperation. LCPL’s charter and mission are based on ‘Integrity and Honesty’, ‘Teamwork’, ‘Respect
                        and Dignity’, ‘Innovation and Excellence’.</p>
                    <p className="paragraph">We provide secure, dependable, accurate, real time and cost effective Services in
                        FACT (Finance, Accounting, Costing and Taxation). We create meaningful, well-organized financial
                        records or dashboards that ensure that your business operations will run most efficiently.</p>
                </div>
                <div className="key-feature-container">
                    <h2 className="key-features">Key Features of our Company</h2>
                    <ul className="unorder-list">
                        <li>Delivering dedicated account &amp; financial professional services since 2004 </li>
                        <li>Services provided by certified financial professionals</li>
                        <li>Bouquet of services include GST, Costing, Accounts, Internal &amp; Inventory Audits, etc.</li>
                        <li>Clientele in US &amp; India </li>
                        <li>Headquartered at central office in Pune, India</li>
                        <li>Three additional offices in India: Mumbai, Nashik and Surat </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutUs;