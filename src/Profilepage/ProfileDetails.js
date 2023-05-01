import React from 'react'

import './ProfilesDetails.css';

import user from './imageprofile/user2.jpg';
import camicn from './imageprofile/camicon.png';

const ProfileDetails = () => {
    return (
        <>
            <div className="profile-details-page-container">
                <div className="title">Profile Page</div>
                <div className="details-wrap">
                    <div className="details-left">
                        <div className="shadow">
                            <img src={user} alt="user" className="shadow-img" />
                            <img src={camicn} alt="cam" className="shadow-icon" />
                        </div>
                    </div>
                    <div className="details-right">
                        <div className="content">
                            <form action="#">
                                <div className="user-details">
                                    <div className="input-box">
                                        <label className="details">Full Name</label>
                                        <input type="text" placeholder="Enter your name" className="upload-doc-one" required />
                                    </div>
                                    <div className="input-box">
                                        <label className="details">Email</label>
                                        <input type="text" placeholder="Enter your email" className="upload-doc-one" required />
                                    </div>
                                    <div className="input-box">
                                        <label className="details">Phone Number</label>
                                        <input type="text" placeholder="Enter your number" className="upload-doc-one" required />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="taxable-income" className="details">Taxable Income</label>
                                        <input type="number" placeholder="Enter your taxable-income" className="upload-doc-one" required />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="adhar" className="details">Aadhar Card</label>
                                        <input type="file" id="file-upload" name="file-upload" className="upload-doc" multiple />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="pan" className="details">Pan</label>
                                        <input type="file" id="file-upload" name="file-upload" className="upload-doc" multiple />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="bank-statement" className="details">Bank Statement</label>
                                        <input type="file" id="file-upload" name="file-upload" className="upload-doc" multiple />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="form-sec" className="details">Form 16</label>
                                        <input type="file" id="file-upload" name="file-upload" className="upload-doc" multiple />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="button">
                            <input className="submit" type="submit" defaultValue="Submit" />
                            <input className="cancel" type="submit" defaultValue="Cancel" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails