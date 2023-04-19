import './Footer.css';

import { Link } from "react-router-dom";


function Footer(){
    return (
        <div>
        <footer className="footer-section">
          <div className="container">
            <div className="whole-footer-wrap">
              {/* first side of footer */}
              <div className="footer-logo comm-wid">
                <h3 className="footer-tax-logo">Tax Savvy</h3>
              </div>
              {/* second side of footer  */}
              <div className="menu-part comm-wid">
                <h4 className="menu">
                  Menu
                </h4>
                <ul className="menu-side-nav">
                  <li><Link href="#">Home</Link></li>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Filling Tax returns</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                  <li><Link href="#">Blog</Link></li>
                </ul>
              </div>
              {/* third side of footer */}
              <div className="filling-part comm-wid">
                <h4 className="filling">
                  Filling Tax Returns
                </h4>
                <ul className="filling-side-nav">
                  <li><Link href="#">Capital Gain Tax Filling</Link></li>
                  <li><Link href="#">Salaried &amp; Self Employed</Link></li>
                  <li><Link href="#">Crypto Tax Filling</Link></li>
                  <li><Link href="#">Individuals ITR Filling</Link></li>
                  <li><Link href="#">Individuals US Tax Return Filling</Link></li>
                </ul>
              </div>
              {/* fourth side of footer */}
              <div className="address-part comm-wid">
                <h4 className="address">
                  Our Address
                </h4>
                <ul className="address-side-nav">
                  <li>Morvi, Gujarat 360005</li>
                  <li>+91 9999999999</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-copyright">
          <h4 className="copyright">© 2023 Taxsavvy <span>All Rights Reserved</span> </h4>
        </div>
      </div>
    );
}

export default Footer; 