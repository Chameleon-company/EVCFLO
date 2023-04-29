const Footer = () => {
    return (
        <footer id="footer">

            <div className="footer-top">

                <div className="container">

                    <div className="row  justify-content-center">
                        <div className="col-lg-6">
                            <h3>Sign up for our newsletter</h3>
                            <p>Get the latest news and expert insights on the fast-moving world of electric mobility, straight to your inbox.</p>
                        </div>
                    </div>

                    <div className="row footer-newsletter justify-content-center">
                        <div className="col-lg-6">
                            <form>
                                    <input 
                                    type="email" 
                                    defaultValue=''
                                    name="email"
                                    placeholder="Enter your Email"
                                    />
                                <input type="submit"/>
                            </form>
                            
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>

                </div>
            </div>
            <div className="footer__doormat mb-8">
                <svg width="1312" viewBox="0 0 1312 271" fill="none" className="w-100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M910.217 0C822.782 0 769.964 63.6941 769.964 133.34C769.964 202.986 822.83 271 910.217 271C997.603 271 1050.47 202.986 1050.47 133.34C1050.52 63.6941 997.651 0 910.217 0ZM910.217 234.473C851.267 234.473 818.727 183.067 818.727 133.34C818.727 83.6135 851.267 36.4309 910.217 36.4309C969.166 36.4309 1001.71 83.5655 1001.71 133.34C1001.71 183.067 969.214 234.473 910.217 234.473ZM705.125 132.62C717.146 132.62 737.569 113.181 737.569 78.8137C737.569 34.463 713.718 4.07988 648.299 4.07988H509.93V266.824H648.299C705.076 266.824 749.687 246.617 749.687 190.026C749.735 153.595 722.36 132.62 705.125 132.62ZM552.513 44.4947H648.348C678.185 44.4947 692.958 52.9904 692.958 78.8617C692.958 104.733 678.185 112.461 648.348 112.461H552.513V44.4947ZM648.348 226.409H552.513V152.827H648.348C678.185 152.827 705.125 162.139 705.125 190.026C705.125 217.866 678.185 226.409 648.348 226.409ZM509.978 4.07988L288.23 266.824H243.957V44.4947H42.3896V113.229H182.739V153.643H42.3896V226.409H213.444V266.824H0V4.07988H286.298V206.346L457.015 4.07988H509.978ZM1312 266.824H1259.04L1174.64 166.843L1090.25 266.824H1037.24L1148.14 135.452L1037.29 4.07988H1090.35L1174.64 104.013L1258.94 4.07988H1312L1201.15 135.404L1312 266.824Z" fill="#64FFAF"></path>
                </svg>
            </div>
            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>Tech</span></strong>. All Rights Reserved
                </div>
                <div className="credits">       
                    Designed by <a href="#">Tech</a>
                </div>
            </div>
        </footer>
    )
};


export default Footer;