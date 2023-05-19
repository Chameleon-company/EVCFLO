import EvHomepageContent from "../pages/EvHomepageContent";
import Footer from "../pages/Footer";
const EvHomepage = () => {
	return (
		<div>
			<header id="header" className="d-flex align-items-center ">
				<i className="bi bi-list" id="headerli"></i>

				<div className="container-fluid d-flex align-items-center justify-content-lg-between">
					<h1 className="logo me-auto me-lg-0">
						<a href="#">Chameleon</a>
					</h1>
				</div>
			</header>
			<section id="hero" className="EvHomeheroimg">
				<div className="hero-container">
					<h1>Home charging stations for electric cars</h1>
					<h2>
						Charge with confidence from the comfort of your home
						with our intuitive EV charging solutions.
					</h2>
					<a href="#" className="btn-get-started scrollto">
						Inquire Now
					</a>
				</div>
			</section>
			<div className="new-line"></div>
			<EvHomepageContent />
			<Footer />
			<a
				href="#"
				className="back-to-top d-flex align-items-center justify-content-center active"
			>
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</div>
	);
};

export default EvHomepage;
