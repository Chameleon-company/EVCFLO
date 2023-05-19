const Footer = () => {
	return (
		<footer id="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row  justify-content-center">
						<div className="col-lg-6">
							<h3>Sign up for our newsletter</h3>
							<p>
								Get the latest news and expert insights on the
								fast-moving world of electric mobility, straight
								to your inbox.
							</p>
						</div>
					</div>

					<div className="row footer-newsletter justify-content-center">
						<div className="col-lg-6">
							<form>
								<input
									type="email"
									defaultValue=""
									name="email"
									placeholder="Enter your Email"
								/>
								<input type="submit" />
							</form>
						</div>
					</div>

					<div className="social-links">
						<a href="#" className="twitter">
							<i className="bi bi-twitter"></i>
						</a>
						<a href="#" className="facebook">
							<i className="bi bi-facebook"></i>
						</a>
						<a href="#" className="instagram">
							<i className="bi bi-instagram"></i>
						</a>
						<a href="#" className="google-plus">
							<i className="bi bi-skype"></i>
						</a>
						<a href="#" className="linkedin">
							<i className="bi bi-linkedin"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="container footer-bottom clearfix"></div>
		</footer>
	);
};

export default Footer;
