import React, { useState } from 'react';

const AuthenticationForm = () => {
    const [isSwitched, setIsSwitched] = useState(false);

    const handleToggle = () => {
        setIsSwitched(!isSwitched);
    };

    return (
        <div className="shell">
            <div
                className={`container a-container ${isSwitched ? "is-txl" : ""}`}
                id="a-container"
            >
                <form className={`form ${isSwitched ? "is-hidden" : ""}`} id="a-form">
                    <h2 className="form_title title">Create Account</h2>
                    <span className="form_span">Choose a Sign-up Method or Register with Email</span>
                    <input type="text" className="form_input" placeholder="Name" />
                    <input type="email" className="form_input" placeholder="Email" />
                    <input type="password" className="form_input" placeholder="Password" />
                    <button className="form_button button submit">SIGN UP</button>
                </form>

                <form className={`form ${isSwitched ? "" : "is-hidden"}`} id="b-form">
                    <h2 className="form_title title">Sign In</h2>
                    <span className="form_span">Choose a Sign-in Method or Log in with Email</span>
                    <input type="email" className="form_input" placeholder="Email" />
                    <input type="password" className="form_input" placeholder="Password" />
                    <button className="form_button button submit">SIGN IN</button>
                </form>
            </div>

            <div
                className={`switch ${isSwitched ? "switch-move-left" : "switch-move-right"}`}
                id="switch-cnt"
            >
                <div className={`switch_circle ${isSwitched ? "is-txr" : ""}`}></div>
                <div className={`switch_circle switch_circle-t ${isSwitched ? "is-txr" : ""}`}></div>
                <div className={`switch_container ${isSwitched ? "is-hidden" : ""}`} id="switch-c1">
                    <h2 className="switch_title title" style={{ letterSpacing: "0" }}>Welcome Back!</h2>
                    <p className="switch_description description">Already have an account? Sign in to enter the amazing world!</p>
                    <button onClick={handleToggle} className="switch_button button switch-btn">SIGN IN</button>
                </div>
                <div className={`switch_container ${isSwitched ? "" : "is-hidden"}`} id="switch-c2">
                    <h2 className="switch_title title" style={{ letterSpacing: "0" }}>Hello Friend!</h2>
                    <p className="switch_description description">Register for an account and become a valued member for an incredible journey!</p>
                    <button onClick={handleToggle} className="switch_button button switch-btn">SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationForm;
