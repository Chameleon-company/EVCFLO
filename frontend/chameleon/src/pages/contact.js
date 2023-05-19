import ContactPage from "../pages/contactPage";
import Footer from "../pages/Footer";

const Contact = () => {
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

			<section id="hero" class="EVhero">
				<div className="hero-container">
					<h1>Contact Us</h1>
				</div>
			</section>

			<ContactPage />
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

export default Contact;
