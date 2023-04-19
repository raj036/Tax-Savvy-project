import './RequestCall.css';


import { Link } from 'react-router-dom';


function RequestCall() {
    return (
        <>
            <div className="whole-wrapper-reqcall">
                <div className="wrap-reqcall-page">
                    <div className="reqcall-page">
                        <h3 className="reqcall-name">Request Call Back</h3>
                        <input type="text" placeholder="Your Name" className="input-reqcall" />
                        <input type="email" placeholder="Your Email" className="input-reqcall" />
                        <input type="text" placeholder="Your Phone" className="input-reqcall" />
                        <textarea className='message-area' rows="5" cols="20">Enter Your Message ...</textarea>                      
                        <h4 className="reqcallbk-btn"><Link href="#" className="reqcall-btn">Send Message</Link></h4>
                    </div>
                </div>
            </div>

        </>
    );
}

export default RequestCall;