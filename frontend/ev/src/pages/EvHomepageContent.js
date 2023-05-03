import liviqoCable from "./img/Desktop.8ab27ad8.side_livo_cable.webp";
import elviCable from "./img/Desktop.8ab27ad8.side_elvi_cable.webp";
import accordingSoftware from "./img/Desktop.297bcd05.layout_accordion_software_app.webp";
import charging from "./img/article_everything-you-should-know.webp";
import evCharger from "./img/Desktop.91cd19f7.article_what_is_smart_ev_charging.webp";
import completeWorkplace from "./img/Desktop.36cd176f.layout_columns_50_50_elvi_charging_made_easy.webp";
import appStore from "./img/appStore.png";
import googleStore from "./img/googleplay.png";

const EvHomepageContent = () => {
	return (
		<main id="main">
			<div className="new-line"></div>

			<section id="services" class="services">
				<div class="container">
					<div class="section-title">
						<h2></h2>
					</div>
					<div class="row">
						<div class="col-lg-12 col-md-6">
							<div class="icon-box">
								<div class="icon">
									<img
										src={liviqoCable}
										width="200"
										height="150"
										alt=""
									></img>
								</div>
								<div class="icon-content">
									<h1>
										<a href="">EVBox Livo</a>
									</h1>
									<h2>
										Home charging that's fit for the future
									</h2>
									<div className="new-line"></div>
									<p>
										<strong>
											{" "}
											<i class="ri-check-double-line"></i>
										</strong>
										74 kw/ 11 Kw /22 kw
									</p>
									<p>
										<strong>
											{" "}
											<i class="ri-check-double-line"></i>
										</strong>
										Private residential
									</p>
								</div>
							</div>
						</div>
						<div className="new-line"></div>
						<div class="col-lg-12 col-md-6">
							<div class="icon-box">
								<div class="icon">
									<img
										src={elviCable}
										width="200"
										height="150"
										alt=""
									></img>
								</div>
								<div class="icon-content">
									<h1>
										<a href="">EVBox Elvi</a>
									</h1>
									<h2>
										Versatile home charging for Private and
										lease EVs
									</h2>
									<div className="new-line"></div>
									<p>
										<strong>
											{" "}
											<i class="ri-check-double-line"></i>
										</strong>
										7.4kw/ 11kw/ 22kw
									</p>
									<p>
										<strong>
											{" "}
											<i class="ri-check-double-line"></i>
										</strong>
										Private residential / Company cars
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="faq" class="faq section-bg">
				<div class="container" data-aos="fade-up">
					<div class="row justify-content-around gy-4">
						<div class="col-lg-6 d-flex flex-column justify-content-center">
							<div class="section-title">
								<h2>
									Unlock the full potential of your charging
									station
								</h2>
								<p>
									Easy, intelligent, and insightful. EVBox
									Everon lets you track, manage, and optimize
									electric vehicle charging from the palm of
									your hand.
								</p>
							</div>
							<p>
								<strong>
									{" "}
									<i class="ri-check-double-line"></i>
								</strong>
								Manage your account, card, and stations remotely
							</p>
							<p>
								<strong>
									{" "}
									<i class="ri-check-double-line"></i>
								</strong>
								Control station access via RFID charge card or
								app
							</p>
							<p>
								<strong>
									{" "}
									<i class="ri-check-double-line"></i>
								</strong>
								Gain valuable insights into your charging
								sessions
							</p>
							<a href="#about" class="btn-ev">
								Explore our software
							</a>
							<div className="new-line"></div>
							<div className="new-line"></div>
							<img
								src={appStore}
								width="150"
								height="50"
								alt=""
							></img>

							<img
								src={googleStore}
								width="160"
								height="80"
								alt=""
							></img>
						</div>

						<div
							class="col-lg-6 img-bg"
							style={{ background: `url(${accordingSoftware})` }}
							data-aos="zoom-in"
							data-aos-delay="100"
						></div>
					</div>
				</div>
			</section>
			<section id="about" class="about">
				<div class="container" data-aos="fade-up">
					<div class="section-title">
						<h2>Benefits of home charging</h2>
					</div>
					<div class="row content">
						<div class="col-lg-6">
							<strong>
								{" "}
								<i class="ri-check-double-line"></i>
								Cost efficient
							</strong>
							<p>
								Compared to buying your electricity via a third
								party, you can take advantage of the relatively
								cheap electricity from your residential grid.
							</p>
						</div>
						<div class="col-lg-6 pt-4 pt-lg-0">
							<strong>
								{" "}
								<i class="ri-check-double-line"></i>
								Remote control
							</strong>
							<p>
								With smart charging features like remote
								control, you can stop and start charging your
								vehicle with the click of a button.
							</p>
						</div>
					</div>
					<div className="new-line"></div>
					<div class="row content">
						<div class="col-lg-6">
							<strong>
								{" "}
								<i class="ri-check-double-line"></i>
								Sustainable
							</strong>
							<p>
								Connect your residential charging station to a
								solar panel or 100 percent renewable energy for
								emission-free driving.
							</p>
						</div>
						<div class="col-lg-6 pt-4 pt-lg-0">
							<strong>
								{" "}
								<i class="ri-check-double-line"></i>
								Durable
							</strong>
							<p>
								Residential charging stations come in a range of
								shapes and sizes and are designed to withstand
								all weather conditions.
							</p>
						</div>
					</div>

					<div className="new-line"></div>
					<div class="row content">
						<div class="col-lg-6">
							<strong>
								{" "}
								<i class="ri-check-double-line"></i>
								Convenient
							</strong>
							<p>
								Because you can charge at home, you don’t have
								to go out of your way to charge up on the way
								home.
							</p>
						</div>
						<div class="col-lg-6 pt-4 pt-lg-0">
							<strong>
								{" "}
								<i class="ri-check-double-line"></i>
								Versatile
							</strong>
							<p>
								With power outputs between 3.7 kW and 22 kW,
								home charging stations are made to suit any
								passenger EV.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="faq" class="faq section-bg">
				<div class="container">
					<div class="section-title">
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

					<div class="faq-list">
						<ul>
							<li data-aos="fade-up">
								<i class="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									class="collapse"
									data-bs-target="#faq-list-1"
								>
									What are the benefits of EV charging
									stations for business?
									<i class="bx bx-chevron-down icon-show"></i>
									<i class="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-1"
									class="collapse show"
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
								<i class="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-2"
									class="collapsed"
								>
									What EV charging incentives exist for
									businesses?
									<i class="bx bx-chevron-down icon-show"></i>
									<i class="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-2"
									class="collapse"
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
								<i class="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-3"
									class="collapsed"
								>
									How do I set up EV charging stations for
									parking lots?
									<i class="bx bx-chevron-down icon-show"></i>
									<i class="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-3"
									class="collapse"
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
								<i class="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-4"
									class="collapsed"
								>
									What is the best electric car charging
									station for my business?
									<i class="bx bx-chevron-down icon-show"></i>
									<i class="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-4"
									class="collapse"
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
								<i class="bx bx-help-circle icon-help"></i>{" "}
								<a
									data-bs-toggle="collapse"
									data-bs-target="#faq-list-5"
									class="collapsed"
								>
									Are EV charging stations profitable?
									<i class="bx bx-chevron-down icon-show"></i>
									<i class="bx bx-chevron-up icon-close"></i>
								</a>
								<div
									id="faq-list-5"
									class="collapse"
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
			<section id="team" class="team section-bg">
				<div class="container">
					<div class="section-title">
						<h2>Discover more about home charging</h2>
						<p>Curious to learn more?</p>
					</div>

					<div class="row">
						<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div class="member">
								<div class="member-img">
									<img
										src={evCharger}
										class="img-fluid"
										alt=""
									></img>
									<div class="social">
										<a href="">
											<i class="bi bi-twitter"></i>
										</a>
										<a href="">
											<i class="bi bi-facebook"></i>
										</a>
										<a href="">
											<i class="bi bi-instagram"></i>
										</a>
										<a href="">
											<i class="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
								<div class="member-info">
									<h4>
										Everything you need to know about home
										charging
									</h4>
									<a href="#" class="btn-learn-more">
										Keep Reading
									</a>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div class="member">
								<div class="member-img">
									<img
										src={completeWorkplace}
										class="img-fluid"
										alt=""
									></img>
									<div class="social">
										<a href="">
											<i class="bi bi-twitter"></i>
										</a>
										<a href="">
											<i class="bi bi-facebook"></i>
										</a>
										<a href="">
											<i class="bi bi-instagram"></i>
										</a>
										<a href="">
											<i class="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
								<div class="member-info">
									<h4>
										4 things people consider before buying
										an EV home charger
									</h4>
									<a href="#" class="cta-btn">
										Keep Reading
									</a>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div class="member">
								<div class="member-img">
									<img
										src={charging}
										class="img-fluid"
										alt=""
									></img>
									<div class="social">
										<a href="">
											<i class="bi bi-twitter"></i>
										</a>
										<a href="">
											<i class="bi bi-facebook"></i>
										</a>
										<a href="">
											<i class="bi bi-instagram"></i>
										</a>
										<a href="">
											<i class="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
								<div class="member-info">
									<h4>
										Do you need a charging station for an
										electric car?
									</h4>
									<a href="#" class="cta-btn">
										Keep Reading
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="hero" class="Businessheroimg1">
				<div class="hero-container">
					<h1>Ready to kickstart your home charging journey?</h1>
					<a href="#about" class="btn-get-started scrollto">
						Inquire now
					</a>
				</div>
			</section>
		</main>
	);
};

export default EvHomepageContent;
