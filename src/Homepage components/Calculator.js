import './Calculator.css';
import { Link } from "react-router-dom";


function Calculator() {
    return (
        <div>
            <div class="wrapper-form-sec">
                <div class="container">
                    <div class="wrap-form form">
                        <form action="action_page.php" method="post">
                            <h3 className='calculate'>Calculate Your Tax</h3>
                            <div class="input-wrp">
                                <label for="tlincome">Total Income</label>
                                <input
                                    type="text"
                                    name="tlincome"
                                    id="tlincome"
                                />
                            </div>

                            <h2 className='total'>Assumptions</h2>
                            <div class="input-wrp">
                                <label for="80c">80 C</label>
                                <input
                                    type="text"
                                    placeholder="Investment"
                                    name="80c"
                                    id="80c"
                                />
                            </div>

                            <div class="input-wrp">
                                <label for="80d">80 D</label>
                                <input type="text" name="80d" id="80d" />
                            </div>

                            <div class="input-wrp">
                                <label for="80ee">80 EE</label>
                                <input type="text" name="80ee" id="80ee" />
                            </div>
                            <div class="input-wrp">
                                <label for="24b">24 B</label>
                                <input type="text" name="24b" id="24b" />
                            </div>
                            <div class="input-wrp">
                                <label for="80u">80 U</label>
                                <input type="text" name="80u" id="80u" />
                            </div>
                            <div class="input-wrp">
                                <label for="80tta">80 TTA</label>
                                <input type="text" name="80tta" id="80tta" />
                            </div>
                        </form>

                        <div class="sub-bt">
                            <Link href="#" className="submit-btn">Submit</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Calculator;