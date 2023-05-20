import Map from "../components/Map";
import InfoMaps from "../components/InformationMaps";
import About from "../components/About";
import Hero from "../components/Hero";
import EVImage from "../images/evcharge.jpeg";

import Title from "../components/Title";
//import "../css/style.css";

const EVCharge = () => {
	return (
		<div className="faq" style={{ marginBottom: "40%" }}>
			<Title title="Distributors for EVCharging Stations" />
			<section class="section" id="evcontentleft">
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
							This is the one of the leading companies for EV
							Charging Stations. Its orgin is in Cuba, they also
							provide solution for grid automation and smart grid
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
							Orgin is in Switzerland and started in 2014 . They
							provide fastest Installation of EV Charging
							Stations.
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
							This company is well known for its fastest and
							safest installation of EV Charging Stations
							wordldwide whether resedentical or commercial.
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
							This company is well known for safest system in
							commercial area .
						</p>
					</div>
				</div>
			</section>
			<section class="section" id="evcontentright">
				<img src={EVImage} width="500" height="450" alt=""></img>
			</section>
		</div>
	);
};

export default EVCharge;
