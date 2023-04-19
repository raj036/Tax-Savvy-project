// import { Link } from "react-router-dom";

import Profile from "../Profilepage/Profile";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import "./Register.css";
// import "../Components/Homepage.css";

function Register() {
    return (
        <>
    {/* //     <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/request" element={<RequestCall />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/sign" element={<Sign />} />
    //   </Routes> */}

            <div className="whole-wrapper-register">
                <div className="wrap-signup-page">
                    <div className="signup-page">
                        <h3 className="signup-name">Register</h3>
                        <input type="text" placeholder="Firstname" className="input-signup" />
                        <input type="text" placeholder="Lastname" className="input-signup" />
                        <input type="email" placeholder="Email" className="input-signup" />
                        <input type="password" placeholder="Password" className="input-signup" />
                        <input type="password" placeholder="Confirm Password" className="input-signup" />
                        <div className="checkbox-signup">
                            <input type="checkbox" name="remember" defaultValue="checked" />
                            <label htmlFor="accept">Accept <span><a href>Terms &amp; Conditions</a></span></label><br />
                        </div>
                        <h4 className="sign-btn"><Link to='../Profilepage/Profile' className="signup-btn">Register</Link></h4>
                    </div>
                </div>
            </div>
            {/* <Routes>
                <Route path="/profile" element={<Profile />} />
            </Routes> */}
        </>


    );
}

export default Register;