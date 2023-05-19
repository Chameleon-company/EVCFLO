import PartnerPage from "../pages/PartnerPage";
import Footer from "../pages/Footer";
import heroPartners from "./img/hero_partners.webp";

const Partner = () => {
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

			<section
				id="faq"
				className="faq section-bg"
				style={{
					backgroundColor: "rgb(76, 177, 102)",
				}}
			>
				<div className="container" data-aos="fade-up">
					<div className="row justify-content-around gy-4">
						<div className="col-lg-6 d-flex flex-column justify-content-center">
							<div className="section-title">
								<p style={{ color: "white" }}>EVBox partners</p>
								<h2
									style={{
										color: "white",
										fontSize: "50px",
									}}
								>
									One ecosystem for all your charging needs
								</h2>
								<a
									href="#"
									className="btn-get-started scrollto"
									style={{
										border: "12px solid white",
										background: "white",
										color: "black",
									}}
								>
									Become a partner
								</a>
							</div>
						</div>

						<div
							className="col-lg-6 img-bg"
							style={{
								background: `url(${heroPartners})`,
								backgroundSize: "500px 600px",
								backgroundRepeat: "no-repeat",
								padding: "20%",
							}}
							data-aos="zoom-in"
							data-aos-delay="100"
						></div>
					</div>
				</div>
			</section>

			<PartnerPage />
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

export default Partner;
