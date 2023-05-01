import './Header.css';

import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TfiClose } from "react-icons/tfi";

function Header() {


    // hamburger 
    const [curr, setCurr] = useState(false);

    // to show active on that page
    const [activeMenu, setActiveMenu] = useState("")

    const toggle = () => {
        setCurr(true);
    }

    const close = () => {
        setCurr(false);
    }

    return (
        <div className='header-section'>


                <div className="header-wrap">
                    <div className="header-logo">
                        <Link className={activeMenu === '/' ? 'activelogo' : ''} onClick={() => { setActiveMenu('/') }} to="/">Tax Savvy</Link>
                    </div>
                    <div className='navigation mob-nav'>
                        {
                            curr ?
                                <div className='close' onClick={close}><TfiClose />
                                    <div className='menu-nav'>
                                        <ul className='' id=''>
                                            <li>
                                                <Link href='#'>Product</Link></li>
                                            <li>
                                                <Link href='#'>Price</Link></li>
                                            <li><Link to="/request">Request Call Back</Link></li>
                                            <li>
                                                <Link to="/register">Register</Link></li>
                                            <li>
                                                <Link to="/sign">Sign In</Link></li>
                                        </ul>
                                    </div>
                                </div> :
                                <div className='open' onClick={toggle}><GiHamburgerMenu /></div>

                        }
                    </div>

                </div>

                <div className="drop-down">
                    <select className="select-one">
                        <option value="">Product</option>
                    </select>
                    <select className="select-one">
                        <option value="">Price</option>
                    </select>
                </div>


                <div className="call-number">
                    <Link className={activeMenu === 'request' ? 'active' : ''} onClick={() => { setActiveMenu('request') }} to="/request">Request Call Back</Link>
                </div>
                <div className="sign-registr">
                    <div className='register'>
                        <Link className={activeMenu === 'register' ? 'active' : ''} onClick={() => { setActiveMenu('register') }} to="/register">Register</Link>

                    </div>

                    <div className="sign">
                        <Link className={activeMenu === 'sign' ? 'active' : ''} onClick={() => { setActiveMenu('sign') }} to="/sign">Sign In</Link>
                    </div>
                </div>


        </div>
    );
}

export default Header;