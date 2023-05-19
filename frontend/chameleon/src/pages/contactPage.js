const MainContent = () => {
	return (
		<main id="main">
			<section id="contact" class="contact">
				<div class="container">
					<div class="row mt-5">
						<div class="col-lg-4">
							<div class="info">
								<div class="phone">
									<i class="bi bi-phone"></i>
									<h4>Call:</h4>
									<p>+123-6789-100</p>
								</div>
								<div class="email">
									<i class="bi bi-envelope"></i>
									<h4>Email:</h4>
									<p>irifcham@chameleonint.org</p>
								</div>
								<div className="new-line"></div>
								<div class="address">
									<i class="bi bi-geo-alt"></i>
									<h4>Location:</h4>
									<p>Building no : 15</p>
									<p>Street : 206</p>
									<p>Block : 3</p>
									<p>second Floor</p>
									<p>Office No. : 6</p>
									<p>PO box: 1138</p>
								</div>
							</div>
						</div>
						<div class="col-lg-8 mt-5 mt-lg-0">
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
											name="name"
											class="form-control"
											id="name"
											placeholder="Your Name"
											required
										/>
									</div>
									<div class="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="email"
											class="form-control"
											name="email"
											id="email"
											placeholder="Your Email"
											required
										/>
									</div>
								</div>
								<div class="form-group mt-3">
									<input
										type="text"
										class="form-control"
										name="subject"
										id="subject"
										placeholder="Subject"
										required
									/>
								</div>
								<div class="form-group mt-3">
									<textarea
										class="form-control"
										name="message"
										rows="5"
										placeholder="Message"
										required
									></textarea>
								</div>
								<div class="my-3">
									<div class="loading">Loading</div>
									<div class="error-message"></div>
									<div class="sent-message">
										Your message has been sent. Thank you!
									</div>
								</div>
								<div class="text-center">
									<button type="submit">Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default MainContent;
