import client1Image from "./img/clients/client-1.png";
import client2Image from "./img/clients/client-2.png";
import client3Image from "./img/clients/client-3.png";
import client4Image from "./img/clients/client-4.png";
import client5Image from "./img/clients/client-5.png";
import client6Image from "./img/clients/client-6.png";
import parterImage from "./img/Desktop.7eb55501.layout_50_50_partner_with_us.webp";
import parterImageNorway from "./img/Desktop.40df9e96.testimonials_troniq_modular_norway.webp";
import content_tiles_blog from "./img/Desktop.8670c7d7.content_tiles_blog.webp";
import content_tiles_newsroom from "./img/Desktop.717e55e6.content_tiles_newsroom.webp";
import content_tiles_careers from "./img/Desktop.e9ed7c72.content_tiles_careers.webp";
import CountUp from "react-countup";

const MainContent = () => {
	return (
		<main id="main">
			<section id="clients" className="clients section-bg">
				<div className="container">
					<div className="section-title">
						<h2>Trusted by 20,000+ customers</h2>
					</div>
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
			<section id="hero" className="heroimg">
				<div className="hero-container">
					<h1>Embracing electric mobility has never been easier</h1>
					<a href="#" className="btn-get-started scrollto">
						Become a destination of choice for EV drivers with
						intuitive charging solutions that match your brand and
						location.
					</a>
				</div>
			</section>
			<section id="about" className="about">
				<div className="container">
					<div className="section-title"></div>
				</div>
			</section>

			<section id="counts" className="counts">
				<div className="container">
					<div className="row counters">
						<div className="col-lg-3 col-6 text-center">
							<CountUp end={232} suffix="K" />
							<p>Clients</p>
						</div>

						<div className="col-lg-3 col-6 text-center">
							<CountUp end={521} suffix="K" />
							<p>Projects</p>
						</div>

						<div className="col-lg-3 col-6 text-center">
							<CountUp end={1463} suffix="K" />
							<p>Hours Of Support</p>
						</div>

						<div className="col-lg-3 col-6 text-center">
							<CountUp end={15} suffix="K" />
							<p>Hard Workers</p>
						</div>
					</div>
				</div>
			</section>
			<section id="about" className="about">
				<div className="container">
					<div className="section-title">
						<h2>
							Building a world where electric mobility is the new
							normal.
						</h2>
					</div>
				</div>
			</section>
			<section id="alt-services-2" className="alt-services section-bg">
				<div className="container" data-aos="fade-up">
					<div className="row justify-content-around gy-4">
						<div className="col-lg-5 d-flex flex-column justify-content-center">
							<h3>Shaping the future, together</h3>
							<p>
								Our integrated charging solutions, industry
								expertise, and global network empower resellers,
								distributors, installers, and OEMs to expand
								their offerings and stay ahead of the
								competition.
							</p>

							<div
								className="icon-box d-flex position-relative"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<i className="bi bi-easel flex-shrink-0"></i>
								<div>
									<h4>
										<a href="" className="stretched-link">
											Lorem Ipsum
										</a>
									</h4>
									<p>
										Voluptatum deleniti atque corrupti quos
										dolores et quas molestias excepturi sint
										occaecati cupiditate non provident
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
											Nemo Enim
										</a>
									</h4>
									<p>
										At vero eos et accusamus et iusto odio
										dignissimos ducimus qui blanditiis
										praesentium voluptatum deleniti atque
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
											Dine Pad
										</a>
									</h4>
									<p>
										Explicabo est voluptatum asperiores
										consequatur magnam. Et veritatis odit.
										Sunt aut deserunt minus aut eligendi
										omnis
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
											Tride clov
										</a>
									</h4>
									<p>
										Est voluptatem labore deleniti quis a
										delectus et. Saepe dolorem libero sit
										non aspernatur odit amet. Et eligendi
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-lg-6 img-bg"
							style={{ background: `url(${parterImage})` }}
							data-aos="zoom-in"
							data-aos-delay="100"
						></div>
					</div>
				</div>
			</section>
			<section id="alt-services" className="alt-services">
				<div className="container" data-aos="fade-up">
					<div className="row justify-content-around gy-4">
						<div
							className="col-lg-6 img-bg"
							style={{ background: `url(${parterImageNorway})` }}
							data-aos="zoom-in"
							data-aos-delay="100"
						></div>

						<div className="col-lg-5 d-flex flex-column justify-content-center">
							<h3>Meet our customers driving change</h3>
							<p>
								“As a real estate company, it is important for
								us to actively facilitate the change toward a
								greener future, and make attractive locations
								for our customers and tenants. When choosing a
								vendor for our charging initiative, it was key
								that the vendor must have a robust product and
								share the same enthusiasm and passion for
								sustainability—Chameleon checked all boxes.”
							</p>

							<div
								className="icon-box d-flex position-relative"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<i className="bi bi-easel flex-shrink-0"></i>
								<div>
									<h4>
										<a href="" className="stretched-link">
											Lorem Ipsum
										</a>
									</h4>
									<p>
										Voluptatum deleniti atque corrupti quos
										dolores et quas molestias excepturi sint
										occaecati cupiditate non provident
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
											Nemo Enim
										</a>
									</h4>
									<p>
										At vero eos et accusamus et iusto odio
										dignissimos ducimus qui blanditiis
										praesentium voluptatum deleniti atque
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
											Dine Pad
										</a>
									</h4>
									<p>
										Explicabo est voluptatum asperiores
										consequatur magnam. Et veritatis odit.
										Sunt aut deserunt minus aut eligendi
										omnis
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
											Tride clov
										</a>
									</h4>
									<p>
										Est voluptatem labore deleniti quis a
										delectus et. Saepe dolorem libero sit
										non aspernatur odit amet. Et eligendi
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="cta" className="cta">
				<div className="container">
					<div className="text-center">
						<h3>Talk to an expert</h3>
						<p>
							Start your EV charging journey with Chameleon today.
						</p>
						<a className="cta-btn" href="#">
							Talk to an expert
						</a>
					</div>
				</div>
			</section>
			<section id="team" className="team section-bg">
				<div className="container">
					<div className="section-title">
						<h2>Curious to learn more?</h2>
						<p>Dive deeper into the world of Chameleon</p>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={content_tiles_blog}
										className="img-fluid"
										alt=""
									/>
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
									<h4>Blog</h4>
									<span>
										Discover the latest trends, best
										practices, and industry insights on EV
										charging and beyond.
									</span>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={content_tiles_newsroom}
										className="img-fluid"
										alt=""
									/>
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
									<h4>Newsroom</h4>
									<span>
										Get the inside scoop on the latest news
										and announcements from Chameleon.
									</span>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<div className="member-img">
									<img
										src={content_tiles_careers}
										className="img-fluid"
										alt=""
									/>
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
									<h4>Careers</h4>
									<span>
										Join our team driving positive change
										towards a more sustainable future.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="hero">
				<div className="hero-container">
					<h1>Kickstart every day with confidence</h1>
					<a href="#" className="btn-get-started scrollto">
						Power up in style with our easy-to-use home charging
						solutions that are built to last.
					</a>
				</div>
			</section>
		</main>
	);
};

export default MainContent;
