// css file
import './TaxsaverPlan.css';
// import './IndividualITR.css';

// images
import RightIcon from "./images/righticon.jpg"
import WrongIcon from "./images/wrongicon.jpg"

// link
import { Link } from "react-router-dom";
import EmployedProfessional from './EmployedProfessional';


function TaxsaverPlan() {
    return (
        <div className='tax-saver-sec'>
            <div className='container'>
                <h3 className='heading-taxsaver'>Tax Saver Plan</h3>

                <div className="wrap-card-two-saver-plan">
                    <h2 className="plan-one">Basic</h2>
                    <h3 className="salary-rnt">
                        Tax Saver Plan
                    </h3>
                    <h4 className="amt">₹ 3,999</h4>
                    <h5 className="amt-cut"><s>₹ 4,999</s></h5>
                    <div className="img-txt-comb">
                        <p className='invest-rupee'>WITHOUT INVESTING A SINGLE RUPEE</p>
                    </div>
                    <div className='img-text-comb-saver'>
                        <div className="img-txt-comb">
                            <img src={RightIcon} alt="" />
                            <p>Save Taxes apart from
                                80C/80D/80G /NPS</p>
                        </div>
                        <div className="img-txt-comb">
                            <img src={RightIcon} alt="" />
                            <p className="withdraw-para">Claim Lesser known
                                Deductions and Allowances</p>
                        </div>
                    </div>



                    <div className="buyn buynwcd">
                        <Link href="#" className="buy-nw">Buy Now</Link>
                    </div>

                </div>

                <EmployedProfessional />

            </div>
        </div>
    );
}

export default TaxsaverPlan;