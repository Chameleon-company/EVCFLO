import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubTitle from './SubTitle';


const Brochure = () => {

    return (
        <section className="section" id="Brochure">
            <SubTitle title="Brochure" />
            <center>
            <div className="brochure">
                <div className="product-details">
                    <h2>Product Details</h2>
                    <ul>
                        <li>Minimal size, streamline design.</li>
                        <li>Home and workplace use intelligent app control.</li>
                        <li>DC residual current protection.</li>
                        <li>Anti welding protection.</li>
                        <li>Wireless communication (Wi-Fi/Bluetooth).</li>
                        <li>Smart charge/scheduled charge by app.</li>
                        <li>Type 1/Type 2 charging cable.</li>
                        <li>App operation/RFID authentication/Plug & play.</li>
                        <li>Wall mount/floor stand installation.</li>
                    </ul>
                </div>
            </div>
            </center>
        </section>
    );

}

export default Brochure;