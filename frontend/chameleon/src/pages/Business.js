import BusinessContent from "../pages/BusinessContent";
import Footer from "../pages/Footer";
const Business = () => {
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
			<section id="hero" className="Businessheroimg2">
				<div className="hero-container">
					<h1>EV charging stations for businesses</h1>
					<h2>
						Simplify your transition to electric mobility and
						achieve your sustainability and revenue goals.
					</h2>
					<a href="#" className="btn-get-started scrollto">
						Inquire Now
					</a>
				</div>
			</section>
			<div className="new-line"></div>
			<BusinessContent />
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

export default Business;
