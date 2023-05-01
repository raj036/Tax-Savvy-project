import React from 'react';
import './Contact.css';

// images import

import email from './imageprofile/msgimg.jpg';
import call from './imageprofile/callimg.jpg';
import locat from './imageprofile/locationimg.webp';

const Contact = () => {
    return (
        <>
            <section className="details-section">
                <div className="three-cards-wrap">
                    <div className="card">
                        <figure>
                            <img src={email} alt=''/>
                        </figure>
                        <div className="details">
                            <h2 className="mail">Email Id</h2>
                            <p>info@taxiteazy.com</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src={call} alt="" />
                        </figure>
                        <div className="details">
                            <h2 className="mail">Phone Number</h2>
                            <p>+91 84608 46049</p>
                            <p>+91 94269 14987</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src={locat} alt="" />
                        </figure>
                        <div className="details">
                            <h2 className="mail">Address</h2>
                            <p>210, RK Prime, 150 Ft. Ring Road, <br />Circle Nana Mava, <br />Rajkot, Gujarat. 360005</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;