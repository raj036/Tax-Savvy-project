import { Link } from 'react-router-dom';

// css import
import './Profile.css';


// images import
import faceIcn from './imageprofile/faceicon.png'; 
import camIcn from './imageprofile/faceicon.png'; 


function Profile() {
    return (
        <>
            <div className="profile-page-sec">
                <div className="profile-page-wrap">
                    <div className="face-img">
                        <img src={faceIcn} alt="faceicn" />
                    </div>
                    <div className="cam-img">
                        <img src={camIcn} alt="camicn" />
                    </div>
                    <h3 className="person-name">Raj Trivedi</h3>
                    <div className="save-chng"><Link href="#" className="sv-chng-btn">Save Changes</Link></div>
                </div>
            </div>
            <div className="personal-details-sec">
                <h4 className="personal-det-name">Personal Details</h4>
                <div className="personal-details-wrap">
                    <div className="form-wrap">
                        <div>
                            <label htmlFor="firstname">First name</label><br />
                            <input type="text" name="firstname" className="firstname-pp" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name</label><br />
                            <input type="text" name="lastname" className="firstname-pp" />
                        </div>
                    </div>
                    <div className="form-wrap">
                        <div>
                            <label htmlFor="mobnum">Mobile Number</label><br />
                            <input type="text" name="mobnum" className="firstname-pp" />
                        </div>
                        <div>
                            <label htmlFor="email-pp">Email ID</label><br />
                            <input type="email" name="email-pp" className="firstname-pp" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
