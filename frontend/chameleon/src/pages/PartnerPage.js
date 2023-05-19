import helpCenter2 from "./img/help_center2.c1827594.jpg";
import partnerPortal2 from "./img/partner_portal2.c1827594.jpg";
import marketingMaterials2 from "./img/marketing_materials2.c1827594.jpg";
import client1Image from "./img/clients/client-1.png";
import client2Image from "./img/clients/client-2.png";
import client3Image from "./img/clients/client-3.png";
import client4Image from "./img/clients/client-4.png";
import client5Image from "./img/clients/client-5.png";
import client6Image from "./img/clients/client-6.png";

import slider1 from "./img/quote_catec.8779c053.a81bfeb6.png";
import slider2 from "./img/quote_tmh.8779c053.a81bfeb6.png";

import slider3 from "./img/quote_scania.8779c053.a81bfeb6.png";

import Carousel from "react-bootstrap/Carousel";

const PartnerPage = () => {
	return (
		<main id="main">
			<section id="clients" className="clients section-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
							<img
								src={client1Image}
								className="img-fluid"
								alt=""
							></img>
						</div>

						<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
							<img
								src={client2Image}
								className="img-fluid"
								alt=""
							></img>
						</div>

						<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
							<img
								src={client3Image}
								className="img-fluid"
								alt=""
							></img>
						</div>

						<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
							<img
								src={client4Image}
								className="img-fluid"
								alt=""
							></img>
						</div>

						<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
							<img
								src={client5Image}
								className="img-fluid"
								alt=""
							></img>
						</div>

						<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
							<img
								src={client6Image}
								className="img-fluid"
								alt=""
							></img>
						</div>
					</div>
				</div>
			</section>
			<section id="cta" className="cta">
				<div className="container">
					<div className="text-center">
						<h4>Let's grow your business</h4>
						<h3>Building the future together</h3>
						<p>
							We provide exclusive support, resources, training,
							and connections to help our partners gain a
							competitive advantage in the EV market. Our partners
							allow us to deliver our products wherever and
							whenever EV charging is needed, and reach markets
							and verticals that we couldn’t reach on our own.
							Working together, we're improving the availability
							and accessibility of EV charging infrastructure
							across the world.
						</p>
					</div>
				</div>
			</section>
			<section id="team" className="team section-bg">
				<div className="container">
					<div className="section-title">
						<h2>
							Get quick access to the tools you need to succeed
						</h2>
						<p>Curious to learn more?</p>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={partnerPortal2}
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
									<h4>Partner Portal</h4>
									<p>
										Access the tools, technical support, and
										resources you need to manage your sales
										effectively, and grow your business.
									</p>
									<a href="#" className="btn-learn-more">
										Login to the Partner Portal
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={helpCenter2}
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
									<h4>Help Center</h4>
									<p>
										From how-to videos, to step-by-step
										guides, find detailed answers to
										frequently asked questions about
										charging with EVBox.
									</p>
									<a href="#" className="cta-btn">
										Visit the Help Center
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={marketingMaterials2}
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
									<h4>Marketing material</h4>
									<p>
										Browse our digital marketing library to
										view and download ready-made product
										images, videos, and manuals.
									</p>
									<a href="#" className="cta-btn">
										Explore Bynder
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="cta" className="cta">
				<div className="container">
					<div className="text-center">
						<h3>Want to become a certified EVBox installer?</h3>
						<p>
							We offer complete online and on-site training
							covering our AC and DC products to help you become a
							fully certified installer, trainer, or technician.
							Get all the information you need to efficiently and
							accurately install EVBox charging stations in your
							region.
						</p>
						<a className="cta-btn" href="#">
							Become an installer
						</a>
					</div>
				</div>
			</section>

			<section id="testimonials" class="testimonials section-bg">
				<div class="container">
					<div class="section-title">
						<h2>What our partners say about us</h2>
					</div>

					<div
						class="testimonials-slider swiper"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div class="swiper-wrapper">
							<Carousel>
								<Carousel.Item>
									<img
										src={slider1}
										className="testimonial-img"
										alt=""
									></img>

									<div
										class="swiper-slide"
										style={{
											width: "60%",
											float: "right",
											marginTop: "10%",
										}}
									>
										<div class="testimonial-item">
											<p>
												<i class="bx bxs-quote-alt-left quote-icon-left"></i>
												“EVBox’s Partner Program helped
												us become experts in supplying
												EVSE solutions. This allowed us
												to go to market with confidence,
												build our sales funnel, increase
												revenue, and produce an overall
												increased ROI.”
												<i class="bx bxs-quote-alt-right quote-icon-right"></i>
											</p>
										</div>
									</div>
								</Carousel.Item>

								<Carousel.Item>
									<img
										src={slider2}
										className="testimonial-img"
										alt=""
									></img>

									<div
										class="swiper-slide"
										style={{
											width: "60%",
											float: "right",
											marginTop: "10%",
										}}
									>
										<div class="testimonial-item">
											<p>
												<i class="bx bxs-quote-alt-left quote-icon-left"></i>
												“Together with EVBox, we can
												offer our customers the
												one-stop-shop solution they are
												looking for when transitioning
												to electric mobility.”
												<i class="bx bxs-quote-alt-right quote-icon-right"></i>
											</p>
										</div>
									</div>
								</Carousel.Item>

								<Carousel.Item>
									<img
										src={slider3}
										className="testimonial-img"
										alt=""
									></img>

									<div
										class="swiper-slide"
										style={{
											width: "60%",
											float: "right",
											marginTop: "10%",
										}}
									>
										<div class="testimonial-item">
											<p>
												<i class="bx bxs-quote-alt-left quote-icon-left"></i>
												"Complete charging solutions
												encompass energy supply,
												hardware, and software as well
												as installation, maintenance,
												and other customer-specific
												services. Our partnership with
												ENGIE and EVBox Group simplifies
												our customers' transition to an
												increasingly electrified fleet
												and towards more sustainable
												transport."
												<i class="bx bxs-quote-alt-right quote-icon-right"></i>
											</p>
										</div>
									</div>
								</Carousel.Item>
							</Carousel>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
			</section>
			<section id="contact" class="contact">
				<div class="container">
					<div class="section-title">
						<h2>Ready to join forces?</h2>
						<p>
							We’re always looking for best-in-class partners to
							help us meet the growing demand for EV charging
							infrastructure.
						</p>
					</div>

					<div></div>

					<div class="row mt-5">
						<div class="col-lg-4">
							<div class="info">
								<div class="address">
									<i class="bi bi-geo-alt"></i>
									<h4>Location:</h4>
									<p>A108 Adam Street, New York, NY 535022</p>
								</div>

								<div class="email">
									<i class="bi bi-envelope"></i>
									<h4>Email:</h4>
									<p>info@example.com</p>
								</div>

								<div class="phone">
									<i class="bi bi-phone"></i>
									<h4>Call:</h4>
									<p>+1 5589 55488 55s</p>
								</div>
							</div>
						</div>

						<div class="col-lg-6 mt-5 mt-lg-0">
							<form
								action="forms/contact.php"
								method="post"
								role="form"
								class="php-email-form"
							>
								<div class="row">
									<div class="col-md-6 form-group">
										<input
											type="text"
											name="fname"
											class="form-control"
											id="fname"
											placeholder="First Name"
											required
										/>
									</div>
									<div class="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="text"
											class="form-control"
											name="lname"
											id="lname"
											placeholder="Last Name"
											required
										/>
									</div>
								</div>
								<div class="form-group mt-3">
									<input
										type="text"
										class="form-control"
										name="companyName"
										id="companyName"
										placeholder="Company Name"
										required
									/>
								</div>
								<div class="row">
									<div class="col-md-6 form-group">
										<input
											type="email"
											name="email"
											class="form-control"
											id="email"
											placeholder="Email"
											required
										/>
									</div>
									<div class="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="number"
											class="form-control"
											name="mobile"
											id="mobile"
											placeholder="Mobile"
											required
										/>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6 form-group">
										<input
											type="number"
											name="no_employee"
											class="form-control"
											id="no_employee"
											placeholder="City"
											required
										/>
									</div>
									<div class="col-md-6 form-group mt-3 mt-md-0">
										<select
											class="form-control"
											name="country"
											id="country"
										>
											<option>Country</option>
											<option>Others</option>
										</select>
									</div>
								</div>

								<div class="form-group mt-3">
									<select
										class="form-control"
										name="hear_about_us"
										id="hear_about_us"
									>
										<option>
											What type of partnership are you
											looking for? (optional)
										</option>
										<option>Others</option>
									</select>
								</div>

								<div class="row">
									<div class="col-md-6 form-group">
										<input
											type="number"
											name="no_employee"
											class="form-control"
											id="no_employee"
											placeholder="Number of employees"
											required
										/>
									</div>
									<div class="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="number"
											class="form-control"
											name="annual_revenue"
											id="annual_revenue"
											placeholder="Approx. annual revenue"
											required
										/>
									</div>
								</div>

								<div class="form-group mt-3">
									<select
										class="form-control"
										name="hear_about_us"
										id="hear_about_us"
									>
										<option>
											Do you sell EV products or services?
										</option>
										<option>Others</option>
									</select>
								</div>
								<div class="form-group mt-3">
									<input
										type="text"
										class="form-control"
										name="EVProducts"
										id="EVProducts"
										placeholder="What EV products do you sell?"
									/>
								</div>
								<div class="form-group mt-3">
									<select
										class="form-control"
										name="hear_about_us"
										id="hear_about_us"
									>
										<option>
											Do you have any current or upcoming
											EV business opportunities?
										</option>
										<option>Others</option>
									</select>
								</div>
								<div class="form-group mt-3">
									<select
										class="form-control"
										name="hear_about_us"
										id="hear_about_us"
									>
										<option>
											Can you perform installations?
											(optional)
										</option>
										<option>Others</option>
									</select>
								</div>
								<div class="form-group mt-3">
									<select
										class="form-control"
										name="hear_about_us"
										id="hear_about_us"
									>
										<option>
											Do you have a support call center?
											(optional)
										</option>
										<option>Others</option>
									</select>
								</div>
								<div class="form-group mt-3">
									<select
										class="form-control"
										name="hear_about_us"
										id="hear_about_us"
									>
										<option>
											Do you have experience in the
											electric mobility industry?
											(optional)
										</option>
										<option>Others</option>
									</select>
								</div>
								<div class="form-group mt-3">
									<textarea
										class="form-control"
										name="info"
										rows="5"
										placeholder="Introduce yourself(optional)"
									></textarea>
								</div>
								<div class="form-group mt-3">
									<select
										class="form-control"
										name="hear_about_us"
										id="hear_about_us"
									>
										<option>
											How did you hear about us
											?(optional)
										</option>
										<option>Others</option>
									</select>
								</div>
								<div class="my-3">
									<div class="loading">Loading</div>
									<div class="error-message"></div>
									<div class="sent-message">
										Your message has been sent. Thank you!
									</div>
								</div>
								<div class="text-center">
									<button type="submit">submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default PartnerPage;
