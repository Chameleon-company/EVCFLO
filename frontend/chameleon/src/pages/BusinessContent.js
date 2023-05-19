import liviqoCable from "./img/Desktop.8ab27ad8.side_liviqo_cable.webp";
import businessline from "./img/Desktop.8ab27ad8.side_businessline.webp";
import mod from "./img/Desktop.8ab27ad8.side_t_mod.webp";
import accordingSoftware from "./img/Desktop.06c771b5.layout_accordion_software_f.webp";
import charging from "./img/Desktop.91cd19f7.content_tiles_complete_workplace_charging_guide.webp";
import evCharger from "./img/content-tiles_best-ev-charger-workplace.webp";
import completeWorkplace from "./img/Desktop.562add57.content_tiles_complete_workplace_guide.webp";

const BusinessContent = () => {
	return (
		<main id="main">
			<div className="new-line"></div>
			<section id="services" className="services">
				<div className="container">
					<div className="section-title">
						<h2>Business charging stations (AC)</h2>
					</div>
					<div className="row">
						<div className="col-lg-12 col-md-6">
							<div className="icon-box">
								<div className="icon">
									<img
										src={liviqoCable}
										width="200"
										height="150"
										alt=""
									></img>
								</div>
								<div className="icon-content">
									<h1>
										<a href="">EVBox Liviqo</a>
									</h1>
									<h2>
										The Next generation of smart business
										charging
									</h2>
									<div className="new-line"></div>

									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										7.4 kw/11 kw /22 w
									</p>
									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										Workplaces / Retail & hospitality /
										Commercial Parking / Fleets
									</p>
								</div>
							</div>
						</div>
						<div className="new-line"></div>
						<div className="col-lg-12 col-md-6">
							<div className="icon-box">
								<div className="icon">
									<img
										src={businessline}
										width="200"
										height="150"
										alt=""
									/>
								</div>
								<div className="icon-content">
									<h1>
										<a href="">EVBox BusinessLine</a>
									</h1>
									<h2>
										Our Best-selling charging station for
										business locations
									</h2>
									<div className="new-line"></div>
									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										7.4 kw/11 kw /22 w
									</p>
									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										Workplaces / Retail & hospitality /
										Commercial Parking / Fleets
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="services" className="services">
				<div className="container">
					<div className="section-title">
						<h2>Business charging stations (DC)</h2>
					</div>
					<div className="row">
						<div className="col-lg-12 col-md-6">
							<div className="icon-box">
								<div className="icon">
									<img
										src={mod}
										width="200"
										height="150"
										alt=""
									></img>
								</div>
								<div className="icon-content">
									<h1>
										<a href="">EVBox Troniq Modular</a>
									</h1>
									<h2>
										The Powerful charging station that grows
										with your business
									</h2>
									<div className="new-line"></div>
									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										90 kw/ to 240 kw
									</p>
									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										Retail & hospitality / Parking
										Management / Gas station
									</p>
								</div>
							</div>
						</div>
						<div className="new-line"></div>
						<div className="col-lg-12 col-md-6">
							<div className="icon-box">
								<div className="icon">
									<img
										src={mod}
										width="200"
										height="150"
										alt=""
									></img>
								</div>
								<div className="icon-content">
									<h1>
										<a href="">EVBox Troniq High Power</a>
									</h1>
									<h2>
										A revenue powerhouse for short-stop
										locations
									</h2>
									<div className="new-line"></div>
									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										Up to 400 kw
									</p>
									<p>
										<strong>
											{" "}
											<i className="ri-check-double-line"></i>
										</strong>
										Fuel retails / CPOs
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="faq" className="faq section-bg">
				<div className="container" data-aos="fade-up">
					<div className="row justify-content-around gy-4">
						<div className="col-lg-6 d-flex flex-column justify-content-center">
							<div className="section-title">
								<h2>Charging management made easy</h2>
								<p>
									EVBox Everon lets you track, manage, and
									optimize electric vehicle charging and earn
									additional revenue—all from one place.
								</p>
							</div>

							<div className="faq-list">
								<ul>
									<li data-aos="fade-up">
										<i className="bx bx-help-circle icon-help"></i>{" "}
										<a
											data-bs-toggle="collapse"
											className="collapse"
											data-bs-target="#faq-list-1"
										>
											Generate revenue with public
											charging
											<i className="bx bx-chevron-down icon-show"></i>
											<i className="bx bx-chevron-up icon-close"></i>
										</a>
										<div
											id="faq-list-1"
											className="collapse show"
											data-bs-parent=".faq-list"
										>
											<p>
												See a clear return on your
												investment and earn extra
												revenue by setting fees for EV
												drivers using your charging
												stations.
											</p>
										</div>
									</li>

									<li data-aos="fade-up" data-aos-delay="100">
										<i className="bx bx-help-circle icon-help"></i>{" "}
										<a
											data-bs-toggle="collapse"
											data-bs-target="#faq-list-2"
											className="collapsed"
										>
											Manage stations from a single
											platform
											<i className="bx bx-chevron-down icon-show"></i>
											<i className="bx bx-chevron-up icon-close"></i>
										</a>
										<div
											id="faq-list-2"
											className="collapse"
											data-bs-parent=".faq-list"
										>
											<p>
												Control who has access to your
												stations, set customizable
												charging fees, and grant users
												access, all from one easy-to-use
												platform.
											</p>
										</div>
									</li>

									<li data-aos="fade-up" data-aos-delay="200">
										<i className="bx bx-help-circle icon-help"></i>{" "}
										<a
											data-bs-toggle="collapse"
											data-bs-target="#faq-list-3"
											className="collapsed"
										>
											Access advanced charging insights
											<i className="bx bx-chevron-down icon-show"></i>
											<i className="bx bx-chevron-up icon-close"></i>
										</a>
										<div
											id="faq-list-3"
											className="collapse"
											data-bs-parent=".faq-list"
										>
											<p>
												Get real-time visibility into
												charging behavior and energy
												consumption to help you make
												better business decisions.
											</p>
										</div>
									</li>

									<li data-aos="fade-up" data-aos-delay="300">
										<i className="bx bx-help-circle icon-help"></i>
										<a
											data-bs-toggle="collapse"
											data-bs-target="#faq-list-4"
											className="collapsed"
										>
											Automate your payment flows
											<i className="bx bx-chevron-down icon-show"></i>
											<i className="bx bx-chevron-up icon-close"></i>
										</a>
										<div
											id="faq-list-4"
											className="collapse"
											data-bs-parent=".faq-list"
										>
											<p>
												We've automated the entire
												settlement and reimbursement
												process so settling transactions
												with employees and visitors is
												quick and hassle-free.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div
							className="col-lg-6 img-bg"
							style={{ background: `url(${accordingSoftware})` }}
							data-aos="zoom-in"
							data-aos-delay="100"
						></div>
					</div>
				</div>
			</section>
			<section id="about" className="about">
				<div className="container" data-aos="fade-up">
					<div className="section-title">
						<h2>Benefits of business charging</h2>
					</div>
					<div className="row content">
						<div className="col-lg-6">
							<strong>
								{" "}
								<i className="ri-check-double-line"></i>Easy{" "}
							</strong>
							<p>
								Keep your employees and customers happy by
								offering a seamless charging experience that’s
								easy to install, use, and maintain.
							</p>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<strong>
								{" "}
								<i className="ri-check-double-line"></i>Flexible{" "}
							</strong>
							<p>
								Enable drivers to charge regardless of the
								network or vehicle thanks to charging stations
								built on open standards that are compatible with
								every EV.
							</p>
						</div>
					</div>
					<div className="new-line"></div>
					<div className="row content">
						<div className="col-lg-6">
							<strong>
								{" "}
								<i className="ri-check-double-line"></i>
								Profitable{" "}
							</strong>
							<p>
								Drive revenue from EV chargers by setting
								charging fees or cross-selling other products
								and services while your customers charge.
							</p>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<strong>
								{" "}
								<i className="ri-check-double-line"></i>
								Reliable{" "}
							</strong>
							<p>
								EV chargers for business are designed to be
								weatherproof, shockproof, and can withstand 24/7
								charging.
							</p>
						</div>
					</div>

					<div className="new-line"></div>
					<div className="row content">
						<div className="col-lg-6">
							<strong>
								{" "}
								<i className="ri-check-double-line"></i>
								Scalable{" "}
							</strong>
							<p>
								Thanks to the built-in smart charging
								functionalities, it’s easy to scale up the
								number of EV chargers at your location as your
								business grows.
							</p>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<strong>
								{" "}
								<i className="ri-check-double-line"></i>
								Customizable{" "}
							</strong>
							<p>
								Improve your corporate image and showcase your
								commitment to sustainability by adding your
								brand colors or logo to your stations.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="faq" className="faq section-bg">
				<div className="container">
					<div className="section-title">
						<h2>Frequently Asked Questions</h2>
						<p>
							Magnam dolores commodi suscipit. Necessitatibus eius
							consequatur ex aliquid fuga eum quidem. Sit sint
							consectetur velit. Quisquam quos quisquam
							cupiditate. Et nemo qui impedit suscipit alias ea.
							Quia fugiat sit in iste officiis commodi quidem hic
							quas.
						</p>
					</div>

					<div className="faq-list">
						<ul>
							<li data-aos="fade-up">
								<i className="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									className="collapse"
									data-bs-target="#faq-list-1"
								>
									What are the benefits of EV charging
									stations for business?
									<i className="bx bx-chevron-down icon-show"></i>
									<i className="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-1"
									className="collapse show"
									data-bs-parent=".faq-list"
								>
									<p>
										There are many ways EV charging can
										enhance your business:
									</p>
									<p>
										<strong>
											1. Keep your employees happy
										</strong>
									</p>
									<p>
										Demonstrate your commitment to your
										employees by offering them the
										convenience of charging at work. By
										meeting their needs, you can boost
										employee satisfaction, productivity, and
										retention.
									</p>
									<p>
										<strong>
											2. Attract customers who stay longer
											and spend more
										</strong>
									</p>
									<p>
										There's no shortage of EV drivers
										looking for a convenient place to
										charge. By offering charging on-site,
										you can attract customers by making your
										location visible on public charging
										maps. What's more, you can also
										encourage these customers to stay longer
										and spend more on products and services
										while they wait.
									</p>
									<p>
										<strong>
											3. Generate consistent revenue
										</strong>
									</p>
									<p>
										Earn hassle-free and consistent revenue
										by setting charging fees for your
										EV-driving customers and visitors.
									</p>
									<p>
										<strong>
											4. Reach your sustainability goals
										</strong>
									</p>
									<p>
										Sustainability is top-of-mind for
										consumers, with many going out of their
										way to choose the most environmentally
										friendly option. Enhance your
										reputation, capture this demographic,
										and achieve your sustainability targets
										by offering this green amenity.
									</p>
									<p>
										<strong>
											5. Get ahead of your competition
										</strong>
									</p>
									<p>
										Soon, every business with parking will
										need to install EV chargers to stay
										relevant and meet the needs of their
										customers. Gain a competitive edge and
										future-proof your business by offering
										this essential amenity today.
									</p>
								</div>
							</li>

							<li data-aos="fade-up" data-aos-delay="100">
								<i className="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-2"
									className="collapsed"
								>
									What EV charging incentives exist for
									businesses?
									<i className="bx bx-chevron-down icon-show"></i>
									<i className="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-2"
									className="collapse"
									data-bs-parent=".faq-list"
								>
									<p>
										There are many incentives available to
										help your business save thousands on the
										cost of charging stations and the costs
										to prepare your location. In many cases,
										these incentives can get you everything
										you need for free.
									</p>
									<p>
										Want to find out more about the
										incentives in your region? Check out our
										blog post EV charging infrastructure
										incentives in Europe for more
										information.
									</p>
								</div>
							</li>

							<li data-aos="fade-up" data-aos-delay="200">
								<i className="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-3"
									className="collapsed"
								>
									How do I set up EV charging stations for
									parking lots?
									<i className="bx bx-chevron-down icon-show"></i>
									<i className="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-3"
									className="collapse"
									data-bs-parent=".faq-list"
								>
									<p>
										EVBox offers the full package: hardware,
										software, and services so you have
										everything you need to get started. We
										work with you to find the right model
										for your commercial parking business. Do
										you want to fully integrate EV charging
										into your current customer journey? We
										offer a flexible solution that
										integrates into your interfaces. Is your
										goal only to offer EV charging in
										parallel with parking? We have a fully
										managed solution for that, too.
									</p>
								</div>
							</li>

							<li data-aos="fade-up" data-aos-delay="300">
								<i className="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-4"
									className="collapsed"
								>
									What is the best electric car charging
									station for my business?
									<i className="bx bx-chevron-down icon-show"></i>
									<i className="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-4"
									className="collapse"
									data-bs-parent=".faq-list"
								>
									<p>
										Not all charging stations are the same,
										and it’s important to understand what
										key features to be aware of before
										making a purchase. The stations you
										choose will be a reflection of your
										brand, so it’s a good idea to pick
										something reliable, accessible, and
										intelligent.
									</p>
									<p>
										All EVBox charging stations are designed
										with those criteria in mind. With a
										3-year extendable warranty to wheelchair
										accessibility and smart charging
										functionalities, we offer flexible and
										scalable charging solutions for every
										business type. With 10+ years of
										experience developing charging solutions
										for businesses like yours, you're in
										good hands when you choose EVBox.
									</p>
								</div>
							</li>

							<li data-aos="fade-up" data-aos-delay="400">
								<i className="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-5"
									className="collapsed"
								>
									Are EV charging stations profitable?
									<i className="bx bx-chevron-down icon-show"></i>
									<i className="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-5"
									className="collapse"
									data-bs-parent=".faq-list"
								>
									<p>
										Here are just some of the ways your
										business can profit from EV charging.
									</p>
									<p>
										<strong>
											1. Set charging fees for customers
										</strong>
									</p>
									<p>
										The easiest way to drive consistent
										revenue with EV charging is by setting
										charging fees. As the charging station
										owner, you can set your own fees and
										adjust them at any time. This may
										include a fixed session start or
										connection fee and a variable rate for
										the energy used. You also have the
										freedom to define your own mark-up.
									</p>

									<p>
										<strong>
											2. Cross-sell other products and
											services
										</strong>
									</p>
									<p>
										When your customers stop to charge,
										there's an obvious opportunity to
										cross-sell other products and services.
										By providing your customers with a
										convenient charging experience, you also
										encourage them to browse and spend more
										on other items while they wait.
									</p>

									<p>
										<strong>
											3. Attract high-value customers
										</strong>
									</p>
									<p>
										With EV adoption growing fast, there's
										no shortage of EV drivers looking for a
										convenient place to charge. Transforming
										your business into an EV charging
										destination allows you to capture this
										growing market and attract new
										customers. Once you have EV chargers
										installed, your location will become
										visible on popular public charging maps.
										This boosts your brand visibility
										allowing drivers to find your location.
										Plus, did you know that EV drivers are
										nearly twice as wealthy as the average
										American? This means your EV-driving
										customers will likely spend more on
										higher-end items every time they visit.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section id="team" className="team section-bg">
				<div className="container">
					<div className="section-title">
						<h2>Discover more about business charging</h2>
						<p>Curious to learn more?</p>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={evCharger}
										className="img-fluid"
										alt=""
									></img>
									<div className="social">
										<a href="">
											<i className="bi bi-twitter"></i>
										</a>
										<a href="">
											<i className="bi bi-facebook"></i>
										</a>
										<a href="">
											<i className="bi bi-instagram"></i>
										</a>
										<a href="">
											<i className="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
								<div className="member-info">
									<h4>
										The complete workplace EV charging guide
									</h4>
									<a href="#" className="btn-learn-more">
										Keep Reading
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={completeWorkplace}
										className="img-fluid"
										alt=""
									></img>
									<div className="social">
										<a href="">
											<i className="bi bi-twitter"></i>
										</a>
										<a href="">
											<i className="bi bi-facebook"></i>
										</a>
										<a href="">
											<i className="bi bi-instagram"></i>
										</a>
										<a href="">
											<i className="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
								<div className="member-info">
									<h4>
										Why more offices should have EV chargers
									</h4>
									<a href="#" className="cta-btn">
										Keep Reading
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={charging}
										className="img-fluid"
										alt=""
									></img>
									<div className="social">
										<a href="">
											<i className="bi bi-twitter"></i>
										</a>
										<a href="">
											<i className="bi bi-facebook"></i>
										</a>
										<a href="">
											<i className="bi bi-instagram"></i>
										</a>
										<a href="">
											<i className="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
								<div className="member-info">
									<h4>How to make money with EV charging</h4>
									<a href="#" className="cta-btn">
										Keep Reading
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="hero" className="Businessheroimg1">
				<div className="hero-container">
					<h1>Ready to charge up your business?</h1>
					<a href="#" className="btn-get-started scrollto">
						Inquire now
					</a>
				</div>
			</section>
		</main>
	);
};

export default BusinessContent;
