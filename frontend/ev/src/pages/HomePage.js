import MainContent from "../pages/MainContent";
import Footer from "../pages/Footer";
const HomePage = () => {
	return (
		<div>
			<header id="header" className="d-flex align-items-center ">
				<i class="bi bi-list" id="headerli"></i>

				<div className="container-fluid d-flex align-items-center justify-content-lg-between">
					<h1 className="logo me-auto me-lg-0">
						<a href="#">Chameleon</a>
					</h1>
				</div>
			</header>

			<section id="hero">
				<div className="hero-container">
					<h1>Changing the norm. </h1>
					<h1>Charging the future. </h1>
					<h2>
						We empower your transition to electric mobility with our
						complete electric vehicle charging solutions
					</h2>
					<a href="#about" className="btn-get-started scrollto">
						For businesses
					</a>
					<a href="#about" className="btn-get-started scrollto">
						For home
					</a>
				</div>
			</section>

			<MainContent />
			<Footer />
			<a
				href="#"
				class="back-to-top d-flex align-items-center justify-content-center active"
			>
				<i class="bi bi-arrow-up-short"></i>
			</a>
		</div>
	);
};

export default HomePage;
