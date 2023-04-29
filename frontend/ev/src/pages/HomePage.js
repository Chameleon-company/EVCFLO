import MainContent from '../pages/MainContent';
import Footer from '../pages/Footer';
const HomePage = () => {
    return (
        <div>
            <header id="header" className="d-flex align-items-center ">
                <div className="container-fluid d-flex align-items-center justify-content-lg-between">

                    <h1 className="logo me-auto me-lg-0"><a href="#">EVBOX</a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <div className="header-social-links d-flex align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </header>

            <section id="hero">
                <div className="hero-container">
                    <h1>Changing the norm. </h1>
                    <h1>Charging the future. </h1>
                    <h2>We empower your transition to electric mobility with our complete electric vehicle charging solutions</h2>
                    <a href="#about" className="btn-get-started scrollto">For businesses</a>
                    <a href="#about" className="btn-get-started scrollto">For home</a>
                </div>
            </section>
        
            <MainContent />
            <Footer />
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </div>
    );
};

export default HomePage;