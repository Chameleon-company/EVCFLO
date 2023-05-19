import parterImage from "./img/Desktop.7eb55501.layout_50_50_partner_with_us.webp";
import EVImage from "./img/2ad7c082-6e78-42d7-8eae-8b28b9c0a4bc.jpeg";

const MainContent = () => {
	return (
		<main id="main">
			<div className="new-line"></div>
			<div className="new-line"></div>

			<section id="alt-services-2" className="alt-services section-bg">
				<div className="container" data-aos="fade-up">
					<div className="row justify-content-around gy-4">
						<div className="col-lg-5 d-flex flex-column justify-content-center">
							<div className="new-line"></div>
							<div className="new-line"></div>
							<div
								className="icon-box d-flex position-relative"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<i className="bi bi-easel flex-shrink-0"></i>
								<div>
									<h4>
										<a href="" className="stretched-link">
											AXEN EV Charging Station
										</a>
									</h4>
									<p>
										This is the one of the leading companies
										for EV Charging Stations. Its orgin is
										in Cuba, they also provide solution for
										grid automation and smart grid
									</p>
								</div>
							</div>

							<div
								className="icon-box d-flex position-relative"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<i className="bi bi-patch-check flex-shrink-0"></i>
								<div>
									<h4>
										<a href="" className="stretched-link">
											Font Wall EV Charging Station
										</a>
									</h4>
									<p>
										Orgin is in Switzerland and started in
										2014 . They provide fastest Installation
										of EV Charging Stations.
									</p>
								</div>
							</div>

							<div
								className="icon-box d-flex position-relative"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<i className="bi bi-brightness-high flex-shrink-0"></i>
								<div>
									<h4>
										<a href="" className="stretched-link">
											Pixie EVCharging Station
										</a>
									</h4>
									<p>
										This company is well known for its
										fastest and safest installation of EV
										Charging Stations wordldwide whether
										resedentical or commercial.
									</p>
								</div>
							</div>

							<div
								className="icon-box d-flex position-relative"
								data-aos="fade-up"
								data-aos-delay="400"
							>
								<i className="bi bi-brightness-high flex-shrink-0"></i>
								<div>
									<h4>
										<a href="" className="stretched-link">
											Edgin Solution
										</a>
									</h4>
									<p>
										This company is well known for safest
										system in commercial area .
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-lg-6 img-bg"
							style={{
								background: `url(${EVImage})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "600px 500px",
							}}
							data-aos="zoom-in"
							data-aos-delay="100"
						></div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default MainContent;
