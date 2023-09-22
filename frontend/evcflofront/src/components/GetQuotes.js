import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubTitle from './SubTitle';


const GetQuotes = () => {

    return (
        <section className="section" id="GetQuotes">
            <SubTitle title="GetQuotes" />


            <form action="" method="POST">

                <label htmlFor="identity" className="form-label">
                    Identify Yourself:
                </label>
                <select id="identity" name="identity" className="form-input">
                    <option value="Installer">Installer</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Operator">Operator</option>
                </select>
                <br />

                <label htmlFor="chargerType" className="form-label">
                    What kind of charger do you need:
                </label>
                <select id="chargerType" name="chargerType" className="form-input">
                    <option value="Home Charger">Home Charger</option>
                    <option value="Business Charger">Business Charger</option>
                    <option value="DC fast charger">DC fast charger</option>
                </select>
                <br />

                <label htmlFor="noOfChargers" className="form-label">
                    No.of chargers:
                </label>
                <input type="number" id="noOfChargers" name="noOfChargers" className="form-input" />
                <br />

                <label htmlFor="location" className="form-label">
                    Location of chargers:
                </label>
                <input type="text" id="location" name="location" className="form-input" />
                <br />

                <label htmlFor="purchaseTimeline" className="form-label">
                    Purchase timeline:
                </label>
                <input type="text" id="purchaseTimeline" name="purchaseTimeline" className="form-input" />
                <br />

                <label htmlFor="firstName" className="form-label">
                    First name:
                </label>
                <input type="text" id="firstName" name="firstName" className="form-input" />
                <br />

                <label htmlFor="lastName" className="form-label">
                    Last name:
                </label>
                <input type="text" id="lastName" name="lastName" className="form-input" />
                <br />

                <label htmlFor="email" className="form-label">
                    Email:
                </label>
                <input type="email" id="email" name="email" className="form-input" />
                <br />

                <label htmlFor="phoneNumber" className="form-label">
                    Phone number:
                </label>
                <input type="tel" id="phoneNumber" name="phoneNumber" className="form-input" />
                <br />

                <label htmlFor="paymentMode" className="form-label">
                    Mode of payment:
                </label>
                <select id="paymentMode" name="paymentMode" className="form-input">
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="Internet Banking">Internet Banking</option>
                </select>
                <br />

                <label htmlFor="companyName" className="form-label">
                    Company name:
                </label>
                <input type="text" id="companyName" name="companyName" className="form-input" />
                <br />

                <center>
                    <input type="submit" value="Submit" className="form-submit" />
                </center>
                <br />

            </form>


        </section>
    );

}



export default GetQuotes;