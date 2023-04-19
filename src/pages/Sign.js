import './Sign.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

function Sign() {

    const [activeMenu, setActiveMenu] = useState("")


    return (
        <div className='whole-wrapper-signin'>
            <div className="wrap-login-page">
                <div className="login-page">
                    <h3 className="login-name">Sign In</h3>
                    <input type="text" placeholder="Username" className="username-login" />
                    <input type="password" placeholder="Password" className="username-pass" />
                    <p className="forget-pass"> <Link href="#" className="forget-password">Forget Password?</Link> </p>
                    <div className="checkbox-login">
                        <input type="checkbox" name="remember" defaultValue="checked" />
                        <label htmlFor="remember">Remember Me</label><br />
                    </div>
                    <h4 className="log-btn"><Link href="#" className="login-btn">Sign In</Link></h4>
                    <div className="account-sign-up">
                        <h5 className="sign-up-connect">Dont have an account?<span><Link className={activeMenu === 'register' ? 'active' : ''} onClick={() => { setActiveMenu('register') }} to="/register" >Register</Link></span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Sign;